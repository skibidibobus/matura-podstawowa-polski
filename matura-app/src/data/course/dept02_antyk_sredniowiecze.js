/* ==========================================================================
   DEPARTMENT 02: Źródła Kultury: Antyk, Biblia, Średniowiecze
   File: matura-app/src/data/course/dept02_antyk_sredniowiecze.js
   ========================================================================== */

export const DEPT_02 = {
  id: 'dept-02',
  displayNum: 2,
  code: 'DZIAŁ 2',
  title: 'Źródła Kultury: Antyk, Biblia, Średniowiecze',
  subtitle: 'Filary cywilizacji europejskiej, konflikt tragiczny w Antygonie, toposy biblijne i parenetyka średniowieczna',
  duration: '90 min',
  xp: 200,
  notes: [
    {
      id: 'kn2-1',
      title: 'Antyk grecko-rzymski — filozofie, pojęcia estetyczne i toposy',
      badge: 'Fundament kultury',
      intro: 'Starożytność grecko-rzymska stworzyła kanon piękna, pojęcia etyczne i formy literackie leżące u podstaw kultury europejskiej. Pytania z antyku na teście historycznoliterackim dotyczą pojęć teatralnych, nurtów filozoficznych oraz toposów z mitologii i „Iliady”.',
      blocks: [
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Kluczowe pojęcia estetyczne i teatralne Antyku',
          items: [
            'Mimesis: zasada naśladowania rzeczywistości przez sztukę w sposób prawdopodobny życiowo.',
            'Katharsis (oczyszczenie): cel tragedii antycznej; widz poprzez przeżycie litości (eleos) i trwogi (phobos) uwalnia się od skrajnych namiętności i osiąga spokój wewnętrzny.',
            'Hybris: pycha, zuchwalstwo bohatera przekonanego o własnej nieomylności, które ściąga na niego gniew bogów i nieuchronną katastrofę (np. Kreon w Antygonie).',
            'Fatum (Mojra): nieodwołalne przeznaczenie, wola bogów, której człowiek nie może zmienić ani uniknąć.',
            'Hamartia (wina tragiczna): błędne rozpoznanie sytuacji przez bohatera, wynikające z niewiedzy, prowadzące nieuchronnie do zbrodni i klęski (np. Edyp zabijający ojca i żeniący się z matką).',
            'Kalokagatia: ideał harmonijnego połączenia piękna fizycznego z dobrem moralnym.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Stoicyzm vs Epikureizm',
              desc: 'Dwa dominujące nurty filozoficzne starożytności obecne w literaturze do dziś.',
              details: {
                summary: 'Koncepcje osiągania szczęścia i radzenia sobie z losem.',
                bullets: [
                  'Stoicyzm (Zenon z Kition, Seneka, Marek Aureliusz): Najwyższym dobrem jest cnota (arete). Należy zachować wewnętrzną równowagę emocjonalną (apatheia) zarówno w szczęściu, jak i nieszczęściu. Rozum ma panować nad namiętnościami. Człowiek nie ma wpływu na wyroki losu, ale ma wpływ na swoją reakcję.',
                  'Epikureizm (Epikur, Horacy): Szczęście polega na doznawaniu przyjemności i braku cierpienia (ataraksja). Przyjemność duchowa (przyjaźń, filozofia) stoi wyżej niż cielesna. Horacjańskie hasło: „Carpe diem” (chwytaj dzień) — ciesz się chwilą z umiarem, nie troszcząc się zbytnio o niepewne jutro.'
                ],
                essayUse: 'Niezbędne przy analizie „Pieśni” i „Trenów” Jana Kochanowskiego oraz etyki Pana Cogito Zbigniewa Herberta.'
              }
            },
            {
              term: 'Homer: „Iliada” — kanon eposu antycznego',
              desc: 'Epos bohaterski o 50 dniach z dziesiątego roku wojny trojańskiej.',
              details: {
                summary: 'Dzieło fundacyjne dla europejskiej epiki.',
                bullets: [
                  'Temat: Gniew Achillesa (z powodu odebrania branki Bryzejdy przez Agamemnona) i jego tragiczne skutki dla wojsk greckich.',
                  'Pojedynek Achillesa z Hektorem: zemsta za śmierć przyjaciela Patroklosa, bezczeszczenie zwłok Hektora przez wleczenie za rydwanem.',
                  'Wizyta króla Priama u Achillesa: przełamanie nienawiści — stary król Troi całuje dłonie zabójcy syna, Achilles wzrusza się losem starca i oddaje ciało Hektora do godnego pochówku (humanizm antyczny).',
                  'Cechy eposu: inwokacja do Muzy, heksametr, stałe epitety („szybkonogi Achilles”, „boski Hektor”), rozbudowane porównania homeryckie, wszechwiedzący i obiektywny narrator, równoległość świata bogów i ludzi.'
                ],
                essayUse: 'W motywach: wojna, heroizm, cierpienie ojca po stracie syna (Priam), honor rycerski.'
              }
            },
            {
              term: 'Mitologia Jana Parandowskiego — 4 toposy maturalne',
              desc: 'Mity greckie jako uniwersalny kod archetypów ludzkich postaw.',
              details: {
                summary: 'Postacie mitologiczne najczęściej przywoływane w tematach rozprawek.',
                bullets: [
                  'Prometeusz: archetyp bezinteresownego buntu i poświęcenia dla ludzkości (stworzył człowieka z gliny i łez, ukradł ogień z rydwanu słońca, za co został przykuty do skały Kaukazu, gdzie orzeł wyjadał mu odrastającą wątrobę). Twórca prometeizmu.',
                  'Syzyf: archetyp zmagania się z losem i absurdu ludzkiego trudu (król Koryntu skazany na wieczne wtaczanie na szczyt głazu, który tuż przed wierzchołkiem stacza się w dół).',
                  'Dedal i Ikar: archetyp dwóch dróg życiowych — dojrzały racjonalizm i rozwaga (Dedal) kontra młodzieńczy idealizm, emocje i marzycielstwo kończące się śmiercią (Ikar).',
                  'Orfeusz i Eurydyka: archetyp potęgi sztuki i tragicznej miłości silniejszej niż śmierć (pieśń Orfeusza wzrusza władców podziemi, ale chwila zwątpienia i spojrzenie wstecz gubi ukochaną).'
                ],
                essayUse: 'Jako znakomity, uniwersalny kontekst mitologiczny w niemal każdym wypracowaniu.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn2-2',
      title: 'Sofokles: „Antygona” — anatomia konfliktu tragicznego i racje bohaterów',
      badge: 'Lektura w całości (*)',
      intro: '„Antygona” Sofoklesa to lektura obowiązkowa czytana w całości. Stanowi absolutny fundament zrozumienia istoty tragizmu, dylematu moralnego oraz relacji między prawem jednostki a autorytetem władzy państwowej.',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: 'Ostrzeżenie przed błędem kardynalnym!',
          items: [
            'Nigdy nie pisz, że Kreon jest bezdusznym tyranem od początku — to władca działający w imię ładu państwa po krwawej wojnie domowej, który popełnia błąd pychy (hybris).',
            'Ismena NIE została stracona: chciała wziąć na siebie część winy, ale Antygona dumnie odmówiła jej udziału w męczeństwie. Ismena przeżywa tragedię.',
            'Antygona NIE popełnia samobójstwa rzucając się z murów: wiesza się na chuście w kamiennym grobowcu, w którym zamurowano ją żywcem na rozkaz Kreona.'
          ]
        },
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Konflikt tragiczny — zderzenie dwóch równorzędnych racji',
          items: [
            'Istota konfliktu: zderzenie dwóch przeciwstawnych porządków prawnych i moralnych, z których każdy posiada swoje racjonalne uzasadnienie, a wybór któregokolwiek nieuchronnie prowadzi do katastrofy.',
            'Racja Antygony: prawo boskie, prawa niepisane i odwieczne; miłość siostrzana („Współkochać przyszłam, nie współnienawidzić”); uświęcony obowiązek pochowania zwłok brata (Polinejkesa), bez którego jego dusza nie zazna spokoju w Hadesie.',
            'Racja Kreona: prawo stanowione (państwowe); obrona autorytetu władzy i stabilności państwa świeżo po najeździe; sprawiedliwość i ukaranie zdrajcy ojczyzny (Eteokles bronił Teb, Polinejkes najechał miasto z obcą armią); zasada, że prawo obowiązuje wszystkich bez względu na powiązania rodzinne.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Galeria postaci i ich postawy',
              desc: 'Analiza motywacji kluczowych bohaterów dramatu.',
              details: {
                summary: 'Każda postać reprezentuje odmienne podejście do powinności moralnej.',
                bullets: [
                  'Antygona: dumna, odważna, bezkompromisowa córka Edypa. Przedkłada nakaz sumienia i prawa bogów nad życie doczesne. Wie, że zginie, ale nie cofa się.',
                  'Kreon: król Teb, przekonany, że ustępstwo wobec kobiety osłabi jego autorytet. Utożsamia państwo ze swoją osobą („Czyż państwo nie należy do władcy?”). Zaślepiony pychą, lekceważy ostrzeżenia ludu i wróżbity Tyrezjasza.',
                  'Hajmon: syn Kreona i narzeczony Antygony. Próbuje przekonać ojca do dialogu i elastyczności. Reprezentuje głos rozsądku i opinię ludu tebańskiego, który współczuje dziewczynie. Po odnalezieniu powieszonej Antygony przebija się mieczem.',
                  'Ismena: siostra Antygony, uosobienie ostrożności, bierności i konformizmu („Rozważmy i to, żeśmy są kobiety, / Że nie możemy z mężmi walczyć w boju”).',
                  'Tyrezjasz: ślepy wróżbita, obwieszczający gniew bogów (ptaki szarpią padlinę Polinejkesa i zanieczyszczają ołtarze). Dopiero jego proroctwo kruszy opór Kreona — lecz za późno.'
                ],
                essayUse: 'Idealne zestawienie w tematach: jednostka a władza, bunt w imię wartości, dylemat wyboru, tragizm.'
              }
            },
            {
              term: 'Budowa tragedii antycznej (Arystoteles)',
              desc: 'Sztywny schemat kompozycyjny dramatu greckiego.',
              details: {
                summary: 'Forma ściśle skorelowana z zasadą decorum i trzema jednościami.',
                bullets: [
                  'Zasada trzech jedności: czasu (akcja zamyka się w 24 godzinach — od wschodu do zachodu słońca), miejsca (plac przed pałacem królewskim w Tebach), akcji (jeden wątek — konflikt o pochówek Polinejkesa).',
                  'Zasada decorum: jednorodność stylu (podniosły, patetyczny, brak humoru), brak scen krwawych na scenie (o samobójstwach informuje Posłaniec).',
                  'Części kompozycyjne: Prologos (wstęp), Parodos (wejście chóru), Epeisodia (sceny dialogowe aktorów — max 3 na scenie), Stasima (pieśni komentującego Chóru starców tebańskich), Eksodos (zakończenie dramatu i pieśń wyjścia chóru).'
                ],
                essayUse: 'Częste pytanie na teście: „Wykaż dwie cechy tragedii antycznej widoczne w podanym fragmencie”.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn2-3',
      title: 'Biblia jako fundament kultury — sacrum, profanum, gatunki i toposy',
      badge: 'Kod kulturowy',
      intro: 'Pismo Święte jest obok mitologii greckiej najważniejszym źródłem europejskiego imaginarium. Dostarcza uniwersalnych gatunków (przypowieść, hymn, psalm), stylu biblijnego oraz toposów egzystencjalnych (Hiob, Kohelet, Apokalipsa).',
      blocks: [
        {
          type: 'callout',
          variant: 'blue',
          title: 'Wyróżniki stylu biblijnego',
          items: [
            'Parataksja: przewaga zdań współrzędnie złożonych, rozpoczynanych spójnikami („I rzekł Bóg... I stała się światłość... I widział Bóg...”).',
            'Inwersje i paralelizmy składniowe: zdania o podobnej konstrukcji powtarzające lub kontrastujące myśl.',
            'Bogata symbolika liczb: 3 (Bóg, pełnia), 7 (doskonałość, stworzenie świata), 12 (plemiona Izraela, apostołowie), 40 (pokuta, próba — potop, wędrówka przez pustynię).',
            'Podniosły, sakralny ton wypowiedzi operujący powagą i alegorią.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Księga Hioba — topos cierpienia niezawinionego (Teodycea)',
              desc: 'Dlaczego człowiek sprawiedliwy i bogobojny cierpi?',
              details: {
                summary: 'Dramat Hioba obala starotestamentowe przekonanie, że cierpienie jest zawsze karą za grzechy.',
                bullets: [
                  'Fabuła: Hiob z ziemi Us, człowiek prawy i zamożny, za zgodą Boga zostaje poddany próbie przez Szatana. Traci stada, sługi, wszystkie dzieci, a w końcu zostaje dotknięty trądem.',
                  'Postawa Hioba: mimo rozpaczy nie przeklina Boga („Bóg dał, Bóg wziął; niech imię Pańskie będzie błogosławione”). Odrzuca płytkie tezy fałszywych pocieszycieli (którzy wmawiają mu ukryty grzech) i domaga się rozmowy ze Stwórcą.',
                  'Sens teologiczny: ludzki rozum nie jest w stanie ogarnąć mądrości Stwórcy wszechświata; wiara wymaga bezwarunkowego zaufania w obliczu tajemnicy cierpienia. Nagroda: Bóg przywraca Hiobowi zdrowie i podwaja majątek.',
                  'Teodycea: zagadnienie filozoficzne godzące istnienie miłosiernego i wszechmocnego Boga z obecnością zła i cierpienia niewinnych na świecie.'
                ],
                essayUse: 'Kluczowy topos przy motywach: cierpienie, próba wiary, utrata bliskich („Treny” Kochanowskiego, „Dziady cz. III”, literatura obozowa).'
              }
            },
            {
              term: 'Księga Koheleta — topos vanitas (marność świata)',
              desc: 'Filozoficzna refleksja nad przemijaniem dóbr doczesnych.',
              details: {
                summary: 'Kohelet (Eklezjastes — mędrzec przemawiający na zgromadzeniu) bada sens ludzkiego życia.',
                bullets: [
                  'Kluczowe hasło: „Vanitas vanitatum et omnia vanitas” (Marność nad marnościami i wszystko marność).',
                  'Sens marności: bogactwo, władza, uroda, a nawet doczesna mądrość naukowa są ulotne i nie dają trwałego szczęścia, gdyż wszystkich — mędrca i głupca — zrównuje śmierć.',
                  'Wniosek egzystencjalny: człowiek powinien pogodzić się ze swoim losem, cieszyć się prostą pracą, chlebem i winem oraz żyć w bojaźni Bożej, pamiętając, że „Wszystko ma swój czas i jest wyznaczona godzina na wszystkie sprawy pod niebem”.'
                ],
                essayUse: 'Topos vanitas dominuje w literaturze baroku (Naborowski, Sęp Szarzyński) oraz w poezji młodopolskiej.'
              }
            },
            {
              term: 'Apokalipsa św. Jana — profetyzm i eschatologia',
              desc: 'Księga Objawienia zamykająca Nowy Testament.',
              details: {
                summary: 'Wizja końca świata, ostatecznej walki dobra ze złem i Sądu Ostatecznego.',
                bullets: [
                  'Symbole apokaliptyczne: Baranek (Chrystus odkupiciel), Księga zapieczętowana siedmioma pieczęciami, Czterej Jeźdźcy Apokalipsy (Zwycięzca na białym koniu, Wojna na ognistym, Głód na czarnym z wagą, Śmierć na trupiobladym koniu), Bestia o liczbie 666, Niewiasta obleczona w słońce.',
                  'Zakończenie: strącenie Szatana w czeluść, zstąpienie Nowego Jeruzalem z niebios — triumf zbawionych w świecie, gdzie „nie będzie już śmierci ani żałoby, ani krzyku, ani trudu”.'
                ],
                essayUse: 'W literaturze wojennej: pojęcie „Apokalipsy spełnionej” u Pokolenia Kolumbów (Baczyński, Borowski).'
              }
            },
            {
              term: 'Przypowieści ewangeliczne (Parabole)',
              desc: 'Gatunek dydaktyczny o dwupoziomowym znaczeniu.',
              details: {
                summary: 'Fabuła jest jedynie ilustracją głębszej prawdy uniwersalnej, etycznej lub religijnej.',
                bullets: [
                  'Przypowieść o synu marnotrawnym: młodszy syn trwoni majątek w obcej krainie, po czym upokorzony wraca do ojca; ojciec wybacza mu z miłością i wyprawia ucztę, tłumacząc starszemu synowi: „trzeba się weselić, bo ten brat twój był umarły, a znów ożył”. Sens: bezgraniczne miłosierdzie Boże wobec nawróconego grzesznika.',
                  'Przypowieść o miłosiernym Samarytaninie: pobitym przez zbójców człowiekiem pogardzają kapłan i lewita; ratuje go obcy etnicznie Samarytanin. Sens: bliźnim jest każdy człowiek potrzebujący pomocy, niezależnie od narodowości czy religii.'
                ],
                essayUse: 'Wzorzec dla powieści parabolicznej (np. „Dżuma” Alberta Camusa).'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn2-4',
      title: 'Średniowiecze — teocentryzm, uniwersalizm, danse macabre i parenetyka',
      badge: 'Epoka wiary i ascezy',
      intro: 'Średniowiecze (w Polsce trwające od chrztu w 966 r. do końca XV w.) ukształtowało tożsamość religijną i państwową. Literatura miała charakter w przeważającej mierze religijny, parenetyczny (tworzący wzorce osobowe) i anonimowy (twórcy tworzyli z pokory dla chwały Bożej, zgodnie z duchem teocentryzmu).',
      blocks: [
        {
          type: 'callout',
          variant: 'emerald',
          title: '3 Średniowieczne Wzorce Osobowe (Parenetyka)',
          items: [
            '1. Wzorzec ascety / świętego („Legenda o św. Aleksym” — usunięta z PP w 2024 r., cenny kontekst / przejściowo 2025–2028): dobrowolna rezygnacja z książęcego majątku, porzucenie młodej żony w noc poślubną, rozdanie bogactw biednym, 16 lat w Syrii i kolejne 16 lat upokorzeń pod schodami własnego pałacu w Rzymie. Po śmierci dzwony same biją, a ciało uzdrawia chorych.',
            '2. Wzorzec idealnego rycerza („Pieśń o Rolandzie” — fragmenty w PP): wierność Bogu, suzerenowi (Karolowi Wielkiemu) i ojczyźnie („słodkiej Francji”); bezwzględny honor, odwaga i pogarda dla śmierci w walce z Saracenami. Tragiczna duma: Roland odmawia zadęcia w róg Olifant, by nie splamić honoru wezwaniem pomocy. Śmierć na wzgórzu twarzą do wroga, powierzenie rękawicy archaniołowi Gabrielowi (towarzyszą mu Cherubin i św. Michał).',
            '3. Wzorzec idealnego władcy (Gall Anonim: „Kronika polska” — kontekst / usunięta z PP LO w 2024 r.): portret Bolesława Chrobrego i Krzywoustego — władca pobożny, sprawiedliwy dla poddanych, odważny wódz, obrońca granic państwa i Kościoła.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: '„Bogurodzica” — najstarszy polski hymn i zabytek językowy',
              desc: 'Pieśń religijna pełniąca rolę pierwszego hymnu narodowego (śpiewana m.in. pod Grunwaldem).',
              details: {
                summary: 'Kunsztowna kompozycja wiersza zdaniowo-rymowego z motywem Deesis.',
                bullets: [
                  'Motyw Deesis (z greckiego: modlitwa, prośba): trójpostaciowy układ ikonograficzny — Chrystus jako centralny Sędzia, a po bokach Maryja i Jan Chrzciciel jako orędownicy ludzkości zanoszący błagania.',
                  'Strofa 1: Apostrofa do Bogurodzicy Dziewicy, wsławionej przez Boga, z prośbą o zjednanie Jej Syna i zesłanie łask.',
                  'Strofa 2: Zwrot do Chrystusa za pośrednictwem Jana Chrzciciela o zbożny (dostatni, cnotliwy) pobyt na ziemi i po żywocie wieczny raj w niebiosach (hasło: „Kyrie eleison”).'
                ],
                essayUse: 'W wypracowaniu: rola tradycji religijnej, archaizmy (Bogurodzica, dziela, bożyc, spuści, zbożny).'
              }
            },
            {
              term: '„Lament świętokrzyski” („Posłuchajcie, bracia miła...” / Żale Matki Boskiej pod krzyżem)',
              desc: 'Arcydzieło liryki żałobnej i humanizacji religii w XV wieku.',
              details: {
                summary: 'Motyw Stabat Mater Dolorosa (Stała Matka Boleściwa).',
                bullets: [
                  'Humanizacja postaci Maryi: Maryja nie przemawia jako niedostępna Królowa Niebios, lecz jako bezradna, cierpiąca ziemska matka opłakująca męczeńską śmierć jedynego syna.',
                  'Cztery płaszczyzny (adresaci) wypowiedzi: 1. Zwrot do wszystkich ludzi z prośbą o współczucie („Posłuchajcie, bracia miła... pożałuj mię, stary, młody”). 2. Czuły monolog do umierającego Jezusa (pragnienie obtarcia ran, podparcia główki, podzielenia się krwią). 3. Gorzki wyrzut do archanioła Gabriela, który obiecywał Jej w Zwiastowaniu pełnię radości, a zgotował niezmierny ból. 4. Końcowy zwrot do innych matek, by modliły się za swoje dzieci.'
                ],
                essayUse: 'Idealny kontekst w motywach: cierpienie matki, obraz cierpienia Chrystusa, humanizm w średniowieczu.'
              }
            },
            {
              term: '„Rozmowa Mistrza Polikarpa ze Śmiercią” — topos Danse Macabre',
              desc: 'Satyryczno-dydaktyczny poemat o nieuchronności i egalitaryzmie śmierci.',
              details: {
                summary: 'Mistrz Polikarp, uczony mąż, prosi Boga o możliwość ujrzenia Śmierci na własne oczy.',
                bullets: [
                  'Portret makabryczny Śmierci: rozkładający się trup niewieści, blada, chuda, z zapadłymi oczami, zgrzytająca zębami, przewiązana białą chustą, z kosą w ręku.',
                  'Danse macabre (taniec śmierci) i egalitaryzm: Śmierć zabiera każdego bez wyjątku — papieża, cesarza, kardynała, rycerza, kupca, żebraka i niemowlę. Doczesne godności i bogactwa nie mają żadnego znaczenia.',
                  'Satyra stanowa: Śmierć bezlitośnie obnaża grzechy poszczególnych warstw — chciwych sędziów biorących łapówki, rozpustnych mnichów, karczmarzy chrzczących piwo wodą i lekarzy, którzy nie potrafią nikogo uratować przed jej kosą.'
                ],
                essayUse: 'Topos śmierci, vanitas, satyra obyczajowa średniowiecza.'
              }
            }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'kf2-1', front: 'Czym jest katharsis w tragedii antycznej?', back: 'Oczyszczenie emocjonalne widza, osiągane poprzez współprzeżywanie uczuć litości (eleos) i trwogi (phobos) wobec losu bohaterów.', hint: 'Litość i trwoga prowadzące do ulgi duchowej.', category: 'pojecie' },
    { id: 'kf2-2', front: 'Zdefiniuj pojęcie hybris na przykładzie „Antygony”.', back: 'Pycha i zuchwalstwo bohatera przekonanego o własnej wszechwiedzy. Kreon uważał, że jego edykt stoi ponad prawami boskimi, co doprowadziło do śmierci jego bliskich.', hint: 'Grzech pychy władcy.', category: 'pojecie' },
    { id: 'kf2-3', front: 'Na czym polega konflikt tragiczny w „Antygonie” Sofoklesa?', back: 'Na zderzeniu dwóch równorzędnych racji: prawa boskiego (reprezentowanego przez Antygonę) z prawem stanowionym/państwowym (reprezentowanym przez Kreona).', hint: 'Prawo boskie vs prawo państwowe.', category: 'lektura' },
    { id: 'kf2-4', front: 'Jak zginęła Antygona w tragedii Sofoklesa?', back: 'Powiesiła się na swojej chuście w kamiennym grobowcu, w którym zamurowano ją żywcem na rozkaz Kreona.', hint: 'Samobójstwo w grobowcu przed przybyciem pomocy.', category: 'bohater' },
    { id: 'kf2-5', front: 'Czym różni się stoicyzm od epikureizmu?', back: 'Stoicyzm nakazuje kierowanie się cnotą (arete) i osiągnięcie wolności od namiętności (apatheia) wobec wyroków losu. Epikureizm zaleca czerpanie rozumnych przyjemności i unikanie cierpienia (ataraksja, carpe diem).', hint: 'Stoik trzyma nerwy na wodzy; epikurejczyk chwyta dzień z umiarem.', category: 'epoka' },
    { id: 'kf2-6', front: 'Jakie znaczenie ma topos Hioba w kulturze europejskiej?', back: 'Topos człowieka cierpiącego niewinnie, który mimo skrajnych prób losu i utraty wszystkiego zachowuje wiarę w Boga i odrzuca bunt nihilizmu.', hint: 'Niezawinione cierpienie i próba wiary.', category: 'motyw' },
    { id: 'kf2-7', front: 'Co oznacza sentencja Koheleta: „Vanitas vanitatum et omnia vanitas”?', back: '„Marność nad marnościami i wszystko marność” — przypomnienie o ulotności dóbr ziemskich (bogactwa, władzy, urody), które nie dają trwałego sensu wobec śmierci.', hint: 'Księga Koheleta i topos przemijania.', category: 'cytat' },
    { id: 'kf2-8', front: 'Wymień 3 średniowieczne wzorce parenetyczne i utwory je reprezentujące.', back: '1. Rycerz chrześcijański („Pieśń o Rolandzie” — PP we fragm.), 2. Asceta („Legenda o św. Aleksym” — kontekst / poza PP od 2024 r.), 3. Idealny władca (Gall Anonim: „Kronika polska” — kontekst / poza PP od 2024 r.).', hint: 'Asceta, rycerz, król.', category: 'epoka' },
    { id: 'kf2-9', front: 'Co to jest motyw Deesis w „Bogurodzicy”?', back: 'Układ orędownictwa: Chrystus jako Sędzia, a po bokach Maryja i Jan Chrzciciel, którzy pośredniczą między ludźmi a Bogiem.', hint: 'Chrystus, Maryja i Jan Chrzciciel.', category: 'motyw' },
    { id: 'kf2-10', front: 'Na czym polega humanizacja Maryi w „Lamencie świętokrzyskim”?', back: 'Maryja nie jest przedstawiona jako odległa Królowa Niebios, lecz jako cierpiąca, ziemska matka opłakująca mękę swojego syna i prosząca ludzi o współczucie.', hint: 'Matka płacząca pod krzyżem jak zwykła kobieta.', category: 'lektura' },
    { id: 'kf2-11', front: 'Co oznacza topos Danse Macabre w „Rozmowie Mistrza Polikarpa ze Śmiercią”?', back: 'Taniec śmierci ukazujący powszechny egalitaryzm wobec zgonu — Śmierć zabiera każdego (papieża, cesarza, żebraka) bez względu na stan społeczny i majątek.', hint: 'Wobec śmierci wszyscy są równi.', category: 'motyw' },
    { id: 'kf2-12', front: 'Dlaczego Roland w „Pieśni o Rolandzie” zwlekał z zadęciem w róg Olifant?', back: 'Z powodu rycerskiej dumy i poczucia honoru — nie chciał, by zarzucono mu tchórzostwo i proszenie o pomoc w obliczu wroga.', hint: 'Honor rycerski ponad życie.', category: 'bohater' },
    { id: 'kf2-13', front: 'Jaką sceną kończy się „Iliada” Homera?', back: 'Pojednaniem Achillesa z królem Priamem — Achilles oddaje zwłoki zabitego Hektora jego ojcu, a Trojanie odprawiają uroczyste igrzyska pogrzebowe.', hint: 'Pogrzeb Hektora i gest miłosierdzia Achillesa.', category: 'lektura' },
    { id: 'kf2-14', front: 'Czym jest wina tragiczna (hamartia)?', back: 'Błędne rozpoznanie rzeczywistości przez bohatera tragedii antycznej, który działając w dobrej wierze, nieświadomie popełnia zbrodnię i sprowadza na siebie zgubę.', hint: 'Nieświadome zbłądzenie prowadzące do klęski.', category: 'pojecie' },
    { id: 'kf2-15', front: 'Wymień cechy eposu homeryckiego widoczne w „Iliadzie”.', back: 'Inwokacja, heksametr, stałe epitety („szybkonogi Achilles”), porównania homeryckie, wszechwiedzący i obiektywny narrator, sceny z udziałem bogów.', hint: 'Styl podniosły i rozbudowane porównania.', category: 'pojecie' },
    { id: 'kf2-16', front: 'Kim był Prometeusz i jaki topos zapoczątkował?', back: 'Tytanem, który ulepił człowieka z gliny i łez oraz ukradł bogom ogień, by pomóc ludziom. Zapoczątkował topos prometeizmu — bezinteresownego buntu i cierpienia za ludzkość.', hint: 'Dobroczyńca ludzi przykuty do Kaukazu.', category: 'motyw' },
    { id: 'kf2-17', front: 'Dlaczego Aleksy z „Legendy o św. Aleksym” porzucił swoją żonę?', back: 'Uważał małżeństwo i doczesne rozkosze za przeszkodę w dążeniu do doskonałości duchowej i zbawienia wiecznego; wybrał drogę ascezy.', hint: 'Ślub czystości i umartwienie ciała.', category: 'bohater' },
    { id: 'kf2-18', front: 'Dlaczego większość dzieł literackich średniowiecza pozostała anonimowa?', back: 'Z powodu teocentryzmu i średniowiecznej pokory — pisarze traktowali swój talent jako służbę Bogu i Kościołowi, nie szukając indywidualnej sławy ziemskiej (indywidualizm narodził się dopiero w renesansie).', hint: 'Teocentryzm i pokora wobec Stwórcy.', category: 'epoka' },
    { id: 'kf2-19', front: 'Czym różni się mimesis od fatum w estetyce antycznej?', back: 'Mimesis to zasada naśladowania rzeczywistości i ludzkich działań w sztuce (Arystoteles), natomiast fatum to nieuchronne, ślepe przeznaczenie ciążące nad losem człowieka w tragedii greckiej.', hint: 'Naśladowanie natury vs nieuchronny los.', category: 'pojecie' },
    { id: 'kf2-20', front: 'Jaką funkcję w tragedii antycznej pełnił chór oraz zasada trzech jedności?', back: 'Chór komentował wydarzenia i reprezentował głos opinii publicznej oraz sumienia; zasada trzech jedności (miejsca, czasu do jednej doby, jednego wątku akcji) skupiała uwagę widza na konflikcie tragicznym.', hint: 'Komentarz moralny + zwartość miejsca, czasu i akcji.', category: 'pojecie' },
    { id: 'kf2-21', front: 'Dlaczego w „Antygonie” nie wolno pisać, że „Kreon jest wyłącznie złym tyranem bez racji”?', back: 'Ponieważ to błąd podważający istotę konfliktu tragicznego — Kreon broni spójności państwa, porządku publicznego i zakazu gloryfikacji zdrajcy (Polinejkesa), zanim popadnie w pychę (hybris).', hint: 'Obie strony mają swoje racje prawne.', category: 'lektura' },
    { id: 'kf2-22', front: 'Jakie skutki osobiste dotknęły Kreona w finale „Antygony” za jego upór i pychę?', back: 'Stracił całą rodzinę: jego syn Hajmon popełnił samobójstwo nad ciałem Antygony, a zrozpaczona żona Eurydyka odebrała sobie życie, przeklinając męża.', hint: 'Samotność władcy po śmierci syna i żony.', category: 'bohater' },
    { id: 'kf2-23', front: 'Jakie toposy pochodzą z mitu o Syzyfie, Prometeuszu oraz Dedalu i Ikarze?', back: 'Syzyf: bezsensowna, wiecznie ponawiana praca (syzyfowa praca); Prometeusz: bunt i cierpienie dla dobra ludzkości; Dedal: rozsądny pragmatyzm i kunszt; Ikar: młodzieńczy idealizm i zgubna brawura.', hint: 'Cztery klasyczne toposy mitologiczne.', category: 'motyw' },
    { id: 'kf2-24', front: 'Czym charakteryzuje się styl biblijny (wyróżniki językowe)?', back: 'Podniosłością i patosem, licznymi paralelizmami składniowymi, powtórzeniami, zdaniami rozpoczynanymi spójnikami („A oto...”, „I stało się...”), aforyzmami oraz symboliką liczb i przypowieści.', hint: 'Patos, paralelizmy, inwersje i spójniki na początku zdań.', category: 'pojecie' },
    { id: 'kf2-25', front: 'Na czym polega teodycea w „Księdze Hioba” i jak kończy się próba Hioba?', back: 'Teodycea to próba pogodzenia istnienia dobrego Boga z obecnością zła i cierpienia niewinnych; Hiob nie wyrzeka się Boga mimo straty dzieci, majątku i zdrowia, a w finale Bóg nagradza jego wierność, przywracając mu dobra w dwójnasób.', hint: 'Niezawinione cierpienie i wierność Bogu.', category: 'lektura' },
    { id: 'kf2-26', front: 'Co oznaczają pojęcia profetyzm i eschatologia w „Apokalipsie św. Jana”?', back: 'Profetyzm to styl prorocki i wieszczący przyszłość, a eschatologia to nauka o rzeczach ostatecznych człowieka i świata (Sąd Ostateczny, koniec dziejów, Nowe Jeruzalem).', hint: 'Proroctwo + koniec świata i sąd.', category: 'pojecie' },
    { id: 'kf2-27', front: 'Jakie dwie główne prawdy ilustrują przypowieści o Synu Marnotrawnym oraz o Miłosiernym Samarytaninie?', back: 'Syn Marnotrawny uczy o bezwarunkowym Bożym przebaczeniu skruszonemu grzesznikowi; Miłosierny Samarytanin pokazuje, że bliźnim jest każdy potrzebujący, niezależnie od podziałów etnicznych czy religijnych.', hint: 'Przebaczenie ojca + miłosierdzie ponad podziałami.', category: 'motyw' },
    { id: 'kf2-28', front: 'Wymień 3 cechy językowe „Bogurodzicy”, które świadczą o jej archaiczności i kunszcie.', back: 'Archaizmy leksykalne (np. „dziela” = dla, „bożyc” = syn Boży), rozkaźniki („spuści”, „raczy”, „usłysz”) oraz kunsztowna kompozycja paralelna i motyw Deesis.', hint: 'Archaizmy + prośby w trybie rozkazującym.', category: 'lektura' },
    { id: 'kf2-29', front: 'Na czym polega kontrast w „Rozmowie Mistrza Polikarpa ze Śmiercią”?', back: 'Uczony filozof Polikarp drży i blednie przed groteskową, rozkładającą się postacią Śmierci z kosą, co obnaża marność ludzkiego rozumu i równość wszystkich stanów społecznych wobec zgonu.', hint: 'Uczony vs rozkładająca się Śmierć.', category: 'lektura' },
    { id: 'kf2-30', front: 'Jaką zasadę kompozycyjną stosowano w „Pieśni o Rolandzie” i jaki ideał rycerza z niej wynika?', back: 'Zasada stopniowania heroizmu i wierności wasalnej (Roland umiera na wzgórzu zwrócony twarzą ku wrogom, z rękawicą podaną Bogu); idealny rycerz stawia honor, wiarę i wierność władcy ponad własne życie.', hint: 'Śmierć na wzgórzu z rękawicą dla Boga.', category: 'bohater' }
  ],
  quiz: [
    {
      q: "Wskaż zdanie, które trafnie definiuje konflikt tragiczny w „Antygonie” Sofoklesa:",
      options: [
        "To spór między prawem boskim a prawem stanowionym przez władcę Teb.",
        "To walka Antygony o objęcie tronu Teb po zmarłym bracie Eteoklesie.",
        "To spór między Ismeną a Hajmonem o rękę Antygony.",
        "To konflikt religijny między wyznawcami Dionizosa a kapłanami Apollina."
      ],
      correct: 0,
      explanation: "Konflikt tragiczny w „Antygonie” opiera się na nierozstrzygalnym starciu prawa boskiego (reprezentowanego przez Antygonę) z prawem państwowym (Kreon).",
      whyWrong: {
        1: "Antygona nie miała żadnych ambicji politycznych ani dynastycznych.",
        2: "Ismena i Hajmon nie rywalizowali ze sobą.",
        3: "Dramat nie dotyczy wojny religijnej między kultami greckimi."
      },
      examTip: "W wypracowaniu zawsze definiuj konflikt w „Antygonie” jako zderzenie dwóch równorzędnych racji moralno-prawnych."
    },
    {
      q: "Który z bohaterów tragedii Sofoklesa dopuścił się pychy (hybris) i został ukarany przez bogów?",
      options: [
        "Kreon",
        "Tyrezjasz",
        "Hajmon",
        "Polinejkes"
      ],
      correct: 0,
      explanation: "Kreon uległ zuchwałej wierze we własną nieomylność, ignorując prawa boskie i ostrzeżenia wróżbity Tyrezjasza, za co zapłacił śmiercią syna i żony.",
      whyWrong: {
        1: "Tyrezjasz to niewidomy wieszcz przekazujący wolę bogów.",
        2: "Hajmon był głosem rozsądku apelującym do ojca o opamiętanie.",
        3: "Polinejkes zginął w walce przed rozpoczęciem akcji dramatu."
      },
      examTip: "Pamiętaj: Kreon nie jest złoczyńcą, lecz postacią tragiczną, która zbłądziła przez hybris."
    },
    {
      q: "Zasada decorum w tragedii antycznej oznaczała:",
      options: [
        "Konieczność zachowania trzech jedności: czasu, miejsca i akcji.",
        "Obowiązek występowania na scenie chóru liczącego dokładnie 50 osób.",
        "Dopasowanie podniosłego, jednorodnego stylu do wzniosłej tematyki i zakaz ukazywania scen krwawych na scenie.",
        "Wprowadzenie elementów humorystycznych w celu rozładowania napięcia."
      ],
      correct: 2,
      explanation: "Decorum (stosowność) nakazywało jednolity, wysoki styl oraz zakazywało pokazywania zbrodni i krwi na oczach widzów.",
      whyWrong: {
        0: "To reguła trzech jedności, a nie decorum.",
        1: "Chór w tragedii Sofoklesa liczył 15 osób.",
        3: "W tragedii antycznej humor był surowo zakazany (rozbijał go dopiero Szekspir)."
      },
      examTip: "Wszelkie morderstwa i samobójstwa w teatrze greckim działy się poza sceną — relacjonował je Posłaniec."
    },
    {
      q: "Na czym polega biblijny topos Hioba?",
      options: [
        "Na buncie wybitnej jednostki przeciwko tyranii władcy świeckiego.",
        "Na tragicznej miłości kończącej się samobójstwem kochanków.",
        "Na poszukiwaniu sensu życia w wiedzy naukowej i bogactwie.",
        "Na cierpieniu człowieka niewinnego, który poddany próbie zachowuje wierność Bogu."
      ],
      correct: 3,
      explanation: "Hiob to uniwersalny topos człowieka sprawiedliwego dotkniętego niezawinionym cierpieniem, który nie popada w bluźnierstwo.",
      whyWrong: {
        0: "To opis prometeizmu lub wallenrodyzmu.",
        1: "To topos Romea i Julii lub Orfeusza.",
        2: "To topos Koheleta lub Fausta."
      },
      examTip: "Przywołuj Hioba przy omawianiu cierpienia w „Trenach” Kochanowskiego i literaturze wojennej."
    },
    {
      q: "Co oznacza pojęcie Deesis w strukturze „Bogurodzicy”?",
      options: [
        "Układ modlitewnego wstawiennictwa: Chrystus, Maryja i Jan Chrzciciel.",
        "Zasada podziału wiersza na równe strofy z rymami żeńskimi.",
        "Pieśń wykonywana przez rycerzy przed rozpoczęciem bitwy.",
        "Zbiór archaizmów fleksyjnych odnoszących się do Boga Ojca."
      ],
      correct: 0,
      explanation: "Deesis (błaganie) to trójpostaciowy topos ikonograficzny: Chrystus jako Sędzia oraz Maryja i Jan Chrzciciel jako orędownicy ludzkości.",
      whyWrong: {
        1: "„Bogurodzica” jest wierszem asylabicznym (zdaniowo-rymowym).",
        2: "Pieśń bitewna to funkcja utworu, a nie znaczenie terminu Deesis.",
        3: "To termin z teologii i historii sztuki, nie językoznawstwa."
      },
      examTip: "Zadanie z motywem Deesis w „Bogurodzicy” regularnie pojawia się w arkuszach CKE."
    },
    {
      q: "Wskaż cechę wyróżniającą „Lament świętokrzyski” na tle średniowiecznej poezji religijnej:",
      options: [
        "Napisanie utworu w języku łacińskim.",
        "Przedstawienie Chrystusa jako bezwzględnego władcy i sędziego.",
        "Pochwała ascezy i ucieczki od uciech doczesnego świata.",
        "Humanizacja postaci Maryi, ukazanej jako bolejąca ziemska matka opłakująca syna."
      ],
      correct: 3,
      explanation: "„Lament świętokrzyski” zrywa z chłodnym dogmatyzmem i przedstawia Maryję w pełnym wymiarze ludzkiego, matczynego bólu.",
      whyWrong: {
        0: "Utwór powstał w języku polskim.",
        1: "Chrystus jest ukazany jako skatowane, bezbronne dziecko wiszące na krzyżu.",
        2: "Utwór nie porusza problemu ascezy."
      },
      examTip: "Kluczowe pojęcie do tego wiersza to motyw Stabat Mater Dolorosa (Stała Matka Boleściwa)."
    },
    {
      q: "Czym charakteryzuje się topos Danse Macabre w „Rozmowie Mistrza Polikarpa ze Śmiercią”?",
      options: [
        "Śmierć oszczędza ludzi bogatych i sprawujących wysokie urzędy kościelne.",
        "Śmierć ukazuje się jako piękna, młoda kobieta zapraszająca do zabawy.",
        "Taniec ze Śmiercią symbolizuje równość wszystkich ludzi wobec zgonu niezależnie od majątku i stanu.",
        "Taniec ten mogą wykonywać wyłącznie rycerze polegli na polu chwały."
      ],
      correct: 2,
      explanation: "Danse macabre przypomina o egalitaryzmie śmierci — przed jej kosą żebrak i papież są dokładnie tacy sami.",
      whyWrong: {
        0: "Śmierć w wierszu wprost kpi z biskupów i sędziów biorących łapówki.",
        1: "Śmierć jest odrażającym, rozkładającym się trupem kobiety (a nie tylko szkieletem).",
        3: "Taniec śmierci obejmuje całe społeczeństwo, a nie tylko rycerzy."
      },
      examTip: "Połącz taniec śmierci z pojęciem egalitaryzmu (równości stanowej)."
    },
    {
      q: "Który z poniższych bohaterów jest uosobieniem średniowiecznego wzorca ascety?",
      options: [
        "Bolesław Chrobry",
        "Święty Aleksy",
        "Hrabia Roland",
        "Mistrz Polikarp"
      ],
      correct: 1,
      explanation: "Św. Aleksy zrezygnował z bogactwa i małżeństwa, żyjąc w skrajnym ubóstwie i cierpieniu pod schodami pałacu ojca w imię zbawienia wiecznego.",
      whyWrong: {
        0: "Chrobry to wzorzec idealnego władcy.",
        2: "Roland to wzorzec rycerza chrześcijańskiego.",
        3: "Polikarp to mędrzec pragnący poznać tajemnicę śmierci."
      },
      examTip: "Zapamiętaj: asceza to świadome wyrzeczenie się dóbr materialnych i umartwianie ciała."
    },
    {
      q: "Dlaczego Roland w „Pieśni o Rolandzie” zostaje uznany za wzorzec rycerza, mimo że jego decyzja doprowadziła do śmierci całego tylnego oddziału?",
      options: [
        "Ponieważ ocalił skarb Karola Wielkiego.",
        "Ponieważ zabił zdrajcę Ganelona własnym mieczem Durandalem.",
        "Ponieważ podstępem pokonał króla Saracenów Marsyla.",
        "Ponieważ do końca pozostał wierny etosowi rycerskiemu, walcząc w obronie wiary i honoru swego rodu."
      ],
      correct: 3,
      explanation: "W etosie rycerskim honor, wierność Bogu i władcy oraz męstwo miały wartość wyższą niż ocalenie własnego życia biologicznego.",
      whyWrong: {
        0: "Roland nie walczył o dobra materialne.",
        1: "Ganelona osądził i skazał Karol Wielki po powrocie z wojskami.",
        2: "Roland nie stosował podstępu (podstęp uważał za hańbę)."
      },
      examTip: "Zwróć uwagę na scenę śmierci Rolanda: umiera na wzgórzu, z twarzą zwróconą ku Hiszpanii, a aniołowie zabierają jego duszę do nieba."
    },
    {
      q: "Wskaż zdanie opisujące filozofię stoicką:",
      options: [
        "Człowiek powinien dążyć do bogactwa, gdyż zapewnia ono szacunek otoczenia.",
        "Najwyższym dobrem jest cnota, a człowiek powinien zachować spokój ducha (apatheia) wobec wyroków losu.",
        "Należy korzystać ze wszystkich zmysłowych rozkoszy, bo życie kończy się unicestwieniem duszy.",
        "Prawdziwy mędrzec odrzuca wszelkie normy społeczne i żyje w skrajnym odosobnieniu."
      ],
      correct: 1,
      explanation: "Stoicyzm uczył cnoty, rozumnego panowania nad emocjami i godnego znoszenia przeciwności losu.",
      whyWrong: {
        0: "Stoicy uważali bogactwo za rzecz obojętną moralnie.",
        2: "To wulgarna interpretacja hedonizmu, a nie stoicyzm.",
        3: "To elementy cynizmu (Diogenes z Synopy)."
      },
      examTip: "Stoicki spokój to termin pochodzący wprost od tej filozofii."
    },
    {
      q: "Która z przypowieści ewangelicznych stanowi archetyp bezwarunkowego miłosierdzia i wybaczenia?",
      options: [
        "Przypowieść o pannach roztropnych i nieroztropnych",
        "Przypowieść o talentach",
        "Przypowieść o synu marnotrawnym",
        "Przypowieść o kąkolu i pszenicy"
      ],
      correct: 2,
      explanation: "Ojciec wybaczający powracającemu synowi marnotrawnemu to biblijny symbol bezgranicznej miłości i gotowości Boga do odpuszczenia grzechów.",
      whyWrong: {
        0: "Panny roztropne to przypowieść o gotowości na Sąd Ostateczny.",
        1: "Przypowieść o talentach uczy odpowiedzialności za dary Boże.",
        3: "Przypowieść o kąkolu dotyczy koegzystencji dobra i zła na świecie."
      },
      examTip: "Postać ojca z tej przypowieści to kluczowy topos w motywie ojcostwa i wybaczenia."
    },
    {
      q: "Co w kulturze europejskiej symbolizuje mit o Ikarze?",
      options: [
        "Zwycięstwo chłodnego rozumu nad emocjami.",
        "Młodzieńczy entuzjazm, idealizm i dążenie do marzeń zakończone tragicznie.",
        "Triumf człowieka nad potęgą morza.",
        "Bezduszną tyranię państwa nad artystą."
      ],
      correct: 1,
      explanation: "Ikar to symbol młodzieńczego marzycielstwa, który wzbił się za wysoko ku słońcu, płacąc za to życiem.",
      whyWrong: {
        0: "Zwycięstwo rozumu symbolizuje Dedal, ojciec Ikara.",
        2: "Ikar utonął w morzu, nie zatriumfował nad żywiołem.",
        3: "Mit nie dotyczy relacji artysty z władzą państwową."
      },
      examTip: "Zestawiaj Dedala (pozytywizm, racjonalizm) z Ikarem (romantyzm, poryw serca)."
    },
    {
      q: "Czym w poetyce tragedii greckiej według Arystotelesa jest zasada trzech jedności?",
      options: [
        "Jednością miejsca akcji, czasu (do jednej doby) oraz jednego głównego wątku akcji.",
        "Obecnością dokładnie trzech aktorów, trzech chórów i trzech aktów w każdym dramacie.",
        "Połączeniem trzech gatunków: eposu, liryki i dramatu w jednym utworze.",
        "Zgodnością poglądów bohatera, chóru i bogów olimpijskich."
      ],
      correct: 0,
      explanation: "Klasyczna tragedia antyczna zachowywała jedność miejsca (np. plac przed pałacem), czasu (zwykle ok. 24 godzin) i akcji (brak wątków pobocznych).",
      whyWrong: {
        1: "Liczba aktorów czy pieśni chóru nie definiuje zasady trzech jedności.",
        2: "Połączenie trzech rodzajów to synkretyzm rodzajowy, typowy dla romantyzmu.",
        3: "W tragedii dochodzi właśnie do konfliktu poglądów i racji."
      },
      examTip: "Zasada trzech jedności odróżnia dramat antyczny i klasycystyczny od otwartego dramatu szekspirowskiego i romantycznego."
    },
    {
      q: "Które z poniższych zachowań najlepiej ilustruje filozofię stoicką w obliczu życiowych nieszczęść?",
      options: [
        "Zachowanie wewnętrznego spokoju, dystansu wobec namiętności oraz przyjęcie losu z godnością i rozumem.",
        "Dążenie do maksymalizacji zmysłowych przyjemności i ucieczka od wszelkiego wysiłku.",
        "Bunt przeciwko bogom i aktywna próba zmiany porządku świata za wszelką cenę.",
        "Skupienie się wyłącznie na dobrach materialnych jako zabezpieczeniu przed śmiercią."
      ],
      correct: 0,
      explanation: "Stoicyzm (Zenon z Kition, Seneka, Marek Aureliusz) zalecał wewnętrzny spokój i wolność od namiętności (apatheię), panowanie nad emocjami oraz życie zgodne z rozumem i cnotą.",
      whyWrong: {
        1: "To zniekształcony (potoczny) obraz epikureizmu, tzw. hedonizm.",
        2: "To postawa prometejska lub romantyczna, obca stoickiemu spokojowi.",
        3: "Stoicy uważali bogactwo za rzecz obojętną wobec cnoty."
      },
      examTip: "Stoicyzm to fundament postawy Jana Kochanowskiego we fraszkach i pieśniach przed tragedią „Trenów”."
    },
    {
      q: "Jaki był ostateczny los Kreona w zakończeniu „Antygony” Sofoklesa?",
      options: [
        "Został złamany psychicznie po samobójstwach syna Hajmona i żony Eurydyki, uznając własną winę.",
        "Został skazany na śmierć przez radę starców tebańskich za znieważenie zwłok Polinejkesa.",
        "Pokonał wojska z Argos i poślubił Ismenę, aby utrzymać ciągłość dynastii.",
        "Uciekł z Teb jeszcze przed wyrokiem Antygony, oddając władzę chórowi."
      ],
      correct: 0,
      explanation: "Kreon przeżył, ale poniósł klęskę moralną i rodzinną — po śmierci Antygony, Hajmona i Eurydyki uświadomił sobie swoją pychę (hybris).",
      whyWrong: {
        1: "Kreon nie został stracony przez radę — jego karą była śmierć bliskich i bolesna samotność.",
        2: "Ismena nie poślubiła Kreona.",
        3: "Kreon pozostał w Tebach aż do tragicznego finału."
      },
      examTip: "W „Antygonie” nie tylko Antygona jest postacią tragiczną — tragedia dotyka również zaślepionego władzą Kreona."
    },
    {
      q: "Czego symbolem w kulturze europejskiej stał się biblijny Hiob?",
      options: [
        "Niezawinionego cierpienia, które nie niszczy wiary człowieka i zaufania wobec Boga.",
        "Buntu przeciw Stwórcy prowadzącego do całkowitego odrzucenia religii.",
        "Pychy uczonego pragnącego zdobyć zakazaną wiedzę za cenę duszy.",
        "Zdrady przyjaciela w zamian za korzyści materialne."
      ],
      correct: 0,
      explanation: "Hiob mimo utraty majątku, dzieci i zdrowia zachował wierność Bogu (choć pytał o sens bólu), stając się archetypem cierpienia niewinnego.",
      whyWrong: {
        1: "Hiob spierał się z Bogiem i przyjaciółmi, ale nigdy się Go nie wyrzekł.",
        2: "To opis motywu faustycznego, nie hiobowego.",
        3: "To motyw judaszowy, obcy Księdze Hioba."
      },
      examTip: "Zestawiaj Hioba z Gustawem Herlingiem-Grudzińskim lub bohaterami obozowymi pytającymi o sens cierpienia."
    },
    {
      q: "Co oznacza motyw „vanitas” wywodzący się z biblijnej Księgi Koheleta?",
      options: [
        "Przemijalność, kruchość i marność wszystkich spraw doczesnych, bogactwa oraz sławy wobec wieczności.",
        "Bezwzględny obowiązek poddania się władzy świeckiej w imię spokoju społecznego.",
        "Radość z używania życia bez troski o jutro zgodnie z zasadą carpe diem.",
        "Przekonanie o wyższości wiedzy naukowej nad objawieniem religijnym."
      ],
      correct: 0,
      explanation: "„Vanitas vanitatum et omnia vanitas” (Marność nad marnościami i wszystko marność) wyraża znikomość ludzkich dążeń doczesnych i bogactw wobec upływu czasu.",
      whyWrong: {
        1: "Księga Koheleta nie jest traktatem o posłuszeństwie władzy państwowej.",
        2: "Carpe diem pochodzi od Horacego (Antyk rzymski), choć Kohelet także zaleca skromną radość z darów Bożych w obliczu marności.",
        3: "Kohelet podkreśla właśnie ograniczenia ludzkiego rozumu i wiedzy."
      },
      examTip: "Motyw vanitas powraca bardzo mocno w poezji barokowej (Naborowski, Morsztyn) oraz w średniowiecznym danse macabre."
    },
    {
      q: "Na czym polega nowatorstwo psychologiczne w „Lamencie świętokrzyskim” („Posłuchajcie, bracia miła...”)?",
      options: [
        "Maryja została ukazana jako cierpiąca, ludzka matka bliska zwykłym ludziom, a nie niedostępna królowa niebios.",
        "Utwór wprowadza dialog między szatanem a polskim królem o losach zbawienia.",
        "Po raz pierwszy zastosowano w nim komizm sytuacyjny w opisie ukrzyżowania.",
        "Wiersz jest napisany wyłącznie po łacinie w formie traktatu filozoficznego."
      ],
      correct: 0,
      explanation: "Humanizacja postaci Maryi w „Lamencie świętokrzyskim” sprawia, że cierpi ona jak każda ziemska matka bezradna wobec męki swojego dziecka.",
      whyWrong: {
        1: "W utworze mówi sama Matka Boska, zwracając się do ludzi, Jezusa i archanioła Gabriela.",
        2: "Komizm i groteska występują w „Rozmowie Mistrza Polikarpa ze Śmiercią”, nie w „Lamencie”.",
        3: "„Lament świętokrzyski” to arcydzieło liryki w języku polskim."
      },
      examTip: "Zestawiaj „Bogurodzicę” (Maryja dostojna pośredniczka — Deesis) z „Lamentem świętokrzyskim” (Maryja cierpiąca matka)."
    },
    {
      q: "Co symbolizuje motyw Danse Macabre (taniec śmierci) w „Rozmowie Mistrza Polikarpa ze Śmiercią”?",
      options: [
        "Równość wszystkich ludzi wobec śmierci, niezależnie od majątku, wykształcenia czy stanu społecznego.",
        "Triumf uczonych filozofów, którzy dzięki wiedzy potrafią oszukać przeznaczenie.",
        "Radosne święto kończące karnawał na dworach średniowiecznych królów.",
        "Ocalenie wyłącznie ludzi bogatych, którzy ufundowali kościoły."
      ],
      correct: 0,
      explanation: "Śmierć prowadzi w korowodzie papieża, króla, rycerza, chłopa i zakonnicę, pokazując, że przed zgonem nikt nie ucieknie.",
      whyWrong: {
        1: "Polikarp mimo całej swojej wiedzy mdleje i drży przed Śmiercią.",
        2: "Danse macabre nie jest radosną zabawą dworską, lecz groteskowym ostrzeżeniem (memento mori).",
        3: "Bogactwo nie daje żadnego immunitetu przed Śmiercią."
      },
      examTip: "Motyw danse macabre łącz z łacińskim hasłem memento mori (pamiętaj o śmierci)."
    },
    {
      q: "Które z poniższych zachowań najpełniej wyraża średniowieczny wzorzec rycerza (na przykładzie Rolanda)?",
      options: [
        "Bezgraniczna wierność Bogu, ojczyźnie i władcy oraz przedkładanie honoru nad ocalenie własnego życia.",
        "Ostrożne unikanie bitwy i pertraktacje handlowe z wrogiem w celu ocalenia oddziału.",
        "Odrzucenie przysięgi lennej i walka wyłącznie dla osobistych łupów wojennych.",
        "Wyrzeczenie się broni i udanie się na pustelnię w roli żebraka."
      ],
      correct: 0,
      explanation: "Roland odmawia wezwania posiłków rogiem Olifantem na początku bitwy, by nie splamić honoru, a umierając zwraca się ku Hiszpanii i oddaje rękawicę Bogu.",
      whyWrong: {
        1: "Taktyczny kompromis z Saracenami byłby według etosu rycerskiego zdradą i tchórzostwem.",
        2: "Etos rycerski wyklucza zdradę suzerena i chciwość.",
        3: "To opis wzorca ascety (np. św. Aleksego), a nie rycerza."
      },
      examTip: "Średniowieczna parenetyka opiera się na trzech filarach: rycerz (Roland — w PP we fragm.) oraz asceta (św. Aleksy) i władca (Gall Anonim — poza PP od 2024 r., ważne jako kontekst)."
    }
  ]
};
