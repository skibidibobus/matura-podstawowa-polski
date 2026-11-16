export const phys09PradStaly = {
  id: 'phys-09',
  displayNum: 9,
  code: 'DZIAŁ 9',
  title: 'Prąd Stały',
  subtitle: 'Prawo Ohma, moc i prawo Joule’a-Lenza, prawa Kirchhoffa, SEM i pomiary elektryczne',
  duration: '12–14 h (Tygodnie 14–15)',
  xp: 260,
  notes: [
    {
      id: 'pn9-1',
      title: 'Natężenie, opór właściwy i prawo Ohma',
      badge: 'Podstawy obwodów',
      intro:
        'Uwaga na wykres $I(U)$: dla opornika metalowego w stałej temperaturze jest to linia prosta, ale dla żarówki opór rośnie ze wzrostem temperatury włókna!',
      blocks: [
        {
          type: 'prose',
          heading: 'Prawo Ohma i zależność oporu od temperatury',
          paragraphs: [
            'Natężenie prądu: $I = \\frac{\\Delta q}{\\Delta t}\\,[\\text{A}]$. Opór przewodnika: $R = \\rho\\frac{l}{S}\\,[\\Omega]$, gdzie $\\rho$ to opór właściwy.',
            'Prawo Ohma: $I = \\frac{U}{R}$ (dla odcinka o stałym $R$). W metalach wraz ze wzrostem temperatury opór rośnie (drgania sieci utrudniają ruch elektronów), natomiast w półprzewodnikach (termistor NTC) opór **maleje** wraz ze wzrostem temperatury.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-09-charakterystyka-iu',
          title: 'Rysunek 1. Charakterystyka I(U) opornika liniowego i żarówki',
          caption: 'Dla żarówki wraz ze wzrostem napięcia rośnie temperatura włókna i opór R = U/I, więc wykres I(U) zakrzywia się w dół.',
        },
      ],
    },
    {
      id: 'pn9-2',
      title: 'Praca, moc prądu i łączenie elementów',
      badge: 'Moc i prawa Kirchhoffa',
      intro:
        'W obwodach z kilkoma opornikami pamiętaj: w połączeniu szeregowym prąd $I$ jest taki sam; w równoległym napięcie $U$ jest takie samo!',
      blocks: [
        {
          type: 'prose',
          heading: 'Moc prądu i prawa Kirchhoffa',
          paragraphs: [
            'Moc prądu elektrycznego: $P = U I = I^2 R = \\frac{U^2}{R}\\,[\\text{W}]$. Ciepło wydzielone na oporniku (prawo Joule’a-Lenza): $Q = I^2 R t$.',
            'Łączenie oporników: szeregowo $R_z = R_1 + R_2$, równolegle $\\frac{1}{R_z} = \\frac{1}{R_1} + \\frac{1}{R_2}$. Uwaga na **kondensatory w obwodzie prądu stałego**: po naładowaniu przez gałąź z kondensatorem prąd NIE płynie ($I = 0$), a napięcie na kondensatorze równa się napięciu między punktami, do których jest podłączony!',
            '**I prawo Kirchhoffa:** $\\sum I_{\\text{wpł}} = \\sum I_{\\text{wypł}}$ (zachowanie ładunku). **II prawo Kirchhoffa:** w zamkniętym oczku algebraiczna suma SEM równa się sumie spadków napięć: $\\sum \\mathcal{E}_i = \\sum I_k R_k$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-09-kirchhoff-petla',
          title: 'Rysunek 2. Obwód z oczkiem i strzałkowaniem prądów',
          caption: 'Przy przejściu przez oczko spadki napięć zgodne z kierunkiem obiegu bierzemy z plusem.',
        },
      ],
    },
    {
      id: 'pn9-3',
      title: 'SEM źródła, opór wewnętrzny i mierniki',
      badge: 'Wykres U(I) źródła',
      intro:
        'Rzeczywista bateria ma własny opór wewnętrzny $r$, przez który napięcie na zaciskach spada podczas poboru prądu.',
      blocks: [
        {
          type: 'prose',
          heading: 'Równanie ogniwa i pomiary',
          paragraphs: [
            'Natężenie prądu w obwodzie z jednym źródłem: $I = \\frac{\\mathcal{E}}{R + r}$. Napięcie na zaciskach źródła: $U = \\mathcal{E} - I r$.',
            'Na wykresie $U(I)$: punkt przecięcia z osią $U$ (dla $I = 0$) to **SEM $\\mathcal{E}$**, a wartość bezwzględna współczynnika kierunkowego to **opór wewnętrzny $r$**!',
            '**Mierniki:** Amperomierz wpinamy **szeregowo** (idealny ma $R_A = 0$). Woltomierz wpinamy **równolegle** (idealny ma $R_V = \\infty$).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-09-sem-wykres',
          title: 'Rysunek 3. Charakterystyka U(I) rzeczywistego ogniwa',
          caption: 'Dla I = 0 odczytujemy U = SEM; dla U = 0 mamy prąd zwarcia I_zw = SEM / r.',
        },
        {
          type: 'diagram',
          svgId: 'svg-09-mierniki',
          title: 'Rysunek 4. Dwa układy pomiaru oporu R metodą techniczną',
          caption: 'W układzie (a) woltomierz mierzy dokładnie U na oporniku; w (b) amperomierz mierzy dokładnie I płynący przez opornik.',
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf9-1', front: 'Jak odczytać $\\mathcal{E}$ oraz $r$ z wykresu $U(I)$ ogniwa?', back: 'Przecięcie z osią pionową ($I=0$) daje $\\mathcal{E}$; nachylenie prostej ($|\\Delta U / \\Delta I|$) daje $r$.', category: 'wykres' },
    { id: 'pf9-2', front: 'Kiedy na odbiorniku $R$ zasilanym ze źródła o oporze wewnętrznym $r$ wydziela się maksymalna moc?', back: 'Gdy $R = r$ (dopasowanie oporowe).', category: 'prawo' },
    { id: 'pf9-3', front: 'Jak wpinamy amperomierz, a jak woltomierz? Jakie mają idealne opory?', back: 'Amperomierz: szeregowo ($R_A \\to 0$). Woltomierz: równolegle ($R_V \\to \\infty$).', category: 'doswiadczenie' },
    { id: 'pf9-4', front: 'Co się dzieje w gałęzi z kondensatorem w obwodzie prądu stałego po ustaleniu się stanu?', back: 'Prąd w tej gałęzi nie płynie ($I = 0$), gałąź traktujemy jak przerwę w obwodzie.', category: 'zjawisko' },
  ],
  quiz: [
    {
      id: 'pq9-1',
      q: 'Dwie żarówki o mocach znamionowych $P_1 = 40\\text{ W}$ i $P_2 = 100\\text{ W}$ (obie na $230\\text{ V}$) połączono **szeregowo** i podłączono do $230\\text{ V}$. Która żarówka będzie świecić jaśniej?',
      options: ['$100\\text{ W}$', '$40\\text{ W}$', 'Obie jednakowo', 'Żadna nie zaświeci'],
      correct: 1,
      explanation: 'Żarówka $40\\text{ W}$ ma większy opór ($R = U^2/P$). W połączeniu szeregowym płynie przez obie ten sam prąd $I$, więc moc wydzielana $P = I^2 R$ jest większa na żarówce o większym oporze ($40\\text{ W}$)!',
      examTip: 'Klasyczna pułapka CKE! Równolegle jaśniej świeci $100\\text{ W}$, ale szeregowo — $40\\text{ W}$!',
    },
    {
      id: 'pq9-2',
      q: 'Bateria o $\\mathcal{E} = 4{,}5\\text{ V}$ przy poborze prądu $I = 1{,}0\\text{ A}$ daje na zaciskach napięcie $U = 4{,}0\\text{ V}$. Opór wewnętrzny baterii wynosi:',
      options: ['$0{,}5\\,\\Omega$', '$4{,}0\\,\\Omega$', '$4{,}5\\,\\Omega$', '$0{,}25\\,\\Omega$'],
      correct: 0,
      explanation: '$U = \\mathcal{E} - Ir \\Rightarrow r = \\frac{\\mathcal{E} - U}{I} = \\frac{4{,}5 - 4{,}0}{1{,}0} = 0{,}5\\,\\Omega$.',
    },
  ],
  examTasks: [
    {
      id: 'cke-09-sem-obwod',
      source: 'CKE Formuła 2023 • Obwód prądu stałego z przełącznikiem',
      title: 'Wyznaczanie SEM i oporu wewnętrznego z dwóch pomiarów',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszownikUrl: 'https://arkuszownik.pl',
      svgId: 'svg-09-sem-wykres',
      prompt:
        'Do źródła o sile elektromotorycznej $\\mathcal{E}$ i oporze wewnętrznym $r$ podłączono opornik $R_1 = 5{,}0\\,\\Omega$, mierząc natężenie prądu $I_1 = 1{,}0\\text{ A}$. Po zastąpieniu go opornikiem $R_2 = 11{,}0\\,\\Omega$ natężenie zmalało do $I_2 = 0{,}50\\text{ A}$. Oblicz $\\mathcal{E}$ źródła.',
      expectedValue: 6.0,
      tolerance: 0.1,
      unit: 'V',
      hint: 'Zapisz dwa równania: $\\mathcal{E} = I_1(R_1 + r)$ oraz $\\mathcal{E} = I_2(R_2 + r)$ i rozwiąż układ równań.',
      solutionSteps: [
        'Równanie 1: $\\mathcal{E} = 1{,}0\\cdot(5{,}0 + r)$. Równanie 2: $\\mathcal{E} = 0{,}50\\cdot(11{,}0 + r)$.',
        'Przyrównujemy prawe strony: $5{,}0 + r = 5{,}5 + 0{,}5r \\Rightarrow 0{,}5r = 0{,}5 \\Rightarrow r = 1{,}0\\,\\Omega$.',
        'Podstawiamy $r$: $\\mathcal{E} = 1{,}0 \\cdot (5{,}0 + 1{,}0) = 6{,}0\\text{ V}$.',
      ],
      ckeKey: [
        '1 pkt — zapisanie układu dwóch równań prawa Ohma dla pełnego obwodu.',
        '1 pkt — poprawne obliczenie oporu wewnętrznego $r = 1{,}0\\,\\Omega$.',
        '1 pkt — obliczenie $\\mathcal{E} = 6{,}0\\text{ V}$.',
      ],
    },
  ],
};
