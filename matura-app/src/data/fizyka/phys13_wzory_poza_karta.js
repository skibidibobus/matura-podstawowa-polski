export const phys13WzoryPozaKarta = {
  id: 'phys-13',
  displayNum: 13,
  code: 'DZIAŁ 13',
  title: 'Wzory Spoza Karty Wzorów CKE (Niezbędnik 100%)',
  subtitle: 'Wszystkie realnie przydatne wzory i zależności, których nie ma w Karcie Wzorów CKE, a oszczędzają czas i punkty na maturze',
  duration: '4–5 h (Powtórka końcowa)',
  xp: 300,
  notes: [
    {
      id: 'pn13-1',
      title: 'Kinematyka i rzuty — wzory skrócone',
      badge: 'Dział 2 • Bezpośrednio do zadań',
      intro:
        'W Karcie Wzorów CKE znajdziesz tylko podstawowe równania $v(t)$ i $x(t)$. Poniższe wzory pojawiają się na maturze co roku — część warto znać z pamięci do testów, a w zadaniach otwartych umieć je w 2 linijkach wyprowadzić.',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Ruch zmienny bez czasu: $v^2 - v_0^2 = 2as$',
              desc: 'Natychmiastowe wyznaczenie prędkości lub drogi hamowania bez liczenia czasu $t$.',
              details: {
                summary: 'Dla hamowania do zera ($v=0$) z opóźnieniem $a$: $s_{\\text{ham}} = \\frac{v_0^2}{2a}$.',
                bullets: [
                  'Spadek swobodny z $v_0 = 0$: $v = \\sqrt{2gh}$.',
                  'Dwukrotny wzrost prędkości to **czterokrotny** wzrost drogi hamowania!',
                ],
                essayUse: 'W zadaniu otwartym dopisz jedno zdanie: „Z połączenia równań ruchu (lub bilansu pracy i energii) wynika $v^2 - v_0^2 = 2as$”.',
              },
            },
            {
              term: 'Rzut ukośny (z poziomu $0$): $H_{\\max}, Z, t_c$',
              desc: '$t_c = \\frac{2v_0\\sin\\alpha}{g}$, $H_{\\max} = \\frac{v_0^2\\sin^2\\alpha}{2g}$, $Z = \\frac{v_0^2\\sin(2\\alpha)}{g}$',
              details: {
                summary: 'Uwaga: te 3 wzory działają WYŁĄCZNIE wtedy, gdy ciało spada na ten sam poziom, z którego wystartowało!',
                bullets: [
                  'Maksymalny zasięg na płaskim terenie: $\\alpha = 45^\\circ$ ($\\sin 90^\\circ = 1$).',
                  'Te same zasięgi dają kąty dopełniające się do $90^\\circ$ (np. $30^\\circ$ i $60^\\circ$).',
                ],
              },
            },
            {
              term: 'Średnia szybkość na dwóch równych odcinkach',
              desc: '$v_{\\text{śr}} = \\frac{2 v_1 v_2}{v_1 + v_2}$ (średnia harmoniczna, NIE arytmetyczna!)',
              details: {
                summary: 'Działa, gdy ciało pokonuje dwie RÓWNE drogi z różnymi prędkościami $v_1$ i $v_2$.',
                bullets: [
                  'Gdy równe są CZASY jazdy ($t_1 = t_2$), wtedy działa średnia arytmetyczna: $v_{\\text{śr}} = \\frac{v_1 + v_2}{2}$.',
                ],
              },
            },
            {
              term: 'Prawo Galileusza (kolejne sekundy z $v_0 = 0$)',
              desc: 'Drogi w kolejnych równych odstępach czasu mają się jak $1 : 3 : 5 : 7 : \\dots : (2n-1)$',
              details: {
                summary: 'Droga w $n$-tej sekundzie: $s_n = \\frac{1}{2}a(2n-1)\\cdot (1\\text{ s})^2$.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'pn13-2',
      title: 'Dynamika, bryła sztywna i grawitacja',
      badge: 'Działy 3–5 • Zderzenia, równia, orbity',
      intro:
        'W Karcie Wzorów CKE nie ma gotowych wzorów na zderzenia sprężyste, maszynę Atwooda, prędkość staczania brył ani energię całkowitą na orbicie.',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Równia pochyła z tarciem',
              desc: '$a = g(\\sin\\alpha - \\mu\\cos\\alpha)$; warunek ruszenia: $\\operatorname{tg}\\alpha > \\mu_s$',
              details: {
                summary: 'Przy ruchu jednostajnym w dół równi ($a = 0$): $\\mu_k = \\operatorname{tg}\\alpha$.',
                bullets: [
                  'Przy wjeżdżaniu w górę równi tarcie i grawitacja hamują razem: $a = -g(\\sin\\alpha + \\mu\\cos\\alpha)$.',
                ],
              },
            },
            {
              term: 'Maszyna Atwooda i układ z bloczkiem',
              desc: 'Atwood: $a = \\frac{m_2 - m_1}{m_1 + m_2}g$, $N_n = \\frac{2m_1 m_2}{m_1 + m_2}g$',
              details: {
                summary: 'Dla klocka na gładkim stole ($m_1$) i wiszącego ($m_2$): $a = \\frac{m_2}{m_1 + m_2}g$, $N_n = \\frac{m_1 m_2}{m_1 + m_2}g$.',
              },
            },
            {
              term: 'Zderzenie centralne sprężyste ($v_2 = 0$)',
              desc: '$u_1 = \\frac{m_1 - m_2}{m_1 + m_2}v_1$, $u_2 = \\frac{2m_1}{m_1 + m_2}v_1$',
              details: {
                summary: 'Gdy $m_1 = m_2$, ciała wymieniają się prędkościami ($u_1 = 0, u_2 = v_1$).',
                bullets: [
                  'W zderzeniu całkowicie niesprężystym strata energii wynosi $\\Delta E_k = \\frac{1}{2}\\frac{m_1 m_2}{m_1 + m_2}(v_1 - v_2)^2$.',
                ],
              },
            },
            {
              term: 'Toczenie bez poślizgu bryły ($I = c\\cdot mR^2$)',
              desc: '$a = \\frac{g\\sin\\alpha}{1 + c}$ oraz $v = \\sqrt{\\frac{2gh}{1 + c}}$',
              details: {
                summary: 'Współczynnik $c$: kula pełna $2/5$, walec pełny $1/2$, obręcz $1$.',
                bullets: [
                  'Kula: $v = \\sqrt{\\frac{10}{7}gh}$; Walec: $v = \\sqrt{\\frac{4}{3}gh}$; Obręcz: $v = \\sqrt{gh}$.',
                ],
              },
            },
            {
              term: 'Energia i prędkości na orbicie kołowej',
              desc: '$E_c = -\\frac{GMm}{2r} = -E_k = \\frac{1}{2}E_p$ oraz $v_{II} = \\sqrt{2}\\,v_I$',
              details: {
                summary: 'Gęstość planety z okresu niskiego satelity ($r \\approx R$): $\\rho = \\frac{3\\pi}{G T^2}$.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'pn13-3',
      title: 'Drgania, fale, hydrostatyka i termodynamika',
      badge: 'Działy 6–7 • Piszczałki, sprężyny, gazy',
      intro:
        'Kilka prostych zależności z drgań, akustyki i termodynamiki pozwala rozwiązać zadania testowe w 15 sekund bez długich przekształceń.',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Sprężyny szeregowo / równolegle i wydłużenie statyczne',
              desc: 'Równolegle: $k_z = k_1 + k_2$; Szeregowo: $\\frac{1}{k_z} = \\frac{1}{k_1} + \\frac{1}{k_2}$; $T = 2\\pi\\sqrt{\\frac{\\Delta l}{g}}$',
              details: {
                summary: 'Przecięcie sprężyny na $n$ równych części zwiększa stałą $k$ każdej części $n$-krotnie!',
              },
            },
            {
              term: 'Piszczałki otwarte i zamknięte',
              desc: 'Otwarta: $f_n = n\\frac{v}{2L}$ ($n=1,2,3\\dots$); Zamknięta: $f_n = (2n-1)\\frac{v}{4L}$',
              details: {
                summary: 'W piszczałce jednostronnie zamkniętej przy dnie jest WĘZEŁ, a u wylotu STRZAŁKA — powstają tylko nieparzyste harmoniczne ($1, 3, 5\\dots$).',
              },
            },
            {
              term: 'Pływanie ciał i gęstość gazu',
              desc: '$\\frac{V_{\\text{zan}}}{V_c} = \\frac{\\rho_c}{\\rho_{\\text{cieczy}}}$ oraz $\\rho_{\\text{gazu}} = \\frac{pM}{RT}$',
              details: {
                summary: 'Wzór $\\rho = \\frac{pM}{RT}$ wynika wprost z $pV = \\frac{m}{M}RT$ — idealny do porównywania gęstości gazów.',
              },
            },
            {
              term: 'Ciepło molowe i przemiana izobaryczna',
              desc: 'Gaz 1-atomowy: $C_V = \\frac{3}{2}R$, $C_p = \\frac{5}{2}R$, $Q_p = \\frac{5}{2}nR\\Delta T$',
              details: {
                summary: 'W przemianie izobarycznej gazu jednoatomowego aż $40\\%$ dostarczonego ciepła idzie na pracę ($\\frac{2}{5}$), a $60\\%$ na wzrost $U$ ($\\frac{3}{5}$)!',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'pn13-4',
      title: 'Elektryczność, magnetyzm, optyka i fizyka współczesna',
      badge: 'Działy 8–12 • Szybkie przeliczniki CKE',
      intro:
        'Te wzory i stałe (szczególnie $hc \\approx 1240\\text{ eV}\\cdot\\text{nm}$) to prawdziwy „cheat code” w drugiej połowie arkusza maturalnego.',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Prąd stały: moc maks., bocznik i posobnik',
              desc: '$P_{\\max} = \\frac{\\mathcal{E}^2}{4r}$ (gdy $R=r$); bocznik $R_b = \\frac{R_A}{n-1}$; posobnik $R_p = (n-1)R_V$',
              details: {
                summary: '$n$ oznacza krotność zwiększenia zakresu miernika (np. $10$-krotne zwiększenie zakresu amperomierza: $R_b = R_A / 9$).',
              },
            },
            {
              term: 'Indukcja: pręt na szynach i ładunek $\\Delta q$',
              desc: '$\\mathcal{E} = Blv$, $F_{\\text{ham}} = \\frac{B^2 l^2 v}{R}$, $\\Delta q = \\frac{|\\Delta\\Phi|}{R}$',
              details: {
                summary: 'Ładunek $\\Delta q$ zależy TYLKO od całkowitej zmiany strumienia $\\Delta\\Phi$ i oporu $R$ — nie zależy od czasu ani prędkości obrotu!',
              },
            },
            {
              term: 'Optyka: układ soczewek i powiększenie z ogniskowej',
              desc: '$Z = Z_1 + Z_2 \\Rightarrow \\frac{1}{f} = \\frac{1}{f_1} + \\frac{1}{f_2}$; $p = \\frac{f}{x - f}$ (rzeczywisty)',
              details: {
                summary: 'Metoda Bessela (dwa położenia soczewki odległe o $d$ między przedmiotem a ekranem w odległości $D$): $f = \\frac{D^2 - d^2}{4D}$.',
              },
            },
            {
              term: 'Kwantowa i jądrowa: $hc \\approx 1240\\text{ eV}\\cdot\\text{nm}$',
              desc: '$E_f\\,[\\text{eV}] \\approx \\frac{1240}{\\lambda\\,[\\text{nm}]}$; $E_n = \\frac{-13{,}6\\text{ eV}}{n^2}$; $1\\text{ u}\\cdot c^2 \\approx 931{,}5\\text{ MeV}$',
              details: {
                summary: 'Wyliczenie energii fotonu dla $\\lambda = 400\\text{ nm}$: $1240 / 400 = 3{,}10\\text{ eV}$ w 2 sekundy!',
                bullets: [
                  'Aktywność źródła: $A = \\lambda N = \\frac{\\ln 2}{T_{1/2}} N$ ($\\ln 2 \\approx 0{,}693$).',
                ],
              },
            },
          ],
        },
        {
          type: 'callout',
          variant: 'amber',
          title: 'Zasada CKE w zadaniach otwartych',
          items: [
            'W zadaniach zamkniętych (testowych) możesz od razu użyć dowolnego z powyższych wzorów.',
            'W zadaniach **otwartych za 3–5 pkt** egzaminator CKE wymaga pokazania punktu wyjścia z Karty Wzorów (np. $G\\frac{Mm}{r^2} = \\frac{mv^2}{r}$, a dopiero potem $v_I = \\sqrt{\\frac{GM}{r}}$). Traktuj te wzory jako mapę celu i błyskawiczne sprawdzenie wyniku!',
          ],
        },
      ],
    },
  ],
  flashcards: [
    { id: 'pf13-1', front: 'Wzór bez czasu w ruchu jednostajnie zmiennym prostoliniowym:', back: '$v^2 - v_0^2 = 2as$', category: 'wzor' },
    { id: 'pf13-2', front: 'Średnia szybkość przy dwóch RÓWNYCH odcinkach drogi ($v_1, v_2$):', back: '$v_{\\text{śr}} = \\frac{2v_1 v_2}{v_1 + v_2}$', category: 'wzor' },
    { id: 'pf13-3', front: 'Przyspieszenie i prędkość staczania bez poślizgu ($I = c\\cdot mR^2$):', back: '$a = \\frac{g\\sin\\alpha}{1+c}$, $v = \\sqrt{\\frac{2gh}{1+c}}$', category: 'wzor' },
    { id: 'pf13-4', front: 'Gęstość planety z okresu satelity na bardzo niskiej orbicie ($r\\approx R$):', back: '$\\rho = \\frac{3\\pi}{G T^2}$', category: 'wzor' },
    { id: 'pf13-5', front: 'Częstotliwości harmonicznych w piszczałce jednostronnie zamkniętej:', back: '$f_n = (2n - 1)\\frac{v}{4L}$ (wyłącznie nieparzyste wielokrotności tonu podstawowego!)', category: 'wzor' },
    { id: 'pf13-6', front: 'Gęstość gazu doskonałego z równania Clapeyrona:', back: '$\\rho = \\frac{p M}{R T}$', category: 'wzor' },
    { id: 'pf13-7', front: 'Maksymalna moc wydzielana na odbiorniku $R$ przy źródle $(\\mathcal{E}, r)$:', back: '$P_{\\max} = \\frac{\\mathcal{E}^2}{4r}$ (osiągana dla $R = r$)', category: 'wzor' },
    { id: 'pf13-8', front: 'Całkowity ładunek przepływający w obwodzie przy zmianie strumienia $\\Delta\\Phi$:', back: '$\\Delta q = \\frac{|\\Delta\\Phi|}{R}$', category: 'wzor' },
    { id: 'pf13-9', front: 'Ogniskowa układu dwóch stykających się cienkich soczewek:', back: '$\\frac{1}{f} = \\frac{1}{f_1} + \\frac{1}{f_2}$ ($Z = Z_1 + Z_2$)', category: 'wzor' },
    { id: 'pf13-10', front: 'Szybki przelicznik energii fotonu z długości fali $\\lambda$ w nanometrach:', back: '$E\\,[\\text{eV}] \\approx \\frac{1240}{\\lambda\\,[\\text{nm}]}$', category: 'jednostka' },
    { id: 'pf13-11', front: 'Poziomy energetyczne elektronu w atomie wodoru (model Bohra):', back: '$E_n = \\frac{-13{,}6\\text{ eV}}{n^2}$', category: 'wzor' },
    { id: 'pf13-12', front: 'Stała rozpadu promieniotwórczego $\\lambda$ a czas połowicznego rozpadu $T_{1/2}$:', back: '$\\lambda = \\frac{\\ln 2}{T_{1/2}} \\approx \\frac{0{,}693}{T_{1/2}}$', category: 'wzor' },
  ],
  quiz: [
    {
      id: 'pq13-1',
      q: 'Sprężynę o stałej sprężystości $k$ przecięto na $3$ równe części. Stała sprężystości jednej takiej części wynosi:',
      options: ['$k/3$', '$k$', '$3k$', '$9k$'],
      correct: 2,
      explanation: 'Krótsza sprężyna jest sztywniejsza — pod tą samą siłą wydłuży się $3$ razy mniej, więc jej stała $k$ rośnie $3$ razy ($3k$).',
    },
    {
      id: 'pq13-2',
      q: 'Amperomierz o oporze $R_A = 18\\,\\Omega$ chcemy przystosować do pomiaru prądów $10$ razy większych. Jaki bocznik $R_b$ należy wpiąć równolegle?',
      options: ['$1{,}8\\,\\Omega$', '$2{,}0\\,\\Omega$', '$162\\,\\Omega$', '$20\\,\\Omega$'],
      correct: 1,
      explanation: 'Ze wzoru $R_b = \\frac{R_A}{n - 1} = \\frac{18}{10 - 1} = 2{,}0\\,\\Omega$.',
    },
    {
      id: 'pq13-3',
      q: 'Piszczałka jednostronnie zamknięta wydaje ton podstawowy o częstotliwości $100\\text{ Hz}$. Która z poniższych częstotliwości NIE może powstać w tej piszczałce jako wyższa harmoniczna?',
      options: ['$300\\text{ Hz}$', '$500\\text{ Hz}$', '$200\\text{ Hz}$', '$700\\text{ Hz}$'],
      correct: 2,
      explanation: 'W piszczałce zamkniętej powstają wyłącznie nieparzyste wielokrotności tonu podstawowego ($100, 300, 500, 700\\dots\\text{ Hz}$).',
    },
    {
      id: 'pq13-4',
      q: 'Dwie cienkie soczewki skupiające o zdolnościach skupiających $Z_1 = +4\\text{ D}$ i $Z_2 = +6\\text{ D}$ złożono ściśle razem. Ogniskowa takiego układu wynosi:',
      options: ['$10\\text{ cm}$', '$25\\text{ cm}$', '$40\\text{ cm}$', '$5\\text{ cm}$'],
      correct: 0,
      explanation: '$Z = Z_1 + Z_2 = 10\\text{ D} \\Rightarrow f = 1/Z = 0{,}10\\text{ m} = 10\\text{ cm}$.',
    },
  ],
  examTasks: [
    {
      id: 'cke-13-1',
      source: 'Trening wzorów spoza Karty • Kinematyka (bez czasu)',
      title: 'Droga hamowania po wzroście prędkości',
      maxPoints: 2,
      difficulty: 'podstawa',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt: 'Samochód hamujący ze stałym opóźnieniem $a = 5{,}0\\text{ m/s}^2$ jedzie z prędkością $v_0 = 25\\text{ m/s}$. Oblicz minimalną drogę hamowania (w metrach).',
      expectedValue: 62.5,
      tolerance: 0.5,
      unit: 'm',
      hint: '$s = \\frac{v_0^2}{2a}$.',
      solutionSteps: ['$s = \\frac{25^2}{2 \\cdot 5{,}0} = \\frac{625}{10} = 62{,}5\\text{ m}$.'],
      ckeKey: ['1 pkt — wzór bez czasu.', '1 pkt — wynik $62{,}5\\text{ m}$.'],
    },
    {
      id: 'cke-13-2',
      source: 'Trening wzorów spoza Karty • Maszyna Atwooda',
      title: 'Przyspieszenie w maszynie Atwooda',
      maxPoints: 2,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt: 'Przez lekki bloczek przerzucono nić z masami $m_1 = 3{,}0\\text{ kg}$ i $m_2 = 5{,}0\\text{ kg}$ ($g = 10\\text{ m/s}^2$). Oblicz przyspieszenie układu.',
      expectedValue: 2.5,
      tolerance: 0.05,
      unit: 'm/s²',
      hint: '$a = \\frac{m_2 - m_1}{m_1 + m_2} g$.',
      solutionSteps: ['$a = \\frac{5{,}0 - 3{,}0}{5{,}0 + 3{,}0} \\cdot 10 = \\frac{2}{8} \\cdot 10 = 2{,}5\\text{ m/s}^2$.'],
      ckeKey: ['1 pkt — wzór Atwooda.', '1 pkt — wynik $2{,}5\\text{ m/s}^2$.'],
    },
    {
      id: 'cke-13-3',
      source: 'Trening wzorów spoza Karty • Zderzenie sprężyste',
      title: 'Prędkość drugiej kuli po zderzeniu sprężystym',
      maxPoints: 2,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt: 'Kula o masie $m_1 = 2{,}0\\text{ kg}$ lecąca z prędkością $v_1 = 9{,}0\\text{ m/s}$ zderza się centralnie sprężyście ze spoczywającą kulą o masie $m_2 = 4{,}0\\text{ kg}$. Oblicz prędkość drugiej kuli po zderzeniu.',
      expectedValue: 6.0,
      tolerance: 0.1,
      unit: 'm/s',
      hint: '$u_2 = \\frac{2m_1}{m_1 + m_2} v_1$.',
      solutionSteps: ['$u_2 = \\frac{2 \\cdot 2{,}0}{2{,}0 + 4{,}0} \\cdot 9{,}0 = \\frac{4}{6} \\cdot 9{,}0 = 6{,}0\\text{ m/s}$.'],
      ckeKey: ['1 pkt — wzór na $u_2$.', '1 pkt — wynik $6{,}0\\text{ m/s}$.'],
    },
    {
      id: 'cke-13-4',
      source: 'Trening wzorów spoza Karty • Rzut ukośny',
      title: 'Zasięg rzutu ukośnego pod kątem 15°',
      maxPoints: 2,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt: 'Pocisk wystrzelono z ziemi z prędkością $v_0 = 20\\text{ m/s}$ pod kątem $\\alpha = 15^\\circ$ ($g = 10\\text{ m/s}^2$). Oblicz zasięg rzutu ($\\sin 30^\\circ = 0{,}50$).',
      expectedValue: 20,
      tolerance: 0.3,
      unit: 'm',
      hint: '$Z = \\frac{v_0^2 \\sin(2\\alpha)}{g}$.',
      solutionSteps: ['$Z = \\frac{20^2 \\cdot \\sin 30^\\circ}{10} = \\frac{400 \\cdot 0{,}5}{10} = 20\\text{ m}$.'],
      ckeKey: ['1 pkt — $Z = v_0^2 \\sin(2\\alpha)/g$.', '1 pkt — wynik $20\\text{ m}$.'],
    },
    {
      id: 'cke-13-5',
      source: 'Trening wzorów spoza Karty • Termodynamika',
      title: 'Gęstość azotu w warunkach normalnych',
      maxPoints: 2,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt: 'Oblicz gęstość azotu ($M = 0{,}028\\text{ kg/mol}$) pod ciśnieniem $p = 1{,}013\\cdot 10^5\\text{ Pa}$ w temperaturze $T = 273\\text{ K}$ ($R = 8{,}31$).',
      expectedValue: 1.25,
      tolerance: 0.03,
      unit: 'kg/m³',
      hint: '$\\rho = \\frac{pM}{RT}$.',
      solutionSteps: ['$\\rho = \\frac{1{,}013\\cdot 10^5 \\cdot 0{,}028}{8{,}31 \\cdot 273} \\approx 1{,}25\\text{ kg/m}^3$.'],
      ckeKey: ['1 pkt — wzór $\\rho = pM/(RT)$.', '1 pkt — wynik $1{,}25\\text{ kg/m}^3$.'],
    },
    {
      id: 'cke-13-6',
      source: 'Trening wzorów spoza Karty • Akustyka',
      title: 'Ton podstawowy piszczałki zamkniętej',
      maxPoints: 2,
      difficulty: 'podstawa',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt: 'Piszczałka jednostronnie zamknięta ma długość $L = 0{,}425\\text{ m}$ ($v_{\\text{dźw}} = 340\\text{ m/s}$). Oblicz częstotliwość jej tonu podstawowego.',
      expectedValue: 200,
      tolerance: 2,
      unit: 'Hz',
      hint: '$f_1 = \\frac{v}{4L}$.',
      solutionSteps: ['$f_1 = \\frac{340}{4 \\cdot 0{,}425} = \\frac{340}{1{,}70} = 200\\text{ Hz}$.'],
      ckeKey: ['1 pkt — $f_1 = v/(4L)$.', '1 pkt — wynik $200\\text{ Hz}$.'],
    },
    {
      id: 'cke-13-7',
      source: 'Trening wzorów spoza Karty • Prąd stały',
      title: 'Posobnik do woltomierza',
      maxPoints: 2,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt: 'Woltomierz o zakresie $10\\text{ V}$ i oporze $R_V = 2000\\,\\Omega$ chcemy przystosować do pomiaru napięć do $50\\text{ V}$. Jaki opór posobnika $R_p$ należy wpiąć szeregowo?',
      expectedValue: 8000,
      tolerance: 50,
      unit: 'Ω',
      hint: '$R_p = (n - 1)R_V$, gdzie $n = 50 / 10 = 5$.',
      solutionSteps: ['$R_p = (5 - 1) \\cdot 2000 = 8000\\,\\Omega$.'],
      ckeKey: ['1 pkt — $R_p = (n-1)R_V$.', '1 pkt — wynik $8000\\,\\Omega$.'],
    },
    {
      id: 'cke-13-8',
      source: 'Trening wzorów spoza Karty • Indukcja EM',
      title: 'Ładunek przy wysunięciu ramki z pola B',
      maxPoints: 2,
      difficulty: 'standard',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt: 'Ramkę o powierzchni $S = 0{,}040\\text{ m}^2$ i oporze $R = 0{,}50\\,\\Omega$ wysunięto z pola $B = 0{,}25\\text{ T}$ (prostopadłego do ramki) poza obszar pola. Oblicz ładunek przepływający przez ramkę (w $\\text{mC}$).',
      expectedValue: 20,
      tolerance: 0.5,
      unit: 'mC',
      hint: '$\\Delta q = \\frac{BS}{R}$.',
      solutionSteps: ['$\\Delta q = \\frac{0{,}25 \\cdot 0{,}040}{0{,}50} = 0{,}020\\text{ C} = 20\\text{ mC}$.'],
      ckeKey: ['1 pkt — $\\Delta q = \\Delta\\Phi/R$.', '1 pkt — wynik $20\\text{ mC}$.'],
    },
    {
      id: 'cke-13-9',
      source: 'Trening wzorów spoza Karty • Optyka',
      title: 'Metoda Bessela wyznaczania ogniskowej',
      maxPoints: 2,
      difficulty: 'wyzwanie',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt: 'Między przedmiotem a ekranem oddalonymi o $D = 100\\text{ cm}$ znaleziono dwa położenia soczewki dające ostry obraz na ekranie, oddalone od siebie o $d = 20\\text{ cm}$. Oblicz ogniskową soczewki (w $\\text{cm}$).',
      expectedValue: 24,
      tolerance: 0.5,
      unit: 'cm',
      hint: '$f = \\frac{D^2 - d^2}{4D}$.',
      solutionSteps: ['$f = \\frac{100^2 - 20^2}{4 \\cdot 100} = \\frac{9600}{400} = 24\\text{ cm}$.'],
      ckeKey: ['1 pkt — wzór Bessela.', '1 pkt — wynik $24\\text{ cm}$.'],
    },
    {
      id: 'cke-13-10',
      source: 'Trening wzorów spoza Karty • Fizyka kwantowa',
      title: 'Energia fotonu dla fali 310 nm ($hc \\approx 1240\\text{ eV}\\cdot\\text{nm}$)',
      maxPoints: 2,
      difficulty: 'podstawa',
      arkuszeUrl: 'https://arkusze.pl/fizyka-matura-poziom-rozszerzony/',
      prompt: 'Oblicz energię fotonu światła ultrafioletowego o długości fali $\\lambda = 310\\text{ nm}$ (w elektronowoltach).',
      expectedValue: 4.0,
      tolerance: 0.1,
      unit: 'eV',
      hint: '$E\\,[\\text{eV}] \\approx \\frac{1240}{\\lambda\\,[\\text{nm}]}$.',
      solutionSteps: ['$E = \\frac{1240}{310} = 4{,}0\\text{ eV}$.'],
      ckeKey: ['1 pkt — przelicznik $1240/\\lambda$.', '1 pkt — wynik $4{,}0\\text{ eV}$.'],
    },
  ],
};
