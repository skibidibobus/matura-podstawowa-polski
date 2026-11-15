import { useEffect, useState } from 'react';
import { Check, Copy, KeyRound, LogOut, RefreshCw, Shield, Trash2, UserPlus, Users, X } from 'lucide-react';
import { apiClient } from '../api/client';

export function AccountModal({
  isOpen,
  onClose,
  authSession,
  syncStatus,
  onLoginSuccess,
  onLogout,
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Admin state
  const [users, setUsers] = useState([]);
  const [newDisplayName, setNewDisplayName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [generatedCreds, setGeneratedCreds] = useState(null);
  const [copiedCreds, setCopiedCreds] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setError('');
    if (authSession?.user?.role === 'admin' && authSession?.token) {
      loadUsers(authSession.token);
    }
  }, [isOpen, authSession]);

  if (!isOpen) return null;

  const loadUsers = async (token) => {
    try {
      const data = await apiClient.listUsers(token);
      setUsers(data.users || []);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await apiClient.login(username.trim(), password);
      setUsername('');
      setPassword('');
      onLoginSuccess(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateStudent = async (e) => {
    e.preventDefault();
    if (!authSession?.token) return;
    setError('');
    setLoading(true);
    try {
      const data = await apiClient.createUser(authSession.token, {
        displayName: newDisplayName.trim(),
        username: newUsername.trim() || undefined,
        password: newPassword.trim() || undefined,
      });
      setGeneratedCreds({
        displayName: data.user.displayName,
        username: data.user.username,
        password: data.plainPassword,
      });
      setCopiedCreds(false);
      setNewDisplayName('');
      setNewUsername('');
      setNewPassword('');
      await loadUsers(authSession.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (user) => {
    if (!authSession?.token) return;
    setError('');
    try {
      const data = await apiClient.resetUserPassword(authSession.token, user.id);
      setGeneratedCreds({
        displayName: data.user.displayName,
        username: data.user.username,
        password: data.plainPassword,
      });
      setCopiedCreds(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (user) => {
    if (!authSession?.token) return;
    setError('');
    try {
      await apiClient.deleteUser(authSession.token, user.id);
      await loadUsers(authSession.token);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopyCreds = () => {
    if (!generatedCreds) return;
    const text = `Matura Podstawowa z Polskiego — Dane do logowania:\nUczeń: ${generatedCreds.displayName}\nLogin: ${generatedCreds.username}\nHasło: ${generatedCreds.password}`;
    navigator.clipboard?.writeText(text);
    setCopiedCreds(true);
    setTimeout(() => setCopiedCreds(false), 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Konto i synchronizacja">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <h2 className="modal-title">
              {authSession ? `Konto: ${authSession.user.displayName}` : 'Logowanie do konta'}
            </h2>
            <p className="modal-sub">
              {authSession
                ? `Zalogowano jako @${authSession.user.username} • ${syncStatus || 'Zsynchronizowano'}`
                : 'Bez logowania uczysz się lokalnie — Twój dotychczasowy postęp zostaje w przeglądarce.'}
            </p>
          </div>
          <button type="button" className="theme-btn" onClick={onClose} aria-label="Zamknij okno konta">
            <X size={17} />
          </button>
        </div>

        {error && <div className="modal-error">{error}</div>}

        {!authSession ? (
          <form onSubmit={handleLogin} className="modal-form">
            <label className="field-label">
              Login
              <input
                type="text"
                className="field-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="np. admin lub uczen-1234"
                autoComplete="username"
                required
              />
            </label>
            <label className="field-label">
              Hasło
              <input
                type="password"
                className="field-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Wpisz hasło"
                autoComplete="current-password"
                required
              />
            </label>

            <div className="modal-actions">
              <button type="button" className="secondary-btn" onClick={onClose}>
                Zostań w trybie lokalnym
              </button>
              <button type="submit" className="primary-btn" disabled={loading}>
                <KeyRound size={16} />
                {loading ? 'Logowanie...' : 'Zaloguj się'}
              </button>
            </div>
          </form>
        ) : (
          <div className="modal-body-stack">
            <div className="account-summary-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Shield size={16} style={{ color: 'var(--accent)' }} />
                <span>
                  Rola: <strong>{authSession.user.role === 'admin' ? 'Administrator' : 'Uczeń'}</strong>
                </span>
              </div>
              <button type="button" className="secondary-btn" onClick={onLogout}>
                <LogOut size={15} />
                Wyloguj (wróć do trybu lokalnego)
              </button>
            </div>

            {authSession.user.role === 'admin' && (
              <div className="admin-panel">
                <h3 className="admin-heading">
                  <UserPlus size={16} />
                  Generator kont dla uczniów
                </h3>
                <p className="admin-desc">
                  Podaj imię ucznia (opcjonalnie własny login/hasło) — puste pola wygenerują się automatycznie.
                </p>

                <form onSubmit={handleCreateStudent} className="admin-create-grid">
                  <input
                    type="text"
                    className="field-input"
                    value={newDisplayName}
                    onChange={(e) => setNewDisplayName(e.target.value)}
                    placeholder="Imię / opis (np. Kasia)"
                  />
                  <input
                    type="text"
                    className="field-input"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Login (auto)"
                  />
                  <input
                    type="text"
                    className="field-input"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Hasło (auto)"
                  />
                  <button type="submit" className="primary-btn" disabled={loading}>
                    <UserPlus size={15} />
                    Wygeneruj konto
                  </button>
                </form>

                {generatedCreds && (
                  <div className="creds-box">
                    <div>
                      <div className="creds-title">Wygenerowane dane logowania ({generatedCreds.displayName}):</div>
                      <div className="creds-line">
                        Login: <code>{generatedCreds.username}</code> • Hasło: <code>{generatedCreds.password}</code>
                      </div>
                    </div>
                    <button type="button" className="secondary-btn" onClick={handleCopyCreds}>
                      {copiedCreds ? <Check size={14} /> : <Copy size={14} />}
                      {copiedCreds ? 'Skopiowano!' : 'Kopiuj'}
                    </button>
                  </div>
                )}

                <h4 className="admin-subheading">
                  <Users size={15} />
                  Konta w bazie ({users.length})
                </h4>
                <div className="users-list">
                  {users.map((u) => (
                    <div key={u.id} className="user-row">
                      <div>
                        <div className="user-row-name">
                          <strong>{u.displayName}</strong> <span>(@{u.username})</span>
                          {u.role === 'admin' && <span className="note-badge">admin</span>}
                        </div>
                        <div className="user-row-stats">
                          Notatki: {u.stats?.notesCount || 0} • Fiszki: {u.stats?.knownCards || 0} • Quizy: {u.stats?.quizzesTaken || 0}
                        </div>
                      </div>
                      {u.role !== 'admin' && (
                        <div className="user-row-actions">
                          <button
                            type="button"
                            className="check-note-btn"
                            onClick={() => handleResetPassword(u)}
                            title="Wygeneruj nowe hasło"
                          >
                            <RefreshCw size={13} />
                            Nowe hasło
                          </button>
                          <button
                            type="button"
                            className="check-note-btn danger"
                            onClick={() => handleDeleteUser(u)}
                            title="Usuń konto"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
