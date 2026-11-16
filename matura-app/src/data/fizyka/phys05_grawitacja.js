export const phys05Grawitacja = {
  id: 'phys-05',
  displayNum: 5,
  code: 'DZIAŁ 5',
  title: 'Grawitacja i Astronomia',
  subtitle: 'Prawo powszechnego ciążenia, energia potencjalna, prędkości kosmiczne i prawa Keplera',
  duration: '7–8 h (Tydzień 8)',
  xp: 240,
  notes: [
    {
      id: 'pn5-1',
      title: 'Prawo powszechnego ciążenia i natężenie pola g(r)',
      badge: 'Pole centralne',
      intro:
        'Gdy oddalamy się od Ziemi na duże wysokości, przyspieszenie grawitacyjne $g$ przestaje być stałe ($9{,}81\\text{ m/s}^2$) i maleje jak $1/r^2$.',
      blocks: [
        {
          type: 'prose',
          heading: 'Siła Newtona i natężenie pola grawitacyjnego',
          paragraphs: [
            'Dwie masy $M$ i $m$ oddalone o $r$ (odległość między środkami!) przyciągają się siłą $F_g = G\\frac{Mm}{r^2}$, gdzie $G = 6{,}67\\cdot 10^{-11}\\,\\frac{\\text{N}\\cdot\\text{m}^2}{\\text{kg}^2}$.',
            'Natężenie pola grawitacyjnego: $g(r) = \\frac{F_g}{m} = G\\frac{M}{r^2}$. **Pułapka:** we wzorze jest $r = R_Z + h$ (odległość od środka planety, nie sama wysokość nad powierzchnią $h$!). Wewnątrz jednorodnej kuli ($r < R_Z$) natężenie rośnie liniowo od zera w środku do $g_0$ na powierzchni.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-05-natezenie-g-r',
          title: 'Rysunek 1. Zależność natężenia pola grawitacyjnego g(r) od odległości od środka Ziemi',
          caption: 'Wewnątrz jednorodnej kuli g ~ r, na zewnątrz g ~ 1/r².',
        },
      ],
    },
    {
      id: 'pn5-2',
      title: 'Energia potencjalna, prędkości kosmiczne i satelity',
      badge: 'Kluczowe wyprowadzenia CKE',
      intro:
        'Na maturze bardzo często trzeba wyprowadzić I lub II prędkość kosmiczną albo obliczyć energię potrzebną do zmiany orbity.',
      blocks: [
        {
          type: 'prose',
          heading: 'Ujemna energia potencjalna i orbity kołowe',
          paragraphs: [
            'Dla pola centralnego poziom zerowy energii potencjalnej przyjmujemy w nieskończoności ($E_p(\\infty) = 0$). Dlatego dla każdego skończonego $r$ energia potencjalna jest **ujemna**: $E_p(r) = -G\\frac{Mm}{r}$. Im dalej od planety, tym $E_p$ jest większa (mniej ujemna!).',
            '**I prędkość kosmiczna** (orbita kołowa na promieniu $r$): $G\\frac{Mm}{r^2} = m\\frac{v_I^2}{r} \\Rightarrow v_I = \\sqrt{\\frac{GM}{r}}$. Dla Ziemi przy powierzchni: $\\approx 7{,}9\\text{ km/s}$.',
            '**II prędkość kosmiczna** (prędkość ucieczki do $\\infty$): $\\frac{1}{2}mv_{II}^2 - G\\frac{Mm}{R} = 0 \\Rightarrow v_{II} = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2}\\,v_I \\approx 11{,}2\\text{ km/s}$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-05-studnia-potencjalu',
          title: 'Rysunek 2. Studnia potencjału grawitacyjnego E_p(r)',
          caption: 'Praca potrzebna na oddalenie satelity od r₁ do r₂ wynosi W = E_p(r₂) − E_p(r₁) > 0.',
        },
      ],
    },
    {
      id: 'pn5-3',
      title: 'Prawa Keplera',
      badge: 'Astronomia CKE',
      intro:
        'Prawa Keplera opisują ruch planet i satelitów po orbitach eliptycznych. II prawo to wprost zasada zachowania momentu pędu!',
      blocks: [
        {
          type: 'prose',
          heading: 'I, II i III prawo Keplera',
          paragraphs: [
            '**I prawo:** Każda planeta krąży wokół Słońca po elipsie, a Słońce znajduje się w jednym z jej ognisk.',
            '**II prawo (prawo równych pól):** Promień wodzący zakreśla w równych czasach równe pola. W praktyce w peryhelium ($r_{\\min}$) i aphelium ($r_{\\max}$) wektor prędkości jest prostopadły do promienia, więc z zachowania momentu pędu: $r_{\\min} v_{\\max} = r_{\\max} v_{\\min}$.',
            '**III prawo:** Stosunek kwadratu okresu obiegu do sześcianu wielkiej półosi orbity jest stały dla ciał krążących wokół tej samej masy centralnej $M$: $\\frac{T^2}{a^3} = \\frac{4\\pi^2}{GM} = \\text{const}$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-05-orbita-kepler',
          title: 'Rysunek 3. Orbita eliptyczna: peryhelium, aphelium i II prawo Keplera',
          caption: 'Bliżej Słońca (peryhelium) planeta porusza się szybciej niż w aphelium.',
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf5-1', front: 'Wzór na I prędkość kosmiczną na orbicie o promieniu $r$:', back: '$v_I = \\sqrt{\\frac{GM}{r}}$', category: 'wzor' },
    { id: 'pf5-2', front: 'Jaki jest stosunek II prędkości kosmicznej do I prędkości kosmicznej przy powierzchni planety?', back: '$v_{II} = \\sqrt{2}\\,v_I$', category: 'wzor' },
    { id: 'pf5-3', front: 'Ile wynosi całkowita energia mechaniczna satelity na orbicie kołowej o promieniu $r$?', back: '$E_c = E_k + E_p = \\frac{GMm}{2r} - \\frac{GMm}{r} = -\\frac{GMm}{2r}$ (jest ujemna!).', category: 'wzor' },
    { id: 'pf5-4', front: 'Jak porównać prędkość planety w peryhelium ($r_p$) i aphelium ($r_a$)?', back: '$r_p v_p = r_a v_a$ (z II prawa Keplera / zasady zachowania momentu pędu).', category: 'prawo' },
  ],
  quiz: [
    {
      id: 'pq5-1',
      q: 'Na jakiej wysokości $h$ nad powierzchnią Ziemi (o promieniu $R_Z$) natężenie pola grawitacyjnego jest $4$ razy mniejsze niż na powierzchni?',
      options: ['$h = R_Z$', '$h = 2R_Z$', '$h = 3R_Z$', '$h = 4R_Z$'],
      correct: 0,
      explanation: '$g(r) \\sim \\frac{1}{r^2}$. Aby $g$ zmalało $4$ razy, odległość od środka Ziemi $r = R_Z + h$ musi wzrosnąć $2$ razy ($r = 2R_Z$), czyli $h = R_Z$.',
      examTip: 'Klasyczna pułapka CKE: pytają o wysokość $h$ nad powierzchnią, a nie o promień $r$ od środka!',
    },
    {
      id: 'pq5-2',
      q: 'Planeta X ma masę $2$ razy większą od masy Ziemi i promień $2$ razy większy od promienia Ziemi. Ile wynosi II prędkość kosmiczna na planecie X w porównaniu do ziemskiej $v_{II,Z}$?',
      options: ['$v_{II,Z}$', '$\\sqrt{2}\\,v_{II,Z}$', '$2\\,v_{II,Z}$', '$\\frac{1}{2}\\,v_{II,Z}$'],
      correct: 0,
      explanation: '$v_{II} = \\sqrt{\\frac{2GM}{R}}$. Jeśli $M$ rośnie $2\\times$ i $R$ rośnie $2\\times$, ich iloraz $M/R$ się nie zmienia!',
    },
  ],
  examTasks: [
    {
      id: 'cke-05-satelita',
      source: 'CKE Formuła 2023 • Orbita geostacjonarna i III prawo Keplera',
      title: 'Wyznaczanie masy planety z ruchu jej księżyca',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszownikUrl: 'https://arkuszownik.pl',
      svgId: 'svg-05-orbita-kepler',
      prompt:
        'Księżyc krąży wokół planety po orbicie kołowej o promieniu $r = 2{,}0\\cdot 10^8\\text{ m}$ z okresem $T = 1{,}0\\cdot 10^5\\text{ s}$. Oblicz masę tej planety ($G = 6{,}67\\cdot 10^{-11}\\,\\frac{\\text{N}\\cdot\\text{m}^2}{\\text{kg}^2}$, $\\pi^2 \\approx 9{,}87$).',
      expectedValue: 4.73e24,
      tolerance: 0.2e24,
      unit: 'kg',
      hint: 'Przyrównaj siłę grawitacji do siły dośrodkowej: $G\\frac{Mm}{r^2} = m\\frac{4\\pi^2 r}{T^2}$, skąd $M = \\frac{4\\pi^2 r^3}{G T^2}$.',
      solutionSteps: [
        'Z warunku ruchu po okręgu: $G\\frac{Mm}{r^2} = m\\omega^2 r = m\\frac{4\\pi^2}{T^2}r$.',
        'Wyznaczamy masę planety: $M = \\frac{4\\pi^2 r^3}{G T^2}$.',
        'Podstawiamy dane: $M = \\frac{4 \\cdot 9{,}87 \\cdot (2{,}0\\cdot 10^8)^3}{6{,}67\\cdot 10^{-11} \\cdot (1{,}0\\cdot 10^5)^2} = \\frac{39{,}48 \\cdot 8\\cdot 10^{24}}{6{,}67\\cdot 10^{-1}} \\approx 4{,}73\\cdot 10^{24}\\text{ kg}$.',
      ],
      ckeKey: [
        '1 pkt — przyrównanie siły grawitacji do siły dośrodkowej z użyciem okresu $T$.',
        '1 pkt — poprawne wyprowadzenie wzoru $M = \\frac{4\\pi^2 r^3}{G T^2}$.',
        '1 pkt — poprawne obliczenie wyniku w $\\text{kg}$.',
      ],
    },
  ],
};
