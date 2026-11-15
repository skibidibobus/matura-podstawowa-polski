import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, Shuffle, XCircle } from 'lucide-react';

function findFirstUnansweredIndex(list, statusMap) {
  if (!Array.isArray(list) || list.length === 0) return 0;
  const idx = list.findIndex((c) => !statusMap?.[c.id]);
  return idx >= 0 ? idx : 0;
}

export function FlashcardsView({
  cards,
  cardStatus,
  onSetCardStatus,
  onResetCards,
  onGoToQuiz,
  isReviewPool = false,
}) {
  const [filterReviewOnly, setFilterReviewOnly] = useState(false);
  const [shuffledOrder, setShuffledOrder] = useState(null);
  const [index, setIndex] = useState(() => findFirstUnansweredIndex(cards, cardStatus));
  const [flipped, setFlipped] = useState(false);
  const touchStartX = useRef(null);

  const baseCards =
    filterReviewOnly && !isReviewPool
      ? cards.filter((c) => cardStatus[c.id] === 'review')
      : cards;

  const visibleCards = shuffledOrder
    ? shuffledOrder.map((id) => baseCards.find((c) => c.id === id)).filter(Boolean)
    : baseCards;

  const safeIndex = visibleCards.length === 0 ? 0 : Math.min(index, visibleCards.length - 1);
  const currentCard = visibleCards[safeIndex];

  useEffect(() => {
    setFilterReviewOnly(false);
    setShuffledOrder(null);
    setIndex(findFirstUnansweredIndex(cards, cardStatus));
    setFlipped(false);
  }, [cards]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space') {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key === 'ArrowRight') {
        if (safeIndex < visibleCards.length - 1) {
          setIndex((i) => i + 1);
          setFlipped(false);
        }
      } else if (e.key === 'ArrowLeft') {
        if (safeIndex > 0) {
          setIndex((i) => i - 1);
          setFlipped(false);
        }
      } else if (e.key === '1' && currentCard) {
        handleRate('review');
      } else if (e.key === '2' && currentCard) {
        handleRate('known');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const handlePrev = () => {
    if (safeIndex > 0) {
      setIndex(safeIndex - 1);
      setFlipped(false);
    }
  };

  const handleNext = () => {
    if (safeIndex < visibleCards.length - 1) {
      setIndex(safeIndex + 1);
      setFlipped(false);
    }
  };

  const handleRate = (status) => {
    if (!currentCard) return;
    onSetCardStatus(currentCard.id, status);
    if (safeIndex < visibleCards.length - 1) {
      setTimeout(() => {
        setIndex((i) => Math.min(i + 1, visibleCards.length - 1));
        setFlipped(false);
      }, 140);
    }
  };

  const handleShuffle = () => {
    const ids = [...baseCards].map((c) => c.id);
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    setShuffledOrder(ids);
    setIndex(0);
    setFlipped(false);
  };

  const handleRestart = () => {
    const ids = (cards || []).map((c) => c.id);
    if (onResetCards && ids.length > 0) {
      onResetCards(ids);
    }
    setFilterReviewOnly(false);
    setShuffledOrder(null);
    setIndex(0);
    setFlipped(false);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) handlePrev();
    else if (diff < -50) handleNext();
    touchStartX.current = null;
  };

  if (visibleCards.length === 0) {
    return (
      <div className="note-section" style={{ textAlign: 'center', padding: '42px 24px' }}>
        <CheckCircle2 size={36} style={{ color: 'var(--success)', marginBottom: 10 }} />
        <h3 style={{ margin: '0 0 8px' }}>Brak fiszek do powtórki!</h3>
        <p style={{ color: 'var(--text-muted)', margin: '0 0 18px' }}>
          {isReviewPool
            ? 'Nie masz teraz żadnych trudnych fiszek oznaczonych jako „Do powtórki”.'
            : 'Wszystkie trudne fiszki w tym bloku zostały już opanowane.'}
        </p>
        {!isReviewPool && filterReviewOnly && (
          <button type="button" className="secondary-btn" onClick={() => setFilterReviewOnly(false)}>
            Pokaż wszystkie fiszki
          </button>
        )}
      </div>
    );
  }

  const currentStatus = cardStatus[currentCard.id];
  const reviewCountInDeck = cards.filter((c) => cardStatus[c.id] === 'review').length;

  return (
    <div className="flashcards-wrap">
      <div className="fc-toolbar">
        <div className="fc-counter">
          Fiszka {safeIndex + 1} / {visibleCards.length}
        </div>
        <div className="fc-filter-group">
          {!isReviewPool && (
            <button
              type="button"
              className={`pill-btn ${filterReviewOnly ? 'active' : ''}`}
              onClick={() => {
                setFilterReviewOnly((v) => !v);
                setShuffledOrder(null);
                setIndex(0);
                setFlipped(false);
              }}
            >
              <RotateCcw size={14} />
              Tylko do powtórki ({reviewCountInDeck})
            </button>
          )}
          <button type="button" className="pill-btn" onClick={handleRestart} title="Wyczyść odpowiedzi w tym zestawie i zacznij od pierwszej fiszki">
            <RotateCcw size={14} />
            Zrób jeszcze raz
          </button>
          <button type="button" className="pill-btn" onClick={handleShuffle}>
            <Shuffle size={14} />
            Wymieszaj
          </button>
        </div>
      </div>

      <div
        className="fc-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`fc-card ${flipped ? 'flipped' : ''}`}
          onClick={() => setFlipped((f) => !f)}
          role="button"
          tabIndex={0}
          aria-label="Obróć fiszkę"
        >
          <div className="fc-face front">
            <div className="fc-face-top">
              <span className="fc-face-label">Pytanie / Pojęcie</span>
              {currentCard.category && (
                <span className="fc-category-badge">{currentCard.category}</span>
              )}
            </div>
            <div className="fc-text">{currentCard.front}</div>
            <div className="fc-face-bottom">
              {currentCard.hint && (
                <div className="fc-card-hint">💡 Wskazówka: {currentCard.hint}</div>
              )}
              <span className="fc-hint">Kliknij lub naciśnij Spację, aby zobaczyć odpowiedź</span>
            </div>
          </div>
          <div className="fc-face back">
            <div className="fc-face-top">
              <span className="fc-face-label">Odpowiedź</span>
              {currentCard.category && (
                <span className="fc-category-badge">{currentCard.category}</span>
              )}
            </div>
            <div className="fc-text">{currentCard.back}</div>
            <span className="fc-hint">Oceń: [1] Do powtórki • [2] Umiem</span>
          </div>
        </div>
      </div>

      <div className="fc-controls">
        <button
          type="button"
          className="nav-arrow-btn"
          onClick={handlePrev}
          disabled={safeIndex === 0}
          aria-label="Poprzednia fiszka"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          className={`rate-btn review ${currentStatus === 'review' ? 'selected' : ''}`}
          onClick={() => handleRate('review')}
        >
          <XCircle size={17} />
          Do powtórki
        </button>

        <button
          type="button"
          className={`rate-btn known ${currentStatus === 'known' ? 'selected' : ''}`}
          onClick={() => handleRate('known')}
        >
          <CheckCircle2 size={17} />
          Umiem
        </button>

        <button
          type="button"
          className="nav-arrow-btn"
          onClick={handleNext}
          disabled={safeIndex === visibleCards.length - 1}
          aria-label="Następna fiszka"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      {!isReviewPool && onGoToQuiz && (
        <div className="footer-actions" style={{ width: '100%', maxWidth: 680 }}>
          <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
            Czujesz, że pamiętasz fiszki? Sprawdź się w mini-quizie!
          </span>
          <button type="button" className="primary-btn" onClick={onGoToQuiz}>
            Przejdź do quizu
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
