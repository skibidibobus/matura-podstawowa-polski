import { useEffect, useState } from 'react';
import { BookOpen, Check, CheckCircle2, ChevronDown, ChevronRight, Maximize2, Minimize2, Moon, RotateCcw, Sun, Trophy, User } from 'lucide-react';

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
  checkedNotes = {},
  onToggleNote,
  activeNoteId = null,
  onSelectNote,
  onToggleLevelNotes,
  rankingMode = false,
  onToggleRankingMode,
}) {
  const [expandedLevels, setExpandedLevels] = useState(() =>
    activeLevelId ? { [activeLevelId]: true } : {}
  );

  useEffect(() => {
    if (activeLevelId) {
      setExpandedLevels((prev) => (prev[activeLevelId] ? prev : { ...prev, [activeLevelId]: true }));
    }
  }, [activeLevelId]);

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

      {onToggleRankingMode && (
        <button
          type="button"
          className={`ranking-nav-btn ${rankingMode ? 'active' : ''}`}
          onClick={onToggleRankingMode}
        >
          <Trophy size={15} />
          <span>Ranking uczniów</span>
        </button>
      )}

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

      <nav className="level-list" aria-label="Poziomy nauki">
        {(levels || []).map((lvl) => {
          const done = isLevelCompleted(lvl);
          const active = !reviewMode && activeLevelId === lvl.id;
          const levelNotes = lvl.notes || [];
          const checkedCount = levelNotes.filter((n) => checkedNotes[n.id]).length;
          const allNotesDone = levelNotes.length > 0 && checkedCount === levelNotes.length;
          const isExpanded = !!expandedLevels[lvl.id];

          return (
            <div key={lvl.id} className="level-group">
              <div className="level-row">
                <button
                  type="button"
                  className={`level-item ${active ? 'active' : ''} ${done || allNotesDone ? 'completed' : ''}`}
                  onClick={() => {
                    if (active) {
                      setExpandedLevels((prev) => ({ ...prev, [lvl.id]: !prev[lvl.id] }));
                    } else {
                      setExpandedLevels((prev) => ({ ...prev, [lvl.id]: true }));
                      onSelectLevel(lvl.id);
                    }
                  }}
                >
                  <span className="level-num">
                    {done || allNotesDone ? <CheckCircle2 size={15} /> : (lvl.displayNum ?? lvl.id)}
                  </span>
                  <span className="level-meta">
                    <div className="level-name">{lvl.title}</div>
                    <div className="level-sub">
                      {lvl.code} • {levelNotes.length > 0 ? `${checkedCount}/${levelNotes.length} tematów` : lvl.duration}
                    </div>
                  </span>
                  {levelNotes.length > 0 && (
                    <span className="level-chevron" aria-hidden="true">
                      {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </span>
                  )}
                </button>
                {levelNotes.length > 0 && onToggleLevelNotes && (
                  <button
                    type="button"
                    className={`level-block-check ${allNotesDone ? 'checked' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLevelNotes(lvl);
                    }}
                    title={allNotesDone ? 'Odznacz wszystkie tematy w bloku' : 'Oznacz cały blok jako zrobiony'}
                    aria-label={allNotesDone ? 'Odznacz cały blok' : 'Oznacz cały blok jako zrobiony'}
                  >
                    <Check size={13} />
                  </button>
                )}
              </div>

              {isExpanded && levelNotes.length > 0 && (
                <div className="level-sublist">
                  {levelNotes.map((note, idx) => {
                    const noteChecked = !!checkedNotes[note.id];
                    const noteActive = active && activeNoteId === note.id;
                    return (
                      <div key={note.id} className={`subtopic-row ${noteActive ? 'active' : ''} ${noteChecked ? 'done' : ''}`}>
                        <button
                          type="button"
                          className="subtopic-link"
                          onClick={() => {
                            if (onSelectNote) {
                              onSelectNote(lvl.id, note.id);
                            } else {
                              onSelectLevel(lvl.id);
                            }
                          }}
                        >
                          <span className="subtopic-idx">{idx + 1}.</span>
                          <span className="subtopic-title">{note.title}</span>
                        </button>
                        {onToggleNote && (
                          <button
                            type="button"
                            className={`subtopic-check ${noteChecked ? 'checked' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleNote(note.id);
                            }}
                            title={noteChecked ? 'Odznacz temat' : 'Oznacz temat jako zrobiony'}
                            aria-label={`Oznacz temat: ${note.title}`}
                          >
                            <Check size={12} />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <button
          type="button"
          className={`level-item review-pool-item ${reviewMode ? 'active' : ''}`}
          onClick={onToggleReviewMode}
        >
          <span className="level-num">
            <RotateCcw size={15} />
          </span>
          <span className="level-meta">
            <div className="level-name">Powtórka fiszek</div>
            <div className="level-sub">
              {totalCardsCount} fiszek • {reviewCount > 0 ? `${reviewCount} do powtórki` : 'wszystkie bloki'}
            </div>
          </span>
          {reviewCount > 0 && <span className="badge-count">{reviewCount}</span>}
        </button>
      </nav>

      <div style={{ marginTop: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', gap: 6, alignItems: 'center' }}>
        <BookOpen size={14} />
        <span>Skróty: Spacja (obrót), ←/→ (nawigacja), F (pełny ekran)</span>
      </div>
    </aside>
  );
}
