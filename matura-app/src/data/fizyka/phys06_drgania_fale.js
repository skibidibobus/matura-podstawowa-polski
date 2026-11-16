export const phys06DrganiaFale = {
  id: 'phys-06',
  displayNum: 6,
  code: 'DZIAŁ 6',
  title: 'Drgania i Fale Mechaniczne z Akustyką',
  subtitle: 'Ruch harmoniczny prosty, wahadła, rezonans, interferencja, fale stojące i efekt Dopplera',
  duration: '12–14 h (Tygodnie 9–10)',
  xp: 260,
  notes: [
    {
      id: 'pn6-1',
      title: 'Kinematyka i dynamika ruchu harmonicznego',
      badge: 'Oscylator harmoniczny',
      intro:
        'Ruch harmoniczny powstaje wtedy, gdy siła wypadkowa jest proporcjonalna do wychylenia z położenia równowagi i skierowana zawsze w stronę tego położenia: $F = -kx$.',
      blocks: [
        {
          type: 'prose',
          heading: 'Równania $x(t), v(t), a(t)$ i zależności fazowe',
          paragraphs: [
            'Położenie w ruchu harmonicznym prostym opisuje funkcja: $x(t) = A\\sin(\\omega t + \\varphi_0)$ (lub z $\\cos$), gdzie $A$ to amplituda, a $\\omega = \\frac{2\\pi}{T} = 2\\pi f$ to częstość kołowa.',
            'Prędkość osiąga maksimum $v_{\\max} = \\omega A$ w położeniu równowagi ($x = 0$), a znika w punktach zwrotnych ($x = \\pm A$). Przyspieszenie spełnia równanie $a(t) = -\\omega^2 x(t)$, więc jest największe na końcach toru: $a_{\\max} = \\omega^2 A$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-06-oscylator-wykresy',
          title: 'Rysunek 1. Wykresy x(t), v(t) i a(t) w ruchu harmonicznym',
          caption: 'Prędkość wyprzedza wychylenie w fazie o π/2, a przyspieszenie jest w przeciwfazie do wychylenia (a = −ω²x).',
        },
      ],
    },
    {
      id: 'pn6-2',
      title: 'Wahadła, energia drgań i rezonans',
      badge: 'Wahadło i energia',
      intro:
        'Okres drgań wahadła matematycznego nie zależy od masy ciężarka, a okres wahadła sprężynowego nie zależy od przyspieszenia grawitacyjnego $g$!',
      blocks: [
        {
          type: 'prose',
          heading: 'Okresy wahadeł i bilans energii',
          paragraphs: [
            'Wahadło sprężynowe: $T = 2\\pi\\sqrt{\\frac{m}{k}}$ (takie samo na Ziemi i na Księżycu!). Wahadło matematyczne (dla małych kątów): $T = 2\\pi\\sqrt{\\frac{l}{g}}$.',
            'Całkowita energia drgań jest stała: $E_c = \\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\max}^2 = \\frac{1}{2}m\\omega^2 A^2$. Gdy rośnie częstotliwość siły wymuszającej $f_w$ i zrówna się z częstotliwością drgań własnych $f_0$, zachodzi **rezonans mechaniczny** (gwałtowny wzrost amplitudy).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-06-energia-drgan',
          title: 'Rysunek 2. Przemiany energii E_p(x) i E_k(x) w oscylatorze',
          caption: 'W położeniu równowagi cała energia jest kinetyczna; w punktach zwrotnych (±A) — wyłącznie potencjalna.',
        },
      ],
    },
    {
      id: 'pn6-3',
      title: 'Fale mechaniczne, interferencja i fale stojące',
      badge: 'Fale i struny',
      intro:
        'Fala przenosi energię, ale nie przenosi materii. Kluczowe wzory: $v = \\lambda f = \\frac{\\lambda}{T}$ (prędkość zależy od ośrodka, częstotliwość od źródła!).',
      blocks: [
        {
          type: 'prose',
          heading: 'Interferencja i fale stojące',
          paragraphs: [
            'Przy nakładaniu się dwóch fal spójnych (interferencji) w punkcie o różnicy dróg $\\Delta r$ zachodzi **wzmocnienie**, gdy $\\Delta r = k\\lambda$ ($k = 0,1,2,\\dots$), oraz **wygaszenie**, gdy $\\Delta r = (k + \\frac{1}{2})\\lambda$.',
            '**Fala stojąca** na strunie o długości $L$ zamocowanej na obu końcach ma na końcach węzły: $L = n\\frac{\\lambda_n}{2} \\Rightarrow f_n = n\\frac{v}{2L}$. Odległość między dwoma sąsiednimi węzłami (lub strzałkami) to zawsze $\\frac{\\lambda}{2}$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-06-fale-stojace',
          title: 'Rysunek 3. Kolejne harmoniczne fali stojącej na strunie (n = 1, 2, 3)',
          caption: 'Odległość między sąsiednimi węzłami wynosi λ/2.',
        },
      ],
    },
    {
      id: 'pn6-4',
      title: 'Akustyka i efekt Dopplera',
      badge: 'Dźwięk i ruch źródła',
      intro:
        'Gdy źródło dźwięku zbliża się do obserwatora, czoła fal ulegają zagęszczeniu — słyszymy wyższy dźwięk ($f\' > f$).',
      blocks: [
        {
          type: 'prose',
          heading: 'Poziom natężenia dźwięku i efekt Dopplera',
          paragraphs: [
            'Natężenie dźwięku $I = \\frac{P}{S} = \\frac{P}{4\\pi r^2}\\,[\\text{W/m}^2]$. Poziom natężenia w decybelach: $L = 10\\log_{10}\\left(\\frac{I}{I_0}\\right)\\,[\\text{dB}]$, gdzie $I_0 = 10^{-12}\\text{ W/m}^2$ (próg słyszalności). Każde zwiększenie natężenia $10$ razy to wzrost o $+10\\text{ dB}$!',
            'Efekt Dopplera (wzór z Karty Wzorów CKE): $f\' = f \\frac{v \\pm v_{\\text{obs}}}{v \\mp v_{\\text{źr}}}$. Zapamiętaj znak intuicyjnie: zbliżanie zawsze podwyższa częstotliwość ($f\' > f$), oddalanie obniża ($f\' < f$).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-06-doppler',
          title: 'Rysunek 4. Efekt Dopplera dla poruszającego się źródła',
          caption: 'Przed źródłem długość fali maleje (wyższa częstotliwość), za źródłem rośnie (niższa częstotliwość).',
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf6-1', front: 'Co zmienia się, gdy fala dźwiękowa przechodzi z powietrza do wody: prędkość $v$, długość $\\lambda$ czy częstotliwość $f$?', back: 'Częstotliwość $f$ pozostaje STAŁA (zależy od źródła). Zmienia się prędkość $v$ (rośnie w wodzie) oraz długość fali $\\lambda = v/f$ (rośnie).', category: 'zjawisko' },
    { id: 'pf6-2', front: 'Jaka jest odległość między sąsiednim węzłem a strzałką fali stojącej?', back: '$\\frac{\\lambda}{4}$ (między dwoma węzłami jest $\\frac{\\lambda}{2}$).', category: 'wzor' },
    { id: 'pf6-3', front: 'O ile decybeli wzrośnie poziom natężenia dźwięku, jeśli natężenie $I$ wzrośnie $100$ razy?', back: 'O $+20\\text{ dB}$ ($10\\log_{10}(100) = 20\\text{ dB}$).', category: 'wzor' },
    { id: 'pf6-4', front: 'Jak zmieni się okres wahadła matematycznego po przeniesieniu na Księżyc ($g_K \\approx g_Z/6$)?', back: 'Wzrośnie $\\sqrt{6}$ razy (bo $T = 2\\pi\\sqrt{l/g}$).', category: 'zjawisko' },
  ],
  quiz: [
    {
      id: 'pq6-1',
      q: 'Ciężarek o masie $m$ zawieszony na sprężynie wykonuje drgania o okresie $T = 2{,}0\\text{ s}$. Jaki będzie okres drgań, jeśli masę zwiększymy $4$ razy, a amplitudę $2$ razy?',
      options: ['$2{,}0\\text{ s}$', '$4{,}0\\text{ s}$', '$8{,}0\\text{ s}$', '$1{,}0\\text{ s}$'],
      correct: 1,
      explanation: 'Okres $T = 2\\pi\\sqrt{m/k}$ nie zależy od amplitudy, a od $\\sqrt{m}$. Czterokrotny wzrost masy daje $\\sqrt{4} = 2$-krotny wzrost okresu ($4{,}0\\text{ s}$).',
    },
    {
      id: 'pq6-2',
      q: 'Na strunie o długości $L = 0{,}60\\text{ m}$ powstała 3. harmoniczna fali stojącej (3 wybrzuszenia). Długość fali $\\lambda$ wynosi:',
      options: ['$0{,}20\\text{ m}$', '$0{,}40\\text{ m}$', '$0{,}60\\text{ m}$', '$1{,}20\\text{ m}$'],
      correct: 1,
      explanation: '3 wybrzuszenia to $3 \\cdot \\frac{\\lambda}{2} = L \\Rightarrow \\lambda = \\frac{2L}{3} = \\frac{1{,}20}{3} = 0{,}40\\text{ m}$.',
    },
  ],
  examTasks: [
    {
      id: 'cke-06-doppler',
      source: 'CKE Formuła 2023 • Akustyka i efekt Dopplera',
      title: 'Częstotliwość syreny nadjeżdżającego pociągu',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      svgId: 'svg-06-doppler',
      prompt:
        'Pociąg zbliża się do stojącego na peronie obserwatora z prędkością $v_{\\text{źr}} = 34\\text{ m/s}$ i nadaje sygnał dźwiękowy o częstotliwości $f = 450\\text{ Hz}$. Prędkość dźwięku w powietrzu wynosi $v = 340\\text{ m/s}$. Oblicz częstotliwość dźwięku słyszanego przez obserwatora.',
      expectedValue: 500,
      tolerance: 2,
      unit: 'Hz',
      hint: 'Obserwator stoi ($v_{\\text{obs}} = 0$), źródło się zbliża, więc mianownik musi zmaleć: $f\' = f\\frac{v}{v - v_{\\text{źr}}}$.',
      solutionSteps: [
        'Stosujemy wzór Dopplera dla zbliżającego się źródła: $f\' = f \\frac{v}{v - v_{\\text{źr}}}$.',
        'Podstawiamy dane: $f\' = 450 \\cdot \\frac{340}{340 - 34} = 450 \\cdot \\frac{340}{306} = 500\\text{ Hz}$.',
      ],
      ckeKey: [
        '1 pkt — poprawna postać wzoru Dopplera ze znakiem minus w mianowniku.',
        '1 pkt — poprawne podstawienie wartości liczbowych.',
        '1 pkt — wynik $500\\text{ Hz}$.',
      ],
    },
    {
      id: 'cke-06-oscylator-vmax',
      source: 'CKE Formuła 2023 • Ruch harmoniczny',
      title: 'Prędkość maksymalna i energia oscylatora harmonicznego',
      maxPoints: 3,
      difficulty: 'podstawa',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      svgId: 'svg-06-energia-drgan',
      prompt:
        'Ciało o masie $m = 0{,}20\\text{ kg}$ wykonuje drgania harmoniczne na sprężynie o stałej $k = 20\\text{ N/m}$ z amplitudą $A = 0{,}10\\text{ m}$. Oblicz maksymalną prędkość tego ciała.',
      expectedValue: 1.0,
      tolerance: 0.05,
      unit: 'm/s',
      hint: 'Z zasady zachowania energii: $\\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\max}^2$, albo $v_{\\max} = \\omega A = \\sqrt{\\frac{k}{m}} A$.',
      solutionSteps: [
        'Częstość kołowa: $\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{20}{0{,}20}} = \\sqrt{100} = 10\\text{ rad/s}$.',
        'Maksymalna prędkość: $v_{\\max} = \\omega A = 10 \\cdot 0{,}10 = 1{,}0\\text{ m/s}$.',
      ],
      ckeKey: [
        '1 pkt — powiązanie $v_{\\max} = \\omega A$ lub $\\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\max}^2$.',
        '1 pkt — obliczenie $v_{\\max} = 1{,}0\\text{ m/s}$ z jednostką.',
      ],
    },
  ],
};
