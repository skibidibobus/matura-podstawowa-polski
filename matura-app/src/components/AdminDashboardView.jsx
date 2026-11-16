import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Activity,
  BarChart3,
  BookOpen,
  Check,
  Copy,
  Download,
  Eye,
  KeyRound,
  Layers,
  RefreshCw,
  RotateCcw,
  Search,
  Shield,
  Trash2,
  Trophy,
  Upload,
  UserPlus,
  Users,
} from 'lucide-react';
import { apiClient } from '../api/client';
import { LEVELS } from '../data/levels';
import { KURS_PODSTAWOWY_LEVELS } from '../data/kursPodstawowyLevels';
import { ORAL_LEVELS } from '../data/oralLevels';

const COURSES_META = [
  { id: 'probna', label: 'Matura Próbna (7h)', shortLabel: 'Sprint 7h', levels: LEVELS },
  { id: 'kurs', label: 'Kurs Główny', shortLabel: 'Kurs Główny', levels: KURS_PODSTAWOWY_LEVELS },
  { id: 'ustna', label: 'Matura Ustna', shortLabel: 'Matura Ustna', levels: ORAL_LEVELS },
];

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

function formatDateTime(iso) {
  if (!iso) return 'brak aktywności';
  try {
    return new Date(iso).toLocaleString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return iso;
  }
}

function computeCourseTotals(levels) {
  const noteIds = new Set();
  const cardIds = new Set();
  const quizIds = [];
  for (const lvl of levels || []) {
    for (const n of lvl.notes || []) noteIds.add(n.id);
    for (const f of lvl.flashcards || []) cardIds.add(f.id);
    if ((lvl.quiz || []).length > 0) quizIds.push(lvl.id);
  }
  return {
    notesCount: noteIds.size,
    cardsCount: cardIds.size,
    quizzesCount: quizIds.length,
    noteIds,
    cardIds,
    quizIds,
  };
}

function computeUserCourseBreakdown(progress, courseTotals) {
  const checkedNotes = progress?.checkedNotes || {};
  const cardStatus = progress?.cardStatus || {};
  const quizScores = progress?.quizScores || {};
  const quizAttempts = progress?.quizAttempts || {};

  let notesRead = 0;
  for (const id of courseTotals.noteIds) {
    if (checkedNotes[id]) notesRead += 1;
  }

  let cardsKnown = 0;
  let cardsReview = 0;
  for (const id of courseTotals.cardIds) {
    if (cardStatus[id] === 'known') cardsKnown += 1;
    else if (cardStatus[id] === 'review') cardsReview += 1;
  }

  let quizzesCompleted = 0;
  let attempts = 0;
  for (const lvlId of courseTotals.quizIds) {
    if (typeof quizScores[lvlId] === 'number' || (quizAttempts[lvlId] || 0) > 0) {
      quizzesCompleted += 1;
    }
    attempts += quizAttempts[lvlId] || 0;
  }

  const totalUnits = courseTotals.notesCount + courseTotals.cardsCount + courseTotals.quizzesCount;
  const doneUnits = notesRead + cardsKnown + quizzesCompleted;
  const pct = totalUnits > 0 ? Math.round((doneUnits / totalUnits) * 100) : 0;

  return {
    notesRead,
    cardsKnown,
    cardsReview,
    quizzesCompleted,
    attempts,
    pct,
  };
}

