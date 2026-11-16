import { PHYSICS_DIAGRAMS } from '../data/fizyka/diagrams';

/**
 * Renders vector SVG physics diagrams that adapt to light/dark themes via CSS variables.
 */
export function DiagramRenderer({ svgId, title, caption, alt }) {
  const renderSvg = PHYSICS_DIAGRAMS[svgId];

  return (
    <figure className="diagram-card">
      {title && <figcaption className="diagram-title">{title}</figcaption>}
      <div className="diagram-canvas" role="img" aria-label={alt || title || svgId}>
        {renderSvg ? (
          renderSvg()
        ) : (
          <div className="diagram-placeholder">
            Schemat w przygotowaniu: <code>{svgId}</code>
          </div>
        )}
      </div>
      {caption && <div className="diagram-caption">{caption}</div>}
    </figure>
  );
}
