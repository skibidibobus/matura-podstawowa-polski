export const LEVEL_2 = {
  id: 2,
  code: 'BLOK 2',
  title: 'Epoki Literackie — Pełne Kompendium Pojęć',
  subtitle: 'Wszystkie 11 epok: tło historyczne, filozofie, prądy, wzorce osobowe i rozpoznawanie tekstów',
  duration: '60 min',
  xp: 160,
  notes: [
    {
      id: '2-1',
      title: 'Epoki Dawne: Antyk → Średniowiecze → Renesans → Barok → Oświecenie',
      badge: 'Kliknij każdą epokę, aby rozwinąć pojęcia',
      intro:
        'Historia literatury rozwija się na zasadzie wahadła (sinusoidy Krzyżanowskiego): epoki rozumu, harmonii i ładu (Antyk, Renesans, Oświecenie, Pozytywizm) przeplatają się z epokami ducha, emocji, metafizyki i niepokoju (Średniowiecze, Barok, Romantyzm, Młoda Polska). Kiedy zrozumiesz tę regułę, nigdy nie pomylisz kolejności epok ani ich haseł!',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: '1. Antyk (Starożytność: VIII w. p.n.e. – V w. n.e.)',
              desc: 'Fundament kultury europejskiej: Grecja, Rzym i Biblia. Fatum, kalokagatia, stoicyzm, epikureizm.',
              details: {
                summary:
                  'Kultura europejska stoi na dwóch filarach antycznych: śródziemnomorskim (mitologia grecko-rzymska, filozofia, sztuka) oraz judeochrześcijańskim (Biblia). W antyku greckim świat jest uporządkowanym Kosmosem, w którym jednak nad ludźmi i bogami ciąży nieuchronne przeznaczenie.',
                bullets: [
                  'Fatum: nieodwracalne przeznaczenie, los, przed którym człowiek nie może uciec (każda próba ucieczki tylko przybliża spełnienie przepowiedni, jak u Edypa).',
                  'Hybris: duma, rodowa pycha i zaślepienie władcy lub bohatera, które sprawia, że przekracza on miarę wyznaczoną przez bogów i ściąga na siebie katastrofę (np. Kreon w „Antygonie”).',
                  'Kalokagatia (piękny i dobry): grecki ideał człowieka łączącego piękno fizyczne (sprawność ciała) z doskonałością moralną i mądrością.',
                  'Mimesis: zasada naśladowania natury i rzeczywistości przez sztukę (dzieło ma być prawdopodobne i harmonijne).',
                  'Katharsis: duchowe oczyszczenie widza oglądającego tragedię — poprzez przeżycie litości (wobec cierpiącego bohatera) i trwogi (przed losem) widz wychodzi z teatru wewnętrznie uspokojony.',
                  'Stoicyzm (Zenon z Kition, Marek Aureliusz): filozofia nakazująca zachowanie wewnętrznego spokoju, równowagi ducha i opanowania emocji (apatheia) zarówno w obliczu nieszczęścia, jak i sukcesu.',
                  'Epikureizm (Epikur, w poezji Horacy): sztuka mądrego korzystania z życia, unikanie cierpienia i lęku przed śmiercią, cieszenie się chwilą obecną — „Carpe diem” (chwytaj dzień) połączone z „Aurea mediocritas” (złotym środkiem, umiarem).'
                ],
                essayUse: 'Pojęcia fatum, hybris, stoicyzmu i carpe diem to idealne konteksty filozoficzne do niemal każdej rozprawki!'
              }
            },
            {
              term: '2. Średniowiecze (V w. – XV w.)',
              desc: 'Teocentryzm, uniwersalizm, memento mori, danse macabre, franciszkanizm, asceta i rycerz.',
              details: {
                summary:
                  'Epoka zdominowana przez chrześcijaństwo i Kościół. Życie ziemskie jest traktowane tylko jako krótka pielgrzymka i próba przed życiem wiecznym. Sztuka jest w większości anonimowa i powstaje przede wszystkim na chwałę Bożą.',
                bullets: [
                  'Teocentryzm: Bóg znajduje się w absolutnym centrum wszechświata, kultury, nauki i ludzkich dążeń.',
                  'Uniwersalizm średniowieczny: cała chrześcijańska Europa posługuje się jednym językiem kultury i nauki (łaciną), wyznaje jedną religię i ma ten sam system wartości.',
                  'Dualizm (dwoistość) człowieka: człowiek składa się z grzesznego, śmiertelnego ciała (ciągnącego go ku ziemi) oraz nieśmiertelnej duszy (dążącej do nieba).',
                  'Memento mori (pamiętaj o śmierci) & Ars moriendi (sztuka godnego umierania): przypomnienie, że w każdej chwili należy być gotowym na Sąd Ostateczny.',
                  'Danse macabre (taniec śmierci): motyw ukazujący Śmierć prowadzącą w korowodzie przedstawicieli wszystkich stanów (papieża, króla, rycerza, kupca i chłopa) — dowód na to, że w obliczu śmierci wszyscy ludzie są równi („Rozmowa Mistrza Polikarpa ze Śmiercią”).',
                  'Trzy wzorce osobowe (pareneza): 1) Święty asceta — umartwia ciało i rezygnuje z bogactwa dla Boga („Legenda o św. Aleksym” — od 2024 r. poza listą PP, kontekst / przejściowo 2025–2028); 2) Rycerz bez skazy — waleczny, wierny Bogu, królowi i ojczyźnie, dba o honor („Pieśń o Rolandzie”); 3) Władca sprawiedliwy (Karol Wielki).',
                  'Franciszkanizm („Kwiatki św. Franciszka” — od 2024 r. poza listą PP, cenny kontekst): jasny, radosny nurt wiary oparty na miłości do każdego stworzenia (braci mniejszych — zwierząt i przyrody) oraz dobrowolnym ubóstwie, w opozycji do surowej ascezy.'
                ],
                essayUse: 'Wzorzec rycerza (Roland) i ascety (Aleksy) świetnie kontrastuje z późniejszymi bohaterami pełnymi wątpliwości (np. Kordian, Wokulski).'
              }
            },
            {
              term: '3. Renesans / Odrodzenie (XVI w.)',
              desc: 'Humanizm, antropocentryzm, reformacja, harmonia, kryzys renesansowy w „Trenach”.',
              details: {
                summary:
                  'Przełom wywołany wynalezieniem druku (Gutenberg), odkryciami geograficznymi i rozkwitem miast. Człowiek odkrywa wartość życia doczesnego, nauki i piękna przyrody stworzonej przez Boga jako Wielkiego Architekta (Deus artifex).',
                bullets: [
                  'Antropocentryzm i Humanizm: zainteresowanie człowiekiem, jego rozumem, godnością i doczesnym szczęściem. Hasło Terencjusza: „Człowiekiem jestem i nic, co ludzkie, nie jest mi obce”.',
                  'Ad fontes (powrót do źródeł): badanie oryginalnych dzieł starożytnych Greków i Rzymian oraz tłumaczenie Biblii na języki narodowe.',
                  'Reformacja (od 1517 r. — wystąpienie Marcina Lutra, następnie Jan Kalwin): ruch religijno-społeczny w XVI w. dążący do odnowy Kościoła, odrzucenia nadużyć (np. sprzedaży odpustów) i autorytetu papieża na rzecz samej Biblii (Sola Scriptura) oraz wiary (Sola Fide). Doprowadziła do powstania protestantyzmu (luteranizm, kalwinizm, w Polsce też bracia polscy/arianie) i dynamicznego rozwoju literatury w językach narodowych (Mikołaj Rej, przekład Biblii brzeskiej i Jakuba Wujka).',
                  'Irenizm: idea pokoju religijnego i tolerancji (Polska w XVI w. była „państwem bez stosów”).',
                  'Filozofia Jana Kochanowskiego (w „Pieśniach” i „Fraszkach”): chrześcijańskie połączenie stoicyzmu (spokój wobec wyroków Fortuny, czyste sumienie) z epikureizmem (radość z biesiady, przyrody i poezji) oraz patriotyzmem (troska o Rzeczpospolitą).',
                  'Kryzys światopoglądu renesansowego („Treny” Kochanowskiego): po śmierci 2,5-letniej córeczki Urszulki poeta odkrywa, że stoicki spokój i humanistyczna mądrość są bezsilne wobec prawdziwego cierpienia ojca.'
                ],
                essayUse: '„Treny” Kochanowskiego to najlepszy przykład na to, jak osobista tragedia burzy wcześniejszą filozofię życiową człowieka.'
              }
            },
            {
              term: '4. Barok (koniec XVI – poł. XVIII w.)',
              desc: 'Kontrreformacja, vanitas, rozdarcie wewnętrzne, konceptyzm, marinizm i polski sarmatyzm.',
              details: {
                summary:
                  'Po wojnach religijnych i kontrreformacji znika renesansowy spokój. Człowiek baroku („wątła trzcina na wietrze” Pascala) czuje się zagubiony między pokusami ciała a lękiem przed piekłem i przemijaniem.',
                bullets: [
                  'Kontrreformacja (Sobór Trydencki 1545–1563, zakon jezuitów): ruch odnowy i obrony Kościoła katolickiego przed reformacją. Wprowadzono dyscyplinę duchowieństwa, Indeks ksiąg zakazanych i sieć kolegiów jezuickich; sztuka barokowa (przepych kościołów, muzyka, literatura religijna, np. Piotr Skarga) miała zachwycać zmysły i umacniać wiarę wiernych.',
                  'Vanitas (marność): obsesyjny motyw przemijania czasu, urody i dóbr ziemskich (wiersze Daniela Naborowskiego „Krótkość żywota”, „Marność” — życie ludzkie to „dźwięk, cień, dym, wiatr, błysk, głos, punkt”).',
                  'Konceptyzm i Marinizm (Jan Andrzej Morsztyn): poezja dworska ma zaskoczyć, zaszokować czytelnika błyskotliwym pomysłem konstrukcyjnym (konceptem), np. porównaniem siebie (nieszczęśliwie zakochanego) do trupa w wierszu „Do trupa”.',
                  'Sarmatyzm (specyfika polska!): przekonanie polskiej szlachty, że pochodzi od starożytnych wojowników Sarmatów. Z jednej strony rodziło to odwagę rycerską, umiłowanie „złotej wolności” i przywiązanie do tradycji, ale z drugiej — megalomanię narodową, ksenofobię, pijaństwo, warcholstwo i prywatę („Pamiętniki” Jana Chryzostoma Paska — od 2024 r. wykreślone z PP, kontekst / przejściowo 2025–2028).',
                  'Klasycyzm francuski XVII w. (Molier „Skąpiec”): równolegle do baroku we Francji rozwija się nurt racjonalny i harmonijny, zapowiadający Oświecenie.'
                ],
                essayUse: 'Sarmatyzm (Pasek, a później Kmicic w „Potopie” i szlachta w „Panu Tadeuszu”) to klucz do każdego tematu o polskich wadach i zaletach narodowych.'
              }
            },
            {
              term: '5. Oświecenie (XVIII w. — Wiek Rozumu)',
              desc: 'Racjonalizm, empiryzm, utylitaryzm, klasycyzm, walka o reformę Polski.',
              details: {
                summary:
                  'Epoka filozofów, encyklopedystów i reformatorów. W Polsce (czasy króla Stanisława Augusta Poniatowskiego, Komisji Edukacji Narodowej i Konstytucji 3 maja) literatura staje się narzędziem ratowania upadającego państwa przed rozbiorami.',
                bullets: [
                  'Racjonalizm (Kartezjusz: „Myślę, więc jestem”): głównym narzędziem poznania prawdy o świecie jest ludzki rozum i krytyczne myślenie, a nie ślepa wiara czy zabobon.',
                  'Empiryzm (John Locke): wiedza pochodzi z doświadczenia zmysłowego; człowiek rodzi się jako „tabula rasa” (czysta karta), którą zapisuje wychowanie i edukacja.',
                  'Dydaktyzm i Utylitaryzm: literatura musi być użyteczna społecznie — ma piętnować wady (pijaństwo, kosmopolityzm, okrucieństwo wobec chłopów, ciemnotę) i wychowywać dobrego obywatela według zasady „uczyć bawiąc” (Ignacy Krasicki — satyry i bajki).',
                  'Klasycyzm oświeceniowy: jasność wywodu, symetria, umiar, nawiązywanie do gatunków antycznych (satyra, bajka, oda).'
                ],
                essayUse: 'Oświeceniowy racjonalizm („szkiełko i oko” mędrca) stanie się głównym wrogiem romantyków w balladzie „Romantyczność”!'
              }
            }
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Reformacja (Renesans) vs Kontrreformacja (Barok) — szybkie porównanie na maturę',
          text: 'Reformacja (XVI w., Marcin Luter 1517 r., Jan Kalwin) była buntem przeciwko nadużyciom w Kościele katolickim (sprzedaży odpustów) i zaowocowała powstaniem wyznań protestanckich, przekładami Biblii na języki narodowe oraz rozwojem piśmiennictwa po polsku („Polacy nie gęsi, iż swój język mają” — Mikołaj Rej). Kontrreformacja (od Soboru Trydenckiego 1545–1563, zakon jezuitów) była odpowiedzią Kościoła katolickiego: wewnętrzną reformą dyscypliny, walką z herezją (Indeks ksiąg zakazanych), edukacją w kolegiach jezuickich oraz barokową sztuką pełną przepychu, która miała poruszać emocje i przyciągać wiernych z powrotem do katolicyzmu.'
        }
      ]
    },
    {
      id: '2-2',
      title: 'Epoki Nowożytne i Współczesne: Romantyzm → Współczesność',
      badge: 'Kliknij każdą epokę, aby rozwinąć pojęcia',
      intro:
        'Od XIX wieku polska literatura jest ściśle spleciona z walką o niepodległość i nowoczesność. To z tych epok pochodzi 80% lektur, z których będziesz korzystać w wypracowaniu maturalnym.',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: '6. Romantyzm (1822–1863)',
              desc: 'Irracjonalizm, indywidualizm, mesjanizm, winkelriedyzm, prometeizm, wallenrodyzm, ludowość.',
              details: {
                summary:
                  'Bunt młodych przeciw zimnemu rozumowi Oświecenia. W Polsce (pod zaborami, w dobie powstania listopadowego 1830 r.) romantyzm przybiera charakter tyrtejski — staje się walką o wolność narodu. Ramy w Polsce: od wydania „Ballad i romansów” Mickiewicza (1822) do klęski powstania styczniowego (1863).',
                bullets: [
                  'Irracjonalizm i prymat uczucia: prawd o świecie duchowym nie da się zbadać „mędrca szkiełkiem i okiem” — poznaje się je sercem, wiarą i intuicją („Romantyczność”).',
                  'Ludowość: przekonanie, że prosty lud wiejski przechował nieskażoną moralność (nie ma winy bez kary) i kontakt ze światem nadprzyrodzonym.',
                  'Bohater romantyczny (bajroniczny / werteryczny): wybitna, nadwrażliwa jednostka skłócona ze światem, przeżywająca najpierw nieszczęśliwą miłość i ból istnienia (weltschmerz), a następnie przemieniająca się w samotnego bojownika o wolność narodu (Gustaw → Konrad, Kordian).',
                  'Prometeizm (Konrad w Wielkiej Improwizacji): samotny bunt wybitnej jednostki przeciw Bogu w imię miłości do cierpiącego narodu i ludzkości.',
                  'Mesjanizm (Widzenie ks. Piotra w „Dziadach cz. III”): wizja Polski jako Chrystusa narodów — niewinnie ukrzyżowana przez zaborców, swoim cierpieniem odkupi grzechy Europy i zmartwychwstanie.',
                  'Winkelriedyzm („Kordian” Słowackiego — od 2024 r. na PR; w wypracowaniu PP dopuszczony przejściowo 2025–2028): polemika z biernym mesjanizmem! Polska ma być jak szwajcarski rycerz Arnold Winkelried — rzucić się do czynnej walki, zebrać w swoją pierś włócznie wrogów i przebić drogę do wolności innym narodom.',
                  'Wallenrodyzm („Konrad Wallenrod” — od 2024 r. wykreślony z listy PP; w wypracowaniu przejściowo 2025–2028): tragiczna koncepcja walki z potężniejszym wrogiem za pomocą zdrady, maski i podstępu (metoda lisa i lwa z Machiavellego), która niszczy moralnie samego bohatera.'
                ],
                essayUse: 'Zestawienie mesjanizmu Mickiewicza z winkelriedyzmem Słowackiego to pewniak przy każdym temacie o patriotyzmie, poświęceniu i walce.'
              }
            },
            {
              term: '7. Pozytywizm (1864–1890)',
              desc: 'Praca organiczna, praca u podstaw, scjentyzm, utylitaryzm, asymilacja, emancypacja, realizm.',
              details: {
                summary:
                  'Po krwawym upadku powstania styczniowego (1863/1864) młodzi pisarze i publicyści odrzucają romantyczną walkę zbrojną jako samobójstwo narodowe. Zamiast ginąć na barykadach, Polacy mają przetrwać dzięki nauce, gospodarce i edukacji.',
                bullets: [
                  'Praca organiczna (teoria Herberta Spencera): społeczeństwo jest jak żywy organizm — jeśli jedna warstwa (np. chłopi lub robotnicy) choruje w nędzy, a druga (arystokracja) pasożytuje, cały organizm słabnie. Wszystkie grupy muszą harmonijnie współpracować dla rozwoju gospodarki.',
                  'Praca u podstaw: obowiązek wykształconych warstw do niesienia oświaty, higieny i pomocy materialnej najuboższym (chłopom i biedocie miejskiej, jak Wokulski pomagający Wysockiemu, Węgiełkowi i Mariannie w „Lalce”).',
                  'Scjentyzm i Ewolucjonizm: bezgraniczna wiara w naukę przyrodniczą, technikę i postęp jako lekarstwo na problemy ludzkości (postacie Ochockiego i prof. Geista w „Lalce”).',
                  'Emancypacja kobiet i Asymilacja Żydów: postulat równouprawnienia kobiet (prawo do pracy i nauki) oraz włączenia mniejszości żydowskiej w polskie społeczeństwo obywatelskie.',
                  'Realizm i Naturalizm w powieści („Lalka”, „Zbrodnia i kara”): wierne, szczegółowe odtwarzanie realiów epoki, topografii miasta (Warszawa, Petersburg) i psychologii postaci.'
                ],
                essayUse: 'Wokulski w „Lalce” łączy w sobie serce romantyka (miłość do Izabeli) z umysłem i czynami pozytywisty (praca, nauka, filantropia).'
              }
            },
            {
              term: '8. Młoda Polska / Modernizm (1890–1918)',
              desc: 'Dekadentyzm, pesymizm Schopenhauera, nietzscheanizm, symbolizm, impresjonizm, chłopomania.',
              details: {
                summary:
                  'Pod koniec XIX wieku przychodzi rozczarowanie pozytywistyczną nauką i kapitalizmem — miasta są pełne nędzy, a człowiek czuje pustkę duchową. Powraca fascynacja romantyzmem, sztuką i podświadomością.',
                bullets: [
                  'Dekadentyzm (fin de siècle — koniec wieku): postawa bierności, znużenia, niewiary w sens działania i przeczucia upadku cywilizacji (wiersze K. Przerwy-Tetmajera „Koniec wieku XIX”).',
                  'Schopenhaueryzm (Artur Schopenhauer): skrajny pesymizm — życiem rządzi ślepy popęd, a człowiek miota się między cierpieniem (gdy czegoś pragnie) a nudą (gdy to osiągnie). Ukojenie dają tylko sztuka, współczucie i nirwana (wyzbycie się pragnień).',
                  'Nietzscheanizm (Fryderyk Nietzsche): bunt przeciw słabości i bierności — pochwała siły witalnej, woli mocy i „nadczłowieka” (w poezji Leopolda Staffa „Kowal”).',
                  'Sztuka dla sztuki (modernistyczna bohema): artysta jest kapłanem czystego piękna, wyższym od przeciętnego mieszczanina („filistra” / „mydlarza” skupionego tylko na pieniądzach).',
                  'Chłopomania (ludomania): moda wśród krakowskiej inteligencji na żenienie się z chłopkami i zachwycanie się kolorową wsią jako źródłem tężyzny narodowej — brutalnie zdemaskowana przez Wyspiańskiego w „Weselu”.',
                  'Symbolizm i Impresjonizm: zastępowanie dosłownego opisu wieloznacznymi symbolami (Złoty Róg, Chochoł) oraz ulotnymi wrażeniami zmysłowymi (barwa, światło, dźwięk w „Chłopach”).'
                ],
                essayUse: 'W „Weselu” Poeta i Dziennikarz to podręcznikowi dekadenci, którym zjawy (Rycerz Czarny, Stańczyk) wypominają bierność.'
              }
            },
            {
              term: '9. Dwudziestolecie międzywojenne (1918–1939)',
              desc: 'Odzyskanie niepodległości: optymizm Skamandrytów vs katastrofizm lat 30., groteska i Forma.',
              details: {
                summary:
                  'Po 123 latach niewoli Polska w 1918 r. odzyskuje niepodległość! Literatura zrzuca „płaszcz Konrada” (nie musi już tylko cierpieć za naród), ale szybko staje przed trudnymi pytaniami o kształt nowego państwa i widmo nadciągających totalitaryzmów.',
                bullets: [
                  'I dekada (lata 20. — optymizm i witalizm): grupa poetycka Skamander (Julian Tuwim, Jan Lechoń, Kazimierz Wierzyński) głosi radość życia, zachwyt codziennością, miastem i tłumem, używając potocznego języka.',
                  'Rozrachunek z niepodległością („Przedwiośnie” Żeromskiego, 1924): zderzenie pięknego mitu „szklanych domów” z brutalną rzeczywistością II RP — biedą, bezrobociem, egoizmem szlachty (Nawłoć) i groźbą rewolucji komunistycznej.',
                  'II dekada (lata 30. — katastrofizm i awangarda): wielki kryzys gospodarczy oraz dojście do władzy Hitlera i Stalina budzą przerażenie i wizję nadchodzącej zagłady świata.',
                  'Walka z Formą i Gębą („Ferdydurke” Gombrowicza, 1937): odkrycie, że człowiek nigdy nie jest w pełni autentyczny, bo inni ludzie nieustannie narzucają mu sztuczne role społeczne (Gębę) i infantylizują go (Pupa).'
                ],
                essayUse: 'Gombrowiczowska „Forma” i „Gęba” to genialny klucz do każdego tematu o presji społecznej, zakłamaniu i relacjach międzyludzkich.'
              }
            },
            {
              term: '10. Wojna i okupacja (1939–1945) oraz Współczesność (po 1945)',
              desc: 'Apokalipsa spełniona, Kolumbowie, człowiek zlagrowany, egzystencjalizm, antyutopia i Pan Cogito.',
              details: {
                summary:
                  'II wojna światowa przynosi doświadczenie totalitaryzmu (nazistowskich obozów zagłady i sowieckich łagrów), które podważa wiarę w humanizm i kulturę europejską. Literatura powojenna szuka odpowiedzi na pytanie: jak ocalić człowieczeństwo i prawdę w świecie po katastrofie?',
                bullets: [
                  'Pokolenie Kolumbów (Krzysztof Kamil Baczyński, Tadeusz Gajcy): młodzi poeci warszawscy urodzeni ok. 1920 r., zmuszeni do porzucenia miłości i poezji na rzecz walki z bronią w ręku (tragizm skażenia zabijaniem).',
                  'Behawioryzm i „człowiek zlagrowany” (Tadeusz Borowski): rezygnacja z opisu przeżyć wewnętrznych na rzecz chłodnej obserwacji zachowań więźniów, których obóz odarł z moralności i zmienił w trybiki machiny śmierci.',
                  'Heroizm bez patosu („Inny świat” Grudzińskiego, „Zdążyć przed Panem Bogiem” Krall): obrona resztek ludzkiej godności w sytuacjach skrajnych.',
                  'Egzystencjalizm (Albert Camus „Dżuma”): człowiek jest rzucony w absurdalny, obojętny świat pełen niezawinionego cierpienia, ale nadaje swojemu życiu sens poprzez bunt wobec zła i solidarność z innymi.',
                  'Antyutopia / Dystopia („Rok 1984” Orwella) i Dramat absurdu („Tango” Mrożka): przestroga przed totalitarną kontrolą nad językiem i umysłem oraz przed światem, w którym upadek wartości oddaje władzę w ręce brutalnego chama (Edka).'
                ],
                essayUse: 'Zestawienie Borowskiego, Herlinga-Grudzińskiego, Krall i Camusa daje Ci gotowy materiał na każdy temat o wojnie, cierpieniu, moralności i totalitaryzmie.'
              }
            }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f2-1', front: 'Co oznaczają pojęcia: „kalokagatia” i „katharsis” w antyku?', back: 'Kalokagatia = połączenie piękna i dobra. Katharsis = duchowe oczyszczenie widza tragedii przez litość i trwogę.' },
    { id: 'f2-2', front: 'Wymień 3 hasła kluczowe dla Średniowiecza.', back: 'Teocentryzm (Bóg w centrum), memento mori (pamiętaj o śmierci), danse macabre (taniec śmierci — równość stanów wobec śmierci).' },
    { id: 'f2-3', front: 'Jaki jest główny motyw baroku i co oznacza słowo „vanitas”?', back: 'Vanitas = marność (przemijanie dóbr doczesnych, urody, sławy wobec śmierci i wieczności).' },
    { id: 'f2-4', front: 'Czym różni się mesjanizm (Dziady cz. III) od winkelriedyzmu (Kordian)?', back: 'Mesjanizm: Polska cierpi biernie jak Chrystus, by zbawić narody. Winkelriedyzm: Polska rzuca się w czynną walkę i bierze ciosy wrogów na siebie.' },
    { id: 'f2-5', front: 'Co oznaczają pozytywistyczne hasła: praca organiczna i praca u podstaw?', back: 'Praca organiczna = rozwój gospodarki i całego społeczeństwa jak jednego organizmu. Praca u podstaw = edukacja i pomoc najniższym warstwom (ludowi).' },
    { id: 'f2-6', front: 'Co to jest „chłopomania” w Młodej Polsce?', back: 'Powierzchowna fascynacja inteligencji życiem, strojem i siłą wsi, bez realnego zrozumienia problemów chłopów (wyśmiana w „Weselu”).' },
    { id: 'f2-7', front: 'Kim byli „Kolumbowie” w literaturze wojny i okupacji?', back: 'Pokolenie urodzone ok. 1920 r. (np. K. K. Baczyński), którego młodość została przerwana przez II wojnę światową.' },
    { id: 'f2-8', front: 'Wymień kolejno wszystkie 11 epok od Antyku do Współczesności.', back: 'Antyk → Średniowiecze → Renesans → Barok → Oświecenie → Romantyzm → Pozytywizm → Młoda Polska → Dwudziestolecie międzywojenne → Wojna i okupacja → Współczesność.' },
    { id: 'f2-9', front: 'Co oznacza renesansowe hasło „antropocentryzm” i „ad fontes”?', back: 'Antropocentryzm = człowiek i jego sprawy w centrum uwagi. Ad fontes = powrót do źródeł (antycznej kultury i Biblii).' },
    { id: 'f2-10', front: 'Czym jest prometeizm i wallenrodyzm w Romantyzmie?', back: 'Prometeizm = bunt jednostki przeciw Bogu w imię dobra ludzkości (Konrad). Wallenrodyzm = walka podstępem i zdradą w imię ocalenia ojczyzny.' },
    { id: 'f2-11', front: 'Co to jest dekadentyzm w Młodej Polsce?', back: 'Poczucie schyłku wieku (fin de siècle), bezsensu istnienia, zmęczenia kulturą i bierności wobec świata.' },
    { id: 'f2-12', front: 'Jaką postawę reprezentowali Skamandryci na początku Dwudziestolecia międzywojennego?', back: 'Witalizm, radość z odzyskanej niepodległości, pochwałę codzienności i zwykłego człowieka (Tuwim, Lechoń, Wierzyński).' },
    { id: 'f2-13', front: 'Czym różni się stoicyzm od epikureizmu w filozofii antycznej?', back: 'Stoicyzm zalecał spokój ducha, wyzbycie się namiętności (apatheia) i rozumne przyjęcie losu niezależnie od emocji; epikureizm uczył rozumnego cieszenia się życiem („carpe diem”) i osiągania spokoju (ataraksji) bez lęku przed śmiercią i bogami.' },
    { id: 'f2-14', front: 'Jakie trzy wzorce osobowe (parenetyczne) dominowały w Średniowieczu?', back: '1) Rycerz (Roland — honor, wiara, wierność suwerenowi); 2) Asceta (św. Aleksy — wyrzeczenie się majątku dla Boga); 3) Władca (Karol Wielki — sprawiedliwy obrońca chrześcijaństwa).' },
    { id: 'f2-15', front: 'Co oznaczają średniowieczne toposy „Danse Macabre” i „Memento Mori”?', back: 'Danse Macabre (taniec śmierci) ukazuje równość wszystkich stanów wobec śmierci; Memento Mori („pamiętaj o śmierci”) przypomina o przemijaniu i potrzebie zbawienia.' },
    { id: 'f2-16', front: 'Czym charakteryzuje się barokowy konceptyzm oraz sarmatyzm?', back: 'Konceptyzm to budowanie utworu na zaskakującym pomyśle i paradoksie (Morsztyn); sarmatyzm to ideologia polskiej szlachty łącząca dumę ze złotej wolności z ksenofobią i przywiązaniem do tradycji.' },
    { id: 'f2-17', front: 'Jaka była główna funkcja literatury w Oświeceniu („docere et delectare”)?', back: '„Uczyć bawiąc” — literatura miała naprawiać wady społeczeństwa i edukować obywatela poprzez satyry, bajki, komedie i publicystykę.' },
    { id: 'f2-18', front: 'Czym jest deizm i racjonalizm w filozofii Oświecenia?', back: 'Racjonalizm uznawał rozum i naukę za główne źródło poznania; deizm zakładał, że Bóg stworzył świat niczym zegarmistrz, ale już nie ingeruje w jego prawa.' },
    { id: 'f2-19', front: 'Czym były scjentyzm i utylitaryzm w programie polskiego Pozytywizmu?', back: 'Scjentyzm to wiara w poznanie naukowe oparte na doświadczeniu i faktach; utylitaryzm uznawał za wartościowe to, co przynosi praktyczny pożytek społeczeństwu.' },
    { id: 'f2-20', front: 'Czym różni się realizm od naturalizmu w prozie XIX i XX wieku?', back: 'Realizm wiernie i obiektywnie odtwarza typowe zjawiska społeczne i psychologiczne; naturalizm bez upiększeń pokazuje ciemne strony życia, biologizm i determinizm środowiska.' },
    { id: 'f2-21', front: 'Jakie dwie filozofie zdominowały Młodą Polskę (Schopenhauer vs Nietzsche)?', back: 'Pesymizm Schopenhauera (cierpienie z woli życia, ratunek w sztuce i nirwanie) oraz witalizm Nietzschego (wola mocy, kult siły i nadczłowieka).' },
    { id: 'f2-22', front: 'Co oznaczają pojęcia „katastrofizm” i „groteska” w Dwudziestoleciu międzywojennym?', back: 'Katastrofizm (lata 30.) wyrażał przeczucie zagłady cywilizacji i wojny; groteska deformowała rzeczywistość przez absurd i śmiech podszyty lękiem (Gombrowicz, Witkacy).' },
    { id: 'f2-23', front: 'Czym jest „człowiek zlagrowany” w literaturze wojny i okupacji?', back: 'Pojęcie z opowiadań Borowskiego: więzień tak przystosowany do okrutnych praw obozu koncentracyjnego, że aby przeżyć, przejmuje logikę obozu kosztem innych.' },
    { id: 'f2-24', front: 'Czym różni się postawa Różewicza („Ocalony”) od postawy Herberta („Pan Cogito”) we współczesności?', back: 'Różewicz ogłasza rozpad powojennych wartości i szuka prostych słów od zera; Herbert nakazuje mimo klęsk trwać wiernie przy dawnych zasadach moralnych („idź wyprostowany”).' }
  ],
  quiz: [
    {
      q: 'Prawidłowa kolejność epok to:',
      options: [
        'Renesans → Oświecenie → Barok → Romantyzm',
        'Renesans → Barok → Oświecenie → Romantyzm',
        'Średniowiecze → Barok → Renesans → Oświecenie',
        'Pozytywizm → Romantyzm → Młoda Polska'
      ],
      correct: 1,
      explanation: 'Po Renesansie następuje Barok (XVII w.), potem Oświecenie (XVIII w.), a następnie Romantyzm (XIX w.).'
    },
    {
      q: 'Koncepcja „człowieka zlagrowanego” pochodzi z utworów:',
      options: ['Gustawa Herlinga-Grudzińskiego', 'Tadeusza Borowskiego', 'Hanny Krall', 'Alberta Camusa'],
      correct: 1,
      explanation: 'Tadeusz Borowski opisał człowieka zlagrowanego — przystosowanego do obozowej machiny kosztem dawnej moralności.'
    },
    {
      q: 'Hasło „uczyć bawiąc” i krytyka sarmatyzmu w satyrach to cechy:',
      options: ['Baroku', 'Oświecenia', 'Romantyzmu', 'Pozytywizmu'],
      correct: 1,
      explanation: 'Dydaktyzm i racjonalistyczna krytyka wad szlacheckich (Ignacy Krasicki) to fundament Oświecenia.'
    },
    {
      q: 'Pojęcie „hybris” (pycha prowadząca bohatera do upadku) wywodzi się z:',
      options: ['Antyku', 'Średniowiecza', 'Młodej Polski', 'Dwudziestolecia'],
      correct: 0,
      explanation: 'Hybris to pojęcie z greckiej tragedii antycznej (np. pycha Kreona w „Antygonie”).'
    },
    {
      q: 'Który utwór powstał w epoce Pozytywizmu?',
      options: ['Przedwiośnie', 'Wesele', 'Lalka', 'Kordian'],
      correct: 2,
      explanation: '„Lalka” Bolesława Prusa to arcydzieło polskiego realizmu z epoki Pozytywizmu.'
    },
    {
      q: 'Hasło „carpe diem” (chwytaj dzień) pochodzi z filozofii:',
      options: ['Stoicyzmu', 'Epikureizmu (Horacy)', 'Teocentryzmu', 'Dekadentyzmu'],
      correct: 1,
      explanation: 'Słynną formułę „carpe diem” spopularyzował antyczny poeta Horacy w duchu epikureizmu i umiaru.'
    },
    {
      q: 'Która epoka w Polsce trwała od 1822 r. (Ballady i romanse) do 1863 r. (powstanie styczniowe)?',
      options: ['Oświecenie', 'Romantyzm', 'Pozytywizm', 'Młoda Polska'],
      correct: 1,
      explanation: 'To klasyczne ramy czasowe polskiego Romantyzmu.'
    },
    {
      q: 'Katastrofizm w literaturze Dwudziestolecia międzywojennego oznaczał:',
      options: [
        'Radość z postępu technicznego',
        'Lęk przed nadchodzącą wojną, totalitaryzmem i zagładą kultury',
        'Powrót do sarmackiej tradycji szlacheckiej',
        'Fascynację życiem wsi pod Krakowem'
      ],
      correct: 1,
      explanation: 'W latach 30. XX w. poeci i pisarze (np. Miłosz, Witkacy) przeczuwali nadchodzącą katastrofę wojenną.'
    },
    {
      q: 'Która filozofia antyczna zalecała wewnętrzny spokój, dystans wobec namiętności i zgodę na los?',
      options: ['Epikureizm', 'Stoicyzm', 'Sceptycyzm', 'Sofistyka'],
      correct: 1,
      explanation: 'Stoicyzm uczył równowagi ducha oraz opanowania namiętności (apatheia) i kierowania się rozumem zarówno w szczęściu, jak i w nieszczęściu.'
    },
    {
      q: 'Jakie trzy wzorce osobowe (parenetyczne) są najbardziej reprezentatywne dla Średniowiecza?',
      options: [
        'Kupiec, naukowiec, rewolucjonista',
        'Rycerz, asceta, władca',
        'Poeta, sarmata, obywatel',
        'Dekadent, inteligent, robotnik'
      ],
      correct: 1,
      explanation: 'Średniowieczna literatura parenetyczna propagowała wzorce rycerza (Roland), ascety (św. Aleksy) oraz sprawiedliwego władcy.'
    },
    {
      q: 'Renesansowe hasło „ad fontes” oznaczało:',
      options: [
        'Ucieczkę od nauki ku mistycyzmowi',
        'Powrót do źródeł — oryginalnych tekstów antycznych i Biblii',
        'Tworzenie wyłącznie w języku francuskim',
        'Odrzucenie wszelkiej tradycji literackiej'
      ],
      correct: 1,
      explanation: 'Humaniści renesansowi sięgali do oryginalnych dzieł starożytnej Grecji, Rzymu i Pisma Świętego.'
    },
    {
      q: 'Dla której epoki charakterystyczne są konceptyzm, marinizm, motyw vanitas oraz sarmatyzm?',
      options: ['Oświecenie', 'Renesans', 'Barok', 'Pozytywizm'],
      correct: 2,
      explanation: 'Barok łączył kunsztowne koncepty poetyckie i refleksję nad marnością świata (vanitas) z polskim zjawiskiem sarmatyzmu.'
    },
    {
      q: 'Oświeceniowa zasada „docere et delectare” nakazywała literaturze:',
      options: [
        'Szokować czytelnika krwawą grozą',
        'Uczyć i wychowywać obywatela, jednocześnie go bawiąc',
        'Skupiać się wyłącznie na przeżyciach mistycznych',
        'Pisać wyłącznie niepoprawną polszczyzną'
      ],
      correct: 1,
      explanation: 'Satyry, bajki i komedie Oświecenia miały poprawiać obyczaje w przystępnej, zabawnej formie.'
    },
    {
      q: 'Które pojęcie NIE należy do programu polskiego Pozytywizmu?',
      options: ['Praca organiczna', 'Praca u podstaw', 'Scjentyzm', 'Mesjanizm narodowy'],
      correct: 3,
      explanation: 'Mesjanizm narodowy jest ideą epoki Romantyzmu („Dziady cz. III”), natomiast pozytywiści stawiali na pracę i naukę.'
    },
    {
      q: 'Filozofia Artura Schopenhauera w Młodej Polsce wskazywała jako ratunek przed cierpieniem:',
      options: [
        'Bezinteresowną sztukę, współczucie i stan nirwany',
        'Agresywną walkę o władzę polityczną',
        'Szybki rozwój fabryk i kolei żelaznych',
        'Zbrojny bunt przeciwko zaborcy'
      ],
      correct: 0,
      explanation: 'Schopenhauer widział wyzwolenie od bólu istnienia w wyciszeniu popędów, kontemplacji sztuki i nirwanie.'
    },
    {
      q: 'Co oznacza pojęcie „nowomowa” w literaturze o totalitaryzmach XX wieku?',
      options: [
        'Zbiór poetyckich neologizmów Bolesława Leśmiana',
        'Język władzy totalitarnej celowo ograniczający słownictwo, by uniemożliwić krytyczne myślenie',
        'Współczesny slang młodzieżowy',
        'Styl biblijny w przekładach średniowiecznych'
      ],
      correct: 1,
      explanation: 'George Orwell opisał nowomowę w „Roku 1984” jako narzędzie kontroli umysłu poprzez redukcję języka.'
    }
  ]
};
