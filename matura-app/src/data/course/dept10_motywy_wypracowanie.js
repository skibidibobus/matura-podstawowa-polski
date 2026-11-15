export const DEPT_10 = {
  id: 'dept-10',
  displayNum: 10,
  code: 'DZIAŁ 10',
  title: 'Matryca Motywów, Konteksty i Wypracowanie 35/35',
  subtitle: '12 przekrojowych motywów CKE, bank funkcjonalnych kontekstów, żelazny algorytm wypracowania oraz tarcza antykardynalna',
  duration: '100 min',
  xp: 300,
  notes: [
    {
      id: 'kn10-1',
      title: 'Algorytm wypracowania maturalnego na 35/35 pkt — żelazna konstrukcja',
      badge: 'Klucz do 35/35 pkt',
      intro:
        'Wypracowanie maturalne w Formule 2023 ma wagę aż 35 punktów na 60 możliwych (58,3% całego egzaminu!). Aby uzyskać maksymalny wynik, nie wystarczy ładny styl — arkusz CKE ocenia pracę według ścisłego taryfikatora: spełnienie warunków formalnych, kompetencje literackie i kulturowe, kompozycję oraz poprawność językową.',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: '3 twarde warunki formalne CKE — granice wyzerowania pracy!',
          items: [
            '1. Długość minimalna: praca MUSI liczyć co najmniej 300 słów. Jeśli napiszesz 299 słów, egzaminator stawia 0 pkt za całe wypracowanie! Bezpieczny, zalecany przedział to 450–650 słów.',
            '2. Lektura obowiązkowa: musisz odwołać się do lektury obowiązkowej z listy wskazanej w arkuszu (najbezpieczniej: lektury czytanej w całości). Brak lektury z listy = wyzerowanie kryterium!',
            '3. Zero błędu kardynalnego: jakakolwiek całkowita falsyfikacja fabuły lub wymowy ideowej lektury obowiązkowej czytanej w całości skutkuje natychmiastową oceną 0/35 pkt!'
          ]
        },
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Złota struktura akapitu argumentacyjnego: model TSACW',
          items: [
            'T (Teza cząstkowa): 1 zdanie wprowadzające cząstkowy argument bezpośrednio wynikający z tezy głównej.',
            'S (Scena z lektury): przywołanie konkretnego epizodu, dialogu lub zachowania bohatera (NIE streszczaj całej książki!).',
            'A (Analiza i interpretacja): wyjaśnienie, co ta konkretna scena mówi o człowieku i w jaki sposób dowodzi Twojej tezy.',
            'C (Context pogłębiający): funkcjonalne powiązanie sceny z filozofią, biografią autora, historią epoki lub innym dziełem sztuki.',
            'W (Wniosek cząstkowy): krótkie zdanie domykające akapit i płynnie łączące go z kolejną myślą.'
          ]
        },
        {
          type: 'quote',
          label: 'Wzorcowy wstęp problemowy z tezą (~90 słów)',
          text:
            '„Władza od zarania dziejów stanowi jeden z najbardziej fascynujących, a zarazem niszczycielskich żywiołów ludzkiej egzystencji. Zdolność decydowania o losie innych bywa źródłem odpowiedzialności, lecz znacznie częściej staje się pokusą prowadzącą do moralnej degrengolady i despotyzmu. W literaturze motyw ten ujawnia mechanizmy zniewolenia jednostki oraz psychologiczny koszt panowania. W niniejszej pracy dowiodę, że niekontrolowane pragnienie władzy prowadzi do nieodwracalnej destrukcji sumienia rządzącego oraz zniewolenia poddanych, co zilustruję na przykładzie „Makbeta” Williama Szekspira oraz „Roku 1984” George’a Orwella”.'
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Krok 1: Wstęp z tezą (ok. 80–100 słów)',
              desc: 'Trójstopniowa konstrukcja wprowadzająca czytelnika w problem.',
              details: {
                summary:
                  'Dobry wstęp nie zaczyna się od banałów typu „Od wieków ludzie...”. Składa się z 3 precyzyjnych zdań.',
                bullets: [
                  'Zdanie 1: zdefiniowanie problemu zawartego w temacie z perspektywy egzystencjalnej lub filozoficznej.',
                  'Zdanie 2: problematyzacja — pokazanie, że zagadnienie nie jest czarno-białe (np. różne postawy bohaterów).',
                  'Zdanie 3: jednoznaczna teza (Twoje stanowisko) zapowiadająca dobór dwóch lektur.'
                ],
                essayUse: 'Zawsze umieszczaj tezę na końcu pierwszego akapitu — ułatwia to sprawdzającemu ocenę.'
              }
            },
            {
              term: 'Krok 2 i 3: Rozwinięcie argumentacyjne (2–3 akapity po 120–150 słów)',
              desc: 'Główna część pracy oparta na dwóch lekturach i dwóch kontekstach.',
              details: {
                summary:
                  'Akapit 1 poświęć lekturze obowiązkowej (np. „Lalka”), a Akapit 2 drugiej lekturze obowiązkowej lub innemu utworowi literackiemu (np. „Zbrodnia i kara”).',
                bullets: [
                  'W każdym akapicie skup się na 1–2 konkretnych scenach, a nie na referowaniu całego życiorysu postaci.',
                  'Wpleć minimum 1 funkcjonalny kontekst w każdy akapit argumentacyjny.',
                  'Używaj łączników logicznych: „Z odmienną perspektywą mamy do czynienia w...”, „Powyższe rozważania dopełnia obraz...”'
                ],
                essayUse: 'Wybór DWÓCH lektur obowiązkowych czytanych w całości to najbezpieczniejsza strategia na 35 pkt.'
              }
            },
            {
              term: 'Krok 4: Zakończenie i synteza (ok. 60–80 słów)',
              desc: 'Podsumowanie dowodzenia bez mechanicznego powtarzania wstępu.',
              details: {
                summary:
                  'Zakończenie zestawia wnioski z obu lektur i wyprowadza uniwersalną puentę.',
                bullets: [
                  'Zestawienie porównawcze: jak pierwszy autor, a jak drugi autor odpowiada na problem z tematu.',
                  'Potwierdzenie tezy: uogólnienie, dlaczego Twoje stanowisko okazało się słuszne.',
                  'Złota zasada: w zakończeniu NIE wprowadzaj nowych utworów ani nowych wątków fabularnych!'
                ],
                essayUse: 'Zadbaj o dojrzały, elegancki ton podsumowania.'
              }
            }
          ]
        }
      ],
      flashcards: [],
      quiz: []
    },
    {
      id: 'kn10-2',
      title: 'Wielka matryca 12 motywów CKE — gotowe pary lektur i sceny',
      badge: 'Matryca CKE',
      intro:
        'Każdy temat wypracowania na maturze podstawowej odwołuje się do jednego z fundamentalnych toposów kultury. Poniższa matryca zawiera 12 przekrojowych motywów CKE wraz z optymalnymi zestawieniami lektur obowiązkowych i konkretnymi scenami dowodowymi.',
      blocks: [
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Strategia doboru lektur: złota zasada bezpieczeństwa',
          items: [
            'Wybieraj ZAWSZE lektury czytane w całości (*Lektury z gwiazdką*) — masz w nich setki precyzyjnych scen.',
            'Zestawiaj utwory na zasadzie podobieństwa (analogii) lub kontrastu postaw.',
            'Nigdy nie pisz ogólnikowo: „Bohater cierpiał”. Wskaż konkret: „Wokulski po podsłuchaniu rozmowy Starskiego z Izabelą w pociągu do Skierniewic przeżywa załamanie nerwowe i rzuca się pod pociąg”.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: '1. Motyw Władzy, Tyranii i Zniewolenia',
              desc: 'Mechanizmy rządzenia, korupcja moralna władcy i walka o wolność.',
              details: {
                summary: 'Idealne pary lektur: „Makbet” Szekspira + „Rok 1984” Orwella (lub „Tango” Mrożka, „Antygona”).',
                bullets: [
                  '„Makbet”: przepowiednia czarownic budzi chorobliwą ambicję; zbrodnia na Dunkanie rodzi spiralę kolejnych morderstw (Banko, rodzina Makdufa); samotność tyrana i paranoja sumienia (duch Banka).',
                  '„Rok 1984”: technologia władzy totalitarnej; niszczenie tożsamości jednostki przez nowomowę, dwójmyślenie i Policję Myśli; Pokój 101 i ostateczne złamanie Winstona Smitha przez O’Briena.',
                  '„Tango”: bezradność intelektualistów wobec prymitywnej siły Edka przejmującego władzę nad domem Stomila.'
                ],
                essayUse: 'Kontekst filozoficzny: Niccolò Machiavelli („Książę”) lub koncepcja banału zła Hannah Arendt.'
              }
            },
            {
              term: '2. Motyw Miłości: szczęście, destrukcja i odkupienie',
              desc: 'Uczucie jako siła napędowa ludzkich czynów lub źródło życiowej katastrofy.',
              details: {
                summary: 'Idealne pary lektur: „Lalka” Prusa + „Zbrodnia i kara” Dostojewskiego (lub „Pan Tadeusz”).',
                bullets: [
                  '„Lalka”: destrukcyjna, romantyczna miłość Wokulskiego do chłodnej arystokratki Izabeli Łęckiej; zderzenie idealizmu z materializmem salonów; próba samobójcza na torach w Skierniewicach.',
                  '„Zbrodnia i kara”: miłość ewangeliczna i ofiarna; Sonia Marmieładowa towarzyszy Raskolnikowowi na katorgę syberyjską, czyta mu przypowieść o Łazarzu i doprowadza go do duchowego odrodzenia.',
                  '„Pan Tadeusz”: szczęśliwa miłość Tadeusza i Zosi kończąca spór rodów Sopliców i Horeszków; uwłaszczenie chłopów jako owoc zgody.'
                ],
                essayUse: 'Kontekst kulturowy: mit o Orfeuszu i Eurydyce lub topos miłości romantycznej (werteryzm).'
              }
            },
            {
              term: '3. Motyw Buntu i Rewolucji',
              desc: 'Sprzeciw jednostki wobec Boga, praw ludzkich, konwenansów lub niesprawiedliwości.',
              details: {
                summary: 'Idealne pary lektur: „Dziady cz. III” Mickiewicza + „Antygona” Sofoklesa (lub „Tango”, „Przedwiośnie”).',
                bullets: [
                  '„Dziady cz. III”: Wielka Improwizacja; Konrad buntuje się przeciwko Bogu w imię miłości do narodu („Nazywam się Milijon — bo za milijony kocham i cierpię katusze”); pycha prometejska.',
                  '„Antygona”: bunt moralny przeciwko edyktowi Kreona zakazującemu pochówku Polinejkesa; prymat praw boskich i sumienia nad prawem stanowionym („Współkochać przyszłam, nie współnienawidzić”).',
                  '„Przedwiośnie”: bunt młodego Cezarego Baryki w ogarniętym rewolucją Baku; rozczarowanie krwawym terrorem bolszewików i marsz na Belweder w finale.'
                ],
                essayUse: 'Kontekst filozoficzny: mit o Prometeuszu lub esej Alberta Camusa „Człowiek zbuntowany”.'
              }
            },
            {
              term: '4. Motyw Winy, Kary, Pokuty i Sumienia',
              desc: 'Moralne konsekwencje przekroczenia norm, udręka sumienia i możliwość zadośćuczynienia.',
              details: {
                summary: 'Idealne pary lektur: „Zbrodnia i kara” Dostojewskiego + „Pan Tadeusz” Mickiewicza (lub „Makbet”).',
                bullets: [
                  '„Zbrodnia i kara”: teoria Raskolnikowa o podziale ludzi na „wszy” i „nadludzi”; zabójstwo lichwiarki Alony i Lizawiety; koszmar gorączki i paranoi; psychologiczna gra z Porfirym Pietrowiczem i odkupienie na katordze.',
                  '„Pan Tadeusz”: Jacek Soplica po zabójstwie Stolnika Horeszki pokutuje całe życie jako pokorny emisariusz Ksiądz Robak; ratuje życie Hrabiemu i Tadeuszowi; spowiedź na łożu śmierci i przebaczenie Gerwazego.',
                  '„Makbet”: zbrodnia niszczy psychikę; lunatykowanie i obłęd Lady Makbet próbującej zmyć wyimaginowaną krew z rąk.'
                ],
                essayUse: 'Kontekst filozoficzny: imperatyw kategoryczny Immanuela Kanta lub chrześcijańska teologia pokuty.'
              }
            },
            {
              term: '5. Motyw Ojczyzny, Patriotyzmu i Społeczeństwa Polskiego',
              desc: 'Ocena postaw narodowych, wady sarmackie, mesjanizm i walka o niepodległość.',
              details: {
                summary: 'Idealne pary lektur: „Wesele” Wyspiańskiego + „Dziady cz. III” Mickiewicza (lub „Pan Tadeusz”, „Przedwiośnie”).',
                bullets: [
                  '„Wesele”: chata bronowicka jako mikrokosmos narodu; zderzenie dekadenckiej inteligencji z porywczymi chłopami; zjawy obnażające kompleksy; chocholi taniec i utrata Złotego Rogu przez Jaśka.',
                  '„Dziady cz. III”: Salon Warszawski — towarzystwo stolikowe (ugodowa, kosmopolityczna arystokracja) vs towarzystwo przy drzwiach (młodzi patrioci); synteza Wysockiego: „Nasz naród jak lawa...”.',
                  '„Pan Tadeusz”: Soplicowo jako ostoja tradycji, wiary i patriotyzmu; Koncert Jankiela przypominający historię Rzeczypospolitej od Konstytucji 3 Maja po rzeź Pragi.'
                ],
                essayUse: 'Kontekst historyczny: powstanie listopadowe 1830 r., powstanie styczniowe 1863 r. lub malarstwo Jana Matejki.'
              }
            },
            {
              term: '6. Motyw Cierpienia, Przeznaczenia i Sytuacji Granicznej',
              desc: 'Człowiek w obliczu cierpienia niezawinionego, epidemii, Zagłady lub wyroków losu.',
              details: {
                summary: 'Idealne pary lektur: „Dżuma” Camusa + „Księga Hioba” (lub „Zdążyć przed Panem Bogiem”, „Inny świat”).',
                bullets: [
                  '„Dżuma”: epidemia dżumy w Oranie jako metafora wszelkiego zła i totalitaryzmu; postawa doktora Rieux (bohaterstwo bez patosu, mrówcza praca lekarska); solidarność formacji sanitarnych Tarrou.',
                  '„Księga Hioba”: Hiob traci majątek, dzieci i zdrowie, lecz zachowuje wierność Bogu („Bóg dał, Bóg wziął, niech imię Pańskie będzie błogosławione”); przezwyciężenie rozpaczy i nagroda za wierność.',
                  '„Zdążyć przed Panem Bogiem”: Marek Edelman w getcie warszawskim; walka o godny wybór sposobu umierania; praca kardiochirurga jako wyścig ze śmiercią.'
                ],
                essayUse: 'Kontekst filozoficzny: egzystencjalizm Alberta Camusa lub personalizm chrześcijański.'
              }
            }
          ]
        }
      ],
      flashcards: [],
      quiz: []
    },
    {
      id: 'kn10-3',
      title: 'Bank funkcjonalnych kontekstów CKE — jak zdobyć pełną pulę punktów',
      badge: 'Kompetencje literackie',
      intro:
        'W kryteriach CKE w Formule 2023 uczeń musi przywołać co najmniej dwa funkcjonalne konteksty. Kontekst to nie jest ozdobnik ani rzucona mimochodem data — to perspektywa badawcza (historyczna, filozoficzna, biograficzna, kulturowa), która realnie pogłębia analizę lektury.',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: 'Czym jest kontekst niefunkcjonalny (błąd utraty punktów!)?',
          items: [
            'Błędny przykład: „Jan Kochanowski żył w epoce renesansu, która narodziła się we Włoszech”. Zdanie jest prawdziwe, ale NIE MA ŻADNEGO ZWIĄZKU z cierpieniem ojca po stracie córki w Trenach!',
            'Poprawny przykład funkcjonalny: „Kryzys światopoglądowy Kochanowskiego w Trenach wynika z konfrontacji z renesansowym humanizmem i filozofią stoicką Cycerona, która nakazywała obojętność wobec ciosów fortuny. Kochanowski w Trenie IX i XI z goryczą odkrywa, że wieloletnia mądrość filozoficzna nie chroni człowieka przed rozpaczą po śmierci własnego dziecka”.'
          ]
        },
        {
          type: 'callout',
          variant: 'emerald',
          title: '6 typów kontekstów honorowanych przez CKE',
          items: [
            '1. Historyczny: wydarzenia polityczne, wojny, rewolucje, represje zaborcze determinujące losy bohaterów.',
            '2. Biograficzny: autentyczne przeżycia pisarza rzucające światło na motywacje twórcze (zesłanie, choroba, śmierć bliskich).',
            '3. Filozoficzny: doktryny etyczne i ontologiczne (stoicyzm, egzystencjalizm, utylitaryzm, mesjanizm).',
            '4. Literacki: toposy, archetypy, motywy wędrowne lub nawiązania intertekstualne do innych utworów.',
            '5. Mitologiczny i Biblijny: odwołania do postaci mitycznych (Prometeusz, Dedal, Ikar) i ksiąg Pisma Świętego (Hiob, Kohelet, Apokalipsa).',
            '6. Kulturowy i Społeczny: obyczaje epoki, dzieła malarskie (Matejko, Chełmoński, Gierymski), struktura klasowa społeczeństwa.'
          ]
        },
        {
          type: 'quote',
          label: 'Wzorcowy akapit z kontekstem filozoficznym i historycznym (~110 słów)',
          text:
            '„Postawa doktora Bernarda Rieux w „Dżumie” Alberta Camusa stanowi doskonałą realizację założeń powojennego egzystencjalizmu laickiego. Bohater działa w świecie pozbawionym boskiej opieki, gdzie zaraza uderza ślepo i bezsensownie, czego kulminacją jest wstrząsająca scena agonii niewinnego syna sędziego Othona. Rieux odrzuca teologiczne wyjaśnienia ojca Paneloux, uznające epidemię za karę za grzechy. Wobec absurdu cierpienia jedyną godną postawą człowieka staje się czynna solidarność i niezgoda na zło. Kontekstem historycznym powieści jest doświadczenie II wojny światowej i okupacji hitlerowskiej — walka z bakcylem dżumy to alegoria francuskiego Ruchu Oporu (Résistance), którego aktywnym członkiem był sam Albert Camus”.'
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Gotowe formuły wprowadzania kontekstu',
              desc: 'Zwroty stylistyczne gwarantujące uznanie kontekstu za funkcjonalny.',
              details: {
                summary: 'Stosuj profesjonalne spójniki i sformułowania wprowadzające interpretację.',
                bullets: [
                  '„Kluczem do zrozumienia postawy bohatera jest kontekst historyczny...”',
                  '„Warto odczytywać ten utwór przez pryzmat filozofii [np. egzystencjalnej / stoickiej], która zakładała, że...”',
                  '„Doświadczenie biograficzne autora, który osobiście przeżył [np. zesłanie / uwięzienie], znalazło bezpośrednie odzwierciedlenie w kreacji...”',
                  '„Scena ta stanowi wyraźną aluzję literacką do toposu [np. homo viator / theatrum mundi]...”'
                ],
                essayUse: 'Zadbaj, by kontekst logicznie wynikał z analizy sceny, a nie był dopisany na siłę na końcu.'
              }
            }
          ]
        }
      ],
      flashcards: [],
      quiz: []
    },
    {
      id: 'kn10-4',
      title: 'Tarcza antykardynalna — 20 najgroźniejszych pułapek błędu kardynalnego',
      badge: 'Zero błędu kardynalnego',
      intro:
        'Błąd kardynalny to najgroźniejsza pułapka maturalna. Zgodnie z wytycznymi CKE jest to błąd rzeczowy polegający na całkowitej falsyfikacji fabuły, losów bohatera lub wymowy ideowej lektury obowiązkowej czytanej w całości. Jeden taki błąd przekreśla całą pracę i daje 0/35 punktów!',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: 'Żelazna reguła ratunkowa CKE: Zasada Bezpieczeństwa Opisowego',
          items: [
            'Jeśli nie masz 100% pewności co do nazwiska postaci drugoplanowej, nazwy wsi, miejscowości czy daty — NIE STRZELAJ!',
            'Napisz bezpiecznie opisowo: zamiast pisać błędnie „Protazy zabił Stolnika”, napisz: „Jacek Soplica zabił Stolnika, do którego majątku prawa rościł sobie mściwy Klucznik”.',
            'Zwykła pomyłka w dacie lub w nazwisku pobocznym w kontekście to zwykły błąd rzeczowy (-1 pkt w kompetencjach). Błędem kardynalnym jest wyłącznie odwrócenie sensu kluczowego dzieła z listy lektur w całości!'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Katalog 20 żelaznych faktów chroniących przed błędem kardynalnym',
              desc: 'Zapamiętaj te fakty — to na nich uczniowie najczęściej tracą 35 punktów.',
              details: {
                summary: 'Zestawienie 20 krytycznych punktów fabularnych z lektur obowiązkowych:',
                bullets: [
                  '1. Antygona: NIE została ułaskawiona przez Kreona za życia — powiesiła się w grobowcu na chuście przed przybyciem posłańców.',
                  '2. Makbet: Lady Makbet NIE zginęła w bitwie — popadła w obłęd i popełniła samobójstwo w zamku.',
                  '3. Skąpiec: Harpagon NIE zmienił się pod wpływem miłości dzieci — do końca pozostał skąpcem tulącym odzyskaną szkatułkę.',
                  '4. Dziady cz. III: Konrad to NIE Konrad Wallenrod ani Kordian; w Wielkiej Improwizacji NIE nazwał Boga carem — zemdlał, a słowo dopowiedział diabeł.',
                  '5. Kordian: Kordian NIE zabił cara — zemdlał na progu carskiej sypialni pokonany przez Strach i Imaginację.',
                  '6. Pan Tadeusz: Jacek Soplica NIE był rosyjskim szpiegiem; zabił Stolnika w afekcie po odrzuceniu zaręczyn czarną polewką, a potem pokutował jako Ksiądz Robak.',
                  '7. Pan Tadeusz: Gerwazy to mściwy Klucznik Horeszków z scyzorykiem; Protazy to Woźny Sopliców.',
                  '8. Lalka: Wokulski NIE ożenił się z Izabelą; zerwał zaręczyny po podsłuchaniu jej flirtu ze Starskim w pociągu i chciał rzucić się pod pociąg w Skierniewicach.',
                  '9. Lalka: Rzecki NIE był wrogiem Wokulskiego — to jego najwierniejszy przyjaciel, stary subiekt i bonapartysta.',
                  '10. Zbrodnia i kara: Raskolnikow zabił lichwiarkę Alonę i przypadkowo jej siostrę Lizawietę; zabił z pychy filozoficznej, a nie dla pieniędzy na ślub z Sonią.',
                  '11. Zbrodnia i kara: Raskolnikow NIE został skazany na śmierć — otrzymał 8 lat katorgi na Syberii.',
                  '12. Wesele: Złoty Róg zgubił Jasiek schylając się po czapkę z pawich piór, a NIE Gospodarz ani Pan Młody.',
                  '13. Wesele: Akcja toczy się w podkrakowskiej wsi Bronowice na weselu poety Lucjana Rydla z Jadwigą Mikołajczykówną, a NIE w Warszawie.',
                  '14. Przedwiośnie: Szklane domy NIE istniały naprawdę — to była utopijna baśń opowiedziana przez umierającego Seweryna Barykę.',
                  '15. Przedwiośnie: Cezary Baryka w finale NIE jest bolszewikiem strzelającym do Polaków — idzie na czele manifestacji robotniczej w polskim mundurze legionisty, ale idzie osobno.',
                  '16. Dżuma: Narratorem NIE jest Tarrou ani Grand — kronikę od początku spisuje doktor Bernard Rieux, co ujawnia w ostatnim rozdziale.',
                  '17. Dżuma: Dżuma nie została zniszczona na zawsze — Rieux ostrzega, że bakcyl dżumy nigdy nie umiera i może powrócić.',
                  '18. Rok 1984: Winston Smith NIE obalił Wielkiego Brata ani nie uciekł z Julią — został złamany torturami w Pokoju 101, zdradził Julię i pokochał Wielkiego Brata.',
                  '19. Tango: Artur NIE zabił Edka — to Edek zabił Artura ciosem w kark i zatańczył tango La Cumparsita z Eugeniuszem.',
                  '20. Zdążyć przed Panem Bogiem: Powstanie w getcie NIE miało militarnych szans na zwycięstwo — celem walczących był godny wybór sposobu umierania.'
                ],
                essayUse: 'Powtórz tę listę przed samym wejściem na salę egzaminacyjną — to Twoja tarcza bezpieczeństwa.'
              }
            }
          ]
        }
      ],
      flashcards: [],
      quiz: []
    },
    {
      id: 'kn10-5',
      title: 'Wzorcowe konspekty rozprawek na autentycznych tematach CKE',
      badge: 'Wzorce maturalne',
      intro:
        'Najlepszym sposobem na opanowanie kompozycji wypracowania jest analiza gotowych, wzorcowych planów dekonstruujących autentyczne tematy egzaminacyjne Formuły 2023.',
      blocks: [
        {
          type: 'callout',
          variant: 'blue',
          title: '10-punktowa checklista autokontroli przed oddaniem arkusza',
          items: [
            '1. Czy praca liczy z pewnością ponad 300 słów? (policz linijki: standardowo 1 linijka = ok. 8–10 słów, musisz mieć min. 35–40 linijek tekstu).',
            '2. Czy w pierwszym akapicie postawiłeś jasną, jednoznaczną tezę?',
            '3. Czy odwołałeś się do lektury obowiązkowej i przeanalizowałeś w niej konkretne sceny?',
            '4. Czy drugi utwór to również pełnoprawne dzieło literackie?',
            '5. Czy w pracy znalazły się minimum 2 wyraźne, funkcjonalne konteksty (historyczny, filozoficzny itp.)?',
            '6. Czy każdy akapit rozwinięcia rozpoczyna się od tezy cząstkowej, a kończy mini-wnioskiem?',
            '7. Czy uniknąłeś streszczania całych biografii bohaterów?',
            '8. Czy sprawdziłeś pisownię nazwisk głównych postaci (np. Wokulski, Raskolnikow, Kordian, Edek)?',
            '9. Czy praca posiada czytelny podział graficzny na akapity (wcięcie akapitowe)?',
            '10. Czy w zakończeniu powstrzymałeś się przed wprowadzaniem nowych lektur i wątków?'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Konspekt 1: Bunt jako siła budująca czy niszcząca?',
              desc: 'Temat problemowy o naturze i konsekwencjach buntu jednostki.',
              details: {
                summary:
                  'Teza: Bunt jest nieodłącznym elementem walki o wolność i godność, lecz pozbawiony dojrzałej idei lub oparty na pysze staje się źródłem destrukcji jednostki i porządku społecznego.',
                bullets: [
                  'Wstęp: definicja buntu; odwołanie do prometejskości i koncepcji człowieka zbuntowanego Alberta Camusa.',
                  'Akapit 1 (Lektura obowiązkowa — „Antygona” Sofoklesa): bunt w imię wyższych praw moralnych i miłości siostrzanej; konflikt tragiczny z prawem Kreona; heroizm płacący najwyższą cenę życia, lecz ocalający godność.',
                  'Akapit 2 (Druga lektura — „Tango” Sławomira Mrożka): groteskowy bunt Artura przeciw brakowi zasad; próba narzucenia ładu przemocą kończąca się śmiercią z rąk prymitywnego Edka; bunt niedojrzały torujący drogę brutalizmowi.',
                  'Konteksty: filozoficzny (egzystencjalizm Camusa) oraz historyczny (rewolucje XX wieku pożerające własne dzieci).',
                  'Zakończenie: synteza — bunt konstruktywny opiera się na miłości i wartościach (Antygona), bunt destrukcyjny na żądzy władzy i pustej formie (Artur).'
                ],
                essayUse: 'Uniwersalny schemat do wszelkich tematów o sprzeciwie, wolności i rewolucji.'
              }
            },
            {
              term: 'Konspekt 2: Wybory moralne człowieka w sytuacjach granicznych',
              desc: 'Temat o zachowaniu człowieczeństwa w obliczu nieludzkich prób.',
              details: {
                summary:
                  'Teza: W sytuacjach granicznych człowiek staje przed koniecznością przedefiniowania hierarchii wartości; zachowanie moralności wymaga heroicznego wysiłku i solidarności z innymi.',
                bullets: [
                  'Wstęp: definicja sytuacji granicznej Karla Jaspersa (wojna, zaraza, zbrodnia, cierpienie).',
                  'Akapit 1 (Lektura obowiązkowa — „Dżuma” Camusa): dr Bernard Rieux wobec epidemii; wybór cichej pracy sanitarnej i pomocy cierpiącym bez oczekiwania nagrody boskiej; solidarność jako jedyne lekarstwo na absurd zła.',
                  'Akapit 2 (Druga lektura — „Zbrodnia i kara” Dostojewskiego): Raskolnikow po morderstwie lichwiarki; upadek teorii o nadludziach; wybór drogi przyznania się do winy dzięki ewangelicznej miłości Soni Marmieładowej.',
                  'Konteksty: filozoficzny (etyka odpowiedzialności i personalizm) oraz biblijny (Księga Hioba jako archetyp cierpienia).',
                  'Zakończenie: człowieczeństwo weryfikuje się nie w teorii, lecz w konkretnym czynie miłości i wierności sumieniu.'
                ],
                essayUse: 'Wzorzec do tematów o wojnie, cierpieniu, zbrodni i godności.'
              }
            }
          ]
        }
      ],
      flashcards: [],
      quiz: []
    }
  ],
  flashcards: [
    {
      id: 'kf10-1',
      front: 'Jaki jest bezwzględny limit minimalny słów w wypracowaniu maturalnym CKE Formuła 2023?',
      back: 'Minimum 300 słów. Praca licząca 299 słów lub mniej otrzymuje 0 punktów w kryterium formalnym (0/35 pkt za całe wypracowanie!).',
      hint: 'Pamiętaj: celuj bezpiecznie w 450–650 słów.',
      category: 'wypracowanie'
    },
    {
      id: 'kf10-2',
      front: 'Czym jest błąd kardynalny według oficjalnych wytycznych CKE?',
      back: 'To rażący błąd rzeczowy polegający na całkowitej falsyfikacji fabuły, losów bohatera lub wymowy ideowej lektury obowiązkowej czytanej w całości. Skutek: 0/35 pkt!',
      hint: 'Dotyczy wyłącznie lektur z gwiazdką omawianych w całości.',
      category: 'wypracowanie'
    },
    {
      id: 'kf10-3',
      front: 'Co oznacza reguła TSACW w budowie akapitu argumentacyjnego?',
      back: 'T – Teza cząstkowa, S – Scena z lektury, A – Analiza sensu, C – Context pogłębiający, W – Wniosek cząstkowy.',
      hint: 'Struktura profesjonalnego akapitu.',
      category: 'wypracowanie'
    },
    {
      id: 'kf10-4',
      front: 'Jakie lektury obowiązkowe najlepiej zestawić przy temacie o żądzy władzy i tyranii?',
      back: '„Makbet” Williama Szekspira (zbrodnia na Dunkanie, paranoja tyrana) oraz „Rok 1984” George’a Orwella (kontrola totalitarna, Pokój 101).',
      hint: 'Jeden dramat elżbietański, jedna antyutopia XX wieku.',
      category: 'motyw'
    },
    {
      id: 'kf10-5',
      front: 'Jakie dwie lektury obowiązkowe idealnie ilustrują motyw winy, kary i odkupienia?',
      back: '„Zbrodnia i kara” Dostojewskiego (morderstwo lichwiarki, katorga i nawrócenie) oraz „Pan Tadeusz” Mickiewicza (spowiedź i pokuta Jacka Soplicy).',
      hint: 'Raskolnikow i Ksiądz Robak.',
      category: 'motyw'
    },
    {
      id: 'kf10-6',
      front: 'Dlaczego nie wolno twierdzić, że Antygona została ułaskawiona przez Kreona i przeżyła?',
      back: 'Bo to błąd kardynalny! Kreon spóźnił się z ułaskawieniem — Antygona powiesiła się wcześniej na chuście w grobowcu.',
      hint: 'Tragiczny finał sztuki Sofoklesa.',
      category: 'lektura'
    },
    {
      id: 'kf10-7',
      front: 'Jaki błąd kardynalny najczęściej popełniają uczniowie przy Wielkiej Improwizacji w „Dziadach cz. III”?',
      back: 'Twierdzą, że Konrad nazwał Boga carem. W rzeczywistości Konrad zemdlał, a słowo „carem” dopowiedział za niego szatan.',
      hint: 'Bluźnierstwo urwane w pół słowa.',
      category: 'lektura'
    },
    {
      id: 'kf10-8',
      front: 'Czy Kordian w dramacie Słowackiego zabił cara Mikołaja I?',
      back: 'NIE! To błąd kardynalny. Kordian padł zemdlony na progu sypialni cara, pokonany przez własną psychikę (Strach i Imaginację).',
      hint: 'Niemoc czynu romantycznego marzyciela.',
      category: 'lektura'
    },
    {
      id: 'kf10-9',
      front: 'Dlaczego Jacek Soplica zabił Stolnika Horeszkę w „Panu Tadeuszu”?',
      back: 'Zabił go w afekcie i gniewie po odrzuceniu zaręczyn z Ewą (czarna polewka), korzystając z zamieszania podczas najazdu Moskali. Nie był rosyjskim szpiegiem!',
      hint: 'Zbrodnia z dumy i pokuta jako Ksiądz Robak.',
      category: 'lektura'
    },
    {
      id: 'kf10-10',
      front: 'Dlaczego Wokulski w „Lalce” próbował popełnić samobójstwo w Skierniewicach?',
      back: 'W pociągu podsłuchał rozmowę po angielsku Izabeli ze Starskim i zrozumiał, że Łęcka jest nielojalna i bawi się jego uczuciami.',
      hint: 'Scena z blaszką Geista i pociągiem.',
      category: 'lektura'
    },
    {
      id: 'kf10-11',
      front: 'Kto i w jakich okolicznościach zgubił Złoty Róg w „Weselu” Wyspiańskiego?',
      back: 'Jasiek zgubił Złoty Róg, gdy schylał się po czapkę z pawich piór (próżność i przywiązanie do błyskotek przeważyły nad sprawą narodową).',
      hint: '„Miałeś, chamie, złoty róg...”.',
      category: 'lektura'
    },
    {
      id: 'kf10-12',
      front: 'Czy szklane domy w „Przedwiośniu” Żeromskiego istniały naprawdę?',
      back: 'NIE! Była to utopijna baśń opowiedziana przez schorowanego Seweryna Barykę, by skłonić syna Cezarego do powrotu do odrodzonej Polski.',
      hint: 'Mit cywilizacyjny vs błotnista rzeczywistość.',
      category: 'lektura'
    },
    {
      id: 'kf10-13',
      front: 'Kto jest faktycznym narratorem powieści „Dżuma” Alberta Camusa?',
      back: 'Doktor Bernard Rieux — ujawnia swoją tożsamość dopiero w ostatnim rozdziale kroniki, by zachować obiektywizm świadka wydarzeń.',
      hint: 'Lekarz z poczucia obowiązku.',
      category: 'lektura'
    },
    {
      id: 'kf10-14',
      front: 'Jak kończą się losy Winstona Smitha w powieści „Rok 1984” George’a Orwella?',
      back: 'Winston zostaje złamany torturami w Pokoju 101 (szczury), zdradza Julię, wyrzeka się wolności myśli i na końcu szczerze kocha Wielkiego Brata.',
      hint: 'Całkowity triumf totalitarnej inżynierii dusz.',
      category: 'lektura'
    },
    {
      id: 'kf10-15',
      front: 'Czym różni się kontekst funkcjonalny od niefunkcjonalnego w wypracowaniu?',
      back: 'Funkcjonalny bezpośrednio pogłębia i wyjaśnia sens zachowania bohatera/utworu. Niefunkcjonalny to luźna ciekawostka lub data bez związku z argumentem.',
      hint: 'Pogłębienie myśli vs ozdobnik.',
      category: 'kontekst'
    },
    {
      id: 'kf10-16',
      front: 'Wymień 4 najpopularniejsze rodzaje kontekstów CKE.',
      back: '1. Historyczny, 2. Filozoficzny, 3. Biograficzny, 4. Literacki / Mitologiczny / Biblijny.',
      hint: 'Dzieje, myśli, życie twórcy, toposy.',
      category: 'kontekst'
    },
    {
      id: 'kf10-17',
      front: 'Jakie lektury obowiązkowe najlepiej zestawić przy motywie buntu?',
      back: '„Antygona” Sofoklesa (bunt w imię praw boskich) oraz „Dziady cz. III” Mickiewicza (bunt Konrada przeciw milczeniu Boga w Wielkiej Improwizacji).',
      hint: 'Bunt moralny i prometejski.',
      category: 'motyw'
    },
    {
      id: 'kf10-18',
      front: 'Jakie utwory najlepiej wybrać do motywu społeczeństwa i narodu polskiego?',
      back: '„Wesele” Stanisława Wyspiańskiego (chata bronowicka, chocholi taniec) oraz „Dziady cz. III” (Salon Warszawski, metafora lawy).',
      hint: 'Diagnoza wad narodowych i mit uśpienia.',
      category: 'motyw'
    },
    {
      id: 'kf10-19',
      front: 'Na czym polega zasada bezpieczeństwa opisowego przy braku pewności co do nazwiska?',
      back: 'Zamiast strzelać i ryzykować błąd kardynalny, opisz postać bezimiennie przez jej funkcję lub rolę w scenie (np. „przyjaciel bohatera”, „stary subiekt”).',
      hint: 'Nie zmyślaj nazwisk — opisz funkcję!',
      category: 'wypracowanie'
    },
    {
      id: 'kf10-20',
      front: 'Czego pod żadnym pozorem NIE wolno robić w zakończeniu wypracowania maturalnego?',
      back: 'Nie wolno wprowadzać nowych lektur, nowych wątków fabularnych ani zmieniać postawionej we wstępie tezy. Zakończenie ma wyłącznie syntetyzować wnioski.',
      hint: 'Podsumowanie dowodzenia, nie nowy rozdział.',
      category: 'wypracowanie'
    },
    { id: 'kf10-21', front: 'Z jakich dokładnie elementów musi składać się wstęp wypracowania maturalnego CKE?', back: '1) Krótkie wprowadzenie w problem z tematu (2–3 zdania, bez lania wody typu „Od zarania dziejów...”); 2) Wyraźne, jednoznaczne sformułowanie tezy lub hipotezy odpowiadającej na polecenie tematu; 3) Opcjonalna zapowiedź dobranych lektur.', hint: 'Problem → jasna teza → (zapowiedź lektur).', category: 'wypracowanie' },
    { id: 'kf10-22', front: 'Ile co najmniej lektur i kontekstów wymaga wypracowanie maturalne (Formuła 2023)?', back: 'Minimum 2 utwory literackie: co najmniej 1 lektura obowiązkowa wskazana w podstawie programowej (znajomość w całości lub we fragmencie zgodnie z wymogiem tematu) + 1 inny utwór literacki (może być druga lektura obowiązkowa) oraz minimum 2 funkcjonalne konteksty (np. historyczny, filozoficzny, biograficzny, kulturowy).', hint: 'Min. 2 utwory (w tym min. 1 lektura obowiązkowa) + min. 2 konteksty.', category: 'wypracowanie' },
    { id: 'kf10-23', front: 'Dlaczego nie wolno mylić pojęć „argumentacja” i „streszczenie” w akapicie rozwinięcia?', back: 'Streszczenie opisuje tylko „co się stało” (fabułę), za co grozi niska punktacja za kompetencje literackie; argumentacja wyjaśnia „DLACZEGO i W JAKI SPOSÓB” dana scena/postawa potwierdza tezę (reguła TSACW: Teza cząstkowa → Sytuacja → Analiza → Context → Wniosek).', hint: 'Analiza sensu sceny zamiast opowiadania fabuły.', category: 'wypracowanie' },
    { id: 'kf10-24', front: 'Jakie dwie lektury najlepiej dobrać do tematu: „Czy wybujała ambicja i żądza władzy zawsze niszczą człowieka?”', back: '„Makbet” Williama Szekspira (spirala zbrodni, paranoja i upadek etyczny po zabójstwie Dunkana) + „Antygona” Sofoklesa (pycha władzy Kreona prowadząca do śmierci bliskich) lub „Lalka” (porażka ambicji w zderzeniu ze światem).', hint: 'Makbet + Antygona (Kreon).', category: 'motyw' },
    { id: 'kf10-25', front: 'Jakie lektury obowiązkowe najlepiej zestawić do motywu winy, pokuty i wewnętrznej przemiany?', back: '„Pan Tadeusz” Adama Mickiewicza (Jacek Soplica → Ksiądz Robak), „Potop” Henryka Sienkiewicza (Andrzej Kmicic → Babinicz) oraz „Zbrodnia i kara” Fiodora Dostojewskiego (Raskolnikow na katordze z Sonią).', hint: 'Jacek Soplica, Kmicic, Raskolnikow.', category: 'motyw' },
    { id: 'kf10-26', front: 'Jakie utwory najlepiej wykorzystać w temacie o miłości niespełnionej, niszczącej lub poświęceniu z miłości?', back: '„Lalka” B. Prusa (ślepa, destrukcyjna miłość Wokulskiego do Izabeli), „Kamizelka” B. Prusa (ciche poświęcenie małżonków) oraz „Dziady cz. IV”/„Pan Tadeusz” (historia Jacka Soplicy i Ewy Horeszkówny) lub „Wesele” (zderzenie stanów).', hint: 'Wokulski, małżonkowie z Kamizelki, Jacek Soplica.', category: 'motyw' },
    { id: 'kf10-27', front: 'Czym jest kontekst funkcjonalny (punktowany) w odróżnieniu od kontekstu pozornego (0 pkt)?', back: 'Kontekst funkcjonalny realnie pogłębia interpretację lektury i pomaga udowodnić tezę (np. filozofia Schopenhauera tłumacząca pesymizm Tetmajera lub realia stalinizmu wyjaśniające „Inny świat”); kontekst pozorny to luźne wtrącenie daty lub tytułu bez związku z analizą.', hint: 'Pogłębia argumentację, a nie zdobi akapit.', category: 'wypracowanie' },
    { id: 'kf10-28', front: 'Jakie są 3 najczęstsze błędy kardynalne w lekturach XX wieku („Przedwiośnie”, „Ferdydurke”, „Rok 1984”, „Dżuma”)?', back: '1) Twierdzenie, że w Polsce istniały prawdziwe szklane domy (to tylko mit Seweryna); 2) Mylenie narracji Winstona z happy endem (Winston zostaje złamany i kocha Wielkiego Brata); 3) Pisanie, że Tarrou przeżył dżumę (Tarrou umiera tuż przed końcem epidemii, przeżywa Rieux).', hint: 'Mit szklanych domów, klęska Winstona, śmierć Tarrou.', category: 'lektura' },
    { id: 'kf10-29', front: 'Jaką strategię zastosować na maturze, gdy nie pamiętasz dokładnie imienia postaci epizodycznej lub szczegółu daty?', back: 'Stosuj „zasadę bezpieczeństwa opisowego”: zamiast zgadywać nazwisko czy rok (ryzyko błędu rzeczowego/kardynalnego!), użyj pewnego określenia funkcji (np. „sędzia śledczy w «Zbrodni i karze»”, „przyjaciel Rieux organizujący oddziały sanitarne”, „w pierwszej połowie XIX wieku”).', hint: 'Nie zgaduj detalu — opisz pewną funkcję lub rolę.', category: 'wypracowanie' },
    { id: 'kf10-30', front: 'Ile punktów łącznie można zdobyć za wypracowanie maturalne (Formuła 2023) i za co odejmuje się najwięcej?', back: 'Maksymalnie 35 pkt: spełnienie warunków formalnych i kompetencje literackie/kulturowe (do 16 pkt), kompozycja i spójność (do 7 pkt), język, styl i ortografia/interpunkcja (do 12 pkt). Błąd kardynalny zeruje całe wypracowanie (0/35 pkt)!', hint: '35 pkt max; błąd kardynalny = 0 pkt za całość.', category: 'wypracowanie' }
  ],
  quiz: [
    {
      id: "kq10-1",
      q: "Jaki jest bezwzględny minimalny próg liczby słów w wypracowaniu maturalnym CKE Formuła 2023?",
      options: [
        "Dokładnie 300 słów",
        "Dokładnie 250 słów",
        "Dokładnie 400 słów",
        "Dokładnie 500 słów"
      ],
      correct: 0,
      explanation: "Wypracowanie musi liczyć co najmniej 300 słów. Praca mająca choćby 299 słów jest automatycznie oceniana na 0 punktów w kryterium formalnym, co zeruje całe wypracowanie (0/35 pkt).",
      whyWrong: {
        1: "250 słów obowiązywało w dawnej Formule 2015, w Formule 2023 limit wynosi min. 300 słów.",
        2: "400 słów to dobra, bezpieczna objętość zalecana przez nauczycieli, ale progiem formalnym jest 300 słów.",
        3: "500 słów to optymalna objętość dla dojrzałej pracy, a nie próg formalny."
      },
      examTip: "Zawsze policz orientacyjnie słowa pod koniec pisania (np. liczba linii pomnożona przez średnią liczbę słów w wierszu)."
    },
    {
      id: "kq10-2",
      q: "Błąd kardynalny w wypracowaniu maturalnym skutkuje:",
      options: [
        "Potrąceniem 5 punktów w kryterium poprawności merytorycznej",
        "Koniecznością pisania egzaminu poprawkowego w sierpniu",
        "Obniżeniem oceny z języka i kompozycji o połowę",
        "Przyznaniem 0 punktów za całe wypracowanie (0/35 pkt)"
      ],
      correct: 3,
      explanation: "Zgodnie z zasadami oceniania CKE popełnienie błędu kardynalnego oznacza całkowite wyzerowanie wypracowania (0/35 punktów), co drastycznie utrudnia lub uniemożliwia zdanie matury.",
      whyWrong: {
        0: "Potrącenie 1–2 punktów dotyczy zwykłego błędu rzeczowego, a nie kardynalnego.",
        1: "Wynik poniżej 30% z całego arkusza obliguje do poprawki, ale sam błąd kardynalny jest regułą punktową CKE.",
        2: "Przy błędzie kardynalnym nie ocenia się kompozycji ani języka — cała praca otrzymuje 0 pkt."
      },
      examTip: "Błąd kardynalny dotyczy wyłącznie lektur obowiązkowych sprawdzanych w całości — nie można go popełnić w lekturze uzupełniającej!"
    },
    {
      id: "kq10-3",
      q: "Które z poniższych zdań zawiera błąd kardynalny?",
      options: [
        "Antygona została zamurowana w grobowcu i doczekała tam ułaskawienia przez skruszonego Kreona.",
        "Wokulski w młodości brał udział w powstaniu styczniowym i został zesłany na Syberię do Irkucka.",
        "Raskolnikow ukrył zrabowane kosztowności pod przypadkowym kamieniem na jednym z petersburskich podwórek.",
        "Kordian na szczycie Mont Blanc porzuca myśli samobójcze i ogłasza hasło winkelriedyzmu."
      ],
      correct: 0,
      explanation: "Twierdzenie, że Antygona doczekała ułaskawienia, całkowicie fałszuje tragiczny sens sztuki — bohaterka powiesiła się w grobowcu na chuście, zanim Kreon zdążył ją uwolnić.",
      whyWrong: {
        1: "To prawda — Wokulski brał udział w powstaniu styczniowym i był na zesłaniu.",
        2: "To fakt fabularny z powieści Dostojewskiego.",
        3: "To kluczowy moment monologu Kordiana na szczycie Mont Blanc."
      },
      examTip: "Pamiętaj o śmierci Antygony — jej samobójstwo pociąga za sobą natychmiastową śmierć Hajmona i Eurydyki!"
    },
    {
      id: "kq10-4",
      q: "W modelu budowy akapitu argumentacyjnego TSACW litera „C” oznacza:",
      options: [
        "Cytat dosłowny z tekstu lektury",
        "Czasownik operacyjny użyty w poleceniu",
        "Ciekawostkę o życiu prywatnym pisarza",
        "Context pogłębiający (np. historyczny, filozoficzny lub biograficzny)"
      ],
      correct: 3,
      explanation: "Litera „C” w strukturze TSACW oznacza Context — powiązanie omawianej sceny z wiedzą o epoce, filozofii czy zjawiskach kulturowych, co zapewnia punkty w kryterium CKE.",
      whyWrong: {
        0: "Na maturze podstawowej nie wymaga się cytatów z pamięci — wystarczy analiza sceny.",
        1: "Czasowniki operacyjne dotyczą pytań w teście, a nie struktury akapitu wypracowania.",
        2: "Ciekawostki prywatne bez związku z problemem są uznawane za kontekst niefunkcjonalny."
      },
      examTip: "Kontekst musi logicznie wynikać z analizy sceny, a nie stanowić doczepionego na siłę zdania."
    },
    {
      id: "kq10-5",
      q: "Który z poniższych przykładów stanowi w pełni FUNKCJONALNY kontekst filozoficzny w wypracowaniu o „Dżumie” Camusa?",
      options: [
        "Albert Camus urodził się w Algierii i w 1957 roku otrzymał literacką Nagrodę Nobla.",
        "W starożytności filozof Epikur uważał, że człowiek powinien cieszyć się z każdego dnia i unikać cierpienia.",
        "Postawa doktora Rieux odzwierciedla laicki egzystencjalizm Camusa: w świecie absurdu i braku Boga jedyną godną odpowiedzią człowieka na zło jest solidarność i pomoc cierpiącym.",
        "Powieść Camusa jest bardzo znana na całym świecie i doczekała się wielu adaptacji filmowych i teatralnych."
      ],
      correct: 2,
      explanation: "Opcja C precyzyjnie łączy konkretną postawę bohatera (dr Rieux) z założeniami filozofii egzystencjalnej i wyjaśnia mechanizm jego wyborów, co stanowi wzorcowy kontekst funkcjonalny.",
      whyWrong: {
        0: "To suchy fakt biograficzny bez związku z motywem zmagania ze złem.",
        1: "Epikur nie ma merytorycznego związku z analizą epidemii dżumy w Oranie.",
        3: "To informacja o recepcji dzieła, niemająca charakteru analizy problemowej."
      },
      examTip: "Formuła funkcjonalności: Nazwij nurt/filozofię → Wyjaśnij jej ideę → Pokaż odbicie w wyborach bohatera."
    },
    {
      id: "kq10-6",
      q: "Jakie dwie lektury obowiązkowe w całości są najbardziej uniwersalne do motywu winy, kary i wyrzutów sumienia?",
      options: [
        "„Zbrodnia i kara” Fiodora Dostojewskiego oraz „Makbet” Williama Szekspira",
        "„Skąpiec” Moliera oraz „Odprawa posłów greckich” Jana Kochanowskiego",
        "„Kamizelka” Bolesława Prusa oraz „Gloria victis” Elizy Orzeszkowej",
        "„Ferdydurke” Witolda Gombrowicza oraz „Chłopi” Władysława Reymonta"
      ],
      correct: 0,
      explanation: "Zarówno w „Zbrodni i karze” (Raskolnikow), jak i w „Makbecie” (Makbet i Lady Makbet) osią fabuły jest morderstwo, psychologiczne katusze wyrzutów sumienia i nieuchronna kara.",
      whyWrong: {
        1: "„Skąpiec” to komedia o chciwości, a w „Odprawie” motywem jest los ojczyzny i polityka.",
        2: "To nowele pozytywistyczne skupione na cichej miłości małżeńskiej i pamięci o powstaniu.",
        3: "„Ferdydurke” dotyczy Formy i Gęby, a „Chłopi” rytmu życia wsi i obyczajowości."
      },
      examTip: "Zestawienie Raskolnikowa z Makbetem pozwala na genialny kontrast: zbrodniarz szukający odkupienia vs zbrodniarz brnący w tyranię."
    },
    {
      id: "kq10-7",
      q: "Wskaż zdanie, które zawiera fałszywą informację o losach Cezarego Baryki w „Przedwiośniu”:",
      options: [
        "W Baku był świadkiem rewolucji bolszewickiej i pracował przy grzebaniu ciał zmarłych.",
        "W podróży do Polski słuchał opowieści ojca Seweryna o szklanych domach.",
        "W finale powieści wstępuje do partii komunistycznej i strzela do polskich żołnierzy ochraniających Belweder.",
        "Brał udział w wojnie polsko-bolszewickiej 1920 roku i uratował życie Hipolitowi Wielosławskiemu."
      ],
      correct: 2,
      explanation: "W finale Cezary idzie w pochodzie robotników na Belweder w mundurze legionisty, ale idzie OSOBNO, nie będąc komunistą i do nikogo nie strzelając. Twierdzenie przeciwne to kardynalna pomyłka!",
      whyWrong: {
        0: "To prawda — Cezary w Baku zakopywał zwłoki i doznał wstrząsu na widok martwej Ormianki.",
        1: "To prawda — ojciec opowiadał mu legendę o szklanych domach.",
        3: "To prawda — uratował Hipolita, dzięki czemu trafił do Nawłoci."
      },
      examTip: "Ostatnia scena „Przedwiośnia” symbolizuje dramat rozdarcia młodego pokolenia, a nie akces do partii komunistycznej."
    },
    {
      id: "kq10-8",
      q: "W jaki sposób Jacek Soplica zrehabilitował się za zabójstwo Stolnika Horeszki?",
      options: [
        "Zbudował z własnych funduszy zamek w Mirze i przekazał go Hrabiemu",
        "Jako Ksiądz Robak działał jako tajny emisariusz niepodległościowy i uratował życie Hrabiemu oraz Tadeuszowi",
        "Wyjechał do Ameryki i dorobił się fortuny na handlu zbożem",
        "Został mianowany generałem wojsk carskich i zawarł pokój z Polakami"
      ],
      correct: 1,
      explanation: "Jacek przybrał habit bernardyna i nazwisko Robak, przygotowywał powstanie na Litwie, a w czasie polowania i bitwy z Moskalami własnym ciałem zasłonił Hrabiego i Tadeusza przed kulami.",
      whyWrong: {
        0: "Zamek należał do Horeszków i był przedmiotem sporu sądowego, Soplica go nie budował.",
        2: "Do Ameryki uciekał np. Julian Ursyn Niemcewicz, nie Soplica.",
        3: "Soplica nigdy nie służył carowi — walczył w legionach Dąbrowskiego pod sztandarami Napoleona."
      },
      examTip: "Spowiedź Jacka Soplicy przed Gerwazym w Księdze X to kluczowa scena do motywów winy, pokuty i przemiany wewnętrznej."
    },
    {
      id: "kq10-9",
      q: "Co w „Weselu” Wyspiańskiego symbolizuje utrata Złotego Rogu przez Jaśka?",
      options: [
        "Niegotowość społeczeństwa polskiego do walki o niepodległość i prymat prywaty nad sprawą narodową",
        "Zwycięstwo powstania chłopskiego nad wojskami zaborcy",
        "Zdradę narodową i przejście chłopów na stronę caratu",
        "Konieczność odrzucenia tradycji ludowej na rzecz kultury szlacheckiej"
      ],
      correct: 0,
      explanation: "Jasiek schyla się po czapkę z pawich piór (błyskotkę) i gubi Złoty Róg dany przez Wernyhorę, co symbolizuje, że Polacy przedkładają prywatne dobra nad wspólne dobro ojczyzny i popadają w chocholi letarg.",
      whyWrong: {
        1: "Powstanie nie wybucha — naród zostaje uśpiony chocholim tańcem.",
        2: "Chłopi nie dopuszczają się zdrady carskiej — po prostu tracą szansę na zryw z powodu niedojrzałości.",
        3: "Wyspiański krytykuje wady obu stanów, a nie nakazuje odrzucenia tradycji ludowej."
      },
      examTip: "Zapamiętaj formułę: „Złoty Róg = szansa na niepodległość i zjednoczenie; Czapka z piór = próżność i egoizm; Chocholi taniec = marazm i zniewolenie”."
    },
    {
      id: "kq10-10",
      q: "W zakończeniu wypracowania maturalnego uczeń powinien przede wszystkim:",
      options: [
        "Wprowadzić trzecią, nieomawianą wcześniej lekturę, by pokazać szeroką wiedzę",
        "Zmienić tezę, jeśli w toku pisania argumenty okazały się niewystarczające",
        "Podać szczegółowy życiorys autora lektury obowiązkowej",
        "Zsyntetyzować wnioski cząstkowe, potwierdzić słuszność tezy i sformułować uogólnienie"
      ],
      correct: 3,
      explanation: "Zakończenie ma charakter syntetyzujący — zbiera wnioski z obu lektur i potwierdza tezę. Wprowadzanie nowych lektur w zakończeniu jest poważnym błędem kompozycyjnym.",
      whyWrong: {
        0: "Wprowadzanie nowych utworów w zakończeniu niszczy kompozycję i skutkuje utratą punktów.",
        1: "Zmiana tezy na końcu oznacza niespójność logiczną całej pracy (tzw. praca pęknięta).",
        2: "Życiorys autora powinien pojawić się jako kontekst w rozwinięciu, a nie w puencie pracy."
      },
      examTip: "Dobre zakończenie odpowiada wprost na pytanie: „Co z tego wszystkiego wynika dla człowieka i kultury?”."
    },
    {
      id: "kq10-11",
      q: "Dlaczego w „Lalce” Bolesława Prusa miłość Wokulskiego do Izabeli Łęckiej ma charakter niszczący?",
      options: [
        "Ponieważ Izabela namówiła Wokulskiego do zdrady ojczyzny na rzecz carskiej policji",
        "Ponieważ Wokulski idealizował Izabelę w duchu romantycznym, podczas gdy ona była wyrachowaną lalką salonową traktującą go z wyższością",
        "Ponieważ rodzina Wokulskiego zakazała mu małżeństwa z panną z arystokracji",
        "Ponieważ Wokulski przez miłość zbankrutował i stracił cały majątek w Paryżu"
      ],
      correct: 1,
      explanation: "Tragedia Wokulskiego polega na pęknięciu wewnętrznym: jako pozytywista buduje potęgę handlową, lecz jako romantyk ślepo kocha wyidealizowany obraz zimnej i próżnej Izabeli, co prowadzi go do klęski psychicznej.",
      whyWrong: {
        0: "Wokulski nie był zdrajcą ojczyzny — wspierał polską naukę i ubogich.",
        2: "Wokulski nie miał żyjącej rodziny decydującej o jego losie — to arystokracja gardziła nim jako kupcem.",
        3: "Wokulski w Paryżu pomnożył majątek i zarobił krocie, a nie zbankrutował."
      },
      examTip: "Określenie Wokulskiego: „romantyk w kapeluszu pozytywisty” to doskonała formuła do każdego wypracowania o „Lalce”."
    },
    {
      id: "kq10-12",
      q: "W jaki sposób Winston Smith zostaje ostatecznie złamany w Pokoju 101 w „Roku 1984”?",
      options: [
        "Zostaje przekupiony wysokim stanowiskiem w Ministerstwie Prawdy",
        "Dowiaduje się, że Julia była od początku agentką Policji Myśli",
        "Pod wpływem panicznego lęku przed szczurami zdradza ukochaną Julię, krzycząc: „Zróbcie to Julii!”",
        "Traci wzrok i słuch na skutek eksperymentów medycznych"
      ],
      correct: 2,
      explanation: "W Pokoju 101 człowiek staje w obliczu swojego największego koszmaru — dla Winstona były to szczury. Aby ocalić siebie, bez wahania przekazuje karę ukochanej osobie, niszcząc ostatni bastion człowieczeństwa.",
      whyWrong: {
        0: "Winston był niszczony psychicznie i fizycznie, a nie korumpowany awansem.",
        1: "Julia nie była agentką — sama została aresztowana i poddana równie bezwzględnym torturom.",
        3: "Winston nie stracił zmysłów w wyniku operacji — został zindoktrynowany psychologicznie."
      },
      examTip: "Scena w Pokoju 101 to kluczowy dowód na to, że totalitaryzm dąży do absolutnego zniszczenia więzi międzyludzkich i miłości."
    },
    {
      id: "kq10-13",
      q: "Wskaż zdanie, które przedstawia poprawną definicję i rolę „człowieka zlagrowanego” w opowiadaniach Tadeusza Borowskiego:",
      options: [
        "To więzień, który organizuje zbrojne powstanie w komorach gazowych i ratuje dzieci przed śmiercią",
        "To więzień obozu koncentracyjnego, który dostosował swoje normy moralne do reguł obozowych w celu biologicznego przetrwania",
        "To niemiecki strażnik SS, który w tajemnicy pomagał żydowskim więźniom",
        "To więzień polityczny, który w łagrze zachował pełną czystość chrześcijańskiego Dekalogu"
      ],
      correct: 1,
      explanation: "Człowiek zlagrowany u Borowskiego to jednostka, u której tradycyjny kodeks moralny został wyparty przez bezwzględny instynkt przetrwania, obojętność na cudzą śmierć i akceptację obozowych reguł.",
      whyWrong: {
        0: "U Borowskiego nie ma heroicznych powstań — opowiadania obnażają bezwzględną prawdę o Zagładzie.",
        2: "Człowiek zlagrowany to termin dotyczący więźniów, a nie strażników SS.",
        3: "Zachowanie czystości Dekalogu to postawa opisywana raczej przez Herlinga-Grudzińskiego w „Innym świecie”, u Borowskiego panuje bezkompromisowy behawioryzm."
      },
      examTip: "Zestawienie Borowskiego („człowiek zlagrowany”) z Herlingiem-Grudzińskim („człowiek może ocalić godność”) to żelazny klasyk maturalny!"
    },
    {
      id: "kq10-14",
      q: "Wskaż scenę z „Dziadów cz. III”, która stanowi najostrzejszą diagnozę podzielonego społeczeństwa polskiego pod zaborem carskim:",
      options: [
        "Widzenie Księdza Piotra w celi klasztornej",
        "Scena Salonu Warszawskiego (towarzystwo przy stoliku vs towarzystwo przy drzwiach)",
        "Polowanie na niedźwiedzia i koncert Wojskiego",
        "Uczta w zamku w Inverness i pojawienie się ducha"
      ],
      correct: 1,
      explanation: "Salon Warszawski ukazuje tragiczne pęknięcie narodu: zaprzaństwo i obojętność arystokracji rozmawiającej po francusku skontrastowane z patriotyzmem i cierpieniem młodzieży przy drzwiach, podsumowane metaforą lawy.",
      whyWrong: {
        0: "Widzenie Księdza Piotra dotyczy mistycznej koncepcji mesjanizmu (Polska Chrystusem narodów).",
        2: "Koncert Wojskiego to scena z „Pana Tadeusza”, nie z „Dziadów”.",
        3: "Uczta w Inverness to scena z „Makbeta” Szekspira."
      },
      examTip: "Metafora lawy („Nasz naród jak lawa...”) autorstwa Piotra Wysockiego to absolutny fundament do tematów o polskim społeczeństwie."
    },
    {
      id: "kq10-15",
      q: "Co w wypracowaniu maturalnym CKE powoduje przyznanie 0 punktów za całą pracę (tzw. błąd kardynalny)?",
      options: [
        "Rażące zniekształcenie treści lub sensu lektury obowiązkowej przywoływanej jako główne uzasadnienie tezy (np. pomylenie autorów, głównych faktów fabularnych lub sensu dzieła).",
        "Napisanie wypracowania liczącego dokładnie 315 słów zamiast 450.",
        "Popełnienie trzech błędów interpunkcyjnych przy użyciu zdania podrzędnego.",
        "Zastosowanie kontekstu filozoficznego zamiast kontekstu biograficznego."
      ],
      correct: 0,
      explanation: "Błąd kardynalny świadczy o nieznajomości lektury obowiązkowej lub całkowitym niezrozumieniu jej wymowy (np. stwierdzenie, że Kreon okazał łaskę Antygonie lub że Wokulski poślubił Izabelę).",
      whyWrong: {
        1: "Minimum to 300 słów — 315 słów mieści się w normie.",
        2: "Błędy interpunkcyjne obniżają jedynie punktację językową, nie zerują pracy.",
        3: "Kontekst filozoficzny jest w pełni równoprawnym kontekstem funkcjonalnym."
      },
      examTip: "Jeśli nie masz 100% pewności co do detalu (imienia, daty, zakończenia wątku), lepiej użyj bezpiecznego opisu ogólnego niż ryzykujesz błąd kardynalny."
    },
    {
      id: "kq10-16",
      q: "Który z poniższych przykładów najlepiej ilustruje FUNKCJONALNE użycie kontekstu w rozprawce o „Zbrodni i karze”?",
      options: [
        "Odwołanie do filozofii nadczłowieka Friedricha Nietzschego i pojęcia nihilizmu w celu wyjaśnienia korzeni teorii Raskolnikowa o „ludziach niezwykłych”.",
        "Wtrącenie zdania: „Fiodor Dostojewski urodził się w XIX wieku w Rosji i był znanym pisarzem”.",
        "Wspomnienie w jednym zdaniu, że akcja „Lalki” Prusa toczy się w Warszawie, bez żadnego powiązania z Raskolnikowem.",
        "Zacytowanie przysłowia „Kto pod kim dołki kopie” na samym końcu akapitu bez analizy."
      ],
      correct: 0,
      explanation: "Kontekst filozoficzny (Nietzsche/nihilizm) realnie pogłębia analizę psychologii i motywacji Raskolnikowa, pomagając udowodnić tezę rozprawki.",
      whyWrong: {
        1: "Sucha informacja biograficzna bez związku z argumentem to kontekst pozorny (0 pkt).",
        2: "Wzmianka o innej lekturze bez porównania i wniosku jest niefunkcjonalna.",
        3: "Przysłowie bez funkcji interpretacyjnej nie stanowi wartościowego kontekstu."
      },
      examTip: "Zawsze pytaj siebie po dopisaniu kontekstu: „Czy to zdanie pomaga mi lepiej wyjaśnić utwór?”"
    },
    {
      id: "kq10-17",
      q: "Wskaż parę lektur obowiązkowych najlepiej dobraną do tematu: „Jak system totalitarny próbuje odebrać człowiekowi godność i pamięć?”",
      options: [
        "„Rok 1984” George’a Orwella (nowomowa, dwójmyślenie, Pokój 101) oraz „Inny świat” Gustawa Herlinga-Grudzińskiego (łagier w Jercewie, system kotłów, sprawa Kostylewa).",
        "„Skąpiec” Moliera oraz „Pieśń o Rolandzie”.",
        "„Pan Tadeusz” Adama Mickiewicza oraz „Treny” Jana Kochanowskiego.",
        "„Kamizelka” Bolesława Prusa oraz „Bajki” Ignacego Krasickiego."
      ],
      correct: 0,
      explanation: "Obie lektury bezpośrednio analizują mechanizmy totalitarnego zniewolenia — odpowiednio w antyutopii o Oceanii oraz w literaturze faktu o sowieckim Gułagu.",
      whyWrong: {
        1: "To utwory o chciwości (XVII w.) i etosie rycerskim (średniowiecze).",
        2: "Dotyczą szlacheckiej arkadii i żałoby ojca po stracie dziecka.",
        3: "To nowela o miłości małżeńskiej i alegoryczne bajki oświeceniowe."
      },
      examTip: "Do tematów o totalitaryzmie i zniewoleniu pamiętaj o niezawodnej trójce: Orwell („Rok 1984”), Grudziński („Inny świat”) i Borowski (opowiadania)."
    },
    {
      id: "kq10-18",
      q: "Co oznacza metoda budowy akapitu TSACW zalecana w wypracowaniu maturalnym?",
      options: [
        "Teza cząstkowa → Sytuacja (przywołanie sceny) → Analiza (odpowiedź „dlaczego”) → Kontekst (funkcjonalne pogłębienie) → Wniosek cząstkowy.",
        "Tytuł utworu → Streszczenie całej książki → Aneks → Cytat → Wstęp.",
        "Temat → Spis treści → Argument → Cytat → Wypunktowanie.",
        "Teza → Streszczenie → Anegdota → Cytat → Wyliczenie epok."
      ],
      correct: 0,
      explanation: "Schemat TSACW gwarantuje, że każdy akapit rozwinięcia ma wyraźny argument, odwołanie do konkretu z lektury, pogłębioną analizę (zamiast streszczenia!), kontekst oraz podsumowanie wiążące całość z tezą.",
      whyWrong: {
        1: "Streszczenie całej książki w akapicie rozwinięcia obniża punktację.",
        2: "Rozprawka musi być tekstem ciągłym, nie wypunktowaniem.",
        3: "Anegdoty i suche wyliczenia epok nie budują argumentacji."
      },
      examTip: "Sprawdź każdy swój akapit pod kątem TSACW: czy po opisaniu sceny odpowiedziałeś na pytanie „co z tego wynika dla tezy?”."
    },
    {
      id: "kq10-19",
      q: "Który zestaw lektur jest całkowicie WOLNY od błędu merytorycznego w podanych faktach fabularnych?",
      options: [
        "W „Weselu” Jasiek gubi Złoty Róg; w „Ferdydurke” Józio zostaje zabrany przez Pimkę do szkoły; w „Dżumie” umierają Tarrou i Othon, ale przeżywa doktor Rieux.",
        "W „Makbecie” Lady Makbet własnoręcznie zabija Dunkana; w „Lalce” Wokulski topi się w Wiśle; w „Przedwiośniu” Cezary buduje szklane domy.",
        "W „Panu Tadeuszu” Gerwazy zabija Jacka Soplicę; w „Kordianie” Kordian zabija cara Mikołaja I; w „Antygonie” Kreon popełnia samobójstwo.",
        "W „Zbrodni i karze” Raskolnikow ucieka do Paryża; w „Potopie” Kmicic służy do końca Szwedom; w „Tangu” Artur zabija Edka."
      ],
      correct: 0,
      explanation: "Wszystkie trzy fakty w pierwszej odpowiedzi są w 100% zgodne z treścią lektur obowiązkowych.",
      whyWrong: {
        1: "Dunkana zabił sam Makbet; los Wokulskiego jest otwarty (nie utopił się w Wiśle); szklane domy okazały się mitem.",
        2: "Jacek Soplica umarł od dawnej rany wojennej (po spowiedzi przed Gerwazym); Kordian zemdlał przed sypialnią cara; Kreon przeżył (samobójstwo popełnili Antygona, Hajmon i Eurydyka).",
        3: "Raskolnikow poszedł na Syberię; Kmicic przeszedł na stronę króla Polski; to Edek zabił Artura."
      },
      examTip: "Taka szybka kontrola faktów przed oddaniem arkusza chroni przed nieświadomym błędem kardynalnym."
    },
    {
      id: "kq10-20",
      q: "Jaki powinien być charakter zakończenia wypracowania maturalnego?",
      options: [
        "Powinno zwięźle podsumować przeprowadzone dowodzenie, powrócić do tezy ze wstępu i sformułować ogólny wniosek z obu omówionych lektur (bez wprowadzania nowych dzieł).",
        "Powinno zawierać zupełnie nową lekturę obowiązkową, której zabrakło w rozwinięciu.",
        "Powinno składać się z jednego krótkiego zdania: „I tak oto udowodniłem swoją tezę”.",
        "Powinno zmienić tezę postawioną we wstępie na przeciwną, aby zaskoczyć egzaminatora."
      ],
      correct: 0,
      explanation: "Zakończenie spina klamrą kompozycyjną całą rozprawkę, potwierdzając słuszność tezy na podstawie przedstawionych argumentów.",
      whyWrong: {
        1: "Wprowadzanie nowych lektur i wątków w zakończeniu jest błędem kompozycyjnym.",
        2: "Jednozdaniowe ogólniki bez syntezy wniosków obniżają ocenę kompozycji.",
        3: "Zaprzeczenie własnej tezie burzy spójność logiczną całej pracy."
      },
      examTip: "Dobre zakończenie ma 4–6 zdań: synteza wniosków z lektur + uniwersalna refleksja zamykająca."
    },
    {
      id: "kq10-21",
      q: "Które dwie lektury najlepiej zestawić w temacie: „Sztuka i artysta wobec brutalnej historii lub obojętnego świata”?",
      options: [
        "„Fortepian Szopena” Cypriana Kamila Norwida (profanacja sztuki i „Idea – osiągnęła bruk”) oraz „Campo di Fiori” Czesława Miłosza (słowo poety przełamujące obojętność świata).",
        "„Skąpiec” Moliera oraz „Pamiętniki” Jana Chryzostoma Paska.",
        "„Jagnię i wilcy” Ignacego Krasickiego oraz „Kamizelka” Bolesława Prusa.",
        "„Lament świętokrzyski” oraz „Bogurodzica”."
      ],
      correct: 0,
      explanation: "Oba utwory podejmują wprost rolę artysty i poezji/muzyki w zderzeniu z przemocą historii (zaborczy carat u Norwida, Holokaust u Miłosza).",
      whyWrong: {
        1: "Dotyczą chciwości i obyczajowości sarmackiej.",
        2: "Dotyczą przemocy silniejszego w bajce i miłości małżeńskiej.",
        3: "To zabytki średniowiecznej liryki religijnej."
      },
      examTip: "Warto znać też trzeci przykład do tego motywu: Poeta z „Wesela” Wyspiańskiego lub Ojciec Jakub z „Sklepów cynamonowych”."
    },
    {
      id: "kq10-22",
      q: "Co należy zrobić, gdy w temacie maturalnym pojawia się sformułowanie: „Rozważ problem i uzasadnij swoje stanowisko, odwołując się do wybranej lektury obowiązkowej...”?",
      options: [
        "Zająć wyraźne stanowisko (tezę lub hipotezę) już we wstępie, oprzeć główny argument na wybranej lekturze obowiązkowej oraz drugim utworze literackim, a także użyć min. dwóch kontekstów.",
        "Napisać streszczenie wszystkich przeczytanych lektur z liceum bez zajmowania stanowiska.",
        "Odwołać się wyłącznie do współczesnych filmów i gier komputerowych, pomijając książki.",
        "Skupić się na opisaniu biografii autora bez analizowania treści samego utworu."
      ],
      correct: 0,
      explanation: "Formuła 2023 wymaga wypowiedzi argumentacyjnej (problemowej) z jasnym stanowiskiem, minimum dwoma utworami literackimi (w tym min. 1 lekturą obowiązkową) i funkcjonalnymi kontekstami.",
      whyWrong: {
        1: "Brak tezy i streszczanie zamiast argumentacji dyskwalifikuje wysoką ocenę.",
        2: "Lektura obowiązkowa i drugi utwór literacki są bezwzględnym wymogiem formalnym (film może być tylko dodatkowym kontekstem).",
        3: "Biografia bez analizy utworu nie realizuje tematu."
      },
      examTip: "Zawsze dokładnie sprawdź wymagania z polecenia: ile lektur, czy całość czy fragment, i czy trzeba odwołać się do konkretnej epoki."
    }
  ]
};
