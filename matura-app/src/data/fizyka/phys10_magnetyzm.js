export const phys10Magnetyzm = {
  id: 'phys-10',
  displayNum: 10,
  code: 'DZIAŁ 10',
  title: 'Magnetyzm, Indukcja EM i Prąd Przemienny',
  subtitle: 'Siła Lorentza, siła elektrodynamiczna, prawo Faradaya, reguła Lenza, transformator i fale EM',
  duration: '14–16 h (Tygodnie 16–17)',
  xp: 280,
  notes: [
    {
      id: 'pn10-1',
      title: 'Pole magnetyczne i siła Lorentza',
      badge: 'Ruch ładunku w polu B',
      intro:
        'Pole magnetyczne działa siłą Lorentza wyłącznie na ładunek będący w RUCHU — i to siłą zawsze prostopadłą do prędkości, przez co siła Lorentza NIE wykonuje pracy i NIE zmienia szybkości cząstki!',
      blocks: [
        {
          type: 'prose',
          heading: 'Siła Lorentza i tor kołowy w polu $\\vec{B}$',
          paragraphs: [
            'Wartość siły Lorentza: $F_L = |q| v B \\sin\\alpha$, gdzie $\\alpha$ to kąt między $\\vec{v}$ a $\\vec{B}$. Kierunek wyznaczamy regułą lewej dłoni (dla ładunku dodatniego; dla elektronu przeciwnie!).',
            'Gdy $\\vec{v} \\perp \\vec{B}$, cząstka porusza się po okręgu (siła Lorentza pełni rolę siły dośrodkowej): $|q|vB = \\frac{mv^2}{R} \\Rightarrow R = \\frac{mv}{|q|B}$, a okres obiegu $T = \\frac{2\\pi m}{|q|B}$ **nie zależy od prędkości $v$** (zasada cyklotronu!).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-10-lorentz-okrag',
          title: 'Rysunek 1. Ruch ładunku dodatniego i ujemnego w jednorodnym polu B⃗',
          caption: 'Krzyżyki oznaczają wektor B⃗ skierowany za płaszczyznę rysunku; dla ładunku (−) zwrot siły Lorentza jest przeciwny.',
        },
      ],
    },
    {
      id: 'pn10-2',
      title: 'Siła elektrodynamiczna i oddziaływanie przewodników',
      badge: 'Prąd w polu magnetycznym',
      intro:
        'Przewodnik z prądem to zbiór poruszających się ładunków — dlatego w polu magnetycznym działa na niego siła elektrodynamiczna.',
      blocks: [
        {
          type: 'prose',
          heading: 'Siła elektrodynamiczna',
          paragraphs: [
            'Wartość siły działającej na prostoliniowy odcinek przewodnika o długości $l$ z prądem $I$: $F_{\\text{ed}} = B I l \\sin\\alpha$.',
            'Dwa równoległe przewodniki z prądami płynącymi w **tę samą stronę przyciągają się**, a w **przeciwne strony odpychają się**.',
          ],
        },
      ],
    },
    {
      id: 'pn10-3',
      title: 'Indukcja elektromagnetyczna i reguła Lenza',
      badge: 'Prawo Faradaya',
      intro:
        'Zmieniający się strumień pola magnetycznego wzbudza w obwodzie siłę elektromotoryczną indukcji. Reguła Lenza mówi wprost: przyroda nie lubi zmian strumienia!',
      blocks: [
        {
          type: 'prose',
          heading: 'Strumień $\\Phi$, prawo Faradaya i pręt na szynach',
          paragraphs: [
            'Strumień magnetyczny: $\\Phi = B S \\cos\\alpha\\,[\\text{Wb}]$, gdzie $\\alpha$ to kąt między $\\vec{B}$ a **normalną** (prostopadłą) do powierzchni ramki!',
            '**Prawo Faradaya:** $\\mathcal{E}_{\\text{ind}} = -\\frac{\\Delta\\Phi}{\\Delta t}$ (dla zwojnicy o $N$ zwojach: $\\times N$). **Reguła Lenza:** prąd indukcyjny ma taki kierunek, aby wytworzone przez niego pole magnetyczne **przeciwdziałało zmianie strumienia**, która ten prąd wywołała.',
            'Pręt o długości $l$ przesuwany z prędkością $v$ prostopadle do linii pola $B$ indukuje SEM: $\\mathcal{E}_{\\text{ind}} = B l v$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-10-pret-na-szynach',
          title: 'Rysunek 2. Pręt poruszający się po szynach w polu B⃗',
          caption: 'Prąd indukcyjny I_ind wywołuje siłę elektrodynamiczną F_ed hamującą ruch pręta (reguła Lenza).',
        },
      ],
    },
    {
      id: 'pn10-4',
      title: 'Prąd przemienny, transformator i fale EM',
      badge: 'Transformator i widmo EM',
      intro:
        'Transformator działa wyłącznie dla prądu zmiennego (bo potrzebna jest zmiana strumienia $\\Delta\\Phi/\\Delta t$!).',
      blocks: [
        {
          type: 'prose',
          heading: 'Wartości skuteczne, transformator i fale elektromagnetyczne',
          paragraphs: [
            'Dla prądu sinusoidalnego wartość skuteczna to $U_{\\text{sk}} = \\frac{U_0}{\\sqrt{2}}$ oraz $I_{\\text{sk}} = \\frac{I_0}{\\sqrt{2}}$ (w gniazdku $U_{\\text{sk}} = 230\\text{ V}$, więc amplituda $U_0 \\approx 325\\text{ V}$!).',
            '**Transformator idealny:** $\\frac{U_1}{U_2} = \\frac{N_1}{N_2}$ oraz $P_1 = P_2 \\Rightarrow U_1 I_1 = U_2 I_2$.',
            '**Widmo fal EM (rosnąca częstotliwość / malejąca długość $\\lambda$):** radiowe $\\to$ mikrofale $\\to$ podczerwień (IR) $\\to$ światło widzialne ($400\\text{–}700\\text{ nm}$) $\\to$ ultrafiolet (UV) $\\to$ rentgenowskie (X) $\\to$ gamma ($\\gamma$). W próżni wszystkie biegną z prędkością $c \\approx 3{,}0\\cdot 10^8\\text{ m/s}$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-10-transformator',
          title: 'Rysunek 3. Budowa transformatora idealnego',
          caption: 'Przekładnia napięciowa zależy od stosunku liczby zwojów N₁/N₂.',
        },
        {
          type: 'diagram',
          svgId: 'svg-10-widmo-em',
          title: 'Rysunek 4. Widmo fal elektromagnetycznych',
          caption: 'Wraz ze wzrostem częstotliwości f rośnie energia fotonu E = hf, a maleje długość fali λ = c/f.',
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf10-1', front: 'Czy siła Lorentza może zmienić wartość prędkości cząstki w stałym polu magnetycznym?', back: 'NIE — jest zawsze prostopadła do $\\vec{v}$, więc nie wykonuje pracy ($W = 0$) i zmienia tylko kierunek prędkości.', category: 'prawo' },
    { id: 'pf10-2', front: 'Wzór na promień okręgu cząstki o masie $m$ i ładunku $q$ w polu magnetycznym $B$ ($\\vec{v}\\perp\\vec{B}$):', back: '$R = \\frac{mv}{|q|B}$', category: 'wzor' },
    { id: 'pf10-3', front: 'Dlaczego transformator nie działa dla prądu stałego?', back: 'Bo przy stałym prądzie strumień magnetyczny w rdzeniu jest stały ($\\Delta\\Phi/\\Delta t = 0$), więc nie indukuje się SEM w uzwojeniu wtórnym.', category: 'zjawisko' },
    { id: 'pf10-4', front: 'Jak obliczyć napięcie maksymalne (amplitudę) prądu przemiennego w gniazdku $230\\text{ V}$?', back: '$U_0 = U_{\\text{sk}}\\sqrt{2} \\approx 230\\cdot 1{,}41 \\approx 325\\text{ V}$.', category: 'wzor' },
  ],
  quiz: [
    {
      id: 'pq10-1',
      q: 'Proton i cząstka $\\alpha$ ($m_\\alpha \\approx 4m_p$, $q_\\alpha = 2e$) wlatują z tą samą prędkością $v$ prostopadle do jednorodnego pola magnetycznego $B$. Stosunek promieni ich torów $R_\\alpha / R_p$ wynosi:',
      options: ['$1 : 2$', '$1 : 1$', '$2 : 1$', '$4 : 1$'],
      correct: 2,
      explanation: '$R = \\frac{mv}{qB}$. Zatem $\\frac{R_\\alpha}{R_p} = \\frac{m_\\alpha / q_\\alpha}{m_p / q_p} = \\frac{4/2}{1/1} = 2$.',
    },
    {
      id: 'pq10-2',
      q: 'Które z poniższych fal elektromagnetycznych mają **największą częstotliwość**?',
      options: ['Mikrofale', 'Światło czerwone', 'Promieniowanie UV', 'Promieniowanie gamma'],
      correct: 3,
      explanation: 'Promieniowanie gamma ma najmniejszą długość fali i największą częstotliwość oraz energię fotonów w całym widmie EM.',
    },
  ],
  examTasks: [
    {
      id: 'cke-10-pret-szyny',
      source: 'CKE Formuła 2023 • Indukcja elektromagnetyczna',
      title: 'Pręt poruszający się po szynach w polu magnetycznym',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      svgId: 'svg-10-pret-na-szynach',
      prompt:
        'Metalowy pręt o długości $l = 0{,}50\\text{ m}$ przesuwa się ze stałą prędkością $v = 4{,}0\\text{ m/s}$ po dwóch równoległych szynach połączonych opornikiem $R = 2{,}0\\,\\Omega$, w jednorodnym polu magnetycznym $B = 0{,}40\\text{ T}$ prostopadłym do płaszczyzny szyn. Oblicz wartość siły zewnętrznej potrzebnej do utrzymania stałej prędkości pręta (pomiń tarcie i opór szyn).',
      expectedValue: 0.08,
      tolerance: 0.005,
      unit: 'N',
      hint: 'Oblicz $\\mathcal{E} = Blv$, potem prąd $I = \\mathcal{E}/R$, a siła zewnętrzna musi zrównoważyć siłę elektrodynamiczną $F_{\\text{ed}} = BIl$.',
      solutionSteps: [
        'Wyindukowana SEM: $\\mathcal{E} = Blv = 0{,}40 \\cdot 0{,}50 \\cdot 4{,}0 = 0{,}80\\text{ V}$.',
        'Natężenie prądu w obwodzie: $I = \\frac{\\mathcal{E}}{R} = \\frac{0{,}80}{2{,}0} = 0{,}40\\text{ A}$.',
        'Siła elektrodynamiczna hamująca pręt (i równoważąca ją siła zewnętrzna): $F = BIl = 0{,}40 \\cdot 0{,}40 \\cdot 0{,}50 = 0{,}080\\text{ N}$.',
      ],
      ckeKey: [
        '1 pkt — obliczenie $\\mathcal{E} = Blv = 0{,}80\\text{ V}$.',
        '1 pkt — obliczenie prądu $I = 0{,}40\\text{ A}$.',
        '1 pkt — obliczenie siły $F = BIl = 0{,}080\\text{ N}$.',
      ],
    },
    {
      id: 'cke-10-spektrometr-mas',
      source: 'CKE Formuła 2015/2023 • Siła Lorentza',
      title: 'Rozdzielanie izotopów w polu magnetycznym (spektrometr mas)',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      svgId: 'svg-10-lorentz-okrag',
      prompt:
        'Jednokrotnie zjonizowany jon węgla $^{12}\\text{C}^+$ wpada z prędkością $v = 1{,}0\\cdot 10^5\\text{ m/s}$ prostopadle do jednorodnego pola magnetycznego o indukcji $B = 0{,}50\\text{ T}$. Przyjmij masę jonu $m = 12\\cdot 1{,}66\\cdot 10^{-27}\\text{ kg}$ oraz ładunek $q = 1{,}60\\cdot 10^{-19}\\text{ C}$. Oblicz promień okręgu $R$, po którym porusza się jon (w centymetrach).',
      expectedValue: 2.49,
      tolerance: 0.1,
      unit: 'cm',
      hint: 'Przyrównaj siłę Lorentza do siły dośrodkowej: $qvB = \\frac{mv^2}{R} \\Rightarrow R = \\frac{mv}{qB}$.',
      solutionSteps: [
        'Wzór na promień toru: $R = \\frac{mv}{qB}$.',
        '$R = \\frac{12 \\cdot 1{,}66\\cdot 10^{-27} \\cdot 1{,}0\\cdot 10^5}{1{,}60\\cdot 10^{-19} \\cdot 0{,}50} = \\frac{1{,}992\\cdot 10^{-21}}{8{,}0\\cdot 10^{-20}} = 0{,}0249\\text{ m} = 2{,}49\\text{ cm}$.',
      ],
      ckeKey: [
        '1 pkt — wyprowadzenie wzoru $R = mv/(qB)$.',
        '1 pkt — poprawne podstawienie masy jonu w $\\text{kg}$ i ładunku elementarnego.',
        '1 pkt — obliczenie $R \\approx 2{,}5\\text{ cm}$.',
      ],
    },
  ],
};
