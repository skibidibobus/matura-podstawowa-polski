export const phys03Dynamika = {
  id: 'phys-03',
  displayNum: 3,
  code: 'DZIAŁ 3',
  title: 'Dynamika i Zasady Zachowania',
  subtitle: 'Zasady Newtona, tarcie, równia pochyła, dynamika ruchu po okręgu, pęd, praca i energia',
  duration: '14–16 h (Tygodnie 4–5)',
  xp: 280,
  notes: [
    {
      id: 'pn3-1',
      title: 'Zasady dynamiki Newtona i siły w przyrodzie',
      badge: 'Fundament mechaniki',
      intro:
        'Dynamika wyjaśnia, dlaczego ciało zmienia swój stan ruchu. Zawsze zaczynaj od narysowania WSZYSTKICH sił działających na każde ciało z osobna.',
      blocks: [
        {
          type: 'prose',
          heading: 'I, II i III zasada dynamiki Newtona',
          paragraphs: [
            '**I zasada (bezwładności):** Jeśli siły działające na ciało równoważą się ($\vec{F}_w = \vec{0}$), to ciało spoczywa lub porusza się ruchem jednostajnym prostoliniowym (w układzie inercjalnym).',
            '**II zasada:** Przyspieszenie ciała jest wprost proporcjonalne do siły wypadkowej i odwrotnie proporcjonalne do masy: $\\vec{a} = \\frac{\\vec{F}_w}{m}$, czyli $\\vec{F}_w = m\\vec{a}$ (ogólniej: $\\vec{F}_w = \\frac{\\Delta\\vec{p}}{\\Delta t}$).',
            '**III zasada (akcji i reakcji):** Siły wzajemnego oddziaływania dwóch ciał mają równe wartości, ten sam kierunek i przeciwne zwroty, **ale są przyłożone do dwóch RÓŻNYCH ciał** — dlatego nigdy się nie równoważą!',
          ],
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Siła ciężkości $\\vec{Q}$',
              desc: '$Q = mg$, zawsze pionowo w dół.',
              details: {
                summary: 'Ciężar ciała to siła nacisku na podłoże lub naciągu zawieszenia — w windzie przyspieszającej różni się od $mg$!',
                bullets: [
                  'Winda przyspiesza w górę ($a$ w górę): $N = m(g + a)$ — przeciążenie.',
                  'Winda przyspiesza w dół ($a$ w dół): $N = m(g - a)$ — niedociążenie.',
                  'Swobodne spadanie ($a = g$ w dół): $N = 0$ — stan nieważkości.',
                ],
              },
            },
            {
              term: 'Siła sprężystości (prawo Hooke’a)',
              desc: '$F_s = k\\Delta x$, przeciwna do wydłużenia/ściśnięcia.',
              details: {
                summary: 'Stała sprężystości $k\\,[\\text{N/m}]$ mówi, jakiej siły potrzeba do rozciągnięcia sprężyny o $1\\text{ m}$.',
                bullets: [
                  'Energia potencjalna sprężystości: $E_s = \\frac{1}{2}k(\\Delta x)^2$.',
                  'Połączenie szeregowe sprężyn: $\\frac{1}{k_z} = \\frac{1}{k_1} + \\frac{1}{k_2}$.',
                  'Połączenie równoległe sprężyn: $k_z = k_1 + k_2$.',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'pn3-2',
      title: 'Tarcie i równia pochyła',
      badge: 'Klasyk maturalny CKE',
      intro:
        'Równia pochyła pojawia się na maturze niemal co roku. Kluczem jest wybór osi $X$ wzdłuż równi i osi $Y$ prostopadle do równi.',
      blocks: [
        {
          type: 'prose',
          heading: 'Rozkład sił na równi i dwa rodzaje tarcia',
          paragraphs: [
            'Na ciało o masie $m$ na równi o kącie $\\alpha$ działa siła ciężkości $Q = mg$. Rozkładamy ją na składową zsuwającą $Q_\\parallel = mg\\sin\\alpha$ (wzdłuż równi) oraz dociskającą $Q_\\perp = mg\\cos\\alpha$ (prostopadle do równi). Jeśli nie ma innych sił prostopadłych do równi, reakcja podłoża wynosi $N = mg\\cos\\alpha$.',
            '**Tarcie statyczne** utrzymuje ciało w spoczynku i dostosowuje się do siły ciągnącej aż do wartości maksymalnej: $T_s \\le \\mu_s N$. **Tarcie kinetyczne** działa podczas poślizgu i ma stałą wartość: $T_k = \\mu_k N$, zawsze przeciwnie do zwrotu prędkości.',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-03-rownia-pochyla',
          title: 'Rysunek 1. Pełny rozkład sił na równi pochyłej',
          caption: 'Składowa równoległa mg·sin α zsuwa klocek; nacisk N = mg·cos α wyznacza maksymalne tarcie T = μ·N.',
        },
        {
          type: 'diagram',
          svgId: 'svg-03-uklad-bloczki',
          title: 'Rysunek 2. Układ ciał połączonych nicią przez bloczek',
          caption: 'Dla nici nierozciągliwej oba ciała mają to samo przyspieszenie a oraz tę samą wartość siły naciągu N_n (dla lekkiego bloczka bez tarcia).',
        },
      ],
    },
    {
      id: 'pn3-3',
      title: 'Dynamika ruchu po okręgu',
      badge: 'Siła dośrodkowa',
      intro:
        'Zapamiętaj najważniejszą rzecz: „siła dośrodkowa” NIE jest osobną siłą przyrody! To nazwa wypadkowej sił rzeczywistych skierowanych do środka okręgu.',
      blocks: [
        {
          type: 'prose',
          heading: 'Równanie ruchu po okręgu',
          paragraphs: [
            'Skoro w ruchu po okręgu istnieje przyspieszenie dośrodkowe $a_d = \\frac{v^2}{r}$, to z II zasady Newtona wypadkowa sił w kierunku środka okręgu wynosi: $F_d = m\\frac{v^2}{r} = m\\omega^2 r$.',
            'Przykłady maturalne: na płaskim zakręcie rolę siły dośrodkowej pełni tarcie statyczne ($\\mu_s mg \\ge m\\frac{v^2}{r} \\Rightarrow v_{\\max} = \\sqrt{\\mu_s g r}$). W najniższym punkcie pętli lub doliny: $N - mg = m\\frac{v^2}{r}$, a w najwyższym punkcie pętli (wewnątrz): $N + mg = m\\frac{v^2}{r}$ (warunek nieoderwania: $N \\ge 0 \\Rightarrow v \\ge \\sqrt{gr}$).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-03-wahadlo-stozkowe',
          title: 'Rysunek 3. Wahadło stożkowe — siła naciągu i grawitacja dają siłę dośrodkową',
          caption: 'Składowa pionowa równoważy ciężar (F_n cos α = mg), a pozioma pełni rolę siły dośrodkowej (F_n sin α = mv²/r).',
        },
      ],
    },
    {
      id: 'pn3-4',
      title: 'Pęd, popęd i zasada zachowania pędu',
      badge: 'Zderzenia i odrzut',
      intro:
        'Gdy w zadaniu pojawia się zderzenie dwóch ciał, wybuch albo odrzut — pierwszym odruchem powinna być zasada zachowania pędu.',
      blocks: [
        {
          type: 'prose',
          heading: 'Pęd jako wektor i zderzenia',
          paragraphs: [
            'Pęd to wektor $\\vec{p} = m\\vec{v}\\,[\\text{kg}\\cdot\\text{m/s} = \\text{N}\\cdot\\text{s}]$. Popęd siły: $\\vec{F}\\Delta t = \\Delta\\vec{p}$.',
            '**Zasada zachowania pędu (ZZP):** jeśli wypadkowa sił zewnętrznych wynosi zero (lub czas zderzenia jest bardzo krótki), to całkowity pęd układu przed zderzeniem równa się pędowi po zderzeniu: $\\vec{p}_1 + \\vec{p}_2 = \\vec{p}_1\\,\' + \\vec{p}_2\\,\'$.',
            'W **zderzeniu sprężystym** zachowany jest i pęd, i energia kinetyczna. W **zderzeniu całkowicie niesprężystym** (ciała sklejają się) zachowany jest pęd, ale część energii kinetycznej zamienia się w ciepło/odkształcenie ($\\Delta E_k < 0$).',
          ],
        },
        {
          type: 'diagram',
          svgId: 'svg-03-zderzenie-wektory',
          title: 'Rysunek 4. Bilans pędu w zderzeniu 1D i 2D',
          caption: 'Pęd jest wektorem — w 1D pilnuj znaków (+ / −), w 2D rozpisz ZZP osobno dla osi X i Y.',
        },
      ],
    },
    {
      id: 'pn3-5',
      title: 'Praca, moc i zasada zachowania energii mechanicznej',
      badge: 'Najpotężniejsze narzędzie CKE',
      intro:
        'Tam, gdzie siła jest zmienna albo tor jest zakrzywiony (zjeżdżalnia, pętla, wahadło), równania Newtona zawodzą — użyj bilansu energii!',
      blocks: [
        {
          type: 'prose',
          heading: 'Praca, energia i siły niekonserwatywne',
          paragraphs: [
            'Praca stałej siły: $W = F s \\cos\\alpha\\,[\\text{J}]$. Gdy siła zależy od położenia, praca to **pole pod wykresem $F(x)$** (np. dla sprężyny $W = \\frac{1}{2}kx^2$). Moc chwilowa: $P = \\frac{W}{t} = F v$ (dla stałej prędkości i równoległej siły).',
            '**Twierdzenie o pracy i energii:** $W_{\\text{wszystkich sił}} = \\Delta E_k$. Jeśli działają wyłącznie siły zachowawcze (grawitacja, sprężystość), to całkowita energia mechaniczna jest stała: $E_k + E_p = \\text{const}$. Gdy działa tarcie, to $E_{m,\\text{końc}} - E_{m,\\text{pocz}} = W_T = -T \\cdot s$.',
          ],
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf3-1', front: 'Dlaczego siły akcji i reakcji z III zasady Newtona nie równoważą się?', back: 'Ponieważ działają na dwa RÓŻNE ciała (a równoważyć mogą się tylko siły przyłożone do tego samego ciała).', category: 'prawo' },
    { id: 'pf3-2', front: 'Składowa siły ciężkości równoległa i prostopadła do równi o kącie $\\alpha$:', back: '$Q_\\parallel = mg\\sin\\alpha$, $Q_\\perp = mg\\cos\\alpha$.', category: 'wzor' },
    { id: 'pf3-3', front: 'Jaka jest minimalna prędkość w najwyższym punkcie pionowej pętli o promieniu $r$, aby ciało nie oderwało się od toru?', back: '$v_{\\min} = \\sqrt{gr}$ (bo $N = 0 \\Rightarrow mg = m\\frac{v^2}{r}$).', category: 'wzor' },
    { id: 'pf3-4', front: 'Co jest zachowane w zderzeniu całkowicie niesprężystym?', back: 'Zachowany jest całkowity PĘD układu (energia kinetyczna maleje — zamienia się w ciepło i pracę odkształcenia).', category: 'prawo' },
    { id: 'pf3-5', front: 'Jak obliczyć energię potencjalną sprężystości sprężyny ściśniętej o $\\Delta x$?', back: '$E_s = \\frac{1}{2}k(\\Delta x)^2$', category: 'wzor' },
    { id: 'pf3-6', front: 'Jak uwzględnić pracę tarcia $W_T$ w zasadzie zachowania energii?', back: '$E_{m,\\text{końc}} = E_{m,\\text{pocz}} - T\\cdot s$ (energia mechaniczna maleje o wartość pracy sił tarcia).', category: 'prawo' },
  ],
  quiz: [
    {
      id: 'pq3-1',
      q: 'Klocek zsuwa się ze stałą prędkością po równi pochyłej o kącie nachylenia $\\alpha = 30^\\circ$. Ile wynosi współczynnik tarcia kinetycznego $\\mu_k$?',
      options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{3}$', '$\\frac{\\sqrt{3}}{2}$', '$\\sqrt{3}$'],
      correct: 1,
      explanation: 'Skoro $v = \\text{const}$, to siła zsuwająca równoważy tarcie: $mg\\sin\\alpha = \\mu_k mg\\cos\\alpha \\Rightarrow \\mu_k = \\operatorname{tg} 30^\\circ = \\frac{\\sqrt{3}}{3}$.',
      examTip: 'Zapamiętaj wynik $\\mu = \\operatorname{tg}\\alpha$ dla ruchu jednostajnego w dół równi — pojawia się w wielu zadaniach CKE!',
    },
    {
      id: 'pq3-2',
      q: 'Wózek o masie $2\\text{ kg}$ jadący z prędkością $3\\text{ m/s}$ zderza się i skleja ze spoczywającym wózkiem o masie $4\\text{ kg}$. Jaka jest prędkość obu wózków po zderzeniu?',
      options: ['$1{,}0\\text{ m/s}$', '$1{,}5\\text{ m/s}$', '$2{,}0\\text{ m/s}$', '$3{,}0\\text{ m/s}$'],
      correct: 0,
      explanation: 'Z zasady zachowania pędu: $m_1 v_1 = (m_1 + m_2) v_k \\Rightarrow 2 \\cdot 3 = 6 \\cdot v_k \\Rightarrow v_k = 1{,}0\\text{ m/s}$.',
    },
    {
      id: 'pq3-3',
      q: 'Człowiek o masie $70\\text{ kg}$ stoi na wadze w windzie ruszającej w górę z przyspieszeniem $a = 2\\text{ m/s}^2$ ($g = 10\\text{ m/s}^2$). Wskazanie wagi odpowiada sile nacisku:',
      options: ['$560\\text{ N}$', '$700\\text{ N}$', '$840\\text{ N}$', '$140\\text{ N}$'],
      correct: 2,
      explanation: 'II zasada Newtona w górę: $N - mg = ma \\Rightarrow N = m(g + a) = 70 \\cdot (10 + 2) = 840\\text{ N}$.',
    },
    {
      id: 'pq3-4',
      q: 'Samochód o masie $m$ pokonuje płaski zakręt o promieniu $R = 40\\text{ m}$. Współczynnik tarcia statycznego opon o asfalt wynosi $\\mu_s = 0{,}4$ ($g = 10\\text{ m/s}^2$). Maksymalna bezpieczna prędkość wynosi:',
      options: ['$4\\text{ m/s}$', '$12{,}6\\text{ m/s}$', '$16\\text{ m/s}$', '$40\\text{ m/s}$'],
      correct: 1,
      explanation: '$\\frac{mv^2}{R} \\le \\mu_s mg \\Rightarrow v_{\\max} = \\sqrt{\\mu_s g R} = \\sqrt{0{,}4 \\cdot 10 \\cdot 40} = \\sqrt{160} \\approx 12{,}6\\text{ m/s}$.',
    },
  ],
  examTasks: [
    {
      id: 'cke-03-rownia-sprezyna',
      source: 'CKE Formuła 2023 • Zadanie z energii i tarcia na równi',
      title: 'Zsuwanie klocka z równi i ściskanie sprężyny',
      maxPoints: 4,
      difficulty: 'standard',
      arkuszownikUrl: 'https://arkuszownik.pl',
      svgId: 'svg-03-rownia-pochyla',
      prompt:
        'Klocek o masie $m = 1{,}0\\text{ kg}$ puszczono swobodnie z wysokości $h = 0{,}80\\text{ m}$ na równię pochyłą o kącie $\\alpha = 30^\\circ$ ($\\sin 30^\\circ = 0{,}5$, $g = 10\\text{ m/s}^2$). Współczynnik tarcia kinetycznego klocka o równię wynosi $\\mu = 0{,}20$. Oblicz energię kinetyczną klocka u podnóża równi.',
      expectedValue: 5.23,
      tolerance: 0.2,
      unit: 'J',
      hint: 'Długość drogi po równi to $s = \\frac{h}{\\sin\\alpha} = 1{,}6\\text{ m}$. Z bilansu energii: $E_k = mgh - \\mu mg\\cos\\alpha \\cdot s$.',
      solutionSteps: [
        'Droga klocka wzdłuż równi: $s = \\frac{h}{\\sin 30^\\circ} = \\frac{0{,}80}{0{,}5} = 1{,}60\\text{ m}$.',
        'Siła tarcia: $T = \\mu mg\\cos 30^\\circ = 0{,}20 \\cdot 1{,}0 \\cdot 10 \\cdot \\frac{\\sqrt{3}}{2} \\approx 1{,}732\\text{ N}$.',
        'Praca siły tarcia (strata energii): $|W_T| = T \\cdot s = 1{,}732 \\cdot 1{,}60 \\approx 2{,}77\\text{ J}$.',
        'Energia kinetyczna u podnóża: $E_k = mgh - |W_T| = 1{,}0 \\cdot 10 \\cdot 0{,}80 - 2{,}77 = 8{,}00 - 2{,}77 \\approx 5{,}23\\text{ J}$.',
      ],
      ckeKey: [
        '1 pkt — wyznaczenie drogi $s = h/\\sin\\alpha$.',
        '1 pkt — poprawny wzór na siłę tarcia $T = \\mu mg\\cos\\alpha$.',
        '1 pkt — zapisanie bilansu energii z pracą tarcia.',
        '1 pkt — poprawny wynik liczbowy z jednostką ($5{,}2\\text{ J}$).',
      ],
    },
    {
      id: 'cke-03-wahadlo-balistyczne',
      source: 'CKE Formuła 2015/2023 • Zderzenie + zasada zachowania energii',
      title: 'Wahadło balistyczne — pocisk uderza w drewniany blok',
      maxPoints: 4,
      difficulty: 'wyzwanie',
      arkuszownikUrl: 'https://arkuszownik.pl',
      svgId: 'svg-03-zderzenie-wektory',
      prompt:
        'Pocisk o masie $m = 10\\text{ g}$ lecący poziomo z prędkością $v = 400\\text{ m/s}$ wbija się w spoczywający na nici worek z piaskiem o masie $M = 1{,}99\\text{ kg}$ i pozostaje w nim. Oblicz maksymalną wysokość $h$, na jaką wzniesie się worek z pociskiem ($g = 10\\text{ m/s}^2$).',
      expectedValue: 0.2,
      tolerance: 0.02,
      unit: 'm',
      hint: 'Uwaga! Podczas wbijania się pocisku energia NIE jest zachowana (zderzenie niesprężyste) — najpierw użyj ZZP do znalezienia prędkości $u$ po zderzeniu, a dopiero potem ZZE dla ruchu wahadła.',
      solutionSteps: [
        'Etap 1 (zderzenie — tylko ZZP): $mv = (m + M)u \\Rightarrow u = \\frac{0{,}01 \\cdot 400}{0{,}01 + 1{,}99} = \\frac{4}{2} = 2{,}0\\text{ m/s}$.',
        'Etap 2 (wznoszenie wahadła — ZZE): $\\frac{1}{2}(m+M)u^2 = (m+M)gh$.',
        'Skąd $h = \\frac{u^2}{2g} = \\frac{2{,}0^2}{2 \\cdot 10} = 0{,}20\\text{ m}$ ($20\\text{ cm}$).',
      ],
      ckeKey: [
        '1 pkt — rozdzielenie procesu na dwa etapy (zderzenie z ZZP, wznoszenie z ZZE).',
        '1 pkt — obliczenie prędkości wspólnej $u = 2{,}0\\text{ m/s}$.',
        '1 pkt — zapisanie zasady zachowania energii dla etapu po zderzeniu.',
        '1 pkt — poprawny wynik $h = 0{,}20\\text{ m}$.',
      ],
    },
  ],
};
