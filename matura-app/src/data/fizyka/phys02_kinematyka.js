export const phys02Kinematyka = {
  id: 'phys-02',
  displayNum: 2,
  code: 'DZIAŁ 2',
  title: 'Kinematyka',
  subtitle: 'Opis ruchu, wykresy x(t), v(t), a(t), spadanie swobodne, rzuty i ruch po okręgu',
  duration: '12–15 h (Tygodnie 2–3)',
  xp: 260,
  notes: [
    {
      id: 'pn2-1',
      title: 'Opis ruchu: droga vs przemieszczenie i względność',
      badge: 'Podstawy kinematyki',
      intro:
        'Kinematyka odpowiada na pytanie „jak porusza się ciało?”, nie pytając jeszcze o przyczyny ruchu (siły). Najważniejsze rozróżnienie na starcie: skalarna droga vs wektorowe przemieszczenie.',
      blocks: [
        {
          type: 'prose',
          heading: 'Układ odniesienia, droga i przemieszczenie',
          paragraphs: [
            'Ruch jest pojęciem względnym — zawsze określamy go względem wybranego układu odniesienia. **Droga $s$** to długość toru przebytego przez ciało (zawsze nieujemna i nigdy nie maleje). **Przemieszczenie $\\Delta\\vec{r}$** to wektor łączący położenie początkowe z końcowym.',
            'Z tego wynika kluczowa pułapka maturalna: **średnia szybkość** to $v_{\\text{śr}} = \\frac{s}{\\Delta t}$, natomiast **średnia prędkość** (wektorowo) to $\\vec{v}_{\\text{śr}} = \\frac{\\Delta\\vec{r}}{\\Delta t}$. Jeśli wrócisz do punktu startu, Twoja średnia prędkość wektorowa wynosi $0$, mimo że szybkość była dodatnia!',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-02-droga-przemieszczenie',
          title: 'Rysunek 1. Droga s (skalar) a wektor przemieszczenia Δr⃗',
          caption: 'Droga jest długością krzywej toru; przemieszczenie to najkrótszy odcinek skierowany od A do B.',
        },
      ],
    },
    {
      id: 'pn2-2',
      title: 'Ruch prostoliniowy jednostajny i jednostajnie zmienny',
      badge: 'Wykresy i równania',
      intro:
        'Większość zadań maturalnych z kinematyki polega na odczycie lub narysowaniu wykresów $x(t)$, $v(t)$ oraz $a(t)$ i przejściu między nimi.',
      blocks: [
        {
          type: 'prose',
          heading: 'Równania ruchu i czytanie wykresów',
          paragraphs: [
            'W ruchu jednostajnym ($a = 0$, $v = \\text{const}$): $x(t) = x_0 + vt$. W ruchu jednostajnie zmiennym ($a = \\text{const}$): $v(t) = v_0 + at$ oraz $x(t) = x_0 + v_0 t + \\frac{1}{2}at^2$. Przydatny wzór bez czasu (z Karty Wzorów lub do szybkiego wyprowadzenia): $v^2 - v_0^2 = 2as$.',
            'Zasada wykresów: **nachylenie wykresu $x(t)$ daje prędkość $v$**, **nachylenie wykresu $v(t)$ daje przyspieszenie $a$**, a **pole pod wykresem $v(t)$ daje przemieszczenie $\\Delta x$** (uwaga: pole poniżej osi czasu ma znak minus — ciało cofa się!).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-02-wykresy-ruchu',
          title: 'Rysunek 2. Zestawienie wykresów x(t), v(t) i a(t) w ruchu jednostajnie przyspieszonym',
          caption: 'Pole trapezu/trójkąta pod wykresem v(t) jest liczbowo równe przemieszczeniu Δx.',
        },
        {
          type: 'callout',
          variant: 'amber',
          title: 'Spadanie swobodne i droga w n-tej sekundzie',
          items: [
            'Przy spadaniu swobodnym z wysokości $h$ (bez prędkości początkowej, bez oporów powietrza): $h = \\frac{1}{2}gt^2$, skąd czas spadania $t = \\sqrt{\\frac{2h}{g}}$, a prędkość końcowa $v = \\sqrt{2gh}$.',
            'Drogi przebyte w kolejnych równych sekundach z $v_0 = 0$ mają się do siebie jak kolejne liczby nieparzyste: $1 : 3 : 5 : 7 : \\dots$ (prawo Galileusza).',
          ],
        },
      ],
    },
    {
      id: 'pn2-3',
      title: 'Rzuty w polu grawitacyjnym (poziomy i ukośny)',
      badge: 'Złożenie dwóch ruchów',
      intro:
        'Rzut poziomy i ukośny to nic nowego — to jednoczesne złożenie dwóch niezależnych ruchów: jednostajnego w poziomie ($X$) i jednostajnie zmiennego w pionie ($Y$).',
      blocks: [
        {
          type: 'prose',
          heading: 'Niezależność ruchów w osi X i osi Y',
          paragraphs: [
            'W osi poziomej $X$ nie działa żadna siła (pomijamy opór powietrza), więc $a_x = 0$, $v_x = v_{0x} = v_0\\cos\\alpha = \\text{const}$, a $x(t) = v_{0x} \\cdot t$.',
            'W osi pionowej $Y$ działa stałe przyspieszenie ziemskie skierowane w dół ($a_y = -g$): $v_y(t) = v_{0y} - gt$, $y(t) = y_0 + v_{0y}t - \\frac{1}{2}gt^2$, gdzie $v_{0y} = v_0\\sin\\alpha$. W najwyższym punkcie toru $v_y = 0$, ale **prędkość całkowita nie jest równa zero** — wynosi $v = v_x = v_0\\cos\\alpha$!',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-02-rzut-ukosny',
          title: 'Rysunek 3. Tor rzutu ukośnego i wektory prędkości',
          caption: 'W najwyższym punkcie toru składowa pionowa prędkości znika (vᵧ = 0), pozostaje stała składowa pozioma vₓ.',
        },
      ],
    },
    {
      id: 'pn2-4',
      title: 'Ruch jednostajny po okręgu',
      badge: 'Kinematyka obrotowa',
      intro:
        'Mimo że wartość prędkości $v$ jest stała, ruch jednostajny po okręgu jest ruchem przyspieszonym — ponieważ nieustannie zmienia się kierunek wektora prędkości!',
      blocks: [
        {
          type: 'prose',
          heading: 'Prędkość liniowa, kątowa i przyspieszenie dośrodkowe',
          paragraphs: [
            'Okres $T$ to czas jednego pełnego obiegu, częstotliwość $f = \\frac{1}{T}$ to liczba obiegów na sekundę ($\\text{Hz}$). Prędkość liniowa (styczna do okręgu): $v = \\frac{2\\pi r}{T} = 2\\pi r f$. Prędkość kątowa: $\\omega = \\frac{2\\pi}{T} = 2\\pi f\\,[\\text{rad/s}]$, skąd $v = \\omega r$.',
            'Przyspieszenie dośrodkowe $\\vec{a}_d$ jest zawsze skierowane **do środka okręgu** (prostopadle do $\\vec{v}$) i ma wartość: $a_d = \\frac{v^2}{r} = \\omega^2 r$.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-02-ruch-okrag',
          title: 'Rysunek 4. Wektory prędkości i przyspieszenia dośrodkowego na okręgu',
          caption: 'Wektor prędkości v⃗ jest zawsze styczny do okręgu, a przyspieszenie dośrodkowe a_d celuje w środek okręgu.',
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf2-1', front: 'Czym różni się droga od przemieszczenia?', back: 'Droga to długość toru (skalar $\\ge 0$), a przemieszczenie $\\Delta\\vec{r}$ to wektor od punktu startu do punktu końcowego.', category: 'zjawisko' },
    { id: 'pf2-2', front: 'Co oznacza pole pod wykresem $v(t)$?', back: 'Przemieszczenie $\\Delta x$ (pole nad osią $t$ dodatnie, pod osią $t$ ujemne).', category: 'wykres' },
    { id: 'pf2-3', front: 'Ile wynosi prędkość w najwyższym punkcie rzutu ukośnego?', back: 'Wynosi $v = v_x = v_0\\cos\\alpha$ (składowa pionowa $v_y = 0$).', category: 'wzor' },
    { id: 'pf2-4', front: 'Jak zależy czas spadania w rzucie poziomym z wysokości $h$ od prędkości początkowej $v_0$?', back: 'Nie zależy od $v_0$! Wynosi $t = \\sqrt{\\frac{2h}{g}}$ (taki sam jak przy spadaniu swobodnym).', category: 'zjawisko' },
    { id: 'pf2-5', front: 'Wzory na przyspieszenie dośrodkowe w ruchu po okręgu:', back: '$a_d = \\frac{v^2}{r} = \\omega^2 r = \\frac{4\\pi^2 r}{T^2}$', category: 'wzor' },
    { id: 'pf2-6', front: 'Jaki kąt między $\\vec{v}$ a $\\vec{a}_d$ występuje w ruchu jednostajnym po okręgu?', back: 'Zawsze $90^\\circ$ (wektory są prostopadłe).', category: 'zjawisko' },
  ],
  quiz: [
    {
      id: 'pq2-1',
      q: 'Z wysokości $h = 20\\text{ m}$ wyrzucono poziomo kamień z prędkością $v_0 = 15\\text{ m/s}$ ($g = 10\\text{ m/s}^2$). Po jakim czasie kamień spadnie na ziemię?',
      options: ['$1\\text{ s}$', '$2\\text{ s}$', '$3\\text{ s}$', '$4\\text{ s}$'],
      correct: 1,
      explanation: 'Czas spadania w rzucie poziomym zależy wyłącznie od wysokości: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{40}{10}} = 2\\text{ s}$.',
      examTip: 'Prędkość pozioma $v_0 = 15\\text{ m/s}$ wpływa tylko na zasięg ($Z = v_0 t = 30\\text{ m}$), nie na czas spadania.',
    },
    {
      id: 'pq2-2',
      q: 'Ciało porusza się ruchem jednostajnie przyspieszonym z $v_0 = 0$. Stosunek drogi przebytej w 3. sekundzie ruchu do drogi przebytej w 1. sekundzie ruchu wynosi:',
      options: ['$3 : 1$', '$5 : 1$', '$9 : 1$', '$6 : 1$'],
      correct: 1,
      explanation: 'Drogi w kolejnych sekundach ($v_0=0$) mają się jak $1 : 3 : 5 : 7$, więc w 3. sekundzie ciało przebywa 5 razy dłuższą drogę niż w 1. sekundzie.',
      whyWrong: {
        2: '$9 : 1$ to stosunek dróg całkowitych po $3\\text{ s}$ i po $1\\text{ s}$, a nie drogi w samej 3. sekundzie.',
      },
    },
    {
      id: 'pq2-3',
      q: 'W ruchu jednostajnym po okręgu dwukrotne zwiększenie prędkości liniowej $v$ przy stałym promieniu $r$ powoduje, że przyspieszenie dośrodkowe:',
      options: ['zmaleje dwukrotnie', 'wzrośnie dwukrotnie', 'wzrośnie czterokrotnie', 'nie zmieni się'],
      correct: 2,
      explanation: 'Ze wzoru $a_d = \\frac{v^2}{r}$ przyspieszenie dośrodkowe jest proporcjonalne do kwadratu prędkości ($2^2 = 4$).',
    },
    {
      id: 'pq2-4',
      q: 'Biegacz przebiegł pełne okrążenie stadionu o długości $400\\text{ m}$ w czasie $50\\text{ s}$ i zatrzymał się w punkcie startu. Jego średnia prędkość wektorowa wynosi:',
      options: ['$8\\text{ m/s}$', '$4\\text{ m/s}$', '$0\\text{ m/s}$', '$16\\text{ m/s}$'],
      correct: 2,
      explanation: 'Przemieszczenie $\\Delta\\vec{r} = \\vec{0}$, ponieważ punkt końcowy pokrywa się ze startowym. Średnia szybkość wynosi $8\\text{ m/s}$, ale średnia prędkość wektorowa wynosi $0\\text{ m/s}$.',
    },
  ],
  examTasks: [
    {
      id: 'cke-02-wykres-vt',
      source: 'CKE Maj 2022/2023 • Kinematyka z wykresem v(t)',
      title: 'Wyznaczanie drogi i przyspieszenia z wykresu prędkości od czasu',
      maxPoints: 3,
      difficulty: 'podstawa',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      svgId: 'svg-02-wykresy-ruchu',
      diagramTitle: 'Zależność prędkości od czasu',
      prompt:
        'Wózek ruszył z miejsca ($v_0 = 0$) i poruszał się ruchem jednostajnie przyspieszonym przez $t_1 = 4{,}0\\text{ s}$, osiągając prędkość $v = 12\\text{ m/s}$, a następnie przez $t_2 = 6{,}0\\text{ s}$ jechał ze stałą prędkością $12\\text{ m/s}$. Oblicz całkowitą drogę przebytą przez wózek w czasie $10\\text{ s}$.',
      expectedValue: 96,
      tolerance: 0.5,
      unit: 'm',
      hint: 'Droga to pole pod wykresem $v(t)$: trójkąt o podstawie $4\\text{ s}$ i wysokości $12\\text{ m/s}$ plus prostokąt o podstawie $6\\text{ s}$ i wysokości $12\\text{ m/s}$.',
      solutionSteps: [
        'Droga w pierwszych $4\\text{ s}$: $s_1 = \\frac{1}{2} v t_1 = \\frac{1}{2} \\cdot 12 \\cdot 4{,}0 = 24\\text{ m}$.',
        'Droga w kolejnych $6\\text{ s}$: $s_2 = v t_2 = 12 \\cdot 6{,}0 = 72\\text{ m}$.',
        'Całkowita droga: $s = s_1 + s_2 = 24 + 72 = 96\\text{ m}$.',
      ],
      ckeKey: [
        '1 pkt — poprawna metoda obliczenia drogi (pole pod wykresem lub równania ruchu dla obu etapów).',
        '1 pkt — poprawne obliczenie $s_1$ i $s_2$.',
        '1 pkt — poprawny wynik końcowy $96\\text{ m}$ z jednostką.',
      ],
    },
    {
      id: 'cke-02-rzut-ukosny',
      source: 'CKE Formuła 2023 • Zadanie wieloetapowe z rzutu',
      title: 'Rzut ukośny z balkonu lub pod kątem',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      svgId: 'svg-02-rzut-ukosny',
      prompt:
        'Piłkę kopnięto z powierzchni boiska z prędkością początkową $v_0 = 20\\text{ m/s}$ pod kątem $\\alpha = 30^\\circ$ do poziomu. Pomiń opory powietrza i przyjmij $g = 10\\text{ m/s}^2$. Oblicz maksymalną wysokość $H_{\\max}$, na jaką wzniesie się piłka.',
      expectedValue: 5.0,
      tolerance: 0.1,
      unit: 'm',
      hint: 'Składowa pionowa prędkości początkowej to $v_{0y} = v_0\\sin 30^\\circ = 10\\text{ m/s}$. Czas wznoszenia: $t_w = v_{0y}/g$, wysokość: $H_{\\max} = \\frac{v_{0y}^2}{2g}$.',
      solutionSteps: [
        'Wyznaczamy składową pionową prędkości początkowej: $v_{0y} = v_0\\sin 30^\\circ = 20 \\cdot 0{,}5 = 10\\text{ m/s}$.',
        'W najwyższym punkcie $v_y = 0$, więc czas wznoszenia wynosi $t_w = \\frac{v_{0y}}{g} = \\frac{10}{10} = 1{,}0\\text{ s}$.',
        'Maksymalna wysokość: $H_{\\max} = v_{0y} t_w - \\frac{1}{2}gt_w^2 = 10 \\cdot 1 - 5 \\cdot 1^2 = 5{,}0\\text{ m}$.',
      ],
      ckeKey: [
        '1 pkt — rozłożenie prędkości początkowej na składową pionową $v_{0y} = v_0\\sin\\alpha$.',
        '1 pkt — warunek $v_y = 0$ w najwyższym punkcie toru.',
        '1 pkt — poprawny wynik $H_{\\max} = 5{,}0\\text{ m}$.',
      ],
    },
    {
      id: 'cke-02-wzglednosc-rzeka',
      source: 'CKE Formuła 2015/2023 • Względność ruchu',
      title: 'Przeprawa łódki przez rzekę z prądem wody',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt:
        'Motorówka płynie z prędkością $v_m = 5{,}0\\text{ m/s}$ względem wody, kierując dziób prostopadle do brzegu rzeki o szerokości $d = 120\\text{ m}$. Prąd rzeki ma prędkość $v_r = 3{,}0\\text{ m/s}$. Oblicz, o ile metrów poniżej punktu na wprost miejsca startu motorówka dobije do przeciwległego brzegu.',
      expectedValue: 72,
      tolerance: 1,
      unit: 'm',
      hint: 'Czas przeprawy zależy wyłącznie od prędkości prostopadłej do brzegu: $t = d/v_m$. Znos prądu w tym czasie to $s = v_r \\cdot t$.',
      solutionSteps: [
        'Czas przeprawy przez rzekę: $t = \\frac{d}{v_m} = \\frac{120}{5{,}0} = 24\\text{ s}$.',
        'Znos wzdłuż rzeki: $s = v_r \\cdot t = 3{,}0 \\cdot 24 = 72\\text{ m}$.',
      ],
      ckeKey: [
        '1 pkt — obliczenie czasu przeprawy $t = d/v_m = 24\\text{ s}$.',
        '1 pkt — obliczenie znosu $s = v_r \\cdot t = 72\\text{ m}$.',
        '1 pkt — poprawny wynik z jednostką.',
      ],
    },
    {
      id: 'cke-02-spotkanie-cial',
      source: 'CKE Formuła 2023 • Ruch prostoliniowy',
      title: 'Pościg samochodu za rowerzystą',
      maxPoints: 3,
      difficulty: 'wyzwanie',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt:
        'W chwili $t = 0$ samochód rusza z miejsca ze stałym przyspieszeniem $a = 2{,}0\\text{ m/s}^2$. W tej samej chwili mija go rowerzysta jadący ze stałą prędkością $v_r = 10\\text{ m/s}$. Po jakim czasie samochód dogoni rowerzystę?',
      expectedValue: 10,
      tolerance: 0.2,
      unit: 's',
      hint: 'W chwili spotkania przebyte drogi są równe: $\\frac{1}{2}at^2 = v_r t$ (dla $t > 0$).',
      solutionSteps: [
        'Droga samochodu: $s_s(t) = \\frac{1}{2}at^2$. Droga rowerzysty: $s_r(t) = v_r t$.',
        'Warunek spotkania ($t > 0$): $\\frac{1}{2}at^2 = v_r t \\Rightarrow t = \\frac{2v_r}{a} = \\frac{2 \\cdot 10}{2{,}0} = 10\\text{ s}$.',
      ],
      ckeKey: [
        '1 pkt — zapisanie równań ruchu obu ciał.',
        '1 pkt — przyrównanie położeń $s_s(t) = s_r(t)$.',
        '1 pkt — obliczenie czasu $t = 10\\text{ s}$.',
      ],
    },
  ],
};
