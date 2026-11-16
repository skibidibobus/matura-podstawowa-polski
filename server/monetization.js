import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { hashPassword, signToken, verifyToken } from './auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const COURSE_ROOT = path.resolve(__dirname, '..');

const PLANS = {
  basic: {
    id: 'basic',
    name: 'Pakiet Podstawowy',
    pricePln: 129,
    amountGrosze: 12900,
    courses: ['probna', 'kurs', 'ustna'],
    aiEnabled: false,
  },
  pro: {
    id: 'pro',
    name: 'Pakiet PRO + Asystent AI',
    pricePln: 229,
    amountGrosze: 22900,
    courses: ['probna', 'kurs', 'ustna'],
    aiEnabled: true,
  },
};

const AI_DAILY_LIMIT = 30;
let cachedCourseContext = null;

function loadCourseContext() {
  if (cachedCourseContext !== null) return cachedCourseContext;
  try {
    const files = fs
      .readdirSync(COURSE_ROOT)
      .filter((f) => /^\d{2}_.*\.md$/i.test(f))
      .sort();
    const parts = files.map((file) => {
      const content = fs.readFileSync(path.join(COURSE_ROOT, file), 'utf8');
      return `\n\n=== ${file} ===\n${content}`;
    });
    cachedCourseContext = parts.join('\n').slice(0, 85000);
  } catch {
    cachedCourseContext = '';
  }
  return cachedCourseContext;
}

function getBearerToken(req) {
  const header = req.headers.authorization || '';
  if (!header.startsWith('Bearer ')) return null;
  return header.slice(7).trim();
}

function hashResetToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function verifyStripeSignature(rawBody, signatureHeader, webhookSecret) {
  if (!signatureHeader || !webhookSecret) return false;
  const parts = Object.fromEntries(
    signatureHeader.split(',').map((item) => {
      const [k, v] = item.split('=');
      return [k?.trim(), v?.trim()];
    })
  );
  const timestamp = parts.t;
  const v1 = parts.v1;
  if (!timestamp || !v1) return false;

  const ageSeconds = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(ageSeconds) || ageSeconds > 300) return false;

  const signedPayload = `${timestamp}.${rawBody}`;
  const expected = crypto
    .createHmac('sha256', webhookSecret)
    .update(signedPayload, 'utf8')
    .digest('hex');

  const a = Buffer.from(v1, 'utf8');
  const b = Buffer.from(expected, 'utf8');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

async function defaultVerifyGoogleToken(idToken) {
  const res = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`
  );
  if (!res.ok) return null;
  const data = await res.json();
  const expectedAud = process.env.GOOGLE_CLIENT_ID;
  if (expectedAud && data.aud !== expectedAud) return null;
  if (!data.email || data.email_verified === 'false') return null;
  return {
    email: String(data.email).toLowerCase(),
    name: data.name || data.email.split('@')[0],
    sub: data.sub,
  };
}

async function defaultSendResetEmail({ to, resetUrl }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, reason: 'RESEND_API_KEY_NOT_SET' };
  const from = process.env.EMAIL_FROM || 'Kurs Maturalny <noreply@resend.dev>';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: 'Reset hasła — Kurs Maturalny z Polskiego',
      html: `<p>Otrzymaliśmy prośbę o zmianę hasła.</p><p><a href="${resetUrl}">Kliknij tutaj, aby ustawić nowe hasło</a> (link ważny 15 minut).</p>`,
    }),
  });
  return { sent: res.ok };
}

async function defaultCallGemini({ question, lessonTitle, courseContext }) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY_NOT_SET');
  }
  const systemPrompt = [
    'Jesteś mądrym, konkretnym nauczycielem języka polskiego przygotowującym do matury podstawowej.',
    'Odpowiadaj wyłącznie na podstawie materiałów kursu (Złoty Rdzeń, Matryca Motywów, technika arkusza).',
    'Tłumacz krok po kroku, podawaj kontekst epoki i wskazówki pod klucz CKE. Pisz po polsku, zwięźle i jasno.',
    lessonTitle ? `Aktualna lekcja kursanta: ${lessonTitle}` : '',
    courseContext ? `\nMATERIAŁY KURSU:\n${courseContext}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(
    apiKey
  )}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemPrompt }] },
      contents: [{ role: 'user', parts: [{ text: question }] }],
      generationConfig: { temperature: 0.4, maxOutputTokens: 1024 },
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`GEMINI_ERROR_${res.status}: ${errText.slice(0, 200)}`);
  }
  const data = await res.json();
  return (
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    'Nie udało się wygenerować odpowiedzi.'
  );
}

