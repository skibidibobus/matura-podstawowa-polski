import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { JsonStore } from '../store.js';
import { handleMonetizationRoute } from '../monetization.js';

function createTestServer(deps = {}) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'matura-monetization-'));
  const store = new JsonStore(path.join(tmpDir, 'db.json'));
  const secret = 'test-secret-key';

  const sendJson = (res, status, payload) => {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(payload));
  };
  const readRawBody = (req) =>
    new Promise((resolve) => {
      const chunks = [];
      req.on('data', (c) => chunks.push(c));
      req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
  const readJsonBody = async (req) => {
    const raw = await readRawBody(req);
    return raw ? JSON.parse(raw) : {};
  };
  const publicUser = (u) => ({
    id: u.id,
    username: u.username,
    displayName: u.displayName,
    role: u.role,
    allowedCourses: u.allowedCourses || [],
  });

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const handled = await handleMonetizationRoute({
      req,
      res,
      pathname: url.pathname,
      method: req.method,
      store,
      secret,
      sendJson,
      readJsonBody,
      readRawBody,
      publicUser,
      deps,
    });
    if (handled === false) sendJson(res, 404, { error: 'Not found' });
  });

  return { server, store, tmpDir };
}

async function reqJson(baseUrl, pathUrl, { method = 'POST', body, headers = {} } = {}) {
  const res = await fetch(`${baseUrl}${pathUrl}`, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  return { status: res.status, data: await res.json() };
}

test('Monetization: Register, Google OAuth, Password Reset, Stripe Webhook & AI Assistant', async (t) => {
  let capturedResetToken = null;
  const { server, store, tmpDir } = createTestServer({
    verifyGoogleToken: async (token) =>
      token === 'valid-google-token'
        ? { email: 'anna@gmail.com', name: 'Anna Kowalska', sub: 'g-123' }
        : null,
    sendResetEmail: async ({ rawToken }) => {
      capturedResetToken = rawToken;
      return { sent: true };
    },
    callGemini: async ({ question }) => `Odpowiedź AI na: ${question}`,
    fetch: async () => ({
      ok: true,
      json: async () => ({ id: 'cs_test_123', url: 'https://checkout.stripe.com/test' }),
    }),
  });

  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;
  t.after(() => {
    server.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  // 1. Register
  const reg = await reqJson(baseUrl, '/api/auth/register', {
    body: { email: 'jan@example.com', password: 'password123', displayName: 'Jan' },
  });
  assert.equal(reg.status, 201);
  assert.ok(reg.data.token);
  assert.equal(reg.data.user.plan, 'free');

  // Duplicate register fails
  const dup = await reqJson(baseUrl, '/api/auth/register', {
    body: { email: 'jan@example.com', password: 'password123' },
  });
  assert.equal(dup.status, 409);

  // 2. Google OAuth
  const googleOk = await reqJson(baseUrl, '/api/auth/google', {
    body: { idToken: 'valid-google-token' },
  });
  assert.equal(googleOk.status, 200);
  assert.equal(googleOk.data.user.username, 'anna@gmail.com');

  // 3. Forgot & Reset Password
  const forgot = await reqJson(baseUrl, '/api/auth/forgot-password', {
    body: { email: 'jan@example.com' },
  });
  assert.equal(forgot.status, 200);
  assert.ok(capturedResetToken);

  const reset = await reqJson(baseUrl, '/api/auth/reset-password', {
    body: { token: capturedResetToken, newPassword: 'newpassword123' },
  });
  assert.equal(reset.status, 200);

  // 4. AI blocked before purchase
  const aiBlocked = await reqJson(baseUrl, '/api/ai/ask', {
    headers: { Authorization: `Bearer ${reg.data.token}` },
    body: { question: 'Co to jest Złoty Rdzeń?' },
  });
  assert.equal(aiBlocked.status, 403);

  // 5. Stripe Checkout + Webhook unlocks course & AI
  process.env.STRIPE_SECRET_KEY = 'sk_test_dummy';
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test_dummy';

  const checkout = await reqJson(baseUrl, '/api/payments/checkout', {
    headers: { Authorization: `Bearer ${reg.data.token}` },
    body: { plan: 'pro' },
  });
  assert.equal(checkout.status, 200);
  assert.equal(checkout.data.url, 'https://checkout.stripe.com/test');

  const webhookPayload = JSON.stringify({
    type: 'checkout.session.completed',
    data: { object: { metadata: { userId: reg.data.user.id, plan: 'pro' } } },
  });
  const ts = Math.floor(Date.now() / 1000);
  const sig = crypto
    .createHmac('sha256', process.env.STRIPE_WEBHOOK_SECRET)
    .update(`${ts}.${webhookPayload}`)
    .digest('hex');

  const whRes = await fetch(`${baseUrl}/api/payments/webhook`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'stripe-signature': `t=${ts},v1=${sig}`,
    },
    body: webhookPayload,
  });
  assert.equal(whRes.status, 200);

  const unlockedUser = store.findUserById(reg.data.user.id);
  assert.equal(unlockedUser.plan, 'pro');
  assert.ok(unlockedUser.allowedCourses.includes('kurs'));

  // 6. AI works after purchase
  const aiOk = await reqJson(baseUrl, '/api/ai/ask', {
    headers: { Authorization: `Bearer ${reg.data.token}` },
    body: { question: 'Wyjaśnij motyw winy w Makbecie' },
  });
  assert.equal(aiOk.status, 200);
  assert.match(aiOk.data.answer, /Odpowiedź AI na:/);
});
