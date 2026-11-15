import { useState } from 'react';
import { CheckCircle2, Copy, RotateCcw, Shuffle, Trophy } from 'lucide-react';

function createShuffledOrders(questions) {
  return (questions || []).map((q) => {
    const indices = (q.options || []).map((_, idx) => idx);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });
}

export function QuizView({ level, savedScore, onSaveScore, onNextLevel, hasNextLevel }) {
  const [answers, setAnswers] = useState({});
  const [copied, setCopied] = useState(false);
  const [optionOrders, setOptionOrders] = useState([]);

  const quiz = level?.quiz || [];
  const total = quiz.length;
  const passThreshold = Math.ceil(total * 0.75);
  const answeredCount = Object.keys(answers).length;

  const getOrder = (q, qIdx) => {
    const stored = optionOrders[qIdx];
    if (Array.isArray(stored) && stored.length === (q.options?.length || 0)) {
      return stored;
    }
    return (q.options || []).map((_, idx) => idx);
  };

  const currentScore = quiz.reduce((acc, q, idx) => {
    const order = getOrder(q, idx);
    const displayCorrect = order.indexOf(q.correct);
    return answers[idx] === displayCorrect ? acc + 1 : acc;
  }, 0);

  const handleSelect = (qIdx, optIdx) => {
    if (answers[qIdx] !== undefined) return;
    const next = { ...answers, [qIdx]: optIdx };
    setAnswers(next);
    if (Object.keys(next).length === total) {
      const finalScore = quiz.reduce((acc, q, idx) => {
        const order = getOrder(q, idx);
        const displayCorrect = order.indexOf(q.correct);
        return next[idx] === displayCorrect ? acc + 1 : acc;
      }, 0);
      onSaveScore(level.id, finalScore);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setOptionOrders(createShuffledOrders(quiz));
  };

  const handleShuffleOptions = () => {
    setAnswers({});
    setOptionOrders(createShuffledOrders(quiz));
  };

  const handleCopyPrompt = () => {
    const text = `Skończyłem ${level.code} (${level.title}). Chcę teraz 15-minutowe aktywne odpytywanie z tego bloku — napiszę Ci z pamięci, co zapamiętałem, a Ty mnie sprawdź i dopytaj o braki.`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="quiz-wrap">
      {savedScore !== undefined && (
        <div className="callout emerald" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div>
            <strong>Najlepszy wynik w tym poziomie: {savedScore} / {total}</strong>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              {savedScore >= passThreshold
                ? 'Poziom zaliczony!'
                : `Zdobądź min. ${passThreshold}/${total}, żeby zaliczyć poziom.`}
            </div>
          </div>
          <Trophy size={24} style={{ color: 'var(--success)' }} />
        </div>
      )}

      {quiz.map((q, qIdx) => {
        const order = getOrder(q, qIdx);
        const displayCorrect = order.indexOf(q.correct);
        const chosen = answers[qIdx];
        const isAnswered = chosen !== undefined;
        const chosenOrigIdx = isAnswered ? order[chosen] : null;
        const distractorReason =
          isAnswered && chosen !== displayCorrect && q.whyWrong
            ? q.whyWrong[chosenOrigIdx]
            : null;

        return (
          <div key={q.id || qIdx} className="quiz-card">
            <p className="quiz-q">
              {qIdx + 1}. {q.q}
            </p>
            <div className="quiz-options">
              {order.map((origIdx, optIdx) => {
                let cls = 'quiz-opt';
                if (isAnswered) {
                  if (optIdx === displayCorrect) cls += ' correct';
                  else if (optIdx === chosen) cls += ' wrong';
                }
                return (
                  <button
                    key={optIdx}
                    type="button"
                    className={cls}
                    disabled={isAnswered}
                    onClick={() => handleSelect(qIdx, optIdx)}
                  >
                    {q.options[origIdx]}
                  </button>
                );
              })}
            </div>
            {isAnswered && (
              <div className="quiz-explain">
                <div>
                  <strong>{chosen === displayCorrect ? 'Dobrze!' : 'Błąd.'}</strong> {q.explanation}
                </div>
                {distractorReason && (
                  <div className="quiz-why-wrong">
                    <strong>Dlaczego to pułapka:</strong> {distractorReason}
                  </div>
                )}
                {q.examTip && (
                  <div className="quiz-exam-tip">
                    <strong>💡 Wskazówka CKE:</strong> {q.examTip}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      <div className="footer-actions">
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button type="button" className="secondary-btn" onClick={handleReset}>
            <RotateCcw size={15} />
            Rozwiąż ponownie
          </button>
          <button type="button" className="secondary-btn" onClick={handleShuffleOptions}>
            <Shuffle size={15} />
            Wymieszaj opcje
          </button>
          <button type="button" className="secondary-btn" onClick={handleCopyPrompt}>
            <Copy size={15} />
            {copied ? 'Skopiowano!' : 'Kopiuj tekst do odpytywania na czacie'}
          </button>
        </div>

        {answeredCount === total && total > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontWeight: 700 }}>
              Wynik: {currentScore}/{total} ({Math.round((currentScore / total) * 100)}%)
            </span>
            {hasNextLevel && (
              <button type="button" className="primary-btn" onClick={onNextLevel}>
                <CheckCircle2 size={16} />
                Następny poziom
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
