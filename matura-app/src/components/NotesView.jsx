import { useState } from 'react';
import { Check, ArrowLeft, ArrowRight, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';
import { MathText } from './MathText';
import { DiagramRenderer } from './DiagramRenderer';

export function NotesView({
  level,
  checkedNotes,
  onToggleNote,
  onGoToFlashcards,
  activeNoteId = null,
  onSelectNoteId,
}) {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardKey) => {
    setExpandedCards((prev) => ({ ...prev, [cardKey]: !prev[cardKey] }));
  };

  const toggleAllInSection = (section) => {
    const keys = [];
    (section.blocks || []).forEach((b, bIdx) => {
      if (b.type === 'grid') {
        (b.items || []).forEach((it, iIdx) => {
          if (it.details) keys.push(`${section.id}-${bIdx}-${iIdx}`);
        });
      }
    });
    const allOpen = keys.length > 0 && keys.every((k) => expandedCards[k]);
    const next = { ...expandedCards };
    keys.forEach((k) => {
      next[k] = !allOpen;
    });
    setExpandedCards(next);
  };

  const notes = level?.notes || [];
  const selectedIndex = activeNoteId ? notes.findIndex((n) => n.id === activeNoteId) : -1;
  const visibleNotes = selectedIndex >= 0 ? [notes[selectedIndex]] : notes;

  return (
    <div className="notes-stack">
      {notes.length > 1 && onSelectNoteId && (
        <div className="topic-pills-bar" role="navigation" aria-label="Tematy w bloku">
          <button
            type="button"
            className={`topic-pill ${selectedIndex < 0 ? 'active' : ''}`}
            onClick={() => onSelectNoteId(null)}
          >
            Wszystkie tematy ({notes.length})
          </button>
          {notes.map((n, idx) => {
            const done = !!checkedNotes[n.id];
            const isSel = selectedIndex === idx;
            return (
              <button
                key={n.id}
                type="button"
                className={`topic-pill ${isSel ? 'active' : ''} ${done ? 'done' : ''}`}
                onClick={() => onSelectNoteId(n.id)}
              >
                {done && <Check size={12} />}
                <span>
                  {idx + 1}. {n.title}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {visibleNotes.map((section) => {
        const isChecked = !!checkedNotes[section.id];
        const blocks = section.blocks || [];
        const hasExpandable = blocks.some(
          (b) => b.type === 'grid' && (b.items || []).some((it) => it.details)
        );

        return (
          <section key={section.id} className="note-section">
            <div className="note-section-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <h2 className="note-section-title">{section.title}</h2>
                <span className="note-badge">{section.badge}</span>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {hasExpandable && (
                  <button
                    type="button"
                    className="check-note-btn"
                    onClick={() => toggleAllInSection(section)}
                  >
                    <BookOpen size={14} />
                    Rozwiń / zwiń wszystkie
                  </button>
                )}
                <button
                  type="button"
                  className={`check-note-btn ${isChecked ? 'checked' : ''}`}
                  onClick={() => onToggleNote(section.id)}
                >
                  <Check size={14} />
                  {isChecked ? 'Opanowane' : 'Oznacz jako przeczytane'}
                </button>
              </div>
            </div>

            {section.intro && (
              <div className="section-intro">
                <MathText text={section.intro} />
              </div>
            )}

            {blocks.map((block, bIdx) => {
              if (block.type === 'diagram') {
                return (
                  <DiagramRenderer
                    key={bIdx}
                    svgId={block.svgId}
                    title={block.title}
                    caption={block.caption}
                    alt={block.alt}
                  />
                );
              }
              if (block.type === 'prose') {
                return (
                  <div key={bIdx} className="prose-block">
                    {block.heading && <h3 className="prose-heading"><MathText text={block.heading} /></h3>}
                    {(block.paragraphs || []).map((p, pIdx) => (
                      <p key={pIdx} className="prose-p">
                        <MathText text={p} />
                      </p>
                    ))}
                  </div>
                );
              }
              if (block.type === 'callout') {
                const variantClass =
                  block.variant === 'emerald'
                    ? 'emerald'
                    : block.variant === 'blue'
                    ? 'blue'
                    : 'amber';
                return (
                  <div
                    key={bIdx}
                    className={`callout ${variantClass}`}
                  >
                    <div className="callout-title"><MathText text={block.title} /></div>
                    <ul>
                      {(block.items || []).map((item, i) => (
                        <li key={i}><MathText text={item} /></li>
                      ))}
                    </ul>
                  </div>
                );
              }
              if (block.type === 'quote') {
                return (
                  <div key={bIdx} className="quote-box">
                    <span className="quote-label"><MathText text={block.label} /></span>
                    <MathText text={block.text} />
                    {block.analysis && (
                      <div className="quote-analysis"><MathText text={block.analysis} /></div>
                    )}
                  </div>
                );
              }
              if (block.type === 'grid') {
                return (
                  <div key={bIdx} className="term-grid">
                    {block.items.map((item, iIdx) => {
                      const cardKey = `${section.id}-${bIdx}-${iIdx}`;
                      const isExpanded = !!expandedCards[cardKey];
                      const hasDetails = !!item.details;

                      return (
                        <div
                          key={iIdx}
                          className={`term-card ${hasDetails ? 'clickable' : ''} ${
                            isExpanded ? 'expanded' : ''
                          }`}
                          onClick={hasDetails ? () => toggleCard(cardKey) : undefined}
                          role={hasDetails ? 'button' : undefined}
                          tabIndex={hasDetails ? 0 : undefined}
                          onKeyDown={
                            hasDetails
                              ? (e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    toggleCard(cardKey);
                                  }
                                }
                              : undefined
                          }
                        >
                          <div className="term-card-top">
                            <div className="term-title"><MathText text={item.term} /></div>
                            {hasDetails && (
                              <span className="expand-pill">
                                {isExpanded ? (
                                  <>
                                    Zwiń <ChevronUp size={13} />
                                  </>
                                ) : (
                                  <>
                                    Szczegóły <ChevronDown size={13} />
                                  </>
                                )}
                              </span>
                            )}
                          </div>
                          <p className="term-desc"><MathText text={item.desc} /></p>

                          {hasDetails && isExpanded && (
                            <div
                              className="term-details"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {item.details.summary && (
                                <p className="detail-summary"><MathText text={item.details.summary} /></p>
                              )}
                              {item.details.bullets && item.details.bullets.length > 0 && (
                                <div className="detail-group">
                                  <div className="detail-label">Kluczowe informacje:</div>
                                  <ul className="detail-list">
                                    {item.details.bullets.map((b, bi) => (
                                      <li key={bi}><MathText text={b} /></li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {item.details.essayUse && (
                                <div className="detail-essay">
                                  <Sparkles size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                                  <div>
                                    <strong>Zastosowanie na maturze:</strong>{' '}
                                    <MathText text={item.details.essayUse} />
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              }
              return null;
            })}
          </section>
        );
      })}

      <div className="footer-actions">
        {selectedIndex >= 0 && onSelectNoteId ? (
          <>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="secondary-btn"
                onClick={() => onSelectNoteId(null)}
              >
                <ArrowLeft size={15} />
                Wszystkie tematy
              </button>
              {selectedIndex > 0 && (
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => onSelectNoteId(notes[selectedIndex - 1].id)}
                >
                  <ArrowLeft size={15} />
                  Poprzedni temat
                </button>
              )}
            </div>
            {selectedIndex < notes.length - 1 ? (
              <button
                type="button"
                className="primary-btn"
                onClick={() => onSelectNoteId(notes[selectedIndex + 1].id)}
              >
                Następny temat
                <ArrowRight size={16} />
              </button>
            ) : (
              <button type="button" className="primary-btn" onClick={onGoToFlashcards}>
                Przejdź do fiszek
                <ArrowRight size={16} />
              </button>
            )}
          </>
        ) : (
          <>
            <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              Kliknij dowolną kartę powyżej, aby rozwinąć pełne wyjaśnienie, streszczenie i argumenty.
            </span>
            <button type="button" className="primary-btn" onClick={onGoToFlashcards}>
              Przejdź do fiszek
              <ArrowRight size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
