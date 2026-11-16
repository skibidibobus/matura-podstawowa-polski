const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

async function request(path, { method = 'GET', body, token } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || `Błąd serwera (${res.status})`);
  }
  return data;
}

export const isMonetizationEnabled = () =>
  import.meta.env.VITE_ENABLE_MONETIZATION === 'true';

export function registerUser({ email, password, displayName }) {
  return request('/api/auth/register', {
    method: 'POST',
    body: { email, password, displayName },
  });
}

export function loginWithGoogle(idToken) {
  return request('/api/auth/google', {
    method: 'POST',
    body: { idToken },
  });
}

export function forgotPassword(email) {
  return request('/api/auth/forgot-password', {
    method: 'POST',
    body: { email },
  });
}

export function resetPassword({ token, newPassword }) {
  return request('/api/auth/reset-password', {
    method: 'POST',
    body: { token, newPassword },
  });
}

export function getPaymentConfig() {
  return request('/api/payments/config');
}

export function createCheckoutSession(token, plan) {
  return request('/api/payments/checkout', {
    method: 'POST',
    token,
    body: { plan },
  });
}

export function askAiAssistant(token, { question, lessonTitle = '' }) {
  return request('/api/ai/ask', {
    method: 'POST',
    token,
    body: { question, lessonTitle },
  });
}
