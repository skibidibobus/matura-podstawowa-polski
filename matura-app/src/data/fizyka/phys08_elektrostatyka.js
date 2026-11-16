export const phys08Elektrostatyka = {
  id: 'phys-08',
  displayNum: 8,
  code: 'DZIAŁ 8',
  title: 'Elektrostatyka',
  subtitle: 'Prawo Coulomba, pole elektryczne, potencjał, ruch ładunku w kondensatorze i pojemność',
  duration: '7–8 h (Tydzień 13)',
  xp: 240,
  notes: [
    {
      id: 'pn8-1',
      title: 'Ładunek, prawo Coulomba i natężenie pola elektrycznego',
      badge: 'Oddziaływania ładunków',
      intro:
        'Elektrostatyka jest matematycznie bliźniaczo podobna do grawitacji — z jedną zasadniczą różnicą: ładunki mogą mieć znak $+$ lub $-$, więc potrafią się zarówno przyciągać, jak i odpychać.',
      blocks: [
        {
          type: 'prose',
          heading: 'Prawo Coulomba i natężenie $\\vec{E}$',
          paragraphs: [
            'Wartość siły między ładunkami punktowymi $q_1, q_2$ w odległości $r$: $F = k\\frac{|q_1 q_2|}{r^2}$, gdzie $k = \\frac{1}{4\\pi\\varepsilon_0} \\approx 8{,}99\\cdot 10^9\\,\\frac{\\text{N}\\cdot\\text{m}^2}{\\text{C}^2}$.',
            'Natężenie pola elektrycznego: $\\vec{E} = \\frac{\\vec{F}}{q}\\,[\\text{N/C} = \\text{V/m}]$. Zwrot wektora $\\vec{E}$ jest zgodny z siłą działającą na **ładunek dodatni** (linie pola wychodzą z $+$, wchodzą do $-$).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-08-linie-pola',
          title: 'Rysunek 1. Linie pola elektrycznego (dipol oraz kondensator płaski)',
          caption: 'Wewnątrz kondensatora płaskiego linie pola są równoległe i równoodległe (pole jednorodne E = const).',
        },
      ],
    },
    {
      id: 'pn8-2',
      title: 'Potencjał, napięcie i ruch ładunku w polu jednorodnym',
      badge: 'Analogia do rzutu poziomego!',
      intro:
        'Jeśli opanowałeś rzut poziomy w Dziale 2, to ruch elektronu w kondensatorze masz już w małym palcu — działa dokładnie ta sama matematyka.',
      blocks: [
        {
          type: 'prose',
          heading: 'Napięcie, praca i odchylanie wiązki w kondensatorze',
          paragraphs: [
            'Potencjał $V = \\frac{E_p}{q}\\,[\\text{V}]$, napięcie $U_{AB} = V_A - V_B$. Praca sił pola przy przeniesieniu ładunku $q$: $W = qU$. W polu jednorodnym między okładkami odległymi o $d$: $E = \\frac{U}{d}$.',
            'Elektron wlatujący równolegle do okładek z prędkością $v_0$ porusza się w osi $X$ ruchem jednostajnym ($x = v_0 t$), a w osi $Y$ ruchem jednostajnie przyspieszonym z przyspieszeniem $a_y = \\frac{eE}{m_e} = \\frac{eU}{m_e d}$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-08-elektron-w-kondensatorze',
          title: 'Rysunek 2. Tor paraboliczny elektronu w kondensatorze płaskim',
          caption: 'Elektron (ładunek ujemny) zakrzywia tor w stronę okładki dodatniej (+), przeciwnie do zwrotu wektora E⃗.',
        },
      ],
    },
    {
      id: 'pn8-3',
      title: 'Kondensator płaski i rola dielektryka',
      badge: 'Pułapka CKE: bateria podłączona vs odłączona',
      intro:
        'To jedno z najbardziej ulubionych pytań maturalnych CKE: co się stanie z $C, Q, U, E$ po wsunięciu dielektryka lub rozsunięciu okładek?',
      blocks: [
        {
          type: 'prose',
          heading: 'Pojemność i energia kondensatora',
          paragraphs: [
            'Pojemność kondensatora płaskiego: $C = \\frac{Q}{U} = \\varepsilon_0 \\varepsilon_r \\frac{S}{d}\\,[\\text{F}]$. Energia zgromadzona w kondensatorze: $E_c = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C} = \\frac{1}{2}QU$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-08-kondensator-dielektryk',
          title: 'Rysunek 3. Dwa scenariusze zmiany parametrów kondensatora',
          caption: 'Podłączony do baterii: U = const. Odłączony od baterii: Q = const!',
        },
        {
          type: 'callout',
          variant: 'amber',
          title: 'Złota reguła CKE dla kondensatora',
          items: [
            '**Kondensator PODŁĄCZONY do baterii ($U = \\text{const}$):** wsunięcie dielektryka ($\\varepsilon_r > 1$) zwiększa $C$, więc ładunek $Q = CU$ rośnie, a natężenie $E = U/d$ nie zmienia się.',
            '**Kondensator ODŁĄCZONY od baterii ($Q = \\text{const}$):** wsunięcie dielektryka zwiększa $C$, więc napięcie $U = Q/C$ maleje, a energia $E_c = \\frac{Q^2}{2C}$ maleje (dielektryk jest wciągany do środka!).',
          ],
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf8-1', front: 'Związek między natężeniem pola $E$ a napięciem $U$ w kondensatorze płaskim o odległości okładek $d$:', back: '$E = \\frac{U}{d}$ (jednostka: $\\text{V/m} = \\text{N/C}$).', category: 'wzor' },
    { id: 'pf8-2', front: 'Co jest stałe w kondensatorze odłączonym od źródła napięcia podczas rozsuwania okładek?', back: 'Ładunek $Q = \\text{const}$ (bo nie ma dokąd odpłynąć).', category: 'zjawisko' },
    { id: 'pf8-3', front: 'Co jest stałe w kondensatorze podłączonym cały czas do baterii?', back: 'Napięcie $U = \\text{const}$.', category: 'zjawisko' },
    { id: 'pf8-4', front: 'Jak obliczyć prędkość elektronu przyspieszonego z spoczynku napięciem $U$?', back: '$eU = \\frac{1}{2}m_e v^2 \\Rightarrow v = \\sqrt{\\frac{2eU}{m_e}}$.', category: 'wzor' },
  ],
  quiz: [
    {
      id: 'pq8-1',
      q: 'Naładowany kondensator płaski odłączono od baterii, a następnie dwukrotnie zwiększono odległość $d$ między jego okładkami. Energia zgromadzona w kondensatorze:',
      options: ['zmalała dwukrotnie', 'wzrosła dwukrotnie', 'nie zmieniła się', 'wzrosła czterokrotnie'],
      correct: 1,
      explanation: 'Przy odłączonej baterii $Q = \\text{const}$. Gdy $d$ rośnie $2\\times$, pojemność $C = \\varepsilon_0 S/d$ maleje $2\\times$. Zatem $E_c = \\frac{Q^2}{2C}$ rośnie $2\\times$ (wykonaliśmy pracę nad przyciągającymi się okładkami!).',
    },
    {
      id: 'pq8-2',
      q: 'Elektron przyspieszony napięciem $U = 100\\text{ V}$ uzyskuje energię kinetyczną równą:',
      options: ['$100\\text{ J}$', '$100\\text{ eV}$', '$1{,}6\\cdot 10^{-19}\\text{ J}$', '$100\\text{ V}$'],
      correct: 1,
      explanation: '$E_k = e \\cdot U = 1\\,e \\cdot 100\\text{ V} = 100\\text{ eV} = 1{,}6\\cdot 10^{-17}\\text{ J}$.',
    },
  ],
  examTasks: [
    {
      id: 'cke-08-elektron-kondensator',
      source: 'CKE Formuła 2023 • Elektrostatyka i kinematyka',
      title: 'Odchylenie wiązki elektronów w kondensatorze płaskim',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszownikUrl: 'https://arkuszownik.pl',
      svgId: 'svg-08-elektron-w-kondensatorze',
      prompt:
        'Elektron wlatuje z prędkością $v_0 = 2{,}0\\cdot 10^7\\text{ m/s}$ równolegle do okładek kondensatora o długości $L = 0{,}10\\text{ m}$ i odległości między okładkami $d = 0{,}020\\text{ m}$. Napięcie na kondensatorze wynosi $U = 100\\text{ V}$. Oblicz pionowe odchylenie $y$ elektronu w chwili wylotu z kondensatora ($e/m_e = 1{,}76\\cdot 10^{11}\\text{ C/kg}$).',
      expectedValue: 0.011,
      tolerance: 0.001,
      unit: 'm',
      hint: 'Czas przelotu: $t = L / v_0$. Przyspieszenie pionowe: $a = \\frac{eU}{m_e d}$. Odchylenie: $y = \\frac{1}{2}at^2$.',
      solutionSteps: [
        'Czas przelotu przez kondensator: $t = \\frac{L}{v_0} = \\frac{0{,}10}{2{,}0\\cdot 10^7} = 5{,}0\\cdot 10^{-9}\\text{ s}$.',
        'Przyspieszenie w polu elektrycznym: $a = \\frac{e}{m_e} \\cdot \\frac{U}{d} = 1{,}76\\cdot 10^{11} \\cdot \\frac{100}{0{,}020} = 8{,}8\\cdot 10^{14}\\text{ m/s}^2$.',
        'Odchylenie pionowe: $y = \\frac{1}{2}at^2 = 0{,}5 \\cdot 8{,}8\\cdot 10^{14} \\cdot (5{,}0\\cdot 10^{-9})^2 = 0{,}011\\text{ m}$ ($1{,}1\\text{ cm}$).',
      ],
      ckeKey: [
        '1 pkt — obliczenie czasu przelotu $t = L/v_0$.',
        '1 pkt — wyznaczenie przyspieszenia $a = \\frac{eU}{m_e d}$.',
        '1 pkt — obliczenie odchylenia $y = \\frac{1}{2}at^2 = 1{,}1\\text{ cm}$.',
      ],
    },
  ],
};