export async function handleMonetizationRoute({
  req,
  res,
  pathname,
  method,
  store,
  secret,
  sendJson,
  readJsonBody,
  readRawBody,
  publicUser,
  deps = {},
}) {
  const verifyGoogle = deps.verifyGoogleToken || defaultVerifyGoogleToken;
  const sendResetEmail = deps.sendResetEmail || defaultSendResetEmail;
  const callGemini = deps.callGemini || defaultCallGemini;
  const fetchImpl = deps.fetch || fetch;

  // 1. Self-registration (email + password)
  if (pathname === '/api/auth/register' && method === 'POST') {
    const body = await readJsonBody(req);
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    const displayName = String(body.displayName || '').trim() || email.split('@')[0];

    if (!email || !email.includes('@')) {
      return sendJson(res, 400, { error: 'Podaj poprawny adres e-mail.' });
    }
    if (password.length < 8) {
      return sendJson(res, 400, { error: 'Hasło musi mieć minimum 8 znaków.' });
    }
    if (store.findUserByUsername(email)) {
      return sendJson(res, 409, { error: 'Konto z tym adresem e-mail już istnieje.' });
    }

    const user = store.createUser({
      username: email,
      displayName,
      passwordHash: hashPassword(password),
      role: 'student',
      allowedCourses: [],
    });
    user.email = email;
    user.plan = 'free';
    store.persist?.();

    const token = signToken(
      { sub: user.id, role: user.role, username: user.username },
      secret
    );
    return sendJson(res, 201, { token, user: { ...publicUser(user), plan: user.plan } });
  }

  // 2. Google OAuth login
  if (pathname === '/api/auth/google' && method === 'POST') {
    const body = await readJsonBody(req);
    const idToken = String(body.idToken || '').trim();
    if (!idToken) {
      return sendJson(res, 400, { error: 'Brak tokenu Google.' });
    }
    const profile = await verifyGoogle(idToken);
    if (!profile) {
      return sendJson(res, 401, { error: 'Nieprawidłowy token Google.' });
    }

    let user = store.findUserByUsername(profile.email);
    if (!user) {
      user = store.createUser({
        username: profile.email,
        displayName: profile.name,
        passwordHash: hashPassword(crypto.randomBytes(24).toString('hex')),
        role: 'student',
        allowedCourses: [],
      });
      user.email = profile.email;
      user.googleId = profile.sub;
      user.plan = 'free';
      store.persist?.();
    }

    const token = signToken(
      { sub: user.id, role: user.role, username: user.username },
      secret
    );
    return sendJson(res, 200, {
      token,
      user: { ...publicUser(user), plan: user.plan || 'free' },
    });
  }

  // 3. Forgot password
  if (pathname === '/api/auth/forgot-password' && method === 'POST') {
    const body = await readJsonBody(req);
    const email = String(body.email || '').trim().toLowerCase();
    const user = email ? store.findUserByUsername(email) : null;

    if (user && user.role !== 'admin') {
      const rawToken = crypto.randomBytes(32).toString('hex');
      user.resetTokenHash = hashResetToken(rawToken);
      user.resetTokenExpiresAt = Date.now() + 15 * 60 * 1000;
      store.persist?.();

      const appUrl = process.env.APP_URL || 'http://localhost:5173';
      const resetUrl = `${appUrl}/?resetToken=${rawToken}`;
      await sendResetEmail({ to: email, resetUrl, rawToken });
    }

    return sendJson(res, 200, {
      ok: true,
      message: 'Jeśli konto istnieje, wysłaliśmy link do resetu hasła.',
    });
  }

  // 4. Reset password
  if (pathname === '/api/auth/reset-password' && method === 'POST') {
    const body = await readJsonBody(req);
    const rawToken = String(body.token || '').trim();
    const newPassword = String(body.newPassword || '');

    if (!rawToken || newPassword.length < 8) {
      return sendJson(res, 400, {
        error: 'Wymagany poprawny token i hasło (min. 8 znaków).',
      });
    }

    const tokenHash = hashResetToken(rawToken);
    const user = store.data.users.find(
      (u) => u.resetTokenHash === tokenHash && u.resetTokenExpiresAt > Date.now()
    );
    if (!user) {
      return sendJson(res, 400, { error: 'Link do resetu hasła wygasł lub jest nieprawidłowy.' });
    }

    store.updatePassword(user.id, hashPassword(newPassword));
    delete user.resetTokenHash;
    delete user.resetTokenExpiresAt;
    store.persist?.();

    return sendJson(res, 200, { ok: true, message: 'Hasło zostało zmienione.' });
  }

  // 5. Public pricing config
  if (pathname === '/api/payments/config' && method === 'GET') {
    return sendJson(res, 200, {
      enabled: Boolean(process.env.STRIPE_SECRET_KEY),
      plans: PLANS,
    });
  }

  // 6. Create Stripe Checkout Session
  if (pathname === '/api/payments/checkout' && method === 'POST') {
    const token = getBearerToken(req);
    const payload = token ? verifyToken(token, secret) : null;
    if (!payload) return sendJson(res, 401, { error: 'Wymagane logowanie.' });

    const user = store.findUserById(payload.sub);
    if (!user) return sendJson(res, 401, { error: 'Nie znaleziono użytkownika.' });

    const body = await readJsonBody(req);
    const plan = PLANS[body.plan];
    if (!plan) return sendJson(res, 400, { error: 'Nieznany pakiet.' });

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return sendJson(res, 503, { error: 'Płatności nie są jeszcze skonfigurowane.' });
    }

    const appUrl = process.env.APP_URL || 'http://localhost:5173';
    const params = new URLSearchParams({
      mode: 'payment',
      'payment_method_types[0]': 'card',
      'payment_method_types[1]': 'blik',
      'payment_method_types[2]': 'p24',
      'line_items[0][price_data][currency]': 'pln',
      'line_items[0][price_data][product_data][name]': plan.name,
      'line_items[0][price_data][unit_amount]': String(plan.amountGrosze),
      'line_items[0][quantity]': '1',
      success_url: `${appUrl}/?payment=success`,
      cancel_url: `${appUrl}/?payment=cancel`,
      'metadata[userId]': user.id,
      'metadata[plan]': plan.id,
    });

    const stripeRes = await fetchImpl('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
    const session = await stripeRes.json();
    if (!stripeRes.ok) {
      return sendJson(res, 502, { error: session?.error?.message || 'Błąd Stripe.' });
    }
    return sendJson(res, 200, { url: session.url, sessionId: session.id });
  }

  // 7. Stripe Webhook
  if (pathname === '/api/payments/webhook' && method === 'POST') {
    const rawBody = await readRawBody(req);
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!verifyStripeSignature(rawBody, sig, webhookSecret)) {
      return sendJson(res, 400, { error: 'Invalid Stripe signature' });
    }

    const event = JSON.parse(rawBody);
    if (event.type === 'checkout.session.completed') {
      const session = event.data?.object || {};
      const userId = session.metadata?.userId;
      const planId = session.metadata?.plan || 'basic';
      const plan = PLANS[planId] || PLANS.basic;
      const user = userId ? store.findUserById(userId) : null;

      if (user) {
        const mergedCourses = Array.from(
          new Set([...(user.allowedCourses || []), ...plan.courses])
        );
        store.updateAllowedCourses(user.id, mergedCourses);
        user.plan = plan.id;
        store.persist?.();
        store.addLog({
          type: 'payment',
          userId: user.id,
          username: user.username,
          displayName: user.displayName,
          message: `Zakupiono ${plan.name} (${plan.pricePln} PLN)`,
        });
      }
    }

    return sendJson(res, 200, { received: true });
  }

  // 8. AI Course Assistant
  if (pathname === '/api/ai/ask' && method === 'POST') {
    const token = getBearerToken(req);
    const payload = token ? verifyToken(token, secret) : null;
    if (!payload) return sendJson(res, 401, { error: 'Wymagane logowanie.' });

    const user = store.findUserById(payload.sub);
    if (!user) return sendJson(res, 401, { error: 'Nie znaleziono użytkownika.' });

    const hasAiAccess =
      user.role === 'admin' ||
      user.plan === 'pro' ||
      (user.allowedCourses || []).includes('kurs');
    if (!hasAiAccess) {
      return sendJson(res, 403, {
        error: 'Asystent AI jest dostępny dla kursantów z aktywnym dostępem.',
      });
    }

    const today = new Date().toISOString().slice(0, 10);
    if (user.aiUsageDate !== today) {
      user.aiUsageDate = today;
      user.aiUsageCount = 0;
    }
    if (user.role !== 'admin' && user.aiUsageCount >= AI_DAILY_LIMIT) {
      return sendJson(res, 429, {
        error: `Osiągnięto dzienny limit (${AI_DAILY_LIMIT} pytań). Wróć jutro!`,
      });
    }

    const body = await readJsonBody(req);
    const question = String(body.question || '').trim();
    const lessonTitle = String(body.lessonTitle || '').trim();
    if (!question || question.length > 2000) {
      return sendJson(res, 400, { error: 'Pytanie musi mieć od 1 do 2000 znaków.' });
    }

    try {
      const courseContext = loadCourseContext();
      const answer = await callGemini({ question, lessonTitle, courseContext });
      user.aiUsageCount = (user.aiUsageCount || 0) + 1;
      store.persist?.();
      return sendJson(res, 200, {
        answer,
        remainingToday:
          user.role === 'admin' ? 999 : Math.max(0, AI_DAILY_LIMIT - user.aiUsageCount),
      });
    } catch (err) {
      return sendJson(res, 503, {
        error:
          err.message === 'GEMINI_API_KEY_NOT_SET'
            ? 'Asystent AI nie jest jeszcze skonfigurowany.'
            : 'Błąd połączenia z Asystentem AI.',
      });
    }
  }

  return false;
}
