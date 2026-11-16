import { useState } from 'react';
import { Check, CheckCircle2, ChevronDown, ChevronUp, ExternalLink, HelpCircle, Lightbulb, Target } from 'lucide-react';
import { MathText } from './MathText';
import { DiagramRenderer } from './DiagramRenderer';

export function ExamTaskView({
  level,
  completedTasks = {},
  onToggleTask,
  hasNextLevel = false,
  onNextLevel,
}) {
  const tasks = level?.examTasks || [];
  const [openHints, setOpenHints] = useState({});
  const [openSolutions, setOpenSolutions] = useState({});
  const [userInputs, setUserInputs] = useState({});
  const [checkedInputs, setCheckedInputs] = useState({});
  const [filterDiff, setFilterDiff] = useState('all');

  if (tasks.length === 0) {
    return (
      <div className="empty-state-card">
        <Target size={28} style={{ color: 'var(--accent)' }} />
        <h3>Zadania CKE dla tego działu są w trakcie opracowania</h3>
        <p>
          W pierwszym etapie udostępniamy pełne zadania z Działu 1 i Działu 2 oraz architekturę dla pozostałych 10 działów.
        </p>
      </div>
    );
  }

  const filteredTasks =
    filterDiff === 'all' ? tasks : tasks.filter((t) => t.difficulty === filterDiff);

  const solvedCount = tasks.filter((t) => completedTasks[t.id]).length;

  const handleCheckNumeric = (task) => {
    const raw = (userInputs[task.id] || '').trim().replace(',', '.');
    const num = Number.parseFloat(raw);
    if (!Number.isFinite(num) || task.expectedValue === undefined) {
      setCheckedInputs((prev) => ({ ...prev, [task.id]: 'invalid' }));
      return;
    }
    const tol = task.tolerance ?? 0.05 * Math.abs(task.expectedValue || 1);
    const isOk = Math.abs(num - task.expectedValue) <= tol;
    setCheckedInputs((prev) => ({ ...prev, [task.id]: isOk ? 'ok' : 'wrong' }));
    if (isOk && !completedTasks[task.id]) {
      onToggleTask?.(task.id);
    }
  };

  return (
    <div className="exam-tasks-stack">
      <div className="exam-tasks-toolbar">
        <div className="exam-tasks-summary">
          <strong>Rozwiązane zadania CKE:</strong> {solvedCount}/{tasks.length}
        </div>
        <div className="topic-pills-bar" style={{ marginBottom: 0 }}>
          {[
            ['all', 'Wszystkie'],
            ['podstawa', 'Podstawa'],
            ['standard', 'Standard'],
            ['wyzwanie', 'Wyzwanie'],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={`topic-pill ${filterDiff === key ? 'active' : ''}`}
              onClick={() => setFilterDiff(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {filteredTasks.map((task, idx) => {
        const isSolved = !!completedTasks[task.id];
        const hintOpen = !!openHints[task.id];
        const solOpen = !!openSolutions[task.id];
        const checkState = checkedInputs[task.id];

        return (
          <article key={task.id} className={`exam-task-card ${isSolved ? 'solved' : ''}`}>
            <div className="exam-task-head">
              <div className="exam-task-meta">
                <span className="note-badge">{task.source}</span>
                <span className="task-pts-badge">{task.maxPoints} pkt</span>
                <span className={`task-diff-badge diff-${task.difficulty || 'standard'}`}>
                  {task.difficulty || 'standard'}
                </span>
              </div>
              <button
                type="button"
                className={`check-note-btn ${isSolved ? 'checked' : ''}`}
                onClick={() => onToggleTask?.(task.id)}
              >
                <Check size={14} />
                {isSolved ? 'Zaliczone' : 'Oznacz jako rozwiązane'}
              </button>
            </div>

            <h3 className="exam-task-title">
              Zadanie {idx + 1}. <MathText text={task.title} />
            </h3>

            <div className="exam-task-body">
              <MathText text={task.prompt} />
            </div>

            {task.svgId && (
              <DiagramRenderer
                svgId={task.svgId}
                title={task.diagramTitle}
                caption={task.diagramCaption}
              />
            )}

            {task.expectedValue !== undefined && (
              <div className="task-answer-row">
                <label className="task-answer-label" htmlFor={`ans-${task.id}`}>
                  Twoja odpowiedź liczbowa {task.unit ? `(${task.unit})` : ''}:
                </label>
                <div className="task-answer-controls">
                  <input
                    id={`ans-${task.id}`}
                    type="text"
                    className="task-answer-input"
                    placeholder="np. 12.5"
                    value={userInputs[task.id] || ''}
                    onChange={(e) =>
                      setUserInputs((prev) => ({ ...prev, [task.id]: e.target.value }))
                    }
                  />
                  <button
                    type="button"
                    className="primary-btn"
                    style={{ padding: '7px 14px', fontSize: '0.85rem' }}
                    onClick={() => handleCheckNumeric(task)}
                  >
                    Sprawdź
                  </button>
                </div>
                {checkState === 'ok' && (
                  <div className="task-feedback ok">
                    <CheckCircle2 size={15} /> Poprawna wartość!
                  </div>
                )}
                {checkState === 'wrong' && (
                  <div className="task-feedback wrong">
                    <HelpCircle size={15} /> Spróbuj ponownie lub zajrzyj do podpowiedzi / rozwiązania.
                  </div>
                )}
                {checkState === 'invalid' && (
                  <div className="task-feedback wrong">
                    Wpisz liczbę (np. 4.5 lub 4,5).
                  </div>
                )}
              </div>
            )}

            <div className="exam-task-actions">
              {task.hint && (
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() =>
                    setOpenHints((prev) => ({ ...prev, [task.id]: !prev[task.id] }))
                  }
                >
                  <Lightbulb size={15} />
                  {hintOpen ? 'Ukryj wskazówkę CKE' : 'Wskazówka (Karta Wzorów)'}
                  {hintOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
              )}

              <button
                type="button"
                className="secondary-btn"
                onClick={() =>
                  setOpenSolutions((prev) => ({ ...prev, [task.id]: !prev[task.id] }))
                }
              >
                {solOpen ? 'Ukryj rozwiązanie i klucz' : 'Rozwiązanie krok po kroku + klucz CKE'}
                {solOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>

              {task.arkuszownikUrl && (
                <a
                  href={task.arkuszownikUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink size={14} />
                  arkuszownik.pl
                </a>
              )}
            </div>

            {hintOpen && task.hint && (
              <div className="callout callout-amber" style={{ marginTop: 12 }}>
                <div className="callout-title">Wskazówka i Karta Wzorów CKE</div>
                <p style={{ margin: 0 }}>
                  <MathText text={task.hint} />
                </p>
              </div>
            )}

            {solOpen && (
              <div className="task-solution-box">
                <div className="task-solution-steps">
                  <strong>Rozwiązanie krok po kroku:</strong>
                  <ol>
                    {(task.solutionSteps || []).map((step, sIdx) => (
                      <li key={sIdx}>
                        <MathText text={step} />
                      </li>
                    ))}
                  </ol>
                </div>
                {task.ckeKey && (
                  <div className="callout callout-emerald" style={{ marginTop: 10 }}>
                    <div className="callout-title">Zasady oceniania (Klucz CKE)</div>
                    <ul>
                      {task.ckeKey.map((rule, rIdx) => (
                        <li key={rIdx}>
                          <MathText text={rule} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </article>
        );
      })}

      {hasNextLevel && onNextLevel && (
        <div className="stage-footer">
          <span />
          <button type="button" className="primary-btn" onClick={onNextLevel}>
            Przejdź do następnego działu →
          </button>
        </div>
      )}
    </div>
  );
}
