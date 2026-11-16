export const DEPT_08 = {
  id: 'dept-08',
  displayNum: 8,
  code: 'DZIAŁ 8',
  title: 'Literatura Wojny, Zagłady i Totalitaryzmów',
  subtitle: 'Pokolenie Kolumbów, opowiadania Borowskiego, Inny świat, Zdążyć przed Panem Bogiem, Rok 1984, Dżuma',
  duration: '95 min',
  xp: 280,
  notes: [
    {
      id: 'kn8-1',
      title: 'Wojna, Okupacja i Pokolenie Kolumbów',
      badge: 'Fundament Epoki',
      intro:
        'II wojna światowa (1939–1945) przyniosła załamanie europejskiego humanizmu. Doświadczenie dwóch zbrodniczych totalitaryzmów (niemieckiego nazizmu i sowieckiego komunizmu) oraz Zagłada Żydów zrodziły pojęcie „apokalipsy spełnionej”.',
      blocks: [
        {
          type: 'prose',
          heading: 'Pokolenie Kolumbów — Tragizm Skażenia i Przedwczesnej Śmierci',
          paragraphs: [
            'Mianem Pokolenia Kolumbów (od tytułu powieści Romana Bratnego „Kolumbowie. Rocznik 20”) określa się młodych twórców urodzonych ok. 1920 r., których wkraczanie w dorosłość zbiegło się z wybuchem wojny.',
            'Ich tragizm polegał na konieczności porzucenia młodzieńczych marzeń, miłości i talentu poetyckiego na rzecz walki z bronią w ręku. Stali przed potwornym dylematem etycznym: aby bronić ojczyzny, musieli zabijać, co rodziło poczucie nieodwracalnego skażenia moralnego („Nas nauczono. Nie ma sumienia.”).',
            'Najwybitniejsi przedstawiciele: Krzysztof Kamil Baczyński (zginął 4 sierpnia 1944 r. w powstaniu warszawskim), Tadeusz Gajcy (poległ 16 sierpnia 1944 r.), Andrzej Trzebiński (rozstrzelany w ulicznej egzekucji) oraz Tadeusz Borowski.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Krzysztof Kamil Baczyński: „Pokolenie”',
              desc: 'Manifest i requiem pokolenia wojennego.',
              details: {
                summary:
                  'Wstrząsający wiersz ukazujący dehumanizację i zniszczenie ludzkiej psychiki przez wojnę.',
                bullets: [
                  'Monstrualne obrazy przyrody skażonej śmiercią: ziemia ociekająca krwią, ciała wiszące na drzewach, pękające czaszki.',
                  'Wersy-klucze o utracie dekalogu i zdziczeniu: „Nas nauczono. Nie ma litości. / [...] Nas nauczono. Nie ma sumienia.” oraz „Usta ściśnięte mamy, twarz wilczą”.',
                  'Dramatyczne pytanie finałowe: czy przyszłe pokolenia okażą im chociaż pamięć i współczucie („czy nam postawią, z litości chociaż, / nad grobem krzyż”).'
                ],
                essayUse: 'Fundament do każdego tematu o losach pokolenia wojennego, zniszczeniu wartości i heroizmie tragicznym.'
              }
            },
            {
              term: 'K. K. Baczyński: „Z głową na karabinie” i „Elegia o... [chłopcu polskim]”',
              desc: 'Lament nad utraconą młodością.',
              details: {
                summary:
                  'Dwa przejmujące liryki elegijne o cenie walki podziemnej.',
                bullets: [
                  '„Z głową na karabinie”: przeczucie nieuchronnej śmierci młodego żołnierza-poety, który musi wybierać między miłością a karabinem; czas wojny jako „krąg widm”.',
                  '„Elegia o... [chłopcu polskim]”: matczyny lament nad synem idącym na konspiracyjną walkę w czasie okupacji (marzec 1944 r.); kontrast dziecięcej niewinności („haftowali ci, syneczku, smutne oczy rudą krwią”) z okrucieństwem śmierci od kuli w skroń.'
                ],
                essayUse: 'Do motywu cierpienia matki, utraty niewinności przez młodzież i tragizmu powstańczego.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn8-2',
      title: 'Tadeusz Borowski: „Opowiadania” — Anatomia Człowieka Zlagrowanego',
      badge: 'Lektura Obowiązkowa („Proszę państwa do gazu” w PP; pozostałe — kontekst)',
      intro:
        'Tadeusz Borowski, więzień Auschwitz i Dachau, stworzył najbardziej bezwzględny, odarty z iluzji obraz niemieckiego obozu koncentracyjnego. Odrzucił tradycyjne podziały na szlachetne ofiary i potwornych katów, ukazując, jak system obozowy zmuszał samych więźniów do współudziału w zbrodni.',
      blocks: [
        {
          type: 'prose',
          heading: 'Koncepcja „Człowieka Zlagrowanego” i Styl Behawiorystyczny',
          paragraphs: [
            'Człowiek zlagrowany to więzień, który w celu biologicznego przetrwania za wszelką cenę całkowicie przyswoił bezlitosne prawa panujące w obozie koncentracyjnym. Tradycyjny dekalog, litość i solidarność zostają wyparte przez zwierzęcy instynkt życia, głód i cynizm.',
            'Behawioryzm Borowskiego: autor rezygnuje z analizowania przeżyć psychicznych i moralizowania. Opisuje wyłącznie zewnętrzne czyny, fizjologiczne reakcje ciała i codzienną rutynę obozową. Przez ten chłodny, beznamiętny ton potworność zbrodni uderza w czytelnika ze zdwojoną siłą.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: '„Proszę państwa do gazu” — Rampa w Birkenau',
              desc: 'Praca komanda „Kanada” przy rozładunku transportów.',
              details: {
                summary:
                  'Narrator Tadek bierze bezpośredni udział w rozładunku bydlęcych wagonów wiozących Żydów na śmierć.',
                bullets: [
                  'Więźniowie komanda „Kanada” nie współczują ofiarom — są wściekli na przybywających ludzi za to, że przez nich muszą pracować w upale i smrodzie („Jest prawo obozu, że ludzi idących na śmierć oszukuje się do ostatniej chwili. Jest to jedyna dopuszczalna forma litości.”). Zależy im na zdobyciu jedzenia, ubrań i cennych rzeczy z bagaży.',
                  'Wstrząsające sceny: matka uciekająca przed własnym dzieckiem ze strachu przed natychmiastowym skierowaniem do komory gazowej; trupy niemowląt noszone jak kurczęta.',
                  'Fizyczna niemoc Tadka: wymiotuje za wagonami, czując obrzydzenie do samego siebie, lecz wraca do pracy, by nie zginąć.'
                ],
                essayUse: 'Do motywu upadku moralnego, sytuacji granicznej, odczłowieczenia i machiny Holokaustu.'
              }
            },
            {
              term: '„Ludzie, którzy szli” i „U nas, w Auschwitzu...” — Powszedniość potworności',
              desc: 'Rutyna lagru oraz listy do narzeczonej Marii o mechanizmie zbrodni.',
              details: {
                summary:
                  'Tadek opisuje codzienność obozową Auschwitz-Birkenau z perspektywy więźnia funkcyjnego.',
                bullets: [
                  'Kult pracy niewolniczej („U nas, w Auschwitzu...”): uświadomienie sobie, że cała kultura europejska i starożytny Rzym opierały się na niewolnictwie, a Auschwitz jest tego logiczną, nowoczesną kontynuacją.',
                  'Szokujące sceny obojętności („Ludzie, którzy szli”): gra w piłkę nożną tuż obok rampy — między jednym a drugim kornerem (rzutem rożnym) do komór gazowych skierowano trzy tysiące ludzi.',
                  'Cynizm i brak złudzeń: nadzieja jest w obozie największą trucizną, bo każe ludziom bezwolnie iść na rzeź w nadziei, że to nie ich spotka śmierć.'
                ],
                essayUse: 'Do tematów o niszczeniu tożsamości, roli nadziei w niewoli i mechanizmach totalitaryzmu.'
              }
            }
          ]
        },
        {
          type: 'callout',
          variant: 'amber',
          title: 'Pułapka CKE — Nie myl narratora z autorem!',
          items: [
            'Narrator Tadek nosi imię autora, ale NIE JEST tożsamy z Tadeuszem Borowskim! Tadek to literacka kreacja człowieka zlagrowanego, stworzona po to, by pokazać, jak obóz niszczył duszę każdego człowieka.',
            'Borowski po publikacji opowiadań był niesłusznie oskarżany o nihilizm i amoralność — w rzeczywistości jego celem było brutalne oskarżenie katów za stworzenie świata, w którym ofiara stawała się moralnym wrakiem.'
          ]
        }
      ]
    },
    {
      id: 'kn8-3',
      title: 'Gustaw Herling-Grudziński: „Inny świat” oraz Hanna Krall: „Zdążyć przed Panem Bogiem”',
      badge: 'Lektury Obowiązkowe („Inny świat” od 2024 r. we fragmentach; „Zdążyć przed Panem Bogiem” w całości)',
      intro:
        'Dwa dokumentalne świadectwa totalitaryzmu i Zagłady. Grudziński analizuje niszczenie człowieka w sowieckim Gułagu, dowodząc jednak możliwości ocalenia godności. Krall w rozmowie z Markiem Edelmanem odbrązawia mit powstania w getcie warszawskim.',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Gustaw Herling-Grudziński: „Inny świat” (od 2024 r. we fragmentach)',
              desc: 'Zapiski z sowieckiego łagru w Jercewie (1940–1942).',
              details: {
                summary:
                  'Anatomia komunistycznego obozu pracy przymusowej pod Archangielskiem.',
                bullets: [
                  'Mechanizm Gułagu: niszczenie godności przez katorżniczą pracę w tajdze przy wyrębie lasu, głód (kocioł I, II i III zależne od procentu normy urobku), donosicielstwo i nocne gwałty w barakach (tzw. nocne łowy).',
                  'Ocalenie człowieczeństwa: wbrew Borowskiemu Grudziński dowodzi, że w skrajnych warunkach można zachować godność.',
                  'Postawa Michaiła Kostylewa: inżynier, który celowo przypalał sobie rękę w ogniu, cierpiąc potworny ból, by nie pracować dla nienawistnego systemu Stalina; ostatecznie popełnia samobójstwo, oblewając się wrzątkiem.',
                  'Epilog w Rzymie (1945 r.): dawny współwięzień z łagru (więzień z Witebska) prosi narratora o jedno słowo usprawiedliwienia („rozumiem”) za to, że złożył fałszywy donos na czterech współwięźniów (Niemców), by ratować życie. Grudziński milczy — odrzuca relatywizm moralny: „Człowiek jest ludzki w ludzkich warunkach”.'
                ],
                essayUse: 'Do tematów o granicach człowieczeństwa, obronie godności, sowieckich łagrach i dylematach etycznych po wojnie.'
              }
            },
            {
              term: 'Hanna Krall: „Zdążyć przed Panem Bogiem”',
              desc: 'Rozmowy z Markiem Edelmanem o getcie i pracy kardiologa.',
              details: {
                summary:
                  'Wywiad-rzeka z ostatnim żyjącym przywódcą powstania w getcie warszawskim (kwiecień 1943 r.), a po wojnie wybitnym kardiologiem w Łodzi.',
                bullets: [
                  'Demitologizacja heroizmu: Edelman odrzuca patos. Powstańcy wiedzieli, że zginą — chodziło jedynie o wybór godnego sposobu umierania (śmierć z bronią w ręku na ulicy zamiast bezimiennego zagazowania w komorze Treblinki).',
                  'Obrazy getta: Umschlagplatz, handel numerkami na życie (chleb i marmolada), matki ratujące dzieci (np. Tenenbaumowa oddająca córce Tosi jedyny numerek na życie i zażywająca cyjanek), samobójstwo Anielewicza na Miłej 18.',
                  'Praca kardiologa jako wyścig z Bogiem: Edelman w szpitalu kontynuuje walkę o ludzkie życie — „Pan Bóg już chce zgasić świeczkę, a ja muszę szybko osłonić płomień” („Zdążyć przed Panem Bogiem”).'
                ],
                essayUse: 'Do motywu powstania w getcie, Holokaustu, sensu życia, godności śmierci i powołania lekarskiego.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn8-4',
      title: 'George Orwell: „Rok 1984” — Anatomia Totalitaryzmu Doskonałego',
      badge: 'Lektura Obowiązkowa (w całości)',
      intro:
        'Ponura antyutopia (dystopia) polityczna (1949 r.). Orwell stworzył profetyczny model totalitarnego państwa Oceanii rządzonego przez Partię i Wielkiego Brata, w którym zniszczeniu uległa prywatność, pamięć historyczna i sam język.',
      blocks: [
        {
          type: 'prose',
          heading: 'Mechanizmy Kontroli Społecznej w Oceanii',
          paragraphs: [
            'Wielki Brat i Policja Myśli: permanentna inwigilacja obywateli przez dwukierunkowe teleekrany w każdym pokoju. Każdy niekontrolowany gest, grymas czy słowo przez sen może być uznane za zbrodnię myśli (thoughtcrime) karaną ewaporacją (całkowitym wymazaniem z rejestrów istnienia).',
            'Nowomowa (Newspeak): sztuczny język, którego zasób słownictwa jest systematycznie zmniejszany, by technicznie uniemożliwić sformułowanie myśli wrogiej systemowi (brak słowa na „wolność” czy „bunt”).',
            'Dwójmyślenie (Doublethink): umiejętność jednoczesnego wyznawania dwóch sprzecznych poglądów i szczerej wiary w oba. Oficjalne hasła Partii: „Wojna to pokój”, „Wolność to niewola”, „Ignorancja to siła”.',
            'Ministerstwo Prawdy (Minitrue): instytucja zajmująca się ciągłym fałszowaniem przeszłości, gazet i książek, by dowieść nieomylności Wielkiego Brata.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Winston Smith i Julia — Nieudana rebelia',
              desc: 'Miłość jako zakazany bunt zmysłów.',
              details: {
                summary:
                  '39-letni urzędnik Ministerstwa Prawdy Winston Smith podejmuje samotny bunt przeciw systemowi.',
                bullets: [
                  'Pisanie zakazanego dziennika w martwym punkcie pokoju poza zasięgiem oka teleekranu.',
                  'Romans z młodszą Julią: miłość staje się aktem politycznego sprzeciwu przeciw partii tłumiącej popędy.',
                  'Wynajęcie pokoju nad sklepem pana Charringtona (który okazuje się oficerem Policji Myśli) i zdrada O’Briena, który udawał członka podziemnego Braterstwa Goldsteina.'
                ],
                essayUse: 'Do motywu buntu jednostki przeciw państwu, zakazanej miłości i prowokacji politycznej.'
              }
            },
            {
              term: 'Pokój 101 i Złamanie Człowieka',
              desc: 'Najgłębszy koszmar w Ministerstwie Miłości.',
              details: {
                summary:
                  'O’Brien metodycznie torturuje Winstona nie po to, by go zabić, lecz by go „naprawić” — złamać jego duszę i sprawić, by szczerze pokochał Wielkiego Brata.',
                bullets: [
                  'Pokój 101 zawiera to, co dla danego człowieka jest najstraszniejszą rzeczą na świecie — w przypadku Winstona są to szczury.',
                  'Zdrada ostateczna: gdy O’Brien zakłada mu na twarz drucianą klatkę z głodnymi szczurami, Winston pęka i krzyczy: „Zróbcie to Julii! Nie mnie! Zróbcie to Julii!”. Zrzeka się jedynej czystej wartości, jaką była miłość.',
                  'Finał: Winston, pusty w środku, siedzi w kawiarni „Pod Kasztanem” ze łzami w oczach i uświadamia sobie, że odniósł zwycięstwo nad samym sobą: kochał Wielkiego Brata.'
                ],
                essayUse: 'Kluczowy topos w tematach o granicach odporności psychicznej, torturach, zdradzie i potędze tyranii.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn8-5',
      title: 'Albert Camus: „Dżuma” — Powieść-Parabola o Absurdzie i Solidarności',
      badge: 'Lektura Obowiązkowa (w całości)',
      intro:
        'Powieść-parabola (1947 r.) laureata literackiej Nagrody Nobla. Epidemia dżumy w algierskim Oranie to uniwersalna metafora zła, wojny, totalitaryzmu (tzw. brunatna dżuma) oraz absurdu ludzkiego losu. Camus bada postawy moralne człowieka w obliczu śmiertelnego zagrożenia.',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Doktor Bernard Rieux (Narrator)',
              desc: 'Laicki humanizm i wierność lekarskiemu obowiązkowi.',
              details: {
                summary:
                  'Lekarz walczący z zarazą od początku do końca, nie licząc na zbawienie ani chwałę.',
                bullets: [
                  'Heroizm codzienny: uważa walkę z dżumą za sprawę zwykłej uczciwości — gdy ktoś widzi chorych, musi ich leczyć.',
                  'Ateizm etyczny: nie wierzy w Boga, lecz buntuje się przeciw stworzonemu przezeń światu pełnemu cierpienia niewinnych dzieci.',
                  'Finałowe przesłanie: „W ludziach więcej rzeczy zasługuje na podziw niż na pogardę”.'
                ],
                essayUse: 'Idealny wzorzec do motywu heroizmu bez patosu, poświęcenia, etyki lekarskiej i laickiego humanizmu.'
              }
            },
            {
              term: 'Jean Tarrou i poszukiwanie świętości bez Boga',
              desc: 'Wyrzeczenie się przemocy i formacje sanitarne.',
              details: {
                summary:
                  'Syn prokuratora, który uciekł z domu z odrazy do kary śmierci żądanej przez ojca.',
                bullets: [
                  'Organizuje ochotnicze formacje sanitarne wspomagające lekarzy w walce z epidemią.',
                  'Jego cel moralny to osiągnięcie „świętości bez Boga” — nieprzyczynianie się do śmierci i cierpienia żadnego człowieka.',
                  'Umiera na dżumę tuż przed otwarciem bram miasta; nocna kąpiel w morzu z Rieux to symbol ich głębokiego braterstwa.'
                ],
                essayUse: 'Do tematów o poszukiwaniu sensu życia, moralności poza religią i solidarności ludzkiej.'
              }
            },
            {
              term: 'Raymond Rambert — Przemiana dziennikarza',
              desc: 'Od egoizmu miłości do poczucia wspólnoty.',
              details: {
                summary:
                  'Paryski reporter uwięziony w Oranie przez kwarantannę.',
                bullets: [
                  'Początkowo próbuje uciec z miasta za wszelką cenę, twierdząc, że jest obcy, a jego celem jest prywatne szczęście u boku ukochanej kobiety.',
                  'Przełom moralny: w ostatniej chwili rezygnuje z ucieczki i zostaje w Oranie, uświadamiając sobie, że: „może być wstyd, że się jest samemu szczęśliwym”.'
                ],
                essayUse: 'Do motywu przemiany bohatera, poświęcenia własnego szczęścia i solidarności w obliczu klęski.'
              }
            },
            {
              term: 'Ojciec Paneloux — Ewolucja wiary pod wpływem cierpienia',
              desc: 'Od teologicznego dogmatyzmu do cichej pokory.',
              details: {
                summary:
                  'Uczony jezuita wygłaszający dwa kluczowe kazania w katedrze.',
                bullets: [
                  'I kazanie: traktuje dżumę jako słuszną karę Bożą zesłaną na grzeszny Oran („Zasłużyliście na to”).',
                  'Przełom: widok potwornej, powolnej agonii małego, niewinnego synka sędziego Othona burzy jego dogmatyzm.',
                  'II kazanie: mówi już „my” zamiast „wy”; wzywa do miłości Boga nawet w cierpieniu, którego rozum nie pojmuje. Sam umiera, trzymając w dłoni krzyż, odmawiając wezwania lekarza.'
                ],
                essayUse: 'Do motywu teodycei, kryzysu wiary i cierpienia niewinnych dzieci.'
              }
            },
            {
              term: 'Cottard i Joseph Grand',
              desc: 'Dwie skrajne postawy wobec katastrofy.',
              details: {
                summary:
                  'Cottard (przestępca) cieszy się z epidemii, bo paraliżuje ona sądy i policję; bogaci się na przemycie; po otwarciu bram wpada w obłęd i strzela do tłumu.',
                bullets: [
                  'Grand: skromny urzędnik miejski pracujący latami nad idealnym pierwszym zdaniem swojej powieści; bez rozgłosu sumiennie prowadzi ewidencję zakażeń.'
                ],
                essayUse: 'Do analizy kontrastu postaw ludzkich w sytuacji granicznej (egoizm vs bezinteresowność).'
              }
            }
          ]
        },
        {
          type: 'callout',
          variant: 'amber',
          title: 'Finałowe Przesłanie Camusa — Nieśmiertelny Bakcyl Dżumy',
          items: [
            'W finale powieści bramy Oranu zostają otwarte, a radosny tłum świętuje koniec epidemii.',
            'Doktor Rieux nie podziela tej naiwnej euforii — wie, że „bakcyl dżumy nigdy nie umiera i nie znika”, lecz może uśpiony czekać dziesiątki lat w kufrach i bieliźnie, by pewnego dnia znów obudzić swe szczury i posłać je na śmierć do jakiegoś szczęśliwego miasta.',
            'Wymowa: zło (wojna, faszyzm, fanatyzm) jest stałym elementem świata — człowiek musi zachować nieustanną czujność moralną.'
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'kf8-1', front: 'Kim było Pokolenie Kolumbów w literaturze polskiej?', back: 'Pokoleniem młodych twórców urodzonych ok. 1920 r. (np. Baczyński, Gajcy, Borowski), których młodość przypadła na czas II wojny światowej.', hint: 'Rocznik 20', category: 'epoka' },
    { id: 'kf8-2', front: 'W jakich okolicznościach zginął Krzysztof Kamil Baczyński?', back: 'Zginął 4 sierpnia 1944 r. w Pałacu Blanka w czwartym dniu powstania warszawskiego od kuli niemieckiego snajpera.', hint: 'Powstanie warszawskie', category: 'bohater' },
    { id: 'kf8-3', front: 'O czym traktuje wiersz Baczyńskiego „Pokolenie”?', back: 'O tragizmie pokolenia wojennego skażonego koniecznością walki i zabijania, które utraciło wiarę w pamięć, sumienie i dekalog.', hint: 'Nas nauczono', category: 'lektura' },
    { id: 'kf8-4', front: 'Co oznacza pojęcie „człowiek zlagrowany” u Tadeusza Borowskiego?', back: 'Więźnia obozu koncentracyjnego, który w celu biologicznego przetrwania przyswoił bezlitosne prawa obozu i odrzucił dawną moralność.', hint: 'Człowiek obozowy', category: 'pojecie' },
    { id: 'kf8-5', front: 'Na czym polegał behawioryzm w opowiadaniach Borowskiego?', back: 'Na beznamiętnym, chłodnym opisie wyłącznie zewnętrznych zachowań i odruchów ciała bez wnikania w psychikę i bez moralizowania.', hint: 'Opis zachowania bez ocen', category: 'pojecie' },
    { id: 'kf8-6', front: 'Czym zajmowało się komando „Kanada” w Birkenau?', back: 'Rozładunkiem bydlęcych wagonów na rampie, grabieżą mienia i kierowaniem ludzi do komór gazowych.', hint: 'Rampa w Birkenau', category: 'lektura' },
    { id: 'kf8-7', front: 'O jakim sowieckim obozie pracy opowiada „Inny świat” Grudzińskiego?', back: 'O łagrze w Jercewie pod Archangielskiem (część systemu Gułag w ZSRR).', hint: 'Jercewo', category: 'lektura' },
    { id: 'kf8-8', front: 'Kim był Michaił Kostylew w „Innym świecie”?', back: 'Więźniem łagru, który celowo przypalał sobie rękę w ogniu, by cierpieć fizycznie, lecz nie pracować niewolniczo dla sowieckiego systemu.', hint: 'Przypalana ręka', category: 'bohater' },
    { id: 'kf8-9', front: 'Dlaczego Grudziński w epilogu w Rzymie nie powiedział słowa „rozumiem” dawnemu współwięźniowi?', back: 'Uznał, że praw obozowych nie można przenosić do wolnego świata i nie wolno usprawiedliwiać donosu ratującego własne życie.', hint: 'Brak rozgrzeszenia w Rzymie', category: 'motyw' },
    { id: 'kf8-10', front: 'Z kim Hanna Krall przeprowadziła wywiad w książce „Zdążyć przed Panem Bogiem”?', back: 'Z Markiem Edelmanem — ostatnim żyjącym przywódcą powstania w getcie warszawskim i wybitnym kardiologiem.', hint: 'Marek Edelman', category: 'bohater' },
    { id: 'kf8-11', front: 'W jaki sposób Marek Edelman odbrązawia mit powstania w getcie?', back: 'Twierdzi, że nie walczyli o zwycięstwo ani wolność, lecz o godny wybór sposobu umierania (z bronią w ręku zamiast w komorze gazowej).', hint: 'Wybór sposobu umierania', category: 'motyw' },
    { id: 'kf8-12', front: 'Jak Marek Edelman postrzegał swoją pracę kardiologa po wojnie?', back: 'Jako wyścig ze śmiercią i spór z Bogiem: „Pan Bóg już chce zgasić świeczkę, a ja muszę szybko osłonić płomień”.', hint: 'Wyścig z Bogiem o życie', category: 'motyw' },
    { id: 'kf8-13', front: 'Czym była „nowomowa” (Newspeak) w „Roku 1984” Orwella?', back: 'Sztucznym językiem tworzonym przez Partię w celu zawężenia zakresu myśli i uniemożliwienia popełnienia zbrodni myśli.', hint: 'Język totalitarny', category: 'pojecie' },
    { id: 'kf8-14', front: 'Na czym polegało „dwójmyślenie” (Doublethink) w Oceanii?', back: 'Na zdolności jednoczesnego wyznawania dwóch sprzecznych poglądów i szczerej wiary w oba (np. „Wojna to pokój”).', hint: 'Dwie sprzeczne myśli naraz', category: 'pojecie' },
    { id: 'kf8-15', front: 'Co znajdowało się w Pokoju 101 w Ministerstwie Miłości?', back: 'To, czego dany człowiek boi się najbardziej na świecie — w przypadku Winstona klatka ze szczurami przymocowana do twarzy.', hint: 'Najgłębszy lęk: szczury', category: 'lektura' },
    { id: 'kf8-16', front: 'Kim był O’Brien w powieści „Rok 1984”?', back: 'Członkiem Wewnętrznej Partii, który udawał buntownika, by sprowokować Winstona, a następnie torturował go w Ministerstwie Miłości.', hint: 'Śledczy i prowokator', category: 'bohater' },
    { id: 'kf8-17', front: 'Jaką postawę reprezentuje doktor Bernard Rieux w „Dżumie” Camusa?', back: 'Laicki humanizm i poczucie obowiązku: leczy chorych bez patosu i bez wiary w Boga, uważając walkę ze złem za oczywistość.', hint: 'Lekarski obowiązek bez Boga', category: 'bohater' },
    { id: 'kf8-18', front: 'Dlaczego Raymond Rambert zrezygnował z ucieczki z Oranu?', back: 'Uświadomił sobie, że wstydem byłoby być samemu szczęśliwym, gdy całe miasto cierpi, i dołączył do formacji sanitarnych.', hint: 'Wstyd być szczęśliwym samemu', category: 'bohater' },
    { id: 'kf8-19', front: 'Co spowodowało kryzys wiary i zmianę tonu kazań u ojca Paneloux w „Dżumie”?', back: 'Widok powolnej i potwornej agonii niewinnego małego dziecka (synka sędziego Othona).', hint: 'Śmierć dziecka sędziego Othona', category: 'lektura' },
    { id: 'kf8-20', front: 'Co w ujęciu Camusa symbolizuje dżuma?', back: 'Zarazę biologiczną, wojnę i faszyzm (brunatna dżuma), absurd ludzkiego losu oraz zło tkwiące w każdym człowieku.', hint: 'Wieloznaczna parabola zła', category: 'motyw' },
    { id: 'kf8-21', front: 'Dlaczego twórców urodzonych około 1920 roku nazwano „Pokoleniem Kolumbów”?', back: 'Ponieważ wchodzili w dorosłość w 1939 r. i musieli odkrywać niepodległą Polskę oraz własną młodość na nowo w cieniu wojny, konspiracji i tragicznej śmierci (nazwa od powieści Romana Bratnego „Kolumbowie. Rocznik 20”).', hint: 'Rocznik 1920 — młodość przerwana przez wojnę.', category: 'epoka' },
    { id: 'kf8-22', front: 'Co symbolizują „białe czaszki” i „złe oczy” w wierszu Krzysztofa Kamila Baczyńskiego „Pokolenie”?', back: 'Skalę wojennego zniszczenia moralnego: młodzi poeci i żołnierze musieli wyzbyć się litości, sumienia i wrażliwości, aby przetrwać i zabijać wroga — wojna okaleczyła ich dusze jeszcze przed śmiercią.', hint: 'Moralne okaleczenie młodych przez wojnę.', category: 'lektura' },
    { id: 'kf8-23', front: 'Na czym polega prowokacja narracyjna Tadeusza Borowskiego w opowiadaniu „Proszę państwa do gazu”?', back: 'Narrator (Tadek) sam jest więźniem pracującym na rampie w Birkenau w komandzie „Kanada” — relacjonuje selekcje i transporty z chłodnym cynizmem, złością na ofiary i bez moralizowania, pokazując, jak obóz zmusza ofiarę do współudziału.', hint: 'Ofiara w roli cynicznego obserwatora na rampie.', category: 'lektura' },
    { id: 'kf8-24', front: 'Dlaczego obóz w opowiadaniach Borowskiego („U nas, w Auschwitzu...”) odwraca tradycyjną etykę europejską?', back: 'W rzeczywistości lagrowej instynkt przetrwania znosi dekalog — kradzież chleba, donos czy obojętność na śmierć sąsiada stają się normą („człowiek zlagrowany”), a przeżycie jednego odbywa się kosztem drugiego.', hint: 'Odwrócony dekalog w warunkach obozowych.', category: 'pojecie' },
    { id: 'kf8-25', front: 'Jak działał system trzech kotłów żywnościowych w sowieckim łagrze w „Innym świecie”?', back: 'Wielkość racji chleba i zupy zależała od wyrobienia normy pracy (np. przy wyrębie lasu): I kocioł (głodowy) prowadził do szybkiego wycieńczenia i „trupiarni”, a III kocioł dawał szanse na przetrwanie — głód służył do wyciskania z ludzi ostatnich sił.', hint: 'Głód jako narzędzie zmuszania do pracy.', category: 'lektura' },
    { id: 'kf8-26', front: 'Czego symbolem jest postać Michaiła Kostylewa w „Innym świecie” Gustawa Herlinga-Grudzińskiego?', back: 'Tragicznej ceny zachowania godności w łagrze: Kostylew wolał codziennie opalać własną rękę w ogniu, aby nie pracować dla sowieckiego reżimu, niż zrezygnować z wewnętrznej wolności.', hint: 'Opór przez samookaleczenie — wolność ponad ból.', category: 'bohater' },
    { id: 'kf8-27', front: 'Dlaczego Marek Edelman w książce „Zdążyć przed Panem Bogiem” porównuje swoją pracę kardiologa do walki w getcie?', back: 'Zarówno w getcie, jak i w szpitalu walczy o ocalenie pojedynczego ludzkiego życia — uważa, że „Pan Bóg już chce zgasić świeczkę, a ja muszę szybko osłonić płomień”, czyli wydrzeć śmierci choćby kilka dodatkowych lat.', hint: 'Osłanianie płomienia życia przed śmiercią.', category: 'cytat' },
    { id: 'kf8-28', front: 'W jaki sposób Marek Edelman polemizuje z tradycyjnym mitem bohaterskiej śmierci w powstaniu w getcie warszawskim?', back: 'Mówi bez patosu o brudzie, strachu, głodzie i bezradności powstańców; twierdzi, że „śmierć z bronią w ręku” nie była lepsza niż cicha śmierć w komorze gazowej, a najważniejsza była godność wyboru sposobu umierania.', hint: 'Antypatetyczna prawda o powstaniu w getcie.', category: 'motyw' },
    { id: 'kf8-29', front: 'Jakie cztery ministerstwa rządzą w Oceanii w „Roku 1984” i na czym polega ich ironiczna nazwa?', back: 'Ministerstwo Prawdy (zajmuje się cenzurą i fałszowaniem historii), Ministerstwo Pokoju (prowadzi nieustanną wojnę), Ministerstwo Miłości (torturuje i łamie opozycjonistów) oraz Ministerstwo Obfitości (zarządza niedoborem).', hint: 'Orwellowska ironia: nazwa odwrotna do funkcji.', category: 'lektura' },
    { id: 'kf8-30', front: 'Co symbolizuje ostateczne zdanie powieści „Rok 1984”: „Kochał Wielkiego Brata”?', back: 'Totalne zwycięstwo totalitaryzmu nad jednostką — system nie zadowala się samym zabiciem buntownika, lecz najpierw łamie jego psychikę w Pokoju 101 (zdrada Julii), zmuszając go do szczerego pokochania oprawcy.', hint: 'Całkowite złamanie duszy i zdrada miłości.', category: 'cytat' },
    { id: 'kf8-31', front: 'Kim był Jean Tarrou w „Dżumie” Alberta Camusa i na czym polega jego koncepcja „świętego bez Boga”?', back: 'Przyjaciel doktora Rieux i organizator oddziałów sanitarnych; uważa, że każdy człowiek nosi w sobie „bakcyla dżumy” (skłonność do zła), więc jedynym wyjściem jest ciągła czujność i solidarność z ofiarami bez religijnej nagrody.', hint: 'Świecka etyka i nieustanna czujność wobec zła.', category: 'bohater' },
    { id: 'kf8-32', front: 'Jakie jest przesłanie finału „Dżumy” Alberta Camusa mimo chwilowego ustąpienia zarazy w Oranie?', back: 'Doktor Rieux wie, że radość tłumu jest zagrożona, ponieważ „bakcyl dżumy nigdy nie umiera i nie znika” — może uśpiony czekać wiele lat, by znów obudzić szczury w szczęśliwym mieście (przestroga przed powrotem zła i totalitaryzmu).', hint: 'Uśpiony bakcyl zła zawsze może powrócić.', category: 'motyw' }
  ],
  quiz: [
    {
      id: "kq8-1",
      q: "Wskaż zdanie, które trafnie definiuje pojęcie „człowieka zlagrowanego” w twórczości Tadeusza Borowskiego:",
      options: [
        "To człowiek, który w warunkach obozu koncentracyjnego odrzucił normy etyczne, podporządkowując wszystko biologicznemu przetrwaniu.",
        "To więzień, który mimo tortur zdołał zachować pełną czystość moralną i wiarę w Boga.",
        "To niemiecki strażnik SS czerpiący sadystyczną przyjemność ze znęcania się nad więźniami.",
        "To powstaniec warszawski walczący w ruinach stolicy z bronią w ręku."
      ],
      correct: 0,
      explanation: "Człowiek zlagrowany to ofiara, która pod wpływem głodu i strachu przyswoiła bezwzględne reguły obozu i traktuje śmierć innych jako coś naturalnego.",
      whyWrong: {
        1: "Błąd: Taki heroizm opisywał raczej Grudziński u Kostylewa, a nie Borowski.",
        2: "Błąd: Człowiek zlagrowany to więzień (ofiara), a nie esesman (kat).",
        3: "Błąd: To definicja powstańca (np. Kolumba), a nie więźnia lagru."
      },
      examTip: "W wypracowaniu podkreślaj, że człowiek zlagrowany to produkt zbrodniczego systemu obozowego, który zatarł granicę między dobrem a złem."
    },
    {
      id: "kq8-2",
      q: "Dlaczego Gustaw Herling-Grudziński w epilogu „Innego świata” odmówił wypowiedzenia słowa „rozumiem” dawnemu współwięźniowi z Witebska?",
      options: [
        "Ponieważ go osobiście nienawidził i mścił się za dawne krzywdy.",
        "Ponieważ uważał, że współwięzień kłamał i nigdy nie był w Jercewie.",
        "Ponieważ obawiał się aresztowania przez włoską policję w Rzymie.",
        "Ponieważ uznał, że zdrady i donosu na niewinnych ludzi nie można usprawiedliwiać w świecie wolnym prawami sowieckiego łagru."
      ],
      correct: 3,
      explanation: "Grudziński sformułował zasadę: „Człowiek jest ludzki w ludzkich warunkach”. W wolnym świecie nie wolno dawać rozgrzeszenia zbrodniom popełnionym w lagrze, bo zniszczyłoby to fundament moralności.",
      whyWrong: {
        0: "Błąd: Autor nie czuł prywatnej nienawiści, lecz moralne rozdarcie.",
        1: "Błąd: Wiedział, że mówi prawdę, gdyż znał szczegóły z obozu w Jercewie.",
        2: "Błąd: Rozmowa była w 100% prywatna i nie miała związku z policją."
      },
      examTip: "Epilog w Rzymie to kulminacja problematyki etycznej „Innego świata” — kluczowy argument do tematów o granicach moralności."
    },
    {
      id: "kq8-3",
      q: "Marek Edelman w reportażu Hanny Krall „Zdążyć przed Panem Bogiem” uważał, że powstanie w getcie warszawskim wybuchło po to, aby:",
      options: [
        "Wybić tunel pod murami getta i umożliwić ucieczkę milionom Żydów do Puszczy Kampinoskiej.",
        "Zadać militarne zwycięstwo armii niemieckiej i wyzwolić Warszawę.",
        "Wybrać godny sposób umierania z bronią w ręku zamiast bezwolnego pójścia do komór gazowych Treblinki.",
        "Zademonstrować lojalność wobec władz rządu londyńskiego."
      ],
      correct: 2,
      explanation: "Edelman jednoznacznie odrzuca mit heroicznego zwycięstwa — powstańcy wiedzieli, że nie mają szans na przeżycie, walczyli o prawo do wyboru godnej śmierci.",
      whyWrong: {
        0: "Błąd: Nie było planu ewakuacji milionów ludzi przez tunele.",
        1: "Błąd: Garstka słabo uzbrojonych powstańców nie mogła pokonać wojsk von Sammern-Frankenegga i Stroopa.",
        3: "Błąd: Chodziło o godność narodu żydowskiego, a nie polityczne gesty."
      },
      examTip: "Odbrązowienie mitu powstania przez Edelmana to sztandarowy motyw polemiki z tradycją romantyczną."
    },
    {
      id: "kq8-4",
      q: "W jaki sposób Winston Smith zostaje ostatecznie złamany w Pokoju 101 w „Roku 1984” George’a Orwella?",
      options: [
        "W obliczu klatki z wygłodniałymi szczurami zdradza ukochaną Julię, krzycząc, by to jej zrobiono krzywdę.",
        "Zostaje poddany operacji chirurgicznej usunięcia pamięci.",
        "Podpisuje fałszywe przyznanie się do winy w zamian za obietnicę zwolnienia do domu.",
        "Zostaje zahipnotyzowany przez Wielkiego Brata podczas Dwu Minut Nienawiści."
      ],
      correct: 0,
      explanation: "Winston bał się panicznie szczurów. Groźba rozszarpania twarzy przez gryzonie sprawiła, że wyrzekł się miłości do Julii („Zróbcie to Julii! Nie mnie!”), co oznaczało całkowitą kapitulację duszy.",
      whyWrong: {
        1: "Błąd: W Oceanii nie stosowano operacji mózgu, lecz pranie psychiczne przez tortury.",
        2: "Błąd: Podpisywał zeznania wcześniej, ale to w Pokoju 101 złamano jego uczucia.",
        3: "Błąd: Hipnoza nie była metodą stosowaną w Pokoju 101."
      },
      examTip: "Złamanie Winstona w Pokoju 101 dowodzi, że totalitaryzm doskonały niszczy człowieka od wewnątrz, zabijając w nim zdolność do kochania."
    },
    {
      id: "kq8-5",
      q: "Czym w powieści „Dżuma” Alberta Camusa jest tytułowa choroba w ujęciu symbolicznym?",
      options: [
        "Wyłącznie historyczną epidemią dżumy płucnej bez jakichkolwiek podtekstów metaforycznych.",
        "Alegorią upadku kapitalizmu i triumfu rewolucji proletariackiej.",
        "Symbolem kary Bożej zesłanej sprawiedliwie na mieszkańców Algierii za ich grzechy.",
        "Wieloznaczną parabolą zła: wojny, faszyzmu (brunatna dżuma), absurdu świata i ciemnej strony natury ludzkiej."
      ],
      correct: 3,
      explanation: "„Dżuma” to powieść-parabola. Pod realną epidemią kryje się doświadczenie II wojny światowej, okupacji hitlerowskiej oraz uniwersalna refleksja o walce ze złem.",
      whyWrong: {
        0: "Błąd: Paraboliczny charakter dzieła jest powszechnie uznanym kanonem interpretacyjnym.",
        1: "Błąd: Camus nie pisał powieści marksistowskiej.",
        2: "Błąd: Taki pogląd głosił ojciec Paneloux w I kazaniu, lecz powieść go odrzuca."
      },
      examTip: "Parabola dżumy (dosłowna choroba + metafora faszyzmu + absurd egzystencjalny) to pewniak do tematów z teorii literatury."
    },
    {
      id: "kq8-6",
      q: "Postawa doktora Bernarda Rieux w „Dżumie” Camusa opiera się na:",
      options: [
        "Głębokiej wierze w to, że Bóg wynagrodzi jego cierpienie w niebie.",
        "Zwykłej ludzkiej uczciwości i wierności obowiązkowi lekarskiemu bez zbędnego patosu.",
        "Chęci zdobycia sławy i medali po zakończeniu kwarantanny.",
        "Poczuciu całkowitej bezsilności prowadzącej do zaniechania leczenia chorych."
      ],
      correct: 1,
      explanation: "Rieux to wzór laickiego humanisty: nie wierzy w Boga, odrzuca patos, a walkę z zarazą uważa za oczywisty, logiczny obowiązek człowieka wobec drugiego człowieka.",
      whyWrong: {
        0: "Błąd: Rieux był agnostykiem/ateistą i buntował się przeciw cierpieniu dzieci.",
        2: "Błąd: Doktor gardził tanią sławą i nie zabiegał o zaszczyty.",
        3: "Błąd: Mimo zmęczenia pracował na granicy wyczerpania aż do końca epidemii."
      },
      examTip: "Określenie „heroizm codzienny / heroizm bez patosu” to najlepsza formuła na scharakteryzowanie doktora Rieux."
    },
    {
      id: "kq8-7",
      q: "Wiersz Krzysztofa Kamila Baczyńskiego „Pokolenie” zawiera słynne wersy opisujące wojenny dekalog pokolenia:",
      options: [
        "„Nas nauczono. Nie ma sumienia. / Nas nauczono. Trzeba zapomnieć...”.",
        "„Litwo! Ojczyzno moja! ty jesteś jak zdrowie...”.",
        "„A wiosną – niechaj wiosnę, nie Polskę zobaczę!”.",
        "„Miałeś, chamie, złoty róg, ostał ci się ino sznur”."
      ],
      correct: 0,
      explanation: "Baczyński ukazuje tragiczne odwrócenie norm etycznych — wojna zmusiła młodych do wyparcia sumienia i pamięci, by móc przetrwać i zabijać wroga.",
      whyWrong: {
        1: "Błąd: To inwokacja z „Pana Tadeusza” Mickiewicza.",
        2: "Błąd: To słowa Jana Lechonia z wiersza „Herostrates”.",
        3: "Błąd: To słowa Chochoła z „Wesela” Wyspiańskiego."
      },
      examTip: "Wiersz „Pokolenie” Baczyńskiego to najważniejszy liryczny dokument tragedii Kolumbów na maturze."
    },
    {
      id: "kq8-8",
      q: "Nowomowa w państwie Oceanii („Rok 1984”) miała na celu:",
      options: [
        "Wzbogacenie języka mieszkańców o nowe pojęcia filozoficzne i poetyckie.",
        "Naukę gramatyki łacińskiej w szkołach powszechnych.",
        "Ułatwienie handlu międzynarodowego z Eurazją i Wschódazją.",
        "Uniemożliwienie popełnienia zbrodni myśli poprzez drastyczne zredukowanie zasobu słów."
      ],
      correct: 3,
      explanation: "Orwell genialnie ukazał zależność myśli od języka: jeśli ze słownika usunie się słowa określające wolność i sprzeciw, heretycka myśl stanie się niemożliwa do pomyślenia.",
      whyWrong: {
        0: "Błąd: Nowomowa drastycznie ubożyła język, wycinając niepotrzebne słowa.",
        1: "Błąd: Nowomowa niszczyła tradycyjne konstrukcje językowe.",
        2: "Błąd: Oceania toczyła z tymi państwami permanentną wojnę, nie handel."
      },
      examTip: "Kontekst lingwistyczny: hipoteza Sapira-Whorfa (język kształtuje sposób myślenia człowieka) świetnie pasuje do analizy nowomowy."
    },
    {
      id: "kq8-9",
      q: "Który z bohaterów „Dżumy” Alberta Camusa organizuje ochotnicze formacje sanitarne i szuka „świętości bez Boga”?",
      options: [
        "Raymond Rambert",
        "Jean Tarrou",
        "Joseph Grand",
        "Cottard"
      ],
      correct: 1,
      explanation: "Jean Tarrou, syn prokuratora walczący z karą śmierci, powołuje ochotnicze drużyny sanitarne i pragnie być „świętym bez Boga”, czyli człowiekiem nieczyniącym nikomu krzywdy.",
      whyWrong: {
        0: "Błąd: Rambert to dziennikarz, który początkowo chciał uciec do Paryża.",
        2: "Błąd: Grand to skromny urzędnik piszący pierwsze zdanie powieści.",
        3: "Błąd: Cottard to przestępca bogacący się na zarazie."
      },
      examTip: "Pojęcie „świętości bez Boga” Tarrou to kluczowy element Camusa filozofii laickiej."
    },
    {
      id: "kq8-10",
      q: "W opowiadaniu Tadeusza Borowskiego „Ludzie, którzy szli” gra w piłkę nożną przez więźniów została zestawiona z:",
      options: [
        "Uroczystym apelem z udziałem komendanta obozu.",
        "Udaną ucieczką grupy więźniów z obozu.",
        "Zagazowaniem trzech tysięcy ludzi prowadzonych tuż za boiskiem do komór.",
        "Wizytacją przedstawicieli Czerwonego Krzyża."
      ],
      correct: 2,
      explanation: "To jedna z najbardziej wstrząsających scen Borowskiego (z opowiadania „Ludzie, którzy szli”): Tadek stoi na bramce, a między jednym a drugim kornerem (rzutem rożnym) za plecami graczy poprowadzono do komór 3000 ludzi.",
      whyWrong: {
        0: "Błąd: Scena dotyczyła kontrastu sportu i masowej rzezi, nie apelu.",
        1: "Błąd: Ucieczka nie miała miejsca w tej scenie.",
        3: "Błąd: Czerwony Krzyż nie wizytował komór gazowych w Birkenau."
      },
      examTip: "Ten drastyczny kontrast obrazuje znieczulicę człowieka zlagrowanego i powszedniość śmierci w obozie."
    },
    {
      id: "kq8-11",
      q: "Jakie znaczenie ma finałowe ostrzeżenie doktora Rieux w zakończeniu „Dżumy” Camusa?",
      options: [
        "Dżuma została definitywnie wytępiona dzięki nowej szczepionce i nigdy nie powróci.",
        "Bakcyl dżumy nigdy nie umiera i może po latach uśpienia powrócić na zgubę ludzi, dlatego należy zachować czujność moralną.",
        "Ludzie powinni natychmiast opuścić Afrykę i przenieść się do Europy.",
        "Władze miasta powinny zburzyć Oran i wybudować nowe miasto na pustyni."
      ],
      correct: 1,
      explanation: "Rieux ostrzega, że bakcyl zła, wojny i fanatyzmu nigdy nie ginie na zawsze — uśpiony w bieliźnie i papierach może w każdej chwili zaatakować beztroskie społeczeństwo.",
      whyWrong: {
        0: "Błąd: Rieux wyraźnie zaprzecza naiwnemu optymizmowi tłumu.",
        2: "Błąd: Nie chodzi o migrację geograficzną, lecz o kondycję ludzką.",
        3: "Błąd: Zburzenie miasta nie rozwiązałoby problemu zła tkwiącego w naturze człowieka."
      },
      examTip: "Cytat o „bakcylu dżumy, który nigdy nie umiera” to genialne podsumowanie wypracowania na temat uniwersalności zła."
    },
    {
      id: "kq8-12",
      q: "W „Innym świecie” Gustawa Herlinga-Grudzińskiego racje żywnościowe w łagrze (tzw. kotły) były przydzielane według zasady:",
      options: [
        "Każdy więzień otrzymywał dokładnie taką samą porcję chleba i zupy.",
        "O porcjach decydował wyłącznie wiek i stan zdrowia więźnia.",
        "Wysokość racji zależała od procentu wyrobionej normy katorżniczej pracy przy wyrębie lasu.",
        "Jedzenie przysługiwało tylko więźniom politycznym, a przestępcy głodowali."
      ],
      correct: 2,
      explanation: "System trzech kotłów był bezwzględnym mechanizmem eksterminacji: kocioł I (głodowy) dla niewyrabiających normy prowadził do szybkiej śmierci z wycieńczenia; kocioł III dawał szansę na przeżycie.",
      whyWrong: {
        0: "Błąd: W Gułagu nie było równości — system faworyzował silnych robotników.",
        1: "Błąd: Chorych i słabych spychano do tzw. trupiarni na śmierć głodową.",
        3: "Błąd: Przestępcy pospolici (urkowie) rządzili w barakach i okradali więźniów politycznych."
      },
      examTip: "System kotłów żywnościowych dowodzi nieludzkiej inżynierii sowieckiego łagru: głód zmuszał ludzi do wycieńczania się pracą."
    },
    {
      id: "kq8-13",
      q: "Czym wyróżnia się styl narracji behawiorystycznej w opowiadaniach oświęcimskich Tadeusza Borowskiego?",
      options: [
        "Rejestruje wyłącznie zewnętrzne zachowania, gesty i dialogi ludzi bez analizowania ich przeżyć wewnętrznych i bez komentarzy moralizujących.",
        "Skupia się na długich monologach filozoficznych narratora o sensie historii.",
        "Używa podniosłego, romantycznego patosu i archaizmów biblijnych.",
        "Opisuje wydarzenia z perspektywy strażników SS wspominających wojnę po latach."
      ],
      correct: 0,
      explanation: "Behawioryzm literacki pokazuje człowieka poprzez jego reakcje zewnętrzne i czyny, zmuszając czytelnika do samodzielnego wyciągnięcia wstrząsających wniosków moralnych.",
      whyWrong: {
        1: "Borowski celowo rezygnuje z filozoficznego komentowania i ocen.",
        2: "Język Borowskiego jest chłodny, potoczny, wręcz brutalnie rzeczowy.",
        3: "Narrator Tadek to więzień-vorarbeiter (Polak), nie esesman."
      },
      examTip: "Behawioryzm Borowskiego to najczęstsze pytanie arkuszowe dotyczące formy jego opowiadań."
    },
    {
      id: "kq8-14",
      q: "Dlaczego w finale „Innego świata” Gustaw Herling-Grudziński odmówił przebaczenia współwięźniowi spotkanemu w Rzymie?",
      options: [
        "Uznał, że w normalnym, wolnym świecie nie wolno rozgrzeszać czynów popełnionych dla przeżycia kosztem śmierci czterech niewinnych Niemców.",
        "Ponieważ ów współwięzień był w łagrze komendantem obozu i osobiście go torturował.",
        "Ponieważ Grudziński całkowicie stracił pamięć o latach spędzonych w Jercewie.",
        "Ponieważ współwięzień nie chciał oddać mu pożyczonych pieniędzy."
      ],
      correct: 0,
      explanation: "W „Epilogu” były więzień przyznał się, że przeżył, składając fałszywy donos, i poprosił o słowo zrozumienia — Grudziński milcząco odszedł, broniąc granicy między etyką wolnego świata a złem łagru.",
      whyWrong: {
        1: "Rozmówca nie był komendantem, lecz zwykłym więźniem, który ratował życie donosem.",
        2: "Grudziński doskonale pamiętał każdy szczegół Jercewa.",
        3: "Nie chodziło o żadne długi finansowe."
      },
      examTip: "Epilog „Innego świata” stanowi bezpośrednią polemikę z „zlagrowanym” relatywizmem ukazanym u Borowskiego."
    },
    {
      id: "kq8-15",
      q: "Co w „Zdążyć przed Panem Bogiem” Hanny Krall symbolizuje postać Marka Edelmana jako powojennego kardiologa?",
      options: [
        "Kontynuację walki o ludzkie życie — tym razem z czasem i śmiercią na oddziale kardiologicznym zamiast z bronią w getcie.",
        "Chęć ucieczki od wspomnień z getta i całkowitego zapomnienia o kolegach z ŻOB.",
        "Dążenie do sławy medialnej i bogactwa w PRL.",
        "Wiarę w to, że medycyna może całkowicie zastąpić pamięć historyczną."
      ],
      correct: 0,
      explanation: "Edelman mówi o „wyścigu z Panem Bogiem”: jeśli Bóg chce zgasić świeczkę życia, lekarz stara się choć na chwilę osłonić płomień.",
      whyWrong: {
        1: "Edelman nie zapomniał — co roku przynosił żonkile pod pomnik Bohaterów Getta i mówił o kolegach.",
        2: "Edelman żył skromnie i odrzucał propagandowy blichtr.",
        3: "Książka jest właśnie świadectwem pamięci historycznej."
      },
      examTip: "W „Zdążyć przed Panem Bogiem” dostrzegaj zestawienie dwóch wymiarów odwagi: zbrojnej w getcie i codziennej w szpitalu."
    },
    {
      id: "kq8-16",
      q: "W jaki sposób władza Partii w „Roku 1984” George’a Orwella kontrolowała przeszłość i pamięć obywateli?",
      options: [
        "Nieustannie fałszowała stare gazety, fotografie i dokumenty w Ministerstwie Prawdy tak, aby Partia zawsze miała rację („Kto kontroluje przeszłość, ten kontroluje przyszłość”).",
        "Przekazywała wszystkie archiwa historyczne niezależnym uniwersytetom.",
        "Zakazała wydawania jakichkolwiek gazet i książek w Oceanii.",
        "Umożliwiała obywatelom swobodny dostęp do zagranicznych bibliotek."
      ],
      correct: 0,
      explanation: "Winston Smith sam pracował w Departamencie Archiwów Ministerstwa Prawdy, przepisując stare numery „Timesa” i wrzucając niewygodne fakty do „luk pamięci”.",
      whyWrong: {
        1: "W Oceanii nie istniały żadne niezależne instytucje naukowe.",
        2: "Partia wydawała masowo spreparowaną prasę i tanią literaturę dla proli.",
        3: "Obywatele nie mieli dostępu do żadnych źródeł z zagranicy."
      },
      examTip: "Orwellowskie „luki pamięci” i fałszowanie historii to świetny kontekst do tematów o propagandzie i manipulacji prawdą."
    },
    {
      id: "kq8-17",
      q: "Dlaczego w „Roku 1984” Partia stworzyła „nowomowę” (Newspeak)?",
      options: [
        "Aby poprzez drastyczne zubożenie słownictwa i usunięcie słów takich jak „wolność” uczynić samą myślozbrodnię niemożliwą do pomyślenia.",
        "Aby ułatwić cudzoziemcom szybką naukę języka angielskiego.",
        "Aby rozwijać poezję futurystyczną i neologizmy artystyczne.",
        "Aby ułatwić komunikację z sąsiednimi mocarstwami Eurazją i Wschódazją."
      ],
      correct: 0,
      explanation: "Jeśli nie istnieją słowa nazywające bunt, wolność czy sprawiedliwość w sensie przeciwnym Partii, człowiek nie potrafi nawet sformułować w głowie buntu.",
      whyWrong: {
        1: "Celem nowomowy była kontrola umysłu, nie ułatwienie edukacji cudzoziemcom.",
        2: "Nowomowa niszczyła literaturę i wieloznaczność poezji.",
        3: "Oceania była w stanie permanentnej wojny z tymi mocarstwami."
      },
      examTip: "Nowomowa to narzędzie zniewolenia myśli poprzez język — świetny argument także do zadań językowych z Części 1 arkusza!"
    },
    {
      id: "kq8-18",
      q: "Jak zmieniła się postawa ojca Paneloux w „Dżumie” Alberta Camusa między jego pierwszym a drugim kazaniem?",
      options: [
        "Z potępienia grzesznych mieszkańców („zasłużyliście na karę”) przeszedł do pokornego współodczuwania z cierpiącymi („my” zamiast „wy”) po śmierci dziecka sędziego Othona.",
        "Opuścił Oran pierwszym statkiem, porzucając swoją parafię.",
        "Wyrzekł się wiary w Boga i ogłosił ateizm z ambony.",
        "Zaczął głosić, że dżuma jest zwykłą plotką wymyśloną przez prasę."
      ],
      correct: 0,
      explanation: "Śmierć niewinnego dziecka wstrząsnęła Paneloux — w drugim kazaniu mówił już „my”, uznając tajemnicę wiary wymagającą przyjęcia nawet niezrozumiałego cierpienia i solidarności z ludźmi.",
      whyWrong: {
        1: "Paneloux pozostał w Oranie i wstąpił do oddziałów sanitarnych.",
        2: "Pozostał wierzącym księdzem aż do śmierci.",
        3: "Od początku traktował epidemię śmiertelnie poważnie."
      },
      examTip: "Ewolucja ojca Paneloux to głęboki obraz zderzenia dogmatu religijnego z tajemnicą niezawinionego cierpienia."
    },
    {
      id: "kq8-19",
      q: "Co łączy doktora Bernarda Rieux, Jeana Tarrou i urzędnika Josepha Granda w „Dżumie”?",
      options: [
        "Cichy, pozbawiony patosu heroizm codzienności — poczucie zwykłego obowiązku i solidarności z cierpiącymi w obliczu absurdu.",
        "Przekonanie, że jedynym sposobem pokonania zarazy jest ucieczka w góry.",
        "Wiara w to, że dżuma stanowi sprawiedliwą karę dla bogatych kupców.",
        "Chęć wykorzystania kwarantanny do nielegalnego handlu żywnością."
      ],
      correct: 0,
      explanation: "Camus celowo czyni bohaterem powieści skromnych ludzi (lekarza, społecznika, drobnego urzędnika), którzy robią to, co do nich należy, bo „w człowieku więcej rzeczy zasługuje na podziw niż na pogardę”.",
      whyWrong: {
        1: "Wszyscy trzej zostali w mieście i walczyli z epidemią.",
        2: "To Cottard czerpał zyski z chaosu kwarantanny, nie oni.",
        3: "Rieux był niewierzącym humanistą, a nie kaznodzieją kary Bożej."
      },
      examTip: "„Heroizm codzienności” to najważniejsza kategoria etyczna „Dżumy” Camusa."
    },
    {
      id: "kq8-20",
      q: "Jaki kontrast buduje Krzysztof Kamil Baczyński w wierszu „Elegia o… [chłopcu polskim]”?",
      options: [
        "Zderza wspomnienie czułego, niewinnego dzieciństwa („oddzielili cię, syneczku, od snów”) z brutalną rzeczywistością wojny, która zmusiła młodego człowieka do zabijania i przedwczesnej śmierci.",
        "Przeciwstawia piękno paryskich kawiarni surowej przyrodzie Tatr.",
        "Zestawia zwycięstwo armii napoleońskiej z klęską powstania listopadowego.",
        "Kontrastuje nowoczesny przemysł PRL z życiem na wsi."
      ],
      correct: 0,
      explanation: "Wiersz ukazuje tragizm całego Pokolenia Kolumbów — „wyuczono” ich nienawiści i lęku, zanim zdążyli dorosnąć w pokoju.",
      whyWrong: {
        1: "Wiersz dotyczy tragizmu wojennego, nie porównania Paryża i Tatr.",
        2: "Dotyczy II wojny światowej i okupacji, nie XIX wieku.",
        3: "Baczyński zginął w 1944 r. w powstaniu warszawskim, przed powstaniem PRL."
      },
      examTip: "Baczyński to klasyczny patron tematu o utraconej młodości i cenie wojny."
    }
  ]
};
