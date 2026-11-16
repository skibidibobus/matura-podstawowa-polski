export const phys11Optyka = {
  id: 'phys-11',
  displayNum: 11,
  code: 'DZIAŁ 11',
  title: 'Optyka Geometryczna i Falowa',
  subtitle: 'Prawo Snella, całkowite wewnętrzne odbicie, soczewki cienkie, interferencja i siatka dyfrakcyjna',
  duration: '7–8 h (Tydzień 18)',
  xp: 240,
  notes: [
    {
      id: 'pn11-1',
      title: 'Odbicie, załamanie (prawo Snella) i całkowite wewnętrzne odbicie',
      badge: 'Optyka geometryczna',
      intro:
        'Uwaga na definicję kątów w optyce: kąt padania $\\alpha$ i załamania $\\beta$ mierzymy ZAWSZE względem **normalnej** (prostopadłej do granicy ośrodków), nigdy względem samej powierzchni!',
      blocks: [
        {
          type: 'prose',
          heading: 'Prawo Snella i kąt graniczny',
          paragraphs: [
            'Współczynnik załamania ośrodka $n = \\frac{c}{v}$ mówi, ile razy światło zwalnia w ośrodku względem próżni. Częstotliwość $f$ przy przejściu do innego ośrodka **nie zmienia się**, zmienia się prędkość $v$ i długość fali $\\lambda = \\lambda_0 / n$.',
            '**Prawo Snella:** $n_1 \\sin\\alpha = n_2 \\sin\\beta$. Jeśli światło przechodzi z ośrodka optycznie gęstszego ($n_1 > n_2$, np. szkło $\\to$ powietrze), może zajść **całkowite wewnętrzne odbicie** (brak promienia załamanego!) dla kątów $\\alpha \\ge \\alpha_{\\text{gr}}$, gdzie $\\sin\\alpha_{\\text{gr}} = \\frac{n_2}{n_1}$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-11-snell-cio',
          title: 'Rysunek 1. Załamanie światła i całkowite wewnętrzne odbicie',
          caption: 'Dla kąta granicznego α_gr promień załamany ślizga się wzdłuż granicy ośrodków (β = 90°).',
        },
      ],
    },
    {
      id: 'pn11-2',
      title: 'Soczewki cienkie i konstrukcje obrazów',
      badge: 'Równanie soczewki',
      intro:
        'Najwięcej błędów w soczewkach bierze się ze znaków przy $f$ i $y$. Zapamiętaj prostą tabelę konwencji znaków!',
      blocks: [
        {
          type: 'prose',
          heading: 'Równanie soczewki i powiększenie',
          paragraphs: [
            'Równanie soczewki cienkiej: $\\frac{1}{f} = \\frac{1}{x} + \\frac{1}{y}$, gdzie $x$ to odległość przedmiotu, $y$ — obrazu, a zdolność skupiająca $Z = \\frac{1}{f}\\,[\\text{D}]$. Powiększenie liniowe: $p = \\frac{|y|}{x} = \\frac{h_{\\text{obr}}}{h_{\\text{przed}}}$.',
            '**Konwencja znaków:** dla soczewki skupiającej $f > 0$, dla rozpraszającej $f < 0$. Dla obrazu **rzeczywistego** (po przeciwnej stronie soczewki, odwróconego, można rzucić na ekran) $y > 0$. Dla obrazu **pozornego** (po tej samej stronie co przedmiot, prostego) $y < 0$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-11-soczewka-konstrukcje',
          title: 'Rysunek 2. Konstrukcja obrazu w soczewce skupiającej',
          caption: 'Promień równoległy do osi przechodzi przez ognisko F; promień przez środek soczewki biegnie bez załamania.',
        },
      ],
    },
    {
      id: 'pn11-3',
      title: 'Optyka falowa: siatka dyfrakcyjna i interferencja',
      badge: 'Pewniak maturalny CKE',
      intro:
        'Siatka dyfrakcyjna pojawia się w arkuszach CKE niezwykle często — wzór $d\\sin\\alpha_n = n\\lambda$ warto umieć zastosować od ręki.',
      blocks: [
        {
          type: 'prose',
          heading: 'Siatka dyfrakcyjna i maksymalny rząd widma',
          paragraphs: [
            'Stała siatki $d = \\frac{1\\text{ mm}}{N}$ to odległość między sąsiednimi rysami (np. $500\\text{ rys/mm} \\Rightarrow d = 2\\cdot 10^{-6}\\text{ m}$). Kierunki wzmocnień (prążków jasnych) spełniają równanie: $d\\sin\\alpha_n = n\\lambda$ ($n = 0, 1, 2, \\dots$).',
            '**Maksymalny rząd widma:** ponieważ $\\sin\\alpha_n < 1$, to $n_{\\max} < \\frac{d}{\\lambda}$ (bierzemy część całkowitą w dół!). Całkowita liczba prążków na ekranie to $2n_{\\max} + 1$ (bo prążki są po obu stronach prążka zerowego $n=0$).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-11-siatka-dyfrakcyjna',
          title: 'Rysunek 3. Ugięcie światła na siatce dyfrakcyjnej',
          caption: 'Światło czerwone (większe λ) ugina się pod większym kątem niż światło fioletowe.',
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf11-1', front: 'Warunek całkowitego wewnętrznego odbicia:', back: 'Światło musi biec z ośrodka o większym $n_1$ do mniejszego $n_2$ pod kątem $\\alpha \\ge \\alpha_{\\text{gr}}$, gdzie $\\sin\\alpha_{\\text{gr}} = \\frac{n_2}{n_1}$.', category: 'prawo' },
    { id: 'pf11-2', front: 'Kiedy w równaniu soczewki $\\frac{1}{f} = \\frac{1}{x} + \\frac{1}{y}$ wstawiamy $y < 0$?', back: 'Gdy obraz jest POZORNY (powstaje po tej samej stronie soczewki co przedmiot, jest prosty).', category: 'wzor' },
    { id: 'pf11-3', front: 'Jak obliczyć maksymalny rząd prążka $n_{\\max}$ dla siatki dyfrakcyjnej o stałej $d$?', back: 'Z warunku $\\sin\\alpha_n < 1 \\Rightarrow n_{\\max} = \\lfloor d / \\lambda \\rfloor$.', category: 'wzor' },
    { id: 'pf11-4', front: 'Która barwa światła widzialnego ugina się na siatce dyfrakcyjnej pod NAJWIĘKSZYM kątem, a która na pryzmacie?', back: 'Na siatce: czerwone (największe $\\lambda$). Na pryzmacie: fioletowe (największy współczynnik załamania $n$).', category: 'zjawisko' },
  ],
  quiz: [
    {
      id: 'pq11-1',
      q: 'Przedmiot ustawiono w odległości $x = 30\\text{ cm}$ od soczewki skupiającej o ogniskowej $f = 10\\text{ cm}$. Obraz powstanie w odległości $y$ równej:',
      options: ['$15\\text{ cm}$ (rzeczywisty)', '$15\\text{ cm}$ (pozorny)', '$7{,}5\\text{ cm}$ (rzeczywisty)', '$20\\text{ cm}$ (rzeczywisty)'],
      correct: 0,
      explanation: '$\\frac{1}{y} = \\frac{1}{10} - \\frac{1}{30} = \\frac{2}{30} = \\frac{1}{15} \\Rightarrow y = +15\\text{ cm} > 0$ (obraz rzeczywisty).',
    },
    {
      id: 'pq11-2',
      q: 'Na siatkę dyfrakcyjną o stałej $d = 2{,}0\\,\\mu\\text{m}$ pada prostopadle światło o długości fali $\\lambda = 500\\text{ nm}$. Ile prążków rzędu $n \\ge 1$ powstanie po JEDNEJ stronie prążka zerowego (kąt ugięcia $< 90^\\circ$)?',
      options: ['$2$', '$3$', '$4$', '$5$'],
      correct: 1,
      explanation: '$d/\\lambda = \\frac{2{,}0\\cdot 10^{-6}}{0{,}5\\cdot 10^{-6}} = 4$. Ponieważ dla $n=4$ mamy $\\sin\\alpha_4 = 1$ ($\\alpha = 90^\\circ$, wiązka biegnie wzdłuż siatki, nie trafia na ekran), widać rzędy $n = 1, 2, 3$ (czyli $3$ prążki).',
      examTip: 'Uwaga na przypadek brzegowy $\\sin\\alpha = 1$: taki prążek nie trafia na ekran!',
    },
  ],
  examTasks: [
    {
      id: 'cke-11-siatka',
      source: 'CKE Formuła 2023 • Optyka falowa',
      title: 'Wyznaczanie długości fali lasera za pomocą siatki dyfrakcyjnej',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      svgId: 'svg-11-siatka-dyfrakcyjna',
      prompt:
        'Światło lasera pada prostopadle na siatkę dyfrakcyjną mającą $500\\text{ rys}$ na $1\\text{ mm}$. Na ekranie odległym o $L = 2{,}0\\text{ m}$ prążek pierwszego rzędu ($n = 1$) zaobserwowano w odległości $y = 0{,}66\\text{ m}$ od prążka zerowego (użyj przybliżenia $\\sin\\alpha \\approx \\operatorname{tg}\\alpha$ lub dokładnej funkcji z Pitagorasa: $\\sin\\alpha = \\frac{y}{\\sqrt{L^2 + y^2}}$). Oblicz długość fali $\\lambda$ tego lasera w nanometrach.',
      expectedValue: 627,
      tolerance: 35,
      unit: 'nm',
      hint: 'Stała siatki $d = \\frac{10^{-3}\\text{ m}}{500} = 2{,}0\\cdot 10^{-6}\\text{ m}$. Dokładny sinus: $\\sin\\alpha = \\frac{0{,}66}{\\sqrt{2{,}0^2 + 0{,}66^2}} \\approx 0{,}313$.',
      solutionSteps: [
        'Stała siatki: $d = \\frac{1\\text{ mm}}{500} = 2{,}0\\cdot 10^{-6}\\text{ m}$.',
        'Dokładna wartość $\\sin\\alpha_1 = \\frac{0{,}66}{\\sqrt{4{,}0 + 0{,}4356}} = \\frac{0{,}66}{2{,}106} \\approx 0{,}3134$.',
        'Z równania siatki ($n=1$): $\\lambda = d\\sin\\alpha_1 = 2{,}0\\cdot 10^{-6} \\cdot 0{,}3134 \\approx 6{,}27\\cdot 10^{-7}\\text{ m} = 627\\text{ nm}$.',
      ],
      ckeKey: [
        '1 pkt — poprawne obliczenie stałej siatki $d = 2{,}0\\cdot 10^{-6}\\text{ m}$.',
        '1 pkt — wyznaczenie $\\sin\\alpha_1$ z geometrii układu (Pitagoras, bo kąt jest dość duży!).',
        '1 pkt — obliczenie $\\lambda \\approx 627\\text{ nm}$.',
      ],
    },
    {
      id: 'cke-11-soczewka-lupa',
      source: 'CKE Formuła 2023 • Soczewki cienkie',
      title: 'Obraz pozorny i powiększony w lupie',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      svgId: 'svg-11-soczewka-konstrukcje',
      prompt:
        'Soczewka skupiająca o zdolności skupiającej $Z = +10\\text{ D}$ daje obraz pozorny, prosty i $3$-krotnie powiększony ($p = 3$). Oblicz odległość $x$ przedmiotu od soczewki (w centymetrach).',
      expectedValue: 6.67,
      tolerance: 0.2,
      unit: 'cm',
      hint: 'Ogniskowa $f = 1/Z = 0{,}10\\text{ m} = 10\\text{ cm}$. Dla obrazu pozornego $y < 0$, więc $y = -3x$. Podstaw do $\\frac{1}{f} = \\frac{1}{x} + \\frac{1}{y}$.',
      solutionSteps: [
        'Ogniskowa: $f = \\frac{1}{10\\text{ D}} = 0{,}10\\text{ m} = 10\\text{ cm}$.',
        'Powiększenie $p = \\frac{|y|}{x} = 3$, a obraz jest pozorny ($y < 0$), więc $y = -3x$.',
        '$\\frac{1}{10} = \\frac{1}{x} - \\frac{1}{3x} = \\frac{2}{3x} \\Rightarrow 3x = 20 \\Rightarrow x \\approx 6{,}67\\text{ cm}$.',
      ],
      ckeKey: [
        '1 pkt — wyznaczenie ogniskowej $f = 10\\text{ cm}$.',
        '1 pkt — użycie znaku minus dla obrazu pozornego ($y = -3x$).',
        '1 pkt — obliczenie $x \\approx 6{,}7\\text{ cm}$.',
      ],
    },
  ],
};
