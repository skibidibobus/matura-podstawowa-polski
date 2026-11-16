import { useEffect, useState } from 'react';
import { CheckCircle2, Clock, Play, RotateCcw, Send, Trophy, XCircle } from 'lucide-react';
import { MathText } from './MathText';

function formatTimer(seconds) {
  const s = Math.max(0, seconds);
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function DepartmentExamView({
  level,
  savedExamScore,
  onSaveExamScore,
  hasNextLevel = false,
  onNextLevel,
}) {
  const exam = level?.exam;
  const tasks = exam?.tasks || [];
  const totalSeconds = (exam?.timeLimitMin || 20) * 60;

  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    setStarted(false);
    setSubmitted(false);
    setSecondsLeft(totalSeconds);
    setAnswers({});
  }, [level?.id, totalSeconds]);

  useEffect(() => {
    if (!started || submitted) return undefined;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [started, submitted]);

  const gradeTasks = () => {
    let earned = 0;
    let maxPts = 0;
    const results = {};
    for (const t of tasks) {
      maxPts += t.maxPoints || 1;
      const raw = (answers[t.id] || '').trim().replace(',', '.');
      const num = Number.parseFloat(raw);
      const tol = t.tolerance ?? 0.05 * Math.abs(t.expectedValue || 1);
      const ok = Number.isFinite(num) && Math.abs(num - t.expectedValue) <= tol;
      results[t.id] = ok;
      if (ok) earned += t.maxPoints || 1;
    }
    return { earned, maxPts, results };
  };

  useEffect(() => {
    if (started && !submitted && secondsLeft === 0) {
      setSubmitted(true);
      const { earned } = gradeTasks();
      onSaveExamScore?.(level.id, earned);
    }
  }, [secondsLeft, started, submitted]);

  if (!exam || tasks.length === 0) {
    return (
      <div className="empty-state-card">
        <h3>Sprawdzian dla tego działu jest w przygotowaniu</h3>
      </div>
    );
  }

  const maxPtsTotal = tasks.reduce((acc, t) => acc + (t.maxPoints || 1), 0);

  const handleSubmit = () => {
    setSubmitted(true);
    const { earned } = gradeTasks();
    onSaveExamScore?.(level.id, earned);
  };

  const handleRestart = () => {
    setAnswers({});
    setSecondsLeft(totalSeconds);
    setSubmitted(false);
    setStarted(true);
  };

  if (!started) {
    return (
      <div className="exam-intro-card">
        <div className="exam-intro-badge">TRYB SPRAWDZIANU NA CZAS • CKE</div>
        <h2>{exam.title}</h2>
        <p>
          Rozwiąż <strong>{tasks.length} zadania</strong> w czasie <strong>{exam.timeLimitMin} minut</strong>.
          Wpisujesz wyłącznie odpowiedzi końcowe — bez podpowiedzi i rozwiązań w trakcie pisania.
          Każde zadanie zawiera dokładną informację o sposobie zaokrąglenia wyniku (jak na maturze CKE).
        </p>
        {savedExamScore !== undefined && (
          <div className="callout callout-emerald" style={{ marginBottom: 16 }}>
            <div className="callout-title">Twój najlepszy wynik ze sprawdzianu</div>
            <p style={{ margin: 0 }}>
              <strong>{savedExamScore}/{maxPtsTotal} pkt</strong> ({Math.round((savedExamScore / maxPtsTotal) * 100)}%)
            </p>
          </div>
        )}
        <button type="button" className="primary-btn" onClick={() => setStarted(true)}>
          <Play size={16} />
          Rozpocznij sprawdzian ({exam.timeLimitMin} min)
        </button>
      </div>
    );
  }

  const graded = submitted ? gradeTasks() : null;

  return (
    <div className="exam-tasks-stack">
      <div className="exam-timer-bar">
        <div>
          <strong>{exam.title}</strong>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Wpisz same odpowiedzi liczbowe zgodnie z zasadą zaokrąglania w zadaniu.
          </div>
        </div>
        <div className={`exam-timer-pill ${secondsLeft < 180 && !submitted ? 'urgent' : ''}`}>
          <Clock size={16} />
          <span>{submitted ? 'Zakończono' : formatTimer(secondsLeft)}</span>
        </div>
      </div>

      {submitted && graded && (
        <div className="callout callout-emerald">
          <div className="callout-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Trophy size={16} />
            Wynik sprawdzianu: {graded.earned}/{graded.maxPts} pkt ({Math.round((graded.earned / graded.maxPts) * 100)}%)
          </div>
          <p style={{ margin: '6px 0 0' }}>
            {secondsLeft === 0 ? 'Czas upłynął — sprawdzian został automatycznie oceniony.' : 'Sprawdź poniżej klucz odpowiedzi i krótkie wyjaśnienia.'}
          </p>
        </div>
      )}

      {tasks.map((task, idx) => {
        const isCorrect = graded ? graded.results[task.id] : null;
        return (
          <article
            key={task.id}
            className={`exam-task-card ${submitted ? (isCorrect ? 'solved' : 'exam-wrong') : ''}`}
          >
            <div className="exam-task-head">
              <div className="exam-task-meta">
                <span className="note-badge">Zadanie {idx + 1}</span>
                <span className="task-pts-badge">{task.maxPoints} pkt</span>
              </div>
              {submitted && (
                <span className={`task-feedback ${isCorrect ? 'ok' : 'wrong'}`} style={{ marginTop: 0 }}>
                  {isCorrect ? <CheckCircle2 size={15} /> : <XCircle size={15} />}
                  {isCorrect ? `+${task.maxPoints} pkt` : '0 pkt'}
                </span>
              )}
            </div>

            <h3 className="exam-task-title">
              <MathText text={task.title} />
            </h3>
            <div className="exam-task-body">
              <MathText text={task.prompt} />
            </div>

            <div className="exam-rounding-note">
              <strong>Zaokrąglenie (CKE):</strong> <MathText text={task.roundingRule} />
            </div>

            <div className="task-answer-row">
              <label className="task-answer-label" htmlFor={`ex-${task.id}`}>
                Odpowiedź ({task.unit}):
              </label>
              <input
                id={`ex-${task.id}`}
                type="text"
                className="task-answer-input"
                disabled={submitted}
                placeholder="Wpisz liczbę..."
                value={answers[task.id] || ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [task.id]: e.target.value }))}
              />
            </div>

            {submitted && (
              <div className="task-solution-box">
                <div>
                  <strong>Poprawna odpowiedź:</strong> {task.officialAnswer}
                </div>
                <div style={{ marginTop: 4, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <MathText text={task.shortExplanation} />
                </div>
              </div>
            )}
          </article>
        );
      })}

      <div className="footer-actions">
        {!submitted ? (
          <button type="button" className="primary-btn" onClick={handleSubmit}>
            <Send size={15} />
            Zakończ i sprawdź sprawdzian
          </button>
        ) : (
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button type="button" className="secondary-btn" onClick={handleRestart}>
              <RotateCcw size={15} />
              Rozwiąż sprawdzian ponownie
            </button>
            {hasNextLevel && onNextLevel && (
              <button type="button" className="primary-btn" onClick={onNextLevel}>
                Przejdź do następnego działu →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