export function AdminDashboardView({
  token,
  currentUser,
  onImpersonateUser,
}) {
  const [subTab, setSubTab] = useState('stats'); // 'stats' | 'users' | 'logs'
  const [users, setUsers] = useState([]);
  const [progressByUserId, setProgressByUserId] = useState({});
  const [logs, setLogs] = useState([]);
  const [persistence, setPersistence] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [logFilter, setLogFilter] = useState('');

  // Create user state
  const [newName, setNewName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newDuration, setNewDuration] = useState('14');
  const [creating, setCreating] = useState(false);
  const [generatedCreds, setGeneratedCreds] = useState(null);
  const [copiedCreds, setCopiedCreds] = useState(false);
  const [busyUserId, setBusyUserId] = useState('');
  const backupInputRef = useRef(null);

  const courseTotalsMap = useMemo(() => {
    const map = {};
    for (const c of COURSES_META) {
      map[c.id] = computeCourseTotals(c.levels);
    }
    return map;
  }, []);

  const loadAllData = async () => {
    if (!token) return;
    setLoading(true);
    setError('');
    try {
      const [usersRes, backupRes, logsRes] = await Promise.all([
        apiClient.listUsers(token),
        apiClient.exportBackup(token),
        apiClient.listLogs(token, logFilter),
      ]);
      setUsers(usersRes.users || []);
      setProgressByUserId(backupRes.backup?.progressByUserId || {});
      setPersistence(backupRes.persistence || null);
      setLogs(logsRes.logs || []);
    } catch (err) {
      setError(err.message || 'Nie udało się pobrać danych panelu admina.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, [token]);

  useEffect(() => {
    if (!token || subTab !== 'logs') return;
    apiClient
      .listLogs(token, logFilter)
      .then((res) => setLogs(res.logs || []))
      .catch(() => {});
  }, [logFilter, subTab, token]);

  const studentAccounts = useMemo(
    () => users.filter((u) => u.role !== 'admin'),
    [users]
  );

  const analytics = useMemo(() => {
    const now = Date.now();
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    let totalXp = 0;
    let totalNotes = 0;
    let totalCards = 0;
    let totalReviewCards = 0;
    let totalQuizzes = 0;
    let totalAttempts = 0;
    let active7d = 0;
    let activeEver = 0;

    const perCourse = {};
    for (const c of COURSES_META) {
      perCourse[c.id] = {
        ...c,
        totals: courseTotalsMap[c.id],
        unlockedCount: 0,
        activeCount: 0,
        pctSum: 0,
        topStudent: null,
      };
    }

    const enrichedStudents = studentAccounts.map((u) => {
      const progress = progressByUserId[u.id] || {};
      const stats = u.stats || {};
      const xp = stats.xp || 0;
      totalXp += xp;
      totalNotes += stats.notesCount || 0;
      totalCards += stats.knownCards || 0;
      totalQuizzes += stats.quizzesTaken || 0;
      totalAttempts += stats.quizAttempts || 0;

      const cardStatus = progress.cardStatus || {};
      const reviewCount = Object.values(cardStatus).filter((v) => v === 'review').length;
      totalReviewCards += reviewCount;

      if (xp > 0 || (stats.notesCount || 0) > 0 || (stats.knownCards || 0) > 0) {
        activeEver += 1;
      }
      if (u.lastActiveAt && now - new Date(u.lastActiveAt).getTime() <= sevenDaysMs) {
        active7d += 1;
      }

      const byCourse = {};
      let overallUnitsDone = 0;
      let overallUnitsTotal = 0;

      for (const c of COURSES_META) {
        const totals = courseTotalsMap[c.id];
        const br = computeUserCourseBreakdown(progress, totals);
        byCourse[c.id] = br;
        const hasAccess = Array.isArray(u.allowedCourses) && u.allowedCourses.includes(c.id);
        if (hasAccess) {
          perCourse[c.id].unlockedCount += 1;
          perCourse[c.id].pctSum += br.pct;
          overallUnitsDone += br.notesRead + br.cardsKnown + br.quizzesCompleted;
          overallUnitsTotal += totals.notesCount + totals.cardsCount + totals.quizzesCount;
        }
        if (br.notesRead > 0 || br.cardsKnown > 0 || br.quizzesCompleted > 0) {
          perCourse[c.id].activeCount += 1;
        }
        const courseXp = br.notesRead * 15 + br.cardsKnown * 10 + br.quizzesCompleted * 80;
        if (
          courseXp > 0 &&
          (!perCourse[c.id].topStudent || courseXp > perCourse[c.id].topStudent.xp)
        ) {
          perCourse[c.id].topStudent = { name: u.displayName, xp: courseXp, pct: br.pct };
        }
      }

      const overallPct =
        overallUnitsTotal > 0 ? Math.round((overallUnitsDone / overallUnitsTotal) * 100) : 0;

      return {
        ...u,
        progress,
        reviewCount,
        byCourse,
        overallPct,
      };
    });

    enrichedStudents.sort((a, b) => (b.stats?.xp || 0) - (a.stats?.xp || 0));

    const avgXp = studentAccounts.length > 0 ? Math.round(totalXp / studentAccounts.length) : 0;
    const avgPct =
      enrichedStudents.length > 0
        ? Math.round(
            enrichedStudents.reduce((acc, s) => acc + s.overallPct, 0) / enrichedStudents.length
          )
        : 0;

    return {
      studentCount: studentAccounts.length,
      active7d,
      activeEver,
      totalXp,
      avgXp,
      avgPct,
      totalNotes,
      totalCards,
      totalReviewCards,
      totalQuizzes,
      totalAttempts,
      perCourse: Object.values(perCourse).map((pc) => ({
        ...pc,
        avgPct: pc.unlockedCount > 0 ? Math.round(pc.pctSum / pc.unlockedCount) : 0,
      })),
      enrichedStudents,
    };
  }, [studentAccounts, progressByUserId, courseTotalsMap]);

  const filteredUsers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.displayName?.toLowerCase().includes(q) ||
        u.username?.toLowerCase().includes(q)
    );
  }, [users, searchQuery]);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!newName.trim()) {
      setError('Podaj imię lub nazwę ucznia.');
      return;
    }
    setCreating(true);
    setError('');
    setNotice('');
    try {
      const durationDays = newDuration === 'permanent' ? null : Number(newDuration);
      const res = await apiClient.createUser(token, {
        displayName: newName.trim(),
        username: newUsername.trim() || undefined,
        password: newPassword.trim() || undefined,
        durationDays,
      });
      setGeneratedCreds({
        displayName: res.user?.displayName || newName.trim(),
        username: res.user?.username || res.credentials?.username || '',
        password: res.plainPassword || res.credentials?.password || '',
      });
      setCopiedCreds(false);
      setNewName('');
      setNewUsername('');
      setNewPassword('');
      setNewDuration('14');
      setNotice(`Utworzono konto ucznia: ${res.user.displayName}`);
      await loadAllData();
    } catch (err) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  const handleToggleCourseAccess = async (user, courseId) => {
    const current = Array.isArray(user.rawAllowedCourses)
      ? user.rawAllowedCourses
      : Array.isArray(user.allowedCourses)
        ? user.allowedCourses
        : [];
    const next = current.includes(courseId)
      ? current.filter((c) => c !== courseId)
      : [...current, courseId];
    setBusyUserId(user.id);
    setError('');
    try {
      const res = await apiClient.updateUserCourses(token, user.id, next);
      setUsers((prev) =>
        prev.map((u) => (u.id === user.id ? { ...u, ...res.user, rawAllowedCourses: next } : u))
      );
      setNotice(`Zaktualizowano dostęp do kursów dla: ${user.displayName}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyUserId('');
    }
  };

  const handleUpdateDuration = async (user, options, label) => {
    setBusyUserId(user.id);
    setError('');
    try {
      const currentCourses = Array.isArray(user.rawAllowedCourses)
        ? user.rawAllowedCourses
        : Array.isArray(user.allowedCourses)
          ? user.allowedCourses
          : [];
      const res = await apiClient.updateUserCourses(token, user.id, currentCourses, options);
      setUsers((prev) =>
        prev.map((u) => (u.id === user.id ? { ...u, ...res.user } : u))
      );
      setNotice(`Ustawiono czas dostępu (${label}) dla: ${user.displayName}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyUserId('');
    }
  };

  const handleResetPassword = async (user) => {
    setBusyUserId(user.id);
    setError('');
    try {
      const res = await apiClient.resetUserPassword(token, user.id);
      setGeneratedCreds({
        displayName: res.user?.displayName || user.displayName,
        username: res.user?.username || user.username,
        password: res.plainPassword || res.credentials?.password || '',
      });
      setCopiedCreds(false);
      setNotice(`Wygenerowano nowe hasło dla: ${user.displayName}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyUserId('');
    }
  };

  const handleResetProgress = async (user) => {
    if (!window.confirm(`Czy na pewno wyzerować cały postęp ucznia ${user.displayName}?`)) return;
    setBusyUserId(user.id);
    setError('');
    try {
      await apiClient.resetUserProgress(token, user.id);
      setNotice(`Wyzerowano postęp ucznia: ${user.displayName}`);
      await loadAllData();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyUserId('');
    }
  };

  const handleDeleteUser = async (user) => {
    if (!window.confirm(`Czy na pewno trwale usunąć konto ${user.displayName} (${user.username})?`)) return;
    setBusyUserId(user.id);
    setError('');
    try {
      await apiClient.deleteUser(token, user.id);
      setNotice(`Usunięto konto: ${user.displayName}`);
      await loadAllData();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyUserId('');
    }
  };

  const handleCopyCreds = async () => {
    if (!generatedCreds) return;
    const text = `Matura Podstawowa z Polskiego — Dane do logowania:\nUczeń: ${generatedCreds.displayName}\nLogin: ${generatedCreds.username}\nHasło: ${generatedCreds.password}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCreds(true);
      setTimeout(() => setCopiedCreds(false), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  const handleExportBackup = async () => {
    try {
      const res = await apiClient.exportBackup(token);
      const blob = new Blob([JSON.stringify(res.backup, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `matura-polski-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setNotice('Pobrano kopię zapasową JSON.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleImportBackup = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const raw = await file.text();
      const parsed = JSON.parse(raw);
      const res = await apiClient.importBackup(token, parsed);
      setNotice(`Przywrócono kopię (+${res.importedUsers || 0} kont, postęp: ${res.updatedProgress || 0}).`);
      await loadAllData();
    } catch (err) {
      setError(err.message || 'Nieprawidłowy plik kopii zapasowej.');
    } finally {
      e.target.value = '';
    }
  };

  const handleClearLogs = async () => {
    if (!window.confirm('Wyczyścić wszystkie logi aktywności?')) return;
    try {
      await apiClient.clearLogs(token);
      setLogs([]);
      setNotice('Wyczyszczono logi.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="level-header">
        <div>
          <div className="level-kicker">
            <Shield size={13} style={{ verticalAlign: '-2px', marginRight: 5 }} />
            ADMINISTRACJA • {currentUser?.displayName || 'Admin'}
          </div>
          <h1 className="level-h1">Panel Zarządzania Kursem</h1>
          <p className="level-desc">
            Statystyki postępów, zarządzanie dostępem uczniów, podgląd kont w trybie ucznia oraz logi aktywności.
          </p>
        </div>
        <button
          type="button"
          className="secondary-btn"
          onClick={loadAllData}
          disabled={loading}
        >
          <RefreshCw size={15} className={loading ? 'spin' : ''} />
          <span>{loading ? 'Odświeżanie...' : 'Odśwież dane'}</span>
        </button>
      </header>

      <div className="admin-subtabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={subTab === 'stats'}
          className={`admin-subtab-btn ${subTab === 'stats' ? 'active' : ''}`}
          onClick={() => setSubTab('stats')}
        >
          <BarChart3 size={16} />
          <span>Statystyki i Przegląd</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={subTab === 'users'}
          className={`admin-subtab-btn ${subTab === 'users' ? 'active' : ''}`}
          onClick={() => setSubTab('users')}
        >
          <Users size={16} />
          <span>Konta i Dostępy ({studentAccounts.length})</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={subTab === 'logs'}
          className={`admin-subtab-btn ${subTab === 'logs' ? 'active' : ''}`}
          onClick={() => setSubTab('logs')}
        >
          <Activity size={16} />
          <span>Logi i Kopia ({logs.length})</span>
        </button>
      </div>

      {error && <div className="modal-error">{error}</div>}
      {notice && <div className="modal-notice">{notice}</div>}

      {subTab === 'stats' && (
        <div className="admin-stats-section">
          <div className="admin-kpi-grid">
            <div className="admin-kpi-card">
              <span className="admin-kpi-label">Konta uczniów</span>
              <strong className="admin-kpi-value">{analytics.studentCount}</strong>
              <span className="admin-kpi-sub">
                Aktywnych w ostatnich 7 dniach: {analytics.active7d}
              </span>
            </div>
            <div className="admin-kpi-card">
              <span className="admin-kpi-label">Łączne XP platformy</span>
              <strong className="admin-kpi-value">{analytics.totalXp}</strong>
              <span className="admin-kpi-sub">Średnio {analytics.avgXp} XP / uczeń</span>
            </div>
            <div className="admin-kpi-card">
              <span className="admin-kpi-label">Przeczytane notatki</span>
              <strong className="admin-kpi-value">{analytics.totalNotes}</strong>
              <span className="admin-kpi-sub">Średni postęp w kursach: {analytics.avgPct}%</span>
            </div>
            <div className="admin-kpi-card">
              <span className="admin-kpi-label">Opanowane fiszki</span>
              <strong className="admin-kpi-value">{analytics.totalCards}</strong>
              <span className="admin-kpi-sub">
                Do powtórki u uczniów: {analytics.totalReviewCards}
              </span>
            </div>
            <div className="admin-kpi-card">
              <span className="admin-kpi-label">Ukończone quizy</span>
              <strong className="admin-kpi-value">{analytics.totalQuizzes}</strong>
              <span className="admin-kpi-sub">Łącznie podejść: {analytics.totalAttempts}</span>
            </div>
          </div>

          <h2 className="admin-section-title">
            <BookOpen size={17} />
            <span>Statystyki według kursów</span>
          </h2>
          <div className="admin-course-stats-grid">
            {analytics.perCourse.map((pc) => (
              <div key={pc.id} className="admin-course-stat-card">
                <div className="admin-course-stat-head">
                  <strong>{pc.label}</strong>
                  <span className="badge-count">{pc.avgPct}% śr.</span>
                </div>
                <div className="progress-bar-track" style={{ margin: '8px 0' }}>
                  <div className="progress-bar-fill" style={{ width: `${pc.avgPct}%` }} />
                </div>
                <div className="admin-course-stat-meta">
                  <span>Odblokowany: <strong>{pc.unlockedCount}/{analytics.studentCount}</strong></span>
                  <span>Aktywnych: <strong>{pc.activeCount}</strong></span>
                </div>
                <div className="admin-course-stat-meta">
                  <span>Materiał: {pc.totals.notesCount} not. • {pc.totals.cardsCount} fisz. • {pc.totals.quizzesCount} quiz.</span>
                </div>
                {pc.topStudent && (
                  <div className="admin-course-leader">
                    <Trophy size={13} />
                    <span>Lider: <strong>{pc.topStudent.name}</strong> ({pc.topStudent.xp} XP • {pc.topStudent.pct}%)</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <h2 className="admin-section-title">
            <Users size={17} />
            <span>Postęp uczniów i szybki podgląd konta</span>
          </h2>
          <div className="admin-student-cards">
            {analytics.enrichedStudents.length === 0 ? (
              <div className="admin-empty-box">Brak kont uczniów. Dodaj pierwszego ucznia w zakładce „Konta i Dostępy”.</div>
            ) : (
              analytics.enrichedStudents.map((s) => (
                <div key={s.id} className="admin-student-row">
                  <div className="admin-student-main">
                    <div className="admin-student-identity">
                      <strong>{s.displayName}</strong>
                      <span className="admin-user-login">@{s.username}</span>
                      <span
                        className={`admin-duration-badge ${
                          s.isPermanent ? 'permanent' : s.isExpired ? 'expired' : 'trial'
                        }`}
                      >
                        {s.isPermanent
                          ? 'Na zawsze'
                          : s.isExpired
                            ? 'Dostęp wygasł'
                            : `Pozostało ${s.daysRemaining ?? 14} dni`}
                      </span>
                      <span className="admin-last-active">
                        Ostatnio: {formatDateTime(s.lastActiveAt)}
                      </span>
                    </div>
                    <div className="admin-student-metrics">
                      <span className="admin-metric-pill xp">{s.stats?.xp || 0} XP</span>
                      <span className="admin-metric-pill">{s.stats?.notesCount || 0} notatek</span>
                      <span className="admin-metric-pill">{s.stats?.knownCards || 0} fiszek</span>
                      <span className="admin-metric-pill">
                        {s.stats?.quizzesTaken || 0} quizów ({s.stats?.quizAttempts || 0} prób)
                      </span>
                      {s.reviewCount > 0 && (
                        <span className="admin-metric-pill warn">{s.reviewCount} trudnych</span>
                      )}
                    </div>
                    <div className="admin-student-courses-mini">
                      {COURSES_META.map((c) => {
                        const unlocked = (s.allowedCourses || []).includes(c.id);
                        const br = s.byCourse[c.id];
                        return (
                          <span
                            key={c.id}
                            className={`admin-course-chip ${unlocked ? 'unlocked' : 'locked'}`}
                          >
                            {c.shortLabel}: {unlocked ? `${br.pct}%` : 'zablokowany'}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="admin-student-actions">
                    <button
                      type="button"
                      className="primary-btn admin-preview-btn"
                      onClick={() => onImpersonateUser?.(s, s.progress)}
                    >
                      <Eye size={15} />
                      <span>Podgląd konta</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {subTab === 'users' && (
        <div className="admin-users-section">
          <form className="admin-create-card" onSubmit={handleCreateUser}>
            <div className="admin-create-title">
              <UserPlus size={17} />
              <strong>Dodaj nowe konto ucznia</strong>
              <span className="admin-create-hint">Domyślnie nowe konto dostaje 14 dni darmowego dostępu do kursów.</span>
            </div>
            <div className="admin-create-grid">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Imię / Nazwa ucznia *"
                required
              />
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Login (opcjonalnie)"
              />
              <input
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Hasło (opcjonalnie)"
              />
              <select
                value={newDuration}
                onChange={(e) => setNewDuration(e.target.value)}
                aria-label="Czas trwania dostępu"
              >
                <option value="14">14 dni za darmo (domyślnie)</option>
                <option value="30">30 dni</option>
                <option value="90">90 dni</option>
                <option value="permanent">Na zawsze (bez limitu)</option>
              </select>
              <button type="submit" className="primary-btn" disabled={creating}>
                <UserPlus size={15} />
                <span>{creating ? 'Tworzenie...' : 'Utwórz konto'}</span>
              </button>
            </div>
          </form>

          {generatedCreds && (
            <div className="generated-creds-box">
              <div>
                <strong>Dane logowania dla: {generatedCreds.displayName}</strong>
                <div className="generated-creds-lines">
                  <span>Login: <code>{generatedCreds.username}</code></span>
                  <span>Hasło: <code>{generatedCreds.password}</code></span>
                </div>
              </div>
              <button type="button" className="secondary-btn" onClick={handleCopyCreds}>
                {copiedCreds ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedCreds ? 'Skopiowano!' : 'Kopiuj dane'}</span>
              </button>
            </div>
          )}

          <div className="admin-search-bar">
            <Search size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Szukaj po imieniu lub loginie..."
            />
          </div>

          <div className="admin-users-list">
            {filteredUsers.map((u) => {
              const isSelfAdmin = u.role === 'admin';
              const busy = busyUserId === u.id;
              const userProgress = progressByUserId[u.id] || {};
              return (
                <div key={u.id} className="admin-user-card">
                  <div className="admin-user-top">
                    <div>
                      <div className="admin-user-title-row">
                        <strong>{u.displayName}</strong>
                        <span className="admin-user-login">@{u.username}</span>
                        {isSelfAdmin ? (
                          <span className="admin-role-badge">ADMIN</span>
                        ) : (
                          <span
                            className={`admin-duration-badge ${
                              u.isPermanent ? 'permanent' : u.isExpired ? 'expired' : 'trial'
                            }`}
                          >
                            {u.isPermanent
                              ? 'Na zawsze'
                              : u.isExpired
                                ? 'Dostęp wygasł'
                                : `Pozostało ${u.daysRemaining ?? 14} dni`}
                          </span>
                        )}
                      </div>
                      <div className="admin-user-meta-line">
                        <span>{u.stats?.xp || 0} XP</span>
                        <span>• {u.stats?.notesCount || 0} notatek</span>
                        <span>• {u.stats?.knownCards || 0} fiszek</span>
                        <span>• {u.stats?.quizzesTaken || 0} quizów</span>
                        <span>• Ostatnio: {formatDateTime(u.lastActiveAt)}</span>
                      </div>
                    </div>

                    {!isSelfAdmin && (
                      <div className="admin-user-action-btns">
                        <button
                          type="button"
                          className="primary-btn admin-preview-btn"
                          onClick={() => onImpersonateUser?.(u, userProgress)}
                          disabled={busy}
                          title="Zobacz aplikację dokładnie tak, jak widzi ją ten uczeń"
                        >
                          <Eye size={14} />
                          <span>Podgląd jako uczeń</span>
                        </button>
                        <button
                          type="button"
                          className="secondary-btn"
                          onClick={() => handleResetPassword(u)}
                          disabled={busy}
                          title="Wygeneruj nowe hasło"
                        >
                          <KeyRound size={14} />
                          <span>Nowe hasło</span>
                        </button>
                        <button
                          type="button"
                          className="secondary-btn"
                          onClick={() => handleResetProgress(u)}
                          disabled={busy}
                          title="Wyzeruj postęp ucznia"
                        >
                          <RotateCcw size={14} />
                          <span>Reset postępu</span>
                        </button>
                        <button
                          type="button"
                          className="secondary-btn danger-btn"
                          onClick={() => handleDeleteUser(u)}
                          disabled={busy}
                          title="Usuń konto"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )}
                  </div>

                  {!isSelfAdmin && (
                    <>
                      <div className="course-access-row">
                        <span className="course-access-label">Dostęp do kursów:</span>
                        {COURSES_META.map((c) => {
                          const rawCourses = Array.isArray(u.rawAllowedCourses)
                            ? u.rawAllowedCourses
                            : Array.isArray(u.allowedCourses)
                              ? u.allowedCourses
                              : [];
                          const allowed = rawCourses.includes(c.id);
                          return (
                            <button
                              key={c.id}
                              type="button"
                              className={`course-access-pill ${allowed ? 'allowed' : 'blocked'}`}
                              onClick={() => handleToggleCourseAccess(u, c.id)}
                              disabled={busy}
                            >
                              {allowed ? <Check size={12} /> : null}
                              <span>{c.shortLabel}</span>
                            </button>
                          );
                        })}
                      </div>
                      <div className="course-access-row">
                        <span className="course-access-label">Czas dostępu:</span>
                        <button
                          type="button"
                          className="course-access-pill"
                          onClick={() => handleUpdateDuration(u, { extendDays: 14 }, '+14 dni')}
                          disabled={busy}
                        >
                          +14 dni
                        </button>
                        <button
                          type="button"
                          className="course-access-pill"
                          onClick={() => handleUpdateDuration(u, { extendDays: 30 }, '+30 dni')}
                          disabled={busy}
                        >
                          +30 dni
                        </button>
                        <button
                          type="button"
                          className={`course-access-pill ${u.isPermanent ? 'allowed' : ''}`}
                          onClick={() => handleUpdateDuration(u, { durationDays: null }, 'Na zawsze')}
                          disabled={busy}
                        >
                          Na zawsze
                        </button>
                        <button
                          type="button"
                          className={`course-access-pill ${u.isExpired ? 'blocked' : ''}`}
                          onClick={() => handleUpdateDuration(u, { durationDays: 0 }, 'Wygasł / Zablokowany')}
                          disabled={busy}
                        >
                          Zablokuj (wygasł)
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {subTab === 'logs' && (
        <div className="admin-logs-section">
          <div className="admin-backup-bar">
            <div className="admin-persistence-info">
              <Layers size={15} />
              <span>
                Zapis bazy: <strong>{persistence?.mode || 'lokalny/Gist'}</strong>
                {persistence?.gistId ? ` • Gist ${persistence.gistId.slice(0, 8)}…` : ''}
              </span>
            </div>
            <div className="admin-backup-btns">
              <button type="button" className="secondary-btn" onClick={handleExportBackup}>
                <Download size={14} />
                <span>Pobierz backup JSON</span>
              </button>
              <button
                type="button"
                className="secondary-btn"
                onClick={() => backupInputRef.current?.click()}
              >
                <Upload size={14} />
                <span>Wgraj backup JSON</span>
              </button>
              <input
                ref={backupInputRef}
                type="file"
                accept="application/json"
                style={{ display: 'none' }}
                onChange={handleImportBackup}
              />
            </div>
          </div>

          <div className="admin-logs-toolbar">
            <div className="admin-log-filters">
              {[
                { id: '', label: 'Wszystkie' },
                { id: 'login', label: 'Logowania' },
                { id: 'progress_sync', label: 'Postęp' },
                { id: 'courses_updated', label: 'Dostępy' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`course-access-pill ${logFilter === f.id ? 'allowed' : ''}`}
                  onClick={() => setLogFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <button type="button" className="secondary-btn danger-btn" onClick={handleClearLogs}>
              <Trash2 size={14} />
              <span>Wyczyść logi</span>
            </button>
          </div>

          <div className="admin-logs-list">
            {logs.length === 0 ? (
              <div className="admin-empty-box">Brak wpisów w dzienniku aktywności.</div>
            ) : (
              logs.map((log) => {
                const meta = LOG_TYPE_META[log.type] || { label: log.type, tone: 'accent' };
                return (
                  <div key={log.id} className="admin-log-row">
                    <span className={`admin-log-badge ${meta.tone}`}>{meta.label}</span>
                    <div className="admin-log-body">
                      <div className="admin-log-msg">{log.message}</div>
                      <div className="admin-log-meta">
                        {log.displayName || log.username || 'System'} • {formatDateTime(log.timestamp)}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
