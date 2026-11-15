export const DEPT_06 = {
  id: 'dept-06',
  displayNum: 6,
  code: 'DZIAŁ 6',
  title: 'Młoda Polska — Symbolizm, Nastroje i Społeczeństwo',
  subtitle: 'Modernizm, dekadentyzm, Wesele w całości, Chłopi (Jesień), liryka młodopolska',
  duration: '85 min',
  xp: 260,
  notes: [
    {
      id: 'kn6-1',
      title: 'Filozofia Przełomu Wieków, Nastroje i Estetyka Młodej Polski',
      badge: 'Fundament Epoki',
      intro:
        'Przełom XIX i XX wieku (fin de siècle) przyniósł kryzys wiary w pozytywistyczny postęp i naukę. Młoda Polska (1890–1918) to epoka melancholii, buntu przeciw mieszczańskiemu filisterstwu, powrotu do metafizyki oraz rozkwitu symbolizmu i impresjonizmu.',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Dekadentyzm i Artur Schopenhauer',
              desc: 'Filozoficzny pesymizm schyłku wieku.',
              details: {
                summary:
                  'Przekonanie o nieuchronnym upadku cywilizacji europejskiej, bezsensie ludzkiego działania i zmęczeniu życiem.',
                bullets: [
                  'Schopenhauer: ludzkim życiem rządzi nienasycony, ślepy popęd; człowiek miota się między cierpieniem (gdy pragnie) a nudą (gdy osiągnie cel).',
                  'Drogi ucieczki wg Schopenhauera: stan Nirwany (wyzbycie się pragnień na wzór buddyzmu), bezinteresowna kontemplacja sztuki oraz współczucie dla innych istot.',
                  'W literaturze: wiersze Kazimierza Przerwy-Tetmajera („Koniec wieku XIX”, „Nie wierzę w nic”).'
                ],
                essayUse: 'Kluczowy kontekst filozoficzny do analizy postaw bierności, apatii i kryzysu tożsamości na przełomie wieków.'
              }
            },
            {
              term: 'Fryderyk Nietzsche i Wola Mocy',
              desc: 'Pochwała siły, witalizmu i Nadczłowieka.',
              details: {
                summary:
                  'Bunt przeciw dekadenckiej słabości i tradycyjnej moralności chrześcijańskiej nazwanej „moralnością niewolników”.',
                bullets: [
                  'Koncepcja Nadczłowieka (Übermensch): silna, wybitna jednostka tworząca własne wartości poza dobrem i złem.',
                  'Afirmacja życia i wola mocy: przezwyciężenie marazmu poprzez działanie, twórczość i tężyznę witalną.',
                  'W poezji: Leopold Staff („Kowal”) — wykuwanie twardego serca odpornego na słabość.'
                ],
                essayUse: 'Do tematów zestawiających bierność z aktywnością, wolę walki z dekadenckim marazmem.'
              }
            },
            {
              term: 'Sztuka dla sztuki i Cyganeria krakowska',
              desc: 'Wyzwolenie twórczości z pęt utylitaryzmu.',
              details: {
                summary:
                  'Odrzucenie pozytywistycznego obowiązku naprawiania świata — sztuka jest wartością autonomiczną i absolutną.',
                bullets: [
                  'Stanisław Przybyszewski i manifest „Confiteor” (1899): Artysta nie jest sługą narodu ani moralistą, lecz kapłanem czystego Piękna.',
                  'Pogarda dla „filistra”: filister to ograniczony, syty mieszczanin myślący jedynie o zysku i pozorach obyczajowych.',
                  'Cyganeria (bohema): środowisko krakowskich artystów żyjących w kawiarniach (Jama Michalika), kpiących z konwenansów.'
                ],
                essayUse: 'Do motywu artysty, roli sztuki w społeczeństwie i buntu obyczajowego.'
              }
            },
            {
              term: 'Chłopomania (Ludomania)',
              desc: 'Fascynacja inteligencji życiem i siłą wsi.',
              details: {
                summary:
                  'Moda wśród młodopolskich artystów na zachwycanie się folklorem, wiejską witalnością i żenienie się z chłopkami.',
                bullets: [
                  'Przykłady autentyczne: ślub Włodzimierza Tetmajera z Anną Mikołajczykówną oraz Lucjana Rydla z Jadwigą Mikołajczykówną.',
                  'Mit żywotności ludu: nadzieja, że nieskażony dekadencką niemocą chłop potrafi odrodzić Polskę i poprowadzić walkę o niepodległość.',
                  'Demitologizacja u Wyspiańskiego: „Wesele” bezlitośnie obnaża powierzchowność tego zbratania.'
                ],
                essayUse: 'Fundament analizy relacji inteligencja–chłopi w „Weselu” i „Chłopach”.'
              }
            }
          ]
        },
        {
          type: 'callout',
          variant: 'blue',
          title: 'Kierunki w Sztuce Młodopolskiej',
          items: [
            'Symbolizm: posługiwanie się wieloznacznym symbolem do wyrażenia tajemnicy bytu i stanów podświadomości (Wyspiański „Wesele”).',
            'Impresjonizm: chwytanie ulotnej chwili, gra barw, światła, melodii i zapachów, technika synestezji (łączenie wrażeń z różnych zmysłów).',
            'Ekspresjonizm: gwałtowne wyrażanie skrajnych emocji, krzyk rozpaczy, dysonans i deformacja (Kasprowicz „Dies irae”).'
          ]
        }
      ]
    },
    {
      id: 'kn6-2',
      title: 'Stanisław Wyspiański: „Wesele” — Narodowy Dramat Symboliczny',
      badge: 'Lektura Obowiązkowa (w całości)',
      intro:
        'Arcydzieło polskiego teatru (premiera w Krakowie 1901 r.). Punktem wyjścia było autentyczne wesele Lucjana Rydla z Jadwigą Mikołajczykówną w podkrakowskich Bronowicach (listopad 1900 r.). Wyspiański przekształcił wesele w bezlitosną diagnozę narodowej niemocy Polaków.',
      blocks: [
        {
          type: 'prose',
          heading: 'Struktura Trójdzielna — Od Satyry Obyczajowej do Wizji Narodowej',
          paragraphs: [
            'Akt I ma charakter realistyczno-obyczajowy i satyryczny: Wyspiański portretuje gości weselnych, demaskując wzajemne niezrozumienie i sztuczność sojuszu krakowskiej inteligencji z bronowickimi chłopami.',
            'Akt II to dramat wizyjno-symboliczny: o północy w chacie pojawiają się Osoby Dramatu — zjawy będące ucieleśnieniem skrywanych lęków, wyrzutów sumienia i marzeń bohaterów realnych.',
            'Akt III przynosi narastające oczekiwanie na zapowiedziane powstanie, katastrofę spowodowaną lekkomyślnością i materializmem oraz finałowy chocholi taniec uśpionego narodu.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Widmo (malarz de Laveaux)',
              desc: 'Ukazuje się Marysi (siostrze Panny Młodej).',
              details: {
                summary: 'Duch dawnego zmarłego narzeczonego Marysi, krakowskiego malarza.',
                bullets: [
                  'Symbol: niespełniona, utracona romantyczna miłość i tęsknota za przeszłością.',
                  'Wymowa: ból przemijania i niemożność ucieczki od dawnych uczuć.'
                ],
                essayUse: 'Do motywu miłości tragicznej, pamięci o zmarłych i tęsknoty.'
              }
            },
            {
              term: 'Stańczyk (błazen Zygmuntów)',
              desc: 'Ukazuje się Dziennikarzowi (Rudolfowi Starzewskiemu).',
              details: {
                summary: 'Uosobienie mądrości politycznej dawnej potężnej Rzeczypospolitej.',
                bullets: [
                  'Wyrzut sumienia Dziennikarza, który jako redaktor konserwatywnego „Czasu” (ugrupowanie Stańczyków) usypia naród w lojalizmie wobec zaborcy austriackiego.',
                  'Wręcza mu Kaduceusz (laskę błazeńską) ze słowami: „Mąć nim wodę, mąć!” — gorzka ironia pod adresem dziennikarstwa pogłębiającego narodową apatię.'
                ],
                essayUse: 'Do motywu odpowiedzialności elit i publicystyki za losy zniewolonego narodu.'
              }
            },
            {
              term: 'Rycerz Czarny (Zawisza Czarny)',
              desc: 'Ukazuje się Poecie (Kazimierzowi Przerwie-Tetmajerowi).',
              details: {
                summary: 'Symbol rycerskiego honoru, potęgi, męstwa i zwycięstwa pod Grunwaldem.',
                bullets: [
                  'Demaskuje niemoc dekadenckiej poezji Tetmajera, która zamiast zagrzewać do walki, sączy jad rozpaczy i zniechęcenia.',
                  'Ukazuje Poecie pustkę pod przyłbicą, gdy ten nie ma odwagi chwycić za miecz.'
                ],
                essayUse: 'Do motywu roli artysty i poezji tyrtejskiej w walce o wolność.'
              }
            },
            {
              term: 'Hetman (Franciszek Ksawery Branicki)',
              desc: 'Ukazuje się Panu Młodemu (Lucjanowi Rydlowi).',
              details: {
                summary: 'Magnat, targowiczanin i zdrajca ojczyzny, smażący się w piekielnych płomieniach.',
                bullets: [
                  'Symbol arystokratycznej pychy, zdrady interesów narodowych dla prywatnych korzyści i złota.',
                  'Wypomina Panu Młodemu, że jego ślub z chłopką to tylko powierzchowna maska i farsa zdradzająca własną klasę społeczną.'
                ],
                essayUse: 'Do motywu zdrady narodowej, winy i kary oraz fałszu społecznego.'
              }
            },
            {
              term: 'Upiór (Jakub Szela)',
              desc: 'Ukazuje się Dziadowi.',
              details: {
                summary: 'Krwawy przywódca rabacji galicyjskiej (1846 r.), w której chłopi mordowali polską szlachtę.',
                bullets: [
                  'Zjawa obnaża iluzoryczność bratania się inteligencji z chłopami: krew przelana w rzezi galicyjskiej wciąż dzieli obie sfery nieprzekraczalną przepaścią.',
                  'Szela prosi o kubeł wody, by zmyć krew z rąk, która natychmiast wsiąka z powrotem w sukmanę.'
                ],
                essayUse: 'Kluczowy kontekst historyczny do problemu barier klasowych i pamięci historycznej.'
              }
            },
            {
              term: 'Wernyhora i Złoty Róg',
              desc: 'Ukazuje się Gospodarzowi (Włodzimierzowi Tetmajerowi).',
              details: {
                summary: 'Legendarny kozacki wieszcz z lirą, głoszący proroctwo odrodzenia Polski.',
                bullets: [
                  'Przekazuje Gospodarzowi Złoty Róg — symbol sygnału do narodowego powstania i zjednoczenia wszystkich stanów.',
                  'Lekkomyślność Gospodarza: zmęczony wódz idzie spać, a róg powierza młodemu parobkowi Jaśkowi.'
                ],
                essayUse: 'Do motywu zmarnowanej szansy historycznej i braku przywództwa.'
              }
            }
          ]
        },
        {
          type: 'callout',
          variant: 'amber',
          title: 'Finał: Czapka z pawich piór i Chocholi Taniec',
          items: [
            'Jasiek gubi Złoty Róg, schylając się po czapkę z pawich piór (symbol próżności, prywaty i chłopskiego materializmu). Zostaje mu w ręku jedynie powróz.',
            'Chocholi taniec: Chochoł gra na patykach monotonną, hipnotyczną melodię, a zebrani goście — chłopi (którzy odłożyli/porzucili kosy) i inteligencja — tańczą w bezwładnym, lunatycznym letargu.',
            'Słynne słowa Chochoła: „Miałeś, chamie, złoty róg, miałeś, chamie, czapkę z piór: czapkę wicher niesie, róg huka po lesie, ostał ci się ino sznur...”.',
            'Pamiętaj: Chochoł ma dwoistą symbolikę — jest symbolem uśpienia i martwoty narodu pod zaborami, ale jako otulina słomiana chroni różę na zimę, co daje nadzieję na przebudzenie na wiosnę!'
          ]
        }
      ]
    },
    {
      id: 'kn6-3',
      title: 'Władysław Stanisław Reymont: „Chłopi” (tom I: Jesień) — Epopeja Wsi Polskiej',
      badge: 'Lektura Obowiązkowa (t. I Jesień — we fragmentach)',
      intro:
        'Nagrodzona literacką Nagrodą Nobla (1924) epopeja chłopska. Reymont stworzył uniwersalny mit wsi Lipce, gdzie życie człowieka podporządkowane jest trzem potężnym siłom: odwiecznemu rytmowi przyrody, kalendarzowi liturgicznemu oraz bezwzględnej walce o ziemię.',
      blocks: [
        {
          type: 'prose',
          heading: 'Czas Mityczny i Porządek Społeczny w Lipcach',
          paragraphs: [
            'W „Chłopach” czas historyczny praktycznie nie istnieje. Życiem gromady rządzi cykl agrarny (pory roku determinujące wykopki, siew, żniwa) oraz święta kościelne i obrzędy.',
            'Gromada lipiecka to społeczność o surowej hierarchii majątkowej. Miarą wartości człowieka jest ilość posiadanych morgów ziemi: najbogatsi gospodarze (np. Maciej Boryna) decydują o wszystkim, poniżej stoją średniorolni, komornicy i bezrolni żebracy (np. stara Agata; osobne miejsce zajmują wywłaszczona przez dzieci wyrobnica Jagustynka oraz wędrowny tajny nauczyciel Roch). Kto nie ma ziemi, ma w gromadzie słabszą pozycję.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Maciej Boryna vs Antek Boryna',
              desc: 'Dramat ojcobójczy i konflikt o ziemię.',
              details: {
                summary:
                  'Maciej (58 lat) to najbogatszy gospodarz we wsi, autorytatywny patriarcha rodu, żeniący się po śmierci żony z 19-letnią Jagną.',
                bullets: [
                  'Konflikt z synem Antkiem: Antek pracuje u ojca jak parobek bez własnej ziemi; buntuje się przeciw ojcu i żąda przepisania swojej części majątku.',
                  'Rywalizacja o kobietę: Antek kocha namiętną Jagnę, która staje się jego macochą. Dochodzi do krwawej bójki między ojcem a synem i wypędzenia Antka z rodziną z chałupy.',
                  'Zapis 6 morgów: Maciej przepisuje Jagnie najlepsze morgi ziemi, co doprowadza rodzinę Borynów do furii.'
                ],
                essayUse: 'Do motywu konfliktu pokoleń, walki o majątek, zazdrości i dumy męskiej.'
              }
            },
            {
              term: 'Tragizm Jagny Paczesiówny',
              desc: 'Wolna natura w pułapce bezwzględnej gromady.',
              details: {
                summary:
                  'Najpiękniejsza dziewczyna w Lipcach, wrażliwa artystycznie (wycina misterne wycinanki z papieru), kierująca się odruchami serca i popędem.',
                bullets: [
                  'Zostaje wydana za mąż przez matkę Dominikową za starego Borynę wyłącznie z chciwości o ziemię.',
                  'Nie pasuje do pragmatycznego świata Lipiec — jej zmysłowość i niezależność budzą pożądanie mężczyzn i nienawiść zazdrosnych kobiet.',
                  'Finał losów Jagny: w tomie „Lato” zostaje uznana za kozła ofiarnego nieszczęść wsi, zhańbiona, wywieziona na wozie gnoju i wypędzona poza granice Lipiec.'
                ],
                essayUse: 'Do motywu jednostki wyobcowanej ze społeczności, fatalizmu namiętności i mechanizmu kozła ofiarnego.'
              }
            },
            {
              term: 'Obyczaje i Obrzędy w tomie „Jesień”',
              desc: 'Etnograficzne bogactwo kultury ludowej.',
              details: {
                summary:
                  'Tom „Jesień” to kopalnia wiedzy o tradycjach polskiej wsi XIX wieku.',
                bullets: [
                  'Wykopki ziemniaków: wspólna, ciężka praca jednocząca wieś.',
                  'Jarmark w Tymowie: handel, rewia mody ludowej, picie wódki w karczmie.',
                  'Zmówiny i zrękowiny: swatowie z wódką idący do chałupy Dominikowej.',
                  'Wesele Boryny i Jagny: wielodniowe obżarstwo, tańce, pieśni weselne i symboliczny obrzęd oczepin (obcięcie warkocza panny młodej i nałożenie czepca).'
                ],
                essayUse: 'Niezastąpiony materiał do tematów o tradycji, obrzędowości, roli społeczności i kulturze ludowej.'
              }
            }
          ]
        },
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Stylistyka i Konwencje w „Chłopach”',
          items: [
            'Naturalizm: bezwzględna walka o przetrwanie, potęga instynktów biologicznych (seks, głód, walka o ziemię), brutalność obyczajów.',
            'Impresjonizm: zachwycające, poetyckie opisy przyrody (np. poranki, mgły nad rzeką, zachody słońca malowane grą światła i kolorów).',
            'Stylizacja gwarowa: język postaci oparty na gwarze łowickiej połączonej z poetyckim językiem młodopolskim.'
          ]
        }
      ]
    },
    {
      id: 'kn6-4',
      title: 'Liryka Młodej Polski — Od Dekadentyzmu do Franciszkanizmu',
      badge: 'Poezja Maturalna',
      intro:
        'Poezja Młodej Polski to kalejdoskop postaw egzystencjalnych: od skrajnego zwątpienia i niemocy (Tetmajer), przez ekspresjonistyczny bunt przeciw Bogu (Kasprowicz), po odrodzenie stoickie i pochwałę pracy (Staff).',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Kazimierz Przerwa-Tetmajer: „Koniec wieku XIX”',
              desc: 'Manifest i katechizm dekadentyzmu.',
              details: {
                summary:
                  'Wiersz-rozrachunek ze wszystkimi dotychczasowymi wartościami ludzkości.',
                bullets: [
                  'Poeta kolejno odrzuca: wiarę, rozum, naukę, sztukę, ironię, walkę i rezygnację jako bezużyteczne tarcze przeciw złu świata.',
                  'Finałowa puenta: na pytanie „Cóż więc jest? Co zostało nam, co wszystko wiemy...” człowiek końca wieku może jedynie bezradnie „Głowę zwiesić”.'
                ],
                essayUse: 'Wzorcowy utwór do zobrazowania nastrojów dekadentyzmu i kryzysu wartości fin de siècle’u.'
              }
            },
            {
              term: 'Jan Kasprowicz: „Krzak dzikiej róży w Ciemnych Smreczynach”',
              desc: 'Mistrzostwo impresjonizmu i symbolizmu tatrzańskiego.',
              details: {
                summary:
                  'Cykl czterech sonetów operujący kontrastem kolorystycznym i symbolicznym.',
                bullets: [
                  'Krzak czerwonej dzikiej róży: przytulony do zimnej skały, pełen witalności, delikatności i lęku przed burzą (symbol życia, piękna i kruchości).',
                  'Powalona przez burzę limba: zbutwiały, spróchniały pień drzewa leżący obok (symbol nieuchronnej śmierci i przemijania).',
                  'Bogactwo impresjonistyczne: gra świateł, błękit nieba, zapach ziół, szum potoków.'
                ],
                essayUse: 'Do analizy środków stylistycznych (impresjonizm, synestezja) oraz motywu przemijania i siły życia.'
              }
            },
            {
              term: 'Jan Kasprowicz: Hymn „Dies irae” (Dzień gniewu)',
              desc: 'Ekspresjonistyczny krzyk buntu i katastrofizm.',
              details: {
                summary:
                  'Monumentalna wizja Sądu Ostatecznego, łącząca motywy biblijne z ekspresjonistycznym krzykiem cierpienia.',
                bullets: [
                  'Oskarżenie Boga: podmiot liryczny rzuca buntownicze oskarżenie pod adresem Stwórcy, czyniąc Go odpowiedzialnym za istnienie grzechu i zła na świecie („Nic, co się stało pod sklepem niebiosów, bez Twojej woli nie stało się, Panie!”).',
                  'Szatan jako król ziemi i zdeptana przez grzech ludzkość.'
                ],
                essayUse: 'Do motywu prometeizmu, buntu przeciw Bogu, teodycei i apokalipsy.'
              }
            },
            {
              term: 'Leopold Staff: „Kowal” oraz „Deszcz jesienny”',
              desc: 'Nietzscheański witalizm vs symboliczny smutek.',
              details: {
                summary:
                  'Dwa wiersze ukazujące niezwykłą rozpiętość poetycką Staffa.',
                bullets: [
                  '„Kowal” (kontekst / wybór poezji): sonet w duchu nietzscheańskim; kowal w kuźni wykuwa ze szlachetnych kruszców serce „hartowne, mężne, serce dumne, silne”; woli je zniszczyć, niż pozwolić mu skarleć słabością („Bo lepiej giń, zmiażdżone cyklopowym razem, / Niżbyś żyć miało własną słabością przeklęte”).',
                  '„Deszcz jesienny”: wiersz nastrojowy, onomatopeiczny; miarowy stukot kropel deszczu o szyby rodzi wizję płaczącego w ogrodzie szatana i bezkresnego smutku.'
                ],
                essayUse: 'Do zestawienia postawy aktywnej (hartowanie woli) z biernością nastrojową (melancholia).'
              }
            }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'kf6-1', front: 'Jakie są ramy czasowe Młodej Polski?', back: 'Ok. 1890 r. – 1918 r. (odzyskanie przez Polskę niepodległości).', hint: 'Od debiutów modernistów do 1918', category: 'epoka' },
    { id: 'kf6-2', front: 'Co oznacza pojęcie „dekadentyzm”?', back: 'Poczucie schyłku kultury, bezsensu istnienia, apatii i bezradności człowieka wobec świata u schyłku XIX wieku.', hint: 'Fin de siècle i Schopenhauer', category: 'pojecie' },
    { id: 'kf6-3', front: 'Czym była „chłopomania” (ludomania)?', back: 'Modą krakowskiej inteligencji na zachwyt życiem, strojem i witalnością wsi, często powierzchowną (np. małżeństwa Rydla i Tetmajera).', hint: 'Moda na wieś', category: 'pojecie' },
    { id: 'kf6-4', front: 'Kim był filister w pojęciu modernistów?', back: 'Ograniczonym, sytym mieszczaninem o ciasnych horyzontach, myślącym jedynie o pieniądzach i pozorach moralnych.', hint: 'Przeciwieństwo artysty', category: 'pojecie' },
    { id: 'kf6-5', front: 'Jakie autentyczne wydarzenie stało się kanwą „Wesela” Wyspiańskiego?', back: 'Ślub poety Lucjana Rydla z chłopką Jadwigą Mikołajczykówną w Bronowicach w listopadzie 1900 r.', hint: 'Rydel i Bronowice', category: 'lektura' },
    { id: 'kf6-6', front: 'Komu ukazuje się Stańczyk w „Weselu” i co mu wręcza?', back: 'Ukazuje się Dziennikarzowi (Rudolfowi Starzewskiemu) i wręcza mu Kaduceusz — laskę błazeńską do mącenia narodowej wody.', hint: 'Dziennikarz i Kaduceusz', category: 'bohater' },
    { id: 'kf6-7', front: 'Czyim uosobieniem jest zjawa Rycerza Czarnego w „Weselu”?', back: 'Zawiszy Czarnego — ukazuje się Poecie jako symbol dawnej chwały, potęgi i wezwanie do czynu zamiast dekadencji.', hint: 'Zawisza Czarny i Poeta', category: 'bohater' },
    { id: 'kf6-8', front: 'Kim był Upiór w „Weselu” i co symbolizuje?', back: 'Jakubem Szelą (przywódcą rabacji galicyjskiej 1846 r.) — symbolizuje krwawą przepaść i nienawiść między chłopami a szlachtą.', hint: 'Jakub Szela i rzeź szlachty', category: 'motyw' },
    { id: 'kf6-9', front: 'Co symbolizuje Złoty Róg podarowany przez Wernyhorę?', back: 'Hasło do narodowego powstania, wezwanie do walki i zjednoczenie wszystkich stanów.', hint: 'Hasło do walki', category: 'motyw' },
    { id: 'kf6-10', front: 'W jakich okolicznościach Jasiek gubi Złoty Róg?', back: 'Schyla się po czapkę z pawich piór, którą wiatr strącił mu z głowy (triumf próżności i prywaty nad sprawą narodową).', hint: 'Czapka z pawich piór', category: 'lektura' },
    { id: 'kf6-11', front: 'Co oznacza finałowy „chocholi taniec” w „Weselu”?', back: 'Uśpienie narodu, marazm, letarg i niezdolność Polaków do podjęcia czynu niepodległościowego.', hint: 'Hipnotyczny letarg', category: 'motyw' },
    { id: 'kf6-12', front: 'Wokół jakiego cyklu zorganizowany jest czas w „Chłopach” Reymonta?', back: 'Wokół odwiecznego rytmu przyrody (pory roku) oraz kalendarza prac polowych i świąt kościelnych.', hint: 'Rytm natury i obrzędowości', category: 'pojecie' },
    { id: 'kf6-13', front: 'O co toczy się główny konflikt między Maciejem a Antkiem Boryną?', back: 'O ziemię (brak zapisu majątku na syna) oraz o kobietę — młodą Jagnę, w której obaj się kochają.', hint: 'Ziemia i Jagna', category: 'bohater' },
    { id: 'kf6-14', front: 'Jak kończy się wątek Jagny w powieści „Chłopi”?', back: 'Gromada uznaje ją za źródło zła i grzechu, linczuje ją, wywozi ze wsi na wozie gnoju i bezwzględnie wypędza.', hint: 'Wywiezienie na gnoju', category: 'lektura' },
    { id: 'kf6-15', front: 'Jakie nurty artystyczne łączą się w powieści „Chłopi”?', back: 'Realizm (szczegółowy obraz wsi), naturalizm (biologizm, walka o byt) oraz impresjonizm (poetyckie opisy przyrody).', hint: 'Trzy nurty', category: 'pojecie' },
    { id: 'kf6-16', front: 'Jaka jest wymowa wiersza „Koniec wieku XIX” Tetmajera?', back: 'Poczucie całkowitej bezradności człowieka: żadna filozofia, wiara, walka ani sztuka nie dają ukojenia w obliczu zła.', hint: 'Głowę zwiesić', category: 'lektura' },
    { id: 'kf6-17', front: 'Jaki kontrast przedstawia sonet Kasprowicza „Krzak dzikiej róży...”?', back: 'Kontrast między żywym, pąsowym krzakiem róży (życie, piękno) a zbutwiałym pniem powalonej limby (śmierć, rozkład).', hint: 'Róża i limba', category: 'motyw' },
    { id: 'kf6-18', front: 'Do jakiej filozofii nawiązuje wiersz Leopolda Staffa „Kowal”?', back: 'Do filozofii Fryderyka Nietzschego — wola mocy, hartowanie twardego charakteru i odrzucenie słabości.', hint: 'Nietzscheanizm', category: 'pojecie' },
    { id: 'kf6-19', front: 'Co oznacza termin „synestezja” popularny w Młodej Polsce?', back: 'Łączenie wrażeń odbieranych przez różne zmysły naraz (np. „błękitny zapach”, „ostry kolor”, „słodki dźwięk”).', hint: 'Mieszanie zmysłów', category: 'pojecie' },
    { id: 'kf6-20', front: 'Kto napisał młodopolski manifest „Confiteor” i jakie hasło głosił?', back: 'Stanisław Przybyszewski — głosił hasło „Sztuka dla sztuki” (artysta kapłanem piękna wolnym od służby społecznej).', hint: 'Przybyszewski', category: 'epoka' },
    { id: 'kf6-21', front: 'Jakie dwie główne postawy filozoficzne kształtowały światopogląd Młodej Polski?', back: 'Pesymizm Artura Schopenhauera (życie to cierpienie wynikające z popędu woli, ratunkiem sztuka, asceza i nirwana) oraz witalizm Fryderyka Nietzschego (wola mocy, bunt wobec słabości, idea nadczłowieka).', hint: 'Schopenhauer (nirwana) vs Nietzsche (wola mocy).', category: 'epoka' },
    { id: 'kf6-22', front: 'Czym jest dekadentyzm i „chłód schyłku wieku” w poezji przełomu XIX i XX w.?', back: 'Nastrój znużenia, zwątpienia w postęp i wartości, poczucie bezsilności i nadchodzącej katastrofy cywilizacji (widoczne m.in. w wierszu „Koniec wieku XIX” K. Przerwy-Tetmajera).', hint: 'Schyłkowość i bezradność „fin de siècle”.', category: 'pojecie' },
    { id: 'kf6-23', front: 'Co symbolizuje Chata w Bronowicach i złoty róg w „Weselu” Stanisława Wyspiańskiego?', back: 'Chata w Bronowicach to miniatura całej Polski (zderzenie inteligencji z chłopstwem); Złoty Róg to symbol wielkiego, historycznego czynu niepodległościowego, który zaprzepaszczono przez przywiązanie do dóbr doczesnych (czapka z pawich piór).', hint: 'Polska w pigułce + szansa na czyn narodowy.', category: 'motyw' },
    { id: 'kf6-24', front: 'Dlaczego w „Weselu” nie doszło do wybuchu powstania narodowego, mimo że chłopi z kosami czekali pod chatą?', back: 'Jasiek zgubił Złoty Róg, schylając się po czapkę z pawich piór (symbol prywaty i próżności), a inteligencja pogrążyła się w marazmie, lęku przed ludem i chocholim tańcu.', hint: 'Zgubiony róg i letarg inteligencji.', category: 'lektura' },
    { id: 'kf6-25', front: 'Kim są Zjawy (osoby dramatu) w II akcie „Wesela” i do kogo przychodzą?', back: 'To projekcje lęków, kompleksów i sumienia bohaterów: Stańczyk (do Dziennikarza), Rycerz Czarny (do Poety), Hetman Branicki (do Pana Młodego), Upiór Szeli (do Dziada), Wernyhora (do Gospodarza), Widmo (do Marysi).', hint: 'Lustro podświadomości bohaterów.', category: 'bohater' },
    { id: 'kf6-26', front: 'Na czym polega młodopolska „chłopomania” ukazana krytycznie w „Weselu”?', back: 'Powierzchowna fascynacja inteligencji miejskiej barwnością wsi i chłopskim wigorem (śluby z chłopkami, zachwyt strojem), za którą kryje się jednak lęk przed chłopską siłą i niezrozumienie historii (pamięć rabacji 1846 r.).', hint: 'Powierzchowny zachwyt miastowych nad wsią.', category: 'epoka' },
    { id: 'kf6-27', front: 'Jaki jest sens finałowego chocholego tańca w „Weselu” Wyspiańskiego?', back: 'Symbolizuje narodowy letarg, uśpienie, niemoc i bezwolne kręcenie się w kółko mimo szansy na wolność — choć słomiana otulina chochoła skrywa też nadzieję na wiosenne przebudzenie róży.', hint: 'Marazm i uśpienie narodu.', category: 'motyw' },
    { id: 'kf6-28', front: 'Jak zbudowany jest czas w powieści „Chłopi” Władysława Reymonta i dlaczego ma to sens symboliczny?', back: 'Cztery tomy odpowiadają czterem porom roku (Jesień, Zima, Wiosna, Lato), co podkreśla cykliczność natury, rytm prac polowych oraz wpisanie losu ludzkiego w porządek przyrody i roku liturgicznego.', hint: 'Cztery pory roku = cykliczność losu i natury.', category: 'lektura' },
    { id: 'kf6-29', front: 'Co było główną przyczyną konfliktu Macieja Boryny z synem Antkiem w „Chłopach”?', back: 'Dwie nakładające się przyczyny: walka o ziemię (stary Boryna nie chce oddać majątku dzieciom) oraz rywalizacja o młodą, piękną Jagnę, która została żoną Macieja, będąc kochanką Antka.', hint: 'Spór o morgi (ziemię) i o Jagnę.', category: 'bohater' },
    { id: 'kf6-30', front: 'Czym jest symbolizm i impresjonizm w poezji młodopolskiej (na przykładzie „Krzaku dzikiej róży...”)?', back: 'Impresjonizm oddaje ulotne wrażenia barw, światła i dźwięku w naturze; symbolizm poprzez obrazy (żywa róża vs gnijąca limba) wyraża niewyrażalne prawdy egzystencjalne o pięknie, przemijaniu i samotności.', hint: 'Ulotne barwy/światła + ukryte znaczenia natury.', category: 'pojecie' },
    { id: 'kf6-31', front: 'Jaka jest rola ludu i postaci Boryny w scenie jego śmierci w „Chłopach”?', back: 'Umierający Boryna w gorączce wychodzi na pole i wykonuje gest siewcy — zjednoczenie chłopa z ziemią-matką nadaje jego śmierci wymiar niemal sakralny i mityczny.', hint: 'Gest siewcy — jedność chłopa z ziemią.', category: 'bohater' },
    { id: 'kf6-32', front: 'Jakie stanowisko zajmuje podmiot liryczny w wierszu „Kowal” Leopolda Staffa wobec cierpienia i słabości?', back: 'Odrzuca młodopolski dekadentyzm i bierność; niczym kowal wykuwa z bezkształtnej bryły swoje serce „hartowne, mężne, serce dumne, silne”, a gdy pęknie z niemocy — sam rozbija je młotem.', hint: 'Aktywizm i hartowanie ducha zamiast rozpaczy.', category: 'lektura' }
  ],
  quiz: [
    {
      id: "kq6-1",
      q: "Która zjawa w „Weselu” Stanisława Wyspiańskiego wręcza Dziennikarzowi Kaduceusz — laskę błazeńską?",
      options: [
        "Stańczyk",
        "Wernyhora",
        "Rycerz Czarny",
        "Hetman Branicki"
      ],
      correct: 0,
      explanation: "Stańczyk ukazuje się Dziennikarzowi i wręcza mu Kaduceusz ze słowami „Mąć nim wodę, mąć!”, ganiąc go za zachowawczą politykę ugodową.",
      whyWrong: {
        1: "Błąd: Wernyhora przybył do Gospodarza ze Złotym Rogiem.",
        2: "Błąd: Rycerz Czarny ukazał się Poecie.",
        3: "Błąd: Hetman ukazał się Panu Młodemu."
      },
      examTip: "Pamiętaj dopasowanie par: Stańczyk–Dziennikarz, Rycerz–Poeta, Hetman–Pan Młody, Upiór–Dziad, Wernyhora–Gospodarz."
    },
    {
      id: "kq6-2",
      q: "Upiór ukazujący się Dziadowi w II akcie „Wesela” to postać historyczna:",
      options: [
        "Tadeusza Kościuszki",
        "Stanisława Augusta Poniatowskiego",
        "Jana Kilińskiego",
        "Jakuba Szeli"
      ],
      correct: 3,
      explanation: "Upiór to Jakub Szela, krwawy przywódca rabacji galicyjskiej z 1846 roku, symbolizujący niezaleczoną wrogość między chłopami a dworem.",
      whyWrong: {
        0: "Błąd: Kościuszko nie ukazuje się jako upiór w dramacie.",
        1: "Błąd: Król Poniatowski nie pojawia się w chatce bronowickiej.",
        2: "Błąd: Kiliński był bohaterem mieszczańskim z Warszawy."
      },
      examTip: "Rabacja galicyjska 1846 roku to żelazny kontekst historyczny do Aktu II „Wesela”."
    },
    {
      id: "kq6-3",
      q: "Złoty Róg w „Weselu” został zgubiony przez Jaśka, ponieważ:",
      options: [
        "Schylił się po czapkę z pawich piór, którą wiatr strącił mu z głowy.",
        "Został napadnięty i ograbiony przez carskich kozaków na rogatkach Krakowa.",
        "Wdał się w bójkę w karczmie z Czepcem i róg wypadł mu w błoto.",
        "Zasnął pijany na progu chaty bronowickiej."
      ],
      correct: 0,
      explanation: "Jasiek przedkłada próżną, błyszczącą czapkę z pawich piór nad Złoty Róg — to alegoria prywaty i niedojrzałości narodu.",
      whyWrong: {
        1: "Błąd: Akcja toczy się pod Krakowem pod zaborem austriackim, nie było tam kozaków.",
        2: "Błąd: Jasiek nie bił się z Czepcem o róg.",
        3: "Błąd: Gospodarz zasnął, ale to Jasiek pojechał i zgubił róg w pędzie."
      },
      examTip: "Cytat: „czapkę wicher niesie, róg huka po lesie, ostał ci się ino sznur...” — naucz się go na pamięć do wypracowania!"
    },
    {
      id: "kq6-4",
      q: "Jakie znaczenie ma postać Chochoła w finale „Wesela”?",
      options: [
        "Jest wyłącznie symbolem zła i diabelskich podszeptów niszczących Polskę.",
        "Oznacza rychłe nadejście wojsk napoleońskich wyzwalających Małopolskę.",
        "Jest komiczną maskotką ludową niemającą głębszego znaczenia ideowego.",
        "Symbolizuje marazm i uśpienie narodu, ale też nadzieję na przyszłe odrodzenie (otulina chroniąca różę na zimę)."
      ],
      correct: 3,
      explanation: "Chochoł ma podwójną wymowę: usypia naród w chocholim tańcu (marazm), ale jako słoma chroni życie róży na mrozie, która zakwitnie na wiosnę.",
      whyWrong: {
        0: "Błąd: Chochoł nie jest jednoznacznym symbolem szatana.",
        1: "Błąd: Wojska napoleońskie to kontekst „Pana Tadeusza”, nie „Wesela”.",
        2: "Błąd: To jeden z najważniejszych symboli w całej literaturze polskiej."
      },
      examTip: "W wypracowaniu zawsze wskaż dwoistą naturę symbolu Chochoła — to cecha prac na maksymalną liczbę punktów."
    },
    {
      id: "kq6-5",
      q: "W tomie „Jesień” powieści „Chłopi” Maciej Boryna żeni się z Jagną Paczesiówną głównie dlatego, że:",
      options: [
        "Został do tego zmuszony wyrokiem sądu gminnego w Tymowie.",
        "Pociąga go jej niezwykła uroda i zmysłowość, a matka Jagny żąda zapisu 6 morgów ziemi.",
        "Chciał oddać cały majątek na rzecz budowy nowego kościoła w Lipcach.",
        "Jagna wniosła do małżeństwa ogromny posag pieniężny przewyższający majątek Borynów."
      ],
      correct: 1,
      explanation: "Boryna ulega zauroczeniu urodą Jagny, a transakcja małżeńska zostaje przypieczętowana przepisaniem na Jagnę 6 morgów najlepszego pola.",
      whyWrong: {
        0: "Błąd: Sąd gminny nie decydował o małżeństwach gospodarzy.",
        2: "Błąd: Boryna zaciekle bronił każdego morgu ziemi przed dziećmi i Kościołem.",
        3: "Błąd: Jagna nie miała majątku — to Boryna musiał dokonać na nią zapisu gruntu."
      },
      examTip: "Małżeństwo w Lipcach było kontraktem ekonomicznym — miłość bez ziemi była skazana na potępienie przez gromadę."
    },
    {
      id: "kq6-6",
      q: "Który z bohaterów liryki młodopolskiej wykuwa potężne, hartowne serce w wierszu Leopolda Staffa?",
      options: [
        "Kowal",
        "Szewc",
        "Drwal",
        "Rzeźbiarz"
      ],
      correct: 0,
      explanation: "W sonecie „Kowal” Staff posługuje się figurą kowala wykuwającego nieugięte serce w duchu filozofii Fryderyka Nietzschego.",
      whyWrong: {
        1: "Błąd: Szewcy to postacie z dramatu Witkacego.",
        2: "Błąd: Nie ma takiego utworu w kanonie Staffa.",
        3: "Błąd: Chodzi o kowala w kuźni uderzającego młotem w kowadło."
      },
      examTip: "„Kowal” to wzorcowy tekst do motywu autokreacji, pracy nad własnym charakterem i triumfu woli."
    },
    {
      id: "kq6-7",
      q: "Wiersz Kazimierza Przerwy-Tetmajera „Koniec wieku XIX” kończy się gestem:",
      options: [
        "Uniesienia szabli w górę ku chwale ojczyzny.",
        "Złożenia dłoni do dziękczynnej modlitwy.",
        "Rzucenia bluźnierstwa w stronę niebios na wzór Konrada.",
        "Bezradnego zwieszenia głowy wobec zagadki istnienia."
      ],
      correct: 3,
      explanation: "Ostatnie słowa wiersza to: „Głowę zwiesić”. Jest to wyraz całkowitej kapitulacji intelektualnej i emocjonalnej dekadenta.",
      whyWrong: {
        0: "Błąd: Wiersz jest zaprzeczeniem etosu walki.",
        1: "Błąd: Podmiot liryczny odrzucił wcześniej wiarę jako bezużyteczną tarczę.",
        2: "Błąd: Bluźnierstwo to motyw z „Wielkiej Improwizacji” Mickiewicza."
      },
      examTip: "Puentę wiersza Tetmajera traktuj jako definicję dekadentyzmu: bezsilność wobec świata."
    },
    {
      id: "kq6-8",
      q: "Sonet „Krzak dzikiej róży w Ciemnych Smreczynach” Jana Kasprowicza reprezentuje nurt:",
      options: [
        "Klasycyzmu oświeceniowego",
        "Impresjonizmu i symbolizmu",
        "Socrealizmu powojennego",
        "Pozytywistycznego dydaktyzmu"
      ],
      correct: 1,
      explanation: "Utwór to szczytowe osiągnięcie młodopolskiego impresjonizmu (gra światła, barw i dźwięków w Tatrach) połączone z symboliką róży i limby.",
      whyWrong: {
        0: "Błąd: Kasprowicz tworzył w Młodej Polsce, nie w Oświeceniu.",
        2: "Błąd: Socrealizm to ideologia połowy XX wieku.",
        3: "Błąd: Wiersz nie ma charakteru dydaktycznego, lecz nastrojowo-metafizyczny."
      },
      examTip: "Zwróć uwagę na synestezję i motyw tatrzański — Tatry były duchową stolicą Młodej Polski."
    },
    {
      id: "kq6-9",
      q: "Co w „Weselu” symbolizuje Chata Bronowicka, w której toczy się wesele Rydla?",
      options: [
        "Zwykłą wiejską chałupę bez ukrytych znaczeń.",
        "Prześladowania carskie i męczeństwo Sybiraków.",
        "Całą Polskę — arkę przymierza, w której spotykają się wszystkie stany podzielonego narodu.",
        "Dwór szlachecki w Soplicowie z czasów napoleońskich."
      ],
      correct: 2,
      explanation: "Chata w Bronowicach ma wymiar symboliczny: to mikrokosmos skupiający całe polskie społeczeństwo (szlachtę, inteligencję, chłopów, Żyda i księdza).",
      whyWrong: {
        0: "Błąd: W dramacie symbolicznym przestrzeń zawsze posiada naddane znaczenia.",
        1: "Błąd: Akcja toczy się w Galicji autonomicznej pod zaborem austriackim.",
        3: "Błąd: Soplicowo to przestrzeń z eposu Mickiewicza."
      },
      examTip: "Tożsamość Chata Bronowicka = Polska to klasyczny motyw theatrum mundi i przestrzeni uogólnionej."
    },
    {
      id: "kq6-10",
      q: "Postawa buntu przeciw Bogu w hymnie „Dies irae” Jana Kasprowicza nawiązuje bezpośrednio do romantycznego:",
      options: [
        "Mesjanizmu",
        "Prometeizmu",
        "Winkelriedyzmu",
        "Sarmatyzmu"
      ],
      correct: 1,
      explanation: "Podmiot w „Dies irae” występuje w obronie cierpiącej ludzkości i oskarża Boga o stworzenie świata pełnego grzechu — to klasyczny prometeizm (jak u Konrada w III cz. Dziadów).",
      whyWrong: {
        0: "Błąd: Mesjanizm zakładał pokorne cierpienie za inne narody.",
        2: "Błąd: Winkelriedyzm dotyczył aktywnej walki militarnej.",
        3: "Błąd: Sarmatyzm to ideologia szlachecka epoki baroku."
      },
      examTip: "Zestawiaj Konrada z „Dziadów cz. III” z podmiotem „Dies irae” Kasprowicza przy motywie buntu przeciw Stwórcy."
    },
    {
      id: "kq6-11",
      q: "W jaki sposób w powieści „Chłopi” ukazana jest gromada lipiecka w sytuacjach zagrożenia wspólnego interesu (np. spór o las z dworem)?",
      options: [
        "Chłopi są całkowicie bezradni i uciekają do miast.",
        "Chłopi zwracają się z pokorną prośbą do cara o rozstrzygnięcie sporu.",
        "Gromada zapomina o wewnętrznych sporach i solidarnie staje do krwawej walki z drwalami dworskimi.",
        "Wieś ulega natychmiastowemu podziałowi i dochodzi do bratobójczej wojny domowej."
      ],
      correct: 2,
      explanation: "Podczas bitwy o las z dworem Boryna prowadzi całą wieś do boju; nawet skłóceni ze sobą Maciej i Antek stają ramię w ramię, a Antek ratuje ojcu życie.",
      whyWrong: {
        0: "Błąd: Chłopi byli niezwykle przywiązani do ziemi i praw serwitutowych.",
        1: "Błąd: Akcja dzieje się w zaborze rosyjskim, ale spór toczył się bezpośrednio z dziedzicem.",
        3: "Błąd: Gromada w Lipcach w chwilach próby stanowiła monolit."
      },
      examTip: "Solidaryzm gromady wiejskiej to świetny kontrapunkt dla rozbicia społeczeństwa miejskiego w „Lalce”."
    },
    {
      id: "kq6-12",
      q: "Artur Schopenhauer w swojej filozofii uważał, że jedynym trwałym ukojeniem przed bólem istnienia jest:",
      options: [
        "Gromadzenie kapitału i budowa fabryk.",
        "Zbrojne powstanie przeciw despotycznym monarchiom.",
        "Wyzbycie się wszelkich pragnień (nirwana), kontemplacja sztuki i współczucie.",
        "Ślepe poddanie się instynktom biologicznym i zabawa."
      ],
      correct: 2,
      explanation: "Schopenhauer widział ratunek przed cierpieniem napędzanym popędem życia w ascezie, nirwanie, bezinteresownej sztuce oraz empatii.",
      whyWrong: {
        0: "Błąd: To pogląd pozytywistyczny i kapitalistyczny.",
        1: "Błąd: Schopenhauer uważał rewolucje za bezsensowne.",
        3: "Błąd: Poddanie się popędom wg filozofa prowadzi do jeszcze większego cierpienia."
      },
      examTip: "Nirwana i kontemplacja piękna to dwa słowa-klucze do poezji młodopolskiej (np. wiersz Tetmajera „Hymn do Nirwany”)."
    },
    {
      id: "kq6-13",
      q: "Co w II akcie „Wesela” symbolizuje zjawa Jakuba Szeli, ukazująca się Dziadowi?",
      options: [
        "Krwawą pamięć o rabacji galicyjskiej z 1846 r., która wciąż dzieli chłopów i szlachtę oraz budzi wzajemną nieufność.",
        "Sojusz szlachty i chłopstwa zawarty podczas bitwy pod Racławicami.",
        "Nadzieję na szybkie uwłaszczenie chłopów przez rząd w Wiedniu.",
        "Pochwałę sztuki ludowej i barwnych strojów krakowskich."
      ],
      correct: 0,
      explanation: "Upiór Szeli przypomina o rzezi szlachty dokonanej przez chłopów pół wieku wcześniej — to rana historyczna podważająca sielankową wizję zbratania stanów.",
      whyWrong: {
        1: "Bitwa pod Racławicami to pozytywna legenda kościuszkowska (Gospodarz i kosynierzy), a nie Jakub Szela.",
        2: "Szela jest postacią tragiczną i krwawą, budzącą lęk.",
        3: "Zjawa dotyczy bolesnej historii, nie folkloru."
      },
      examTip: "Zestawiaj dwie legendy w „Weselu”: Racławice (współpraca) vs rabacja Szeli (nienawiść klasowa)."
    },
    {
      id: "kq6-14",
      q: "Dlaczego Stańczyk w rozmowie z Dziennikarzem w „Weselu” wyraża gorycz i wręcza mu kaduceusz?",
      options: [
        "Krytykuje ugodową, usypiającą politykę krakowskich konserwatystów („Stańczyków”), którzy zamiast budzić naród, mieszają w nim błazeńską laską.",
        "Chwali Dziennikarza za odważne przygotowanie zbrojnego powstania w Krakowie.",
        "Przekazuje Dziennikarzowi rozkaz wymarszu chłopskich oddziałów na Warszawę.",
        "Zapowiada nadanie Dziennikarzowi tytułu szlacheckiego przez cesarza."
      ],
      correct: 0,
      explanation: "Mądry błazen Stańczyk wyrzuca Dziennikarzowi brak wiary w naród, ugodowość i usypianie sumień publicystyką.",
      whyWrong: {
        1: "Dziennikarz jest właśnie znużonym konserwatystą bez wiary w czyn.",
        2: "Rozkaz wymarszu i złoty róg przynosi Wernyhora Gospodarzowi, nie Stańczyk.",
        3: "Stańczyk piętnuje serwilizm wobec zaborców, nie nagradza go."
      },
      examTip: "Kaduceusz to laska błazeńska (symbol błazenady) i zarazem laska pokoju — w tym kontekście oznacza usypianie narodu."
    },
    {
      id: "kq6-15",
      q: "Czym jest „czapka z pawich piór” w finale „Wesela” Stanisława Wyspiańskiego?",
      options: [
        "Symbolem chłopskiej próżności, przywiązania do błyskotek i prywaty, przez które Jasiek zgubił Złoty Róg.",
        "Odznaczeniem wojskowym nadanym Jaśkowi przez Wernyhorę za odwagę.",
        "Atrybutem Poety pragnącego napisać dramat o królach polskich.",
        "Nakryciem głowy Panny Młodej przynoszącym szczęście w małżeństwie."
      ],
      correct: 0,
      explanation: "Jasiek schylił się po czapkę z pawich piór i wtedy stracił Złoty Róg — Wyspiański pokazuje, jak błaha prywatna ambicja potrafi zaprzepaścić wielką sprawę narodową.",
      whyWrong: {
        1: "Wernyhora wręczył Gospodarzowi Złoty Róg, a nie czapkę.",
        2: "Czapka należy do Jaśka (drużby wiejskiego), nie do Poety.",
        3: "Czapka była elementem męskiego stroju krakowskiego drużby."
      },
      examTip: "Para symboli z „Wesela”: Złoty Róg (sprawa narodowa) vs czapka z pawich piór (prywata/próżność)."
    },
    {
      id: "kq6-16",
      q: "Jaki główny konflikt ekonomiczno-społeczny decyduje o pozycji bohaterów w lipieckiej gromadzie w „Chłopach”?",
      options: [
        "Posiadanie ziemi (morgów) — ziemia wyznacza godność, władzę w rodzinie i hierarchię we wsi.",
        "Znajomość języków obcych i wykształcenie zdobyte na uniwersytecie w Krakowie.",
        "Przynależność do partii politycznych działających w Warszawie.",
        "Liczba koni wyścigowych trzymanych w dworskiej stajni."
      ],
      correct: 0,
      explanation: "W społeczności Lipiec ziemia jest wartością najwyższą i niemal świętą — „kto ma ziemię, ten ma władzę”, a bezrolni komornicy stoją na najniższym szczeblu drabiny społecznej.",
      whyWrong: {
        1: "Chłopi w Lipcach w większości są analfabetami przywiązanymi do tradycyjnej gospodarki.",
        2: "Akcja skupia się na zamkniętej wspólnocie wiejskiej, choć pojawia się wątek szkoły i walki o las.",
        3: "Chłopi nie hodują koni wyścigowych."
      },
      examTip: "W „Chłopach” ziemia pełni rolę zarówno żywicielki (sacrum), jak i obiektu bezwzględnej walki o byt (naturalizm)."
    },
    {
      id: "kq6-17",
      q: "Dlaczego los Jagny Paczesiówny w „Chłopach” Reymonta ma wymiar tragiczny?",
      options: [
        "Jako artystyczna, wrażliwa i kierująca się naturą indywidualistka nie mieści się w ciasnych normach moralnych i majątkowych gromady, która w końcu ją wyklucza.",
        "Została skazana na zesłanie na Syberię za udział w buncie przeciwko dziedzicowi.",
        "Dobrowolnie wstąpiła do klasztoru po śmierci Macieja Boryny.",
        "Uciekła do Paryża, aby tam zostać sławną malarką."
      ],
      correct: 0,
      explanation: "Jagna jest zmysłowa, bierna, poszukuje piękna i uczuć, przez co staje się kozłem ofiarnym hipokryzji i zawiści wsi.",
      whyWrong: {
        1: "Wypędziła ją sama gromada lipiecka na wozie gnoju, nie carski sąd.",
        2: "Nie wstąpiła do klasztoru.",
        3: "Nigdy nie opuściła wsi dla kariery w Paryżu."
      },
      examTip: "Postać Jagny świetnie ilustruje konflikt jednostki wybitnej/innej ze zbiorowością (społeczeństwem)."
    },
    {
      id: "kq6-18",
      q: "Które z poniższych stwierdzeń opisuje zasadniczą wymowę wiersza Kazimierza Przerwy-Tetmajera „Koniec wieku XIX”?",
      options: [
        "Człowiek końca wieku odrzuca kolejno przekleństwo, ironię, pogardę, rozpacz i walkę jako bezsilne, pozostając w milczącej rezygnacji („Głowę zwiesić niemy.”).",
        "Poeta nawołuje do stworzenia nowej partii robotniczej i walki o prawa socjalne.",
        "Wiersz jest radosną pochwałą rozwoju nauki i kolejnictwa u progu XX wieku.",
        "Podmiot liryczny znajduje ostateczne ukojenie w powrocie do sielskiego życia na wsi."
      ],
      correct: 0,
      explanation: "Utwór jest dialogiem poety z samym sobą, w którym każda próba buntu czy filozoficznej odpowiedzi na zło okazuje się jałowa, prowadząc do skrajnego dekadentyzmu.",
      whyWrong: {
        1: "Wiersz wyraża apatię i bezsilność, a nie program polityczny.",
        2: "Dekadentyzm odrzucał właśnie wiarę w zbawczą moc postępu technicznego.",
        3: "Wiersz nie kończy się sielankowym ukojeniem."
      },
      examTip: "Zestawiaj dekadencką bezradność „Końca wieku XIX” Tetmajera z aktywizmem „Kowala” Staffa."
    },
    {
      id: "kq6-19",
      q: "Co w sonecie Jana Kasprowicza „Krzak dzikiej róży w Ciemnych Smreczynach” symbolizuje powalona, próchniejąca limba?",
      options: [
        "Nieuchronność śmierci, rozkładu i przemijania kontrastującą z kruchym pięknem i wolą życia samotnego krzaku róży.",
        "Zwycięstwo cywilizacji przemysłowej nad dziką przyrodą Tatr.",
        "Upadek powstania styczniowego i zdradę szlachty polskiej.",
        "Bezpieczne schronienie dla młodych artystów cyganerii krakowskiej."
      ],
      correct: 0,
      explanation: "Kontrast żywej, pąsowej róży i gnijącej limby buduje młodopolską refleksję o współistnieniu piękna i śmierci w naturze oraz w ludzkiej egzystencji.",
      whyWrong: {
        1: "W sonecie opisany jest wyłącznie górski krajobraz natury bez elementów przemysłu.",
        2: "To liryka natury i egzystencjalnego symbolizmu, nie wiersz historyczno-polityczny.",
        3: "Sonet nie opisuje cyganerii krakowskiej."
      },
      examTip: "W „Krzaku dzikiej róży...” wskaż cechy impresjonizmu (gra świateł, mgieł, barw i szumu potoku) oraz symbolizmu."
    },
    {
      id: "kq6-20",
      q: "Wskaż cechę poezji młodopolskiej widoczną w określeniu „płomienny dźwięk” lub „błękitna cisza”:",
      options: [
        "Synestezja — celowe łączenie doznań różnych zmysłów w jednej metaforze.",
        "Inwersja — przestawienie szyku wyrazów w celu archaizacji tekstu.",
        "Pleonazm — niezamierzone powtórzenie tej samej treści w dwóch wyrazach.",
        "Alegoria — jednoznaczny znak wywodzący się z tradycji biblijnej."
      ],
      correct: 0,
      explanation: "Synestezja (np. dźwięk + płomień/kolor) była ulubionym zabiegiem impresjonistów i symbolistów Młodej Polski dla oddania nastroju chwili.",
      whyWrong: {
        1: "Inwersja dotyczy szyku zdania, nie mieszania zmysłów.",
        2: "Pleonazm to błąd językowy (np. „cofnąć się do tyłu”).",
        3: "Alegoria jest skonwencjonalizowana i jednoznaczna, podczas gdy synestezja działa na zmysły i nastrój."
      },
      examTip: "Synestezja = zmysł + inny zmysł (np. wzrok + słuch, smak + dotyk)."
    }
  ]
};
