import { useEffect, useMemo, useRef, useState } from 'react';
import { BookOpen, CheckCircle2, HelpCircle, Layers } from 'lucide-react';
import { LEVELS } from './data/levels';
import { ORAL_LEVELS } from './data/oralLevels';
import { KURS_PODSTAWOWY_LEVELS } from './data/kursPodstawowyLevels';
import { Sidebar } from './components/Sidebar';
import { NotesView } from './components/NotesView';
import { FlashcardsView } from './components/FlashcardsView';
import { QuizView } from './components/QuizView';
import { AccountModal } from './components/AccountModal';
import { apiClient } from './api/client';

const STORAGE_KEY = 'matura-polski-progress-v1';
const AUTH_STORAGE_KEY = 'matura-polski-auth-v1';

const VALID_COURSES = ['probna', 'kurs', 'ustna'];

const DEFAULT_LEVEL_BY_COURSE = {
  probna: 1,
  ustna: 101,
  kurs: 'dept-01',
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function loadAuthSession() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && parsed.token && parsed.user ? parsed : null;
  } catch {
    return null;
  }
}

function normalizeActiveLevels(raw) {
  const saved =
    raw?.activeLevelByCourse && typeof raw.activeLevelByCourse === 'object'
      ? raw.activeLevelByCourse
      : null;
  return {
    probna: (saved && saved.probna) || raw?.activeLevelId || DEFAULT_LEVEL_BY_COURSE.probna,
    ustna: (saved && saved.ustna) || DEFAULT_LEVEL_BY_COURSE.ustna,
    kurs: (saved && saved.kurs) || DEFAULT_LEVEL_BY_COURSE.kurs,
  };
}

