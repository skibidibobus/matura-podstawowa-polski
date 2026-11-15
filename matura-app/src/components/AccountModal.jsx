import { useEffect, useRef, useState } from 'react';
import {
  Activity,
  Check,
  Copy,
  Download,
  KeyRound,
  LogOut,
  RefreshCw,
  RotateCcw,
  Shield,
  Trash2,
  Trophy,
  Upload,
  UserPlus,
  X,
} from 'lucide-react';
import { apiClient } from '../api/client';

const LOG_TYPE_META = {
  login: { label: 'Logowanie', tone: 'ok' },
  login_failed: { label: 'Błąd logowania', tone: 'danger' },
  progress_sync: { label: 'Postęp', tone: 'accent' },
  user_created: { label: 'Nowe konto', tone: 'ok' },
  password_reset: { label: 'Reset hasła', tone: 'warn' },
  progress_reset: { label: 'Reset postępu', tone: 'warn' },
  courses_updated: { label: 'Dostęp do kursów', tone: 'accent' },
  user_deleted: { label: 'Usunięto konto', tone: 'danger' },
};

const ALL_COURSES_LIST = [
  { id: 'probna', label: 'Sprint 7h' },
  { id: 'kurs', label: 'Kurs Główny' },
  { id: 'ustna', label: 'Matura Ustna' },
];

const COURSE_LABELS = {
  probna: 'Sprint 7h',
  kurs: 'Kurs Główny',
  ustna: 'Matura Ustna',
};

