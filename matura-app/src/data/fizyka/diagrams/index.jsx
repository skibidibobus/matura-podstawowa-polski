import { PHYSICS_DIAGRAMS_PHASE2_3 } from './phase2_3';
import { SvgDefs } from './svgPrimitives';

/**
 * Vector SVG diagrams for Physics (Matura Rozszerzona) — Departments 1–2 + re-exports 3–12.
 * Styled as clean CKE/textbook technical schematics with coordinate grids, proper arrowheads,
 * and theme-aware CSS variables.
 */
export const PHYSICS_DIAGRAMS = {
  ...PHYSICS_DIAGRAMS_PHASE2_3,

  'svg-01-wektory-skladanie': () => (
    <svg viewBox="0 0 480 200" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s01w" />
      <rect x="18" y="28" width="200" height="150" fill="url(#s01w-grid)" rx="6" />
      <rect x="262" y="28" width="200" height="150" fill="url(#s01w-grid)" rx="6" />

      <text x="118" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="11.5" fontWeight="700">
        Dodawanie (metoda równoległoboku): c⃗ = a⃗ + b⃗
      </text>
      <line x1="38" y1="158" x2="152" y2="158" stroke="var(--text)" strokeWidth="2.2" markerEnd="url(#s01w-arr-t)" />
      <text x="95" y="174" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="700">a⃗</text>

      <line x1="38" y1="158" x2="84" y2="62" stroke="var(--text)" strokeWidth="2.2" markerEnd="url(#s01w-arr-t)" />
      <text x="45" y="106" fill="var(--text)" fontSize="12" fontWeight="700">b⃗</text>

      <line x1="84" y1="62" x2="198" y2="62" stroke="var(--text-muted)" strokeWidth="1.2" strokeDasharray="4 4" />
      <line x1="152" y1="158" x2="198" y2="62" stroke="var(--text-muted)" strokeWidth="1.2" strokeDasharray="4 4" />

      <line x1="38" y1="158" x2="195" y2="64" stroke="var(--accent)" strokeWidth="2.6" markerEnd="url(#s01w-arr-a)" />
      <text x="132" y="96" fill="var(--accent)" fontSize="12.5" fontWeight="700">c⃗ = a⃗ + b⃗</text>
      <circle cx="38" cy="158" r="3" fill="var(--text)" />

      <line x1="240" y1="26" x2="240" y2="182" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="4 3" />

      <text x="362" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="11.5" fontWeight="700">
        Odejmowanie: Δv⃗ = v⃗₂ − v⃗₁
      </text>
      <line x1="286" y1="152" x2="416" y2="152" stroke="var(--text)" strokeWidth="2.2" markerEnd="url(#s01w-arr-t)" />
      <text x="352" y="170" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="700">v⃗₁</text>

      <line x1="286" y1="152" x2="358" y2="60" stroke="var(--text)" strokeWidth="2.2" markerEnd="url(#s01w-arr-t)" />
      <text x="304" y="98" fill="var(--text)" fontSize="12" fontWeight="700">v⃗₂</text>

      <line x1="416" y1="152" x2="361" y2="63" stroke="var(--success)" strokeWidth="2.6" markerEnd="url(#s01w-arr-s)" />
      <text x="404" y="104" fill="var(--success)" fontSize="12.5" fontWeight="700">Δv⃗</text>
      <circle cx="286" cy="152" r="3" fill="var(--text)" />
    </svg>
  ),

  'svg-01-rozklad-na-osie': () => (
    <svg viewBox="0 0 440 210" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s01r" />
      <rect x="75" y="25" width="280" height="145" fill="url(#s01r-grid)" />
      <line x1="55" y1="170" x2="375" y2="170" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s01r-arr-m)" />
      <text x="382" y="174" fill="var(--text-muted)" fontSize="12" fontWeight="700">x</text>
      <line x1="75" y1="188" x2="75" y2="20" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s01r-arr-m)" />
      <text x="64" y="22" fill="var(--text-muted)" fontSize="12" fontWeight="700">y</text>

      <line x1="275" y1="55" x2="275" y2="170" stroke="var(--text-muted)" strokeWidth="1.2" strokeDasharray="4 4" />
      <line x1="75" y1="55" x2="275" y2="55" stroke="var(--text-muted)" strokeWidth="1.2" strokeDasharray="4 4" />
      {/* Right-angle markers */}
      <polyline points="265,170 265,160 275,160" fill="none" stroke="var(--text-muted)" strokeWidth="1.1" />
      <polyline points="75,65 85,65 85,55" fill="none" stroke="var(--text-muted)" strokeWidth="1.1" />

      <line x1="75" y1="170" x2="271" y2="170" stroke="var(--success)" strokeWidth="2.5" markerEnd="url(#s01r-arr-s)" />
      <text x="175" y="192" textAnchor="middle" fill="var(--success)" fontSize="12.5" fontWeight="700">Fₓ = F · cos α</text>

      <line x1="75" y1="170" x2="75" y2="59" stroke="var(--success)" strokeWidth="2.5" markerEnd="url(#s01r-arr-s)" />
      <text x="68" y="116" textAnchor="end" fill="var(--success)" fontSize="12.5" fontWeight="700">Fᵧ = F · sin α</text>

      <line x1="75" y1="170" x2="272" y2="57" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#s01r-arr-a)" />
      <text x="184" y="98" fill="var(--accent)" fontSize="13.5" fontWeight="700">F⃗</text>

      <path d="M 122 170 A 47 47 0 0 0 115 147" fill="none" stroke="var(--text)" strokeWidth="1.5" />
      <text x="131" y="156" fill="var(--text)" fontSize="12" fontWeight="700">α</text>
      <circle cx="75" cy="170" r="3.2" fill="var(--text)" />
    </svg>
  ),

  'svg-01-wykres-styczna-pole': () => (
    <svg viewBox="0 0 480 195" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s01g" />
      <rect x="40" y="30" width="170" height="130" fill="url(#s01g-grid)" />
      <rect x="275" y="30" width="170" height="130" fill="url(#s01g-grid)" />

      <text x="125" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="11.5" fontWeight="700">
        Nachylenie: a = Δy / Δx
      </text>
      <line x1="35" y1="160" x2="215" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s01g-arr-m)" />
      <line x1="40" y1="165" x2="40" y2="25" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s01g-arr-m)" />
      <line x1="50" y1="145" x2="195" y2="45" stroke="var(--accent)" strokeWidth="2.6" />
      <line x1="82" y1="123" x2="162" y2="123" stroke="var(--success)" strokeWidth="1.8" strokeDasharray="4 3" />
      <line x1="162" y1="123" x2="162" y2="68" stroke="var(--success)" strokeWidth="1.8" strokeDasharray="4 3" />
      <polyline points="154,123 154,115 162,115" fill="none" stroke="var(--success)" strokeWidth="1.2" />
      <text x="122" y="139" textAnchor="middle" fill="var(--success)" fontSize="11.5" fontWeight="700">Δx</text>
      <text x="170" y="98" fill="var(--success)" fontSize="11.5" fontWeight="700">Δy</text>

      <line x1="242" y1="25" x2="242" y2="178" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="4 3" />

      <text x="360" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="11.5" fontWeight="700">
        Pole pod wykresem (całka graficzna)
      </text>
      <line x1="270" y1="160" x2="452" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s01g-arr-m)" />
      <line x1="275" y1="165" x2="275" y2="25" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s01g-arr-m)" />
      <polygon points="292,160 292,112 422,50 422,160" fill="var(--accent)" fillOpacity="0.18" stroke="var(--accent)" strokeWidth="2.2" />
      <text x="358" y="128" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">Pole = Δs lub W</text>
    </svg>
  ),

  'svg-01-niepewnosci-prosta': () => (
    <svg viewBox="0 0 440 195" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s01n" />
      <rect x="55" y="20" width="335" height="140" fill="url(#s01n-grid)" />
      <line x1="50" y1="160" x2="398" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s01n-arr-m)" />
      <line x1="55" y1="166" x2="55" y2="16" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s01n-arr-m)" />
      <text x="404" y="164" fill="var(--text-muted)" fontSize="12" fontWeight="700">x</text>
      <text x="44" y="20" fill="var(--text-muted)" fontSize="12" fontWeight="700">y</text>

      <line x1="68" y1="146" x2="372" y2="32" stroke="var(--accent)" strokeWidth="2.5" />

      {[
        [105, 131, 13, 10],
        [175, 107, 13, 10],
        [248, 78, 13, 10],
        [322, 52, 13, 10],
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
          <line x1={cx} y1={cy - dy} x2={cx} y2={cy + dy} stroke="var(--text)" strokeWidth="1.3" />
          <line x1={cx - dx} y1={cy} x2={cx + dx} y2={cy} stroke="var(--text)" strokeWidth="1.3" />
          <circle cx={cx} cy={cy} r="3.5" fill="var(--text)" />
        </g>
      ))}
      <text x="225" y="184" textAnchor="middle" fill="var(--text-muted)" fontSize="11">
        Prosta najlepszego dopasowania przechodzi przez wszystkie prostokąty niepewności
      </text>
    </svg>
  ),

  'svg-02-droga-przemieszczenie': () => (
    <svg viewBox="0 0 440 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s02d" />
      <rect x="25" y="20" width="390" height="140" fill="url(#s02d-grid)" rx="6" />
      <path d="M 65 124 Q 145 20 225 95 T 370 74" fill="none" stroke="var(--text)" strokeWidth="2.2" strokeDasharray="5 4" />
      <line x1="65" y1="124" x2="365" y2="75" stroke="var(--accent)" strokeWidth="2.6" markerEnd="url(#s02d-arr-a)" />
      <circle cx="65" cy="124" r="5" fill="var(--success)" />
      <circle cx="370" cy="74" r="5" fill="var(--accent)" />
      <text x="55" y="144" fill="var(--success)" fontSize="12" fontWeight="700">A (start)</text>
      <text x="358" y="60" fill="var(--accent)" fontSize="12" fontWeight="700">B (koniec)</text>
      <text x="155" y="42" fill="var(--text)" fontSize="12" fontWeight="600">Droga s (długość toru)</text>
      <text x="225" y="122" fill="var(--accent)" fontSize="12" fontWeight="700">Przemieszczenie Δr⃗</text>
    </svg>
  ),

  'svg-02-wykresy-ruchu': () => (
    <svg viewBox="0 0 480 170" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s02w" />
      <rect x="24" y="28" width="115" height="110" fill="url(#s02w-grid)" />
      <rect x="182" y="28" width="115" height="110" fill="url(#s02w-grid)" />
      <rect x="340" y="28" width="115" height="110" fill="url(#s02w-grid)" />

      <text x="82" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="11.5" fontWeight="700">x(t) — parabola</text>
      <line x1="20" y1="138" x2="144" y2="138" stroke="var(--text-muted)" strokeWidth="1.4" markerEnd="url(#s02w-arr-m)" />
      <line x1="24" y1="142" x2="24" y2="24" stroke="var(--text-muted)" strokeWidth="1.4" markerEnd="url(#s02w-arr-m)" />
      <path d="M 24 138 Q 84 132 132 36" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <text x="142" y="152" fill="var(--text-muted)" fontSize="11">t</text>

      <text x="240" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="11.5" fontWeight="700">v(t) — liniowy</text>
      <line x1="178" y1="138" x2="302" y2="138" stroke="var(--text-muted)" strokeWidth="1.4" markerEnd="url(#s02w-arr-m)" />
      <line x1="182" y1="142" x2="182" y2="24" stroke="var(--text-muted)" strokeWidth="1.4" markerEnd="url(#s02w-arr-m)" />
      <polygon points="182,138 182,116 288,44 288,138" fill="var(--success)" fillOpacity="0.18" />
      <line x1="182" y1="116" x2="288" y2="44" stroke="var(--success)" strokeWidth="2.5" />
      <text x="240" y="122" textAnchor="middle" fill="var(--success)" fontSize="11" fontWeight="700">Pole = Δx</text>

      <text x="398" y="18" textAnchor="middle" fill="var(--text-muted)" fontSize="11.5" fontWeight="700">a(t) — stałe</text>
      <line x1="336" y1="138" x2="460" y2="138" stroke="var(--text-muted)" strokeWidth="1.4" markerEnd="url(#s02w-arr-m)" />
      <line x1="340" y1="142" x2="340" y2="24" stroke="var(--text-muted)" strokeWidth="1.4" markerEnd="url(#s02w-arr-m)" />
      <line x1="340" y1="76" x2="446" y2="76" stroke="var(--accent)" strokeWidth="2.5" />
      <text x="392" y="66" textAnchor="middle" fill="var(--accent)" fontSize="11.5" fontWeight="700">a = const</text>
    </svg>
  ),

  'svg-02-rzut-ukosny': () => (
    <svg viewBox="0 0 460 200" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s02r" />
      <rect x="35" y="166" width="390" height="12" fill="url(#s02r-hatch)" />
      <line x1="35" y1="166" x2="425" y2="166" stroke="var(--text-muted)" strokeWidth="1.8" />
      <path d="M 60 166 Q 230 -20 400 166" fill="none" stroke="var(--text)" strokeWidth="2.2" strokeDasharray="5 4" />

      <line x1="60" y1="166" x2="115" y2="96" stroke="var(--accent)" strokeWidth="2.6" markerEnd="url(#s02r-arr-a)" />
      <text x="68" y="114" fill="var(--accent)" fontSize="12.5" fontWeight="700">v⃗₀</text>
      <path d="M 96 166 A 36 36 0 0 0 84 138" fill="none" stroke="var(--text-muted)" strokeWidth="1.3" />
      <text x="102" y="156" fill="var(--text-muted)" fontSize="11.5">α</text>

      <circle cx="230" cy="73" r="4.5" fill="var(--success)" />
      <line x1="230" y1="73" x2="288" y2="73" stroke="var(--success)" strokeWidth="2.5" markerEnd="url(#s02r-arr-s)" />
      <text x="230" y="54" textAnchor="middle" fill="var(--success)" fontSize="11.5" fontWeight="700">
        H_max: vᵧ = 0, v = vₓ
      </text>
      <line x1="230" y1="73" x2="230" y2="166" stroke="var(--text-muted)" strokeWidth="1.2" strokeDasharray="3 3" />
      <text x="238" y="128" fill="var(--text-muted)" fontSize="11">H_max</text>

      <text x="230" y="192" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">
        Zasięg Z = v₀ₓ · t_całk
      </text>
    </svg>
  ),

  'svg-02-ruch-okrag': () => (
    <svg viewBox="0 0 380 195" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s02o" />
      <circle cx="170" cy="105" r="65" fill="none" stroke="var(--border)" strokeWidth="2" strokeDasharray="5 4" />
      <circle cx="170" cy="105" r="3.5" fill="var(--text-muted)" />
      <line x1="170" y1="105" x2="235" y2="105" stroke="var(--text-muted)" strokeWidth="1.4" />
      <text x="204" y="120" fill="var(--text-muted)" fontSize="12" fontWeight="600">r</text>

      <circle cx="170" cy="40" r="5" fill="var(--text)" />
      <line x1="170" y1="40" x2="250" y2="40" stroke="var(--accent)" strokeWidth="2.6" markerEnd="url(#s02o-arr-a)" />
      <text x="256" y="44" fill="var(--accent)" fontSize="12" fontWeight="700">v⃗ (styczna)</text>

      <line x1="170" y1="40" x2="170" y2="92" stroke="var(--success)" strokeWidth="2.6" markerEnd="url(#s02o-arr-s)" />
      <text x="178" y="76" fill="var(--success)" fontSize="12" fontWeight="700">a⃗_d (do środka)</text>
      <polyline points="170,50 180,50 180,40" fill="none" stroke="var(--text-muted)" strokeWidth="1.1" />
    </svg>
  ),
};