export function App() {
  const initial = useMemo(() => loadState(), []);
  const [authSession, setAuthSession] = useState(() => loadAuthSession());
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [syncStatus, setSyncStatus] = useState('');
  const skipNextRemoteSave = useRef(false);

  const [theme, setTheme] = useState(initial.theme || 'dark');
  const [activeCourse, setActiveCourse] = useState(() =>
    VALID_COURSES.includes(initial.activeCourse) ? initial.activeCourse : 'probna'
  );
  const [activeLevelByCourse, setActiveLevelByCourse] = useState(() =>
    normalizeActiveLevels(initial)
  );
  const [stage, setStage] = useState('notes'); // 'notes' | 'flashcards' | 'quiz'
  const [reviewMode, setReviewMode] = useState(false);
  const [checkedNotes, setCheckedNotes] = useState(initial.checkedNotes || {});
  const [cardStatus, setCardStatus] = useState(initial.cardStatus || {});
  const [quizScores, setQuizScores] = useState(initial.quizScores || {});
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        const el = document.documentElement;
        if (el.requestFullscreen) await el.requestFullscreen();
        else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
      } else {
        if (document.exitFullscreen) await document.exitFullscreen();
        else if (document.webkitExitFullscreen) await document.webkitExitFullscreen();
      }
    } catch {
      // Ignore fullscreen errors in restricted environments
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || document.webkitFullscreenElement));
    };
    const onKeyDown = (e) => {
      if (
        e.target?.tagName === 'INPUT' ||
        e.target?.tagName === 'TEXTAREA' ||
        e.target?.tagName === 'SELECT' ||
        e.target?.isContentEditable
      ) {
        return;
      }
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const applyProgressState = (progressObj) => {
    const src = progressObj && typeof progressObj === 'object' ? progressObj : {};
    skipNextRemoteSave.current = true;
    setTheme(src.theme === 'light' ? 'light' : 'dark');
    setActiveCourse(VALID_COURSES.includes(src.activeCourse) ? src.activeCourse : 'probna');
    setActiveLevelByCourse(normalizeActiveLevels(src));
    setCheckedNotes(src.checkedNotes || {});
    setCardStatus(src.cardStatus || {});
    setQuizScores(src.quizScores || {});
    setReviewMode(false);
    setStage('notes');
  };

  // Hydrate account progress from backend on startup if logged in
  useEffect(() => {
    if (!authSession?.token) return;
    let cancelled = false;
    apiClient
      .getProgress(authSession.token)
      .then((data) => {
        if (cancelled) return;
        if (data?.progress) {
          applyProgressState(data.progress);
          setSyncStatus('Zsynchronizowano z serwerem');
        }
      })
      .catch(() => {
        if (!cancelled) setSyncStatus('Tryb offline konta');
      });
    return () => {
      cancelled = true;
    };
  }, [authSession?.token]);

  // Persist progress: localStorage when guest, backend API when logged in
  useEffect(() => {
    const payload = {
      theme,
      activeCourse,
      activeLevelByCourse,
      checkedNotes,
      cardStatus,
      quizScores,
    };

    if (!authSession?.token) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch {
        // Ignore storage errors in restricted environments
      }
      return;
    }

    if (skipNextRemoteSave.current) {
      skipNextRemoteSave.current = false;
      return;
    }

    setSyncStatus('Zapisywanie...');
    const timer = setTimeout(() => {
      apiClient
        .saveProgress(authSession.token, payload)
        .then(() => setSyncStatus('Zsynchronizowano z serwerem'))
        .catch(() => setSyncStatus('Błąd synchronizacji'));
    }, 300);

    return () => clearTimeout(timer);
  }, [theme, activeCourse, activeLevelByCourse, checkedNotes, cardStatus, quizScores, authSession?.token]);

  const handleLoginSuccess = (loginData) => {
    const session = { token: loginData.token, user: loginData.user };
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
    } catch {
      // Ignore storage errors
    }
    setAuthSession(session);
    applyProgressState(loginData.progress);
    setSyncStatus('Zsynchronizowano z serwerem');
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
    setAuthSession(null);
    setSyncStatus('');
    applyProgressState(loadState());
  };

  const currentLevels =
    activeCourse === 'ustna'
      ? ORAL_LEVELS
      : activeCourse === 'kurs'
      ? KURS_PODSTAWOWY_LEVELS
      : LEVELS;

  const activeLevelId =
    activeLevelByCourse[activeCourse] ||
    currentLevels[0]?.id ||
    DEFAULT_LEVEL_BY_COURSE[activeCourse] ||
    'dept-01';
  const activeLevel = currentLevels.find((l) => l.id === activeLevelId) || currentLevels[0];
  const activeIndex = currentLevels.findIndex((l) => l.id === activeLevel?.id);

  const allCourseNotes = useMemo(() => currentLevels.flatMap((l) => l.notes || []), [currentLevels]);
  const allFlashcards = useMemo(() => currentLevels.flatMap((l) => l.flashcards || []), [currentLevels]);
  const reviewCards = useMemo(
    () => allFlashcards.filter((c) => cardStatus[c.id] === 'review'),
    [allFlashcards, cardStatus]
  );

  const isLevelCompleted = (lvl) => {
    if (!lvl || !lvl.quiz) return false;
    const score = quizScores[lvl.id];
    const passThreshold = Math.ceil(lvl.quiz.length * 0.75);
    return score !== undefined && score >= passThreshold;
  };

  const completedLevelsCount = currentLevels.filter(isLevelCompleted).length;
  const masteredCardsCount = allFlashcards.filter((c) => cardStatus[c.id] === 'known').length;
  const masteredNotesCount = allCourseNotes.filter((n) => checkedNotes[n.id]).length;

  const xp =
    masteredNotesCount * 15 +
    masteredCardsCount * 10 +
    completedLevelsCount * 80;

  const handleToggleNote = (noteId) => {
    setCheckedNotes((prev) => ({ ...prev, [noteId]: !prev[noteId] }));
  };

  const handleSetCardStatus = (cardId, status) => {
    setCardStatus((prev) => ({ ...prev, [cardId]: status }));
  };

  const handleResetCards = (cardIds) => {
    setCardStatus((prev) => {
      const next = { ...prev };
      for (const id of cardIds) delete next[id];
      return next;
    });
  };

  const handleSaveQuizScore = (levelId, score) => {
    setQuizScores((prev) => ({
      ...prev,
      [levelId]: Math.max(prev[levelId] || 0, score),
    }));
  };

  const handleSelectCourse = (course) => {
    setActiveCourse(course);
    setReviewMode(false);
    setStage('notes');
  };

  const handleSelectLevel = (id) => {
    setReviewMode(false);
    setActiveLevelByCourse((prev) => ({ ...prev, [activeCourse]: id }));
    setStage('notes');
  };

  const notesDoneCount = activeLevel?.notes?.filter((n) => checkedNotes[n.id]).length || 0;
  const cardsDoneCount = activeLevel?.flashcards?.filter((c) => cardStatus[c.id] === 'known').length || 0;
  const quizBest = quizScores[activeLevel?.id];

  return (
    <div className="app-shell">
      <Sidebar
        activeCourse={activeCourse}
        onSelectCourse={handleSelectCourse}
        levels={currentLevels}
        activeLevelId={activeLevel?.id}
        onSelectLevel={handleSelectLevel}
        reviewMode={reviewMode}
        onToggleReviewMode={() => setReviewMode((v) => !v)}
        reviewCount={reviewCards.length}
        completedLevelsCount={completedLevelsCount}
        masteredCardsCount={masteredCardsCount}
        totalCardsCount={allFlashcards.length}
        xp={xp}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        authUser={authSession?.user || null}
        onOpenAccount={() => setAccountModalOpen(true)}
        isLevelCompleted={isLevelCompleted}
      />

      <AccountModal
        isOpen={accountModalOpen}
        onClose={() => setAccountModalOpen(false)}
        authSession={authSession}
        syncStatus={syncStatus}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
      />

      <main className="main">
        {reviewMode ? (
          <>
            <header className="level-header">
              <div>
                <div className="level-kicker">POWTÓRKA ZE WSZYSTKICH BLOKÓW</div>
                <h1 className="level-h1">Powtórka fiszek</h1>
                <p className="level-desc">
                  Wszystkie fiszki ze wszystkich bloków tego kursu ({allFlashcards.length}). Możesz włączyć filtr „Tylko do powtórki”, aby ćwiczyć te oznaczone jako trudne ({reviewCards.length}).
                </p>
              </div>
            </header>
            <FlashcardsView
              key={`review-all-${activeCourse}`}
              cards={allFlashcards}
              cardStatus={cardStatus}
              onSetCardStatus={handleSetCardStatus}
              onResetCards={handleResetCards}
            />
          </>
        ) : (
          <>
            <header className="level-header">
              <div>
                <div className="level-kicker">
                  {activeLevel.code} • {activeLevel.duration} • +{activeLevel.xp} XP
                </div>
                <h1 className="level-h1">{activeLevel.title}</h1>
                <p className="level-desc">{activeLevel.subtitle}</p>
              </div>
            </header>

            <div className="stage-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={stage === 'notes'}
                className={`stage-tab ${stage === 'notes' ? 'active' : ''} ${
                  notesDoneCount === (activeLevel?.notes?.length || 0) && (activeLevel?.notes?.length || 0) > 0 ? 'done' : ''
                }`}
                onClick={() => setStage('notes')}
              >
                <span className="stage-left">
                  <BookOpen size={17} />
                  1. Notatki
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {notesDoneCount}/{activeLevel?.notes?.length || 0}
                </span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={stage === 'flashcards'}
                className={`stage-tab ${stage === 'flashcards' ? 'active' : ''} ${
                  cardsDoneCount === (activeLevel?.flashcards?.length || 0) && (activeLevel?.flashcards?.length || 0) > 0 ? 'done' : ''
                }`}
                onClick={() => setStage('flashcards')}
              >
                <span className="stage-left">
                  <Layers size={17} />
                  2. Fiszki
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {cardsDoneCount}/{activeLevel?.flashcards?.length || 0}
                </span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={stage === 'quiz'}
                className={`stage-tab ${stage === 'quiz' ? 'active' : ''} ${
                  quizBest !== undefined && quizBest >= Math.ceil((activeLevel?.quiz?.length || 0) * 0.75) ? 'done' : ''
                }`}
                onClick={() => setStage('quiz')}
              >
                <span className="stage-left">
                  <HelpCircle size={17} />
                  3. Quiz
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {quizBest !== undefined ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      {quizBest >= Math.ceil((activeLevel?.quiz?.length || 0) * 0.75) && (
                        <CheckCircle2 size={13} style={{ color: 'var(--success)' }} />
                      )}
                      {quizBest}/{activeLevel?.quiz?.length || 0}
                    </span>
                  ) : (
                    `0/${activeLevel?.quiz?.length || 0}`
                  )}
                </span>
              </button>
            </div>

            {stage === 'notes' && (
              <NotesView
                level={activeLevel}
                checkedNotes={checkedNotes}
                onToggleNote={handleToggleNote}
                onGoToFlashcards={() => setStage('flashcards')}
              />
            )}

            {stage === 'flashcards' && (
              <FlashcardsView
                key={`fc-${activeCourse}-${activeLevel.id}`}
                cards={activeLevel.flashcards}
                cardStatus={cardStatus}
                onSetCardStatus={handleSetCardStatus}
                onResetCards={handleResetCards}
                onGoToQuiz={() => setStage('quiz')}
              />
            )}

            {stage === 'quiz' && (
              <QuizView
                key={activeLevel.id}
                level={activeLevel}
                savedScore={quizBest}
                onSaveScore={handleSaveQuizScore}
                hasNextLevel={activeIndex >= 0 && activeIndex < currentLevels.length - 1}
                onNextLevel={() => handleSelectLevel(currentLevels[activeIndex + 1].id)}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}
export default App;
