import { PHYSICS_DIAGRAMS_PHASE2_3 } from './phase2_3';

/**
 * Vector SVG diagrams for Physics (Matura Rozszerzona).
 * All strokes/fills use CSS theme variables (--text, --text-muted, --accent, --border, --success, --warning)
 * so every diagram renders crisply in both Focus (dark) and Papier (light) themes.
 */

export const PHYSICS_DIAGRAMS = {
  ...PHYSICS_DIAGRAMS_PHASE2_3,
  'svg-01-wektory-skladanie': () => (
    <svg viewBox="0 0 460 190" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-accent" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="var(--accent)" />
        </marker>
        <marker id="arr-text" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="var(--text)" />
        </marker>
        <marker id="arr-ok" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="var(--success)" />
        </marker>
      </defs>
      {/* Left: Metoda rownolegloboku (dodawanie) */}
      <text x="110" y="20" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">
        Dodawanie: a + b = c
      </text>
      <line x1="35" y1="150" x2="145" y2="150" stroke="var(--text)" strokeWidth="2.2" markerEnd="url(#arr-text)" />
      <text x="90" y="168" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="600">a</text>

      <line x1="35" y1="150" x2="80" y2="65" stroke="var(--text)" strokeWidth="2.2" markerEnd="url(#arr-text)" />
      <text x="44" y="102" fill="var(--text)" fontSize="13" fontWeight="600">b</text>

      <line x1="80" y1="65" x2="190" y2="65" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="145" y1="150" x2="190" y2="65" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 4" />

      <line x1="35" y1="150" x2="188" y2="67" stroke="var(--accent)" strokeWidth="2.6" markerEnd="url(#arr-accent)" />
      <text x="128" y="96" fill="var(--accent)" fontSize="13" fontWeight="700">c = a + b</text>

      {/* Divider */}
      <line x1="230" y1="25" x2="230" y2="175" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Right: Odejmowanie (zmiana predkosci dv = v2 - v1) */}
      <text x="345" y="20" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">
        Odejmowanie: Δv = v₂ − v₁
      </text>
      <line x1="275" y1="145" x2="395" y2="145" stroke="var(--text)" strokeWidth="2.2" markerEnd="url(#arr-text)" />
      <text x="340" y="164" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="600">v₁</text>

      <line x1="275" y1="145" x2="345" y2="62" stroke="var(--text)" strokeWidth="2.2" markerEnd="url(#arr-text)" />
      <text x="295" y="95" fill="var(--text)" fontSize="13" fontWeight="600">v₂</text>

      <line x1="395" y1="145" x2="347" y2="64" stroke="var(--success)" strokeWidth="2.6" markerEnd="url(#arr-ok)" />
      <text x="385" y="102" fill="var(--success)" fontSize="13" fontWeight="700">Δv</text>
    </svg>
  ),

  'svg-01-rozklad-na-osie': () => (
    <svg viewBox="0 0 420 200" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-ax" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="var(--text-muted)" />
        </marker>
        <marker id="arr-f" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="var(--accent)" />
        </marker>
        <marker id="arr-comp" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="var(--success)" />
        </marker>
      </defs>
      {/* Axes */}
      <line x1="60" y1="160" x2="350" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arr-ax)" />
      <text x="358" y="164" fill="var(--text-muted)" fontSize="12">x</text>
      <line x1="75" y1="175" x2="75" y2="22" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arr-ax)" />
      <text x="64" y="24" fill="var(--text-muted)" fontSize="12">y</text>

      {/* Dashed projections */}
      <line x1="255" y1="55" x2="255" y2="160" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="75" y1="55" x2="255" y2="55" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Components */}
      <line x1="75" y1="160" x2="252" y2="160" stroke="var(--success)" strokeWidth="2.5" markerEnd="url(#arr-comp)" />
      <text x="165" y="180" textAnchor="middle" fill="var(--success)" fontSize="13" fontWeight="700">
        Fₓ = F · cos α
      </text>

      <line x1="75" y1="160" x2="75" y2="58" stroke="var(--success)" strokeWidth="2.5" markerEnd="url(#arr-comp)" />
      <text x="68" y="110" textAnchor="end" fill="var(--success)" fontSize="13" fontWeight="700">
        Fᵧ = F · sin α
      </text>

      {/* Main vector */}
      <line x1="75" y1="160" x2="253" y2="56" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arr-f)" />
      <text x="172" y="95" fill="var(--accent)" fontSize="14" fontWeight="700">F</text>

      {/* Angle arc */}
      <path d="M 120 160 A 45 45 0 0 0 113 137" fill="none" stroke="var(--text)" strokeWidth="1.5" />
      <text x="128" y="147" fill="var(--text)" fontSize="12" fontWeight="600">α</text>
    </svg>
  ),

  'svg-01-wykres-styczna-pole': () => (
    <svg viewBox="0 0 460 190" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      {/* Left: Nachylenie stycznej */}
      <text x="115" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">
        Nachylenie = Δy / Δx (np. a = Δv/Δt)
      </text>
      <line x1="35" y1="160" x2="205" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="35" y1="160" x2="35" y2="30" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="45" y1="145" x2="190" y2="45" stroke="var(--accent)" strokeWidth="2.5" />
      {/* Triangle */}
      <line x1="75" y1="124" x2="155" y2="124" stroke="var(--success)" strokeWidth="1.8" strokeDasharray="4 3" />
      <line x1="155" y1="124" x2="155" y2="69" stroke="var(--success)" strokeWidth="1.8" strokeDasharray="4 3" />
      <text x="115" y="140" textAnchor="middle" fill="var(--success)" fontSize="11" fontWeight="600">Δx</text>
      <text x="163" y="100" fill="var(--success)" fontSize="11" fontWeight="600">Δy</text>

      {/* Divider */}
      <line x1="230" y1="25" x2="230" y2="175" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Right: Pole pod wykresem */}
      <text x="345" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">
        Pole pod wykresem (np. s = pole pod v(t))
      </text>
      <line x1="260" y1="160" x2="435" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="260" y1="160" x2="260" y2="30" stroke="var(--text-muted)" strokeWidth="1.5" />
      <polygon points="275,160 275,110 405,50 405,160" fill="var(--accent)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="2" />
      <text x="342" y="128" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">Pole = Δs</text>
    </svg>
  ),

  'svg-01-niepewnosci-prosta': () => (
    <svg viewBox="0 0 420 190" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="160" x2="380" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="50" y1="160" x2="50" y2="20" stroke="var(--text-muted)" strokeWidth="1.5" />
      <text x="385" y="164" fill="var(--text-muted)" fontSize="12">x</text>
      <text x="40" y="24" fill="var(--text-muted)" fontSize="12">y</text>

      {/* Best fit line */}
      <line x1="65" y1="145" x2="360" y2="35" stroke="var(--accent)" strokeWidth="2.4" />

      {/* Error bars & points */}
      {[
        [100, 130, 12, 10],
        [170, 108, 12, 10],
        [240, 77, 12, 10],
        [310, 56, 12, 10],
      ].map(([cx, cy, dx, dy], i) => (
        <g key={i}>
          <rect
            x={cx - dx}
            y={cy - dy}
            width={dx * 2}
            height={dy * 2}
            fill="var(--success)"
            fillOpacity="0.12"
            stroke="var(--success)"
            strokeWidth="1"
          />
          <line x1={cx} y1={cy - dy} x2={cx} y2={cy + dy} stroke="var(--text)" strokeWidth="1.4" />
          <line x1={cx - dx} y1={cy} x2={cx + dx} y2={cy} stroke="var(--text)" strokeWidth="1.4" />
          <circle cx={cx} cy={cy} r="3.5" fill="var(--text)" />
        </g>
      ))}
      <text x="220" y="180" textAnchor="middle" fill="var(--text-muted)" fontSize="11">
        Prosta najlepszego dopasowania przechodzi przez wszystkie prostokąty niepewności
      </text>
    </svg>
  ),

  'svg-02-droga-przemieszczenie': () => (
    <svg viewBox="0 0 420 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-disp" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="var(--accent)" />
        </marker>
      </defs>
      <path d="M 60 120 Q 140 20 220 95 T 360 75" fill="none" stroke="var(--text)" strokeWidth="2.2" strokeDasharray="5 4" />
      <line x1="60" y1="120" x2="356" y2="76" stroke="var(--accent)" strokeWidth="2.6" markerEnd="url(#arr-disp)" />
      <circle cx="60" cy="120" r="5" fill="var(--success)" />
      <circle cx="360" cy="75" r="5" fill="var(--accent)" />
      <text x="52" y="140" fill="var(--success)" fontSize="12" fontWeight="700">A (start)</text>
      <text x="350" y="62" fill="var(--accent)" fontSize="12" fontWeight="700">B (koniec)</text>
      <text x="155" y="45" fill="var(--text)" fontSize="12" fontWeight="600">Droga s (długość toru)</text>
      <text x="215" y="122" fill="var(--accent)" fontSize="12" fontWeight="700">Przemieszczenie Δr⃗ (wektor)</text>
    </svg>
  ),

  'svg-02-wykresy-ruchu': () => (
    <svg viewBox="0 0 460 165" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      {/* x(t) */}
      <text x="75" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">x(t) — parabola</text>
      <line x1="20" y1="135" x2="135" y2="135" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="20" y1="135" x2="20" y2="30" stroke="var(--text-muted)" strokeWidth="1.5" />
      <path d="M 20 135 Q 80 130 125 38" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <text x="132" y="148" fill="var(--text-muted)" fontSize="11">t</text>

      {/* v(t) */}
      <text x="230" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">v(t) — liniowy</text>
      <line x1="175" y1="135" x2="290" y2="135" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="175" y1="135" x2="175" y2="30" stroke="var(--text-muted)" strokeWidth="1.5" />
      <polygon points="175,135 175,115 280,45 280,135" fill="var(--success)" fillOpacity="0.16" />
      <line x1="175" y1="115" x2="280" y2="45" stroke="var(--success)" strokeWidth="2.5" />
      <text x="235" y="122" fill="var(--success)" fontSize="10" fontWeight="700">Pole = Δx</text>

      {/* a(t) */}
      <text x="385" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">a(t) — stałe</text>
      <line x1="330" y1="135" x2="445" y2="135" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="330" y1="135" x2="330" y2="30" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="330" y1="75" x2="435" y2="75" stroke="var(--accent)" strokeWidth="2.5" />
      <text x="382" y="67" textAnchor="middle" fill="var(--accent)" fontSize="11" fontWeight="600">a = const</text>
    </svg>
  ),

  'svg-02-rzut-ukosny': () => (
    <svg viewBox="0 0 460 195" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-p" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="var(--accent)" />
        </marker>
        <marker id="arr-g" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="var(--success)" />
        </marker>
      </defs>
      <line x1="30" y1="165" x2="430" y2="165" stroke="var(--text-muted)" strokeWidth="1.5" />
      <path d="M 55 165 Q 230 -25 405 165" fill="none" stroke="var(--text)" strokeWidth="2.2" strokeDasharray="5 4" />

      {/* Start v0 */}
      <line x1="55" y1="165" x2="110" y2="95" stroke="var(--accent)" strokeWidth="2.4" markerEnd="url(#arr-p)" />
      <text x="64" y="112" fill="var(--accent)" fontSize="12" fontWeight="700">v₀</text>

      {/* Top point */}
      <circle cx="230" cy="70" r="4" fill="var(--success)" />
      <line x1="230" y1="70" x2="285" y2="70" stroke="var(--success)" strokeWidth="2.4" markerEnd="url(#arr-g)" />
      <text x="230" y="56" textAnchor="middle" fill="var(--success)" fontSize="11" fontWeight="700">
        H_max: vᵧ = 0, v = vₓ
      </text>
      <line x1="230" y1="70" x2="230" y2="165" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* End */}
      <text x="230" y="183" textAnchor="middle" fill="var(--text-muted)" fontSize="12">Zasięg Z = v₀ₓ · t_całk</text>
    </svg>
  ),

  'svg-02-ruch-okrag': () => (
    <svg viewBox="0 0 360 190" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-v" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="var(--accent)" />
        </marker>
        <marker id="arr-ad" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="var(--success)" />
        </marker>
      </defs>
      <circle cx="170" cy="100" r="65" fill="none" stroke="var(--border)" strokeWidth="2" strokeDasharray="5 4" />
      <circle cx="170" cy="100" r="3.5" fill="var(--text-muted)" />
      <line x1="170" y1="100" x2="235" y2="100" stroke="var(--text-muted)" strokeWidth="1.2" />
      <text x="205" y="114" fill="var(--text-muted)" fontSize="12">r</text>

      {/* Body at top */}
      <circle cx="170" cy="35" r="5" fill="var(--text)" />
      <line x1="170" y1="35" x2="245" y2="35" stroke="var(--accent)" strokeWidth="2.6" markerEnd="url(#arr-v)" />
      <text x="252" y="39" fill="var(--accent)" fontSize="12" fontWeight="700">v⃗ (styczna)</text>

      <line x1="170" y1="35" x2="170" y2="85" stroke="var(--success)" strokeWidth="2.6" markerEnd="url(#arr-ad)" />
      <text x="178" y="72" fill="var(--success)" fontSize="12" fontWeight="700">a_d (do środka)</text>
    </svg>
  ),
};
