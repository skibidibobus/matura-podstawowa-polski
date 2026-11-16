/**
 * Vector SVG diagrams for Physics Departments 3–12.
 */
export const PHYSICS_DIAGRAMS_PHASE2_3 = {
  'svg-03-rownia-pochyla': () => (
    <svg viewBox="0 0 420 200" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-r-a" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="var(--accent)" />
        </marker>
        <marker id="arr-r-g" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="var(--success)" />
        </marker>
        <marker id="arr-r-t" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="var(--text)" />
        </marker>
      </defs>
      {/* Ramp */}
      <polygon points="40,170 360,170 360,55" fill="var(--border)" fillOpacity="0.18" stroke="var(--text-muted)" strokeWidth="1.8" />
      <text x="95" y="162" fill="var(--text)" fontSize="12" fontWeight="600">α</text>
      {/* Block */}
      <g transform="translate(215, 108) rotate(-19.8)">
        <rect x="-24" y="-26" width="48" height="26" rx="3" fill="var(--accent)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="2" />
        {/* N */}
        <line x1="0" y1="-13" x2="0" y2="-65" stroke="var(--success)" strokeWidth="2.2" markerEnd="url(#arr-r-g)" />
        <text x="7" y="-58" fill="var(--success)" fontSize="12" fontWeight="700">N</text>
        {/* T */}
        <line x1="0" y1="-13" x2="55" y2="-13" stroke="var(--success)" strokeWidth="2.2" markerEnd="url(#arr-r-g)" />
        <text x="58" y="-10" fill="var(--success)" fontSize="12" fontWeight="700">T</text>
        {/* Q_parallel */}
        <line x1="0" y1="-13" x2="-60" y2="-13" stroke="var(--accent)" strokeWidth="2.2" markerEnd="url(#arr-r-a)" />
        <text x="-82" y="-17" fill="var(--accent)" fontSize="11" fontWeight="700">mg sinα</text>
        {/* Q_perp */}
        <line x1="0" y1="-13" x2="0" y2="42" stroke="var(--accent)" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arr-r-a)" />
      </g>
      {/* Gravity straight down */}
      <line x1="210" y1="96" x2="210" y2="164" stroke="var(--text)" strokeWidth="2.4" markerEnd="url(#arr-r-t)" />
      <text x="193" y="162" fill="var(--text)" fontSize="12" fontWeight="700">Q=mg</text>
    </svg>
  ),

  'svg-03-uklad-bloczki': () => (
    <svg viewBox="0 0 420 190" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      {/* Table */}
      <rect x="40" y="95" width="230" height="14" fill="var(--border)" />
      <circle cx="275" cy="86" r="14" fill="none" stroke="var(--text)" strokeWidth="2.2" />
      <circle cx="275" cy="86" r="3" fill="var(--text)" />
      {/* Block 1 */}
      <rect x="90" y="60" width="54" height="35" rx="4" fill="var(--accent)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="2" />
      <text x="117" y="82" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="700">m₁</text>
      {/* String */}
      <line x1="144" y1="74" x2="275" y2="72" stroke="var(--text)" strokeWidth="1.8" />
      <line x1="289" y1="86" x2="289" y2="132" stroke="var(--text)" strokeWidth="1.8" />
      {/* Block 2 */}
      <rect x="270" y="132" width="38" height="36" rx="4" fill="var(--success)" fillOpacity="0.2" stroke="var(--success)" strokeWidth="2" />
      <text x="289" y="154" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="700">m₂</text>
      <text x="210" y="58" fill="var(--accent)" fontSize="11" fontWeight="700">N_n →</text>
      <text x="305" y="115" fill="var(--success)" fontSize="11" fontWeight="700">↑ N_n</text>
    </svg>
  ),

  'svg-03-wahadlo-stozkowe': () => (
    <svg viewBox="0 0 360 195" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="180" y1="20" x2="180" y2="165" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 4" />
      <ellipse cx="180" cy="145" rx="85" ry="22" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="180" y1="20" x2="265" y2="145" stroke="var(--text)" strokeWidth="2" />
      <circle cx="265" cy="145" r="7" fill="var(--accent)" />
      <line x1="265" y1="145" x2="265" y2="185" stroke="var(--text)" strokeWidth="2" />
      <text x="273" y="180" fill="var(--text)" fontSize="12" fontWeight="700">mg</text>
      <line x1="265" y1="145" x2="205" y2="145" stroke="var(--success)" strokeWidth="2.4" />
      <text x="205" y="138" fill="var(--success)" fontSize="11" fontWeight="700">F_d = mv²/r</text>
      <text x="190" y="60" fill="var(--text)" fontSize="12">α</text>
    </svg>
  ),

  'svg-03-zderzenie-wektory': () => (
    <svg viewBox="0 0 440 150" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="110" y="24" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">Przed zderzeniem</text>
      <circle cx="55" cy="75" r="16" fill="var(--accent)" fillOpacity="0.25" stroke="var(--accent)" strokeWidth="2" />
      <text x="55" y="79" textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight="700">m₁</text>
      <line x1="74" y1="75" x2="120" y2="75" stroke="var(--accent)" strokeWidth="2.4" />
      <text x="95" y="65" fill="var(--accent)" fontSize="11" fontWeight="700">p₁ →</text>
      <circle cx="165" cy="75" r="20" fill="var(--border)" fillOpacity="0.3" stroke="var(--text)" strokeWidth="2" />
      <text x="165" y="79" textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight="700">m₂ (v=0)</text>

      <line x1="220" y1="20" x2="220" y2="130" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />

      <text x="330" y="24" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontWeight="600">Po zderzeniu (ZZP)</text>
      <rect x="275" y="55" width="60" height="40" rx="12" fill="var(--success)" fillOpacity="0.2" stroke="var(--success)" strokeWidth="2" />
      <text x="305" y="79" textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight="700">m₁ + m₂</text>
      <line x1="338" y1="75" x2="395" y2="75" stroke="var(--success)" strokeWidth="2.4" />
      <text x="368" y="65" fill="var(--success)" fontSize="11" fontWeight="700">p₁ + p₂ →</text>
    </svg>
  ),

  'svg-04-ramie-sily': () => (
    <svg viewBox="0 0 400 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70" cy="120" r="6" fill="var(--accent)" />
      <text x="54" y="138" fill="var(--accent)" fontSize="12" fontWeight="700">Oś O</text>
      <line x1="70" y1="120" x2="270" y2="120" stroke="var(--text)" strokeWidth="3" />
      <text x="165" y="138" fill="var(--text)" fontSize="12">r</text>
      <line x1="270" y1="120" x2="345" y2="45" stroke="var(--accent)" strokeWidth="2.5" />
      <text x="325" y="45" fill="var(--accent)" fontSize="13" fontWeight="700">F⃗</text>
      <line x1="225" y1="165" x2="355" y2="35" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="4 4" />
      <line x1="70" y1="120" x2="205" y2="120" stroke="none" />
      <text x="200" y="95" fill="var(--success)" fontSize="12" fontWeight="700">d = r·sin α</text>
    </svg>
  ),

  'svg-04-belka-rownowaga': () => (
    <svg viewBox="0 0 420 165" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="65" width="300" height="16" rx="3" fill="var(--accent)" fillOpacity="0.2" stroke="var(--text)" strokeWidth="2" />
      <polygon points="75,81 62,115 88,115" fill="var(--success)" fillOpacity="0.3" stroke="var(--success)" strokeWidth="1.8" />
      <polygon points="345,81 332,115 358,115" fill="var(--success)" fillOpacity="0.3" stroke="var(--success)" strokeWidth="1.8" />
      <text x="75" y="135" textAnchor="middle" fill="var(--success)" fontSize="12" fontWeight="700">R_L ↑</text>
      <text x="345" y="135" textAnchor="middle" fill="var(--success)" fontSize="12" fontWeight="700">R_P ↑</text>
      <line x1="210" y1="81" x2="210" y2="140" stroke="var(--accent)" strokeWidth="2.2" />
      <text x="210" y="155" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">Q_belki (w środku)</text>
    </svg>
  ),

  'svg-04-staczanie-rownia': () => (
    <svg viewBox="0 0 400 185" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,160 350,160 350,50" fill="var(--border)" fillOpacity="0.18" stroke="var(--text-muted)" strokeWidth="1.8" />
      <circle cx="215" cy="78" r="22" fill="var(--accent)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="2.2" />
      <circle cx="215" cy="78" r="3" fill="var(--text)" />
      <text x="215" y="46" textAnchor="middle" fill="var(--accent)" fontSize="11" fontWeight="700">v = ωR</text>
      <text x="250" y="96" fill="var(--success)" fontSize="11" fontWeight="700">T_s (obraca bryłę)</text>
    </svg>
  ),

  'svg-05-natezenie-g-r': () => (
    <svg viewBox="0 0 420 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="145" x2="380" y2="145" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="50" y1="145" x2="50" y2="20" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="50" y1="145" x2="155" y2="42" stroke="var(--accent)" strokeWidth="2.6" />
      <path d="M 155 42 Q 210 112 365 135" fill="none" stroke="var(--accent)" strokeWidth="2.6" />
      <line x1="155" y1="42" x2="155" y2="145" stroke="var(--border)" strokeDasharray="4 4" />
      <text x="155" y="162" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="700">R_Z</text>
      <text x="38" y="45" fill="var(--text)" fontSize="12" fontWeight="700">g₀</text>
      <text x="260" y="95" fill="var(--accent)" fontSize="12" fontWeight="600">g ~ 1/r²</text>
    </svg>
  ),

  'svg-05-studnia-potencjalu': () => (
    <svg viewBox="0 0 420 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="35" x2="380" y2="35" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="50" y1="20" x2="50" y2="160" stroke="var(--text-muted)" strokeWidth="1.5" />
      <path d="M 95 150 Q 145 55 370 42" fill="none" stroke="var(--accent)" strokeWidth="2.6" />
      <text x="382" y="38" fill="var(--text-muted)" fontSize="12">r</text>
      <text x="22" y="145" fill="var(--text-muted)" fontSize="11">E_p&lt;0</text>
      <text x="220" y="95" fill="var(--accent)" fontSize="12" fontWeight="700">E_p(r) = −GMm/r</text>
    </svg>
  ),

  'svg-05-orbita-kepler': () => (
    <svg viewBox="0 0 420 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="210" cy="90" rx="145" ry="62" fill="none" stroke="var(--border)" strokeWidth="2.2" />
      <circle cx="135" cy="90" r="12" fill="#f59e0b" />
      <text x="135" y="116" textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight="700">Słońce</text>
      <circle cx="65" cy="90" r="5" fill="var(--accent)" />
      <text x="35" y="80" fill="var(--accent)" fontSize="11" fontWeight="700">Peryhelium</text>
      <circle cx="355" cy="90" r="5" fill="var(--success)" />
      <text x="345" y="80" fill="var(--success)" fontSize="11" fontWeight="700">Aphelium</text>
    </svg>
  ),

  'svg-06-oscylator-wykresy': () => (
    <svg viewBox="0 0 440 165" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="35" y1="85" x2="415" y2="85" stroke="var(--text-muted)" strokeWidth="1.2" />
      <line x1="35" y1="20" x2="35" y2="150" stroke="var(--text-muted)" strokeWidth="1.2" />
      <path d="M 35 85 Q 80 20 125 85 T 215 85 T 305 85 T 395 85" fill="none" stroke="var(--accent)" strokeWidth="2.4" />
      <path d="M 35 30 Q 80 85 125 140 T 215 30 T 305 140 T 395 30" fill="none" stroke="var(--success)" strokeWidth="1.8" strokeDasharray="4 3" />
      <text x="350" y="34" fill="var(--accent)" fontSize="11" fontWeight="700">x(t) = A sin(ωt)</text>
      <text x="350" y="50" fill="var(--success)" fontSize="11" fontWeight="700">v(t) = ωA cos(ωt)</text>
    </svg>
  ),

  'svg-06-energia-drgan': () => (
    <svg viewBox="0 0 400 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="145" x2="360" y2="145" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="200" y1="145" x2="200" y2="25" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="85" y1="45" x2="315" y2="45" stroke="var(--text)" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 85 45 Q 200 245 315 45" fill="none" stroke="var(--accent)" strokeWidth="2.4" />
      <path d="M 85 145 Q 200 -55 315 145" fill="none" stroke="var(--success)" strokeWidth="2.4" />
      <text x="85" y="162" textAnchor="middle" fill="var(--text)" fontSize="11">−A</text>
      <text x="315" y="162" textAnchor="middle" fill="var(--text)" fontSize="11">+A</text>
      <text x="205" y="38" fill="var(--text)" fontSize="11" fontWeight="700">E_c = const</text>
      <text x="320" y="65" fill="var(--accent)" fontSize="11" fontWeight="700">E_p(x)</text>
      <text x="235" y="110" fill="var(--success)" fontSize="11" fontWeight="700">E_k(x)</text>
    </svg>
  ),

  'svg-06-fale-stojace': () => (
    <svg viewBox="0 0 420 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="45" y="42" fill="var(--text)" fontSize="12" fontWeight="700">n = 1</text>
      <path d="M 90 38 Q 225 8 360 38 Q 225 68 90 38" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <text x="45" y="95" fill="var(--text)" fontSize="12" fontWeight="700">n = 2</text>
      <path d="M 90 90 Q 157 62 225 90 T 360 90 Q 292 118 225 90 T 90 90" fill="none" stroke="var(--success)" strokeWidth="2" />
      <text x="45" y="148" fill="var(--text)" fontSize="12" fontWeight="700">n = 3</text>
      <path d="M 90 142 Q 135 116 180 142 T 270 142 T 360 142" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <path d="M 90 142 Q 135 168 180 142 T 270 142 T 360 142" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
  ),

  'svg-06-doppler': () => (
    <svg viewBox="0 0 420 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <circle cx="240" cy="88" r="24" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <circle cx="222" cy="88" r="46" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <circle cx="200" cy="88" r="70" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <circle cx="252" cy="88" r="6" fill="var(--success)" />
      <text x="290" y="92" fill="var(--success)" fontSize="12" fontWeight="700">→ v_źr (f' &gt; f)</text>
      <text x="65" y="92" fill="var(--text-muted)" fontSize="11">λ większe (f' &lt; f)</text>
    </svg>
  ),

  'svg-07-archimedes': () => (
    <svg viewBox="0 0 360 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="80" y="45" width="200" height="115" fill="none" stroke="var(--text-muted)" strokeWidth="2" />
      <rect x="82" y="80" width="196" height="78" fill="var(--accent)" fillOpacity="0.14" />
      <rect x="150" y="60" width="60" height="55" rx="4" fill="var(--success)" fillOpacity="0.3" stroke="var(--text)" strokeWidth="2" />
      <line x1="180" y1="88" x2="180" y2="30" stroke="var(--success)" strokeWidth="2.4" />
      <text x="190" y="38" fill="var(--success)" fontSize="12" fontWeight="700">F_w ↑</text>
      <line x1="180" y1="88" x2="180" y2="145" stroke="var(--accent)" strokeWidth="2.4" />
      <text x="190" y="142" fill="var(--accent)" fontSize="12" fontWeight="700">Q = mg ↓</text>
    </svg>
  ),

  'svg-07-przemiany-pv': () => (
    <svg viewBox="0 0 420 180" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="55" y1="150" x2="380" y2="150" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="55" y1="150" x2="55" y2="20" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="115" y1="50" x2="295" y2="50" stroke="var(--text)" strokeWidth="2.2" />
      <text x="235" y="42" fill="var(--text)" fontSize="11" fontWeight="700">p = const (izobara)</text>
      <line x1="115" y1="50" x2="115" y2="135" stroke="var(--text-muted)" strokeWidth="2.2" />
      <text x="122" y="128" fill="var(--text-muted)" fontSize="11">V = const</text>
      <path d="M 115 50 Q 175 100 320 120" fill="none" stroke="var(--success)" strokeWidth="2.4" />
      <text x="322" y="116" fill="var(--success)" fontSize="11" fontWeight="700">izoterma</text>
      <path d="M 115 50 Q 155 118 265 138" fill="none" stroke="var(--accent)" strokeWidth="2.4" />
      <text x="268" y="142" fill="var(--accent)" fontSize="11" fontWeight="700">adiabata</text>
    </svg>
  ),

  'svg-07-cykl-silnika': () => (
    <svg viewBox="0 0 400 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="55" y1="145" x2="360" y2="145" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="55" y1="145" x2="55" y2="20" stroke="var(--text-muted)" strokeWidth="1.5" />
      <rect x="115" y="45" width="175" height="65" fill="var(--accent)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="2.4" />
      <text x="202" y="82" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">Pole = W_uż</text>
      <text x="365" y="148" fill="var(--text-muted)" fontSize="12">V</text>
      <text x="42" y="25" fill="var(--text-muted)" fontSize="12">p</text>
    </svg>
  ),

  'svg-08-linie-pola': () => (
    <svg viewBox="0 0 420 170" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="65" y="30" width="12" height="110" fill="var(--accent)" />
      <rect x="340" y="30" width="12" height="110" fill="var(--success)" />
      <text x="71" y="22" textAnchor="middle" fill="var(--accent)" fontSize="13" fontWeight="700">+</text>
      <text x="346" y="22" textAnchor="middle" fill="var(--success)" fontSize="13" fontWeight="700">−</text>
      {[48, 72, 96, 120].map((y) => (
        <line key={y} x1="82" y1={y} x2="335" y2={y} stroke="var(--text)" strokeWidth="1.8" />
      ))}
      <text x="208" y="160" textAnchor="middle" fill="var(--text-muted)" fontSize="12">Pole jednorodne E = U/d</text>
    </svg>
  ),

  'svg-08-elektron-w-kondensatorze': () => (
    <svg viewBox="0 0 420 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="65" y1="35" x2="310" y2="35" stroke="var(--accent)" strokeWidth="4" />
      <text x="50" y="39" fill="var(--accent)" fontSize="14" fontWeight="700">+</text>
      <line x1="65" y1="140" x2="310" y2="140" stroke="var(--success)" strokeWidth="4" />
      <text x="50" y="144" fill="var(--success)" fontSize="14" fontWeight="700">−</text>
      <path d="M 35 90 L 65 90 Q 200 88 310 48" fill="none" stroke="var(--text)" strokeWidth="2.4" />
      <text x="320" y="50" fill="var(--accent)" fontSize="12" fontWeight="700">e⁻ (tor paraboliczny)</text>
    </svg>
  ),

  'svg-08-kondensator-dielektryk': () => (
    <svg viewBox="0 0 420 155" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="45" x2="210" y2="45" stroke="var(--text)" strokeWidth="4" />
      <line x1="60" y1="105" x2="210" y2="105" stroke="var(--text)" strokeWidth="4" />
      <rect x="115" y="50" width="90" height="50" fill="var(--accent)" fillOpacity="0.25" stroke="var(--accent)" strokeWidth="1.8" />
      <text x="160" y="79" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">ε_r &gt; 1</text>
      <text x="235" y="65" fill="var(--text)" fontSize="12" fontWeight="600">• Z baterią: U = const, Q ↑</text>
      <text x="235" y="92" fill="var(--text)" fontSize="12" fontWeight="600">• Bez baterii: Q = const, U ↓</text>
    </svg>
  ),

  'svg-09-charakterystyka-iu': () => (
    <svg viewBox="0 0 400 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="145" x2="360" y2="145" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="50" y1="145" x2="50" y2="20" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="50" y1="145" x2="335" y2="35" stroke="var(--success)" strokeWidth="2.4" />
      <path d="M 50 145 Q 145 75 335 72" fill="none" stroke="var(--accent)" strokeWidth="2.4" />
      <text x="300" y="30" fill="var(--success)" fontSize="11" fontWeight="700">Opornik (R = const)</text>
      <text x="285" y="88" fill="var(--accent)" fontSize="11" fontWeight="700">Żarówka (R rośnie)</text>
    </svg>
  ),

  'svg-09-kirchhoff-petla': () => (
    <svg viewBox="0 0 380 165" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="75" y="35" width="230" height="95" fill="none" stroke="var(--text)" strokeWidth="2" />
      <rect x="160" y="25" width="60" height="20" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
      <text x="190" y="39" textAnchor="middle" fill="var(--accent)" fontSize="11" fontWeight="700">R₁</text>
      <rect x="160" y="120" width="60" height="20" fill="var(--bg)" stroke="var(--success)" strokeWidth="2" />
      <text x="190" y="134" textAnchor="middle" fill="var(--success)" fontSize="11" fontWeight="700">R₂</text>
      <text x="52" y="87" fill="var(--accent)" fontSize="13" fontWeight="700">ℰ</text>
      <text x="190" y="86" textAnchor="middle" fill="var(--text-muted)" fontSize="12">∑ℰ = ∑IR</text>
    </svg>
  ),

  'svg-09-sem-wykres': () => (
    <svg viewBox="0 0 400 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="55" y1="145" x2="360" y2="145" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="55" y1="145" x2="55" y2="20" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="55" y1="38" x2="320" y2="145" stroke="var(--accent)" strokeWidth="2.6" />
      <text x="42" y="42" fill="var(--accent)" fontSize="12" fontWeight="700">ℰ</text>
      <text x="320" y="162" textAnchor="middle" fill="var(--success)" fontSize="12" fontWeight="700">I_zw = ℰ/r</text>
      <text x="215" y="75" fill="var(--text)" fontSize="12" fontWeight="600">U = ℰ − I·r</text>
    </svg>
  ),

  'svg-09-mierniki': () => (
    <svg viewBox="0 0 420 155" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="75" x2="380" y2="75" stroke="var(--text)" strokeWidth="2" />
      <circle cx="115" cy="75" r="16" fill="var(--bg)" stroke="var(--success)" strokeWidth="2" />
      <text x="115" y="80" textAnchor="middle" fill="var(--success)" fontSize="13" fontWeight="700">A</text>
      <rect x="210" y="62" width="66" height="26" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
      <text x="243" y="79" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">R</text>
      <polyline points="185,75 185,125 300,125 300,75" fill="none" stroke="var(--text)" strokeWidth="1.8" />
      <circle cx="243" cy="125" r="15" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
      <text x="243" y="130" textAnchor="middle" fill="var(--accent)" fontSize="13" fontWeight="700">V</text>
    </svg>
  ),

  'svg-10-lorentz-okrag': () => (
    <svg viewBox="0 0 380 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <circle cx="190" cy="88" r="56" fill="none" stroke="var(--accent)" strokeWidth="2.4" />
      <text x="65" y="45" fill="var(--text-muted)" fontSize="14">⊗ B⃗ (za rysunek)</text>
      <circle cx="190" cy="32" r="5" fill="var(--success)" />
      <text x="200" y="28" fill="var(--success)" fontSize="12" fontWeight="700">q &gt; 0: R = mv/(qB)</text>
    </svg>
  ),

  'svg-10-pret-na-szynach': () => (
    <svg viewBox="0 0 420 165" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <polyline points="340,35 70,35 70,130 340,130" fill="none" stroke="var(--text)" strokeWidth="2.4" />
      <rect x="58" y="65" width="24" height="36" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
      <text x="70" y="88" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">R</text>
      <line x1="225" y1="25" x2="225" y2="140" stroke="var(--success)" strokeWidth="5" />
      <text x="240" y="86" fill="var(--success)" fontSize="12" fontWeight="700">→ v (ℰ = Blv)</text>
    </svg>
  ),

  'svg-10-transformator': () => (
    <svg viewBox="0 0 380 165" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="105" y="30" width="170" height="105" fill="none" stroke="var(--border)" strokeWidth="14" />
      <text x="65" y="85" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="700">U₁, N₁</text>
      <text x="315" y="85" textAnchor="middle" fill="var(--success)" fontSize="12" fontWeight="700">U₂, N₂</text>
      <text x="190" y="155" textAnchor="middle" fill="var(--text-muted)" fontSize="12">U₁/U₂ = N₁/N₂</text>
    </svg>
  ),

  'svg-10-widmo-em': () => (
    <svg viewBox="0 0 440 120" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="35" width="390" height="32" rx="6" fill="var(--accent)" fillOpacity="0.16" stroke="var(--border)" />
      <text x="55" y="55" fill="var(--text)" fontSize="11" fontWeight="600">Radiowe</text>
      <text x="130" y="55" fill="var(--text)" fontSize="11" fontWeight="600">Mikro</text>
      <text x="185" y="55" fill="var(--text)" fontSize="11" fontWeight="600">IR</text>
      <text x="235" y="55" fill="var(--accent)" fontSize="11" fontWeight="700">Widzialne</text>
      <text x="305" y="55" fill="var(--text)" fontSize="11" fontWeight="600">UV</text>
      <text x="345" y="55" fill="var(--text)" fontSize="11" fontWeight="600">X</text>
      <text x="385" y="55" fill="var(--success)" fontSize="11" fontWeight="700">γ</text>
      <text x="220" y="95" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Rosnąca częstotliwość f → (malejąca długość fali λ)</text>
    </svg>
  ),

  'svg-11-snell-cio': () => (
    <svg viewBox="0 0 400 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="88" x2="360" y2="88" stroke="var(--text)" strokeWidth="2" />
      <line x1="200" y1="20" x2="200" y2="155" stroke="var(--border)" strokeDasharray="4 4" />
      <line x1="115" y1="28" x2="200" y2="88" stroke="var(--accent)" strokeWidth="2.4" />
      <line x1="200" y1="88" x2="255" y2="150" stroke="var(--success)" strokeWidth="2.4" />
      <text x="168" y="54" fill="var(--accent)" fontSize="12" fontWeight="700">α</text>
      <text x="210" y="128" fill="var(--success)" fontSize="12" fontWeight="700">β</text>
      <text x="70" y="75" fill="var(--text-muted)" fontSize="11">n₁</text>
      <text x="70" y="108" fill="var(--text-muted)" fontSize="11">n₂</text>
    </svg>
  ),

  'svg-11-soczewka-konstrukcje': () => (
    <svg viewBox="0 0 420 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="90" x2="390" y2="90" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="200" y1="25" x2="200" y2="155" stroke="var(--accent)" strokeWidth="3" />
      <line x1="95" y1="90" x2="95" y2="48" stroke="var(--text)" strokeWidth="2.6" />
      <polyline points="95,48 200,48 335,126" fill="none" stroke="var(--success)" strokeWidth="2" />
      <line x1="95" y1="48" x2="335" y2="126" stroke="var(--accent)" strokeWidth="1.8" strokeDasharray="4 3" />
      <circle cx="272" cy="90" r="3" fill="var(--text)" />
      <text x="272" y="106" textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight="700">F</text>
      <line x1="335" y1="90" x2="335" y2="126" stroke="var(--success)" strokeWidth="2.6" />
    </svg>
  ),

  'svg-11-siatka-dyfrakcyjna': () => (
    <svg viewBox="0 0 420 170" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="90" y1="30" x2="90" y2="140" stroke="var(--text)" strokeWidth="3" strokeDasharray="8 6" />
      <line x1="350" y1="20" x2="350" y2="150" stroke="var(--border)" strokeWidth="3" />
      <line x1="30" y1="85" x2="350" y2="85" stroke="var(--accent)" strokeWidth="2" />
      <line x1="90" y1="85" x2="350" y2="35" stroke="var(--success)" strokeWidth="2" />
      <line x1="90" y1="85" x2="350" y2="135" stroke="var(--success)" strokeWidth="2" />
      <text x="230" y="45" fill="var(--success)" fontSize="11" fontWeight="700">n = 1 (d sinα = λ)</text>
      <text x="230" y="80" fill="var(--accent)" fontSize="11" fontWeight="700">n = 0</text>
    </svg>
  ),

  'svg-12-fotoefekt-wykres': () => (
    <svg viewBox="0 0 400 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="115" x2="365" y2="115" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="50" y1="160" x2="50" y2="20" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="50" y1="150" x2="145" y2="115" stroke="var(--border)" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="145" y1="115" x2="330" y2="45" stroke="var(--accent)" strokeWidth="2.6" />
      <text x="145" y="132" textAnchor="middle" fill="var(--accent)" fontSize="11" fontWeight="700">f₀</text>
      <text x="32" y="152" fill="var(--text-muted)" fontSize="11">−W</text>
      <text x="260" y="62" fill="var(--accent)" fontSize="11" fontWeight="700">nachylenie = h</text>
    </svg>
  ),

  'svg-12-poziomy-bohra': () => (
    <svg viewBox="0 0 400 175" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="70" y1="145" x2="320" y2="145" stroke="var(--text)" strokeWidth="2" />
      <text x="330" y="149" fill="var(--text)" fontSize="11">n=1 (−13,6 eV)</text>
      <line x1="70" y1="70" x2="320" y2="70" stroke="var(--text)" strokeWidth="2" />
      <text x="330" y="74" fill="var(--text)" fontSize="11">n=2 (−3,40 eV)</text>
      <line x1="70" y1="40" x2="320" y2="40" stroke="var(--text)" strokeWidth="2" />
      <text x="330" y="44" fill="var(--text)" fontSize="11">n=3 (−1,51 eV)</text>
      <line x1="160" y1="40" x2="160" y2="70" stroke="var(--accent)" strokeWidth="2.4" />
      <text x="170" y="59" fill="var(--accent)" fontSize="11" fontWeight="700">↓ foton H_α</text>
    </svg>
  ),

  'svg-12-rozpad-wykres': () => (
    <svg viewBox="0 0 400 170" className="physics-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="140" x2="360" y2="140" stroke="var(--text-muted)" strokeWidth="1.5" />
      <line x1="50" y1="140" x2="50" y2="20" stroke="var(--text-muted)" strokeWidth="1.5" />
      <path d="M 50 30 Q 130 115 340 136" fill="none" stroke="var(--accent)" strokeWidth="2.6" />
      <text x="32" y="34" fill="var(--text)" fontSize="11" fontWeight="700">N₀</text>
      <text x="125" y="155" fill="var(--text)" fontSize="11" fontWeight="700">T₁/₂</text>
      <text x="200" y="155" fill="var(--text)" fontSize="11" fontWeight="700">2T₁/₂</text>
    </svg>
  ),
};
