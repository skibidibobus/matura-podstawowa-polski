const API_URL_STORAGE_KEY = 'matura-polski-api-url';
const DEFAULT_PRODUCTION_API_URL = 'https://matura-polski-backend.onrender.com';

export function getApiBaseUrl() {
  try {
    const saved = localStorage.getItem(API_URL_STORAGE_KEY);
    if (saved && saved.trim()) return saved.trim().replace(/\/+$/, '');
  } catch {
    // Ignore storage access errors
  }
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl && String(envUrl).trim()) return String(envUrl).trim().replace(/\/+$/, '');
  if (
    typeof window !== 'undefined' &&
    window.location?.hostname &&
    window.location.hostname !== 'localhost' &&
    window.location.hostname !== '127.0.0.1'
  ) {
    return DEFAULT_PRODUCTION_API_URL;
  }
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

async function apiRequest(path, { method = 'GET', token = '', body = null, keepalive = false } = {}) {
  const base = getApiBaseUrl();
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  let res;
  try {
    res = await fetch(`${base}${path}`, {
      method,
      headers,
      body: body !== null ? JSON.stringify(body) : undefined,
      keepalive,
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
    apiRequest('/api/progress', { method: 'PUT', token, body: { progress }, keepalive: true }),
  getPublicLeaderboard: (course = 'all') =>
    apiRequest(`/api/public/leaderboard?course=${encodeURIComponent(course)}`),
  getLeaderboard: (token) => apiRequest('/api/leaderboard', { token }),
  listUsers: (token) => apiRequest('/api/admin/users', { token }),
  createUser: (token, payload) =>
    apiRequest('/api/admin/users', { method: 'POST', token, body: payload }),
  resetUserPassword: (token, userId) =>
    apiRequest(`/api/admin/users/${encodeURIComponent(userId)}/reset-password`, {
      method: 'POST',
      token,
      body: {},
    }),
  resetUserProgress: (token, userId) =>
    apiRequest(`/api/admin/users/${encodeURIComponent(userId)}/reset-progress`, {
      method: 'POST',
      token,
      body: {},
    }),
  updateUserCourses: (token, userId, allowedCourses, options = {}) =>
    apiRequest(`/api/admin/users/${encodeURIComponent(userId)}/courses`, {
      method: 'POST',
      token,
      body: {
        ...(allowedCourses !== undefined ? { allowedCourses } : {}),
        ...(options || {}),
      },
    }),
  deleteUser: (token, userId) =>
    apiRequest(`/api/admin/users/${encodeURIComponent(userId)}`, {
      method: 'DELETE',
      token,
    }),
  listLogs: (token, type = '') =>
    apiRequest(`/api/admin/logs${type ? `?type=${encodeURIComponent(type)}` : ''}`, { token }),
  clearLogs: (token) =>
    apiRequest('/api/admin/logs', {
      method: 'DELETE',
      token,
    }),
  exportBackup: (token) => apiRequest('/api/admin/backup', { token }),
  importBackup: (token, backup) =>
    apiRequest('/api/admin/backup', { method: 'POST', token, body: { backup } }),
};
