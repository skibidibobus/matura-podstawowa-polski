export const phys12Wspolczesna = {
  id: 'phys-12',
  displayNum: 12,
  code: 'DZIAŁ 12',
  title: 'Fizyka Atomowa, Kwantowa, Jądrowa i Astrofizyka',
  subtitle: 'Efekt fotoelektryczny, atom Bohra, fale de Broglie’a, rozpady jądrowe, defekt masy i prawo Hubble’a',
  duration: '12–14 h (Tygodnie 19–20)',
  xp: 280,
  notes: [
    {
      id: 'pn12-1',
      title: 'Fotony i efekt fotoelektryczny zewnętrzny',
      badge: 'Kwantowanie światła',
      intro:
        'Efekt fotoelektryczny udowodnił, że światło składa się z porcji energii — fotonów ($E = hf = \\frac{hc}{\\lambda}$). O tym, czy elektron zostanie wybity z metalu, decyduje CZĘSTOTLIWOŚĆ światła, a nie jego natężenie!',
      blocks: [
        {
          type: 'prose',
          heading: 'Równanie Einsteina i napięcie hamowania',
          paragraphs: [
            '**Równanie Einsteina dla fotoefektu:** $hf = W + E_{k\\max}$, gdzie $W$ to praca wyjścia elektronu z danego metalu. Zjawisko zachodzi tylko wtedy, gdy $hf \\ge W$ (czyli $f \\ge f_0 = W/h$, albo $\\lambda \\le \\lambda_0$).',
            'Maksymalną energię kinetyczną fotoelektronów mierzymy przez **napięcie hamowania $U_h$**: $E_{k\\max} = e U_h$. Zwiększenie natężenia (jasności) światła zwiększa liczbę wybitych elektronów (fotoprąd nasycenia), ale **nie zmienia** $E_{k\\max}$ ani $U_h$!',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-12-fotoefekt-wykres',
          title: 'Rysunek 1. Wykres E_kmax(f) dla efektu fotoelektrycznego',
          caption: 'Nachylenie prostej wynosi zawsze h (stała Plancka), niezależnie od rodzaju metalu; przecięcie z osią pionową to −W.',
        },
      ],
    },
    {
      id: 'pn12-2',
      title: 'Dualizm korpuskularno-falowy i model Bohra atomu wodoru',
      badge: 'Fale materii i widma',
      intro:
        'Nie tylko światło ma naturę falową i cząsteczkową — każda rozpędzona cząstka (elektron, proton) ma przypisaną falę de Broglie’a!',
      blocks: [
        {
          type: 'prose',
          heading: 'Fale de Broglie’a i przeskoki w atomie wodoru',
          paragraphs: [
            '**Długość fali de Broglie’a:** $\\lambda = \\frac{h}{p} = \\frac{h}{mv}$ (dla elektronu przyspieszonego napięciem $U$: $p = \\sqrt{2m_e eU}$).',
            '**Model Bohra atomu wodoru:** elektron może krążyć tylko po dozwolonych orbitach o energiach $E_n = \\frac{-13{,}6\\text{ eV}}{n^2}$ ($n = 1, 2, 3, \\dots$). Przeskok ze stanu wyższego $n_2$ na niższy $n_1$ powoduje **emisję** fotonu o energii $hf = E_{n_2} - E_{n_1}$. Przeskok w górę wymaga **absorpcji** fotonu o dokładnie takiej różnicy energii.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-12-poziomy-bohra',
          title: 'Rysunek 2. Poziomy energetyczne atomu wodoru i przejścia kwantowe',
          caption: 'Przejścia na n = 1 to seria Lymana (UV); na n = 2 to seria Balmera (światło widzialne).',
        },
      ],
    },
    {
      id: 'pn12-3',
      title: 'Fizyka jądrowa: rozpady, defekt masy i energia wiązania',
      badge: 'Jądro atomowe',
      intro:
        'W każdej reakcji jądrowej muszą być zachowane: suma liczb masowych ($A$) oraz suma liczb atomowych ($Z$).',
      blocks: [
        {
          type: 'prose',
          heading: 'Rozpady promieniotwórcze i defekt masy',
          paragraphs: [
            '**Rozpad $\\alpha$** (emisja jądra helu $^4_2\\text{He}$): $A \\to A-4$, $Z \\to Z-2$. **Rozpad $\\beta^-$** (emisja elektronu $^0_{-1}e$ + antyneutrina): $A$ bez zmian, $Z \\to Z+1$. **Rozpad $\\beta^+$** (pozyton): $A$ bez zmian, $Z \\to Z-1$. **Emisja $\\gamma$:** tylko spadek energii wzbudzonego jądra ($A$ i $Z$ bez zmian).',
            '**Prawo rozpadu promieniotwórczego:** $N(t) = N_0 \\left(\\frac{1}{2}\\right)^{t / T_{1/2}}$, gdzie $T_{1/2}$ to czas połowicznego rozpadu.',
            '**Defekt masy i energia wiązania:** masa jądra jest mniejsza od sumy mas jego nukleonów o $\\Delta m = Z m_p + (A-Z)m_n - m_{\\text{jądra}}$. Energia wiązania: $\\Delta E = \\Delta m c^2$ (w jednostkach atomowych: $1\\text{ u} \\cdot c^2 \\approx 931{,}5\\text{ MeV}$).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-12-rozpad-wykres',
          title: 'Rysunek 3. Krzywa rozpadu promieniotwórczego N(t)',
          caption: 'Po każdym czasie T₁/₂ liczba nie rozpadniętych jąder maleje o połowę.',
        },
      ],
    },
    {
      id: 'pn12-4',
      title: 'Elementy astrofizyki i relatywistyki (CKE 2023/2027)',
      badge: 'Kosmos i czasoprzestrzeń',
      intro:
        'Obserwacja widm odległych galaktyk pokazała przesunięcie linii widmowych ku czerwieni — dowód na rozszerzanie się Wszechświata.',
      blocks: [
        {
          type: 'prose',
          heading: 'Prawo Hubble’a i przesunięcie ku czerwieni',
          paragraphs: [
            'Przesunięcie ku czerwieni $z = \\frac{\\Delta\\lambda}{\\lambda_0}$ pozwala wyznaczyć prędkość oddalania galaktyki ($v \\approx c z$ dla $z \\ll 1$). **Prawo Hubble’a:** prędkość ucieczki galaktyk jest proporcjonalna do ich odległości: $v = H_0 \\cdot d$.',
            'W relatywistyce (dla prędkości bliskich $c$): współczynnik Lorentza $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}} > 1$. Czas w poruszającym się układzie płynie wolniej (dylatacja czasu $\\Delta t = \\gamma\\Delta t_0$), a energia całkowita ciała wynosi $E = \\gamma m c^2$.',
          ],
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf12-1', front: 'Równanie Einsteina dla efektu fotoelektrycznego:', back: '$hf = W + E_{k\\max} = W + eU_h$', category: 'wzor' },
    { id: 'pf12-2', front: 'Co się stanie z napięciem hamowania $U_h$, gdy zwiększymy jasność (natężenie) światła bez zmiany jego barwy?', back: 'Nie zmieni się! Rośnie tylko natężenie fotoprądu (liczba wybitych elektronów), a nie ich maksymalna energia.', category: 'zjawisko' },
    { id: 'pf12-3', front: 'Jak zmieniają się $A$ i $Z$ jądra po rozpadzie $\\beta^-$?', back: 'Liczba masowa $A$ pozostaje bez zmian; liczba atomowa $Z$ rośnie o $1$ ($Z \\to Z+1$).', category: 'prawo' },
    { id: 'pf12-4', front: 'Ile energii odpowiada masie $1\\text{ u}$?', back: 'Około $931{,}5\\text{ MeV}$.', category: 'jednostka' },
  ],
  quiz: [
    {
      id: 'pq12-1',
      q: 'Praca wyjścia elektronu z cezu wynosi $W = 2{,}1\\text{ eV}$. Na płytkę cezową padają fotony o energii $3{,}5\\text{ eV}$. Maksymalna energia kinetyczna fotoelektronów wynosi:',
      options: ['$5{,}6\\text{ eV}$', '$1{,}4\\text{ eV}$', '$2{,}1\\text{ eV}$', '$3{,}5\\text{ eV}$'],
      correct: 1,
      explanation: '$E_{k\\max} = E_{\\text{fotonu}} - W = 3{,}5 - 2{,}1 = 1{,}4\\text{ eV}$.',
    },
    {
      id: 'pq12-2',
      q: 'Czas połowicznego rozpadu izotopu wynosi $T_{1/2} = 8\\text{ dni}$. Po $24\\text{ dniach}$ z początkowej masy $80\\text{ g}$ tego izotopu pozostanie nierozpadnięte:',
      options: ['$40\\text{ g}$', '$20\\text{ g}$', '$10\\text{ g}$', '$5\\text{ g}$'],
      correct: 2,
      explanation: '$24\\text{ dni} = 3 \\cdot T_{1/2}$. Pozostanie $80 \\cdot (1/2)^3 = 80 / 8 = 10\\text{ g}$.',
    },
  ],
  examTasks: [
    {
      id: 'cke-12-bohr-foton',
      source: 'CKE Formuła 2023 • Fizyka atomowa',
      title: 'Emisja fotonu przy przejściu w atomie wodoru',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszownikUrl: 'https://arkuszownik.pl',
      svgId: 'svg-12-poziomy-bohra',
      prompt:
        'Elektron w atomie wodoru przeszedł ze stanu o energii $E_3 = -1{,}51\\text{ eV}$ do stanu o energii $E_2 = -3{,}40\\text{ eV}$. Oblicz długość fali wyemitowanego fotonu w nanometrach ($h = 6{,}63\\cdot 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3{,}00\\cdot 10^8\\text{ m/s}$, $1\\text{ eV} = 1{,}60\\cdot 10^{-19}\\text{ J}$).',
      expectedValue: 658,
      tolerance: 10,
      unit: 'nm',
      hint: 'Oblicz $\\Delta E = E_3 - E_2 = 1{,}89\\text{ eV}$, zamień na dżule, a potem $\\lambda = \\frac{hc}{\\Delta E}$.',
      solutionSteps: [
        'Energia wyemitowanego fotonu: $\\Delta E = -1{,}51 - (-3{,}40) = 1{,}89\\text{ eV}$.',
        'W dżulach: $\\Delta E = 1{,}89 \\cdot 1{,}60\\cdot 10^{-19} = 3{,}024\\cdot 10^{-19}\\text{ J}$.',
        'Długość fali: $\\lambda = \\frac{hc}{\\Delta E} = \\frac{6{,}63\\cdot 10^{-34} \\cdot 3{,}00\\cdot 10^8}{3{,}024\\cdot 10^{-19}} \\approx 6{,}58\\cdot 10^{-7}\\text{ m} = 658\\text{ nm}$ (czerwona linia $H_\\alpha$!).',
      ],
      ckeKey: [
        '1 pkt — obliczenie różnicy energii poziomów $\\Delta E = 1{,}89\\text{ eV}$.',
        '1 pkt — poprawne przeliczenie $\\text{eV} \\to \\text{J}$.',
        '1 pkt — obliczenie długości fali $\\lambda \\approx 658\\text{ nm}$.',
      ],
    },
    {
      id: 'cke-12-defekt-masy',
      source: 'CKE Formuła 2015/2023 • Fizyka jądrowa',
      title: 'Energia wiązania jądra helu $^4_2\\text{He}$',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszownikUrl: 'https://arkuszownik.pl',
      prompt:
        'Masa protonu wynosi $m_p = 1{,}0073\\text{ u}$, masa neutronu $m_n = 1{,}0087\\text{ u}$, a masa jądra helu $^4_2\\text{He}$ wynosi $m_{\\text{He}} = 4{,}0015\\text{ u}$. Przyjmij $1\\text{ u} \\cdot c^2 = 931{,}5\\text{ MeV}$. Oblicz energię wiązania jądra helu (w $\\text{MeV}$).',
      expectedValue: 28.4,
      tolerance: 0.3,
      unit: 'MeV',
      hint: 'Jądro helu ma $2$ protony i $2$ neutrony. Defekt masy $\\Delta m = 2m_p + 2m_n - m_{\\text{He}}$.',
      solutionSteps: [
        'Suma mas nukleonów: $2\\cdot 1{,}0073 + 2\\cdot 1{,}0087 = 4{,}0320\\text{ u}$.',
        'Defekt masy: $\\Delta m = 4{,}0320 - 4{,}0015 = 0{,}0305\\text{ u}$.',
        'Energia wiązania: $\\Delta E = 0{,}0305 \\cdot 931{,}5 \\approx 28{,}41\\text{ MeV}$.',
      ],
      ckeKey: [
        '1 pkt — poprawne ustalenie składu jądra ($2p + 2n$) i obliczenie defektu masy $\\Delta m = 0{,}0305\\text{ u}$.',
        '1 pkt — przeliczenie defektu masy na energię w $\\text{MeV}$.',
        '1 pkt — wynik $\\approx 28{,}4\\text{ MeV}$.',
      ],
    },
  ],
};
