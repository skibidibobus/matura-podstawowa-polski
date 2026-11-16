/**
 * Shared technical SVG primitives for CKE-grade physics schematics.
 * Consistent stroke hierarchy, arrowheads, coordinate grids, and surface hatching.
 */
export function SvgDefs({ idPrefix = 'g' }) {
  return (
    <defs>
      <marker id={`${idPrefix}-arr-a`} markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
        <path d="M0,0.5 L7,3.5 L0,6.5 L1.5,3.5 Z" fill="var(--accent)" />
      </marker>
      <marker id={`${idPrefix}-arr-t`} markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
        <path d="M0,0.5 L7,3.5 L0,6.5 L1.5,3.5 Z" fill="var(--text)" />
      </marker>
      <marker id={`${idPrefix}-arr-s`} markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
        <path d="M0,0.5 L7,3.5 L0,6.5 L1.5,3.5 Z" fill="var(--success)" />
      </marker>
      <marker id={`${idPrefix}-arr-m`} markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
        <path d="M0,0.5 L6,3 L0,5.5 Z" fill="var(--text-muted)" />
      </marker>
      <pattern id={`${idPrefix}-hatch`} width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="8" stroke="var(--text-muted)" strokeWidth="1" strokeOpacity="0.35" />
      </pattern>
      <pattern id={`${idPrefix}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border)" strokeWidth="0.6" strokeOpacity="0.45" />
      </pattern>
    </defs>
  );
}
