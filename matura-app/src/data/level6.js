export const LEVEL_6 = {
  id: 6,
  code: 'BLOK 6',
  title: 'Mapa Pozostałych Lektur Obowiązkowych i Poezji',
  subtitle: 'Rozbudowane opracowania lektur we fragmentach, utworów krótkich i poetów pod Część 2 arkusza',
  duration: '60 min',
  xp: 160,
  notes: [
    {
      id: '6-1',
      title: '1. Lektury Dawne: Biblia, Mitologia, Iliada, Średniowiecze, Renesans, Barok, Oświecenie',
      badge: 'Kliknij każdą pozycję po pełne omówienie',
      intro:
        'W Teście Historycznoliterackim (Część 2 arkusza, 15 pkt) zawsze pojawiają się pytania z lektur obowiązkowych omawianych w całości lub we fragmentach. Poniżej masz dokładne opracowanie każdej z nich — rozwiń karty, aby poznać fabułę, bohaterów i motywy.',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Biblia (Księgi: Rodzaju, Hioba, Koheleta, Pieśń nad Pieśniami, Psalmy, Apokalipsa)',
              desc: 'Sześć obowiązkowych ksiąg biblijnych — kliknij po dokładne streszczenie każdej z nich.',
              details: {
                summary:
                  'Biblia to najczęściej sprawdzany na teście tekst kultury antycznej. Musisz kojarzyć problematykę każdej z wymaganych ksiąg.',
                bullets: [
                  'Księga Rodzaju (Genesis): dwa opisy stworzenia świata i człowieka (na obraz i podobieństwo Boga); ogród Eden, drzewo poznania dobra i zła, grzech pierworodny Adama i Ewy oraz wygnanie z raju; bratobójstwo Kaina na Ablu z zazdrości; potop i Arka Noego; budowa Wieży Babel (symbol ludzkiej pychy ukaranej pomieszaniem języków).',
                  'Księga Hioba: zamożny i bogobojny Hiob z ziemi Us staje się przedmiotem zakładu między Bogiem a Szatanem (czy człowiek kocha Boga bezinteresownie, czy tylko za błogosławieństwa?). W jeden dzień Hiob traci majątek i dziesięcioro dzieci, a jego ciało pokrywa trąd. Żona namawia go: „Złorzecz Bogu i umieraj!”, a trzej przyjaciele twierdzą, że musiał ciężko zgrzeszyć (zasada retrybucji). Hiob cierpi, skarży się, ale nie przeklina Boga („Pan dał, Pan wziął”). Bóg przemawia z wichru o wielkości stworzenia, przyznaje rację Hiobowi i zwraca mu w dwójnasób majątek oraz nową rodzinę. Motyw: cierpienie niezawinione i wierność.',
                  'Księga Koheleta (Eklezjastesa): refleksyjny monolog mędrca zaczynający się od słów „Marność nad marnościami i wszystko marność” (Vanitas vanitatum et omnia vanitas). Bogactwo, władza, sława i ludzka mądrość przemijają; na wszystko jest wyznaczony czas („czas rodzenia i czas umierania”), dlatego należy zachować umiar i ufać Bogu.',
                  'Pieśń nad Pieśniami: poemat liryczny w formie dialogu Oblubieńca i Oblubienicy; na poziomie dosłownym — pochwała zmysłowej, wiernej miłości dwojga ludzi („bo jak śmierć potężna jest miłość”); na poziomie alegorycznym — miłość Boga do narodu wybranego / Chrystusa do Kościoła.',
                  'Apokalipsa św. Jana: prorocza wizja końca świata spisana na wyspie Patmos. Symbole: Księga zapieczętowana na 7 pieczęci, Baranek (Chrystus), Czterej Jeźdźcy Apokalipsy (Zwycięzca na białym koniu, Wojna na ognistym, Głód na czarnym z wagą, Śmierć na trupio bladym), Nierządnica Babilońska, walka ze Smokiem (Szatanem), Sąd Ostateczny i zstąpienie Nowego Jeruzalem.'
                ],
                essayUse: 'Hiob (cierpienie niezawinione), Kohelet (vanitas) i Wieża Babel (pycha) to gotowe konteksty biblijne do wypracowania.'
              }
            },
            {
              term: 'Mitologia (Jan Parandowski) & „Iliada” (Homer)',
              desc: 'Archetypy mitologiczne oraz pojedynek Achillesa z Hektorem i spotkanie z Priamem.',
              details: {
                summary:
                  'Mity greckie tworzą uniwersalne wzorce zachowań ludzkich (archetypy), natomiast „Iliada” ukazuje kodeks honorowy starożytnego wojownika.',
                bullets: [
                  'Prometeusz: tytan, który ulepił człowieka z gliny i łez oraz wykradł bogom ogień, za co Zeus przykuł go do skał Kaukazu, gdzie orzeł wyjadał mu odrastającą wątrobę. Archetyp samotnego buntownika i altruisty poświęcającego się dla ludzkości.',
                  'Syzyf: król Koryntu ukarany w Tartarze wtaczaniem pod stromą górę głazu, który tuż przed szczytem zawsze stacza się na dół. Archetyp daremnego, niekończącego się trudu („syzyfowa praca”).',
                  'Dedal i Ikar: ucieczka z Krety na skrzydłach z piór i wosku; Dedal (archetyp rozsądku, pragmatyzmu i doświadczenia) dolatuje bezpiecznie, a młody Ikar (archetyp marzyciela i młodzieńczej brawury) leci zbyt blisko słońca i ginie w morzu.',
                  'Orfeusz i Eurydyka (miłość silniejsza niż śmierć), Niobe (skamieniała z bólu matka po stracie czternaściorga dzieci — ukarana za pychę wobec Latony), Demeter i Kora/Persefona (miłość macierzyńska i cykl pór roku).',
                  '„Iliada” Homera (fragmenty): dziesiąty rok oblężenia Troi. Najdzielniejszy wojownik grecki Achilles (syn bogini Tetydy), wściekły po śmierci przyjaciela Patroklosa z ręki królewicza trojańskiego Hektora, wyzywa Hektora na pojedynek. Mimo strachu Hektor podejmuje walkę o honor, ginie, a Achilles przywiązuje jego ciało do rydwanu i włóczy wokół murów Troi. Nocą do namiotu Achillesa przychodzi w tajemnicy stary król Troi Priam i całuje ręce zabójcy swoich synów, błagając o wydanie zwłok Hektora. Achilles, poruszony wspomnieniem własnego starego ojca Peleusa, płacze razem z Priamem i oddaje mu ciało syna.'
                ],
                essayUse: 'Scena płaczu Achillesa i Priama w „Iliadzie” to genialny argument o empatii, przebaczeniu i człowieczeństwie na wojnie!'
              }
            },
            {
              term: 'Utwory Średniowieczne: Lament, Polikarp, św. Aleksy, Pieśń o Rolandzie, św. Franciszek',
              desc: 'Pięć obowiązkowych tekstów średniowiecznych — pełne omówienie.',
              details: {
                summary:
                  'Każdy z tych utworów reprezentuje inny nurt średniowiecza: lirykę maryjną, satyrę moralistyczną, hagiografię (żywoty świętych), epos rycerski oraz franciszkanizm.',
                bullets: [
                  '„Lament świętokrzyski” (Posłuchajcie, bracia miła): arcydzieło polskiej liryki średniowiecznej (XV w.). Matka Boska stojąca pod krzyżem nie jest tu niedostępną Królową Niebios, lecz zrozpaczoną ludzką matką (motyw Stabat Mater Dolorosa). Zwraca się do ludzi o współczucie, chce podzielić rany z Synem i podać Mu kropelkę wody (ale nie może Go dosięgnąć), wspomina radosne chwile zwiastowania i ostrzega wszystkie matki, by modliły się za swoje dzieci.',
                  '„Rozmowa Mistrza Polikarpa ze Śmiercią”: wierszowany dialog uczonego mędrca z upersonifikowaną Śmiercią (ukazaną naturalistycznie jako gnijący, żółty kobiecy trup z kosą, bez nosa i warg). Przerażony Polikarp mdleje ze strachu, a Śmierć z czarnym humorem wyjaśnia mu, że powstała w raju po ugryzieniu jabłka przez Ewę, nie przyjmuje łapówek od bogaczy i lekarzy, i wciąga wszystkich ludzi do wspólnego tańca (danse macabre).',
                  '„Legenda o św. Aleksym”: żywot świętego ascety. Rzymski książę Aleksy w noc poślubną oddaje pierścień żonie Famijanie, rozdaje złoto biednym i przez 16 lat żebrze pod kościołem (gdzie z szacunku dla niego z obrazu schodzi sama Matka Boska!). Gdy sława jego świętości mu ciąży, wraca nierozpoznany do Rzymu i kolejne 16 lat żyje pod schodami pałacu własnego ojca Eufamijana, znosząc w pokorze pomyje wylewane na niego przez służbę. W chwili jego śmierci wszystkie dzwony w Rzymie same biją, jego ciało uzdrawia chorych, a list z opisem jego życia udaje się wyjąć z martwej dłoni dopiero jego czystej żonie.',
                  '„Pieśń o Rolandzie”: francuski epos rycerski (chanson de geste). Hrabia Roland, siostrzeniec króla Karola Wielkiego, dowodzi tylną strażą wojsk w wąwozie Roncesvalles w Pirenejach. Zaatakowany przez ogromną armię Saracenów (wskutek zdrady ojczyma Ganelona), z dumy rycerskiej odmawia zadęcia w róg Olifant, by wezwać pomoc króla. Dopiero gdy wszyscy jego towarzysze giną, dmie w róg z całych sił (pękają mu skronie) i umiera na wzgórzu zwrócony twarzą w stronę Hiszpanii (wroga), bijąc się w piersi i wyciągając ku niebu rękawicę wasala dla Boga — a aniołowie zabierają jego duszę do raju.',
                  '„Kwiatki św. Franciszka z Asyżu”: zbiór pogodnych opowieści ukazujących radosną pobożność św. Franciszka, który głosi kazanie do ptaków („braci mniejszych”) i oswaja groźnego wilka z Gubbio.'
                ],
                essayUse: 'Matka Boska z „Lamentu” + Niobe z „Mitologii” + Pani Rollison z „Dziadów cz. III” = gotowa trójka do każdego tematu o cierpieniu matki!'
              }
            },
            {
              term: 'Jan Kochanowski („Fraszki”, „Pieśni”, „Treny”) i Piotr Skarga („Kazania sejmowe”)',
              desc: 'Filary polskiego Renesansu — stoicyzm, patriotyzm i ojcowska rozpacz.',
              details: {
                summary:
                  'Twórczość Jana Kochanowskiego dzieli się na okres dworski i czarnoleski (harmonijny światopogląd renesansowy) oraz okres po śmierci córeczki Urszulki (załamanie i odbudowa światopoglądu w „Trenach”).',
                bullets: [
                  '„Fraszki” Kochanowskiego: 1) „Na lipę” — gościnne drzewo z Czarnolasu zaprasza wędrowca w swój cień (symbol harmonii natury i domu); 2) „Na dom w Czarnolesie” — prośba do Boga nie o złote pałace, lecz o zdrowie, czyste sumienie, życzliwość ludzką i zachowanie skromnego gniazda ojczystego; 3) „O żywocie ludzkim” („Fraszki to wszystko, cokolwiek myślemy”) — świat jako teatr marionetek (theatrum mundi), którymi bawi się Fortuna.',
                  '„Pieśni” Kochanowskiego: 1) „Pieśń IX ks. I (Chcemy sobie być radzi?)” i „Pieśń IX ks. II (Nie porzucaj nadzieje)” — pochwała stoickiego spokoju („nic wiecznego na świecie: radość się z troską plecie”) i ufności w Bogu; 2) „Pieśń o spustoszeniu Podola (Wieczna sromota i nienagrodzona...)” — gorzki apel patriotyczny po najeździe Tatarów: poeta wstydzi się za szlachtę, która woli kupować srebrne półmiski do biesiady niż dać pieniądze na obronę granic („Nową przypowieść Polak sobie kupi, Że i przed szkodą, i po szkodzie głupi”); 3) „Pieśń o dobrej sławie (Służymy poczciwej sławie)” — obywatel ma obowiązek służyć ojczyźnie swoim talentem lub szablą; 4) Hymn „Czego chcesz od nas, Panie, za Twe hojne dary?” — manifest renesansowego zachwytu nad harmonią świata stworzonego przez Boga.',
                  'Cykl 19 „Trenów” (1580): napisany po śmierci 2,5-letniej Urszulki (Orszulki). Kochanowski złamał zasadę decorum, poświęcając wysoki gatunek antyczny małemu dziecku! Przebieg cyklu: Tren I–VIII (opis pustki w domu i niezwykłych talentów dziewczynki — „słowik czarnoleski”); Tren IX („Kupić by cię, Mądrości...”) — drwina z filozofii stoickiej, która nie chroni przed bólem; Tren X („Orszulo moja wdzięczna, gdzieś mi się podziała?”) — kryzys religijny, pytanie w pustkę „gdziekolwiek jesteś, jeśliś jest”; Tren XI („Fraszka cnota! — powiedział Brutus porażony”) — zwątpienie w sprawiedliwość Bożą; Tren XIX albo Sen — we śnie ukazuje się poecie jego zmarła matka trzymająca radosną Urszulkę na ręku i tłumaczy mu, że córeczka jest bezpieczna w niebie, a „ludzkie przygody ludzkie noś!” (powrót do chrześcijańskiego ładu).',
                  'Piotr Skarga — „Kazania sejmowe”: płomienne mowy ostrzegające przed sześcioma „chorobami Rzeczypospolitej” (m.in. brak miłości ojczyzny, niezgoda, osłabienie władzy królewskiej). Słynna alegoria: Ojczyzna to tonący okręt — gdy statek idzie na dno, głupcem jest ten, kto zamiast zatykać dziurę w kadłubie, chowa swoje prywatne tłumoczki i kufry.'
                ],
                essayUse: 'W każdym temacie o stracie, wierze, filozofii i rodzinie „Treny” (zwłaszcza Tren IX, X i XIX) są lekturą obowiązkową najwyższej próby!'
              }
            },
            {
              term: 'Barok i Oświecenie: Pasek („Pamiętniki”), Molier („Skąpiec”), Krasicki („Satyry”, „Bajki”)',
              desc: 'Sarmatyzm, komedia charakterów o chciwości i oświeceniowy dydaktyzm.',
              details: {
                summary:
                  'Trzy utwory ukazujące ludzkie wady i obyczajowość XVII i XVIII wieku.',
                bullets: [
                  'Jan Chryzostom Pasek — „Pamiętniki”: barwny autoportret polskiego szlachcica-sarmaty z XVII w. Pasek jest waleczny (wojny ze Szwedami i Moskwą), dowcipny i przywiązany do wiary, ale jednocześnie kłótliwy, skory do pojedynków na szable, chciwy na łupy i całkowicie bezkrytyczny wobec siebie (słynny wątek ukochanej wydry podarowanej królowi Janowi III Sobieskiemu).',
                  'Molier — „Skąpiec” (komedia klasycystyczna): tytułowy Harpagon to bogaty paryski lichwiarz opętany obsesyjnym skąpstwem. Kocha swoją zakopaną w ogrodzie szkatułkę z dziesięcioma tysiącami talarów bardziej niż własne dzieci — syna Kleanta i córkę Elizę. Chce wydać Elizę bez posagu za starego Anzelma, a sam zamierza ożenić się z ubogą, młodą Marianną (ukochaną własnego syna Kleanta!). Sługa Kleanta, Strzałka, wykrada szkatułkę, po czym Harpagon wygłasza tragikomiczny monolog rozpaczy („Złoczyńca! Zabrał mi życie!”). Na końcu zgadza się na śluby swoich dzieci z ukochanymi pod warunkiem, że odzyska swoją szkatułkę i nie zapłaci za wesele.',
                  'Ignacy Krasicki — „Satyry” i „Bajki”: 1) „Żona modna” — szlachcic Piotr żeni się dla czterech wsi posagu z damą wychowaną w Warszawie na francuskich romansach; żona wyrzuca starego sługę, przebudowuje dwór na styl francuski, gardzi polską tradycją, a podczas pokazu fajerwerków puszcza z dymem stodołę; 2) „Świat zepsuty” — kontrast między cnotliwymi przodkami a zdemoralizowanym współczesnym pokoleniem (metafora tonącego okrętu); 3) „Pijaństwo” — obnażenie szlacheckiego alkoholizmu; 4) Bajki („Ptaszki w klatce” — alegoria rozbiorów Polski: młody czyżyk urodzony w niewoli nie rozumie rozpaczy starego czyżyka, który pamięta wolność; „Jagnię i wilcy” — prawo silniejszego).'
                ],
                essayUse: 'Harpagon ze „Skąpca” to najlepszy przykład tego, jak obsesja na punkcie pieniądza niszczy więzi rodzinne.'
              }
            }
          ]
        }
      ]
    },
    {
      id: '6-2',
      title: '2. Lektury XIX i XX wieku we fragmentach + Kluczowi Poeci na Teście',
      badge: 'Kliknij każdą kartę po pełne omówienie',
      intro:
        'Druga połowa listy lektur we fragmentach oraz sześciu najważniejszych poetów XIX i XX wieku, których wiersze regularnie trafiają do zadań interpretacyjnych w Części 2.',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Mickiewicz: „Romantyczność” & „Konrad Wallenrod”',
              desc: 'Manifest romantyzmu i tragiczny dylemat walki podstępem.',
              details: {
                summary:
                  'Dwa wczesne utwory Adama Mickiewicza wprowadzające kluczowe pojęcia polskiego romantyzmu.',
                bullets: [
                  'Ballada „Romantyczność” (1822): w biały dzień na rynku miasteczka wiejska dziewczyna Karusia rozmawia z duchem swojego zmarłego przed dwoma laty ukochanego Jasieńka. Prosty lud wierzy jej, płacze i modli się z nią, a także młody narrator wyznaje: „I ja to słyszę, i ja tak wierzę”. Przeciwstawia się im Stary Mędrzec (porte-parole oświeceniowego uczonego Jana Śniadeckiego), który woła: „Ufajcie memu oku i szkiełku, nic tu nie widzę dokoła!”. Narrator odpowiada mu słynną puentą: „Czucie i wiara silniej mówi do mnie niż mędrca szkiełko i oko (...) Miej serce i patrzaj w serce!”.',
                  '„Konrad Wallenrod” (powieść poetycka, 1828): Litwin Walter Alf, porwany w dzieciństwie przez Krzyżaków, ale wychowany w polskości i miłości do Litwy przez starego wajdelotę Halbana, wraca do ojczyzny i żeni się z córką księcia Kiejstuta — Aldoną. Widząc jednak, że Litwa nie pokona Zakonu Krzyżackiego w otwartej walce rycerskiej, opuszcza żonę (która zamyka się jako pustelnica w wieży w Malborku), podszywa się pod zabitego rycerza Konrada Wallenroda, zostaje wybrany Wielkim Mistrzem Krzyżackim i celowo doprowadza armię Zakonu do klęski i głodu podczas wyprawy na Litwę. Zdemaskowany przez sąd kapturowy, popełnia samobójstwo, pijąc truciznę — ocalił ojczyznę, ale zapłacił za to utratą szczęścia osobistego i honoru rycerskiego („Tyś niewolnik, jedyna broń niewolników — podstępy”).'
                ],
                essayUse: 'Konrad Wallenrod to klasyczny przykład konfliktu tragicznego między etyką rycerską a koniecznością ratowania narodu za wszelką cenę.'
              }
            },
            {
              term: 'Sienkiewicz („Potop”), Prus („Kamizelka”), Reymont („Chłopi” — Jesień)',
              desc: 'Przemiana Kmicica, cicha miłość małżeńska i życie wsi Lipce.',
              details: {
                summary:
                  'Trzy obowiązkowe pozycje z Pozytywizmu i Młodej Polski.',
                bullets: [
                  'Henryk Sienkiewicz — „Potop” (powieść historyczna pisana „ku pokrzepieniu serc”): główny bohater Andrzej Kmicic przechodzi drogę analogiczną do Jacka Soplicy. Początkowo jest hulaszczym warchołem (pali Wołmontowicze, traci szacunek ukochanej Oleńki Billewiczówny) i przez przysięgę na krzyż staje po stronie zdrajcy ojczyzny — księcia Janusza Radziwiłła. Gdy podczas uczty w Kiejdanach odkrywa zdradę Radziwiłłów, próbuje porwać księcia Bogusława, przybiera nowe nazwisko BABINICZ i odkupuje winy heroiczną walką ze Szwedami (bohaterska obrona klasztoru na Jasnej Górze, wysadzenie gigantycznej kolubryny, ocalenie króla Jana Kazimierza).',
                  'Bolesław Prus — „Kamizelka” (nowela pozytywistyczna): narrator-kolekcjoner kupuje od żydowskiego handlarza starą, wypłowiałą męską kamizelkę ze śladami przesuwania sprzączki i odtwarza historię swoich dawnych sąsiadów — ubogiego urzędnika i jego żony. Gdy mąż zachorował na gruźlicę i gwałtownie chudł, codziennie po kryjomu skracał pasek kamizelki, by żona myślała, że wraca do zdrowia; tymczasem żona co noc po kryjomu skracała ten sam pasek, by mąż nie widział, że chudnie! To arcydzieło o czułej, bezinteresownej miłości wyrażonej w codziennym „świętym kłamstwie”.',
                  'Władysław Stanisław Reymont — „Chłopi” (tom I „Jesień”): epopeja chłopska (Nagroda Nobla 1924). Akcja we wsi Lipce toczy się w czterech porach roku, podporządkowana rytmowi natury, prac polowych i obrzędów kościelnych. Najbogatszy gospodarz we wsi, stary wdowiec Maciej Boryna, wbrew woli dzieci żeni się z najpiękniejszą we wsi młodą Jagną Paczesiówną (zapisując jej najlepsze morgi ziemi). W Jagnie do szaleństwa zakochany jest żonaty syn Macieja — Antek Boryna. Dochodzi do gwałtownej bójki ojca z synem i wygnania Antka oraz jego żony Hanki z zagrody. Ważna scena: śmierć starego parobka Kuby Sochy, który podczas hucznego wesela Boryny i Jagny sam odrąbuje sobie w stajni zakażoną nogę siekierą i umiera w samotności.'
                ],
                essayUse: '„Kamizelka” to krótki, błyskotliwy przykład cichej miłości małżeńskiej, idealny jako drugi utwór w kontraście do toksycznej miłości w „Lalce”!'
              }
            },
            {
              term: 'Gombrowicz („Ferdydurke”) + Proza współczesna: Nowakowski, Stasiuk, Tokarczuk',
              desc: 'Forma, Gęba i Pupa oraz trzy krótkie opowiadania z końca listy obowiązkowej.',
              details: {
                summary:
                  'Utwory pokazujące uwikłanie człowieka w schematy społeczne, przemoc i historię najnowszą.',
                bullets: [
                  'Witold Gombrowicz — „Ferdydurke” (1937): 30-letni pisarz Józio Kowalski budzi się rano z poczuciem niedojrzałości. Odwiedza go demoniczny belfer z Krakowa — profesor T. Pimko — który „upupia” go (narzuca mu rolę dziecka) i wciska z powrotem do ławki w szkole dyrektora Piórkowskiego. W szkole nauczyciele (Bladaczka powtarzający bezmyślnie „Słowacki wielkim poetą był!”) wbijają uczniom do głów martwe frazesy, a chłopcy dzielą się na dwa obozy: „chłopięta” Miętusa (chcące być wulgarne i bratać się z parobkiem) oraz „chłopców” Syfona (niewinnych idealistów). Słynny pojedynek na miny między Miętusem a Syfonem kończy się „zgwałceniem przez ucho” Syfona (uświadomieniem go na siłę). Następnie Józio trafia na stancję do „nowoczesnej” rodziny Młodziaków (gdzie pod pozorem luzu i kultu sportowej „Nowoczesnej Pensjonarki” Zuty kryje się inna sztuczna maska) oraz do ziemiańskiego dworku wujostwa Hurleckich w Bolimowie (gdzie panuje feudalna hierarchia Pan–Cham). Kluczowe pojęcia Gombrowicza: 1) FORMA — narzucony przez kulturę i innych ludzi sposób zachowania, od którego nie da się uciec (ucieczka z jednej Formy jest zawsze wejściem w inną Formę!); 2) GĘBA — fałszywa maska przyprawiana nam przez otoczenie; 3) PUPA — infantylizacja, traktowanie dorosłego jak niedojrzałego dziecka; 4) ŁYDKA — symbol nowoczesności, biologizmu i młodości.',
                  'Marek Nowakowski — „Górą »Edek«” (z tomu „Prawo prerii”): krótkie opowiadanie stanowiące bezpośrednią aluzję do „Tanga” Mrożka! Na wąskiej drodze pod Warszawą spotykają się dwa samochody: za kierownicą Fiata siedzi kulturalny, wahający się inteligent, a w ciężarowym Żuku — pewny siebie, brutalny cwaniak („Edek”). Choć inteligent ma pierwszeństwo, ulega psychicznej presji i zjeżdża w błoto — w brutalnej rzeczywistości PRL-u i kapitalizmu znów wygrywa chamstwo i siła.',
                  'Andrzej Stasiuk — „Miejsce” (z tomu „Opowieści galicyjskie”): narrator wspomina starą, drewnianą łemkowską cerkiew w Beskidzie Niskim, która została rozebrana i przeniesiona do muzeum (skansenu). Zastanawia się, czym jest świętość i pamięć miejsca: budynek w muzeum staje się martwym eksponatem, podczas gdy na pustej łące po cerkwi wciąż czuć ślad modlitw dawnych pokoleń.',
                  'Olga Tokarczuk — „Profesor Andrews w Warszawie”: angielski psycholog wybitnej szkoły behawiorystycznej przylatuje na wykłady do Warszawy w grudniu 1981 r. Budzi się rano 13 grudnia (dzień wprowadzenia stanu wojennego): nie działa telefon, nie zna języka polskiego, z okna widzi czołgi i koksowniki na śniegu. Jego naukowe teorie są bezradne wobec absurdu historii, ale ratuje go zwykła ludzka życzliwość sąsiada, który częstuje go wódką i jedzeniem.'
                ],
                essayUse: 'Opowiadanie „Górą »Edek«” Nowakowskiego + „Tango” Mrożka to genialny duet do tematów o inteligencji, chamstwie i sile!'
              }
            },
            {
              term: '6 Kluczowych Poetów na Teście (Norwid, Leśmian, Baczyński, Miłosz, Szymborska, Herbert)',
              desc: 'Szybki klucz rozpoznawania autorów i ich najważniejszych wierszy.',
              details: {
                summary:
                  'W Części 2 arkusza niemal zawsze pojawia się jeden lub dwa wiersze z poniższej szóstki.',
                bullets: [
                  '1. Cyprian Kamil Norwid (późny romantyzm): „Fortepian Szopena” (rosyjscy żołnierze wyrzucają na bruk fortepian Chopina — „Ideał sięgnął bruku”, czyli klęska staje się moralnym triumfem sztuki), „Coś ty Atenom zrobił, Sokratesie” oraz „Bema pamięci żałobny rapsod” (wielcy ludzie i artyści są doceniani dopiero po śmierci).',
                  '2. Bolesław Leśmian (Młoda Polska / Dwudziestolecie): „Dziewczyna” (dwunastu braci kuje młotami mur, słysząc za nim płacz dziewczyny; po ich śmierci mur kruszą ich cienie i młoty, ale za murem nie ma nic — jednak sam trud i marzenie nadają sens istnieniu!), „Urszula Kochanowska” (Urszulka w niebie tęskni za ziemskim domem w Czarnolesie), „Topielec”. Styl: neologizmy („leśmianizmy”).',
                  '3. Krzysztof Kamil Baczyński (Wojna — pokolenie Kolumbów): „Elegia o... [chłopcu polskim]” (matka żegna syna, któremu wojna odebrała jasny świat i zmusiła do „czarnego chleba” śmierci), „Pokolenie” („Nas nauczono. Nie ma litości”), „Mazowsze”, „Biała magia”.',
                  '4. Czesław Miłosz (Współczesność, Nobel 1980): „Campo di Fiori” (zestawienie samotnej śmierci Giordana Bruna na stosie w Rzymie z samotnością ginących powstańców w getcie warszawskim, podczas gdy po drugiej stronie muru warszawiacy bawią się na karuzeli w pogodną niedzielę), „Piosenka o końcu świata” (koniec świata dzieje się cicho i niezauważalnie w zwykły dzień), „Który skrzywdziłeś” (przestroga dla tyranów — poeta wszystko pamięta i spisze ich czyny).',
                  '5. Wisława Szymborska (Współczesność, Nobel 1996): „Nic dwa razy” (każda chwila i każde istnienie są niepowtarzalne), „Kot w pustym mieszkaniu” (śmierć człowieka widziana oczami zdezorientowanego kota czekającego na właściciela), „Nienawiść”, „Cebula”.',
                  '6. Zbigniew Herbert (Współczesność): „Przesłanie Pana Cogito” (kodeks rycerski współczesnego człowieka: „idź wyprostowany wśród tych co na kolanach / wśród odwróconych plecami i obalonych w proch (...) Bądź wierny Idź” — nakaz heroizmu moralnego nawet bez nagrody!), „Apollo i Marsjasz” (okrutna sztuka zimnego boga kontra autentyczne ludzkie cierpienie), „U wrót doliny”.'
                ],
                essayUse: 'Wiersz „Przesłanie Pana Cogito” Herberta pasuje jako drugi utwór lub kontekst do 80% tematów rozprawek o wyborach moralnych, odwadze i godności!'
              }
            }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f6-1', front: 'Która księga biblijna wprowadza motyw „marności nad marnościami” (vanitas)?', back: 'Księga Koheleta.' },
    { id: 'f6-2', front: 'Czym wyróżnia się obraz Matki Boskiej w „Lamencie świętokrzyskim”?', back: 'Humanizacją — cierpi pod krzyżem jak zwykła, bezsilna ludzka matka.' },
    { id: 'f6-3', front: 'Jak zmienia się postawa Kochanowskiego między Trenem IX–XI a Trenem XIX?', back: 'W Trenach IX–XI przeżywa głęboki kryzys wiary w mądrość i stoicyzm; w Trenie XIX (Sen) matka przynosi mu ukojenie i pogodzenie z losem.' },
    { id: 'f6-4', front: 'Co oznaczają pojęcia „Forma” i „Gęba” w „Ferdydurke” Gombrowicza?', back: 'Forma to schematy narzucane nam przez kulturę/otoczenie; Gęba to fałszywa maska przyprawiana nam przez innych ludzi.' },
    { id: 'f6-5', front: 'Po czym rozpoznasz wiersze Bolesława Leśmiana i Wisławy Szymborskiej?', back: 'Leśmian: baśniowość i neologizmy („leśmianizmy”). Szymborska: ironia, dystans, proste codzienne sytuacje prowadzące do refleksji filozoficznej.' },
    { id: 'f6-6', front: 'Jaki jest główny nakaz etyczny w „Przesłaniu Pana Cogito” Zbigniewa Herberta?', back: 'Wierność wartościom, godności i odwadze mimo świadomości przegranej („Bądź wierny Idź”).' },
    { id: 'f6-7', front: 'Co symbolizuje historia Hioba w Biblii?', back: 'Niezawinione cierpienie sprawiedliwego człowieka i próbę wiary, która kończy się zaufaniem Bogu.' },
    { id: 'f6-8', front: 'Jak kończy się scena spotkania Achillesa i Priama w „Iliadzie”?', back: 'Gniewny Achilles wzrusza się prośbą starego ojca i oddaje mu ciało zabitego Hektora — triumf człowieczeństwa nad zemstą.' },
    { id: 'f6-9', front: 'Co krytykuje Ignacy Krasicki w satyrze „Żona modna”?', back: 'Ślepą modę na cudzoziemszczyznę (francuszczyznę), rozrzutność oraz małżeństwa zawierane wyłącznie dla majątku.' },
    { id: 'f6-10', front: 'Czym jest nowela „Kamizelka” Bolesława Prusa?', back: 'Wzruszającym obrazem cichej miłości małżonków: chory mąż skraca, a żona poszerza pasek kamizelki, by wzajemnie oszczędzić sobie bólu.' },
    { id: 'f6-11', front: 'O czym opowiadają „Chłopi” (tom I „Jesień”) Władysława Reymonta?', back: 'O życiu wsi Lipce w rytmie natury i religii oraz o konflikcie ojca (Maciej Boryna) i syna (Antek) o młodą Jagnę.' },
    { id: 'f6-12', front: 'Co jest głównym tematem opowiadania „Miejsce” Andrzeja Stasiuka?', back: 'Przemijanie i pamięć ukryta w śladach po dawnej, rozebranej drewnianej cerkwi w Beskidzie Niskim.' }
  ],
  quiz: [
    {
      q: 'Który bohater literacki przeszedł przemianę z warchoła w patriotę pod nazwiskiem Babinicz?',
      options: ['Jacek Soplica', 'Andrzej Kmicic', 'Konrad Wallenrod', 'Cezary Baryka'],
      correct: 1,
      explanation: 'To Andrzej Kmicic z „Potopu” Henryka Sienkiewicza.'
    },
    {
      q: 'Z jakiego utworu pochodzi zdanie: „Miej serce i patrzaj w serce”?',
      options: ['Dziady cz. III', 'Romantyczność', 'Pan Tadeusz', 'Kordian'],
      correct: 1,
      explanation: 'To puenta ballady „Romantyczność” Adama Mickiewicza — manifestu polskiego romantyzmu.'
    },
    {
      q: 'Jak nazywa się główny bohater „Skąpca” Moliera, chorobliwie przywiązany do swojej szkatułki?',
      options: ['Orgon', 'Harpagon', 'Tartuffe', 'Józio'],
      correct: 1,
      explanation: 'Harpagon to tytułowy skąpiec z komedii Moliera.'
    },
    {
      q: 'Wiersz „Campo di Fiori” o obojętności świata wobec zagłady getta warszawskiego napisał:',
      options: ['Zbigniew Herbert', 'Czesław Miłosz', 'Krzysztof Kamil Baczyński', 'Tadeusz Różewicz'],
      correct: 1,
      explanation: '„Campo di Fiori” to słynny wiersz Czesława Miłosza z 1943 roku.'
    },
    {
      q: 'Kto jest autorem opowiadania „Profesor Andrews w Warszawie” o wybuchu stanu wojennego?',
      options: ['Marek Nowakowski', 'Andrzej Stasiuk', 'Olga Tokarczuk', 'Hanna Krall'],
      correct: 2,
      explanation: 'Autorką tego opowiadania jest Olga Tokarczuk.'
    },
    {
      q: 'W którym utworze średniowiecznym pojawia się motyw „danse macabre” (tańca śmierci)?',
      options: [
        'Pieśń o Rolandzie',
        'Rozmowa Mistrza Polikarpa ze Śmiercią',
        'Legenda o św. Aleksym',
        'Kwiatki św. Franciszka'
      ],
      correct: 1,
      explanation: 'Śmierć w rozmowie z Polikarpem przypomina, że zabiera wszystkich równo — od papieża i króla po chłopa.'
    },
    {
      q: 'Kto w „Kazaniach sejmowych” użył metafory Rzeczypospolitej jako tonącego okrętu?',
      options: ['Jan Kochanowski', 'Piotr Skarga', 'Jan Chryzostom Pasek', 'Ignacy Krasicki'],
      correct: 1,
      explanation: 'Kaznodzieja Piotr Skarga ostrzegał szlachtę przed upadkiem państwa z powodu prywaty.'
    },
    {
      q: 'Postać „upupionego” 30-latka Józia pochodzi z powieści:',
      options: ['Przedwiośnie', 'Ferdydurke', 'Lalka', 'Tango'],
      correct: 1,
      explanation: 'Józio Kowalski to główny bohater groteskowej powieści „Ferdydurke” Witolda Gombrowicza.'
    }
  ]
};
