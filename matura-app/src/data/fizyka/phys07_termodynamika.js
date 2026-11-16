export const phys07Termodynamika = {
  id: 'phys-07',
  displayNum: 7,
  code: 'DZIAŁ 7',
  title: 'Hydrostatyka i Termodynamika',
  subtitle: 'Prawo Pascala i Archimedesa, gaz doskonały, I i II zasada termodynamiki, wykresy p(V)',
  duration: '12–14 h (Tygodnie 11–12)',
  xp: 260,
  notes: [
    {
      id: 'pn7-1',
      title: 'Hydrostatyka: ciśnienie i prawo Archimedesa',
      badge: 'Ciecze i gazy w spoczynku',
      intro:
        'W hydrostatyce ciśnienie działa jednakowo we wszystkich kierunkach, a siła wyporu zależy wyłącznie od objętości zanurzonej części ciała i gęstości cieczy.',
      blocks: [
        {
          type: 'prose',
          heading: 'Ciśnienie hydrostatyczne i siła wyporu',
          paragraphs: [
            'Ciśnienie całkowite na głębokości $h$ w cieczy o gęstości $\\rho_c$: $p = p_{\\text{atm}} + \\rho_c g h$. Prawo Pascala: ciśnienie zewnętrzne wywierane na ciecz rozchodzi się jednakowo w całej objętości (zasada prasy hydraulicznej: $\\frac{F_1}{S_1} = \\frac{F_2}{S_2}$).',
            '**Prawo Archimedesa:** Na ciało zanurzone w płynie działa skierowana w górę siła wyporu równa ciężarowi wypartego płynu: $F_w = \\rho_c g V_{\\text{zan}}$. Ciało pływa częściowo zanurzone, gdy $\\rho_{\\text{ciała}} < \\rho_c$ (wówczas $F_w = Q \\Rightarrow \\frac{V_{\\text{zan}}}{V_c} = \\frac{\\rho_{\\text{ciała}}}{\\rho_c}$).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-07-archimedes',
          title: 'Rysunek 1. Równowaga sił dla ciała pływającego',
          caption: 'Ułamek zanurzonej objętości V_zan/V równa się stosunkowi gęstości ciała do gęstości cieczy.',
        },
      ],
    },
    {
      id: 'pn7-2',
      title: 'Ciepło, bilans cieplny i przemiany fazowe',
      badge: 'Kalorymetria',
      intro:
        'Podczas topnienia lub wrzenia dostarczane ciepło zużywane jest na zerwanie wiązań międzycząsteczkowych — temperatura pozostaje stała!',
      blocks: [
        {
          type: 'prose',
          heading: 'Bilans cieplny',
          paragraphs: [
            'Zmiana temperatury bez zmiany stanu skupienia: $Q = m c_w \\Delta T$. Zmiana stanu skupienia w stałej temperaturze: $Q = m L_t$ (topnienie) lub $Q = m L_p$ (parowanie).',
            'W układzie izolowanym (kalorymetr): $\\sum Q_{\\text{pobrane}} = \\sum |Q_{\\text{oddane}}|$ (lub algebraicznie $\\sum Q_i = 0$).',
          ],
        },
      ],
    },
    {
      id: 'pn7-3',
      title: 'Gaz doskonały i teoria kinetyczno-molekularna',
      badge: 'Równanie Clapeyrona',
      intro:
        'W każdym wzorze termodynamicznym z temperaturą bezwzględną $T$ MUSISZ zamienić stopnie Celsjusza na kelwiny: $T\\,[\\text{K}] = t\\,[^\\circ\\text{C}] + 273{,}15$!',
      blocks: [
        {
          type: 'prose',
          heading: 'Równanie stanu i energia wewnętrzna gazu',
          paragraphs: [
            'Równanie Clapeyrona: $pV = nRT = N k_B T$, gdzie $n = \\frac{m}{M}$ to liczba moli, $R = 8{,}31\\,\\frac{\\text{J}}{\\text{mol}\\cdot\\text{K}}$. Dla stałej masy gazu: $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$.',
            'Średnia energia kinetyczna cząsteczki: $E_{k,\\text{śr}} = \\frac{3}{2} k_B T$. Energia wewnętrzna gazu jednoatomowego zależy wyłącznie od temperatury: $U = \\frac{3}{2} n R T = \\frac{3}{2} p V$.',
          ],
        },
      ],
    },
    {
      id: 'pn7-4',
      title: 'I i II zasada termodynamiki oraz przemiany na wykresie p(V)',
      badge: 'Praca gazu i silniki',
      intro:
        'Wykres $p(V)$ to najczęstsze zadanie z termodynamiki na maturze. Pilnuj konwencji znaków: $W$ to praca wykonana NAD gazem (w CKE bywa też $W_{\\text{gazu}} = -W$).',
      blocks: [
        {
          type: 'prose',
          heading: 'I zasada termodynamiki i 4 przemiany gazowe',
          paragraphs: [
            '**I zasada termodynamiki:** $\\Delta U = Q + W$, gdzie $Q > 0$ oznacza ciepło dostarczone do gazu, a $W > 0$ pracę wykonaną *nad* gazem (sprężanie: $\\Delta V < 0$). Gdy gaz się rozpręża, wykonuje pracę $W_{\\text{gazu}} = p\\Delta V$ (pole pod wykresem $p(V)$).',
            '**Izochoryczna ($V = \\text{const}$):** $W = 0$, $\\Delta U = Q$. **Izobaryczna ($p = \\text{const}$):** $W_{\\text{gazu}} = p\\Delta V$. **Izotermiczna ($T = \\text{const}$):** $\\Delta U = 0 \\Rightarrow Q = -W$. **Adiabatyczna ($Q = 0$):** $\\Delta U = W$ (krzywa na $p(V)$ bardziej stroma niż izoterma!).',
            '**Silnik cieplny (II zasada):** Sprawność $\\eta = \\frac{W_{\\text{uż}}}{Q_{\\text{pob}}} = \\frac{Q_1 - |Q_2|}{Q_1}$, a maksymalna sprawność teoretyczna (cykl Carnota): $\\eta_{\\max} = 1 - \\frac{T_{\\text{chł}}}{T_{\\text{grz}}}$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-07-przemiany-pv',
          title: 'Rysunek 2. Cztery przemiany gazowe na wykresie p(V)',
          caption: 'Adiabata opada bardziej stromo niż izoterma, ponieważ podczas rozprężania adiabatycznego spada temperatura.',
        },
        {
          type: 'diagram',
          svgId: 'svg-07-cykl-silnika',
          title: 'Rysunek 3. Zamknięty cykl termodynamiczny na wykresie p(V)',
          caption: 'Praca użyteczna w jednym cyklu jest równa polu powierzchni wewnątrz pętli.',
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf7-1', front: 'Wzór na siłę wyporu (prawo Archimedesa):', back: '$F_w = \\rho_{\\text{cieczy}} \\cdot g \\cdot V_{\\text{zanurzona}}$', category: 'wzor' },
    { id: 'pf7-2', front: 'Od czego zależy energia wewnętrzna $U$ gazu doskonałego?', back: 'Wyłącznie od temperatury bezwzględnej $T$ (dla gazu jednoatomowego $U = \\frac{3}{2}nRT$).', category: 'prawo' },
    { id: 'pf7-3', front: 'Co się dzieje z temperaturą gazu doskonałego podczas rozprężania adiabatycznego ($Q = 0$)?', back: 'Temperatura SPADA, ponieważ gaz wykonuje pracę kosztem własnej energii wewnętrznej ($\\Delta U < 0$).', category: 'zjawisko' },
    { id: 'pf7-4', front: 'Wzór na maksymalną sprawność silnika cieplnego (cykl Carnota):', back: '$\\eta_{\\max} = 1 - \\frac{T_{\\text{chł}}}{T_{\\text{grz}}}$ (temperatury obowiązkowo w kelwinach!).', category: 'wzor' },
  ],
  quiz: [
    {
      id: 'pq7-1',
      q: 'W szklance z wodą pływa kostka lodu. Po całkowitym stopieniu się lodu (przy stałej temperaturze wody) poziom wody w szklance:',
      options: ['wzrośnie', 'opadnie', 'nie zmieni się', 'zależy od masy lodu'],
      correct: 2,
      explanation: 'Masa wody powstałej ze stopionego lodu jest równa masie wypartej wcześniej wody ($F_w = Q_{\\text{lodu}} = m_{\\text{wyp}}g$), więc objętość wody po stopieniu dokładnie wypełni zanurzoną wcześniej objętość.',
      examTip: 'Klasyczne pytanie pojęciowe CKE! Uwaga: jeśli w lodzie jest zatopiony ciężki kamień, po stopieniu poziom OPADNIE.',
    },
    {
      id: 'pq7-2',
      q: 'Silnik Carnota pracuje między grzejnicą o temperaturze $327^\\circ\\text{C}$ a chłodnicą o temperaturze $27^\\circ\\text{C}$. Jego sprawność wynosi:',
      options: ['$91{,}7\\%$', '$50\\%$', '$25\\%$', '$75\\%$'],
      correct: 1,
      explanation: 'Zamieniamy na kelwiny: $T_1 = 600\\text{ K}$, $T_2 = 300\\text{ K}$. $\\eta = 1 - \\frac{300}{600} = 0{,}5 = 50\\%$.',
    },
  ],
  examTasks: [
    {
      id: 'cke-07-cykl-pv',
      source: 'CKE Formuła 2023 • Termodynamika na wykresie p(V)',
      title: 'Praca użyteczna i sprawność cyklu prostokątnego',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszownikUrl: 'https://arkuszownik.pl',
      svgId: 'svg-07-cykl-silnika',
      prompt:
        'Gaz doskonały wykonuje cykl prostokątny $1 \\to 2 \\to 3 \\to 4 \\to 1$ na wykresie $p(V)$ zgodnie z ruchem wskazówek zegara, między ciśnieniami $p_1 = 1{,}0\\cdot 10^5\\text{ Pa}$ i $p_2 = 3{,}0\\cdot 10^5\\text{ Pa}$ oraz objętościami $V_1 = 2{,}0\\cdot 10^{-3}\\text{ m}^3$ i $V_2 = 5{,}0\\cdot 10^{-3}\\text{ m}^3$. Oblicz pracę użyteczną wykonaną przez gaz w jednym cyklu.',
      expectedValue: 600,
      tolerance: 5,
      unit: 'J',
      hint: 'Praca użyteczna w cyklu to pole prostokąta na wykresie $p(V)$: $W_{\\text{uż}} = (p_2 - p_1)(V_2 - V_1)$.',
      solutionSteps: [
        'Pole prostokąta na wykresie $p(V)$: $\\Delta p = 3{,}0\\cdot 10^5 - 1{,}0\\cdot 10^5 = 2{,}0\\cdot 10^5\\text{ Pa}$.',
        'Zmiana objętości: $\\Delta V = 5{,}0\\cdot 10^{-3} - 2{,}0\\cdot 10^{-3} = 3{,}0\\cdot 10^{-3}\\text{ m}^3$.',
        '$W_{\\text{uż}} = \\Delta p \\cdot \\Delta V = 2{,}0\\cdot 10^5 \\cdot 3{,}0\\cdot 10^{-3} = 600\\text{ J}$.',
      ],
      ckeKey: [
        '1 pkt — powiązanie pracy użytecznej w cyklu z polem pętli na $p(V)$.',
        '1 pkt — poprawne obliczenie $\\Delta p$ i $\\Delta V$ w jednostkach SI.',
        '1 pkt — wynik $600\\text{ J}$.',
      ],
    },
  ],
};
