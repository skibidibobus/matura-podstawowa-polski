export const DEPT_05 = {
  id: 'dept-05',
  displayNum: 5,
  code: 'DZIAŁ 5',
  title: 'Pozytywizm i Realizm — Praca, Nauka i Społeczeństwo',
  subtitle: 'Praca organiczna, scjentyzm, Lalka w całości, Zbrodnia i kara, Potop, nowelistyka',
  duration: '95 min',
  xp: 280,
  notes: [
    {
      id: 'kn5-1',
      title: 'Pozytywizm w Polsce — Filozofia, Hasła Programowe i Spór Pokoleń',
      badge: 'Fundament Epoki',
      intro:
        'Polski pozytywizm narodził się na zgliszczach powstania styczniowego (1863–1864). Młode pokolenie uznało walkę zbrojną za samobójstwo biologiczne narodu i postawiło na nowoczesny patriotyzm gospodarczy, edukację i naukę.',
      blocks: [
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Kluczowe ramy i geneza epoki',
          items: [
            'Ramy czasowe w Polsce: 1864 (klęska powstania styczniowego i represje carskie) – ok. 1890 (debiuty młodopolskie).',
            'Nazwa epoki: pochodzi od dzieła Auguste’a Comte’a „Wykład filozofii pozytywnej” — wiedza pozytywna to wiedza pewna, sprawdzalna doświadczalnie i użyteczna.',
            'Spór „młodych” ze „starymi”: manifest Aleksandra Świętochowskiego „My i wy” (1871) oraz artykuły Piotra Chmielowskiego i Adama Wiślickiego — odrzucenie romantycznego mistycyzmu na rzecz pragmatyzmu.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Praca organiczna (Herbert Spencer)',
              desc: 'Pojmowanie narodu jako jednego żywego organizmu.',
              details: {
                summary:
                  'Zgodnie z koncepcją socjologiczną Spencera społeczeństwo funkcjonuje jak biologiczny ustrój. Aby cały organizm był zdrowy, wszystkie jego części i organy (warstwy społeczne) muszą harmonijnie współpracować.',
                bullets: [
                  'Jeśli chłopi i robotnicy wegetują w skrajnej nędzy i ciemnocie, a arystokracja trwoni majątek, całe państwo ulega martwicy.',
                  'Główny nacisk kładziono na uprzemysłowienie, handel, bankowość i budowę polskiego kapitału.',
                  'Realizacja w literaturze: działalność handlowa Wokulskiego w „Lalce”, zakładanie spółki do handlu ze Wschodem.'
                ],
                essayUse: 'Idealny kontekst do każdego tematu o rozwoju społecznym, patriotyzmie gospodarczym i krytyce pasożytnictwa klas wyższych.'
              }
            },
            {
              term: 'Praca u podstaw',
              desc: 'Kaganiec oświaty i pomoc materialna dla najuboższych.',
              details: {
                summary:
                  'Moralny i patriotyczny obowiązek warstw uprzywilejowanych (inteligencji, ziemiaństwa) wobec „podstaw” społeczeństwa — chłopów, miejskiej biedoty i robotników.',
                bullets: [
                  'Walka z plagą analfabetyzmu na wsi i w suterenach miejskich, szerzenie higieny i nowoczesnego rolnictwa.',
                  'W literaturze: Wokulski pomagający braciom Wysockim, stolarzowi Węgiełkowi i nawracający prostytutkę Mariannę; nowele Sienkiewicza („Janko Muzykant”) i Prusa („Antek”).'
                ],
                essayUse: 'Kluczowy topos w tematach dotyczących powinności człowieka wykształconego wobec wykluczonych i słabych.'
              }
            },
            {
              term: 'Scjentyzm, Ewolucjonizm i Utylitaryzm',
              desc: 'Filary myśli filozoficznej XIX wieku.',
              details: {
                summary:
                  'Kult rozumu, nauki i pożytku społecznego zastąpił romantyczną wiarę w objawienie i intuicję.',
                bullets: [
                  'Scjentyzm: przekonanie, że prawdziwą wiedzę dają wyłącznie nauki przyrodnicze i ścisłe oparte na empiryzmie i eksperymencie.',
                  'Ewolucjonizm (Darwin, Spencer): prawa rozwoju przyrody rządzą też społeczeństwem — postęp dokonuje się stopniowo, a nie przez rewolucyjny przewrót.',
                  'Utylitaryzm (John Stuart Mill): wartość moralna każdego czynu zależy od jego użyteczności dla jak największej liczby ludzi.'
                ],
                essayUse: 'Filozoficzny kontekst do analizy postaci pasjonatów nauki: Juliana Ochockiego i profesora Geista w „Lalce”.'
              }
            },
            {
              term: 'Emancypacja kobiet i Asymilacja Żydów',
              desc: 'Walka z dyskryminacją i anachronizmami społecznymi.',
              details: {
                summary:
                  'Dwa kluczowe postulaty publicystyki pozytywistycznej zmierzające do unowocześnienia struktury polskiego społeczeństwa.',
                bullets: [
                  'Emancypacja kobiet: prawo kobiet do studiów wyższych, pracy zarobkowej i niezależności finansowej (Eliza Orzeszkowa „Marta”). Kobieta po utracie męża nie może być bezradna.',
                  'Asymilacja Żydów: postulat integracji ludności żydowskiej z kulturą i gospodarką polską przy zachowaniu tożsamości religijnej; walka z narastającym antysemityzmem (Eliza Orzeszkowa „O Żydach i kwestii żydowskiej”).'
                ],
                essayUse: 'Świetny kontekst do tematów o tolerancji, przemianach obyczajowych i roli kobiet w społeczeństwie.'
              }
            }
          ]
        },
        {
          type: 'callout',
          variant: 'amber',
          title: 'Pułapka CKE — Uwaga na uproszczenia!',
          items: [
            'Pozytywizm NIE oznaczał rezygnacji z niepodległości! Pisarze pozytywistyczni uważali jedynie, że zbrojne powstania w tamtym momencie niszczą biologiczne siły narodu, dlatego najpierw należy zbudować silne społeczeństwo i nowoczesną gospodarkę.',
            'Nie myl realizmu z naturalizmem: realizm dąży do obiektywnego, typowego obrazu życia społecznego; naturalizm skupia się na biologizmie, determinizmie genetycznym i drastycznych, brzydkich stronach egzystencji.'
          ]
        }
      ]
    },
    {
      id: 'kn5-2',
      title: 'Bolesław Prus: „Lalka” — Dzieło Totalne Polskiego Realizmu',
      badge: 'Lektura Obowiązkowa (w całości)',
      intro:
        '„Lalka” (1890) to panoramiczna powieść społeczno-obyczajowa ukazująca rozkład polskiego społeczeństwa pod zaborem rosyjskim. Prus stawia bolesną diagnozę: polski idealizm poniósł klęskę, a wybitna jednostka zostaje zmiażdżona przez bierność otoczenia.',
      blocks: [
        {
          type: 'prose',
          heading: 'Stanisław Wokulski — Człowiek Epoki Przejściowej',
          paragraphs: [
            'Wokulski to postać tragiczna, łącząca w sobie sprzeczne cechy dwóch epok. Jako romantyk: w młodości walczył w powstaniu styczniowym (1863), został zesłany do Irkucka, a całe swoje dojrzałe życie podporządkował szalonej, wyidealizowanej miłości do salonowej arystokratki Izabeli Łęckiej, dla której zdobywał majątek.',
            'Jako pozytywista: studiował w Szkole Głównej (studia przerwało powstanie), wierzy w naukę, prowadzi handel na wielką skalę, zakłada spółkę handlową, finansuje badania Ochockiego i Geista oraz bezinteresownie ratuje ludzi z nizin społecznych (dróżnika Wysockiego, stolarza Węgiełka, prostytutkę Mariannę).',
            'Jego tragedia polega na tym, że żadna z epok nie daje mu oparcia: dla arystokracji jest pogardzanym „kupcem galanteryjnym”, a dla pozytywistów marzycielem marnującym energię dla kobiety, która nim gardzi.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Izabela Łęcka i świat salonów',
              desc: 'Portret zdegenerowanej polskiej arystokracji.',
              details: {
                summary:
                  'Córka zbankrutowanego Tomasza Łęckiego, wychowana w złotej klatce luksusu i salonowych pozorów.',
                bullets: [
                  'Świat postrzega przez pryzmat marmurowego posągu Apollina — żyje ułudą, nie ma pojęcia o realnej wartości pieniądza ani pracy.',
                  'Traktuje Wokulskiego z wyższością jako dorobkiewicza, choć korzysta z jego pomocy finansowej (licytacja kamienicy, wykupienie weksli ojca).',
                  'Kluczowa scena w pociągu do Krakowa: Wokulski podsłuchuje jej flirt w języku angielskim z Kazimierzem Starskim (m.in. rozmowa o medalionie z metalem Geista podarowanym przez Wokulskiego), co bezpowrotnie niszczy jego idealizm i prowadzi do próby samobójczej w Skierniewicach.'
                ],
                essayUse: 'Wzór do motywu miłości destrukcyjnej, maski społecznej i krytyki pasożytnictwa arystokracji.'
              }
            },
            {
              term: 'Ignacy Rzecki i „Pamiętnik starego subiekta”',
              desc: 'Dwugłosowa narracja i idealizm polityczny.',
              details: {
                summary:
                  'Przyjaciel Wokulskiego, weteran Wiosny Ludów na Węgrzech (1848), bezgranicznie oddany idei bonapartyzmu.',
                bullets: [
                  'Jego pamiętnik tworzy drugą perspektywę narracyjną powieści, odsłaniając przeszłość Wokulskiego i historię XIX wieku.',
                  'Wzorzec absolutnej uczciwości kupieckiej i skromności; czuje się obco w świecie drapieżnego kapitalizmu.',
                  'Scena z nakręcanymi lalkami w oknie sklepu: Rzecki rozmyśla nad losem ludzkim jako theatrum mundi — ludzie są marionetkami w rękach ślepego losu.',
                  'Umiera w swoim pokoiku przy sklepie; doktor Szuman mówi o nim „Ostatni to romantyk!”, a Julian Ochocki znajduje w kieszeni Rzeckiego list od Węgiełka z informacją o wyryciu słów Horacego „Non omnis moriar” na krzyżu na ruinach zamku w Zasławiu (w odniesieniu do zaginionego Wokulskiego).'
                ],
                essayUse: 'Motyw pamiętnika, motyw theatrum mundi (świat jako teatr) oraz idealizm polityczny.'
              }
            },
            {
              term: 'Topografia Warszawy: Powiśle vs Krakowskie Przedmieście',
              desc: 'Realistyczny obraz kontrastów społecznych stolicy.',
              details: {
                summary:
                  'Prus z fotograficzną dokładnością odtworzył topografię Warszawy, ukazując przepaść cywilizacyjną między klasami.',
                bullets: [
                  'Powiśle: rynsztok, brud, błoto, śmietniki, epidemie tyfusu, prostytucja i nędza mieszkańców wegetujących na glinianym zboczu.',
                  'Krakowskie Przedmieście i Łazienki: pałace arystokracji, wytworne powozy, bale dobroczynne, gdzie na pomoc biednym przeznacza się ułamek tego, co wydaje się na kwiaty i stroje.',
                  'Paryż jako kontrast: miasto-organizm, uporządkowane, logiczne, tętniące pracą i nauką, w przeciwieństwie do chaotycznej i martwej Warszawy.'
                ],
                essayUse: 'Niezbędny motyw do tematów o obrazie miasta, zróżnicowaniu społecznym i krytyce bierności elit.'
              }
            },
            {
              term: 'Profesor Geist i Julian Ochocki',
              desc: 'Idealizm naukowy i wiara w potęgę rozumu.',
              details: {
                summary:
                  'Dwaj bohaterowie reprezentujący czystą pasję poznawczą, pozbawioną chęci zysku materialnego.',
                bullets: [
                  'Ochocki: młody arystokrata-wynalazca, marzący o stworzeniu maszyny latającej; odrzuca salonowe życie, czując się niezrozumiany przez swoją sferę.',
                  'Geist: genialny paryski chemik pracujący nad metalem lżejszym od powietrza; postrzega naukę jako sposób na wyzwolenie ludzkości lub jej zagładę.',
                  'Wokulski zapisuje w testamencie Ochockiemu lwią część majątku na badania naukowe.'
                ],
                essayUse: 'Do motywu pasji, nauki, poświęcenia dla postępu i samotności geniusza.'
              }
            }
          ]
        },
        {
          type: 'callout',
          variant: 'amber',
          title: 'Błąd Kardynalny CKE — Tego nigdy nie pisz!',
          items: [
            'NIE PISZ, że Wokulski na pewno zginął pod kołami pociągu w Skierniewicach! Został uratowany w ostatniej chwili przez dróżnika Wysockiego.',
            'NIE PISZ, że zakończenie powieści rozstrzyga o śmierci Wokulskiego w ruinach zamku w Zasławiu. Jego zniknięcie jest całkowicie otwarte — znajomi biorą pod uwagę wyjazd do Paryża do Geista, wyjazd do Indii lub Ameryki, albo śmierć pod gruzami wysadzonej ruiny w Zasławiu.',
            'NIE PISZ, że Izabela Łęcka kochała Wokulskiego. Izabela była nim zafascynowana wyłącznie jako osobliwym zjawiskiem i człowiekiem zyskującym wpływy, ale brzydziła się jego kupieckim pochodzeniem.'
          ]
        },
        {
          type: 'quote',
          label: 'Słynny monolog Wokulskiego o Powiślu',
          text: '„Oto miniatura kraju — myślał — w którym wszystko dąży do spodlenia i wytępienia rasy. Jedni giną z niedostatku, drudzy z rozpusty. Praca odejmuje sobie od ust, ażeby karmić niedołęgów; miłosierdzie hoduje bezczelnych próżniaków [...]”'
        }
      ]
    },
    {
      id: 'kn5-3',
      title: 'Fiodor Dostojewski: „Zbrodnia i kara” — Realizm Psychologiczny i Odkupienie',
      badge: 'Lektura Obowiązkowa (w całości)',
      intro:
        'Arcydzieło powieści polifonicznej Dostojewskiego (1866). Pisarz poddaje bezwzględnej wiwisekcji pychę ludzkiego rozumu i dowodzi, że żadna abstrakcyjna teoria nie może unieważnić Bożego i moralnego zakazu: „Nie zabijaj”.',
      blocks: [
        {
          type: 'prose',
          heading: 'Teoria Raskolnikowa — Podział na Ludzi Zwykłych i Niezwykłych',
          paragraphs: [
            'Rodion Romanowicz Raskolnikow, ubogi były student prawa, publikuje w gazecie artykuł „O zbrodni”, w którym dzieli ludzkość na dwie kategorie:',
            '1. Ludzie zwykli (materiał ludzki) — stanowią większość, żyją w posłuszeństwie wobec prawa i tradycji, służą jedynie przedłużaniu gatunku.',
            '2. Ludzie niezwykli (geniusze pokroju Napoleona czy Mahometa) — stoją ponad prawem, mają moralne prawo, a wręcz obowiązek, przekraczać normy etyczne i przelewać krew, jeśli wymaga tego realizacja wielkich idei służących ludzkości.',
            'Zabójstwo starej lichwiarki Alony Iwanowny miało być dla Rodiona eksperymentem psychologicznym: chciał sprawdzić, czy sam należy do rzędu „Napoleonów”, czy też jest jedynie „wszawym stworzeniem”.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Zbrodnia i natychmiastowy rozpad psychiki',
              desc: 'Makabryczny mord i klęska teorii.',
              details: {
                summary:
                  'Zbrodnia nie przebiega zgodnie z planem intelektualnym. Rodion zabija siekierą lichwiarkę, ale zmuszony jest też zabić jej niewinną, upośledzoną siostrę Lizawietę, która niespodziewanie weszła do mieszkania.',
                bullets: [
                  'Fizjologiczna i psychiczna reakcja: zamiast dumy pojawia się paraliżujący strach, maligna, gorączka i mdłości na sam widok krwi.',
                  'Ukrycie łupów: skradzione zastawy i sakiewkę chowa pod kamieniem na przypadkowym podwórzu — nie wydaje z nich ani kopiejki, co dowodzi, że motyw rabunkowy był jedynie pozorny.',
                  'Całkowita alienacja: poczucie odcięcia niewidzialną ścianą od matki, siostry Duni i przyjaciela Razumichina.'
                ],
                essayUse: 'Do tematów o cenie zbrodni, wyrzutach sumienia, pysze intelektualnej i rozpadzie więzi międzyludzkich.'
              }
            },
            {
              term: 'Sonia Marmieładowa — Ewangeliczne Odkupienie',
              desc: 'Czystość serca w rynsztoku grzechu.',
              details: {
                summary:
                  'Córka zmarłego pijaka Marmieładowa; zmuszona do prostytucji (żółty bilet), by ratować przed śmiercią głodową macochę i rodzeństwo.',
                bullets: [
                  'Uosobienie chrześcijańskiej pokory, miłości ofiarnej i głębokiej wiary.',
                  'Scena kluczowa: czytanie fragmentu Ewangelii św. Jana o wskrzeszeniu Łazarza — zapowiedź duchowego zmartwychwstania zbrodniarza Rodiona.',
                  'Sonia nie potępia Raskolnikowa, lecz każe mu pocałować ziemię na placu Siennym i wyznać winę przed ludźmi, a potem dobrowolnie towarzyszy mu na katorgę na Syberię.'
                ],
                essayUse: 'Klasyczny topos miłości ocalającej, nawrócenia, świętości w upodleniu i odkupienia winy.'
              }
            },
            {
              term: 'Porfiry Pietrowicz i Arkadiusz Swidrygajłow',
              desc: 'Pojedynek śledczy i sobowtór nihilista.',
              details: {
                summary:
                  'Dwie kluczowe postacie konstytuujące dramat psychologiczny Raskolnikowa.',
                bullets: [
                  'Porfiry Pietrowicz: genialny sędzia śledczy prowadzący z Rodionem subtelną grę psychologiczną. Zna prawdę, lecz nie aresztuje go od razu, dając mu czas na samodzielne przyznanie się do winy dla ocalenia duszy.',
                  'Arkadiusz Swidrygajłow: mroczne zwierciadło Raskolnikowa — człowiek, który naprawdę żyje poza dobrem i złem (cynik i bezwzględny rozpustnik). Jego samobójstwo uświadamia Rodionowi, że droga całkowitego nihilizmu kończy się wieczną pustką.'
                ],
                essayUse: 'Kontekst psychologiczny w tematach o naturze zła, sprawiedliwości i granicach ludzkiej wolności.'
              }
            },
            {
              term: 'Petersburg jako przestrzeń zbrodni',
              desc: 'Miasto-potwór determinujące ludzkie czyny.',
              details: {
                summary:
                  'Petersburg Dostojewskiego to nie miasto cesarskich pałaców, lecz duszna metropolia nędzy.',
                bullets: [
                  'Upał, kurz, zaduch, odór szynków, żółte tapety w nędznych izdebkach (pokój Rodiona przypomina szafę lub trumnę).',
                  'Przestrzeń wywołuje stany lękowe, manie i obłęd — popycha bohaterów do samobójstw i morderstw.'
                ],
                essayUse: 'Motyw miasta niszczącego człowieka, determinizmu środowiskowego i przestrzeni klaustrofobicznej.'
              }
            }
          ]
        },
        {
          type: 'callout',
          variant: 'amber',
          title: 'Pułapka CKE — Katorga i Zmartwychwstanie',
          items: [
            'Raskolnikow NIE nawraca się natychmiast po aresztowaniu ani na sali sądowej! Podczas procesu nadal uważa swoją teorię za słuszną, a żałuje jedynie tego, że okazał się za słaby psychicznie.',
            'Prawdziwa przemiana duchowa Rodiona dokonuje się dopiero pod koniec katorgi na Syberii, po ciężkiej chorobie, pod wpływem cichej miłości Soni i otwarcia Nowego Testamentu schowanego pod poduszką.'
          ]
        }
      ]
    },
    {
      id: 'kn5-4',
      title: 'Nowelistyka („Kamizelka”, „Gloria victis”) oraz Henryk Sienkiewicz: „Potop”',
      badge: 'Lektury we fragmentach / kontekst',
      intro:
        'Nowelistyka pozytywistyczna realizowała postulat dydaktyzmu i zwięzłości kompozycyjnej. Z kolei twórczość Henryka Sienkiewicza przywracała narodowi dumę z chlubnej przeszłości, pełniąc funkcję terapeutyczną.',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Bolesław Prus: „Kamizelka” [poza PP LO w Formule 2023 — kontekst]',
              desc: 'Mistrzostwo formy nowelistycznej i teoria sokoła.',
              details: {
                summary:
                  'Nowela zbudowana wokół centralnego motywu materialnego (kamizelki) zgodnie z klasyczną teorią sokoła Boccaccia.',
                bullets: [
                  'Fabuła: narrator obserwuje z okna sprzedaż zniszczonej kamizelki przez wdowę handlarzowi za 40 groszy, odkupuje ją za pół rubla i rekonstruuje historię młodego małżeństwa urzędnika chorującego na gruźlicę.',
                  'Wzajemne, szlachetne kłamstwo: mąż przesuwał sprzączkę paska kamizelki, by udowodnić żonie, że tyje i zdrowieje; żona w tajemnicy skracała pasek, by podtrzymać męża na duchu.',
                  'Wymowa: pochwała cichej, heroicznej miłości i poświęcenia w szarej codzienności bez wielkich słów.'
                ],
                essayUse: 'Do motywu miłości małżeńskiej, cierpienia, poświęcenia oraz kłamstwa w dobrej wierze.'
              }
            },
            {
              term: 'Eliza Orzeszkowa: „Gloria victis” [poza PP od 2024 r. — kontekst / przejściowo 2025–2028]',
              desc: 'Chwała zwyciężonym — pamięć o powstaniu 1863 r.',
              details: {
                summary:
                  'Opowiadanie z tomu wydanego w 1910 r., oddającego hołd bezimiennym bohaterom powstania styczniowego w poleskim lesie.',
                bullets: [
                  'Personifikacja przyrody: historię walki powstańczego oddziału Romualda Traugutta opowiadają drzewa (wielowiekowy Dąb, Świerk, Brzoza) oraz Wiatr.',
                  'Młodzi bohaterowie: delikatny humanista Maryś Tarłowski i dzielny oficer Jagmin, ginący w obronie rannego przyjaciela przed carskimi kozakami.',
                  'Przełamanie łacińskiej maksymy: wiatr zamienia okrzyk „Vae victis” (biada zwyciężonym) w triumfalne „Gloria victis” (chwała zwyciężonym) — moralne zwycięstwo idei wolności.'
                ],
                essayUse: 'Do motywu pamięci historycznej, heroizmu powstańczego, patriotyzmu i roli przyrody jako świadka historii.'
              }
            },
            {
              term: 'Henryk Sienkiewicz: „Potop” (w PP we fragmentach)',
              desc: 'Powieść historyczna pisana „ku pokrzepieniu serc”.',
              details: {
                summary:
                  'II część Trylogii ukazująca najazd szwedzki na Polskę (1655–1660) i moralne odrodzenie narodu.',
                bullets: [
                  'Andrzej Kmicic: porywczy, sarmacki zawadiaka, który składa przysięgę na krzyż hetmanowi Januszowi Radziwiłłowi, nieświadomie stając się narzędziem zdrady w Kiejdanach.',
                  'Metamorfoza w Babinicza: uświadomiwszy sobie zdradę Radziwiłłów, Kmicic przybiera nazwisko Babinicz i rozpoczyna heroiczną pokutę.',
                  'Obrona Jasnej Góry (1655): punkt zwrotny powieści; Kmicic wysadza wielką szwedzką kolubrynę, a cudowna obrona klasztoru budzi cały naród do walki z najeźdźcą.',
                  'Rehabilitacja: ratuje króla Jana Kazimierza na Śląsku, zostaje oczyszczony z zarzutu zdrady listem królewskim odczytanym w kościele w Upicie i poślubia ukochaną Oleńkę Billewiczównę.'
                ],
                essayUse: 'Klasyczny wzorzec do motywu przemiany wewnętrznej bohatera (od grzesznika do patrioty), obrony ojczyzny i sarmatyzmu.'
              }
            }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'kf5-1', front: 'Jakie są ramy czasowe pozytywizmu w Polsce?', back: '1864 (upadek powstania styczniowego) – ok. 1890 (początek Młodej Polski).', hint: 'Od klęski powstania do modernizmu', category: 'epoka' },
    { id: 'kf5-2', front: 'Czym jest „praca organiczna” według pozytywistów?', back: 'Koncepcją traktującą naród jak żywy organizm: harmonijny rozwój przemysłu i gospodarki wszystkich klas warunkuje zdrowie państwa.', hint: 'Herbert Spencer i biologia', category: 'pojecie' },
    { id: 'kf5-3', front: 'Na czym polegało hasło „pracy u podstaw”?', back: 'Na edukacji, walce z analfabetyzmem i podnoszeniu poziomu życia najuboższych warstw (chłopów, biedoty miejskiej).', hint: 'Oświata dla ludu', category: 'pojecie' },
    { id: 'kf5-4', front: 'Wyjaśnij pojęcie „scjentyzm”.', back: 'Pogląd głoszący, że prawdziwą wiedzę o świecie dają wyłącznie nauki przyrodnicze i ścisłe oparte na faktach i doświadczeniu.', hint: 'Zaufanie do nauk ścisłych', category: 'pojecie' },
    { id: 'kf5-5', front: 'Dlaczego Wokulski w „Lalce” jest nazywany człowiekiem epoki przejściowej?', back: 'Łączy cechy romantyka (udział w powstaniu 1863, idealizacja Izabeli Łęckiej) z pozytywistą (szacunek dla nauki, praca handlowa, filantropia).', hint: 'Serce romantyka, rozum pozytywisty', category: 'bohater' },
    { id: 'kf5-6', front: 'W jaki sposób Wokulski zdobył wielki majątek?', back: 'Na dostawach wojskowych dla armii rosyjskiej podczas wojny rosyjsko-tureckiej na Bałkanach (1877–1878).', hint: 'Wojna bałkańska', category: 'lektura' },
    { id: 'kf5-7', front: 'Czym była scena z lalkami w sklepie Rzeckiego?', back: 'Realizacją toposu theatrum mundi (świat jako teatr) — Rzecki widzi w zabawkach symbol ludzi sterowanych przez ślepy los.', hint: 'Theatrum mundi', category: 'motyw' },
    { id: 'kf5-8', front: 'W jakich okolicznościach Wokulski próbuje popełnić samobójstwo?', back: 'Na stacji w Skierniewicach, kładąc się na torach po odkryciu zdrady Izabeli ze Starskim; ratuje go dróżnik Wysocki.', hint: 'Stacja kolejowa i Wysocki', category: 'lektura' },
    { id: 'kf5-9', front: 'Kim jest Julian Ochocki w „Lalce”?', back: 'Młodym arystokratą-naukowcem, marzącym o zbudowaniu maszyny latającej, któremu Wokulski zapisuje część majątku.', hint: 'Konstruktor maszyny latającej', category: 'bohater' },
    { id: 'kf5-10', front: 'Na czym polegała teoria Rodiona Raskolnikowa w „Zbrodni i karze”?', back: 'Na podziale ludzi na zwykłych (podległych prawu) i niezwykłych (geniuszy jak Napoleon, mających prawo zabijać w imię idei).', hint: 'Artykuł „O zbrodni”', category: 'pojecie' },
    { id: 'kf5-11', front: 'Kogo zamordował Raskolnikow?', back: 'Starą lichwiarkę Alonę Iwanowną oraz jej upośledzoną, niewinną przyrodnią siostrę Lizawietę.', hint: 'Dwie ofiary', category: 'lektura' },
    { id: 'kf5-12', front: 'Jaką rolę odgrywa fragment o wskrzeszeniu Łazarza w „Zbrodni i karze”?', back: 'Jest zapowiedzią duchowego i moralnego zmartwychwstania Raskolnikowa pod wpływem wiary i miłości Soni.', hint: 'Ewangelia czytana z Sonią', category: 'motyw' },
    { id: 'kf5-13', front: 'Kim był Porfiry Pietrowicz?', back: 'Sędzią śledczym prowadzącym sprawę morderstwa lichwiarki, mistrzem psychologicznego osaczania podejrzanego.', hint: 'Śledczy psycholog', category: 'bohater' },
    { id: 'kf5-14', front: 'Jak kończy się wątek Swidrygajłowa w „Zbrodni i karze”?', back: 'Popełnia samobójstwo strzałem z rewolweru na ulicy Petersburga, uświadamiając bezsens absolutnego nihilizmu.', hint: 'Samobójstwo nihilisty', category: 'bohater' },
    { id: 'kf5-15', front: 'Jaka kara spotkała Raskolnikowa za morderstwo?', back: 'Został skazany na 8 lat katorgi na Syberii (sąd złagodził wyrok ze względu na dobrowolne przyznanie się, uratowanie Mikołki przed niesłusznym skazaniem i dawne szlachetne uczynki Rodiona).', hint: 'Syberia i katorga', category: 'lektura' },
    { id: 'kf5-16', front: 'Jaki jest sens tytułowej kamizelki w noweli Bolesława Prusa?', back: 'To symbol wzajemnego, szlachetnego oszukiwania się małżonków w chorobie z miłości (mąż przesuwał sprzączkę, żona skracała pasek).', hint: 'Szlachetne kłamstwo', category: 'motyw' },
    { id: 'kf5-17', front: 'Co oznacza tytuł noweli Orzeszkowej „Gloria victis”?', back: '„Chwała zwyciężonym” — odwrócenie rzymskiego „Vae victis”, hołd dla moralnego zwycięstwa powstańców styczniowych.', hint: 'Przeciwieństwo Vae victis', category: 'lektura' },
    { id: 'kf5-18', front: 'Pod jakim nazwiskiem pokutował Andrzej Kmicic w „Potopie”?', back: 'Jako Babinicz — pod tym nazwiskiem wsławił się m.in. wysadzeniem kolubryny na Jasnej Górze i ocaleniem króla.', hint: 'Babinicz', category: 'bohater' },
    { id: 'kf5-19', front: 'W jakim celu Sienkiewicz pisał Trylogię?', back: '„Ku pokrzepieniu serc” — by podtrzymać ducha narodowego Polaków pod zaborami pamięcią o dawnych triumfach.', hint: 'Pokrzepienie serc', category: 'epoka' },
    { id: 'kf5-20', front: 'W jakich okolicznościach w finale „Lalki” pojawiają się słowa Horacego „Non omnis moriar”?', back: 'W liście od stolarza Węgiełka (znalezionym przy zmarłym Rzeckim przez Szumana i Ochockiego) — napis ten wyryto na krzyżu na ruinach zamku w Zasławiu jako znak wiary w przetrwanie Wokulskiego.', hint: 'List Węgiełka przy Rzeckim i słowa Ochockiego/Szumana', category: 'cytat' },
    { id: 'kf5-21', front: 'Jakie były cztery główne hasła programowe polskiego pozytywizmu?', back: '1) Praca organiczna (rozwój gospodarki i przemysłu całego społeczeństwa); 2) Praca u podstaw (oświata i wsparcie dla najniższych warstw, chłopów i biedoty); 3) Emancypacja kobiet; 4) Asymilacja Żydów.', hint: 'Cztery filary programu pozytywistów.', category: 'epoka' },
    { id: 'kf5-22', front: 'Czym był scjentyzm i utylitaryzm w filozofii pozytywistycznej?', back: 'Scjentyzm to zaufanie wyłącznie do wiedzy naukowej opartej na doświadczeniu i faktach; utylitaryzm (J.S. Mill) to uznanie za wartościowe tego, co przynosi wymierny pożytek jak największej liczbie ludzi.', hint: 'Nauka empiryczna + użyteczność społeczna.', category: 'pojecie' },
    { id: 'kf5-23', front: 'Dlaczego Stanisława Wokulskiego nazywa się „człowiekiem epoki przejściowej”?', back: 'Łączy w sobie cechy romantyka (udział w powstaniu styczniowym, ślepa i niszcząca miłość do Izabeli Łęckiej, próba samobójcza) z cechami pozytywisty (zmysł handlowy, spółka do handlu ze Wschodem, wspieranie nauki Geista i pomoc biedocie).', hint: 'Romantyczne serce + pozytywistyczny rozum.', category: 'bohater' },
    { id: 'kf5-24', front: 'Co oznaczają pojęcia „Powiśle” i „Krakowskie Przedmieście” w topografii „Lalki”?', back: 'Krakowskie Przedmieście to reprezentacyjna ulica bogatego mieszczaństwa, sklepu Wokulskiego i arystokracji; Powiśle to dzielnica skrajnej nędzy, bezrobocia i chorób, która wstrząsa Wokulskim podczas spaceru.', hint: 'Kontrast nędzy Powiśla i przepychu centrum.', category: 'motyw' },
    { id: 'kf5-25', front: 'Kim był Ignacy Rzecki w „Lalce” i jakie trzy idee wyznawał w swoim „Pamiętniku starego subiekta”?', back: 'Oddanym subiektem i przyjacielem Wokulskiego, „starym romantykiem” wiernym: 1) kultowi Napoleona (nadzieja na odzyskanie niepodległości); 2) rzetelnej pracy kupieckiej; 3) wiernej przyjaźni (do śmierci troszczył się o Stacha).', hint: 'Bonapartyzm, etos pracy i przyjaźń.', category: 'bohater' },
    { id: 'kf5-26', front: 'Dlaczego nie wolno pisać w wypracowaniu, że „Wokulski popełnił samobójstwo w Zasławiu”?', back: 'To błąd kardynalny! Wokulski próbował rzucić się pod pociąg w Skierniewicach (uratował go dróżnik Wysocki), a jego ostateczny los po wyjeździe w finale powieści pozostaje otwarty (domysły: wyjazd do Geista lub śmierć w ruinach zamku w Zasławiu).', hint: 'Skierniewice (uratowany), finał otwarty.', category: 'lektura' },
    { id: 'kf5-27', front: 'Kim byli Julian Ochocki i profesor Geist w „Lalce”?', back: 'Ochocki to młody arystokrata-wynalazca marzący o skonstruowaniu maszyny latającej; Geist to paryski uczony pracujący nad metalem lżejszym od powietrza — obaj symbolizują bezinteresowną wiarę w naukę (scjentyzm).', hint: 'Naukowcy-idealiści i maszyna latająca.', category: 'bohater' },
    { id: 'kf5-28', front: 'Na czym polegała teoria Raskolnikowa o „ludziach zwykłych i niezwykłych” w „Zbrodni i karze”?', back: 'Raskolnikow podzielił ludzkość na posłuszne „wszy” (ludzi zwykłych) oraz „Napoleonów” (jednostki wybitne), którym rzekomo wolno łamać prawo moralne i przelewać krew w imię wyższego celu — teoria ta poniosła klęskę w starciu z sumieniem.', hint: 'Filozofia nadczłowieka i klęska zbrodni.', category: 'pojecie' },
    { id: 'kf5-29', front: 'Jaką rolę odegrała Sonia Marmieładowa w duchowym odrodzeniu Rodiona Raskolnikowa?', back: 'Będąc sama skrzywdzoną przez biedę (została prostytutką, by utrzymać rodzinę), nie potępiła Raskolnikowa, skłoniła go do wyznania winy i ucałowania ziemi na Placu Siennym oraz poszła za nim na katorgę na Syberię, prowadząc go do Ewangelii i skruchy.', hint: 'Ewangeliczne miłosierdzie i wspólna katorga.', category: 'bohater' },
    { id: 'kf5-30', front: 'W jaki sposób Henryk Sienkiewicz ukazał przemianę Andrzeja Kmicica w „Potopie”?', back: 'Z warchoła, zabijaki i zdrajcy służącego Januszowi Radziwiłłowi stał się pokornym obrońcą ojczyzny pod nazwiskiem Babinicz (obrona Jasnej Góry, wysadzenie kolubryny, ocalenie króla Jana Kazimierza), odzyskując cześć i miłość Oleńki.', hint: 'Od warchoła i zdrajcy do bohatera narodowego.', category: 'bohater' },
    { id: 'kf5-31', front: 'Co oznacza kontrast między dworkiem szlacheckim a mogiłą powstańczą w noweli „Gloria victis” Elizy Orzeszkowej?', back: 'Zwycięzcy zaborcy zatarli ślady mogił, lecz przyroda (wiatr, drzewa, kwiaty) przechowuje pamięć o moralnym zwycięstwie poległych powstańców styczniowych (m.in. Romualda Traugutta i Marysia Tarłowskiego).', hint: 'Pamięć natury o klęsce militarnej, lecz zwycięstwie moralnym.', category: 'lektura' },
    { id: 'kf5-32', front: 'Jaką rolę pełni opis Petersburga w „Zbrodni i karze” Fiodora Dostojewskiego?', back: 'Miasto jest duszne, ciasne, brudne, pełne szynków i nędznych pokoików przypominających trumnę — przestrzeń współgra ze stanem psychicznym Raskolnikowa, potęgując poczucie osaczenia i rozpadu moralnego.', hint: 'Miasto jako lustro chorej psychiki bohatera.', category: 'motyw' }
  ],
  quiz: [
    {
      id: "kq5-1",
      q: "Wskaż zdanie najlepiej opisujące postawę Stanisława Wokulskiego w „Lalce”:",
      options: [
        "Był postacią rozdartą wewnętrznie między romantycznym idealizmem serca a pozytywistycznym kultem pracy.",
        "Był ortodoksyjnym pozytywistą gardzącym jakąkolwiek tradycją romantyczną.",
        "Działał wyłącznie z chciwości, podporządkowując życie gromadzeniu majątku dla własnej satysfakcji.",
        "Odrzucił naukę i handel, by poświęcić się wyłącznie działalności w konspiracji niepodległościowej."
      ],
      correct: 0,
      explanation: "Wokulski to człowiek epoki przejściowej: walczył w powstaniu 1863 i idealizował miłość jak romantyk, lecz majątek budował na handlu, nauce i filantropii jak pozytywista.",
      whyWrong: {
        1: "Błąd: Wokulski walczył w powstaniu styczniowym i cierpiał z powodu romantycznej miłości.",
        2: "Błąd: Majątek był dla niego tylko środkiem do zdobycia Izabeli i wspierania nauki, nie celem samym w sobie.",
        3: "Błąd: Wokulski odrzucił dalszą walkę zbrojną po powrocie z Irkucka i zajął się handlem."
      },
      examTip: "W wypracowaniu zawsze określaj Wokulskiego jako człowieka przełomu epok — to chroni przed zarzutem spłycenia postaci."
    },
    {
      id: "kq5-2",
      q: "W jaki sposób Wokulski dowiaduje się o fałszu i nielojalności Izabeli Łęckiej?",
      options: [
        "Znajduje list miłosny napisany przez Izabelę do Kazimierza Starskiego.",
        "Zastaje Izabelę i Starskiego na schadzce w ruinach zamku w Zasławku.",
        "Dowiaduje się o tym bezpośrednio od baronowej Krzeszowskiej podczas licytacji kamienicy.",
        "Podsłuchuje w pociągu do Krakowa rozmowę Izabeli ze Starskim prowadzoną po angielsku o zaginionym medalionie."
      ],
      correct: 3,
      explanation: "Scena w pociągu jest przełomem dramatycznym: Izabela flirtuje po angielsku ze Starskim sądząc, że Wokulski nie zna tego języka. Wokulski rozumie wszystko, wysiada w Skierniewicach i próbuje popełnić samobójstwo.",
      whyWrong: {
        0: "Błąd: Nie chodziło o list, lecz o rozmowę w przedziale pociągu.",
        1: "Błąd: W Zasławiu Wokulski spędzał z Izabelą szczęśliwe chwile; dramat rozegrał się w pociągu.",
        2: "Błąd: Baronowa Krzeszowska toczyła spory sąsiedzkie, ale to nie ona zdemaskowała Izabelę."
      },
      examTip: "Dokładna znajomość sceny w pociągu i próby samobójczej w Skierniewicach to częsty wymóg pytań w części testowej CKE."
    },
    {
      id: "kq5-3",
      q: "Który z bohaterów „Lalki” jest narratorem pamiętnika tworzącego drugi nurt narracyjny powieści?",
      options: [
        "Tomasz Łęcki",
        "Doktor Szuman",
        "Ignacy Rzecki",
        "Julian Ochocki"
      ],
      correct: 2,
      explanation: "Ignacy Rzecki pisze „Pamiętnik starego subiekta”, wprowadzając perspektywę uczestnika Wiosny Ludów i kronikarza przeszłości.",
      whyWrong: {
        0: "Błąd: Tomasz Łęcki to zbankrutowany arystokrata, nie pisał pamiętnika.",
        1: "Błąd: Szuman komentuje wydarzenia, lecz nie jest narratorem pamiętnika.",
        3: "Błąd: Ochocki jest zafascynowany maszynami latającymi, nie pamiętnikarstwem."
      },
      examTip: "Dwugłosowa narracja (trzecioosobowy narrator wszechwiedzący + pierwszoosobowy Rzecki) to sztandarowa cecha kompozycji „Lalki”."
    },
    {
      id: "kq5-4",
      q: "Co w ujęciu Raskolnikowa („Zbrodnia i kara”) uprawniało „ludzi niezwykłych” do łamania prawa?",
      options: [
        "Wyznawanie religii prawosławnej i wierność carowi.",
        "Pochodzenie arystokratyczne i posiadany majątek ziemski.",
        "Geniusz i realizacja wielkich celów służących postępowi ludzkości.",
        "Ukończenie uniwersytetu z wyróżnieniem na wydziale prawa."
      ],
      correct: 2,
      explanation: "W artykule „O zbrodni” Raskolnikow twierdził, że jednostki wybitne (jak Napoleon) mają prawo przekraczać prawo moralne, by usuwać przeszkody stojące na drodze ich misji.",
      whyWrong: {
        0: "Błąd: Raskolnikow zerwał z religią i podważał autorytet państwa.",
        1: "Błąd: Pogardzał arystokracją jako tępą masą konwenansu.",
        3: "Błąd: Formalne wykształcenie nie miało znaczenia w jego metafizycznej teorii."
      },
      examTip: "Teoria Raskolnikowa jest prekursorem koncepcji Nadczłowieka Nietzschego — warto zestawić te konteksty w wypracowaniu."
    },
    {
      id: "kq5-5",
      q: "Kto złożył donos na Raskolnikowa i zmusił go do przyznania się do winy?",
      options: [
        "Raskolnikow przyznał się sam na komisariacie pod wpływem sumienia i rozmów z Porfirym oraz Sonią.",
        "Sonia Marmieładowa po ucieczce z Petersburga.",
        "Jego przyjaciel Razumichin po znalezieniu skradzionych fantów.",
        "Malarz Mikołka, który złożył zeznania obciążające studenta."
      ],
      correct: 0,
      explanation: "Raskolnikow sam wchodzi na komisariat i wyznaje prawdę. Nie było twardych dowodów rzeczowych — Porfiry Pietrowicz stosował presję psychologiczną, a Sonia skłoniła go do pokuty.",
      whyWrong: {
        1: "Błąd: Sonia kochała Rodiona i nakłaniała go do dobrowolnego wyznania winy, nie doniosła na niego.",
        2: "Błąd: Razumichin do końca wierzył w niewinność przyjaciela.",
        3: "Błąd: Malarz Mikołka wziął winę na siebie z powodów religijnych, co zmyliło śledztwo."
      },
      examTip: "Pamiętaj: Mikołka niesłusznie przyznał się do morderstwa, co było jednym z genialnych zwrotów akcji w śledztwie Porfirego."
    },
    {
      id: "kq5-6",
      q: "Która postać ze „Zbrodni i kary” jest uznawana za cyniczne, nihilistyczne „zwierciadło” i sobowtóra Raskolnikowa?",
      options: [
        "Piotr Łużyn",
        "Siemion Marmieładow",
        "Dymitr Razumichin",
        "Arkadiusz Swidrygajłow"
      ],
      correct: 3,
      explanation: "Swidrygajłow to człowiek bez zasad moralnych, który naprawdę przekroczył wszelkie granice dobra i zła. Jego samobójstwo pokazuje Rodionowi ostateczną pustkę nihilizmu.",
      whyWrong: {
        0: "Błąd: Łużyn to drobnomieszczański egoista i karierowicz, nie demoniczny sobowtór.",
        1: "Błąd: Marmieładow to zdegradowany alkoholik budzący współczucie.",
        2: "Błąd: Razumichin to uosobienie prawości, lojalności i zdrowego rozsądku."
      },
      examTip: "Motyw sobowtóra (alter ego) w literaturze to doskonały punkt wyjścia do analizy psychologicznej Swidrygajłowa i Raskolnikowa."
    },
    {
      id: "kq5-7",
      q: "Punktem zwrotnym w rehabilitacji Andrzeja Kmicica w „Potopie” Henryka Sienkiewicza była:",
      options: [
        "Obrona klasztoru na Jasnej Górze i wysadzenie szwedzkiej kolubryny.",
        "Zdrada w Kiejdanach i uwięzienie pułkowników.",
        "Pojedynek z Michałem Wołodyjowskim w Lubiczu.",
        "Zemsta na Butrymach i spalenie Wołmontowicz."
      ],
      correct: 0,
      explanation: "Obrona Jasnej Góry (1655), gdzie Kmicic walczył jako Babinicz i wysadził wielkie działo oblężnicze (kolubrynę), była kulminacją jego odkupienia win i odrodzenia patriotycznego.",
      whyWrong: {
        1: "Błąd: Kiejdany to moment upadku moralnego Kmicica, gdy przysięgał zdrajcy Radziwiłłowi.",
        2: "Błąd: Pojedynek z Wołodyjowskim zakończył się kompromitującą raną głowy Kmicica na początku powieści.",
        3: "Błąd: Spalenie Wołmontowicz to warcholski postępek z okresu dzikiej młodości bohatera."
      },
      examTip: "Kmicic (od grzesznika do bohatera narodowego) to podręcznikowy przykład motywu metamorfozy obok Jacka Soplicy."
    },
    {
      id: "kq5-8",
      q: "W noweli „Gloria victis” Elizy Orzeszkowej narratorem bezpośrednim opowiadającym o losach powstańców jest:",
      options: [
        "Romuald Traugutt we wspomnieniach więziennych.",
        "Oficer rosyjski ścigający powstańczy oddział.",
        "Siostra Marysia Tarłowskiego, Aniela.",
        "Uosobiona przyroda poleskiego lasu (drzewa, wiatr, kwiaty)."
      ],
      correct: 3,
      explanation: "Orzeszkowa zastosowała personifikację przyrody: stary Dąb, Świerk i Wiatr wspominają bitwę i męczeństwo oddziału Traugutta, składając hołd mogile powstańczej.",
      whyWrong: {
        0: "Błąd: Traugutt jest bohaterem opowieści, nie narratorem utworu.",
        1: "Błąd: Wróg nie jest narratorem noweli.",
        2: "Błąd: Aniela odwiedza mogiłę, ale to przyroda rekonstruuje przebieg bitwy."
      },
      examTip: "Personifikacja lasu w „Gloria victis” służy ominięciu carskiej cenzury oraz uwypukleniu ponadczasowej pamięci natury."
    },
    {
      id: "kq5-9",
      q: "Co jest centralnym rekwizytem i osią konstrukcyjną noweli „Kamizelka” Bolesława Prusa?",
      options: [
        "Złoty zegarek zastawiony u lichwiarza.",
        "Zniszczona kamizelka ze skracanym paskiem i przesuwaną sprzączką.",
        "List pożegnalny ukryty w podszewce płaszcza.",
        "Obraz przedstawiający panoramę Warszawy."
      ],
      correct: 1,
      explanation: "Nowela realizuje „teorię sokoła” (kompozycja skupiona wokół jednego rekwizytu). Kamizelka jest niemym świadkiem heroicznej miłości i wzajemnego kłamstwa małżonków.",
      whyWrong: {
        0: "Błąd: Zegarek pojawia się w „Zbrodni i karze”, nie w „Kamizelce”.",
        2: "Błąd: W noweli nie ma listu pożegnalnego — mąż umiera bez patosu.",
        3: "Błąd: Obraz to rekwizyt obcy fabule Prusa."
      },
      examTip: "Pojęcie „teorii sokoła” zaczerpnięte z „Dekameronu” Boccaccia idealnie pasuje do analizy budowy „Kamizelki”."
    },
    {
      id: "kq5-10",
      q: "Paryż w „Lalce” Bolesława Prusa w zestawieniu z Warszawą jest ukazany jako:",
      options: [
        "Miasto dekadenckiego zepsucia, pijaństwa i chaosu architektonicznego.",
        "Prowincjonalne miasteczko pozbawione energii przemysłowej.",
        "Wzorcowy, uporządkowany organizm miejski będący triumfem ludzkiej pracy, myśli technicznej i nauki.",
        "Przestrzeń martwa, opanowana przez arystokratyczne salony bez perspektyw rozwoju."
      ],
      correct: 2,
      explanation: "Wokulski zachwyca się Paryżem jako wielkim, logicznym mechanizmem: podziwia symetryczny układ bulwarów, nowoczesną technikę, pracę robotników i spotyka Geista. Warszawa przy nim wypada chaotycznie i sennie.",
      whyWrong: {
        0: "Błąd: To Petersburg u Dostojewskiego jest przestrzenią zaduchu i upadku moralnego.",
        1: "Błąd: Paryż w XIX wieku był tętniącą życiem stolicą świata.",
        3: "Błąd: Taki obraz dotyczy salonów warszawskich, a nie francuskiej metropolii."
      },
      examTip: "Kontrast Warszawa (bierność, zanieczyszczone Powiśle) vs Paryż (praca organiczna, postęp) to pewniak do tematów o motywie miasta."
    },
    {
      id: "kq5-11",
      q: "Jakie przesłanie niesie finałowa scena czytania Ewangelii przez Raskolnikowa i Sonię?",
      options: [
        "Każdy zbrodniarz powinien zostać bezwzględnie ukarany śmiercią przez państwo.",
        "Nawet największy grzesznik może dostąpić duchowego zmartwychwstania przez miłość, cierpienie i wiarę.",
        "Religia jest opium dla mas i nie ma znaczenia w procesie resocjalizacji.",
        "Intelekt jest jedyną siłą zdolną uwolnić człowieka od wyrzutów sumienia."
      ],
      correct: 1,
      explanation: "Przypowieść o Łazarzu wskrzeszonym po czterech dniach przez Chrystusa symbolizuje odrodzenie moralne Rodiona, który duchowo „umarł” w chwili morderstwa.",
      whyWrong: {
        0: "Błąd: Dostojewski był zdeklarowanym przeciwnikiem kary śmierci.",
        2: "Błąd: Marksistowski pogląd o religii jest całkowicie sprzeczny z chrześcijańską wymową powieści.",
        3: "Błąd: To właśnie zimny intelekt doprowadził Raskolnikowa do morderstwa."
      },
      examTip: "W motywie winy i kary wskazuj na chrześcijański personalizm Dostojewskiego — zbawienie przez pokutę i miłość."
    },
    {
      id: "kq5-12",
      q: "Hasło „pracy u podstaw” w praktyce działań Stanisława Wokulskiego w „Lalce” najlepiej ilustruje:",
      options: [
        "Wykupienie długu i kamienicy Tomasza Łęckiego.",
        "Wsparcie finansowe i pomoc w znalezieniu uczciwej pracy dla Marianny, braci Wysockich i Węgiełka.",
        "Wyprawa do Paryża w celu zakupu syntetycznego metalu od profesora Geista.",
        "Udział w wyścigach konnych na Służewcu i zakup klaczy wyścigowej od Krzeszowskiego."
      ],
      correct: 1,
      explanation: "Pomoc furmanowi Wysockiemu (konie), jego bratu dróżnikowi, stolarzowi Węgiełkowi oraz wyciągnięcie Marianny z prostytucji i nauka krawiectwa to modelowa praca u podstaw.",
      whyWrong: {
        0: "Błąd: To była pomoc dla zubożałej arystokracji motywowana miłością do Izabeli.",
        2: "Błąd: Współpraca z Geistem to scjentyzm i rozwój nauki.",
        3: "Błąd: Wyścigi na Służewcu były elementem gry salonowej o względy Łęckiej."
      },
      examTip: "Pamiętaj o rozróżnieniu: praca u podstaw = pomoc najniższym warstwom; praca organiczna = rozwój gospodarki całego narodu."
    },
    {
      id: "kq5-13",
      q: "Co w powieści „Lalka” najpełniej ilustruje moralny upadek i obłudę warszawskiej arystokracji?",
      options: [
        "Próżniacze życie na salonach, małżeństwa dla pieniędzy i pogarda dla ludzi pracy (np. postawa Tomasza Łęckiego i Starskiego).",
        "Masowe wyjazdy arystokratów do pracy w fabrykach włókienniczych w Łodzi.",
        "Bezwarunkowe oddanie całego majątku na rzecz przytułków na Powiślu.",
        "Wspieranie polskich naukowców takich jak Geist kosztem własnych pałaców."
      ],
      correct: 0,
      explanation: "Prus ukazuje arystokrację jako klasę pasożytniczą, żyjącą ponad stan, gardzącą kupcami („galanterią”), a jednocześnie ratującą się finansowo dzięki pieniądzom Wokulskiego.",
      whyWrong: {
        1: "Arystokracja brzydziła się pracą zarobkową i przemysłem.",
        2: "Kwesty wielkopostne służyły arystokracji głównie do pokazania się towarzysko, nie do realnej pomocy.",
        3: "Nauką Geista zainteresował się jedynie Wokulski (kupiec), a nie salonowa elita."
      },
      examTip: "W „Lalce” zestawiaj trzy pokolenia idealistów (Rzecki — polityka, Wokulski — miłość i czyn, Ochocki — nauka) z egoizmem arystokracji."
    },
    {
      id: "kq5-14",
      q: "W jakich okolicznościach Wokulski ostatecznie przejrzał na oczy i zerwał z Izabelą Łęcką?",
      options: [
        "W pociągu do Krakowa podsłuchał rozmowę Izabeli ze Starskim po angielsku, gdy szydziła z niego i nazwała go śmiesznym, żartując z podarowanego medalionu z metalem Geista.",
        "W Paryżu zobaczył Izabelę wychodzącą za mąż za barona Krzeszowskiego.",
        "Ignacy Rzecki zabronił mu wstępu do sklepu, jeśli nie zerwie zaręczyn.",
        "Izabela otwarcie odmówiła wyjazdu do Zasławia na polowanie."
      ],
      correct: 0,
      explanation: "Izabela nie wiedziała, że Wokulski zna angielski; w wagonie flirtowała ze Starskim i żartowała z podarowanego jej przez Stacha medalionu z metalu Geista.",
      whyWrong: {
        1: "Izabela nie wyszła za barona Krzeszowskiego.",
        2: "Rzecki mimo obaw nigdy nie stawiał Wokulskiemu takiego ultimatum.",
        3: "Izabela chętnie pojechała do Zasławia."
      },
      examTip: "Scena w pociągu ze Starskim to punkt zwrotny — moment bolesnego przebudzenia Wokulskiego z romantycznego zaślepienia."
    },
    {
      id: "kq5-15",
      q: "Co symbolizują „szklane ściany” lub ciasny pokój Raskolnikowa przypominający „szafę albo kufer” w „Zbrodni i karze”?",
      options: [
        "Psychiczne osaczenie, alienację i przytłoczenie bohatera przez nędzę oraz obsesyjną ideę zbrodni.",
        "Nowoczesną architekturę pałacową Petersburga za panowania Piotra Wielkiego.",
        "Pragnienie Raskolnikowa, by zostać architektem miejskim.",
        "Dobrobyt rosyjskich studentów prawa w XIX wieku."
      ],
      correct: 0,
      explanation: "Matka Raskolnikowa porównuje jego nędzny pokoik do trumny; ciasna, duszna przestrzeń odzwierciedla zamknięcie bohatera w chorej teorii i samotności.",
      whyWrong: {
        1: "To nędzna klitka pod dachem kamienicy czynszowej, a nie pałac.",
        2: "Raskolnikow był byłym studentem prawa, nie architektury.",
        3: "Bohater żył w skrajnym ubóstwie i długach."
      },
      examTip: "W analizie „Zbrodni i kary” zwracaj uwagę na psychologizację przestrzeni (miasto-pułapka, pokój-trumna)."
    },
    {
      id: "kq5-16",
      q: "W jaki sposób sędzia śledczy Porfiry Pietrowicz doprowadził do załamania się Raskolnikowa?",
      options: [
        "Prowadził z nim subtelne rozmowy psychologiczne, powołując się na jego własny artykuł o „ludziach niezwykłych” i budząc w nim niepokój sumienia.",
        "Zastosował brutalne tortury fizyczne w piwnicach petersburskiej policji.",
        "Przekupił Sonię Marmieładową, aby zeznawała przeciwko Raskolnikowowi.",
        "Aresztował matkę Raskolnikowa i zagroził jej zesłaniem na Sybir."
      ],
      correct: 0,
      explanation: "Porfiry nie miał na początku twardych dowodów materialnych, więc użył intelektualnej gry — dawał Raskolnikowowi do zrozumienia, że zna jego teorię i motyw, czekając na dobrowolne przyznanie się.",
      whyWrong: {
        1: "Porfiry nie stosował przemocy fizycznej wobec Raskolnikowa.",
        2: "Sonia dobrowolnie wspierała Raskolnikowa ku skrusze, nie działała za łapówkę.",
        3: "Matka bohatera nie została aresztowana."
      },
      examTip: "Pojedynek umysłów między Raskolnikowem a Porfirym to klasyczny przykład powieści polifonicznej i psychologicznej."
    },
    {
      id: "kq5-17",
      q: "Jaką rolę w „Zbrodni i karze” odgrywa scena z katowanym koniem we śnie Raskolnikowa jeszcze przed morderstwem?",
      options: [
        "Ujawnia ukrytą wrażliwość moralną i sumienie bohatera, które w rzeczywistości sprzeciwia się okrucieństwu jego własnej teorii.",
        "Zapowiada karierę Raskolnikowa jako właściciela stajni wyścigowych.",
        "Jest snem proroczym o wybuchu pożaru w sklepie Wokulskiego.",
        "Dowodzi, że Raskolnikow od dzieciństwa nie odczuwał żadnej empatii."
      ],
      correct: 0,
      explanation: "Mały Rodia we śnie płacze i obejmuje zakatowaną klacz — sen pokazuje, że natura ludzka i sumienie Raskolnikowa buntują się przeciw przemocy, którą chce usprawiedliwić rozumem.",
      whyWrong: {
        1: "To symboliczna projekcja psychiki, nie plan zawodowy.",
        2: "Sen dotyczy wyłącznie „Zbrodni i kary”, nie „Lalki”.",
        3: "Przeciwnie — sen dowodzi głębokiej empatii i wrażliwości bohatera."
      },
      examTip: "Sny w „Zbrodni i karze” to głos podświadomości i sumienia bohatera."
    },
    {
      q: "Dlaczego w finale noweli „Kamizelka” Bolesława Prusa narrator kupuje zniszczoną kamizelkę za pół rubla?",
      id: "kq5-18",
      options: [
        "Ponieważ zna poruszającą historię bezgranicznej miłości małżonków i chce ocalić tę pamiątkę od zapomnienia.",
        "Ponieważ zamierza ją naprawić i sprzedać z zyskiem na targu staroci.",
        "Ponieważ szuka w kieszeniach kamizelki ukrytych dokumentów powstańczych.",
        "Ponieważ potrzebuje ciepłego ubrania na zimę w Warszawie."
      ],
      correct: 0,
      explanation: "Kamizelka staje się dla narratora relikwią codziennego, cichego heroizmu i poświęcenia dwojga zwykłych ludzi.",
      whyWrong: {
        1: "Narrator jest zamożnym sąsiadem-obserwatorem kierowanym empatią, nie chęcią zysku.",
        2: "Nowela nie ma wątku tajnych dokumentów.",
        3: "Kamizelka jest zniszczona i zbyt mała — ma wartość wyłącznie symboliczną."
      },
      examTip: "„Kamizelka” to mistrzowski przykład realizmu małej formy: zwykły przedmiot staje się nośnikiem wielkiego dramatu uczuć."
    },
    {
      id: "kq5-19",
      q: "W jaki sposób Henryk Sienkiewicz uzasadnił przemianę Andrzeja Kmicica w powieści „Potop”?",
      options: [
        "Szok po odkryciu zdrady Janusza Radziwiłła oraz pragnienie odzyskania czci u Oleńki Billewiczówny skłoniły go do pokuty i ofiarnej służby ojczyźnie.",
        "Kmicic został zmuszony przez szwedzkiego króla Karola Gustawa do przejścia na stronę polską.",
        "Babinicz był w rzeczywistości bratem bliźniakiem Kmicica, który zajął jego miejsce.",
        "Kmicic porzucił walkę zbrojną i zamieszkał jako pustelnik na Jasnej Górze."
      ],
      correct: 0,
      explanation: "Kmicic zrozumiał, że Radziwiłł oddał Polskę Szwedom dla własnej korony; przyjął imię Babinicz, by czynami zmazać hańbę zdrajcy i zasłużyć na przebaczenie Oleńki oraz narodu.",
      whyWrong: {
        1: "Kmicic sam zerwał z Radziwiłłem i walczył ze Szwedami.",
        2: "Kmicic i Babinicz to ta sama osoba!",
        3: "Kmicic bronił Jasnej Góry z bronią w ręku, a potem walczył u boku króla i Czarnieckiego."
      },
      examTip: "Pamiętaj o motywie metamorfozy (winy i odkupienia): Kmicic obok Jacka Soplicy to najważniejszy polski bohater przechodzący przemianę moralną."
    },
    {
      id: "kq5-20",
      q: "Które z poniższych stwierdzeń trafnie charakteryzuje ideę utylitaryzmu w nowelach i powieściach pozytywistycznych?",
      options: [
        "Prawdziwa wartość człowieka i jego działań mierzy się ich praktyczną przydatnością dla dobra i rozwoju społeczeństwa.",
        "Jedynym celem sztuki jest czysta forma oderwana od problemów zwykłych ludzi.",
        "O wartości jednostki decyduje wyłącznie jej pochodzenie szlacheckie i herb.",
        "Człowiek powinien całkowicie wycofać się z życia publicznego do kontemplacji natury."
      ],
      correct: 0,
      explanation: "Pozytywiści głosili użyteczność społeczną (utylitaryzm) — stąd krytyka bezproduktywnej arystokracji w „Lalce” i pochwała rzemieślników, uczonych oraz nauczycieli.",
      whyWrong: {
        1: "Hasło „sztuka dla sztuki” należy do Młodej Polski (Przybyszewski), nie pozytywizmu.",
        2: "Pozytywizm zwalczał przesądy stanowe.",
        3: "Pozytywizm propagował aktywną pracę na rzecz wspólnoty."
      },
      examTip: "Utylitaryzm = użyteczność dla ogółu. Łącz go z pracą organiczną i pracą u podstaw."
    }
  ]
};
