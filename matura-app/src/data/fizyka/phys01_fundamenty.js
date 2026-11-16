export const phys01Fundamenty = {
  id: 'phys-01',
  displayNum: 1,
  code: 'DZIAŁ 1',
  title: 'Fundamenty Matematyczne, Wektory i Wykresy',
  subtitle: 'Start od zera: jednostki SI, trygonometria, wektory, analiza wykresów i niepewności pomiarowe CKE',
  duration: '6–8 h (Tydzień 1)',
  xp: 220,
  notes: [
    {
      id: 'pn1-1',
      title: 'Układ SI, przedrostki i analiza wymiarowa',
      badge: 'Podstawa narzędziowa',
      intro:
        'Na maturze z fizyki ponad 20% błędów rachunkowych wynika ze złej zamiany jednostek. Zanim policzysz cokolwiek na liczbach, zawsze sprowadź dane do jednostek podstawowych układu SI.',
      blocks: [
        {
          type: 'prose',
          heading: '7 jednostek podstawowych SI i zamiana jednostek złożonych',
          paragraphs: [
            'W układzie SI podstawowymi jednostkami w mechanice i elektryczności są: metr ($\\text{m}$), kilogram ($\\text{kg}$), sekunda ($\\text{s}$), amper ($\\text{A}$), kelwin ($\\text{K}$) oraz mol ($\\text{mol}$). Wszystkie inne jednostki (np. niuton $1\\text{ N} = 1\\,\\frac{\\text{kg}\\cdot\\text{m}}{\\text{s}^2}$, dżul $1\\text{ J} = 1\\text{ N}\\cdot\\text{m}$, wat $1\\text{ W} = 1\\text{ J/s}$) wynikają bezpośrednio ze wzorów.',
            'Złota zasada zamiany jednostek kwadratowych i sześciennych: jeśli $1\\text{ m} = 100\\text{ cm}$, to $1\\text{ m}^2 = (100\\text{ cm})^2 = 10^4\\text{ cm}^2$, a $1\\text{ m}^3 = (100\\text{ cm})^3 = 10^6\\text{ cm}^3$. Dlatego $1\\,\\frac{\\text{g}}{\\text{cm}^3} = 1000\\,\\frac{\\text{kg}}{\\text{m}^3}$.',
          ],
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Przedrostki CKE ($10^n$)',
              desc: 'piko ($10^{-12}$), nano ($10^{-9}$), mikro ($10^{-6}$), mili ($10^{-3}$), kilo ($10^3$), mega ($10^6$), giga ($10^9$)',
              details: {
                summary: 'W Karcie Wzorów CKE znajdziesz pełną tabelę przedrostków, ale poniższe musisz znać z pamięci.',
                bullets: [
                  '$1\\text{ nm} = 10^{-9}\\text{ m}$ (długości fal światła, rozmiary atomów)',
                  '$1\\,\\mu\\text{C} = 10^{-6}\\text{ C}$ (ładunki w elektrostatyce)',
                  '$1\\text{ MeV} = 10^6\\text{ eV} = 1{,}6\\cdot 10^{-13}\\text{ J}$ (fizyka jądrowa)',
                ],
                essayUse: 'Zawsze zapisuj wykładniki w notacji naukowej $a \\cdot 10^n$, zanim wklepiesz je do kalkulatora.',
              },
            },
            {
              term: 'Prędkość: $\\text{km/h} \\leftrightarrow \\text{m/s}$',
              desc: '$1\\,\\frac{\\text{m}}{\\text{s}} = 3{,}6\\,\\frac{\\text{km}}{\\text{h}}$ oraz $1\\,\\frac{\\text{km}}{\\text{h}} = \\frac{1}{3{,}6}\\,\\frac{\\text{m}}{\\text{s}}$',
              details: {
                summary: 'Dziel przez $3{,}6$, gdy zamieniasz $\\text{km/h} \\to \\text{m/s}$. Mnoż przez $3{,}6$ w drugą stronę.',
                bullets: [
                  '$36\\text{ km/h} = 10\\text{ m/s}$',
                  '$72\\text{ km/h} = 20\\text{ m/s}$',
                  '$108\\text{ km/h} = 30\\text{ m/s}$',
                ],
              },
            },
            {
              term: 'Analiza wymiarowa',
              desc: 'Sprawdzanie poprawności wyprowadzonego wzoru przez porównanie jednostek lewej i prawej strony.',
              details: {
                summary: 'Jeśli wyprowadziłeś wzór $v = \\sqrt{2gh}$, sprawdź jednostki: $\\sqrt{\\frac{\\text{m}}{\\text{s}^2} \\cdot \\text{m}} = \\sqrt{\\frac{\\text{m}^2}{\\text{s}^2}} = \\frac{\\text{m}}{\\text{s}}$. Zgadza się!',
                essayUse: 'Na maturze 10 sekund analizy wymiarowej potrafi uratować 3–4 punkty przed oddaniem błędnego wzoru.',
              },
            },
          ],
        },
        {
          type: 'callout',
          variant: 'amber',
          title: 'Pułapka CKE: Liczba cyfr znaczących',
          items: [
            'Jeśli w zadaniu dane mają 2 lub 3 cyfry znaczące (np. $m = 2{,}0\\text{ kg}$, $g = 9{,}81\\text{ m/s}^2$), wynik końcowy podaj z dokładnością do **2 lub 3 cyfr znaczących**.',
            'Nie zaokrąglaj wyników pośrednich! Zapisuj na symbolach do samego końca i dopiero na końcu podstawiaj liczby.',
          ],
        },
      ],
    },
    {
      id: 'pn1-2',
      title: 'Przekształcanie wzorów i trygonometria maturalna',
      badge: 'Matematyka w fizyce',
      intro:
        'Fizyka na maturze polega na operowaniu symbolami. Wzory przekształcasz na literach, a trygonometria trójkąta prostokątnego pozwala rozłożyć każdą siłę i prędkość na składowe.',
      blocks: [
        {
          type: 'prose',
          heading: 'Trójkąt prostokątny i funkcje trygonometryczne',
          paragraphs: [
            'W trójkącie prostokątnym o przeciwprostokątnej $c$ oraz przyprostokątnych $a$ (naprzeciw kąta $\\alpha$) i $b$ (przy kącie $\\alpha$): $\\sin\\alpha = \\frac{a}{c}$, $\\cos\\alpha = \\frac{b}{c}$, $\\operatorname{tg}\\alpha = \\frac{a}{b} = \\frac{\\sin\\alpha}{\\cos\\alpha}$.',
            'Kluczowa zależność przy rozkładaniu wektorów: bok **przy kącie $\\alpha$** dostaje $\\cos\\alpha$ ($b = c\\cos\\alpha$), a bok **naprzeciw kąta $\\alpha$** dostaje $\\sin\\alpha$ ($a = c\\sin\\alpha$).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-01-rozklad-na-osie',
          title: 'Rysunek 1. Rozkład wektora na osie X i Y',
          caption: 'Składowa przy kącie α to F·cos α, a składowa prostopadła (naprzeciw kąta α) to F·sin α.',
        },
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Przekształcanie wzorów krok po kroku',
          items: [
            'Przykład: wyznacz $r$ ze wzoru $v = \\sqrt{\\frac{GM}{r}}$. Podnieś obie strony do kwadratu: $v^2 = \\frac{GM}{r}$, a następnie zamień miejscami $v^2$ i $r$: $r = \\frac{GM}{v^2}$.',
            'Zasada proporcji: jeśli $y = \\frac{a \\cdot b^2}{c}$, to dwukrotny wzrost $b$ powoduje **czterokrotny** wzrost $y$, a dwukrotny wzrost $c$ powoduje **dwukrotny spadek** $y$.',
          ],
        },
      ],
    },
    {
      id: 'pn1-3',
      title: 'Działania na wektorach',
      badge: 'Klucz do mechaniki i pól',
      intro:
        'Prędkość, przyspieszenie, siła, pęd, natężenie pola elektrycznego i indukcja magnetyczna to wektory. Błąd w kierunku lub zwrocie przekreśla całe zadanie.',
      blocks: [
        {
          type: 'prose',
          heading: 'Dodawanie, odejmowanie i wartość wypadkowa',
          paragraphs: [
            'Dwa wektory $\\vec{a}$ i $\\vec{b}$ dodajemy metodą równoległoboku (zaczepione w jednym punkcie) lub wieloboku (koniec pierwszego z początkiem drugiego). Jeśli wektory są prostopadłe, wartość wypadkowej liczymy z twierdzenia Pitagorasa: $c = \\sqrt{a^2 + b^2}$.',
            'Odejmowanie wektorów jest kluczowe przy zmianie pędu lub prędkości: $\\Delta\\vec{v} = \\vec{v}_2 - \\vec{v}_1$. Wektor $\\Delta\\vec{v}$ rysujemy od grotu $\\vec{v}_1$ do grotu $\\vec{v}_2$!',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-01-wektory-skladanie',
          title: 'Rysunek 2. Dodawanie i odejmowanie wektorów',
          caption: 'Po lewej: reguła równoległoboku. Po prawej: zmiana wektora Δv = v₂ − v₁.',
        },
      ],
    },
    {
      id: 'pn1-4',
      title: 'Wykresy, nachylenie stycznej, pole i niepewności pomiarowe',
      badge: 'Zadania doświadczalne CKE',
      intro:
        'W każdym arkuszu maturalnym CKE pojawia się zadanie doświadczalne z tabelą pomiarów, wykresem, prostą dopasowania lub szacowaniem niepewności.',
      blocks: [
        {
          type: 'prose',
          heading: 'Co mówią nachylenie i pole pod wykresem?',
          paragraphs: [
            'Współczynnik kierunkowy prostej (lub stycznej do krzywej) to $a = \\frac{\\Delta y}{\\Delta x}$. Zawsze spójrz na jednostki osi: jeśli na osi pionowej jest $v\\,[\\text{m/s}]$, a na poziomej $t\\,[\\text{s}]$, to iloraz $\\frac{\\Delta v}{\\Delta t}$ ma jednostkę $\\text{m/s}^2$, czyli jest **przyspieszeniem**.',
            'Pole pod wykresem odpowiada iloczynowi osi $y \\cdot x$. Pole pod wykresem $v(t)$ daje przemieszczenie ($\\frac{\\text{m}}{\\text{s}}\\cdot\\text{s} = \\text{m}$), pole pod $F(x)$ daje pracę ($\\text{N}\\cdot\\text{m} = \\text{J}$), a pole pod $I(t)$ daje ładunek ($\\text{A}\\cdot\\text{s} = \\text{C}$).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-01-wykres-styczna-pole',
          title: 'Rysunek 3. Nachylenie wykresu oraz pole pod wykresem',
          caption: 'Jednostka ilorazu osi wskazuje sens fizyczny nachylenia; jednostka iloczynu osi wskazuje sens pola.',
        },
        {
          type: 'diagram',
          svgId: 'svg-01-niepewnosci-prosta',
          title: 'Rysunek 4. Prosta najlepszego dopasowania i prostokąty niepewności',
          caption: 'Prosta powinna przechodzić przez wszystkie prostokąty niepewności (lub jak najbliżej ich środków), nie łączymy punktów łamaną!',
        },
        {
          type: 'callout',
          variant: 'blue',
          title: 'Zasady CKE dla wykresów i niepewności',
          items: [
            'Nigdy nie łącz punktów pomiarowych łamaną! Rysuj jedną gładką prostą lub krzywą dopasowania.',
            'Do obliczenia współczynnika kierunkowego wybieraj **dwa punkty leżące na narysowanej prostej** możliwie daleko od siebie (nie z tabeli pomiarowej, chyba że leżą dokładnie na prostej).',
            'Niepewność wyniku zaokrąglamy zazwyczaj do **1 lub 2 cyfr znaczących** (w górę przy 1 cyfrze znaczącej), a sam wynik zaokrąglamy do tej samej pozycji dziesiętnej co niepewność.',
          ],
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf1-1', front: 'Jak zamienić prędkość z $\\text{km/h}$ na $\\text{m/s}$?', back: 'Podzielić przez $3{,}6$ (np. $72\\text{ km/h} = 20\\text{ m/s}$).', hint: '$1\\text{ km} = 1000\\text{ m}$, $1\\text{ h} = 3600\\text{ s}$', category: 'jednostka' },
    { id: 'pf1-2', front: 'Ile wynosi $1\\,\\text{g/cm}^3$ w jednostkach SI ($\\text{kg/m}^3$)?', back: '$1000\\,\\text{kg/m}^3$', hint: '$1\\text{ g} = 10^{-3}\\text{ kg}$, $1\\text{ cm}^3 = 10^{-6}\\text{ m}^3$', category: 'jednostka' },
    { id: 'pf1-3', front: 'Co oznaczają przedrostki: nano ($\\text{n}$), mikro ($\\mu$), mili ($\\text{m}$)?', back: 'nano $= 10^{-9}$, mikro $= 10^{-6}$, mili $= 10^{-3}$', category: 'jednostka' },
    { id: 'pf1-4', front: 'Jak rozłożyć wektor $\\vec{F}$ pod kątem $\\alpha$ do osi $X$ na składowe $F_x$ i $F_y$?', back: '$F_x = F\\cos\\alpha$ (przy kącie) oraz $F_y = F\\sin\\alpha$ (naprzeciw kąta).', category: 'wzor' },
    { id: 'pf1-5', front: 'Jaka jest wartość sumy dwóch wektorów prostopadłych o długościach $3$ i $4$?', back: '$c = \\sqrt{3^2 + 4^2} = 5$', category: 'wzor' },
    { id: 'pf1-6', front: 'Jaką wielkość fizyczną reprezentuje pole pod wykresem $F(x)$?', back: 'Pracę $W$ (jednostka: $\\text{N}\\cdot\\text{m} = \\text{J}$).', category: 'wykres' },
    { id: 'pf1-7', front: 'Jaką wielkość fizyczną reprezentuje nachylenie stycznej do wykresu $v(t)$?', back: 'Przyspieszenie chwilowe $a = \\frac{\\Delta v}{\\Delta t}$ (jednostka: $\\text{m/s}^2$).', category: 'wykres' },
    { id: 'pf1-8', front: 'Jaką wielkość fizyczną reprezentuje pole pod wykresem $I(t)$?', back: 'Ładunek elektryczny $\\Delta q$ (jednostka: $\\text{A}\\cdot\\text{s} = \\text{C}$).', category: 'wykres' },
    { id: 'pf1-9', front: 'Czy prostą dopasowania na wykresie rysujemy łącząc kolejne punkty pomiarowe łamaną?', back: 'Nie! Rysujemy jedną prostą przechodzącą przez prostokąty niepewności tak, aby punkty rozkładały się równomiernie po obu jej stronach.', category: 'doswiadczenie' },
    { id: 'pf1-10', front: 'Jak zapisać wynik pomiaru $x = 9{,}814\\text{ m/s}^2$ z niepewnością $\\Delta x = 0{,}23\\text{ m/s}^2$?', back: '$x = (9{,}8 \\pm 0{,}2)\\text{ m/s}^2$ lub $(9{,}81 \\pm 0{,}23)\\text{ m/s}^2$ — wynik i niepewność muszą mieć tę samą dokładność po przecinku.', category: 'doswiadczenie' },
  ],
  quiz: [
    {
      id: 'pq1-1',
      q: 'Gęstość cieczy wynosi $0{,}8\\,\\frac{\\text{g}}{\\text{cm}^3}$. Ile wynosi ta gęstość w jednostkach układu SI?',
      options: ['$80\\,\\frac{\\text{kg}}{\\text{m}^3}$', '$800\\,\\frac{\\text{kg}}{\\text{m}^3}$', '$8000\\,\\frac{\\text{kg}}{\\text{m}^3}$', '$0{,}0008\\,\\frac{\\text{kg}}{\\text{m}^3}$'],
      correct: 1,
      explanation: '$1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$, więc $0{,}8 \\cdot 1000 = 800\\,\\text{kg/m}^3$.',
      examTip: 'Gęstość wody to $1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$ — traktuj to jako punkt odniesienia.',
    },
    {
      id: 'pq1-2',
      q: 'Wektor siły o wartości $F = 20\\text{ N}$ tworzy z osią poziomą $X$ kąt $\\alpha = 30^\\circ$. Ile wynosi składowa $F_x$?',
      options: ['$10\\text{ N}$', '$10\\sqrt{3}\\text{ N}$', '$20\\text{ N}$', '$40\\text{ N}$'],
      correct: 1,
      explanation: 'Składowa leżąca przy kącie $30^\\circ$ to $F_x = F\\cos 30^\\circ = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ N}$.',
      whyWrong: {
        0: '$10\\text{ N}$ to składowa pionowa $F_y = F\\sin 30^\\circ$.',
      },
    },
    {
      id: 'pq1-3',
      q: 'Samochód porusza się na wschód z prędkością $v_1 = 3\\text{ m/s}$, a po zakręcie na północ z prędkością $v_2 = 4\\text{ m/s}$. Ile wynosi wartość zmiany prędkości $|\\Delta\\vec{v}| = |\\vec{v}_2 - \\vec{v}_1|$?',
      options: ['$1\\text{ m/s}$', '$5\\text{ m/s}$', '$7\\text{ m/s}$', '$12\\text{ m/s}$'],
      correct: 1,
      explanation: 'Wektory $\\vec{v}_1$ i $\\vec{v}_2$ są prostopadłe, więc różnica $\\Delta\\vec{v}$ tworzy przeciwprostokątną trójkąta prostokątnego: $\\sqrt{3^2 + 4^2} = 5\\text{ m/s}$.',
    },
    {
      id: 'pq1-4',
      q: 'Wyznaczając współczynnik kierunkowy prostej najlepszego dopasowania na wykresie, należy wybrać:',
      options: [
        'pierwszy i ostatni punkt z tabeli pomiarowej',
        'dwa sąsiednie punkty z tabeli pomiarowej',
        'dwa punkty leżące na narysowanej prostej, możliwie daleko od siebie',
        'dowolny jeden punkt na wykresie i podzielić $y/x$',
      ],
      correct: 2,
      explanation: 'Prosta uśrednia błędy pomiarowe wszystkich punktów. Branie punktów z tabeli (zwłaszcza bliskich sobie) wprowadza duży błąd odczytu.',
      examTip: 'To jeden z najczęstszych wymogów w kluczu CKE do zadań z wykresem!',
    },
    {
      id: 'pq1-5',
      q: 'Ze wzoru $T = 2\\pi\\sqrt{\\frac{l}{g}}$ wyznaczono przyspieszenie $g$. Który zapis jest poprawny?',
      options: [
        '$g = \\frac{4\\pi^2 l}{T^2}$',
        '$g = \\frac{2\\pi l}{T^2}$',
        '$g = \\frac{4\\pi^2 T^2}{l}$',
        '$g = \\frac{l}{4\\pi^2 T^2}$',
      ],
      correct: 0,
      explanation: 'Podnosimy obie strony do kwadratu: $T^2 = 4\\pi^2 \\frac{l}{g}$, skąd $g = \\frac{4\\pi^2 l}{T^2}$. Sprawdzenie jednostek: $\\frac{\\text{m}}{\\text{s}^2}$ — zgadza się!',
    },
  ],
  examTasks: [
    {
      id: 'cke-01-niepewnosc',
      source: 'CKE Maj 2023 • Formuła 2023 (Zadanie doświadczalne — wzorzec)',
      title: 'Wyznaczanie przyspieszenia grawitacyjnego z wykresu $T^2(l)$',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszownikUrl: 'https://arkuszownik.pl',
      svgId: 'svg-01-niepewnosci-prosta',
      diagramTitle: 'Schemat dopasowania prostej do punktów pomiarowych z niepewnościami',
      prompt:
        'Uczeń badał zależność kwadratu okresu drgań wahadła matematycznego $T^2$ od jego długości $l$. Z narysowanej prostej najlepszego dopasowania odczytał dwa punkty leżące na prostej: $(l_1 = 0{,}20\\text{ m},\\, T_1^2 = 0{,}80\\text{ s}^2)$ oraz $(l_2 = 1{,}00\\text{ m},\\, T_2^2 = 4{,}02\\text{ s}^2)$. Oblicz na tej podstawie wartość przyspieszenia grawitacyjnego $g$ (przyjmij $\\pi^2 \\approx 9{,}87$).',
      expectedValue: 9.81,
      tolerance: 0.15,
      unit: 'm/s²',
      hint: 'Z Karty Wzorów CKE: $T = 2\\pi\\sqrt{\\frac{l}{g}} \\Rightarrow T^2 = \\frac{4\\pi^2}{g} \\cdot l$. Współczynnik kierunkowy prostej $T^2(l)$ jest równy $a = \\frac{4\\pi^2}{g}$.',
      solutionSteps: [
        'Przekształcamy wzór: $T^2 = \\frac{4\\pi^2}{g} \\cdot l$, czyli zależność ma postać $y = a \\cdot x$, gdzie $a = \\frac{4\\pi^2}{g}$.',
        'Obliczamy współczynnik kierunkowy prostej z dwóch odczytanych punktów: $a = \\frac{4{,}02 - 0{,}80}{1{,}00 - 0{,}20} = \\frac{3{,}22}{0{,}80} = 4{,}025\\,\\frac{\\text{s}^2}{\\text{m}}$.',
        'Wyznaczamy $g = \\frac{4\\pi^2}{a} = \\frac{4 \\cdot 9{,}87}{4{,}025} \\approx 9{,}81\\,\\frac{\\text{m}}{\\text{s}^2}$.',
      ],
      ckeKey: [
        '1 pkt — poprawne powiązanie współczynnika kierunkowego prostej z $\\frac{4\\pi^2}{g}$.',
        '1 pkt — obliczenie współczynnika kierunkowego $a$ z punktów leżących na prostej (a nie z tabeli).',
        '1 pkt — poprawne obliczenie $g$ z jednostką $\\text{m/s}^2$ i właściwym zaokrągleniem.',
      ],
    },
    {
      id: 'cke-01-wektory',
      source: 'CKE Formuła 2015/2023 • Zadanie rachunkowe',
      title: 'Wypadkowa dwóch sił pod kątem prostym i rozkład na osie',
      maxPoints: 2,
      difficulty: 'podstawa',
      arkuszownikUrl: 'https://arkuszownik.pl',
      prompt:
        'Na ciało o masie $m = 2{,}0\\text{ kg}$ działają w płaszczyźnie poziomej dwie prostopadłe siły o wartościach $F_1 = 6{,}0\\text{ N}$ i $F_2 = 8{,}0\\text{ N}$. Oblicz wartość przyspieszenia tego ciała.',
      expectedValue: 5.0,
      tolerance: 0.1,
      unit: 'm/s²',
      hint: 'Najpierw oblicz wartość siły wypadkowej $F_w = \\sqrt{F_1^2 + F_2^2}$, a potem skorzystaj z $a = F_w / m$.',
      solutionSteps: [
        'Siły są prostopadłe, więc wartość siły wypadkowej wynosi $F_w = \\sqrt{6{,}0^2 + 8{,}0^2} = \\sqrt{36 + 64} = 10{,}0\\text{ N}$.',
        'Przyspieszenie ciała: $a = \\frac{F_w}{m} = \\frac{10{,}0\\text{ N}}{2{,}0\\text{ kg}} = 5{,}0\\,\\frac{\\text{m}}{\\text{s}^2}$.',
      ],
      ckeKey: [
        '1 pkt — poprawne wyznaczenie wektorowej sumy sił prostopadłych ($10\\text{ N}$).',
        '1 pkt — obliczenie przyspieszenia z jednostką.',
      ],
    },
    {
      id: 'cke-01-analiza-wymiarowa',
      source: 'CKE Formuła 2015/2023 • Analiza wymiarowa i niepewności',
      title: 'Wyznaczanie stałej sprężystości z wykresu F(x) i ocena niepewności',
      maxPoints: 3,
      difficulty: 'standard',
      arkuszownikUrl: 'https://arkuszownik.pl',
      svgId: 'svg-01-wykres-styczna-pole',
      prompt:
        'Uczeń wyznaczał stałą sprężystości $k$ metodą statyczną. Dla siły $F = (12{,}0 \\pm 0{,}3)\\text{ N}$ zmierzył wydłużenie $\\Delta x = (0{,}150 \\pm 0{,}005)\\text{ m}$. Oblicz wartość stałej sprężystości $k$ oraz jej maksymalną niepewność bezwzględną $\\Delta k$ metodą różniczki zupełnej / niepewności względnych (jako wynik wpisz samo $k$ w $\\text{N/m}$).',
      expectedValue: 80,
      tolerance: 1,
      unit: 'N/m',
      hint: 'Ze wzoru $k = F/\\Delta x$ względna niepewność ilorazu to suma niepewności względnych: $\\frac{\\Delta k}{k} = \\frac{\\Delta F}{F} + \\frac{\\Delta(\\Delta x)}{\\Delta x}$.',
      solutionSteps: [
        'Wartość średnia: $k = \\frac{12{,}0}{0{,}150} = 80{,}0\\,\\text{N/m}$.',
        'Niepewność względna: $\\frac{\\Delta k}{k} = \\frac{0{,}3}{12{,}0} + \\frac{0{,}005}{0{,}150} = 0{,}025 + 0{,}0333 = 0{,}0583$ ($5{,}83\\%$).',
        'Niepewność bezwzględna: $\\Delta k = 80{,}0 \\cdot 0{,}0583 \\approx 4{,}7\\,\\text{N/m} \\Rightarrow k = (80 \\pm 5)\\,\\text{N/m}$.',
      ],
      ckeKey: [
        '1 pkt — poprawne obliczenie wartości $k = 80\\,\\text{N/m}$.',
        '1 pkt — zsumowanie niepewności względnych dla ilorazu.',
        '1 pkt — poprawne zaokrąglenie wyniku i niepewności do zgodnej pozycji dziesiętnej: $(80 \\pm 5)\\,\\text{N/m}$.',
      ],
    },
    {
      id: 'cke-01-skladanie-sil-kat',
      source: 'CKE Formuła 2023 • Wektory i trygonometria',
      title: 'Równowaga trzech sił w punkcie (rozkład na składowe)',
      maxPoints: 3,
      difficulty: 'wyzwanie',
      arkuszownikUrl: 'https://arkuszownik.pl',
      svgId: 'svg-01-rozklad-na-osie',
      prompt:
        'Ciężarek o ciężarze $Q = 10\\text{ N}$ zawieszono na dwóch lekkich linkach. Jedna linka jest pozioma, a druga tworzy z sufitem (poziomem) kąt $\\alpha = 30^\\circ$. Oblicz wartość siły naciągu $N_2$ ukośnej linki.',
      expectedValue: 20,
      tolerance: 0.5,
      unit: 'N',
      hint: 'W pionie ciężar $Q$ może równoważyć wyłącznie pionowa składowa ukośnej linki: $N_2 \\sin 30^\\circ = Q$.',
      solutionSteps: [
        'Z warunku równowagi w osi pionowej $Y$: $N_2 \\sin 30^\\circ = Q$.',
        'Ponieważ $\\sin 30^\\circ = 0{,}5$, mamy $N_2 = \\frac{10\\text{ N}}{0{,}5} = 20\\text{ N}$.',
      ],
      ckeKey: [
        '1 pkt — zauważenie, że pozioma linka nie ma składowej pionowej.',
        '1 pkt — zapisanie $N_2 \\sin 30^\\circ = Q$.',
        '1 pkt — wynik $N_2 = 20\\text{ N}$.',
      ],
    },
  ],
};
