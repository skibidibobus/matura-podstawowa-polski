import { BookOpen, CheckCircle2, Maximize2, Minimize2, Moon, RotateCcw, Sun, Trophy, User } from 'lucide-react';

const COURSE_BRAND_SUBTITLES = {
  ustna: 'Kurs 76 pytań jawnych • CKE 2026–2028',
  kurs: 'Kurs 10 Działów CKE • Formuła 2023',
  probna: 'Sprint 7h • Matura Próbna',
};

export function Sidebar({
  activeCourse,
  onSelectCourse,
  levels = [],
  activeLevelId,
  onSelectLevel,
  reviewMode,
  onToggleReviewMode,
  reviewCount,
  completedLevelsCount,
  masteredCardsCount,
  totalCardsCount,
  xp,
  theme,
  onToggleTheme,
  isFullscreen = false,
  onToggleFullscreen,
  authUser = null,
  onOpenAccount,
  isLevelCompleted,
}) {
  const totalLevels = levels?.length || 0;
  const progressPct = totalLevels > 0 ? Math.round((completedLevelsCount / totalLevels) * 100) : 0;

  return (
    <aside className="sidebar">
      <div className="brand">
        <div>
          <div className="brand-title">Matura Polski</div>
          <div className="brand-sub">
            {COURSE_BRAND_SUBTITLES[activeCourse] || COURSE_BRAND_SUBTITLES.probna}
          </div>
        </div>
        <div className="brand-actions">
          <button
            type="button"
            className="theme-btn"
            onClick={onToggleFullscreen}
            title={isFullscreen ? 'Wyjdź z trybu pełnoekranowego (F)' : 'Tryb pełnoekranowy (F)'}
            aria-label="Tryb pełnoekranowy"
            aria-pressed={isFullscreen}
          >
            {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
          </button>
          <button
            type="button"
            className="theme-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Przełącz na tryb Papier (jasny)' : 'Przełącz na tryb Focus (ciemny)'}
            aria-label="Zmień motyw"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </div>

      {onOpenAccount && (
        <button
          type="button"
          className={`account-bar ${authUser ? 'logged-in' : ''}`}
          onClick={onOpenAccount}
        >
          <span className="account-bar-left">
            <User size={15} />
            <span className="account-bar-name">
              {authUser ? authUser.displayName : 'Tryb lokalny (Gość)'}
            </span>
          </span>
          <span className="account-bar-tag">
            {authUser ? 'Konto' : 'Zaloguj'}
          </span>
        </button>
      )}

      <div className="course-switcher" role="tablist" aria-label="Wybór kursu">
        <button
          type="button"
          role="tab"
          aria-selected={activeCourse === 'probna'}
          className={`course-tab ${activeCourse === 'probna' ? 'active' : ''}`}
          onClick={() => onSelectCourse('probna')}
        >
          Matura Próbna
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeCourse === 'kurs'}
          className={`course-tab ${activeCourse === 'kurs' ? 'active' : ''}`}
          onClick={() => onSelectCourse('kurs')}
        >
          Kurs Główny
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeCourse === 'ustna'}
          className={`course-tab ${activeCourse === 'ustna' ? 'active' : ''}`}
          onClick={() => onSelectCourse('ustna')}
        >
          Matura Ustna
        </button>
      </div>

      <div className="progress-card">
        <div className="progress-row">
          <span>Postęp kursowy</span>
          <strong>{progressPct}%</strong>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="stats-mini">
          <div className="stat-pill">
            <span>Poziomy</span>
            <strong>
              {completedLevelsCount}/{totalLevels}
            </strong>
          </div>
          <div className="stat-pill">
            <span>Fiszki</span>
            <strong>
              {masteredCardsCount}/{totalCardsCount}
            </strong>
          </div>
          <div className="stat-pill">
            <span>XP</span>
            <strong>{xp}</strong>
          </div>
          <div className="stat-pill">
            <span>Cel</span>
            <strong>
              <Trophy size={13} style={{ verticalAlign: '-2px', color: 'var(--accent)' }} /> 100%
            </strong>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`review-pool-btn ${reviewMode ? 'active' : ''}`}
        onClick={onToggleReviewMode}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <RotateCcw size={16} />
          Pula do powtórki
        </span>
        <span className="badge-count">{reviewCount}</span>
      </button>

      <nav className="level-list" aria-label="Poziomy nauki">
        {(levels || []).map((lvl) => {
          const done = isLevelCompleted(lvl);
          const active = !reviewMode && activeLevelId === lvl.id;
          return (
            <button
              key={lvl.id}
              type="button"
              className={`level-item ${active ? 'active' : ''} ${done ? 'completed' : ''}`}
              onClick={() => onSelectLevel(lvl.id)}
            >
              <span className="level-num">
                {done ? <CheckCircle2 size={15} /> : (lvl.displayNum ?? lvl.id)}
              </span>
              <span className="level-meta">
                <div className="level-name">{lvl.title}</div>
                <div className="level-sub">
                  {lvl.code} • {lvl.duration}
                </div>
              </span>
            </button>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', gap: 6, alignItems: 'center' }}>
        <BookOpen size={14} />
        <span>Skróty: Spacja (obrót), ←/→ (nawigacja), F (pełny ekran)</span>
      </div>
    </aside>
  );
}