function formatDateTime(iso) {
  if (!iso) return 'brak aktywności';
  try {
    return new Date(iso).toLocaleString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return iso;
  }
}

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
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(false);

  // Admin & ranking state
  const [adminTab, setAdminTab] = useState('ranking'); // 'ranking' | 'logs'
  const [leaderboard, setLeaderboard] = useState([]);
  const [logs, setLogs] = useState([]);
  const [logFilter, setLogFilter] = useState('');
  const [newDisplayName, setNewDisplayName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [generatedCreds, setGeneratedCreds] = useState(null);
  const [copiedCreds, setCopiedCreds] = useState(false);
  const backupInputRef = useRef(null);

  const isAdmin = authSession?.user?.role === 'admin';

  useEffect(() => {
    if (!isOpen) return;
    setError('');
    setNotice('');
    if (!authSession?.token) return;

    loadLeaderboard(authSession.token);
    if (authSession?.user?.role === 'admin') {
      loadLogs(authSession.token, logFilter);
    }
  }, [isOpen, authSession]);

  if (!isOpen) return null;

  const loadLeaderboard = async (token) => {
    try {
      const data = await apiClient.getLeaderboard(token);
      setLeaderboard(data.leaderboard || []);
    } catch (err) {
      setError(err.message);
    }
  };

  const loadLogs = async (token, type = '') => {
    try {
      const data = await apiClient.listLogs(token, type);
      setLogs(data.logs || []);
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
    setNotice('');
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
      await Promise.all([
        loadLeaderboard(authSession.token),
        loadLogs(authSession.token, logFilter),
      ]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (user) => {
    if (!authSession?.token) return;
    setError('');
    setNotice('');
    try {
      const data = await apiClient.resetUserPassword(authSession.token, user.id);
      setGeneratedCreds({
        displayName: data.user.displayName,
        username: data.user.username,
        password: data.plainPassword,
      });
      setCopiedCreds(false);
      await loadLogs(authSession.token, logFilter);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleResetProgress = async (user) => {
    if (!authSession?.token) return;
    setError('');
    setNotice('');
    try {
      await apiClient.resetUserProgress(authSession.token, user.id);
      setNotice(`Wyzerowano postęp użytkownika ${user.displayName} (@${user.username}).`);
      await Promise.all([
        loadLeaderboard(authSession.token),
        loadLogs(authSession.token, logFilter),
      ]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (user) => {
    if (!authSession?.token) return;
    setError('');
    setNotice('');
    try {
      await apiClient.deleteUser(authSession.token, user.id);
      setNotice(`Usunięto konto ${user.displayName} (@${user.username}).`);
      await Promise.all([
        loadLeaderboard(authSession.token),
        loadLogs(authSession.token, logFilter),
      ]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleToggleCourseAccess = async (user, courseId) => {
    if (!authSession?.token) return;
    setError('');
    setNotice('');
    const current = Array.isArray(user.allowedCourses) ? user.allowedCourses : [];
    const next = current.includes(courseId)
      ? current.filter((c) => c !== courseId)
      : [...current, courseId];
    try {
      await apiClient.updateUserCourses(authSession.token, user.id, next);
      await Promise.all([
        loadLeaderboard(authSession.token),
        loadLogs(authSession.token, logFilter),
      ]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClearLogs = async () => {
    if (!authSession?.token) return;
    setError('');
    try {
      await apiClient.clearLogs(authSession.token);
      setLogs([]);
      setNotice('Wyczyszczono logi aktywności.');
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

  const handleExportBackup = async () => {
    if (!authSession?.token) return;
    setError('');
    try {
      const data = await apiClient.exportBackup(authSession.token);
      const blob = new Blob([JSON.stringify(data.backup, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `matura-polski-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setNotice('Pobrano kopię zapasową wszystkich kont i postępów.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleImportBackup = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !authSession?.token) return;
    setError('');
    setNotice('');
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const res = await apiClient.importBackup(authSession.token, parsed);
      setNotice(
        `Przywrócono kopię: dodano ${res.importedUsers} nowych kont, zaktualizowano postęp: ${res.updatedProgress} (istniejące konta zachowane).`
      );
      await Promise.all([
        loadLeaderboard(authSession.token),
        loadLogs(authSession.token, logFilter),
      ]);
    } catch (err) {
      setError(err.message || 'Nie udało się wgrać kopii zapasowej.');
    }
  };

  const maxLeaderboardXp = Math.max(100, ...leaderboard.map((u) => u.stats?.xp || 0));
  const totalClassXp = leaderboard.reduce((sum, u) => sum + (u.stats?.xp || 0), 0);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Konto i synchronizacja">
      <div className={`modal-card ${authSession ? 'modal-card-wide' : ''}`} onClick={(e) => e.stopPropagation()}>
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
        {notice && <div className="modal-notice">{notice}</div>}

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
                  Rola: <strong>{isAdmin ? 'Administrator' : 'Uczeń'}</strong>
                </span>
              </div>
              <button type="button" className="secondary-btn" onClick={onLogout}>
                <LogOut size={15} />
                Wyloguj (wróć do trybu lokalnego)
              </button>
            </div>

            {isAdmin && (
              <div className="admin-tabs" role="tablist" aria-label="Sekcje panelu administratora">
                <button
                  type="button"
                  role="tab"
                  aria-selected={adminTab === 'ranking'}
                  className={`admin-tab ${adminTab === 'ranking' ? 'active' : ''}`}
                  onClick={() => {
                    setAdminTab('ranking');
                    loadLeaderboard(authSession.token);
                  }}
                >
                  <Trophy size={15} />
                  Ranking i zarządzanie ({leaderboard.length})
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={adminTab === 'logs'}
                  className={`admin-tab ${adminTab === 'logs' ? 'active' : ''}`}
                  onClick={() => {
                    setAdminTab('logs');
                    loadLogs(authSession.token, logFilter);
                  }}
                >
                  <Activity size={15} />
                  Logi aktywności ({logs.length})
                </button>
              </div>
            )}

            {(!isAdmin || adminTab === 'ranking') && (
              <div className="admin-panel">
                {isAdmin && (
                  <>
                    <div className="admin-kpi-strip">
                      <div className="admin-kpi-chip">
                        <span>Uczniowie (bez admina)</span>
                        <strong>{leaderboard.length}</strong>
                      </div>
                      <div className="admin-kpi-chip">
                        <span>Łączne XP grupy</span>
                        <strong>{totalClassXp} XP</strong>
                      </div>
                      <div className="admin-kpi-chip">
                        <span>Lider rankingu</span>
                        <strong>{leaderboard[0] ? leaderboard[0].displayName : '—'}</strong>
                      </div>
                    </div>

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
                  </>
                )}

                <div className="admin-section-header">
                  <h4 className="admin-subheading" style={{ margin: 0 }}>
                    <Trophy size={15} />
                    Ranking uczniów (bez admina)
                  </h4>
                  <div className="user-row-actions">
                    <button
                      type="button"
                      className="check-note-btn"
                      onClick={handleExportBackup}
                      title="Pobierz kopię wszystkich kont i postępów (.json)"
                    >
                      <Download size={12} />
                      Kopia (.json)
                    </button>
                    <button
                      type="button"
                      className="check-note-btn"
                      onClick={() => backupInputRef.current?.click()}
                      title="Wgraj kopię zapasową (bez usuwania obecnych kont)"
                    >
                      <Upload size={12} />
                      Wgraj kopię
                    </button>
                    <input
                      ref={backupInputRef}
                      type="file"
                      accept="application/json,.json"
                      style={{ display: 'none' }}
                      onChange={handleImportBackup}
                    />
                    <button
                      type="button"
                      className="check-note-btn"
                      onClick={() => loadLeaderboard(authSession.token)}
                    >
                      <RefreshCw size={12} />
                      Odśwież
                    </button>
                  </div>
                </div>

                {leaderboard.length === 0 ? (
                  <div className="empty-state-box">
                    Brak kont uczniowskich w bazie. {isAdmin ? 'Wygeneruj pierwsze konto powyżej.' : ''}
                  </div>
                ) : (
                  <div className="ranking-list">
                    {leaderboard.map((u) => {
                      const xp = u.stats?.xp || 0;
                      const pct = Math.min(100, Math.round((xp / maxLeaderboardXp) * 100));
                      const isSelf = u.id === authSession.user.id;
                      const rankClass = u.rank <= 3 ? `rank-${u.rank}` : '';
                      return (
                        <div key={u.id} className={`ranking-row ${isSelf ? 'is-self' : ''}`}>
                          <div className="ranking-row-main">
                            <div className={`rank-badge ${rankClass}`}>#{u.rank}</div>
                            <div className="ranking-user-info">
                              <div className="user-row-name">
                                <strong>{u.displayName}</strong>
                                <span>(@{u.username})</span>
                                {isSelf && <span className="note-badge">Ty</span>}
                                <span className="xp-pill">{xp} XP</span>
                              </div>
                              <div className="ranking-progress-track" aria-hidden="true">
                                <div className="ranking-progress-fill" style={{ width: `${pct}%` }} />
                              </div>
                              <div className="user-row-stats">
                                Notatki: <strong>{u.stats?.notesCount || 0}</strong> • Fiszki umiem:{' '}
                                <strong>{u.stats?.knownCards || 0}</strong> (powt. {u.stats?.reviewCards || 0}) •
                                Quizy: <strong>{u.stats?.quizzesTaken || 0}</strong> • Kurs:{' '}
                                {COURSE_LABELS[u.stats?.activeCourse] || u.stats?.activeCourse || '—'} • Ost. akt.:{' '}
                                {formatDateTime(u.stats?.updatedAt)}
                              </div>
                            </div>
                          </div>

                          {isAdmin && (
                            <>
                              <div className="course-access-row">
                                <span className="course-access-label">Dostęp do kursów:</span>
                                {ALL_COURSES_LIST.map((c) => {
                                  const enabled = (u.allowedCourses || []).includes(c.id);
                                  return (
                                    <button
                                      key={c.id}
                                      type="button"
                                      className={`course-access-pill ${enabled ? 'enabled' : ''}`}
                                      onClick={() => handleToggleCourseAccess(u, c.id)}
                                      aria-pressed={enabled}
                                      title={enabled ? `Zablokuj ${c.label}` : `Odblokuj ${c.label}`}
                                    >
                                      {enabled ? '✓ ' : '+ '}
                                      {c.label}
                                    </button>
                                  );
                                })}
                              </div>
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
                                className="check-note-btn"
                                onClick={() => handleResetProgress(u)}
                                title="Wyzeruj postęp ucznia"
                              >
                                <RotateCcw size={13} />
                                Reset postępu
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
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {isAdmin && adminTab === 'logs' && (
              <div className="admin-panel">
                <div className="logs-toolbar">
                  <select
                    className="field-input logs-filter-select"
                    value={logFilter}
                    onChange={(e) => {
                      const next = e.target.value;
                      setLogFilter(next);
                      loadLogs(authSession.token, next);
                    }}
                    aria-label="Filtruj typ logów"
                  >
                    <option value="">Wszystkie zdarzenia</option>
                    <option value="login">Logowania</option>
                    <option value="login_failed">Nieudane logowania</option>
                    <option value="progress_sync">Zmiany postępu</option>
                    <option value="user_created">Utworzone konta</option>
                    <option value="password_reset">Resety haseł</option>
                    <option value="progress_reset">Resety postępu</option>
                    <option value="courses_updated">Zmiany dostępu</option>
                    <option value="user_deleted">Usunięte konta</option>
                  </select>

                  <div className="user-row-actions">
                    <button
                      type="button"
                      className="check-note-btn"
                      onClick={() => loadLogs(authSession.token, logFilter)}
                    >
                      <RefreshCw size={13} />
                      Odśwież
                    </button>
                    <button
                      type="button"
                      className="check-note-btn danger"
                      onClick={handleClearLogs}
                      disabled={logs.length === 0}
                    >
                      <Trash2 size={13} />
                      Wyczyść logi
                    </button>
                  </div>
                </div>

                {logs.length === 0 ? (
                  <div className="empty-state-box">Brak zapisanych logów aktywności.</div>
                ) : (
                  <div className="logs-list">
                    {logs.map((log) => {
                      const meta = LOG_TYPE_META[log.type] || { label: log.type, tone: 'neutral' };
                      return (
                        <div key={log.id} className="log-row">
                          <div className="log-row-head">
                            <span className={`log-badge tone-${meta.tone}`}>{meta.label}</span>
                            <span className="log-user">
                              {log.displayName || log.username || 'System'}
                              {log.username ? ` (@${log.username})` : ''}
                            </span>
                            <span className="log-time">{formatDateTime(log.timestamp)}</span>
                          </div>
                          <div className="log-message">{log.message}</div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
