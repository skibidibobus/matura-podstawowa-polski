const API_URL_STORAGE_KEY = 'matura-polski-api-url';

export function getApiBaseUrl() {
  try {
    const saved = localStorage.getItem(API_URL_STORAGE_KEY);
    if (saved && saved.trim()) return saved.trim().replace(/\/+$/, '');
  } catch {
    // Ignore storage access errors
  }
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl && String(envUrl).trim()) return String(envUrl).trim().replace(/\/+$/, '');
  return '';
}

export function setCustomApiBaseUrl(url) {
  try {
    const clean = String(url || '').trim().replace(/\/+$/, '');
    if (clean) localStorage.setItem(API_URL_STORAGE_KEY, clean);
    else localStorage.removeItem(API_URL_STORAGE_KEY);
  } catch {
    // Ignore storage access errors
  }
}

async function apiRequest(path, { method = 'GET', token = '', body = null } = {}) {
  const base = getApiBaseUrl();
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  let res;
  try {
    res = await fetch(`${base}${path}`, {
      method,
      headers,
      body: body !== null ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error('Brak połączenia z serwerem backendu. Upewnij się, że serwer działa lub podaj jego adres URL.');
  }

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw new Error(data?.error || `Błąd serwera (${res.status})`);
  }
  return data;
}

export const apiClient = {
  login: (username, password) =>
    apiRequest('/api/auth/login', { method: 'POST', body: { username, password } }),
  getMe: (token) => apiRequest('/api/auth/me', { token }),
  getProgress: (token) => apiRequest('/api/progress', { token }),
  saveProgress: (token, progress) =>
    apiRequest('/api/progress', { method: 'PUT', token, body: { progress } }),
  listUsers: (token) => apiRequest('/api/admin/users', { token }),
  createUser: (token, payload) =>
    apiRequest('/api/admin/users', { method: 'POST', token, body: payload }),
  resetUserPassword: (token, userId) =>
    apiRequest(`/api/admin/users/${encodeURIComponent(userId)}/reset-password`, {
      method: 'POST',
      token,
      body: {},
    }),
  deleteUser: (token, userId) =>
    apiRequest(`/api/admin/users/${encodeURIComponent(userId)}`, {
      method: 'DELETE',
      token,
    }),
};
