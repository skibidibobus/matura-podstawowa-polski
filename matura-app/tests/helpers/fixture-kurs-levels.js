/**
 * Canonical CKE Curriculum & Data Layer Reference Fixture for Kurs Główny (10 Departments).
 * Conforms 100% to PROJECT.md interface contracts (lines 52-87) and CKE Formuła 2023 specifications.
 */

export const CANONICAL_KURS_LEVELS = [
  {
    id: 'dept-01',
    displayNum: 1,
    code: 'DZIAŁ 1',
    title: 'Technika Arkusza i Kształcenie Językowe',
    subtitle: 'Notatka syntetyzująca (60–90 słów), stylistyka, błędy językowe i zasady CKE',
    duration: '90 min',
    xp: 200,
    notes: [
      {
        id: 'kn1-1',
        title: 'Notatka syntetyzująca (4 pkt CKE)',
        badge: 'Metodyka CKE',
        intro: 'Notatka syntetyzująca to kluczowe zadanie w części „Język polski w użyciu”. Wymaga zwięzłego podsumowania dwóch tekstów nieliterackich.',
        blocks: [
          {
            type: 'prose',
            heading: 'Zasady oceniania i kryteria CKE',
            paragraphs: [
              'Zadanie polega na sporządzeniu notatki na zadany temat na podstawie dwóch tekstów źródłowych. Limit słów wynosi bezwzględnie 60–90 słów.',
              'Kryteria: Kryterium A (zgodność z tematem i wierność źródłom), Kryterium B (porównanie stanowisk autorów), Kryterium C (synteza własnymi słowami, brak cytatów), Kryterium D (limit 60–90 słów). Uwaga: 0 pkt za treść powoduje automatycznie 0 pkt za poprawność językową (zasada kaskady).',
            ],
          },
          {
            type: 'callout',
            variant: 'amber',
            title: 'Pułapki i błędy formalne w notatce syntetyzującej',
            items: [
              'Tekst liczący 59 słów lub 91 słów traci 1 punkt za niezachowanie limitu.',
              'Zakaz cytowania fragmentów tekstu — wymagana parafraza i uogólnienie.',
              'Zakaz wyrażania własnej opinii i używania 1. osoby l. pojedynczej („uważam”, „moim zdaniem”).',
            ],
          },
          {
            type: 'grid',
            items: [
              {
                term: 'Spójniki syntezy',
                desc: 'Zwroty łączące stanowiska: „O ile autor X podkreśla..., o tyle badacz Y wskazuje na...”, „Obaj autorzy są zgodni, że...”',
                details: {
                  summary: 'Szablon struktury syntetyzującej',
                  bullets: [
                    'Zdanie 1: Wprowadzenie wspólnego tematu obu tekstów.',
                    'Zdanie 2: Przedstawienie tezy i argumentu pierwszego autora.',
                    'Zdanie 3: Przedstawienie tezy drugiego autora (kontrast lub uzupełnienie).',
                    'Zdanie 4: Uogólniający wniosek syntetyzujący.',
                  ],
                  essayUse: 'Kluczowe w części testowej „Język polski w użyciu” (zadanie za 4 punkty).',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'kn1-2',
        title: 'Style funkcjonalne i środki stylistyczne',
        badge: 'Kształcenie językowe',
        blocks: [
          {
            type: 'prose',
            heading: 'Rozpoznawanie stylów wypowiedzi',
            paragraphs: [
              'Wyróżniamy style: artystyczny (metaforyczność, wieloznaczność), naukowy (precyzja, terminologia, zdania złożone), publicystyczny (subiektywizm, apelatywność, ekspresywność), urzędowy (bezosobowość, schematyzm) oraz potoczny (emocjonalizmy, kolokwializmy).',
            ],
          },
          {
            type: 'callout',
            variant: 'emerald',
            title: 'Typowe błędy językowe na maturze',
            items: [
              'Błąd imiesłowowego równoważnika zdania: podmiot zdania głównego musi być wykonawcą czynności imiesłowu na -ąc (np. „Idąc do szkoły, padał deszcz” to błąd).',
              'Pleonazmy i tautologie: „cofać się w tył”, „wzajemna współpraca”, „okres czasu”.',
              'Błędy frazeologiczne: kontaminacje typu „ubrać płaszcz” zamiast „włożyć płaszcz”.',
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'kf1-1',
        front: 'Jaki jest dopuszczalny limit słów w notatce syntetyzującej na maturze podstawowej?',
        back: 'Od 60 do 90 słów (59 słów lub 91 słów oznacza utratę punktu).',
        category: 'Technika arkusza',
      },
      {
        id: 'kf1-2',
        front: 'Na czym polega zasada kaskadowego oceniania notatki syntetyzującej w CKE?',
        back: 'Przyznanie 0 punktów za treść (brak syntezy lub wypowiedź niezgodna z tematem) skutkuje automatycznym przyznaniem 0 punktów za język.',
        category: 'Metodyka CKE',
      },
      {
        id: 'kf1-3',
        front: 'Podaj poprawną formę zdania: „Czytając lekturę, zgasło światło”.',
        back: '„Gdy czytałem lekturę, zgasło światło” lub „Podczas czytania lektury zgasło światło” (błąd imiesłowowego równoważnika zdania).',
        category: 'Gramatyka i stylistyka',
      },
      {
        id: 'kf1-4',
        front: 'Czym różni się styl naukowy od publicystycznego?',
        back: 'Styl naukowy cechuje obiektywizm, precyzyjne terminy i brak emocji; publicystyczny dąży do przekonania odbiorcy i wykorzystuje środki retoryczne.',
        category: 'Kształcenie językowe',
      },
    ],
    quiz: [
      {
        q: 'Która z poniższych wypowiedzi jest bezbłędna pod względem składniowym?',
        options: [
          'Otwierając okno, powiew wiatru przewrócił wazon.',
          'Wracając do domu po zmroku, Jan zauważył otwartą furtkę.',
          'Słuchając wykładu profesora, studentom minęła godzina.',
          'Idąc leśną ścieżką, drzewa szumiały na wietrze.',
        ],
        correct: 1,
        explanation: 'W zdaniu „Wracając do domu po zmroku, Jan zauważył...” podmiot Jan jest wykonawcą obu czynności, co jest warunkiem poprawności imiesłowowego równoważnika na -ąc.',
      },
      {
        q: 'Jaki jest dopuszczalny limit słów w notatce syntetyzującej według informatora CKE?',
        options: [
          '50–80 słów',
          '60–90 słów',
          '70–100 słów',
          'Min. 100 słów',
        ],
        correct: 1,
        explanation: 'Wytyczne CKE ściśle określają przedział 60–90 słów. Praca mająca poniżej 60 lub powyżej 90 słów traci punkt.',
      },
      {
        q: 'Które z poniższych sformułowań jest pleonazmem („masłem maślanym”)?',
        options: [
          'Precyzyjna definicja pojęcia',
          'Cofać się do tyłu',
          'Współczesna literatura piękna',
          'Konstruktywna dyskusja naukowa',
        ],
        correct: 1,
        explanation: '„Cofać się do tyłu” to pleonazm, ponieważ czasownik cofać z definicji oznacza ruch w tył.',
      },
      {
        q: 'Co oznacza zasada kaskadowego oceniania notatki syntetyzującej w kryteriach CKE?',
        options: [
          'Ocena za styl zależy od liczby użytych cytatów z tekstu.',
          'Uzyskanie 0 punktów za treść powoduje automatyczne przyznanie 0 punktów za język i spójność.',
          'Długość tekstu determinuje liczbę punktów za ortografię.',
          'Egzaminator odejmuje punkty za każde powtórzenie leksemów.',
        ],
        correct: 1,
        explanation: 'Według kryteriów CKE, jeśli notatka otrzyma 0 pkt za treść (Kryteria A, B lub C), za spójność i poprawność językową przyznaje się 0 pkt.',
      },
    ],
  },
  {
    id: 'dept-02',
    displayNum: 2,
    code: 'DZIAŁ 2',
    title: 'Antyk i Średniowiecze',
    subtitle: 'Biblia, Mitologia, Antygona, Bogurodzica, Lament świętokrzyski, Rozmowa Mistrza Polikarpa',
    duration: '90 min',
    xp: 200,
    notes: [
      {
        id: 'kn2-1',
        title: 'Antygona Sofoklesa i tragizm grecki',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Istota konfliktu tragicznego',
            paragraphs: [
              'Antygona ucieleśnia konflikt tragiczny: zderzenie dwóch równorzędnych racji, prawa boskiego (reprezentowanego przez Antygonę) oraz prawa ludzkiego/państwowego (Kreon).',
              'Każdy wybór bohatera tragicznego prowadzi do katastrofy. Bohater obarczony jest winą tragiczną (hamartia) wynikającą z błędnego rozpoznania sytuacji i pychy (hybris).',
            ],
          },
          {
            type: 'callout',
            variant: 'amber',
            title: 'Uwaga na błąd kardynalny w Antygonie',
            items: [
              'Kreon nie był mężem Antygony ani jej ojcem — był jej wujem i władcą Teb.',
              'Antygona nie została ścięta ani powieszona przez Kreona — zamurowano ją w grobowcu, gdzie popełniła samobójstwo.',
            ],
          },
        ],
      },
      {
        id: 'kn2-2',
        title: 'Biblia i toposy uniwersalne',
        badge: 'Kanon lektur',
        blocks: [
          {
            type: 'prose',
            heading: 'Księga Hioba i Księga Koheleta',
            paragraphs: [
              'Księga Hioba to fundamentalny tekst o niezawinionym cierpieniu (teodycea). Hiob zachowuje wiarę mimo utraty majątku, dzieci i zdrowia.',
              'Księga Koheleta wprowadza topos vanitas („Marność nad marnościami i wszystko marność”), wskazując na ulotność dóbr doczesnych.',
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'kf2-1',
        front: 'Co oznacza pojęcie hybris w tragedii antycznej?',
        back: 'Pycha, zuchwalstwo bohatera wobec bogów i praw boskich, prowadząca do katastrofy.',
        category: 'Antyk',
      },
      {
        id: 'kf2-2',
        front: 'Na czym polegał konflikt tragiczny w Antygonie Sofoklesa?',
        back: 'Zderzenie praw boskich (obowiązek pochówku brata Polinika) z prawem stanowionym przez władcę Kreona.',
        category: 'Antyk',
      },
      {
        id: 'kf2-3',
        front: 'Który topos biblijny wyraża cytat: „Vanitas vanitatum et omnia vanitas”?',
        back: 'Topos marności doczesnego świata z Księgi Koheleta.',
        category: 'Biblia',
      },
      {
        id: 'kf2-4',
        front: 'Jakie dwa wzorce parenetyczne dominują w średniowieczu?',
        back: 'Wzorzec rycerza chrześcijańskiego (Pieśń o Rolandzie) oraz świętego ascety (Legenda o św. Aleksym).',
        category: 'Średniowiecze',
      },
    ],
    quiz: [
      {
        q: 'Kto w Antygonie Sofoklesa reprezentuje prawo boskie?',
        options: ['Kreon', 'Antygona', 'Hajmon', 'Ismena'],
        correct: 1,
        explanation: 'Antygona broni prawa boskiego nakazującego pochowanie zmarłego krewnego (Polinika) wbrew edyktowi Kreona.',
      },
      {
        q: 'Z której księgi biblijnej pochodzi refleksja o motywie vanitas („Marność nad marnościami”)?',
        options: ['Księga Hioba', 'Księga Koheleta', 'Pieśń nad Pieśniami', 'Apokalipsa św. Jana'],
        correct: 1,
        explanation: 'Słynne słowa „Vanitas vanitatum et omnia vanitas” otwierają Księgę Koheleta (Ekklezjastes).',
      },
      {
        q: 'Który utwór średniowieczny przedstawia motyw tańca śmierci (danse macabre)?',
        options: ['Bogurodzica', 'Lament świętokrzyski', 'Rozmowa Mistrza Polikarpa ze Śmiercią', 'Kronika Galla Anonima'],
        correct: 2,
        explanation: 'Rozmowa Mistrza Polikarpa ze Śmiercią ukazuje Śmierć z kosą, przed którą wszyscy ludzie bez względu na stan społeczny są równi.',
      },
      {
        q: 'Co w tragedii greckiej oznacza pojęcie katharsis?',
        options: [
          'Rozpoznanie prawdy przez bohatera',
          'Oczyszczenie emocjonalne widza przez litość i trwogę',
          'Pychę bohatera wobec wyroków boskich',
          'Ślepe fatum ciążące nad rodem',
        ],
        correct: 1,
        explanation: 'Katharsis wg Arystotelesa to oczyszczenie uczuć widza poprzez przeżycie litości i trwogi (eleos i phobos).',
      },
    ],
  },
  {
    id: 'dept-03',
    displayNum: 3,
    code: 'DZIAŁ 3',
    title: 'Renesans i Barok',
    subtitle: 'Kochanowski (Pieśni, Treny), Makbet, Skąpiec, poezja barokowa (Morsztyn, Naborowski)',
    duration: '90 min',
    xp: 200,
    notes: [
      {
        id: 'kn3-1',
        title: 'Jan Kochanowski — Pieśni i Treny',
        badge: 'Renesans',
        blocks: [
          {
            type: 'prose',
            heading: 'Kryzys światopoglądowy i jego przezwyciężenie w Trenach',
            paragraphs: [
              'Treny to cykl 19 utworów dedykowanych zmarłej córce Urszuli. Stanowią zapis kryzysu humanizmu stoickiego poety.',
              'W Trenach IX, X i XI Kochanowski wątpi w mądrość, cnotę i nagrodę wieczną. Zwieńczeniem cyklu jest Tren XIX (Sen), gdzie matka poety przynosi pocieszenie i nakaz: „Ludzkie przygody po ludzku znoś”.',
            ],
          },
        ],
      },
      {
        id: 'kn3-2',
        title: 'Makbet Williama Szekspira — anatomia zbrodni',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Mechanizm zbrodni i degrengolada moralna',
            paragraphs: [
              'Tragedia Makbeta to studium niszczącej żądzy władzy i tyranii. Przepowiednia czarownic i namowa Lady Makbet uruchamiają lawinę morderstw (Dunkan, Banko, rodzina Makdufa).',
            ],
          },
          {
            type: 'callout',
            variant: 'amber',
            title: 'Pułapki błędu kardynalnego w Makbecie',
            items: [
              'Makbet nie zabił Malkolma — Malkolm był synem Dunkana i prawowitym następcą, który obalił Makbeta.',
              'Lady Makbet zmarła z powodu obłędu i wyrzutów sumienia (prawdopodobnie samobójstwo), nie zginęła w bitwie.',
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'kf3-1',
        front: 'Jaka sentencja podsumowuje przesłanie Trenu XIX (Sen) Jana Kochanowskiego?',
        back: '„Ludzkie przygody ludzku znoś” (nakaz zachowania godności w obliczu cierpienia).',
        category: 'Renesans',
      },
      {
        id: 'kf3-2',
        front: 'Kto przepowiada Makbetowi, że nie pokona go nikt zrodzony z kobiety?',
        back: 'Trzy wiedźmy / zjawiska (aparycje) wywołane przez Hekate.',
        category: 'Dramat szekspirowski',
      },
      {
        id: 'kf3-3',
        front: 'Czym jest koncept w poezji barokowej (marinizm)?',
        back: 'Niezwykły, zaskakujący pomysł kompozycyjny oparty na kontraście, paradoksie lub oksymoronie (np. Jan Andrzej Morsztyn).',
        category: 'Barok',
      },
      {
        id: 'kf3-4',
        front: 'Jaka wada ludzka jest przedmiotem satyry w Skąpcu Moliera?',
        back: 'Chorobliwe skąpstwo (Harpagon) podporządkowujące sobie relacje rodzinne i miłość.',
        category: 'Barok / Klasycyzm',
      },
    ],
    quiz: [
      {
        q: 'Który utwór Kochanowskiego przynosi rozwiązanie kryzysu światopoglądowego w cyklu Trenów?',
        options: ['Tren IX', 'Tren X', 'Tren XI', 'Tren XIX (Sen)'],
        correct: 3,
        explanation: 'Tren XIX ukazuje ukazanie się matki poety z Urszulką na ręku i niesie ukojenie: „Ludzkie przygody ludzku znoś”.',
      },
      {
        q: 'Kto ostatecznie zabija Makbeta w decydującym starciu pod Dunzynanem?',
        options: ['Banko', 'Makduf', 'Malkolm', 'Dunkan'],
        correct: 1,
        explanation: 'Makduf zabija Makbeta, gdyż urodził się przez cesarskie cięcie („nie był zrodzony z niewiasty w sposób naturalny”).',
      },
      {
        q: 'Który polski poeta barokowy jest autorem wiersza „Do trupa” opartego na koncepcie porównania zakochanego ze zmarłym?',
        options: ['Daniel Naborowski', 'Jan Andrzej Morsztyn', 'Wacław Potocki', 'Mikołaj Sęp Szarzyński'],
        correct: 1,
        explanation: 'Jan Andrzej Morsztyn napisał słynny sonet „Do trupa”, w którym zakochany cierpi męki miłości gorsze niż spokój zmarłego.',
      },
      {
        q: 'Jak miał na imię tytułowy skąpiec w komedii Moliera?',
        options: ['Kleant', 'Harpagon', 'Walery', 'Anzelm'],
        correct: 1,
        explanation: 'Harpagon to tytułowy bohater „Skąpca” Moliera, paranoicznie chroniący swoją szkatułkę.',
      },
    ],
  },
  {
    id: 'dept-04',
    displayNum: 4,
    code: 'DZIAŁ 4',
    title: 'Oświecenie i Romantyzm',
    subtitle: 'Krasicki, Dziady cz. III, Kordian, Pan Tadeusz, mesjanizm i winkelriedyzm',
    duration: '90 min',
    xp: 200,
    notes: [
      {
        id: 'kn4-1',
        title: 'Dziady cz. III Adama Mickiewicza — dramat narodowy',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Wielka Improwizacja i Widzenie księdza Piotra',
            paragraphs: [
              'Konrad w Wielkiej Improwizacji buntuje się przeciw Bogu w imię miłości do ojczyzny (prometeizm). Żąda władzy nad duszami, zarzucając Bogu brak miłości.',
              'Przeciwwagą dla pychy Konrada jest pokorne Widzenie księdza Piotra, w którym sformułowano ideę mesjanizmu narodowego: Polska jako „Chrystus narodów”.',
            ],
          },
          {
            type: 'callout',
            variant: 'amber',
            title: 'Kardynalne pułapki w Dziadach cz. III',
            items: [
              'Konrad nie wypowiada słowa „Car” — mdleje, a słowo dopowiada diabeł.',
              'Bohaterem narodowym w celi jest Konrad, nie Gustaw (przemiana dokonuje się w Prologu: Gustavus obiit, natus est Conradus).',
            ],
          },
        ],
      },
      {
        id: 'kn4-2',
        title: 'Kordian Juliusza Słowackiego — winkelriedyzm',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Monolog na Mont Blanc i spisek koronacyjny',
            paragraphs: [
              'Na szczycie Mont Blanc Kordian odrzuca postawę biernego cierpienia i ogłasza hasło: „Polska Winkelriedem narodów!” — idea czynnej walki i poświęcenia za wolność innych.',
              'W scenie spisku koronacyjnego Kordian decyduje się samotnie zabić cara, lecz pod sypialnią cara ulega Strachowi i Imaginacji.',
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'kf4-1',
        front: 'Czym różni się mesjanizm Mickiewicza od winkelriedyzmu Słowackiego?',
        back: 'Mesjanizm (Dziady III) zakłada cierpienie Polski jako Chrystusa narodów; Winkelriedyzm (Kordian) zakłada czynny, zbrojny opór i poświęcenie w walce.',
        category: 'Romantyzm',
      },
      {
        id: 'kf4-2',
        front: 'W którym momencie Gustaw z Dziadów staje się Konradem?',
        back: 'W Prologu Dziadów cz. III na ścianie celi klasztornej Bazylianów w Wilnie.',
        category: 'Romantyzm',
      },
      {
        id: 'kf4-3',
        front: 'Kto napisał bajki „Kruk i lis” oraz satyrę „Do króla”?',
        back: 'Ignacy Krasicki (biskup warmiński, „książę poetów polskich” epoki oświecenia).',
        category: 'Oświecenie',
      },
      {
        id: 'kf4-4',
        front: 'Jaka postać uosabia w Panu Tadeuszu motyw winy i patriotycznej rehabilitacji?',
        back: 'Jacek Soplica (ksiądz Robak) — z zabójcy Stolnika staje się emisariuszem niepodległościowym.',
        category: 'Romantyzm',
      },
    ],
    quiz: [
      {
        q: 'Które hasło wypowiada Kordian na szczycie Mont Blanc?',
        options: [
          '„Polska Chrystusem narodów!”',
          '„Polska Winkelriedem narodów!”',
          '„Miej serce i patrzaj w serce!”',
          '„Ciemno wszędzie, głucho wszędzie!”',
        ],
        correct: 1,
        explanation: 'Kordian na Mont Blanc proklamuje ideę winkelriedyzmu: „Polska Winkelriedem narodów!”, przeciwstawiając czyn zbrojny bierności mesjanizmu.',
      },
      {
        q: 'Kto w Dziadach cz. III wypowiada Wielką Improwizację?',
        options: ['Ksiądz Piotr', 'Konrad', 'Senator Nowosilcow', 'Rollison'],
        correct: 1,
        explanation: 'Konrad wygłasza Wielką Improwizację w scenie II Dziadów cz. III, buntując się przeciw Bogu.',
      },
      {
        q: 'Kim okazuje się ksiądz Robak w Panu Tadeuszu?',
        options: ['Gerwazym Rębajłą', 'Tadeuszem Soplicą', 'Jackiem Soplicą', 'Hrabią Horeszką'],
        correct: 2,
        explanation: 'Ksiądz Robak to Jacek Soplica, który po zabójstwie Stolnika wstąpił do zakonu bernardynów i walczył za ojczyznę jako emisariusz.',
      },
      {
        q: 'Czego dotyczy satyra Ignacego Krasickiego „Do króla”?',
        options: [
          'Rzeczywistych wad Stanisława Augusta Poniatowskiego',
          'Pozornych wad króla, będących w istocie kpiną z ciemnoty sarmackiej szlachty',
          'Pochwały polityki carycy Katarzyny II',
          'Krytyki francuskich mód w Warszawie',
        ],
        correct: 1,
        explanation: 'W satyrze „Do króla” Krasicki z pozycji obskuranckiego szlachcica zarzuca królowi, że jest za młody, wykształcony i nie jest cudzoziemcem, co demaskuje głupotę szlachty.',
      },
    ],
  },
  {
    id: 'dept-05',
    displayNum: 5,
    code: 'DZIAŁ 5',
    title: 'Pozytywizm i Realizm',
    subtitle: 'Lalka, Zbrodnia i kara, praca organiczna i praca u podstaw, idealizm i rozczarowanie',
    duration: '90 min',
    xp: 200,
    notes: [
      {
        id: 'kn5-1',
        title: 'Lalka Bolesława Prusa — panorama Warszawy i dramat Wokulskiego',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Trzy pokolenia idealistów i dualizm Wokulskiego',
            paragraphs: [
              'Stanisław Wokulski łączy cechy romantyka (namiętna, destrukcyjna miłość do Izabeli Łęckiej) i pozytywisty (scjentyzm, praca organiczna, inwestycje w Powiśle).',
              'Powieść ukazuje trzy pokolenia idealistów: Rzecki (romantyk, kult Napoleona), Wokulski (epoka przejściowa), Ochocki (scjentysta, poświęcenie nauce).',
            ],
          },
          {
            type: 'callout',
            variant: 'amber',
            title: 'Kardynalna pułapka w Lalce',
            items: [
              'Wokulski nie zbankrutował — jego majątek powiększył się w wyniku handlu na wojnie w Bułgarii.',
              'Pojedynek Wokulskiego z baronem Krzeszowskim zakończył się zranieniem barona w twarz, nie jego śmiercią.',
            ],
          },
        ],
      },
      {
        id: 'kn5-2',
        title: 'Zbrodnia i kara Fiodora Dostojewskiego — studium psychologiczne winy',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Teoria jednostek wybitnych i zmartwychwstanie moralne',
            paragraphs: [
              'Raskolnikow podzielił ludzkość na ludzi zwykłych („wszy”) i niezwykłych („napoleonów”), którym wolno przekraczać normy moralne.',
              'Przemiana Raskolnikowa dokonuje się na Syberii dzięki ewangelicznej miłości Soni Marmieładowej i czytaniu fragmentu o wskrzeszeniu Łazarza.',
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'kf5-1',
        front: 'Czym różni się praca organiczna od pracy u podstaw?',
        back: 'Praca organiczna: rozwój gospodarki, przemysłu i handlu (społeczeństwo jak organizm); Praca u podstaw: edukacja i pomoc najuboższym warstwom.',
        category: 'Pozytywizm',
      },
      {
        id: 'kf5-2',
        front: 'Kto w Lalce Prusa reprezentuje pokolenie romantycznych idealistów politycznych?',
        back: 'Ignacy Rzecki (stary subiekt, wierzący w oswobodzenie Polski przez ród Bonapartych).',
        category: 'Pozytywizm',
      },
      {
        id: 'kf5-3',
        front: 'Jaką przypowieść biblijną czyta Sonia Raskolnikowowi w Zbrodni i karze?',
        back: 'Przypowieść o wskrzeszeniu Łazarza z Ewangelii św. Jana.',
        category: 'Realizm psychologiczny',
      },
      {
        id: 'kf5-4',
        front: 'Kogo zabił Rodion Raskolnikow w Petersburgu?',
        back: 'Starą lichwiarkę Alonę Iwanowną oraz jej przyrodnią siostrę Lizawietę, która niespodziewanie weszła do mieszkania.',
        category: 'Realizm psychologiczny',
      },
    ],
    quiz: [
      {
        q: 'Która postać w Lalce reprezentuje czysty scjentyzm i kult nauki?',
        options: ['Ignacy Rzecki', 'Julian Ochocki', 'Stanisław Wokulski', 'Kazimierz Starski'],
        correct: 1,
        explanation: 'Julian Ochocki jest młodym naukowcem i wynalazcą, marzącym o skonstruowaniu machiny latającej.',
      },
      {
        q: 'Gdzie Wokulski zdobył wielki majątek, który umożliwił mu wejście na warszawskie salony?',
        options: [
          'Na spekulacji gruntami w Paryżu',
          'Na dostawach wojskowych w Bułgarii podczas wojny rosyjsko-tureckiej',
          'Dzięki spadkowi po ojcu',
          'Z wygranej na loterii petersburskiej',
        ],
        correct: 1,
        explanation: 'Wokulski wzbogacił się na dostawach dla wojska w Bułgarii podczas wojny rosyjsko-tureckiej (1877–1878).',
      },
      {
        q: 'Jaki motyw popchnął Raskolnikowa do zamordowania lichwiarki?',
        options: [
          'Chęć zemsty za uwięzienie matki',
          'Eksperyment intelektualny sprawdzający, czy jest jednostką wybitną („Napoleonem”) stojącą ponad prawem',
          'Zlecenie zabójstwa przez Porfirego Pietrowicza',
          'Napad w stanie obłędu alkoholowego',
        ],
        correct: 1,
        explanation: 'Raskolnikow chciał sprawdzić swoją teorię: „Czy jestem mendą jak inni, czy człowiekiem, który ma prawo przekroczyć krew?”.',
      },
      {
        q: 'Kto odegrał kluczową rolę w moralnym odrodzeniu Raskolnikowa na katordze?',
        options: ['Arkadiusz Swidrygajłow', 'Dymitr Razumichin', 'Sonia Marmieładowa', 'Porfiry Pietrowicz'],
        correct: 2,
        explanation: 'Sonia Marmieładowa pojechała za Rodionem na Syberię, wskazując mu drogę przez wiarę i pokutę.',
      },
    ],
  },
  {
    id: 'dept-06',
    displayNum: 6,
    code: 'DZIAŁ 6',
    title: 'Młoda Polska',
    subtitle: 'Wesele Wyspiańskiego, Chłopi Reymonta, dekadentyzm, chłopomania i mit narodowy',
    duration: '90 min',
    xp: 200,
    notes: [
      {
        id: 'kn6-1',
        title: 'Wesele Stanisława Wyspiańskiego — diagnoza polskiego społeczeństwa',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Zderzenie inteligencji z chłopstwem i chocholi taniec',
            paragraphs: [
              'Wesele oparte na autentycznym ślubie Lucjana Rydla z Jadwigą Mikołajczykówną demaskuje powierzchowność młodopolskiej chłopomanii.',
              'Postaci fantastyczne (Widmo, Stańczyk, Rycerz Czarny, Hetman, Upiór-Szela, Wernyhora) uzewnętrzniają ukryte lęki i grzechy bohaterów. Finałowy chocholi taniec symbolizuje uśpienie i niegotowość narodu do zrywu niepodległościowego.',
            ],
          },
          {
            type: 'callout',
            variant: 'amber',
            title: 'Kardynalna pułapka w Weselu',
            items: [
              'Jasiek zgubił złoty róg, schylając się po czapkę z pawich piór — ostał mu się jeno sznur.',
              'Gospodarzem wesela był Włodzimierz Tetmajer, a Panem Młodym Lucjan Rydel (nie na odwrót).',
            ],
          },
        ],
      },
      {
        id: 'kn6-2',
        title: 'Chłopi Władysława Reymonta — epopeja wiejska',
        badge: 'Kanon lektur',
        blocks: [
          {
            type: 'prose',
            heading: 'Czas mityczny i rytm natury w Lipcach',
            paragraphs: [
              'Reymont nagrodzony Nagrodą Nobla (1924) ukazuje społeczność wsi Lipce, której życie wyznacza kalendarz prac polowych, świąt kościelnych i obyczajów.',
              'Konflikt Macieja Boryny z synem Antkiem o ziemię i o Jagnę Paczesiównę urasta do wymiaru archetypu.',
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'kf6-1',
        front: 'Co symbolizuje złoty róg podarowany przez Wernyhorę w Weselu?',
        back: 'Zew do walki narodowowyzwoleńczej i sygnał do zjednoczenia narodu.',
        category: 'Młoda Polska',
      },
      {
        id: 'kf6-2',
        front: 'Co symbolizuje finałowy chocholi taniec w Weselu Wyspiańskiego?',
        back: 'Marazm, uśpienie, zniewolenie duchowe i niezdolność Polaków do czynu zbrojnego.',
        category: 'Młoda Polska',
      },
      {
        id: 'kf6-3',
        front: 'Komu i w jakiej scenie ukazuje się Stańczyk w Weselu?',
        back: 'Dziennikarzowi (Rudolfowi Starzewskiemu), wręczając mu Kaduceusz Polski (laskę błazeńską) do mącenia narodowej wody.',
        category: 'Młoda Polska',
      },
      {
        id: 'kf6-4',
        front: 'W jaki sposób społeczność Lipiec ukarała Jagnę w Chłopach?',
        back: 'Wywiozła ją na wozie gnoju za wieś, dokonując brutalnego linczu i wykluczenia ze gromady.',
        category: 'Młoda Polska',
      },
    ],
    quiz: [
      {
        q: 'Dlaczego Jasiek w Weselu Wyspiańskiego gubi złoty róg?',
        options: [
          'Został napadnięty przez zaborców',
          'Schylił się po czapkę z pawich piór, którą wiatr strącił na ziemię',
          'Zasnął pod wpływem wina w karczmie',
          'Oddał róg Chochołowi w zamian za skrzypce',
        ],
        correct: 1,
        explanation: 'Jasiek zaprzepaścił szansę powstania dla błahej próżności: „Miałeś, chamie, złoty róg, ostał ci się jeno sznur”.',
      },
      {
        q: 'Która zjawa w Weselu uosabia krwawą pamięć rabacji galicyjskiej z 1846 roku?',
        options: ['Stańczyk', 'Rycerz Czarny (Zawisza)', 'Upiór (Jakub Szela)', 'Hetman Branicki'],
        correct: 2,
        explanation: 'Upiór Jakuba Szeli żąda kubełka wody, by obmyć krew polskiej szlachty, przypominając o przepaści między dworem a wsią.',
      },
      {
        q: 'Kto w Weselu wypowiada słowa: „A to Polska właśnie”?',
        options: ['Poeta', 'Czepiec', 'Dziennikarz', 'Gospodarz'],
        correct: 0,
        explanation: 'W rozmowie z Maryną Poeta (Kazimierz Przerwa-Tetmajer) wskazuje serce jako miejsce, gdzie mieści się Polska: „A to Polska właśnie”.',
      },
      {
        q: 'Który tom Chłopów Reymonta wchodzi w skład lektur maturalnych?',
        options: ['Tom 1: Jesień', 'Tom 2: Zima', 'Tom 3: Wiosna', 'Tom 4: Lato'],
        correct: 0,
        explanation: 'W kanonie lektur maturalnych wymagany jest tom pierwszy — „Jesień”.',
      },
    ],
  },
  {
    id: 'dept-07',
    displayNum: 7,
    code: 'DZIAŁ 7',
    title: 'Dwudziestolecie Międzywojenne',
    subtitle: 'Przedwiośnie Żeromskiego, proza Schulza i Gombrowicza, szklane domy i mit niepodległości',
    duration: '90 min',
    xp: 200,
    notes: [
      {
        id: 'kn7-1',
        title: 'Przedwiośnie Stefana Żeromskiego — rozliczenie z odrodzoną Polską',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Mit szklanych domów a rzeczywistość II RP',
            paragraphs: [
              'Seweryn Baryka roztacza przed synem Cezarym utopijną wizję Polski szklanych domów — czystych, tanich i sprawiedliwych społecznie.',
              'Zderzenie z nędzą i chaosem w Warszawie i Chłodku obala mit. W części trzeciej Cezary debatuje nad drogą dla Polski: ewolucyjny program reform Gajowca kontra rewolucja komunistyczna Lulka.',
            ],
          },
          {
            type: 'callout',
            variant: 'amber',
            title: 'Kardynalna pułapka w Przedwiośniu',
            items: [
              'Cezary Baryka w finale idzie na Belweder w pochodzie robotników, ale idzie OSOBNO, w czapce legionowej — nie staje się bezkrytycznym komunistą.',
              'Rewolucję bolszewicką Baryka przeżył w Baku, nie w Moskwie czy Petersburgu.',
            ],
          },
        ],
      },
      {
        id: 'kn7-2',
        title: 'Ferdydurke Witolda Gombrowicza — formy międzyludzkie',
        badge: 'Kanon lektur',
        blocks: [
          {
            type: 'prose',
            heading: 'Pupa, gęba i łydka',
            paragraphs: [
              '30-letni Józio Kowalski zostaje porwany przez prof. Pimkę i cofnięty do szkoły dyrektora Piórkowskiego.',
              'Gombrowicz obnaża narzucanie Formy: upupienie (infantylizacja), przyprawianie gęby (narzucanie ról) oraz kult nowoczesności (łydka Młodziaków). Z formy nie ma ucieczki — „można uciec tylko w inną gębę”.',
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'kf7-1',
        front: 'Co symbolizuje mit szklanych domów w Przedwiośniu?',
        back: 'Niezrealizowaną utopię cywilizacyjną i marzenie o nowoczesnej, sprawiedliwej Polsce po odzyskaniu niepodległości.',
        category: 'Dwudziestolecie międzywojenne',
      },
      {
        id: 'kf7-2',
        front: 'W jaki sposób kończy się Przedwiośnie Stefana Żeromskiego?',
        back: 'Cezary Baryka idzie na czele manifestacji robotników na Belweder, lecz idzie osobno, w legionowej czapce.',
        category: 'Dwudziestolecie międzywojenne',
      },
      {
        id: 'kf7-3',
        front: 'Co w terminologii Gombrowicza oznacza „upupienie”?',
        back: 'Narกรรม i infantylizację dorosłego człowieka, wtłoczenie w rolę bezbronnego, niewinnego dziecka.',
        category: 'Dwudziestolecie międzywojenne',
      },
      {
        id: 'kf7-4',
        front: 'Jak nazywają się dwa zwalczające się obozy w szkole w Ferdydurke?',
        back: 'Chłopięta pod wodzą Pylaszkiewicza (Syfona) oraz buntownicy pod wodzą Miętusa.',
        category: 'Dwudziestolecie międzywojenne',
      },
    ],
    quiz: [
      {
        q: 'Gdzie rozgrywa się pierwszy etap życia Cezarego Baryki, w tym doświadczenie rewolucji?',
        options: ['W Warszawie', 'W Baku', 'W Odessie', 'W Nawłoci'],
        correct: 1,
        explanation: 'Cezary Baryka spędził dzieciństwo i wczesną młodość w Baku, gdzie był świadkiem krwawych walk rewolucyjnych i rzezi ormiańsko-tatarskiej.',
      },
      {
        q: 'Który bohater Przedwiośnia proponuje koncepcję stopniowych, ewolucyjnych reform państwowych?',
        options: ['Antoni Lulek', 'Szymon Gajowiec', 'Hipolit Wielosławski', 'Seweryn Baryka'],
        correct: 1,
        explanation: 'Szymon Gajowiec, wysoki urzędnik skarbowy, reprezentuje koncepcję budowy silnej waluty, reformy rolnej i powolnej ewolucji.',
      },
      {
        q: 'Które z poniższych pojęć NIE jest kluczową kategorią filozoficzną Ferdydurke Gombrowicza?',
        options: ['Gęba', 'Pupa', 'Łydka', 'Maska konradańska'],
        correct: 3,
        explanation: 'Gęba, pupa i łydka to kanoniczne pojęcia Formy u Gombrowicza.',
      },
      {
        q: 'Jakie środowisko przedstawia pobyt Cezarego Baryki w Nawłoci?',
        options: [
          'Środowisko rewolucjonistów komunistycznych',
          'Tradycyjny, sielski polski dwór szlachecki kultywujący beztroskie życie',
          'Nędzę proletariatu fabrycznego Warszawy',
          'Rygor szkoły wojskowej',
        ],
        correct: 1,
        explanation: 'Nawłoć to arkadyjski dwór szlachecki Wielosławskich, nawiązujący do Soplicowa z Pana Tadeusza.',
      },
    ],
  },
  {
    id: 'dept-08',
    displayNum: 8,
    code: 'DZIAŁ 8',
    title: 'Literatura Wojny i Okupacji',
    subtitle: 'Borowski, Herling-Grudziński (Inny świat), Krall (Zdążyć przed Panem Bogiem), Baczyński',
    duration: '90 min',
    xp: 200,
    notes: [
      {
        id: 'kn8-1',
        title: 'Tadeusz Borowski — człowiek złagrowany i behawioryzm',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Złagrowanie i perspektywa vorarbeitera Tadka',
            paragraphs: [
              'Opowiadania Borowskiego („Proszę państwa do gazu”, „Ludzie, którzy szli”) wprowadzają pojęcie człowieka złagrowanego — więźnia, który przystosował się do moralności obozowej, gdzie jedyną wartością jest przetrwanie.',
              'Behawioryzm Borowskiego polega na rezygnacji z psychologizowania: autor opisuje jedynie zewnętrzne czynności i fakty bez komentarza moralnego.',
            ],
          },
        ],
      },
      {
        id: 'kn8-2',
        title: 'Gustaw Herling-Grudziński — Inny świat (łagry sowieckie)',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Ocalenie godności w Jercewie',
            paragraphs: [
              'Grudziński opisuje sowiecki łagier w Jercewie pod Archangielskiem jako machinę niszczenia człowieczeństwa przez głód, katorżniczą pracę i stachanowskie normy („kociołki”).',
              'W przeciwieństwie do Borowskiego, Grudziński dowodzi, że człowiek może zachować godność („Człowiek nie może żyć, nie wiedząc, po co żyje”), a postawę tę uosabia m.in. Kostylew czy sam autor podczas głodówki.',
            ],
          },
          {
            type: 'callout',
            variant: 'amber',
            title: 'Epilog Innego świata — kardynalna pułapka',
            items: [
              'W epilogu w Rzymie autor odmawia wypowiedzenia słów „Rozumiem” byłemu współwięźniowi, który doniósł na czterech Niemców.',
              'Człowiek jest ludzki w ludzkich warunkach — ocena moralna poza obozem wymaga bezwzględnej prawdy.',
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'kf8-1',
        front: 'Co oznacza pojęcie „człowiek złagrowany” w twórczości Tadeusza Borowskiego?',
        back: 'Więzień obozu koncentracyjnego, którego moralność została całkowicie zniekształcona przez reguły walki o przetrwanie.',
        category: 'Literatura wojenna',
      },
      {
        id: 'kf8-2',
        front: 'W jaki sposób zginął Michaił Kostylew w Innym świecie Grudzińskiego?',
        back: 'Oblał się wrzątkiem, a później popełnił samobójstwo w łaźni, by nie pracować na rzecz nieludzkiego systemu sowieckiego.',
        category: 'Literatura łagrowa',
      },
      {
        id: 'kf8-3',
        front: 'Z kim i o czym rozmawia Hanna Krall w reportażu „Zdążyć przed Panem Bogiem”?',
        back: 'Z Markiem Edelmanem — ostatnim przywódcą powstania w getcie warszawskim (1943) i lekarzem kardiologiem.',
        category: 'Literatura faktu',
      },
      {
        id: 'kf8-4',
        front: 'Do jakiego pokolenia literackiego należał Krzysztof Kamil Baczyński?',
        back: 'Do pokolenia Kolumbów (urodzonych ok. 1920 r., których młodość przypadła na II wojnę światową).',
        category: 'Poezja okupacyjna',
      },
    ],
    quiz: [
      {
        q: 'Które opowiadanie Tadeusza Borowskiego ukazuje rozładunek transportu więźniów na rampie w Birkenau?',
        options: [
          '„Pożegnanie z Marią”',
          '„Proszę państwa do gazu”',
          '„Dzień na Harmenzach”',
          '„Bitwa pod Grunwaldem”',
        ],
        correct: 1,
        explanation: '„Proszę państwa do gazu” szczegółowo opisuje pracę na rampie i mechanizm zagłady.',
      },
      {
        q: 'Jakie słowo odmówił wypowiedzieć narrator w epilogu Innego świata Gustawa Herlinga-Grudzińskiego?',
        options: ['„Wybaczam”', '„Rozumiem”', '„Zapominam”', '„Wierzę”'],
        correct: 1,
        explanation: 'Grudziński nie wypowiedział słowa „Rozumiem” Żydowi, który kupił sobie życie donosem, gdyż prawda moralna nie pozwala usprawiedliwiać zła poza obozem.',
      },
      {
        q: 'Jaki zawód wykonywał po wojnie Marek Edelman, bohater „Zdążyć przed Panem Bogiem”?',
        options: ['Architekt', 'Kardiolog', 'Dziennikarz', 'Prawnik'],
        correct: 1,
        explanation: 'Marek Edelman został wybitnym kardiochirurgiem, postrzegając ratowanie życia pacjentów jako kontynuację walki o człowieka.',
      },
      {
        q: 'Jaka zasada rządziła racjami żywnościowymi w sowieckim łagrze w Jercewie?',
        options: [
          'Każdy więzień otrzymywał równą porcję chleba',
          'Wysokość racji zależała od procentu wykonania normy pracy (tzw. kociołki)',
          'Pożywienie przydzielano według wieku więźnia',
          'Darmowe posiłki przysługiwały tylko w niedziele',
        ],
        correct: 1,
        explanation: 'W łagrach sowieckich więźniowie byli dzieleni na „kotły” — niewyrobienie normy skutkowało głodową racją i powolną śmiercią.',
      },
    ],
  },
  {
    id: 'dept-09',
    displayNum: 9,
    code: 'DZIAŁ 9',
    title: 'Literatura Współczesna i Teatr Absurdu',
    subtitle: 'Dżuma Camusa, Rok 1984 Orwella, Tango Mrożka, Szymborska, Herbert',
    duration: '90 min',
    xp: 200,
    notes: [
      {
        id: 'kn9-1',
        title: 'Dżuma Alberta Camusa — powieść parabola i heroizm codzienny',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Dżuma jako zło i postawa doktora Rieux',
            paragraphs: [
              'Dżuma w Oranie jest parabolą zła metafizycznego, choroby oraz totalitaryzmu (nazizmu).',
              'Doktor Bernard Rieux prezentuje postawę aktywnego buntu i przyzwoitości: walczy z epidemią bez powoływania się na wzniosłe idee („być po prostu lekarzem”). Jean Tarrou dąży do bycia „świętym bez Boga”.',
            ],
          },
        ],
      },
      {
        id: 'kn9-2',
        title: 'Tango Sławomira Mrożka — groteska i dyktatura chamstwa',
        badge: 'Lektura z gwiazdką',
        blocks: [
          {
            type: 'prose',
            heading: 'Bunt Artura i przejęcie władzy przez Edka',
            paragraphs: [
              'Artur próbuje przywrócić ład, zasady i formy w anarchicznym domu Stomila i Eleonory, organizując tradycyjny ślub z Alą.',
              'Gdy forma okazuje się pusta, władzę przejmuje Edek — uosobienie brutalnej, prymitywnej siły fizycznej. Finałowe tango „La Cumparsita” zatańczone z Eugeniuszem symbolizuje triumf totalitaryzmu i upadek kultury.',
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'kf9-1',
        front: 'Czym jest powieść parabola (przypowieść) na przykładzie Dżumy Camusa?',
        back: 'Utwór, w którym świat przedstawiony ma drugie, głębsze znaczenie uniwersalne i alegoryczne (dżuma = zło, totalitaryzm, los ludzki).',
        category: 'Egzystencjalizm',
      },
      {
        id: 'kf9-2',
        front: 'Kto w Tangu Sławomira Mrożka reprezentuje prymitywną siłę i przejmuje dyktaturę?',
        back: 'Edek (zwycięża dzięki brutalnej sile, mordując Artura cosem w kark).',
        category: 'Teatr absurdu / Groteska',
      },
      {
        id: 'kf9-3',
        front: 'Jak nazywa się aparat represji myśli w powieści Rok 1984 George’a Orwella?',
        back: 'Policja Myśli (kontrola nad myślomyślnikami za pomocą teleekranów).',
        category: 'Antyutopia',
      },
      {
        id: 'kf9-4',
        front: 'Co oznacza pojęcie nowomowy (newspeak) w Roku 1984?',
        back: 'Sztucznie stworzony język partii mający uniemożliwić sformułowanie myśli krytycznej wobec Wielkiego Brata.',
        category: 'Antyutopia',
      },
    ],
    quiz: [
      {
        q: 'Który bohater Dżumy Camusa organizuje ochotnicze formacje sanitarne?',
        options: ['Ojciec Paneloux', 'Jean Tarrou', 'Joseph Grand', 'Cottard'],
        correct: 1,
        explanation: 'To Jean Tarrou zorganizował ochotnicze oddziały sanitarne wspomagające lekarzy w walce z epidemią.',
      },
      {
        q: 'Jaki taniec tańczy Edek z wujem Eugeniuszem w finale Tanga Mrożka?',
        options: ['Poloneza', 'Walca angielskiego', 'Tango „La Cumparsita”', 'Mazura'],
        correct: 2,
        explanation: 'Finał dramatu to przerażający taniec tanga „La Cumparsita” — zwycięstwo chamstwa nad bezsilną inteligencją.',
      },
      {
        q: 'Jakie jest naczelne hasło Partii w Oceanii w powieści Rok 1984?',
        options: [
          '„Wolność, Równość, Braterstwo”',
          '„Wojna to pokój, Wolność to niewola, Ignorancja to siła”',
          '„Władza w ręce ludu pracującego”',
          '„Postęp, Praca, Przyszłość”',
        ],
        correct: 1,
        explanation: 'Trzy hasła Partii wypisane na fasadzie Ministerstwa Prawdy to: Wojna to pokój, Wolność to niewola, Ignorancja to siła.',
      },
      {
        q: 'Kto jest narratorem kroniki wydarzeń w Dżumie Alberta Camusa?',
        options: ['Dziennikarz Rambert', 'Doktor Bernard Rieux', 'Sędzia Othon', 'Jean Tarrou'],
        correct: 1,
        explanation: 'Na końcu powieści okazuje się, że obiektywnym kronikarzem opisującym przebieg zarazy był sam doktor Bernard Rieux.',
      },
    ],
  },
  {
    id: 'dept-10',
    displayNum: 10,
    code: 'DZIAŁ 10',
    title: 'Matryca Motywów, Konteksty i Wypracowanie 35/35',
    subtitle: '14 toposów przekrojowych, struktura eseju 35 pkt CKE, 2 konteksty, unikanie błędu kardynalnego',
    duration: '90 min',
    xp: 200,
    notes: [
      {
        id: 'kn10-1',
        title: 'Matryca 14 motywów przekrojowych',
        badge: 'Synteza lekturowa',
        blocks: [
          {
            type: 'prose',
            heading: 'Zestawienie toposów i lektur obowiązkowych',
            paragraphs: [
              'Do wypracowania maturalnego niezbędna jest umiejętność swobodnego zestawiania motywów z lektur z gwiazdką i kontekstów.',
              '14 kanonicznych motywów CKE: Vanitas, Tyrania/Władza, Bunt, Wina i kara, Miłość, Patriotyzm i walka, Niezawinione cierpienie, Śmierć, Przemiana bohatera, Taniec, Theatrum mundi, Arkadia vs Miasto, Praca i idealizm, Rodzina i konflikt pokoleń.',
            ],
          },
          {
            type: 'grid',
            items: [
              {
                term: 'Motyw winy i kary',
                desc: 'Zbrodnia rodzi nieuchronną karę moralną i prawną.',
                details: {
                  summary: 'Zestawienie lektur obowiązkowych',
                  bullets: [
                    'Zbrodnia i kara: Raskolnikow, katorga i męka sumienia.',
                    'Makbet: krwawy tyran niszczony przez paranoję i halucynacje.',
                    'Dziady cz. II: „Kto nie doznał goryczy ni razu...”',
                  ],
                  essayUse: 'Idealny motyw do rozważań o kondycji ludzkiej i sprawiedliwości uniwersalnej.',
                },
              },
              {
                term: 'Motyw przemiany wewnętrznej',
                desc: 'Ewolucja bohatera pod wpływem cierpienia lub miłości.',
                details: {
                  summary: 'Kluczowi bohaterowie',
                  bullets: [
                    'Jacek Soplica -> Ksiądz Robak (Pan Tadeusz).',
                    'Gustaw -> Konrad (Dziady cz. III).',
                    'Andrzej Kmicic -> Babinicz (Potop).',
                  ],
                  essayUse: 'Klucz do wykazania dynamizmu postaci w kryteriach CKE.',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'kn10-2',
        title: 'Wypracowanie maturalne 35/35 pkt — schemat i zasady CKE',
        badge: 'Wypracowanie 35p',
        blocks: [
          {
            type: 'prose',
            heading: 'Struktura kompozycyjna i 4 kryteria oceny CKE',
            paragraphs: [
              'Warunek wstępny: minimum 300 słów. Praca licząca 299 słów otrzymuje 0/35 punktów!',
              'Kryteria: I. Spełnienie warunków formalnych (0-1), II. Kompetencje literackie i kulturowe (0-16: lektura obowiązkowa + inny utwór + min. 2 konteksty), III. Kompozycja (0-7), IV. Język i styl (0-11).',
            ],
          },
          {
            type: 'callout',
            variant: 'amber',
            title: 'Definicja błędu kardynalnego CKE',
            items: [
              'Błąd kardynalny to rażące zniekształcenie fabuły, losów bohatera lub wymowy ideowej lektury obowiązkowej czytanej w całości (z gwiazdką).',
              'Poprawne wykazanie błędu kardynalnego natychmiast zeruje CAŁE wypracowanie: 0/35 pkt!',
            ],
          },
        ],
      },
    ],
    flashcards: [
      {
        id: 'kf10-1',
        front: 'Jaka jest bezwzględna minimalna liczba słów w wypracowaniu na maturze podstawowej?',
        back: 'Dokładnie 300 słów (praca poniżej 300 słów nie jest sprawdzana i otrzymuje 0/35 pkt).',
        category: 'Wypracowanie maturalne',
      },
      {
        id: 'kf10-2',
        front: 'Czym skutkuje popełnienie błędu kardynalnego w wypracowaniu maturalnym?',
        back: 'Przyznaniem 0 punktów za całe wypracowanie (0/35 pkt) w Formule 2023.',
        category: 'Wypracowanie maturalne',
      },
      {
        id: 'kf10-3',
        front: 'Ile kontekstów funkcjonalnych musi zawierać wypracowanie na maksymalną liczbę punktów?',
        back: 'Co najmniej 2 funkcjonalne konteksty (np. historyczny, filozoficzny, biograficzny, literacki).',
        category: 'Wypracowanie maturalne',
      },
      {
        id: 'kf10-4',
        front: 'W jakich trzech lekturach z gwiazdką występuje motyw tańca?',
        back: 'Pan Tadeusz (polonez), Wesele (chocholi taniec) oraz Tango (tango Edka z Eugeniuszem).',
        category: 'Motywy literackie',
      },
    ],
    quiz: [
      {
        q: 'Jaki jest minimalny limit słów w wypracowaniu na maturze z języka polskiego Formuła 2023?',
        options: ['200 słów', '250 słów', '300 słów', '400 słów'],
        correct: 2,
        explanation: 'Zgodnie z informatorem CKE wypracowanie musi liczyć minimum 300 słów. Praca krótsza nie podlega dalszej ocenie merytorycznej (0/35 pkt).',
      },
      {
        q: 'Czym jest błąd kardynalny według zasad oceniania CKE?',
        options: [
          'Każdy błąd ortograficzny w nazwisku autora',
          'Całkowite zniekształcenie fabuły, postaci lub sensu lektury obowiązkowej czytanej w całości',
          'Brak podziału pracy na akapity',
          'Użycie kolokwializmu w wypracowaniu',
        ],
        correct: 1,
        explanation: 'Błąd kardynalny dotyczy wyłącznie lektury obowiązkowej z gwiazdką i polega na rażącej niewiedzy falsyfikującej utwór (np. zrobienie z Kordiana zabójcy cara).',
      },
      {
        q: 'Która para utworów najlepiej ilustruje topos vanitas (marności świata doczesnego)?',
        options: [
          'Księga Koheleta i wiersze Daniela Naborowskiego (np. „Marność”)',
          'Pan Tadeusz i Chłopi',
          'Odprawa posłów greckich i Przedwiośnie',
          'Antygona i Lalka',
        ],
        correct: 0,
        explanation: 'Księga Koheleta oraz barokowa liryka Daniela Naborowskiego to fundamentalne realizacje toposu vanitas.',
      },
      {
        q: 'Ile funkcjonalnych kontekstów wymaga CKE w wypracowaniu, aby uzyskać maksymalny wynik za kompetencje?',
        options: ['Brak wymogu kontekstów', 'Dokładnie 1 kontekst', 'Co najmniej 2 konteksty', 'Minimum 4 konteksty'],
        correct: 2,
        explanation: 'Kryteria CKE dla wypracowania wymagają odwołania się do min. dwóch funkcjonalnych kontekstów (np. historycznego, biograficznego, filozoficznego).',
      },
    ],
  },
];
