export const phys04BrylaSztywna = {
  id: 'phys-04',
  displayNum: 4,
  code: 'DZIAŁ 4',
  title: 'Bryła Sztywna i Statyka',
  subtitle: 'Moment siły, równowaga statyczna, moment bezwładności, toczenie bez poślizgu i moment pędu',
  duration: '7–8 h (Tydzień 7)',
  xp: 240,
  notes: [
    {
      id: 'pn4-1',
      title: 'Moment siły i dwa warunki równowagi statycznej',
      badge: 'Statyka CKE',
      intro:
        'Gdy ciało nie jest punktem materialnym (belka, drabina, dźwignia), oprócz przesunięcia może się obrócić. O obrocie decyduje moment siły.',
      blocks: [
        {
          type: 'prose',
          heading: 'Moment siły i ramię siły',
          paragraphs: [
            'Wartość momentu siły względem wybranej osi obrotu wynosi: $M = r F \\sin\\alpha = F \\cdot d$, gdzie $d = r\\sin\\alpha$ to **ramię siły** (najkrótsza, prostopadła odległość od osi obrotu do linii działania siły). Jednostka: $\\text{N}\\cdot\\text{m}$.',
            '**Dwa warunki równowagi bryły sztywnej:** (1) Wypadkowa sił wynosi zero: $\\sum \\vec{F} = \\vec{0}$ (brak ruchu postępowego) oraz (2) Wypadkowy moment sił względem dowolnej osi wynosi zero: $\\sum M_{\\text{zgodnie}} = \\sum M_{\\text{przeciwnie}}$ (brak obrotu).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-04-ramie-sily',
          title: 'Rysunek 1. Ramię siły d = r·sin α względem osi obrotu O',
          caption: 'Oś obrotu najlepiej wybierać w punkcie przyłożenia nieznanej siły (np. na zawiasie), wtedy jej moment znika (d = 0)!',
        },
        {
          type: 'diagram',
          svgId: 'svg-04-belka-rownowaga',
          title: 'Rysunek 2. Równowaga belki na dwóch podporach',
          caption: 'Ciężar jednorodnej belki przyłożony jest dokładnie w jej środku geometrycznym.',
        },
      ],
    },
    {
      id: 'pn4-2',
      title: 'Moment bezwładności i II zasada dynamiki dla ruchu obrotowego',
      badge: 'Dynamika obrotu',
      intro:
        'W ruchu obrotowym odpowiednikiem masy $m$ jest moment bezwładności $I$, odpowiednikiem siły $F$ — moment siły $M$, a przyspieszenia $a$ — przyspieszenie kątowe $\\varepsilon$.',
      blocks: [
        {
          type: 'prose',
          heading: 'Analogia ruch postępowy ↔ obrotowy',
          paragraphs: [
            'Dla bryły obracającej się wokół stałej osi: $M_w = I\\varepsilon$, gdzie $\\varepsilon = \\frac{\\Delta\\omega}{\\Delta t}\\,[\\text{rad/s}^2]$. Jeśli nić odwija się z krążka o promieniu $R$ bez poślizgu, to przyspieszenie styczne brzegu krążka spełnia warunek $a = \\varepsilon R$.',
            '**Twierdzenie Steinera:** gdy oś obrotu jest przesunięta o odległość $d$ równolegle do osi przechodzącej przez środek masy, moment bezwładności rośnie: $I = I_0 + m d^2$. Wzory na $I_0$ (walec $\\frac{1}{2}mR^2$, kula $\\frac{2}{5}mR^2$, obręcz $mR^2$, pręt $\\frac{1}{12}ml^2$) znajdują się w Karcie Wzorów CKE.',
          ],
        },
      ],
    },
    {
      id: 'pn4-3',
      title: 'Energia toczenia bez poślizgu i moment pędu',
      badge: 'Zasady zachowania w obrocie',
      intro:
        'Kula, walec i obręcz staczają się z równi różnie szybko — wygrywa ta bryła, która ma najmniejszy ułamek w momencie bezwładności!',
      blocks: [
        {
          type: 'prose',
          heading: 'Toczenie bez poślizgu i zachowanie momentu pędu',
          paragraphs: [
            'Całkowita energia kinetyczna toczącej się bryły to suma energii ruchu postępowego środka masy i obrotowego wokół środka masy: $E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$. Przy braku poślizgu zachodzi $v = \\omega R$.',
            'W toczeniu bez poślizgu **siła tarcia statycznego nie wykonuje pracy** (punkt styku z podłożem chwilowo spoczywa!), więc energia mechaniczna jest zachowana.',
            '**Moment pędu:** $L = I\\omega$ (dla punktu: $L = mvr\\sin\\alpha$). Gdy wypadkowy moment sił zewnętrznych wynosi zero ($M_w = 0$), moment pędu jest zachowany: $I_1\\omega_1 = I_2\\omega_2$ (np. łyżwiarz przyciągający ręce zmniejsza $I$, więc jego $\\omega$ rośnie!).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-04-staczanie-rownia',
          title: 'Rysunek 3. Toczenie bez poślizgu z równi pochyłej',
          caption: 'Na równi działa tarcie statyczne T_s, które wprawia bryłę w obrót, ale nie zabiera energii mechanicznej.',
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf4-1', front: 'Dwa warunki równowagi statycznej bryły sztywnej:', back: '1) $\\sum \\vec{F} = \\vec{0}$, 2) $\\sum \\vec{M} = \\vec{0}$ względem dowolnie wybranej osi.', category: 'prawo' },
    { id: 'pf4-2', front: 'Twierdzenie Steinera (o osiach równoległych):', back: '$I = I_0 + md^2$, gdzie $I_0$ to moment bezwładności względem osi przechodzącej przez środek masy.', category: 'wzor' },
    { id: 'pf4-3', front: 'Która bryła dotoczy się pierwsza z równi (bez poślizgu): kula pełna ($\\frac{2}{5}mR^2$), walec ($\\frac{1}{2}mR^2$) czy obręcz ($mR^2$)?', back: 'Kula pełna — ma najmniejszy współczynnik przy $mR^2$, więc najmniej energii idzie w obrót, a najwięcej w prędkość postępową $v$.', category: 'zjawisko' },
    { id: 'pf4-4', front: 'Jak zmienia się energia kinetyczna łyżwiarza, gdy przyciąga ręce do tułowia podczas piruetu?', back: 'Moment pędu $L = I\\omega$ jest stały, więc przy spadku $I$ rośnie $\\omega$, a energia kinetyczna $E_k = \\frac{L^2}{2I}$ ROŚNIE (kosztem pracy mięśni łyżwiarza).', category: 'zjawisko' },
  ],
  quiz: [
    {
      id: 'pq4-1',
      q: 'Jednorodna belka o długości $L = 4\\text{ m}$ i masie $m = 20\\text{ kg}$ spoczywa poziomo na dwóch podporach umieszczonych na jej końcach. Jaka siła nacisku działa na każdą z podpór, jeśli na belce w odległości $1\\text{ m}$ od lewego końca położono ciężarek o masie $10\\text{ kg}$ ($g = 10\\text{ m/s}^2$)?',
      options: ['$125\\text{ N}$ i $175\\text{ N}$', '$150\\text{ N}$ i $150\\text{ N}$', '$100\\text{ N}$ i $200\\text{ N}$', '$175\\text{ N}$ i $125\\text{ N}$'],
      correct: 3,
      explanation: 'Moment sił względem lewej podpory: $200\\text{ N}\\cdot 2\\text{ m} + 100\\text{ N}\\cdot 1\\text{ m} = R_P \\cdot 4\\text{ m} \\Rightarrow R_P = 125\\text{ N}$. Zatem $R_L = 300 - 125 = 175\\text{ N}$.',
    },
    {
      id: 'pq4-2',
      q: 'Walec o masie $m$ i promieniu $R$ ($I = \\frac{1}{2}mR^2$) stacza się bez poślizgu z wysokości $h$. Jaka część jego początkowej energii potencjalnej zamieniła się w energię kinetyczną ruchu obrotowego?',
      options: ['$1/2$', '$1/3$', '$2/3$', '$1/4$'],
      correct: 1,
      explanation: '$E_{\\text{post}} = \\frac{1}{2}mv^2$, $E_{\\text{obr}} = \\frac{1}{2}(\\frac{1}{2}mR^2)(\\frac{v}{R})^2 = \\frac{1}{4}mv^2$. Stosunek $E_{\\text{obr}} / (E_{\\text{post}} + E_{\\text{obr}}) = \\frac{1/4}{3/4} = 1/3$.',
    },
  ],
  examTasks: [
    {
      id: 'cke-04-staczanie',
      source: 'CKE Formuła 2023 • Staczanie bez poślizgu',
      title: 'Prędkość walca staczającego się z równi pochyłej',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszownikUrl: 'https://arkuszownik.pl',
      svgId: 'svg-04-staczanie-rownia',
      prompt:
        'Jednorodny walec ($I = \\frac{1}{2}mR^2$) stacza się bez poślizgu ze spoczynku z równi pochyłej o wysokości $h = 1{,}5\\text{ m}$ ($g = 10\\text{ m/s}^2$). Oblicz prędkość liniową środka masy walca u podnóża równi.',
      expectedValue: 4.47,
      tolerance: 0.1,
      unit: 'm/s',
      hint: 'Zapisz zasadę zachowania energii: $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$, podstaw $I = \\frac{1}{2}mR^2$ oraz $\\omega = v/R$.',
      solutionSteps: [
        'Bilans energii: $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}\\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{3}{4}mv^2$.',
        'Masa $m$ i promień $R$ skracają się: $gh = \\frac{3}{4}v^2 \\Rightarrow v = \\sqrt{\\frac{4}{3}gh}$.',
        'Podstawiamy liczby: $v = \\sqrt{\\frac{4}{3} \\cdot 10 \\cdot 1{,}5} = \\sqrt{20} \\approx 4{,}47\\text{ m/s}$.',
      ],
      ckeKey: [
        '1 pkt — uwzględnienie obu składników energii kinetycznej (postępowej i obrotowej).',
        '1 pkt — użycie warunku braku poślizgu $\\omega = v/R$ i podstawienie $I = \\frac{1}{2}mR^2$.',
        '1 pkt — poprawny wynik $v \\approx 4{,}5\\text{ m/s}$.',
      ],
    },
  ],
};
