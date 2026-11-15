import { useState } from 'react';
import { Check, ArrowRight, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';

export function NotesView({ level, checkedNotes, onToggleNote, onGoToFlashcards }) {
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

  return (
    <div className="notes-stack">
      {notes.map((section) => {
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

            {section.intro && <div className="section-intro">{section.intro}</div>}

            {blocks.map((block, bIdx) => {
              if (block.type === 'prose') {
                return (
                  <div key={bIdx} className="prose-block">
                    {block.heading && <h3 className="prose-heading">{block.heading}</h3>}
                    {(block.paragraphs || []).map((p, pIdx) => (
                      <p key={pIdx} className="prose-p">
                        {p}
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
                    <div className="callout-title">{block.title}</div>
                    <ul>
                      {(block.items || []).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
              if (block.type === 'quote') {
                return (
                  <div key={bIdx} className="quote-box">
                    <span className="quote-label">{block.label}</span>
                    {block.text}
                    {block.analysis && (
                      <div className="quote-analysis">{block.analysis}</div>
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
                            <div className="term-title">{item.term}</div>
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
                          <p className="term-desc">{item.desc}</p>

                          {hasDetails && isExpanded && (
                            <div
                              className="term-details"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {item.details.summary && (
                                <p className="detail-summary">{item.details.summary}</p>
                              )}
                              {item.details.bullets && item.details.bullets.length > 0 && (
                                <div className="detail-group">
                                  <div className="detail-label">Kluczowe informacje i sceny:</div>
                                  <ul className="detail-list">
                                    {item.details.bullets.map((b, bi) => (
                                      <li key={bi}>{b}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {item.details.essayUse && (
                                <div className="detail-essay">
                                  <Sparkles size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                                  <div>
                                    <strong>Jak użyć w rozprawce / na teście:</strong>{' '}
                                    {item.details.essayUse}
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
        <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
          Kliknij dowolną kartę powyżej, aby rozwinąć pełne wyjaśnienie, streszczenie i argumenty.
        </span>
        <button type="button" className="primary-btn" onClick={onGoToFlashcards}>
          Przejdź do fiszek
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
