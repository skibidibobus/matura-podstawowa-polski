export const LEVEL_1 = {
  id: 1,
  code: 'BLOK 1',
  title: 'Technika Arkusza, Notatka i Teoria Literatury',
  subtitle: 'Notatka syntetyzująca (4/4 pkt), czytanie ze zrozumieniem, środki stylistyczne i gatunki',
  duration: '60 min',
  xp: 140,
  notes: [
    {
      id: '1-1',
      title: 'Część 1: Język polski w użyciu i Notatka Syntetyzująca',
      badge: '10 pkt w arkuszu',
      intro:
        'Pierwsza część arkusza maturalnego (10 pkt z 60) bada umiejętność czytania ze zrozumieniem dwóch nieliterackich tekstów (popularnonaukowych, publicystycznych lub krytycznoliterackich) poruszających ten sam temat z dwóch różnych perspektyw. Najważniejszym zadaniem w tej części jest napisanie notatki syntetyzującej za 4 punkty (czyli aż 6,7% całej matury za kilkadziesiąt słów!).',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: '5 żelaznych kryteriów oceny notatki syntetyzującej (CKE / Operon)',
          items: [
            '1. Długość: dokładnie od 60 do 90 wyrazów (każdy przyimek „w”, „z”, „na” i spójnik „i”, „że” liczy się jako osobny wyraz! Liczby zapisane cyframi to też wyrazy). Napisanie 59 lub 91 słów obcina punkty do maksymalnie 1 pkt.',
            '2. Przedmiot syntezy: w pierwszym zdaniu musisz nazwać wspólny temat obu tekstów dokładnie tak, jak sformułowano go w poleceniu (np. „Obaj autorzy rozważają wpływ technologii na relacje międzyludzkie”).',
            '3. Zestawienie stanowisk: nie wolno streszczać najpierw Tekstu 1, a potem osobno Tekstu 2 bez ich połączenia. Musisz używać zwrotów porównujących: „Zarówno X, jak i Y dostrzegają…”, „Odmienne stanowisko w kwestii… zajmuje Y”, „Podczas gdy pierwszy autor podkreśla…, drugi skupia się na…”.',
            '4. Obiektywizm i własne słowa: zero ocen („autor słusznie zauważa”) i zero dosłownych cytatów z tekstu — stosuj parafrazę.',
            '5. Poprawność językowa, ortograficzna i interpunkcyjna (1 pkt z 4 jest przyznawany za brak błędów językowych).'
          ]
        },
        {
          type: 'quote',
          label: 'Uniwersalny szablon na 4/4 pkt (~78 słów) — naucz się go na pamięć!',
          text: 'Zarówno [Imię i Nazwisko Autora 1], jak i [Imię i Nazwisko Autora 2] podejmują w swoich tekstach temat [dokładne przepisanie tematu z polecenia]. Obaj autorzy są zgodni co do tego, że [wspólny wniosek obu tekstów]. Różnią się jednak w ocenie przyczyn i skutków tego zjawiska. Pierwszy z badaczy podkreśla, iż [główny argument z tekstu 1], natomiast drugi zwraca szczególną uwagę na [główny argument z tekstu 2]. Podsumowując, podczas gdy [Autor 1] ujmuje problem z perspektywy [np. jednostki], [Autor 2] analizuje go w wymiarze [np. społecznym].'
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Jak rozwiązywać pytania otwarte do tekstów?',
              desc: 'Zasada „odpowiadaj dokładnie na czasownik operacyjny” — kliknij po szczegóły.',
              details: {
                summary:
                  'W zadaniach za 1–2 pkt do obu tekstów uczniowie tracą punkty nie przez brak wiedzy, ale przez nieprecyzyjną odpowiedź lub przepisywanie całych zdań z tekstu.',
                bullets: [
                  '„Wyjaśnij…” — musisz wytłumaczyć mechanizm (przyczyna → skutek) własnymi słowami, nigdy nie odpowiadaj cytatem!',
                  '„Podaj dwa argumenty…” — wypisz je w osobnych podpunktach (1. …, 2. …), żeby sprawdzający od razu widział dwie różne myśli.',
                  '„Rozstrzygnij, czy… Uzasadnij” — zacznij od jednoznacznego słowa „Tak” lub „Nie”, a potem podaj argument odnoszący się do wymaganego akapitu.',
                  'Gdy pytanie dotyczy „obu tekstów”, w odpowiedzi musisz wyraźnie oddzielić, co mówi Tekst 1, a co Tekst 2.'
                ],
                essayUse: 'W Części 1 nigdy nie dopowiadaj wiedzy spoza tekstu — bazuj wyłącznie na tym, co napisali autorzy w podanych fragmentach.'
              }
            },
            {
              term: 'Przykład wzorcowej notatki syntetyzującej',
              desc: 'Zobacz pełny przykład na temat „roli podróży w życiu człowieka” (79 słów).',
              details: {
                summary:
                  'Temat: Porównaj stanowiska autorów dotyczące roli podróży w kształtowaniu osobowości człowieka.',
                bullets: [
                  'Treść wzorcowa (79 słów): „Zarówno Ryszard Kapuściński, jak i Olga Tokarczuk analizują w swoich tekstach rolę podróży w kształtowaniu osobowości człowieka. Oboje autorzy zgadzają się, że przemieszczanie się wymaga otwartości i zmienia sposób postrzegania świata. Kapuściński skupia się jednak na poznawaniu Innego, podkreślając, że podróż uczy pokory wobec odmiennych kultur. Z kolei Tokarczuk akcentuje wymiar psychologiczny wędrówki i dowodzi, iż ruch pozwala uciec przed rutyną oraz odkryć własną tożsamość. Podsumowując, pierwszy tekst uwypukla aspekt społeczny podróżowania, a drugi — indywidualny.”'
                ],
                essayUse: 'Zwróć uwagę na strukturę: Wspólny temat → Punkt wspólny → Stanowisko 1 → Stanowisko 2 → Kontrastowe podsumowanie.'
              }
            }
          ]
        }
      ]
    },
    {
      id: '1-2',
      title: 'Funkcje wypowiedzi i Środki Stylistyczne (z przykładami z lektur)',
      badge: 'Kliknij kartę, aby rozwinąć',
      intro:
        'Zarówno w Części 1 (pytania o styl autora), jak i w Części 2 (analiza wierszy i fragmentów prozy) pojawiają się pytania typu: „Nazwij środek stylistyczny i określ jego funkcję”. Samo nazwanie środka (np. metafora) często daje 0 pkt, jeśli nie napiszesz, PO CO autor go użył (np. „podkreśla dramatyzm sytuacji podmiotu lirycznego”).',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: '6 funkcji językowych (Jakobson)',
              desc: 'Informatywna, ekspresywna, impresywna, poetycka, fatyczna, metajęzykowa.',
              details: {
                summary:
                  'Każdy tekst ma swój główny cel komunikacyjny. Na maturze najczęściej pytają o pierwsze cztery funkcje.',
                bullets: [
                  'Informatywna (poznawcza): przekazuje obiektywne fakty, dane, statystyki; brak emocji, czasowniki w 3. os. (encyklopedia, artykuł naukowy).',
                  'Ekspresywna (emotywna): wyraża emocje i stan psychiczny nadawcy; wykrzyknienia, zdrobnienia, słownictwo nacechowane, wielokropki (np. Treny Kochanowskiego, Wielka Improwizacja).',
                  'Impresywna (nakłaniająca / konatywna): ma wpłynąć na odbiorcę, przekonać go do działania; tryb rozkazujący („Idź!”, „Słuchajcie!”), pytania retoryczne, czasowniki w 1. os. l. mn. („musimy ratować”).',
                  'Poetycka (estetyczna): zwraca uwagę na samą formę wypowiedzi, rytm, brzmienie i wieloznaczność (poezja, reklama).',
                  'Fatyczna: służy nawiązaniu i podtrzymaniu kontaktu („Halo”, „Słuchaj no”, „Prawda?”).',
                  'Metajęzykowa: tekst opowiada o znaczeniu słów i regułach języka (np. autor wyjaśnia etymologię słowa „tolerancja”).'
                ],
                essayUse: 'Gdy w arkuszu pytają o styl tekstu publicystycznego, niemal zawsze łączy on funkcję informatywną z impresywną i ekspresywną.'
              }
            },
            {
              term: 'Oksymoron vs Antyteza vs Paradoks',
              desc: 'Trzy środki oparte na sprzeczności — nie pomyl ich na teście!',
              details: {
                summary:
                  'Wszystkie trzy operują kontrastem, ale różnią się budową gramatyczną.',
                bullets: [
                  'Oksymoron (epitet sprzeczny): połączenie dwóch wyrazów (zwykle rzeczownik + przymiotnik) o wykluczających się znaczeniach, np. „żywy trup”, „gorzka słodycz”, „zimny ogień”, „suchy ocean” (Mickiewicz). Funkcja: oddaje wewnętrzne rozdarcie bohatera lub niezwykłość zjawiska.',
                  'Antyteza: zestawienie dwóch przeciwstawnych członów zdania lub wersów, np. „Lepiej z mądrym zgubić, niż z głupim znaleźć”, „Jedni płaczą, drudzy tańczą” (Bal u Senatora w Dziadach cz. III). Funkcja: wyostrza konflikt moralny lub społeczny.',
                  'Paradoks: błyskotliwe, pozornie sprzeczne z logiką stwierdzenie, które kryje głęboką prawdę filozoficzną, np. „Wiem, że nic nie wiem”, „Śpieszymy się powoli”, „Tylko umarli widzieli koniec wojny”.'
                ],
                essayUse: 'W baroku (Morsztyn, Naborowski) i romantyzmie oksymorony i antytezy są podstawowym narzędziem opisu uczuć.'
              }
            },
            {
              term: 'Symbol vs Alegoria',
              desc: 'Fundamentalne rozróżnienie przy interpretacji „Wesela”, „Dżumy” czy bajek.',
              details: {
                summary:
                  'Oba środki mają ukryte, niedosłowne znaczenie, ale różnią się liczbą możliwych odczytań.',
                bullets: [
                  'Alegoria: znak JEDNOZNACZNY, mający w kulturze stałe, ustalone znaczenie, które każdy oczytany odbiorca odkoduje tak samo. Przykłady: lis = przebiegłość, mrówka = pracowitość (Bajki Krasickiego), kobieta z zawiązanymi oczami i wagą = sprawiedliwość, tonący okręt = ginąca ojczyzna (Kazania sejmowe Skargi).',
                  'Symbol: znak WIELOZNACZNY, tajemniczy, którego nie da się sprowadzić do jednej prostej definicji. Przykłady z „Wesela”: Chochoł (z jednej strony uśpienie, marazm i niemoc Polaków, ale z drugiej — słomiana osłona chroniąca krzak róży na zimę, czyli nadzieja na odrodzenie wiosną!).'
                ],
                essayUse: 'Pamiętaj: Średniowiecze i Oświecenie kochają alegorię, a Romantyzm i Młoda Polska — symbol.'
              }
            },
            {
              term: 'Apostrofa, Inwokacja, Peryfraza, Anafora',
              desc: 'Najczęstsze środki retoryczne i poetyckie w poezji i eposie.',
              details: {
                summary:
                  'Te cztery pojęcia pojawiają się w niemal każdym arkuszu próbnym Operonu i CKE.',
                bullets: [
                  'Apostrofa: bezpośredni, patetyczny zwrot do adresata — osoby, Boga, ojczyzny, idei lub przedmiotu („O myśli! w twojej głębi jest hydra pamiątek”, „Wielkiś mi uczynił pustki w domu moim, moja droga Orszulo”). Funkcja: nadaje wypowiedzi uroczysty, podniosły lub intymny ton.',
                  'Inwokacja: rozbudowana apostrofa umieszczona na samym początku eposu („Pan Tadeusz”, „Iliada”), w której autor zwraca się do muzy, bóstwa lub ojczyzny z prośbą o natchnienie twórcze.',
                  'Peryfraza (omówienie): zastąpienie prostej nazwy rozbudowanym opisem poetyckim, np. zamiast „słońce” → „oko dnia”, zamiast „zima” → „biała pani północy”. Funkcja: wzbogaca styl i unika potocznych powtórzeń.',
                  'Anafora: rozpoczynanie kolejnych wersów lub zdań tym samym słowem/zwrotem. Funkcja: rytmizuje tekst i wzmacnia siłę perswazji.'
                ],
                essayUse: 'W wierszach Kochanowskiego, Mickiewicza i Herberta szukaj apostrofy w pierwszym lub ostatnim wersie.'
              }
            },
            {
              term: 'Porównanie homeryckie, Hiperbola, Ironia, Groteska',
              desc: 'Jak rozpoznać środki budujące obrazowanie i dystans w tekście?',
              details: {
                summary:
                  'Środki te decydują o tonacji utworu — od patosu eposu po absurd współczesnego dramatu.',
                bullets: [
                  'Porównanie homeryckie: niezwykle rozbudowane porównanie, w którym drugi człon rozrasta się w samodzielną, dynamiczną scenkę (często z życia przyrody lub zwierząt). Występuje w „Iliadzie” (np. pojedynek Achillesa i Hektora porównany do pościgu orła za gołębiem) oraz w „Panu Tadeuszu”. Funkcja: spowalnia akcję (retardacja) i plastycznie obrazuje scenę.',
                  'Hiperbola (wyolbrzymienie): celowe przejaskrawienie zjawiska („morze łez”, „Nazywam się Milijon”). Funkcja: potęguje emocje i dramatyzm.',
                  'Ironia: sprzeczność między dosłownym znaczeniem słów a ukrytą intencją autora (pozorna pochwała będąca w rzeczywistości kpiną, np. w „Żonie modnej” Krasickiego czy wierszach Szymborskiej).',
                  'Groteska: kategoria estetyczna łącząca w jedną całość elementy skrajnie sprzeczne: tragizm z komizmem, patos z wulgarnością, realizm z absurdem (np. trzydziestoletni Józio zmuszany do siedzenia w szkolnej ławce w „Ferdydurke”, taniec Edka nad trupem Artura w „Tangu”). Funkcja: demaskuje fałsz świata i absurd schematów.'
                ],
                essayUse: 'Gdy widzisz na teście fragment Gombrowicza lub Mrożka — w pytaniu o konwencję literacką wpisz: GROTESKOWA / ABSURDALNA.'
              }
            }
          ]
        }
      ]
    },
    {
      id: '1-3',
      title: 'Rodzaje i Gatunki Literackie — Kompendium',
      badge: 'Epika • Liryka • Dramat',
      intro:
        'Na teście historycznoliterackim musisz bezbłędnie odróżnić rodzaj literacki (są tylko trzy: epika, liryka, dramat) od gatunku literackiego (np. sonet, tren, tragedia, powieść, reportaż).',
      blocks: [
        {
          type: 'grid',
          items: [
            {
              term: 'Epika i jej gatunki maturalne',
              desc: 'Epos, powieść realistyczna, powieść-parabola, nowela, opowiadanie, reportaż.',
              details: {
                summary:
                  'Cechy epiki: obecność narratora (1-osobowego, czyli uczestnika wydarzeń, lub 3-osobowego wszechwiedzącego), fabuła (ciąg zdarzeń przyczynowo-skutkowych), świat przedstawiony i zazwyczaj zapis prozą (wyjątkiem jest epos pisany wierszem!).',
                bullets: [
                  'Epos (epopeja): wielki utwór wierszowany (w Polsce: trzynastozgłoskowiec w „Panu Tadeuszu”) ukazujący losy zbiorowości na tle przełomowych wydarzeń historycznych; zawiera inwokację, porównania homeryckie i retardację.',
                  'Powieść realistyczna („Lalka”, „Zbrodnia i kara”): rozbudowana, wielowątkowa fabuła, szeroka panorama społeczna, pogłębiony portret psychologiczny bohaterów, zasada prawdopodobieństwa życiowego.',
                  'Powieść paraboliczna (parabola — „Dżuma”): fabuła ma podwójne dno — dosłowne (epidemia w Oranie) oraz uniwersalne, filozoficzno-moralne (walka człowieka z każdym złem i totalitaryzmem).',
                  'Nowela („Kamizelka”): krótki utwór prozatorski o jednoogniskowej, zwartej akcji, z wyraźnym punktem kulminacyjnym i puentą, często skupiony wokół jednego rekwizytu (tytułowej kamizelki).',
                  'Reportaż literacki („Zdążyć przed Panem Bogiem”): gatunek z pogranicza literatury i dziennikarstwa (literatura faktu) — opisuje autentyczne wydarzenia i prawdziwe postacie (Marek Edelman).'
                ],
                essayUse: 'W rozprawce nazwanie „Dżumy” powieścią-parabolą, a „Pana Tadeusza” epopeją narodową od razu podnosi ocenę za styl i erudycję.'
              }
            },
            {
              term: 'Liryka i gatunki poetyckie',
              desc: 'Pieśń, fraszka, tren, sonet, hymn, wiersz wolny + rodzaje liryki.',
              details: {
                summary:
                  'W liryce mówi podmiot liryczny (NIGDY nie utożsamiaj go automatycznie z autorem — wyjątkiem są „Treny” Kochanowskiego, gdzie podmiotem jest sam poeta-ojciec!).',
                bullets: [
                  'Liryka bezpośrednia: podmiot ujawnia się w 1. os. („ja”, „mój”, „czuję”, „płaczę”) — mówi wprost o swoich przeżyciach.',
                  'Liryka pośrednia: podmiot jest ukryty w 3. os., opisuje pejzaż, scenę lub bohatera, a emocje wynikają z samego opisu.',
                  'Liryka inwokacyjna (zwrotu do adresata): wypowiedź skierowana do konkretnego „ty” lirycznego (Boga, ukochanej, ojczyzny).',
                  'Fraszka (Kochanowski): krótki, wierszowany utwór o tematyce żartobliwej, obyczajowej lub filozoficznej, często zakończony błyskotliwą puentą.',
                  'Pieśń (Kochanowski): utwór podzielony na regularne strofy, o tematyce refleksyjnej, biesiadnej lub patriotycznej.',
                  'Tren (Kochanowski): utwór żałobny wywodzący się z antyku, poświęcony zmarłej osobie (pochwała jej zalet, rozpacz po stracie, napomnienie i pocieszenie).',
                  'Wiersz wolny (Różewicz, Herbert, Szymborska): pozbawiony rymów i równej liczby sylab, oparty na rytmie zdań i podziale na wersy.'
                ],
                essayUse: 'Na teście, gdy pytają „kto mówi w wierszu”, zawsze pisz: „podmiot liryczny (który można utożsamić z…)”.'
              }
            },
            {
              term: 'Dramat: Antyczny vs Szekspirowski vs Romantyczny',
              desc: 'Porównanie trzech najważniejszych form dramatycznych na maturze.',
              details: {
                summary:
                  'Dramat jest przeznaczony do wystawienia na scenie, nie posiada narratora, a składa się z tekstu głównego (dialogi i monologi) oraz didaskaliów (wskazówek inscenizacyjnych).',
                bullets: [
                  'Tragedia antyczna („Antygona”): zasada 3 jedności (czasu — do 24h, miejsca — jedno miejsce przed pałacem, akcji — jeden wątek), zasada decorum (jednorodność podniosłego stylu, brak scen krwawych na scenie), max 3 aktorów na scenie, obecność Chóru komentującego akcję, fatum i konflikt tragiczny.',
                  'Tragedia szekspirowska („Makbet”): odrzuca zasadę 3 jedności (akcja trwa miesiącami w wielu zamkach), łamie decorum (łączy wzniosłość z rubasznym humorem odźwiernego, pokazuje morderstwa i krew na scenie), wprowadza sceny zbiorowe i postacie fantastyczne (czarownice, duch Banka) oraz pogłębia psychologię bohatera.',
                  'Dramat romantyczny („Dziady cz. III”, „Kordian”): kompozycja otwarta i fragmentaryczna (luźno powiązane sceny), synkretyzm rodzajowy (łączenie dramatu z liryką i epiką) oraz synkretyzm świata (sceny realistyczne przeplatają się z wizjami, aniołami i diabłami).'
                ],
                essayUse: 'To jedno z najczęstszych pytań za 2 pkt w Części 2: „Wskaż dwie cechy dramatu romantycznego / szekspirowskiego widoczne w podanym fragmencie”.'
              }
            }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1-1', front: 'Jaki jest ścisły limit słów w notatce syntetyzującej?', back: '60–90 słów. Przekroczenie lub niedobór skutkuje utratą punktów.' },
    { id: 'f1-2', front: 'Czym różni się notatka syntetyzująca od dwóch osobnych streszczeń?', back: 'Musi bezpośrednio zestawiać oba teksty (wskazywać punkty wspólne i różnice między autorami), bez cytatów i bez własnych opinii.' },
    { id: 'f1-3', front: 'Czym różni się symbol od alegorii?', back: 'Symbol jest wieloznaczny (np. Złoty Róg, Chochoł), a alegoria ma jedno, stałe i umowne znaczenie (np. waga = sprawiedliwość).' },
    { id: 'f1-4', front: 'Co to jest oksymoron? Podaj przykład.', back: 'Zestawienie wyrazów o przeciwstawnym znaczeniu, np. „żywy trup”, „ciemne światło”.' },
    { id: 'f1-5', front: 'Jaka funkcja języka dominuje w tekście pełnym trybu rozkazującego i pytań retorycznych?', back: 'Funkcja impresywna (nakłaniająca) — ma skłonić odbiorcę do działania lub zmiany poglądów.' },
    { id: 'f1-6', front: 'Co to jest groteska i w których lekturach występuje?', back: 'Połączenie sprzeczności (komizm + tragizm, realizm + absurd). Występuje w „Tangu” Mrożka i „Ferdydurke” Gombrowicza.' },
    { id: 'f1-7', front: 'Czym tragedia szekspirowska („Makbet”) różni się od antycznej („Antygona”)?', back: 'Szekspir łamie zasadę trzech jedności (czasu, miejsca, akcji), wprowadza sceny zbiorowe, duchy i elementy humoru.' },
    { id: 'f1-8', front: 'Co to jest synkretyzm rodzajowy?', back: 'Łączenie w jednym utworze elementów epiki, liryki i dramatu (np. „Romantyczność”, „Dziady cz. III”).' },
    { id: 'f1-9', front: 'Czym różni się apostrofa od inwokacji?', back: 'Apostrofa to bezpośredni zwrot do osoby/pojęcia; inwokacja to rozbudowana apostrofa na początku eposu z prośbą o natchnienie (np. w „Panu Tadeuszu”).' },
    { id: 'f1-10', front: 'Co to jest anafora?', back: 'Powtórzenie tego samego słowa lub zwrotu na początku kolejnych wersów lub zdań.' },
    { id: 'f1-11', front: 'Czym różni się liryka bezpośrednia od pośredniej?', back: 'W bezpośredniej podmiot liryczny ujawnia się wprost („widzę, kocham”), a w pośredniej ukrywa się za opisem sytuacji lub obrazu.' },
    { id: 'f1-12', front: 'Co to jest aluzja literacka? Podaj przykład.', back: 'Świadome nawiązanie w utworze do innego znanego dzieła (np. „Tango” Mrożka nawiązuje do „Wesela” i „Hamleta”).' },
    { id: 'f1-13', front: 'Jakie są główne kryteria oceny pytań otwartych w Części 1 arkusza maturalnego?', back: 'Liczy się precyzyjna odpowiedź wprost na polecenie, odwołanie do konkretnego mechanizmu/przykładu w tekście oraz zwięzłość bez lania wody.' },
    { id: 'f1-14', front: 'Czym jest zasada kaskadowa oceny notatki syntetyzującej?', back: 'Najpierw oceniana jest treść (0–3 pkt); jeżeli za treść uczeń dostanie 0 pkt (np. pominie jeden tekst), automatycznie otrzymuje 0 pkt również za język (kryterium D).' },
    { id: 'f1-15', front: 'Czym różni się funkcja impresywna (nakłaniająca) od funkcji ekspresywnej?', back: 'Impresywna ma wywołać reakcję odbiorcy (tryb rozkazujący, apele, pytania retoryczne); ekspresywna wyraża uczucia i emocje nadawcy (wykrzykniki, zdrobnienia, słownictwo oceniające).' },
    { id: 'f1-16', front: 'Czym jest funkcja metajęzykowa i fatyczna?', back: 'Metajęzykowa wyjaśnia sam język, znaczenie słów lub definicje; fatyczna służy nawiązaniu, podtrzymaniu lub sprawdzeniu kontaktu z rozmówcą.' },
    { id: 'f1-17', front: 'Podaj różnicę między antytezą a oksymoronem.', back: 'Oksymoron to dwa sprzeczne wyrazy obok siebie („zimny ogień”), a antyteza to zestawienie dwóch przeciwstawnych myśli lub zdań („zgoda buduje, niezgoda rujnuje”).' },
    { id: 'f1-18', front: 'Co to jest peryfraza (omówienie) i eufemizm?', back: 'Peryfraza zastępuje nazwę dłuższym opisem („król zwierząt” = lew); eufemizm łagodzi dosadne lub drażliwe określenie („odejść” zamiast „umrzeć”).' },
    { id: 'f1-19', front: 'Czym jest porównanie homeryckie i jaką pełni funkcję w epopei?', back: 'Rozbudowane porównanie, w którym drugi człon staje się samodzielnym, plastycznym obrazem (częstym w „Iliadzie” i „Panu Tadeuszu”), spowalniającym akcję i budującym podniosły styl.' },
    { id: 'f1-20', front: 'Co to jest ironia i hiperbola w zadaniach z analizy tekstu?', back: 'Ironia polega na sprzeczności między dosłownym znaczeniem a ukrytym sensem (często kpiną); hiperbola to celowe wyolbrzymienie (np. „morze łez”) wzmacniające ekspresję.' },
    { id: 'f1-21', front: 'Jakie są główne cechy dramatu romantycznego („Dziady cz. III”, „Kordian”)?', back: 'Otwarta, luźna kompozycja, synkretyzm rodzajowy, łamanie zasady trzech jedności, obecność scen zbiorowych i fantastycznych oraz bohater indywidualista.' },
    { id: 'f1-22', front: 'Jakie są główne cechy eposu jako gatunku epickiego?', back: 'Rozbudowany utwór wierszowany o przełomowych losach narodu, pisany podniosłym stylem, z inwokacją, porównaniami homeryckimi i wszechwiedzącym narratorem.' },
    { id: 'f1-23', front: 'Czym różni się liryka inwokacyjna od liryki sytuacji (opisowej)?', back: 'Inwokacyjna zawiera bezpośredni zwrot do adresata („Litwo! Ojczyzno moja!”), a opisowa/sytuacyjna przedstawia obraz lub scenkę bez ujawniania wprost „ja” mówiącego.' },
    { id: 'f1-24', front: 'Czym jest paradoks w odróżnieniu od zwykłego błędu logicznego?', back: 'Paradoks to sformułowanie pozornie sprzeczne z logiką lub zdrowym rozsądkiem, które jednak ujawnia głębszą prawdę filozoficzną lub psychologiczną (np. „Wiem, że nic nie wiem”).' }
  ],
  quiz: [
    {
      q: 'Która zasada NIE obowiązuje w notatce syntetyzującej?',
      options: [
        'Limit od 60 do 90 wyrazów',
        'Własna ocena, który autor ma rację',
        'Zestawienie stanowisk obu autorów',
        'Parafrazowanie bez cytatów'
      ],
      correct: 1,
      explanation: 'W notatce syntetyzującej obowiązuje całkowity obiektywizm — nie wolno wyrażać własnych opinii ani oceniać autorów.'
    },
    {
      q: 'Wyrażenie „gorzka słodycz” to:',
      options: ['Peryfraza', 'Anafora', 'Oksymoron', 'Hiperbola'],
      correct: 2,
      explanation: 'Oksymoron zestawia dwa wyrazy o przeciwstawnych znaczeniach (gorzka + słodycz).'
    },
    {
      q: 'Który gatunek jest charakterystyczny dla „Zdążyć przed Panem Bogiem” Hanny Krall?',
      options: ['Nowela pozytywistyczna', 'Reportaż literacki', 'Powieść paraboliczna', 'Dramat symboliczny'],
      correct: 1,
      explanation: '„Zdążyć przed Panem Bogiem” to reportaż (wywiad-rzeka z Markiem Edelmanem).'
    },
    {
      q: 'Zastąpienie słowa „słońce” opisem „dzienna gwiazda” to:',
      options: ['Peryfraza', 'Apostrofa', 'Antyteza', 'Aluzja'],
      correct: 0,
      explanation: 'Peryfraza (omówienie) polega na zastąpieniu jednego wyrazu rozbudowanym opisem.'
    },
    {
      q: 'Zasada trzech jedności (czasu, miejsca i akcji) obowiązuje w:',
      options: ['Dramacie romantycznym', 'Tragedii antycznej', 'Tragedii szekspirowskiej', 'Dramacie absurdu'],
      correct: 1,
      explanation: 'Zasada trzech jedności to klasyczna reguła tragedii antycznej (np. „Antygona” Sofoklesa).'
    },
    {
      q: 'Gdy nadawca skupia się na wyjaśnieniu znaczenia słowa lub reguły gramatycznej, pełni funkcję:',
      options: ['Fatyczną', 'Metajęzykową', 'Ekspresywną', 'Poetycką'],
      correct: 1,
      explanation: 'Funkcja metajęzykowa polega na mówieniu o samym języku.'
    },
    {
      q: 'Cechą dramatu jako rodzaju literackiego jest:',
      options: [
        'Obecność wszechwiedzącego narratora',
        'Podział na tekst główny (dialogi) i didaskalia',
        'Zawsze pisany jest wierszem wolnym',
        'Brak konfliktu między postaciami'
      ],
      correct: 1,
      explanation: 'Dramat nie ma narratora — składa się z wypowiedzi postaci (tekst główny) oraz wskazówek scenicznych (didaskalia).'
    },
    {
      q: 'Rozbudowana apostrofa otwierająca „Pana Tadeusza” („Litwo! Ojczyzno moja!”) to:',
      options: ['Aluzja', 'Oksymoron', 'Inwokacja', 'Hiperbola'],
      correct: 2,
      explanation: 'Inwokacja to uroczysta apostrofa umieszczona na początku eposu.'
    },
    {
      q: 'Jaki jest bezwzględny przedział liczby wyrazów obowiązujący w notatce syntetyzującej CKE?',
      options: ['30–50 wyrazów', '60–90 wyrazów', '100–150 wyrazów', 'Minimum 200 wyrazów'],
      correct: 1,
      explanation: 'Notatka syntetyzująca musi liczyć od 60 do 90 słów — zarówno poniżej 60, jak i powyżej 90 słów traci się punkty.'
    },
    {
      q: 'W zdaniu „Kup ten produkt już dziś, bo jutro może być za późno!” dominuje funkcja:',
      options: ['Informatywna', 'Metajęzykowa', 'Impresywna (nakłaniająca)', 'Fatyczna'],
      correct: 2,
      explanation: 'Tryb rozkazujący („Kup”) i wezwanie do działania wskazują wprost na funkcję impresywną.'
    },
    {
      q: 'Wyrażenie „gorący lód” lub „żywy trup” to przykład:',
      options: ['Oksymoronu', 'Anafory', 'Peryfrazy', 'Eufemizmu'],
      correct: 0,
      explanation: 'Oksymoron łączy dwa bezpośrednio sąsiadujące ze sobą wyrazy o przeciwstawnych znaczeniach.'
    },
    {
      q: 'Który z wymienionych znaków lub motywów jest ALEGORIĄ, a nie symbolem?',
      options: ['Chochoł w „Weselu”', 'Szklane domy w „Przedwiośniu”', 'Waga jako znak sprawiedliwości', 'Biała róża w wierszu'],
      correct: 2,
      explanation: 'Alegoria ma jedno ustalone, skonwencjonalizowane znaczenie (waga = sprawiedliwość), w przeciwieństwie do wieloznacznego symbolu.'
    },
    {
      q: 'W którym zdaniu popełniono błąd składniowy w użyciu imiesłowowego równoważnika zdania?',
      options: [
        'Czytając lekturę, robiłem notatki.',
        'Wchodząc do klasy, zadzwonił dzwonek.',
        'Skończywszy zadanie, sprawdziłem ortografię.',
        'Patrząc przez okno, widziałem góry.'
      ],
      correct: 1,
      explanation: 'Podmiot „dzwonek” nie może wykonywać czynności „wchodząc do klasy” — brak tożsamości podmiotu.'
    },
    {
      q: 'Wskaż zdanie w pełni poprawne pod względem językowym:',
      options: [
        'W cudzysłowiu zapisujemy cytaty.',
        'Bynajmniej wiem, o co chodzi w tym wierszu.',
        'W cudzysłowie zapisujemy tytuły czasopism i cytaty.',
        'Odgrywa to bardzo ważne znaczenie w utworze.'
      ],
      correct: 2,
      explanation: 'Poprawna forma miejscownika to „w cudzysłowie”; „bynajmniej” znaczy „wcale nie”, a „odgrywać znaczenie” to kontaminacja.'
    },
    {
      q: 'Czym różni się liryka pośrednia od liryki bezpośredniej?',
      options: [
        'W liryce pośredniej podmiot liryczny mówi wyłącznie w 1. osobie liczby pojedynczej.',
        'W liryce pośredniej podmiot ukrywa się za opisem sytuacji, pejzażu lub postaci, nie używając „ja”.',
        'Liryka pośrednia występuje tylko w tragediach antycznych.',
        'Liryka pośrednia nie posiada żadnych środków stylistycznych.'
      ],
      correct: 1,
      explanation: 'Liryka pośrednia wyraża emocje i refleksje poprzez przedstawiony obraz czy sytuację bez jawnego „ja” mówiącego.'
    },
    {
      q: 'Który z poniższych gatunków NIE należy do dramatu?',
      options: ['Tragedia', 'Komedia', 'Ballada', 'Dramat romantyczny'],
      correct: 2,
      explanation: 'Ballada jest gatunkiem synkretycznym (łączy lirykę, epikę i elementy dramatyczne), ale nie jest gatunkiem ściśle dramatycznym przeznaczonym na scenę.'
    }
  ]
};
