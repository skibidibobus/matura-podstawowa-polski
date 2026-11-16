import { SvgDefs } from './svgPrimitives';

/**
 * Technical CKE-grade SVG schematics for Physics Departments 3–12.
 */
export const PHYSICS_DIAGRAMS_PHASE2_3 = {
  'svg-03-rownia-pochyla': () => (
    <svg viewBox="0 0 430 210" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s03r" />
      <polygon points="45,175 365,175 365,58" fill="url(#s03r-hatch)" stroke="var(--text-muted)" strokeWidth="2" />
      <path d="M 92 175 A 47 47 0 0 0 88 159" fill="none" stroke="var(--text)" strokeWidth="1.4" />
      <text x="102" y="166" fill="var(--text)" fontSize="12" fontWeight="700">α</text>

      <g transform="translate(215, 113) rotate(-20)">
        <rect x="-26" y="-28" width="52" height="28" rx="3" fill="var(--accent)" fillOpacity="0.16" stroke="var(--accent)" strokeWidth="2" />
        <circle cx="0" cy="-14" r="2.8" fill="var(--text)" />
        <line x1="0" y1="-14" x2="0" y2="-72" stroke="var(--success)" strokeWidth="2.3" markerEnd="url(#s03r-arr-s)" />
        <text x="8" y="-62" fill="var(--success)" fontSize="12" fontWeight="700">N⃗</text>

        <line x1="0" y1="-14" x2="62" y2="-14" stroke="var(--success)" strokeWidth="2.3" markerEnd="url(#s03r-arr-s)" />
        <text x="66" y="-10" fill="var(--success)" fontSize="12" fontWeight="700">T⃗</text>

        <line x1="0" y1="-14" x2="-64" y2="-14" stroke="var(--accent)" strokeWidth="2.3" markerEnd="url(#s03r-arr-a)" />
        <text x="-88" y="-20" fill="var(--accent)" fontSize="11.5" fontWeight="700">mg sinα</text>

        <line x1="0" y1="-14" x2="0" y2="44" stroke="var(--accent)" strokeWidth="1.6" strokeDasharray="3 3" markerEnd="url(#s03r-arr-a)" />
      </g>

      <line x1="210" y1="100" x2="210" y2="168" stroke="var(--text)" strokeWidth="2.4" markerEnd="url(#s03r-arr-t)" />
      <text x="190" y="168" textAnchor="end" fill="var(--text)" fontSize="12" fontWeight="700">Q⃗ = mg</text>
    </svg>
  ),

  'svg-03-uklad-bloczki': () => (
    <svg viewBox="0 0 430 195" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s03b" />
      <rect x="40" y="96" width="232" height="16" fill="url(#s03b-hatch)" stroke="var(--text-muted)" strokeWidth="1.5" />
      <rect x="256" y="112" width="16" height="72" fill="url(#s03b-hatch)" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="268" y1="96" x2="280" y2="84" stroke="var(--text-muted)" strokeWidth="2.2" />
      <circle cx="282" cy="82" r="14" fill="var(--bg)" stroke="var(--text)" strokeWidth="2" />
      <circle cx="282" cy="82" r="3" fill="var(--text)" />

      <rect x="88" y="60" width="56" height="36" rx="4" fill="var(--accent)" fillOpacity="0.18" stroke="var(--accent)" strokeWidth="2" />
      <text x="116" y="82" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="700">m₁</text>

      <line x1="144" y1="70" x2="280" y2="68" stroke="var(--text)" strokeWidth="1.8" />
      <line x1="296" y1="82" x2="296" y2="132" stroke="var(--text)" strokeWidth="1.8" />

      <line x1="144" y1="70" x2="195" y2="70" stroke="var(--accent)" strokeWidth="2.2" markerEnd="url(#s03b-arr-a)" />
      <text x="172" y="58" textAnchor="middle" fill="var(--accent)" fontSize="11.5" fontWeight="700">N_n</text>

      <rect x="276" y="132" width="40" height="36" rx="4" fill="var(--success)" fillOpacity="0.18" stroke="var(--success)" strokeWidth="2" />
      <text x="296" y="154" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="700">m₂</text>
      <line x1="296" y1="132" x2="296" y2="98" stroke="var(--success)" strokeWidth="2.2" markerEnd="url(#s03b-arr-s)" />
      <text x="312" y="114" fill="var(--success)" fontSize="11.5" fontWeight="700">N_n</text>
    </svg>
  ),

  'svg-03-wahadlo-stozkowe': () => (
    <svg viewBox="0 0 380 200" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s03w" />
      <rect x="135" y="12" width="90" height="10" fill="url(#s03w-hatch)" />
      <line x1="135" y1="22" x2="225" y2="22" stroke="var(--text-muted)" strokeWidth="1.8" />
      <line x1="180" y1="22" x2="180" y2="170" stroke="var(--border)" strokeWidth="1.4" strokeDasharray="4 4" />
      <ellipse cx="180" cy="145" rx="86" ry="20" fill="none" stroke="var(--text-muted)" strokeWidth="1.4" strokeDasharray="4 4" />
      <line x1="180" y1="22" x2="266" y2="145" stroke="var(--text)" strokeWidth="2" />
      <path d="M 180 56 A 34 34 0 0 0 199 50" fill="none" stroke="var(--text)" strokeWidth="1.3" />
      <text x="193" y="68" fill="var(--text)" fontSize="11.5" fontWeight="700">α</text>

      <circle cx="266" cy="145" r="7" fill="var(--accent)" />
      <line x1="266" y1="145" x2="266" y2="190" stroke="var(--text)" strokeWidth="2.2" markerEnd="url(#s03w-arr-t)" />
      <text x="275" y="186" fill="var(--text)" fontSize="12" fontWeight="700">mg</text>

      <line x1="266" y1="145" x2="200" y2="145" stroke="var(--success)" strokeWidth="2.4" markerEnd="url(#s03w-arr-s)" />
      <text x="215" y="136" fill="var(--success)" fontSize="11.5" fontWeight="700">F_d = mv²/r</text>

      <line x1="266" y1="145" x2="232" y2="96" stroke="var(--accent)" strokeWidth="2.4" markerEnd="url(#s03w-arr-a)" />
      <text x="256" y="102" fill="var(--accent)" fontSize="11.5" fontWeight="700">N⃗</text>
    </svg>
  ),

  'svg-03-zderzenie-wektory': () => (
    <svg viewBox="0 0 460 155" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s03z" />
      <rect x="18" y="30" width="190" height="105" fill="url(#s03z-grid)" rx="6" />
      <rect x="252" y="30" width="190" height="105" fill="url(#s03z-grid)" rx="6" />
      <text x="113" y="20" textAnchor="middle" fill="var(--text-muted)" fontSize="11.5" fontWeight="700">Przed zderzeniem</text>
      <circle cx="56" cy="82" r="16" fill="var(--accent)" fillOpacity="0.22" stroke="var(--accent)" strokeWidth="2" />
      <text x="56" y="86" textAnchor="middle" fill="var(--text)" fontSize="11.5" fontWeight="700">m₁</text>
      <line x1="74" y1="82" x2="122" y2="82" stroke="var(--accent)" strokeWidth="2.4" markerEnd="url(#s03z-arr-a)" />
      <text x="98" y="70" textAnchor="middle" fill="var(--accent)" fontSize="11.5" fontWeight="700">p⃗₁</text>
      <circle cx="170" cy="82" r="20" fill="var(--border)" fillOpacity="0.25" stroke="var(--text)" strokeWidth="2" />
      <text x="170" y="86" textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight="700">m₂ (v=0)</text>

      <line x1="230" y1="24" x2="230" y2="140" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="4 3" />

      <text x="347" y="20" textAnchor="middle" fill="var(--text-muted)" fontSize="11.5" fontWeight="700">Po zderzeniu (ZZP)</text>
      <rect x="280" y="62" width="64" height="40" rx="12" fill="var(--success)" fillOpacity="0.2" stroke="var(--success)" strokeWidth="2" />
      <text x="312" y="86" textAnchor="middle" fill="var(--text)" fontSize="11.5" fontWeight="700">m₁ + m₂</text>
      <line x1="348" y1="82" x2="412" y2="82" stroke="var(--success)" strokeWidth="2.5" markerEnd="url(#s03z-arr-s)" />
      <text x="382" y="70" textAnchor="middle" fill="var(--success)" fontSize="11.5" fontWeight="700">p⃗₁ + p⃗₂</text>
    </svg>
  ),

  'svg-04-ramie-sily': () => (
    <svg viewBox="0 0 420 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s04r" />
      <circle cx="65" cy="126" r="6" fill="var(--accent)" />
      <text x="50" y="148" fill="var(--accent)" fontSize="12" fontWeight="700">Oś O</text>
      <line x1="65" y1="126" x2="275" y2="126" stroke="var(--text)" strokeWidth="3.2" />
      <text x="170" y="144" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">r</text>
      <line x1="275" y1="126" x2="345" y2="46" stroke="var(--accent)" strokeWidth="2.6" markerEnd="url(#s04r-arr-a)" />
      <text x="348" y="48" fill="var(--accent)" fontSize="13" fontWeight="700">F⃗</text>
      {/* Line of action */}
      <line x1="215" y1="194" x2="355" y2="34" stroke="var(--text-muted)" strokeWidth="1.2" strokeDasharray="4 4" />
      {/* Lever arm perpendicular */}
      <line x1="65" y1="126" x2="175" y2="62" stroke="none" />
      <line x1="65" y1="126" x2="225" y2="183" stroke="none" />
      <line x1="65" y1="126" x2="183" y2="168" stroke="none" />
      <line x1="65" y1="126" x2="233" y2="174" stroke="none" />
      <path d="M 295 126 A 20 20 0 0 0 288 111" fill="none" stroke="var(--text-muted)" strokeWidth="1.3" />
      <text x="303" y="118" fill="var(--text-muted)" fontSize="11.5">α</text>
      <text x="175" y="76" fill="var(--success)" fontSize="12" fontWeight="700">M = r · F · sin α</text>
    </svg>
  ),

  'svg-04-belka-rownowaga': () => (
    <svg viewBox="0 0 430 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s04b" />
      <rect x="60" y="62" width="310" height="16" rx="3" fill="var(--accent)" fillOpacity="0.18" stroke="var(--text)" strokeWidth="2" />
      <polygon points="75,78 62,110 88,110" fill="url(#s04b-hatch)" stroke="var(--success)" strokeWidth="1.8" />
      <polygon points="355,78 342,110 368,110" fill="url(#s04b-hatch)" stroke="var(--success)" strokeWidth="1.8" />
      <line x1="75" y1="62" x2="75" y2="24" stroke="var(--success)" strokeWidth="2.3" markerEnd="url(#s04b-arr-s)" />
      <text x="75" y="18" textAnchor="middle" fill="var(--success)" fontSize="12" fontWeight="700">R⃗_L</text>
      <line x1="355" y1="62" x2="355" y2="24" stroke="var(--success)" strokeWidth="2.3" markerEnd="url(#s04b-arr-s)" />
      <text x="355" y="18" textAnchor="middle" fill="var(--success)" fontSize="12" fontWeight="700">R⃗_P</text>
      <circle cx="215" cy="70" r="3" fill="var(--accent)" />
      <line x1="215" y1="70" x2="215" y2="140" stroke="var(--accent)" strokeWidth="2.4" markerEnd="url(#s04b-arr-a)" />
      <text x="215" y="158" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">Q⃗_belki (w środku L/2)</text>
    </svg>
  ),

  'svg-04-staczanie-rownia': () => (
    <svg viewBox="0 0 420 190" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s04s" />
      <polygon points="45,165 360,165 360,52" fill="url(#s04s-hatch)" stroke="var(--text-muted)" strokeWidth="1.8" />
      <circle cx="220" cy="80" r="23" fill="var(--accent)" fillOpacity="0.18" stroke="var(--accent)" strokeWidth="2.2" />
      <circle cx="220" cy="80" r="3" fill="var(--text)" />
      <line x1="220" y1="80" x2="176" y2="96" stroke="var(--accent)" strokeWidth="2.2" markerEnd="url(#s04s-arr-a)" />
      <text x="166" y="76" fill="var(--accent)" fontSize="11.5" fontWeight="700">v = ωR</text>
      <line x1="228" y1="102" x2="264" y2="89" stroke="var(--success)" strokeWidth="2.2" markerEnd="url(#s04s-arr-s)" />
      <text x="268" y="88" fill="var(--success)" fontSize="11.5" fontWeight="700">T_s (obraca)</text>
    </svg>
  ),

  'svg-05-natezenie-g-r': () => (
    <svg viewBox="0 0 430 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s05g" />
      <rect x="52" y="20" width="335" height="128" fill="url(#s05g-grid)" />
      <line x1="46" y1="148" x2="395" y2="148" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s05g-arr-m)" />
      <line x1="52" y1="154" x2="52" y2="16" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s05g-arr-m)" />
      <text x="402" y="152" fill="var(--text-muted)" fontSize="12" fontWeight="700">r</text>
      <text x="38" y="22" fill="var(--text-muted)" fontSize="12" fontWeight="700">g</text>

      <line x1="52" y1="148" x2="160" y2="42" stroke="var(--accent)" strokeWidth="2.6" />
      <path d="M 160 42 Q 215 112 372 137" fill="none" stroke="var(--accent)" strokeWidth="2.6" />
      <line x1="160" y1="42" x2="160" y2="148" stroke="var(--text-muted)" strokeDasharray="4 4" />
      <line x1="52" y1="42" x2="160" y2="42" stroke="var(--text-muted)" strokeDasharray="4 4" />
      <text x="160" y="165" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="700">R_Z</text>
      <text x="36" y="46" fill="var(--text)" fontSize="12" fontWeight="700">g₀</text>
      <text x="270" y="92" fill="var(--accent)" fontSize="12" fontWeight="700">g ~ 1/r²</text>
    </svg>
  ),

  'svg-05-studnia-potencjalu': () => (
    <svg viewBox="0 0 430 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s05s" />
      <rect x="52" y="34" width="335" height="122" fill="url(#s05s-grid)" />
      <line x1="46" y1="34" x2="395" y2="34" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s05s-arr-m)" />
      <line x1="52" y1="18" x2="52" y2="164" stroke="var(--text-muted)" strokeWidth="1.5" />
      <path d="M 96 150 Q 150 56 376 42" fill="none" stroke="var(--accent)" strokeWidth="2.6" />
      <text x="402" y="38" fill="var(--text-muted)" fontSize="12" fontWeight="700">r</text>
      <text x="20" y="146" fill="var(--text-muted)" fontSize="11">E_p &lt; 0</text>
      <text x="235" y="96" fill="var(--accent)" fontSize="12" fontWeight="700">E_p(r) = −GMm/r</text>
    </svg>
  ),

  'svg-05-orbita-kepler': () => (
    <svg viewBox="0 0 430 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s05k" />
      <ellipse cx="215" cy="92" rx="145" ry="62" fill="none" stroke="var(--border)" strokeWidth="2.2" />
      <circle cx="140" cy="92" r="12" fill="#f59e0b" />
      <text x="140" y="120" textAnchor="middle" fill="var(--text)" fontSize="11.5" fontWeight="700">Słońce</text>
      <circle cx="70" cy="92" r="5" fill="var(--accent)" />
      <line x1="70" y1="92" x2="70" y2="48" stroke="var(--accent)" strokeWidth="2.2" markerEnd="url(#s05k-arr-a)" />
      <text x="36" y="72" fill="var(--accent)" fontSize="11.5" fontWeight="700">v_p (max)</text>
      <circle cx="360" cy="92" r="5" fill="var(--success)" />
      <line x1="360" y1="92" x2="360" y2="118" stroke="var(--success)" strokeWidth="2.2" markerEnd="url(#s05k-arr-s)" />
      <text x="368" y="114" fill="var(--success)" fontSize="11.5" fontWeight="700">v_a (min)</text>
    </svg>
  ),

  'svg-06-oscylator-wykresy': () => (
    <svg viewBox="0 0 450 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s06o" />
      <rect x="38" y="20" width="380" height="135" fill="url(#s06o-grid)" />
      <line x1="32" y1="88" x2="425" y2="88" stroke="var(--text-muted)" strokeWidth="1.4" markerEnd="url(#s06o-arr-m)" />
      <line x1="38" y1="158" x2="38" y2="16" stroke="var(--text-muted)" strokeWidth="1.4" markerEnd="url(#s06o-arr-m)" />
      <path d="M 38 88 Q 83 22 128 88 T 218 88 T 308 88 T 398 88" fill="none" stroke="var(--accent)" strokeWidth="2.4" />
      <path d="M 38 32 Q 83 88 128 144 T 218 32 T 308 144 T 398 32" fill="none" stroke="var(--success)" strokeWidth="1.8" strokeDasharray="4 3" />
      <text x="342" y="30" fill="var(--accent)" fontSize="11.5" fontWeight="700">x(t) = A sin(ωt)</text>
      <text x="342" y="46" fill="var(--success)" fontSize="11.5" fontWeight="700">v(t) = ωA cos(ωt)</text>
    </svg>
  ),

  'svg-06-energia-drgan': () => (
    <svg viewBox="0 0 420 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s06e" />
      <rect x="45" y="22" width="330" height="128" fill="url(#s06e-grid)" />
      <line x1="40" y1="150" x2="385" y2="150" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s06e-arr-m)" />
      <line x1="210" y1="154" x2="210" y2="18" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s06e-arr-m)" />
      <line x1="90" y1="46" x2="330" y2="46" stroke="var(--text)" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 90 46 Q 210 254 330 46" fill="none" stroke="var(--accent)" strokeWidth="2.4" />
      <path d="M 90 150 Q 210 -58 330 150" fill="none" stroke="var(--success)" strokeWidth="2.4" />
      <text x="90" y="167" textAnchor="middle" fill="var(--text)" fontSize="11.5" fontWeight="700">−A</text>
      <text x="330" y="167" textAnchor="middle" fill="var(--text)" fontSize="11.5" fontWeight="700">+A</text>
      <text x="218" y="38" fill="var(--text)" fontSize="11.5" fontWeight="700">E_c = const</text>
      <text x="336" y="64" fill="var(--accent)" fontSize="11.5" fontWeight="700">E_p(x)</text>
      <text x="245" y="112" fill="var(--success)" fontSize="11.5" fontWeight="700">E_k(x)</text>
    </svg>
  ),

  'svg-06-fale-stojace': () => (
    <svg viewBox="0 0 430 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="42" y="42" fill="var(--text)" fontSize="12" fontWeight="700">n = 1</text>
      <circle cx="92" cy="38" r="3" fill="var(--text)" />
      <circle cx="362" cy="38" r="3" fill="var(--text)" />
      <path d="M 92 38 Q 227 8 362 38 Q 227 68 92 38" fill="none" stroke="var(--accent)" strokeWidth="2.2" />

      <text x="42" y="95" fill="var(--text)" fontSize="12" fontWeight="700">n = 2</text>
      <circle cx="92" cy="90" r="3" fill="var(--text)" />
      <circle cx="227" cy="90" r="3" fill="var(--text)" />
      <circle cx="362" cy="90" r="3" fill="var(--text)" />
      <path d="M 92 90 Q 159 62 227 90 T 362 90 Q 294 118 227 90 T 92 90" fill="none" stroke="var(--success)" strokeWidth="2.2" />

      <text x="42" y="148" fill="var(--text)" fontSize="12" fontWeight="700">n = 3</text>
      <path d="M 92 142 Q 137 116 182 142 T 272 142 T 362 142" fill="none" stroke="var(--accent)" strokeWidth="2.2" />
      <path d="M 92 142 Q 137 168 182 142 T 272 142 T 362 142" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
  ),

  'svg-06-doppler': () => (
    <svg viewBox="0 0 430 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s06d" />
      <circle cx="240" cy="90" r="24" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <circle cx="222" cy="90" r="46" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <circle cx="200" cy="90" r="70" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <circle cx="254" cy="90" r="6" fill="var(--success)" />
      <line x1="262" y1="90" x2="306" y2="90" stroke="var(--success)" strokeWidth="2.3" markerEnd="url(#s06d-arr-s)" />
      <text x="314" y="94" fill="var(--success)" fontSize="12" fontWeight="700">v⃗_źr (f' &gt; f)</text>
      <text x="58" y="94" fill="var(--text-muted)" fontSize="11.5">λ większe (f' &lt; f)</text>
    </svg>
  ),

  'svg-07-archimedes': () => (
    <svg viewBox="0 0 380 185" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s07a" />
      <rect x="85" y="45" width="210" height="120" fill="none" stroke="var(--text-muted)" strokeWidth="2" />
      <rect x="87" y="82" width="206" height="81" fill="var(--accent)" fillOpacity="0.14" />
      <rect x="160" y="60" width="60" height="56" rx="4" fill="var(--success)" fillOpacity="0.26" stroke="var(--text)" strokeWidth="2" />
      <circle cx="190" cy="88" r="3" fill="var(--text)" />
      <line x1="190" y1="88" x2="190" y2="26" stroke="var(--success)" strokeWidth="2.4" markerEnd="url(#s07a-arr-s)" />
      <text x="200" y="34" fill="var(--success)" fontSize="12" fontWeight="700">F⃗_w</text>
      <line x1="190" y1="88" x2="190" y2="152" stroke="var(--accent)" strokeWidth="2.4" markerEnd="url(#s07a-arr-a)" />
      <text x="200" y="148" fill="var(--accent)" fontSize="12" fontWeight="700">Q⃗ = mg</text>
    </svg>
  ),

  'svg-07-przemiany-pv': () => (
    <svg viewBox="0 0 430 185" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s07p" />
      <rect x="55" y="22" width="330" height="132" fill="url(#s07p-grid)" />
      <line x1="50" y1="154" x2="395" y2="154" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s07p-arr-m)" />
      <line x1="55" y1="160" x2="55" y2="18" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s07p-arr-m)" />
      <text x="400" y="158" fill="var(--text-muted)" fontSize="12" fontWeight="700">V</text>
      <text x="42" y="22" fill="var(--text-muted)" fontSize="12" fontWeight="700">p</text>

      <line x1="115" y1="50" x2="300" y2="50" stroke="var(--text)" strokeWidth="2.3" markerEnd="url(#s07p-arr-t)" />
      <text x="240" y="40" fill="var(--text)" fontSize="11.5" fontWeight="700">p = const (izobara)</text>
      <line x1="115" y1="50" x2="115" y2="136" stroke="var(--text-muted)" strokeWidth="2.2" markerEnd="url(#s07p-arr-m)" />
      <text x="122" y="128" fill="var(--text-muted)" fontSize="11.5">V = const</text>
      <path d="M 115 50 Q 175 100 325 120" fill="none" stroke="var(--success)" strokeWidth="2.4" />
      <text x="330" y="116" fill="var(--success)" fontSize="11.5" fontWeight="700">izoterma</text>
      <path d="M 115 50 Q 155 118 265 138" fill="none" stroke="var(--accent)" strokeWidth="2.4" />
      <text x="270" y="142" fill="var(--accent)" fontSize="11.5" fontWeight="700">adiabata</text>
    </svg>
  ),

  'svg-07-cykl-silnika': () => (
    <svg viewBox="0 0 420 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s07c" />
      <rect x="55" y="22" width="320" height="128" fill="url(#s07c-grid)" />
      <line x1="50" y1="150" x2="385" y2="150" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s07c-arr-m)" />
      <line x1="55" y1="156" x2="55" y2="18" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s07c-arr-m)" />
      <rect x="115" y="46" width="180" height="68" fill="var(--accent)" fillOpacity="0.18" stroke="var(--accent)" strokeWidth="2.4" />
      <text x="205" y="84" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">Pole = W_uż</text>
      <text x="392" y="154" fill="var(--text-muted)" fontSize="12" fontWeight="700">V</text>
      <text x="42" y="22" fill="var(--text-muted)" fontSize="12" fontWeight="700">p</text>
    </svg>
  ),

  'svg-08-linie-pola': () => (
    <svg viewBox="0 0 420 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s08l" />
      <rect x="65" y="30" width="12" height="110" fill="var(--accent)" rx="2" />
      <rect x="340" y="30" width="12" height="110" fill="var(--success)" rx="2" />
      <text x="71" y="22" textAnchor="middle" fill="var(--accent)" fontSize="13" fontWeight="700">+</text>
      <text x="346" y="22" textAnchor="middle" fill="var(--success)" fontSize="13" fontWeight="700">−</text>
      {[48, 72, 96, 120].map((y) => (
        <line key={y} x1="82" y1={y} x2="332" y2={y} stroke="var(--text)" strokeWidth="1.8" markerEnd="url(#s08l-arr-t)" />
      ))}
      <text x="208" y="162" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">
        Pole jednorodne E = U/d
      </text>
    </svg>
  ),

  'svg-08-elektron-w-kondensatorze': () => (
    <svg viewBox="0 0 430 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s08e" />
      <line x1="65" y1="35" x2="310" y2="35" stroke="var(--accent)" strokeWidth="4" />
      <text x="50" y="39" fill="var(--accent)" fontSize="14" fontWeight="700">+</text>
      <line x1="65" y1="140" x2="310" y2="140" stroke="var(--success)" strokeWidth="4" />
      <text x="50" y="144" fill="var(--success)" fontSize="14" fontWeight="700">−</text>
      <path d="M 35 90 L 65 90 Q 200 88 310 48" fill="none" stroke="var(--text)" strokeWidth="2.4" markerEnd="url(#s08e-arr-t)" />
      <text x="322" y="52" fill="var(--accent)" fontSize="12" fontWeight="700">e⁻ (tor paraboliczny)</text>
    </svg>
  ),

  'svg-08-kondensator-dielektryk': () => (
    <svg viewBox="0 0 430 155" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="55" y1="45" x2="205" y2="45" stroke="var(--text)" strokeWidth="4" />
      <line x1="55" y1="105" x2="205" y2="105" stroke="var(--text)" strokeWidth="4" />
      <rect x="110" y="50" width="90" height="50" fill="var(--accent)" fillOpacity="0.22" stroke="var(--accent)" strokeWidth="1.8" />
      <text x="155" y="79" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">ε_r &gt; 1</text>
      <text x="230" y="65" fill="var(--text)" fontSize="12" fontWeight="600">• Z baterią: U = const, Q ↑</text>
      <text x="230" y="92" fill="var(--text)" fontSize="12" fontWeight="600">• Bez baterii: Q = const, U ↓</text>
    </svg>
  ),

  'svg-09-charakterystyka-iu': () => (
    <svg viewBox="0 0 420 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s09c" />
      <rect x="52" y="22" width="320" height="126" fill="url(#s09c-grid)" />
      <line x1="46" y1="148" x2="380" y2="148" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s09c-arr-m)" />
      <line x1="52" y1="154" x2="52" y2="18" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s09c-arr-m)" />
      <line x1="52" y1="148" x2="338" y2="35" stroke="var(--success)" strokeWidth="2.4" />
      <path d="M 52 148 Q 145 76 338 72" fill="none" stroke="var(--accent)" strokeWidth="2.4" />
      <text x="305" y="28" fill="var(--success)" fontSize="11.5" fontWeight="700">Opornik (R = const)</text>
      <text x="292" y="88" fill="var(--accent)" fontSize="11.5" fontWeight="700">Żarówka (R rośnie)</text>
    </svg>
  ),

  'svg-09-kirchhoff-petla': () => (
    <svg viewBox="0 0 400 170" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s09k" />
      <rect x="78" y="35" width="244" height="98" fill="none" stroke="var(--text)" strokeWidth="2" />
      <rect x="165" y="24" width="70" height="22" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" rx="3" />
      <text x="200" y="39" textAnchor="middle" fill="var(--accent)" fontSize="11.5" fontWeight="700">R₁</text>
      <rect x="165" y="122" width="70" height="22" fill="var(--bg)" stroke="var(--success)" strokeWidth="2" rx="3" />
      <text x="200" y="137" textAnchor="middle" fill="var(--success)" fontSize="11.5" fontWeight="700">R₂</text>
      <line x1="70" y1="78" x2="86" y2="78" stroke="var(--accent)" strokeWidth="3" />
      <line x1="64" y1="88" x2="92" y2="88" stroke="var(--accent)" strokeWidth="2" />
      <text x="48" y="87" fill="var(--accent)" fontSize="13" fontWeight="700">ℰ</text>
      <text x="200" y="88" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">∑ℰ = ∑IR</text>
    </svg>
  ),

  'svg-09-sem-wykres': () => (
    <svg viewBox="0 0 420 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s09s" />
      <rect x="55" y="22" width="320" height="126" fill="url(#s09s-grid)" />
      <line x1="48" y1="148" x2="385" y2="148" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s09s-arr-m)" />
      <line x1="55" y1="154" x2="55" y2="18" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s09s-arr-m)" />
      <line x1="55" y1="38" x2="324" y2="148" stroke="var(--accent)" strokeWidth="2.6" />
      <text x="40" y="42" fill="var(--accent)" fontSize="12" fontWeight="700">ℰ</text>
      <text x="324" y="165" textAnchor="middle" fill="var(--success)" fontSize="12" fontWeight="700">I_zw = ℰ/r</text>
      <text x="218" y="75" fill="var(--text)" fontSize="12" fontWeight="700">U = ℰ − I·r</text>
    </svg>
  ),

  'svg-09-mierniki': () => (
    <svg viewBox="0 0 420 160" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="75" x2="380" y2="75" stroke="var(--text)" strokeWidth="2" />
      <circle cx="115" cy="75" r="16" fill="var(--bg)" stroke="var(--success)" strokeWidth="2" />
      <text x="115" y="80" textAnchor="middle" fill="var(--success)" fontSize="13" fontWeight="700">A</text>
      <rect x="210" y="62" width="66" height="26" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" rx="3" />
      <text x="243" y="79" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">R</text>
      <polyline points="185,75 185,125 300,125 300,75" fill="none" stroke="var(--text)" strokeWidth="1.8" />
      <circle cx="243" cy="125" r="15" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
      <text x="243" y="130" textAnchor="middle" fill="var(--accent)" fontSize="13" fontWeight="700">V</text>
    </svg>
  ),

  'svg-10-lorentz-okrag': () => (
    <svg viewBox="0 0 400 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s10l" />
      <circle cx="190" cy="92" r="56" fill="none" stroke="var(--accent)" strokeWidth="2.4" />
      <text x="58" y="44" fill="var(--text-muted)" fontSize="13" fontWeight="600">⊗ B⃗ (za rysunek)</text>
      <circle cx="190" cy="36" r="5" fill="var(--success)" />
      <line x1="190" y1="36" x2="238" y2="36" stroke="var(--success)" strokeWidth="2.2" markerEnd="url(#s10l-arr-s)" />
      <text x="244" y="38" fill="var(--success)" fontSize="12" fontWeight="700">v⃗ (R = mv/qB)</text>
      <line x1="190" y1="36" x2="190" y2="76" stroke="var(--accent)" strokeWidth="2.2" markerEnd="url(#s10l-arr-a)" />
      <text x="198" y="64" fill="var(--accent)" fontSize="12" fontWeight="700">F⃗_L</text>
    </svg>
  ),

  'svg-10-pret-na-szynach': () => (
    <svg viewBox="0 0 430 170" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s10p" />
      <polyline points="350,35 70,35 70,130 350,130" fill="none" stroke="var(--text)" strokeWidth="2.4" />
      <rect x="58" y="65" width="24" height="36" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" rx="3" />
      <text x="70" y="88" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">R</text>
      <line x1="225" y1="25" x2="225" y2="140" stroke="var(--success)" strokeWidth="5" />
      <line x1="228" y1="82" x2="278" y2="82" stroke="var(--success)" strokeWidth="2.4" markerEnd="url(#s10p-arr-s)" />
      <text x="284" y="86" fill="var(--success)" fontSize="12" fontWeight="700">v⃗ (ℰ = Blv)</text>
    </svg>
  ),

  'svg-10-transformator': () => (
    <svg viewBox="0 0 400 170" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="115" y="30" width="170" height="105" fill="none" stroke="var(--border)" strokeWidth="14" rx="4" />
      <text x="72" y="85" textAnchor="middle" fill="var(--accent)" fontSize="12.5" fontWeight="700">U₁, N₁</text>
      <text x="328" y="85" textAnchor="middle" fill="var(--success)" fontSize="12.5" fontWeight="700">U₂, N₂</text>
      <text x="200" y="156" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">U₁/U₂ = N₁/N₂</text>
    </svg>
  ),

  'svg-10-widmo-em': () => (
    <svg viewBox="0 0 450 125" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="35" width="400" height="34" rx="6" fill="var(--accent)" fillOpacity="0.14" stroke="var(--border)" />
      <text x="58" y="56" fill="var(--text)" fontSize="11" fontWeight="600">Radiowe</text>
      <text x="132" y="56" fill="var(--text)" fontSize="11" fontWeight="600">Mikro</text>
      <text x="190" y="56" fill="var(--text)" fontSize="11" fontWeight="600">IR</text>
      <text x="242" y="56" fill="var(--accent)" fontSize="11.5" fontWeight="700">Widzialne</text>
      <text x="312" y="56" fill="var(--text)" fontSize="11" fontWeight="600">UV</text>
      <text x="354" y="56" fill="var(--text)" fontSize="11" fontWeight="600">X</text>
      <text x="394" y="56" fill="var(--success)" fontSize="11.5" fontWeight="700">γ</text>
      <text x="225" y="98" textAnchor="middle" fill="var(--text-muted)" fontSize="11.5">
        Rosnąca częstotliwość f → (malejąca długość fali λ)
      </text>
    </svg>
  ),

  'svg-11-snell-cio': () => (
    <svg viewBox="0 0 420 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s11s" />
      <rect x="40" y="88" width="340" height="72" fill="var(--accent)" fillOpacity="0.08" />
      <line x1="40" y1="88" x2="380" y2="88" stroke="var(--text)" strokeWidth="2" />
      <line x1="210" y1="18" x2="210" y2="162" stroke="var(--text-muted)" strokeDasharray="4 4" />
      <line x1="120" y1="26" x2="206" y2="85" stroke="var(--accent)" strokeWidth="2.4" markerEnd="url(#s11s-arr-a)" />
      <line x1="210" y1="88" x2="266" y2="152" stroke="var(--success)" strokeWidth="2.4" markerEnd="url(#s11s-arr-s)" />
      <text x="176" y="52" fill="var(--accent)" fontSize="12" fontWeight="700">α</text>
      <text x="220" y="132" fill="var(--success)" fontSize="12" fontWeight="700">β</text>
      <text x="68" y="74" fill="var(--text-muted)" fontSize="11.5">n₁</text>
      <text x="68" y="108" fill="var(--text-muted)" fontSize="11.5">n₂</text>
    </svg>
  ),

  'svg-11-soczewka-konstrukcje': () => (
    <svg viewBox="0 0 430 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s11l" />
      <line x1="30" y1="90" x2="400" y2="90" stroke="var(--text-muted)" strokeWidth="1.4" />
      <line x1="205" y1="24" x2="205" y2="156" stroke="var(--accent)" strokeWidth="3" />
      <polyline points="199,32 205,24 211,32" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <polyline points="199,148 205,156 211,148" fill="none" stroke="var(--accent)" strokeWidth="2" />

      <line x1="95" y1="90" x2="95" y2="48" stroke="var(--text)" strokeWidth="2.6" markerEnd="url(#s11l-arr-t)" />
      <polyline points="95,48 205,48 340,126" fill="none" stroke="var(--success)" strokeWidth="2" />
      <line x1="95" y1="48" x2="340" y2="126" stroke="var(--accent)" strokeWidth="1.8" strokeDasharray="4 3" />
      <circle cx="277" cy="90" r="3" fill="var(--text)" />
      <text x="277" y="106" textAnchor="middle" fill="var(--text)" fontSize="11.5" fontWeight="700">F</text>
      <line x1="340" y1="90" x2="340" y2="124" stroke="var(--success)" strokeWidth="2.6" markerEnd="url(#s11l-arr-s)" />
    </svg>
  ),

  'svg-11-siatka-dyfrakcyjna': () => (
    <svg viewBox="0 0 430 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s11d" />
      <line x1="90" y1="30" x2="90" y2="145" stroke="var(--text)" strokeWidth="3" strokeDasharray="8 6" />
      <line x1="355" y1="20" x2="355" y2="155" stroke="var(--border)" strokeWidth="3" />
      <line x1="30" y1="88" x2="350" y2="88" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#s11d-arr-a)" />
      <line x1="90" y1="88" x2="350" y2="36" stroke="var(--success)" strokeWidth="2" markerEnd="url(#s11d-arr-s)" />
      <line x1="90" y1="88" x2="350" y2="140" stroke="var(--success)" strokeWidth="2" markerEnd="url(#s11d-arr-s)" />
      <text x="225" y="44" fill="var(--success)" fontSize="11.5" fontWeight="700">n = 1 (d sinα = λ)</text>
      <text x="225" y="80" fill="var(--accent)" fontSize="11.5" fontWeight="700">n = 0</text>
    </svg>
  ),

  'svg-12-fotoefekt-wykres': () => (
    <svg viewBox="0 0 420 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s12f" />
      <rect x="52" y="20" width="325" height="135" fill="url(#s12f-grid)" />
      <line x1="46" y1="115" x2="385" y2="115" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s12f-arr-m)" />
      <line x1="52" y1="162" x2="52" y2="16" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s12f-arr-m)" />
      <line x1="52" y1="150" x2="145" y2="115" stroke="var(--text-muted)" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="145" y1="115" x2="335" y2="42" stroke="var(--accent)" strokeWidth="2.6" />
      <text x="145" y="132" textAnchor="middle" fill="var(--accent)" fontSize="11.5" fontWeight="700">f₀</text>
      <text x="32" y="152" fill="var(--text-muted)" fontSize="11.5">−W</text>
      <text x="262" y="58" fill="var(--accent)" fontSize="11.5" fontWeight="700">nachylenie = h</text>
    </svg>
  ),

  'svg-12-poziomy-bohra': () => (
    <svg viewBox="0 0 420 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s12b" />
      <line x1="68" y1="145" x2="315" y2="145" stroke="var(--text)" strokeWidth="2" />
      <text x="325" y="149" fill="var(--text)" fontSize="11.5">n=1 (−13,6 eV)</text>
      <line x1="68" y1="72" x2="315" y2="72" stroke="var(--text)" strokeWidth="2" />
      <text x="325" y="76" fill="var(--text)" fontSize="11.5">n=2 (−3,40 eV)</text>
      <line x1="68" y1="38" x2="315" y2="38" stroke="var(--text)" strokeWidth="2" />
      <text x="325" y="42" fill="var(--text)" fontSize="11.5">n=3 (−1,51 eV)</text>
      <line x1="165" y1="38" x2="165" y2="69" stroke="var(--accent)" strokeWidth="2.4" markerEnd="url(#s12b-arr-a)" />
      <text x="176" y="58" fill="var(--accent)" fontSize="11.5" fontWeight="700">foton H_α</text>
    </svg>
  ),

  'svg-12-rozpad-wykres': () => (
    <svg viewBox="0 0 420 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <SvgDefs idPrefix="s12r" />
      <rect x="52" y="20" width="320" height="122" fill="url(#s12r-grid)" />
      <line x1="46" y1="142" x2="380" y2="142" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s12r-arr-m)" />
      <line x1="52" y1="148" x2="52" y2="16" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#s12r-arr-m)" />
      <path d="M 52 30 Q 130 116 348 137" fill="none" stroke="var(--accent)" strokeWidth="2.6" />
      <text x="32" y="34" fill="var(--text)" fontSize="11.5" fontWeight="700">N₀</text>
      <text x="128" y="158" fill="var(--text)" fontSize="11.5" fontWeight="700">T₁/₂</text>
      <text x="206" y="158" fill="var(--text)" fontSize="11.5" fontWeight="700">2T₁/₂</text>
    </svg>
  ),
};
