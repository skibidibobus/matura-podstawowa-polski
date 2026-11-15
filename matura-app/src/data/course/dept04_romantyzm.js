/* ==========================================================================
   DEPARTMENT 04: Romantyzm — Serce, Wolność i Metafizyka
   File: matura-app/src/data/course/dept04_romantyzm.js
   ========================================================================== */

export const DEPT_04 = {
  id: 'dept-04',
  displayNum: 4,
  code: 'DZIAŁ 4',
  title: 'Romantyzm — Serce, Wolność i Metafizyka',
  subtitle: 'Dziady cz. III, Kordian, Pan Tadeusz, manifest romantyczny i poezja Norwida',
  duration: '95 min',
  xp: 200,
  notes: [
    {
      id: 'kn4-1',
      title: 'Przełom romantyczny — pojęcia ideowe, manifesty i ballady Mickiewicza',
      badge: 'Bunt młodych',
      intro: 'Polski Romantyzm (1822–1863) rozpoczął się wraz z wydaniem w Wilnie I tomu „Poezji” Adama Mickiewicza zawierającego „Ballady i romanse”. Był to gwałtowny bunt młodego pokolenia przeciwko oświeceniowemu racjonalizmowi, chłodnemu klasycyzmowi oraz bierności wobec niewoli narodowej pod zaborami.',
      blocks: [
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Kluczowe pojęcia i prądy ideowe Romantyzmu',
          items: [
            'Irracjonalizm: przekonanie, że rzeczywistość duchowa jest ważniejsza od materialnej, a świat poznaje się przez intuicję, wiarę, sny, wizje i uczucie („szkiełko i oko” jest ułomne).',
            'Ludowość (folklor): fascynacja wiejskimi wierzeniami, legendami i etyką moralną prostego ludu (nie ma winy bez kary; zło zawsze zostanie pomszczone).',
            'Bohater romantyczny: wybitna, samotna jednostka zmagająca się z całym światem, przeżywająca tragiczny zawód miłosny (werteryzm), która przechodzi wewnętrzną metamorfozę i poświęca się ojczyźnie.',
            'Historyzm: szukanie korzeni tożsamości narodowej w epoce średniowiecza i tradycji rycerskiej.',
            'Wallenrodyzm: tragiczna konieczność posłużenia się zdradą, podstępem i kłamstwem w walce z potężniejszym wrogiem w sytuacji braku szans w otwartej walce (Mickiewicz: „Konrad Wallenrod” — nawiązanie do Machiavellego: „Trzeba być lisem i lwem”).'
          ]
        },
        {
          type: 'quote',
          label: 'Manifest polskiego romantyzmu — „Romantyczność” (1822)',
          text: '„Czucie i wiara silniej mówi do mnie / Niż mędrca szkiełko i oko. / Martwe znasz prawdy, nieznane dla ludu, / Widzisz świat w proszku, w każdej gwiazd iskierce. / Nie znasz prawd żywych, nie obaczysz cudu! / Miej serce i patrzaj w serce!”',
          author: 'Adam Mickiewicz',
          analysis: 'Podsumowanie sporu między racjonalistą Starcem (reprezentującym profesora Jana Śniadeckiego) a Poetą stającym w obronie obłąkanej z miłości Karusi rozmawiającej z duchem Jasieńka.'
        },
        {
          type: 'grid',
          items: [
            {
              term: '„Sonety krymskie” — orientalizm i pejzaż metafizyczny',
              desc: 'Cykl 18 sonetów powstałych po zesłaniu Mickiewicza w głąb Rosji (1826).',
              details: {
                summary: 'Zderzenie wrażliwości Pielgrzyma-wygnańca z egzotyczną przyrodą Wschodu i mądrością przewodnika Mirzy.',
                bullets: [
                  '„Stepy akermańskie”: wypłynięcie w bezkres stepu jak na „suchy ocean”; motyw tęsknoty za ojczyzną (nasłuchiwanie w ciszy tak głębokiej, że słychać motyla — nikt jednak nie woła z Litwy).',
                  '„Bakczysaraj”: topos przemijania potęgi ziemskiej; pałac chanów krymskich leży w ruinie, a z marmurowej fontanny wciąż płynie woda („źródło płacze”) — natura i sztuka trwają, pycha imperiów obraca się w pył.',
                  'Orientalizm: stylizacja języka, bogactwo zmysłowych metafor, perskie i arabskie nazewnictwo.'
                ],
                essayUse: 'W motywach: nostalgia emigranta, samotność, zachwyt potęgą natury, orientalizm.'
              }
            },
            {
              term: '„Konrad Wallenrod” i pojęcie wallenrodyzmu',
              desc: 'Powieść poetycka o cenie zdrady w imię ocalenia ojczyzny.',
              details: {
                summary: 'Litwin Walter Alf wychowany przez Krzyżaków podstępem zostaje Wielkim Mistrzem Zakonu, by doprowadzić wrogą armię do klęski.',
                bullets: [
                  'Dylemat moralny: Wallenrod łamie kodeks rycerski, porzuca ukochaną żonę Aldonę (która zamurowuje się w wieży w Malborku) i niszczy Zakon zdradzieckim dowodzeniem.',
                  'Tragizm wallenrodyczny: bohater zwycięża wroga politycznie, ale ponosi całkowitą klęskę moralną jako człowiek — nie potrafi żyć ze świadomością hańby zdrady i popełnia samobójstwo, pijąc truciznę.',
                  'Rola poezji: Wajdelota Halban uczy Waltera tożsamości pieśnią („Płomień rozgryzie malowane dzieje... Pieśń ujdzie cało”).'
                ],
                essayUse: 'Kluczowe w tematach: etyka w walce politycznej, zdrada, poświęcenie dla narodu, rola poezji w ocaleniu pamięci.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn4-2',
      title: 'Adam Mickiewicz: „Dziady część III” — mesjanizm, prometeizm i męczeństwo narodu',
      badge: 'Lektura w całości (*)',
      intro: 'Drezdeńskie „Dziady część III” (1832) to arcydzieło polskiego dramatu romantycznego. Utwór powstał po upadku powstania listopadowego jako moralno-polityczny rozrachunek z carskim despotyzmem, cierpieniem polskiej młodzieży oraz postawami rodaków.',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: 'Pułapki błędu kardynalnego w „Dziadach cz. III”!',
          items: [
            'Konrad NIE jest potępiony na wieki: mdleje w Wielkiej Improwizacji, a słowo „Carem!” dopowiada diabeł. Zostaje ocalony dzięki egzorcyzmom Księdza Piotra i wstawiennictwu niewinnych dusz (Ewa).',
            'To NIE Konrad ma widzenie mesjanistyczne o zmartwychwstaniu Polski, lecz pokorny Bernardyn — Ksiądz Piotr w scenie V!',
            'Konrad w celi bazylianów nie walczy z bronią w ręku — to uwięziony student, którego przemiana z poety miłości (Gustawa) w poetę-narodowca dokonuje się w Prologu poprzez napis na ścianie.'
          ]
        },
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Dwa nurty ideowe dramatu: Prometeizm a Mesjanizm',
          items: [
            'Prometeizm (Konrad w Wielkiej Improwizacji): Pycha jednostki wybitnej. Konrad czuje w sobie potęgę tworzenia równą Bogu („Ja czuję nieśmiertelność, nieśmiertelność tworzę”). Kocha naród bezgranicznie („Nazywam się Milijon — bo za milijony kocham i cierpię katusze”), ale żąda od Boga władzy absolutnej („Daj mi rząd dusz!”), by uszczęśliwić ludzi siłą. Oskarża Boga o brak serca, zarzucając Mu, że jest tylko mądrością. Pycha prowadzi go na skraj potępienia.',
            'Mesjanizm (Widzenie Księdza Piotra): Pokora zakonnika leżącego krzyżem („Panie! czymże ja jestem przed Twoim obliczem? — Prochem i niczem”). Nagrodą jest profetyczna wizja dziejów: Polska jest Chrystusem narodów — jej cierpienie pod zaborami (Austria, Prusy, Rosja jak rzymscy żołnierze, Francja jak Piłat) ma wymiar odkupieńczy i doprowadzi do zmartwychwstania wolności wszystkich ludów Europy. Zapowiedź tajemniczego wskrzesiciela narodu o imieniu „Czterdzieści i cztery”.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Salon warszawski (scena VII) — anatomia zniewolonego narodu',
              desc: 'Bezwzględny podział społeczeństwa polskiego na dwa wrogie obozy.',
              details: {
                summary: 'Akcja toczy się w salonie arystokracji w Warszawie.',
                bullets: [
                  'Towarzystwo przy stoliku: generałowie, wysocy urzędnicy, damy z towarzystwa, pisarze klasycystyczni. Rozmawiają po francusku, ubolewają nad wyjazdem Nowosilcowa (bo nikt nie zorganizuje wspaniałych bali), twierdzą, że polska literatura nie powinna dotyczyć krwawych spraw narodowych, lecz sielanek.',
                  'Towarzystwo przy drzwiach: młodzi patrioci, studenci, oficerowie. Dyskutują po polsku o prześladowaniach młodzieży na Litwie, męczeństwie Cichowskiego (torturowanego przez lata w carskich lochach) i konieczności walki.',
                  'Podsumowanie Piotra Wysockiego: „Nasz naród jak lawa, / Z wierzchu zimna i twarda, sucha i plugawa, / Lecz wewnętrznego ognia sto lat nie wyziębi; / Plwajmy na tę skorupę i zstąpmy do głębi”.'
                ],
                essayUse: 'Żelazny motyw: społeczeństwo w obliczu niewoli, zdrada elit, heroizm młodzieży.'
              }
            },
            {
              term: 'Męczeństwo młodzieży — Opowiadanie Sobolewskiego (scena I)',
              desc: 'Wstrząsający obraz carskich represji na procesie Filomatów.',
              details: {
                summary: 'Jan Sobolewski opowiada uwięzionym w celi kolegom o wywózce kibitkami polskich uczniów na Sybir.',
                bullets: [
                  'Postać Janczewskiego: wychudzony, skatowany chłopak z ogoloną głową i łańcuchami na nogach, który z kibitki z dumą i wiarą trzykrotnie wykrzykuje: „Jeszcze Polska nie zginęła!”.',
                  'Postać Wasilewskiego: student tak skatowany na śledztwie, że nie był w stanie iść o własnych siłach; upada bezwładnie na schody niczym zdjęty z krzyża Chrystus.',
                  'Despotyzm Nowosilcowa: senator torturuje dzieci, by wkraść się w łaski cara i zdobyć ordery.'
                ],
                essayUse: 'W tematach: martyrologia, patriotyzm, cierpienie młodzieży, okrucieństwo zaborcy.'
              }
            },
            {
              term: 'Scena VIII (Pan Senator) i Ustęp',
              desc: 'Koszmar carskiego samowładztwa i profetyczny obraz Rosji.',
              details: {
                summary: 'Bal u Senatora w Wilnie oraz poemat epicki zamykający dzieło.',
                bullets: [
                  'Scena u Senatora: niewidoma Pani Rollison błaga Nowosilcowa o litość dla wyrzuconego przez okno syna; cynizm Doktora (który ginie rażony piorunem zgodnie z przepowiednią ks. Piotra).',
                  'Ustęp: epicki opis Rosji carskiej — bezludne przestrzenie („Droga do Rosji”), militaryzm i deptanie ludzi („Przegląd wojska”), pomnik Piotra Wielkiego (rozmowa z rosyjskim poetą-dekabrystą o tyranii) oraz dedykacja „Do przyjaciół Moskali” (rozróżnienie narodu rosyjskiego od carskiego aparatu przemocy).'
                ],
                essayUse: 'W motywach: tyrania, solidarność ponadnarodowa, despotyzm.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn4-3',
      title: 'Juliusz Słowacki: „Kordian” — winkelriedyzm, spisek koronacyjny i słabość psychiki',
      badge: 'Lektura w całości (*)',
      intro: '„Kordian” Juliusza Słowackiego (1834 r., Paryż) to dramat romantyczny będący bezpośrednią polemiką z koncepcją mesjanizmu Mickiewicza oraz bezwzględnym rozliczeniem z przyczynami klęski powstania listopadowego. Ukazuje tragedię młodego marzyciela, którego psychika nie udźwignęła ciężaru rewolucyjnego czynu.',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: 'Pułapki i błędy interpretacyjne w „Kordianie”!',
          items: [
            'Winkelriedyzm to NIE mesjanizm: Mesjanizm Mickiewicza zakładał bierne cierpienie i czekanie na cud (Chrystus narodów), podczas gdy winkelriedyzm Słowackiego to hasło CZYNNYCH walk zbrojnych i aktywnego poświęcenia życia, by otworzyć drogę innym („Polska Winkelriedem narodów!”).',
            'Kordian NIE zabił cara Mikołaja I: padł zemdlony pod drzwiami sypialni carskiej, pokonany przez własną wyobraźnię i sumienie zmaterializowane jako Strach i Imaginacja.',
            'Dramat posiada kompozycję otwartą: nie wiemy, czy pluton egzekucyjny wystrzelił — oficer unosi rękę do komendy ognia w chwili, gdy nadjeżdża adiutant z rozkazem ułaskawienia od księcia Konstantego.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Akt I i II — Ewolucja bohatera i utrata złudzeń w Europie',
              desc: 'Droga od romantycznego weltschmerzu do dojrzałości ideowej.',
              details: {
                summary: '15-letni marzyciel Kordian wyrusza w podróż edukacyjną po Europie, gdzie brutalna rzeczywistość niszczy jego idealistyczne wyobrażenia.',
                bullets: [
                  'Akt I: młody Kordian cierpi na „jaskółczy niepokój” (weltschmerz, ból istnienia, brak celu życiowego). Nieodwzajemniona miłość do starszej Laury popycha go do próby samobójczej w parku (strzał w głowę, który przeżywa).',
                  'Londyn (park Jamesa): dozorca uświadamia mu, że światem rządzą pieniądze, a za złoto można kupić pozycję i honor.',
                  'Dover (nad klifem): lektura „Króla Leara” Szekspira uświadamia mu przepaść między wzniosłą poezją a szarą rzeczywistością.',
                  'Włochy: piękna Wioletta przysięga mu wieczną miłość, lecz opuszcza go natychmiast, gdy Kordian ogłasza, że stracił majątek (złote podkowy konia).',
                  'Watykan: audiencja u Papieża — Kordian prosi o błogosławieństwo dla walczącej o wolność Polski; Papież nakazuje Polakom uległość wobec prawowitego cara i grozi rzuceniem klątwy na buntowników („Niechaj się Polaki modlą, czczą cara i wierzą”).'
                ],
                essayUse: 'Idealny wzorzec w motywach: podróż edukacyjna, dojrzewanie bohatera, utrata młodzieńczych złudzeń.'
              }
            },
            {
              term: 'Monolog na Mont Blanc — narodziny Winkelrieda',
              desc: 'Punkt kulminacyjny przemiany duchowej Kordiana na dachu Europy.',
              details: {
                summary: 'Kordian stoi na lodowcu Mont Blanc ponad chmurami i odnajduje sens swojej egzystencji.',
                bullets: [
                  'Odrzucenie niemocy: zrzuca maskę biernego cierpiętnika; przezwycięża myśli samobójcze.',
                  'Idea Winkelriedyzmu: nawiązanie do szwajcarskiego bohatera Arnolda Winkelrieda, który pod Sempach skierował włócznie wrogów we własną pierś, tworząc wyłom dla towarzyszy.',
                  'Hasło: „Polska Winkelriedem narodów!” — Polska ma podjąć czynną walkę z caratem, skupić na sobie uderzenie despotyzmu i dać wolność całej Europie.',
                  'Powrót na chmurze: Kordian zostaje przeniesiony do Polski, by zrealizować plan zamachu.'
                ],
                essayUse: 'Kluczowy kontekst przy tematach buntu, poświęcenia jednostki i przemiany wewnętrznej.'
              }
            },
            {
              term: 'Akt III — Spisek koronacyjny i załamanie w sypialni cara',
              desc: 'Studium psychologicznej niemocy romantycznego zamachowca.',
              details: {
                summary: 'Podziemia kościoła św. Jana w Warszawie po koronacji Mikołaja I na króla Polski.',
                bullets: [
                  'Głosowanie spiskowców: Prezes (Niemcewicz) i większość spiskowców odrzucają plan zabicia cara z obawy przed grzechem królobójstwa i hańbą moralną.',
                  'Samotna decyzja Kordiana: postanawia sam zabić cara na Zamku Królewskim.',
                  'Droga do sypialni (Strach i Imaginacja): nocny marsz korytarzami zamku; wyobraźnia rodzi upiory zbrodni, trumny i krew. Kordian przegrywa z własnym sumieniem — pada bez zmysłów u progu sypialni.',
                  'Drwina Doktora (Szatana) w szpitalu wariatów: ukazanie szaleńców (jeden uważa się za krzyż, drugi za niebo podtrzymujące strop), co jest kpiną z idei mesjanizmu i poświęcenia.'
                ],
                essayUse: 'W tematach: etyka zamachu, słabość psychiczna idealisty, klęska powstania listopadowego.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn4-4',
      title: 'Adam Mickiewicz: „Pan Tadeusz” — epos narodowy, arkadia Soplicowa i przemiana Jacka Soplicy',
      badge: 'Lektura w całości (*)',
      intro: '„Pan Tadeusz, czyli Ostatni zajazd na Litwie” (Paryż 1834 r.) to 12-księgowy epos narodowy pisany trzynastozgłoskowcem. Powstał z emigracyjnej nostalgii poety za „krajem lat dziecinnych”. Ukazuje harmonijny, wyidealizowany świat szlacheckiej tradycji u progu wkroczenia wojsk napoleońskich na Litwę w 1812 roku.',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: 'Ostrzeżenia przed błędem kardynalnym w „Panu Tadeuszu”!',
          items: [
            'Jacek Soplica to Ksiądz Robak: Jacek nie umarł w młodości — przywdział habit bernardyna i został tajnym emisariuszem napoleońskim, by odpokutować zbrodnię na Stolniku.',
            'Jacek Soplica NIE był zdrajcą narodowym: mimo że w afekcie zabił Stolnika Horeszkę podczas najazdu Moskali, nigdy nie współpracował z Rosjanami; odrzucił nadania carskie i udał się na emigrację, by walczyć o wolną Polskę.',
            'Gerwazy Rębajło (Klucznik) przebacza Jackowi na łożu śmierci: ujawnia, że umierający Stolnik wykonał w stronę Jacka znak krzyża na znak wybaczenia.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Jacek Soplica (Ksiądz Robak) — archetyp przemiany moralnej',
              desc: 'Najważniejsza i najgłębsza psychologicznie postać epopei.',
              details: {
                summary: 'Od warchoła i mordercy do cichego emisariusza i bohatera narodowego.',
                bullets: [
                  'Etap 1 (Młodość — Jacek Soplica): dumny szlachcic, przywódca sejmikowy („Wąsal”), zakochany z wzajemnością w Ewie Horeszkównie. Odrzucony przez jej ojca, Stolnika (podanie „czarnej polewki”), popada w pijaństwo, żeni się bez miłości. W chwili najazdu Moskali na zamek w afekcie i gniewie strzela do Stolnika. Uznany przez okolicę za zdrajcę.',
                  'Etap 2 (Pokuta — Ksiądz Robak): wstępuje do zakonu bernardynów, przyjmuje nazwisko „Robak” (znak pokory). Zamiast jednostkowego buntu podejmuje mrówczą, anonimową pracę organiczną — jest emisariuszem przenoszącym rozkazy generała Dąbrowskiego i przygotowującym powstanie szlachty na Litwie.',
                  'Etap 3 (Rehabilitacja): ratuje życie Hrabiemu i Gerwazemu podczas polowania na niedźwiedzia, zasłania własnym ciałem Tadeusza i Hrabiego przed kulami Moskali podczas bitwy w Soplicowie. Spowiedź na łożu śmierci (Księga X), wybaczenie od Gerwazego i pośmiertne odznaczenie Legią Honorową przez Napoleona.'
                ],
                essayUse: 'Absolutny fundament maturalny przy tematach: przemiana wewnętrzna, wina i odkupienie, patriotyzm czynu.'
              }
            },
            {
              term: 'Soplicowo jako oaza polskości i centrum obyczaju',
              desc: 'Idealistyczny obraz szlacheckiej arkadii.',
              details: {
                summary: 'Dworek w Soplicowie jako ostoja tradycji narodowej pod zaborem.',
                bullets: [
                  'Nauka grzeczności Sędziego Soplicy: hierarchia stanowa, szacunek dla starszych i kobiet, kult gościnności („Brama na wciąż otwarta przechodniom powiada, / Że gościnna i wszystkich w gościnę zaprasza”).',
                  'Wystrój dworku: portrety bohaterów narodowych (Kościuszko, Rejtan, Jasiński), zegar kurantowy grający Mazurka Dąbrowskiego.',
                  'Mistrz ceremonii: Wojski Hreczecha dbający o ład uczt, polowań i obyczajów (gra na bawolim rogu).',
                  'Koncert Jankiela na cymbałach (Księga XII): patriotyczna lekcja historii muzyką — od Konstytucji 3 Maja, przez zdradę Targowicy i rzeź Pragi, po pieśń o Legionach Dąbrowskiego.'
                ],
                essayUse: 'W tematach: tradycja i obyczaje szlacheckie, arkadia, dom jako ostoja wartości, muzyka w literaturze.'
              }
            },
            {
              term: 'Poetyka eposu w „Panu Tadeuszu”',
              desc: 'Cechy klasycznej epopei zastosowane przez Mickiewicza.',
              details: {
                summary: 'Realizacja wzorców homeryckich w realiach polskich.',
                bullets: [
                  'Inwokacja: zwrot do utraconej ojczyzny i Matki Boskiej Ostrobramskiej („Litwo! Ojczyzno moja! ty jesteś jak zdrowie...”).',
                  'Retardacja: celowe opóźnianie biegu akcji przez rozbudowane opisy przyrody (matecznik, zachód słońca, grzybobranie, chmury).',
                  'Porównania homeryckie: plastyczne, rozbudowane porównania przyrody do scen ludzkich.',
                  'Trzynastozgłoskowiec: stały rytm wiersza ze średniówką po 7 sylabie (7+6).'
                ],
                essayUse: 'Zadania testowe z cech gatunkowych eposu narodowego.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn4-5',
      title: 'Cyprian Kamil Norwid — poeta myśli, praca, sztuka i tragizm wielkości',
      badge: 'Późny romantyzm',
      intro: 'Cyprian Kamil Norwid, zaliczany do czwórki wieszczów, był poetą myśli, prekursorem nowoczesnej liryki, niedocenionym za życia i zmarłym w nędzy w paryskim przytułku. Jego poezja odrzucała łatwy sentymentalizm i mesjanizm na rzecz trudnego intelektualizmu, kultu pracy i chrześcijańskiego uniwersalizmu.',
      blocks: [
        {
          type: 'callout',
          variant: 'blue',
          title: 'Wyróżniki poetyki Norwida',
          items: [
            'Intelektualizm i eliptyczność: zmuszanie odbiorcy do myślenia poprzez przemilczenia, wielokropki, pauzy myślowe i neologizmy.',
            'Kult pracy: praca nie jest przekleństwem, lecz „miłością znojącą się” — najwyższym aktem człowieczeństwa podnoszącym materię do rangi ducha („Promethidion”).',
            'Tragizm losu wielkich ludzi: geniusze (Sokrates, Dante, Kościuszko, Bem, Chopin) są za życia odrzucani, kamienowani i nierozumiani przez współczesnych, a doceniani dopiero po śmierci przez potomnych.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: '„Bema pamięci żałobny-rapsod” — pochód ku wolności',
              desc: 'Hołd dla generała Józefa Bema, bohatera Polski i Węgier.',
              details: {
                summary: 'Poemat stylizowany na archaiczny pochówek średniowiecznego rycerza i wodza.',
                bullets: [
                  'Obraz orszaku pogrzebowego: koń wodza z przypiętym mieczem, panny żałobne tłukące gliniane naczynia, pachołki dławiące toporami tarcze.',
                  'Przesłanie uniwersalne: śmierć Bema nie kończy walki; jego duch porywa za sobą kolejne pokolenia: „Idą dalej, / Dalej — aż w grobowcu cienie / Kruszą się i budzą...”. Prawdziwa wielkość budzi ludzkość z uśpienia.',
                  'Forma: heksametr polski, kunsztowna onomatopeja i rytmika marsza żałobnego.'
                ],
                essayUse: 'W motywach: pamięć o bohaterach, śmierć wodza, poezja patriotyczna.'
              }
            },
            {
              term: '„Fortepian Szopena” — profanacja sztuki najwyższej',
              desc: 'Refleksja po zamachu na carskiego namiestnika Berga w Warszawie (1863).',
              details: {
                summary: 'W odwecie za zamach żołnierze carscy zdemolowali Pałac Zamoyskich i wyrzucili przez okno na bruk fortepian Fryderyka Chopina.',
                bullets: [
                  'Portret sztuki Chopina: synteza antycznego ideału piękna (starożytna Grecja) z prostą, chrześcijańską nutą wiejską polskiego ludu („Polska z zenitu wszechdoskonałości dziejów”).',
                  'Zderzenie Sacrum i Profanum: czyste, uduchowione Piękno zostaje skonfrontowane z barbarzyńską, tępą przemocą carskich sołdatów.',
                  'Puenta wiersza: „Idea — osiągnęła bruk”. Pozorna klęska sztuki jest jej zwycięstwem — upadek na bruk oznacza, że idea weszła między zwykłych ludzi i ich przebudzi („Ciesz się, późny wnuku! / Jękły głuche kamienie”).'
                ],
                essayUse: 'W tematach: rola sztuki i artysty, barbarzyństwo wojny, cierpienie kultury pod zaborem.'
              }
            },
            {
              term: '„Moja piosnka [II]” — nostalgia i etyka ojczysta',
              desc: 'Liryczna spowiedź poety-emigranta tęskniącego za krajem.',
              details: {
                summary: 'Zbudowany na refrenie modlitewnym: „Tęskno mi, Panie...”.',
                bullets: [
                  'Idealizacja etyki polskiej: tęsknota za krajem, gdzie „kruszynę chleba podnoszą z ziemi przez uszanowanie”, gdzie szanuje się bocianie gniazdo na dachu, a ludzie witają się ewangelicznym „Bądź pochwalony Chrystus!”.',
                  'Poczucie obcości: wyobcowanie poety na emigracji w świecie rządzonym przez fałsz i materializm.'
                ],
                essayUse: 'W tematach: nostalgia emigranta, tradycja chrześcijańska, etos chleba, samotność.'
              }
            }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'kf4-1', front: 'Jaki rok i jakie wydarzenie uznaje się za początek Romantyzmu w Polsce?', back: 'Rok 1822 — wydanie I tomu „Poezji” Adama Mickiewicza zawierającego „Ballady i romanse” w Wilnie.', hint: 'Wydanie manifestu z „Romantycznością”.', category: 'epoka' },
    { id: 'kf4-2', front: 'Zacytuj puentę manifestu „Romantyczność” Mickiewicza.', back: '„Czucie i wiara silniej mówi do mnie / Niż mędrca szkiełko i oko [...] Miej serce i patrzaj w serce!”.', hint: 'Prymat serca nad szkiełkiem i okiem.', category: 'cytat' },
    { id: 'kf4-3', front: 'Na czym polega pojęcie wallenrodyzmu?', back: 'Na konieczności walki podstępem, zdradą i lisim sposobem z potężniejszym wrogiem w sytuacji braku szans w otwartej walce, co prowadzi bohatera do klęski moralnej.', hint: '„Trzeba być lisem i lwem” — Walter Alf.', category: 'pojecie' },
    { id: 'kf4-4', front: 'Jak brzmi napis na ścianie w celi bazylianów w Prologu „Dziadów cz. III”?', back: '„Gustavus obiit, natus est Conradus” (Umarł Gustaw — nieszczęśliwy kochanek, narodził się Konrad — bojownik o wolność ojczyzny).', hint: 'Śmierć kochanka, narodziny bojownika.', category: 'cytat' },
    { id: 'kf4-5', front: 'O co Konrad oskarża Boga w Wielkiej Improwizacji?', back: 'Oskarża Boga, że nie jest Miłością, lecz jedynie chłodną Mądrością; żąda od Niego „rządu dusz”, by uszczęśliwić naród siłą.', hint: 'Bóg jako chłodny mędrzec, nie miłość.', category: 'lektura' },
    { id: 'kf4-6', front: 'Na czym polega koncepcja mesjanizmu narodowego w Widzeniu Księdza Piotra?', back: 'Polska jest „Chrystusem narodów” — jej cierpienie pod rozbiorami ma sens odkupieńczy i doprowadzi do zmartwychwstania wolności wszystkich ludów.', hint: 'Polska jak cierpiący i zmartwychwstający Chrystus.', category: 'motyw' },
    { id: 'kf4-7', front: 'Zacytuj słowa Piotra Wysockiego o narodzie polskim z Salonu Warszawskiego.', back: '„Nasz naród jak lawa, / Z wierzchu zimna i twarda, sucha i plugawa, / Lecz wewnętrznego ognia sto lat nie wyziębi; / Plwajmy na tę skorupę i zstąpmy do głębi”.', hint: 'Naród jak lawa — skorupa a wewnętrzny ogień.', category: 'cytat' },
    { id: 'kf4-8', front: 'Co oznacza hasło winkelriedyzmu w „Kordianie” Juliusza Słowackiego?', back: '„Polska Winkelriedem narodów!” — wezwanie do czynnej walki zbrojnej i poświęcenia życia w ataku na cara, by otworzyć drogę do wolności innym ludom.', hint: 'Polska jak szwajcarski bohater skupiający włócznie wroga.', category: 'pojecie' },
    { id: 'kf4-9', front: 'Dlaczego Kordian nie zabił cara Mikołaja I w jego sypialni?', back: 'Został pokonany przez własną psychikę i sumienie zmaterializowane jako personifikacje Strachu i Imaginacji; padł zemdlony przed progiem komnaty.', hint: 'Paraliż wyobraźni i strachu przed królobójstwem.', category: 'bohater' },
    { id: 'kf4-10', front: 'Czym winkelriedyzm Słowackiego różni się od mesjanizmu Mickiewicza?', back: 'Winkelriedyzm zakłada czynną walkę zbrojną i aktywny zamach na tyrana, podczas gdy mesjanizm Mickiewicza opiera się na biernym cierpieniu i zaufaniu w Boży cud.', hint: 'Czyn zbrojny kontra bierne męczeństwo.', category: 'pojecie' },
    { id: 'kf4-11', front: 'Kim był Jacek Soplica i dlaczego przyjął przydomek Ksiądz Robak?', back: 'Szlachcicem, który w afekcie zabił Stolnika Horeszkę; habit bernardyna i miano Robaka przyjął na znak pokory, stając się tajnym emisariuszem niepodległościowym.', hint: 'Warchoł pokutujący jako cichy bernardyn.', category: 'bohater' },
    { id: 'kf4-12', front: 'Jakie wydarzenia historyczne zagrał Jankiel w swoim koncercie na cymbałach?', back: 'Uchwalenie Konstytucji 3 Maja, zdradę Targowicy, rzeź warszawskiej Pragi przez wojska Suworowa oraz powstanie Legionów Dąbrowskiego (Mazurek Dąbrowskiego).', hint: 'Muzyczna lekcja historii od 1791 do 1812 roku.', category: 'lektura' },
    { id: 'kf4-13', front: 'Jaką decyzję podjęli Tadeusz i Zosia podczas swoich zaręczyn w Księdze XII?', back: 'Postanowili znieść pańszczyznę i uwłaszczyć podległych im chłopów w swoim majątku.', hint: 'Darowanie wolności chłopom.', category: 'bohater' },
    { id: 'kf4-14', front: 'Co symbolizuje wyrzucenie fortepianu Chopina na bruk w wierszu Norwida?', back: 'Profanację i starcie sztuki najwyższej (sacrum) z brutalnym barbarzyństwem caratu (profanum), ale też zwycięstwo idei, która trafia pod strzechy.', hint: '„Idea — osiągnęła bruk”.', category: 'motyw' },
    { id: 'kf4-15', front: 'Czym charakteryzuje się kult pracy w twórczości Cypriana Kamila Norwida?', back: 'Praca jest rozumiana jako „miłość znojąca się” — uduchowienie materii i najwyższa forma ludzkiej twórczości łącząca człowieka z Bogiem.', hint: 'Praca jako miłość i znojenie ducha.', category: 'pojecie' },
    { id: 'kf4-16', front: 'Jak w „Bema pamięci żałobnym-rapsodzie” Norwid ukazał śmierć wodza?', back: 'Jako stylizowany pochówek średniowiecznego rycerza, który nie kończy się w grobie, lecz budzi kolejne pokolenia do nieustannego marszu ku wolności.', hint: 'Śmierć bohatera budząca naród.', category: 'lektura' },
    { id: 'kf4-17', front: 'Kim był Cichowski w „Dziadach cz. III”?', back: 'Młodym Polakiem porwanym przez carską policję, więzionym i torturowanym przez lata w lochach; mimo że nikogo nie wydał, po powrocie był wrakiem człowieka zniszczonym obłędem i lękiem.', hint: 'Symbol milczenia pod carskimi torturami.', category: 'bohater' },
    { id: 'kf4-18', front: 'Wskaż cechy dramatu romantycznego na przykładzie „Dziadów cz. III”.', back: 'Kompozycja otwarta i luźna (fragmentaryczność), synkretyzm rodzajowy (liryka, epika, dramat), łączenie scen realistycznych z fantastycznymi (anioły, diabły), bohater prometejski.', hint: 'Otwarta forma, synkretyzm i metafizyka.', category: 'pojecie' },
    { id: 'kf4-19', front: 'Jaka jest wymowa programowa ballady „Romantyczność” Adama Mickiewicza (1822)?', back: 'Manifest polskiego romantyzmu przeciwstawiający „szkiełko i oko” (chłodny racjonalizm Starca) poznaniu przez „czucie i wiarę” (empatia, intuicja i ludowa prawda serca Karusi).', hint: '„Miej serce i patrzaj w serce”.', category: 'lektura' },
    { id: 'kf4-20', front: 'Czym jest orientalizm w „Sonetach krymskich” Adama Mickiewicza?', back: 'Fascynacja egzotyką Wschodu (stepy Akermanu, Krym, islam, słowa takie jak „muezim”, „mirza”, „czatyrdah”), łącząca zachwyt potęgą natury z nostalgią Pielgrzyma za utraconą ojczyzną.', hint: 'Krym jako pejzaż metafizyczny i tęsknota wygnańca.', category: 'epoka' },
    { id: 'kf4-21', front: 'Na czym polega tragizm wallenrodyzmu w „Konradzie Wallenrodzie”?', back: 'Bohater wybiera walkę za pomocą podstępu i zdrady (wbrew kodeksowi rycerskiemu), ratuje ojczyznę przed Zakonem, ale płaci za to utratą honoru, szczęścia osobistego i samobójczą śmiercią.', hint: 'Skuteczna zdrada w imię ojczyzny za cenę duszy.', category: 'motyw' },
    { id: 'kf4-22', front: 'Czym jest opowiadanie Jana Sobolewskiego w I scenie „Dziadów cz. III”?', back: 'Relacją naocznego świadka o wywózce polskich dzieci i studentów kibitkami na Sybir (m.in. małego Wasilewskiego i Janczewskiego), ukazującą bezbronność i heroizm młodzieży pod carskim terrorem.', hint: 'Kibitki, kajdany i okrzyk „Jeszcze Polska nie zginęła”.', category: 'lektura' },
    { id: 'kf4-23', front: 'Co symbolizuje metafora lawy wypowiedziana przez Piotra Wysockiego w Scenie VII „Dziadów cz. III”?', back: 'Podział narodu na „z wierzchu zimną i twardą, suchą i plugawą” skorupę (serwilistyczną arystokrację) oraz „wewnętrzny ogień”, którego sto lat nie wyziębi (patriotyczną młodzież i lud).', hint: 'Skorupa vs wewnętrzny ogień narodu.', category: 'cytat' },
    { id: 'kf4-24', front: 'Kim był Senator Nowosilcow w „Dziadach cz. III” i co robił w Wilnie?', back: 'Carskim dygnitarzem prowadzącym brutalne śledztwo przeciwko filomatom i filaretom w celu przypodobania się carowi; otoczony pochlebcami (Doktor, Bajkow, Pelikan), symbolizuje zepsucie władzy.', hint: 'Bal u Senatora i śmierć Rollisona/Doktora.', category: 'bohater' },
    { id: 'kf4-25', front: 'Czym jest winkelriedyzm w dramacie Juliusza Słowackiego „Kordian”?', back: 'Koncepcja czynnej walki zbrojnej i poświęcenia jednego narodu („Polska Winkelriedem narodów”), który ściąga na siebie ostrza tyranów, by torować wolność innym ludom — w polemice z biernym mesjanizmem.', hint: 'Czyn zbrojny i ofiara za wolność innych.', category: 'pojecie' },
    { id: 'kf4-26', front: 'Dlaczego Kordian nie zabił cara Mikołaja I w sypialni Zamku Królewskiego (Akt III)?', back: 'W decydującej chwili przed drzwiami sypialni jego słabą psychikę opanowały Strach i Imaginacja (halucynacje), w wyniku czego Kordian zemdlał na progu i został aresztowany.', hint: 'Strach i Imaginacja pokonały spiskowca.', category: 'bohater' },
    { id: 'kf4-27', front: 'Jakich złudzeń pozbył się Kordian podczas podróży po Europie w Akcie II?', back: 'W Londynie odkrył, że światem rządzi pieniądz; w Dover zrozumiał rozdźwięk między poezją Szekspira a prozą życia; we Włoszech doznał zawodu w miłości do Wioletty; w Watykanie papież potępił polskie powstanie.', hint: 'Pieniądz, miłość interesowna i brak poparcia Watykanu.', category: 'lektura' },
    { id: 'kf4-28', front: 'Na czym polegała przemiana Jacka Soplicy w Księdza Robaka w „Panu Tadeuszu”?', back: 'Z dumnego, porywczego zabijaki, który w gniewie zastrzelił Stolnika Horeszkę (i został uznany za zdrajcę), stał się pokornym bernardynem, emisariuszem przygotowującym powstanie na Litwie i ratującym Gerwazego oraz Hrabiego.', hint: 'Od dumy i zbrodni do pokory i służby ojczyźnie.', category: 'bohater' },
    { id: 'kf4-29', front: 'Wymień 4 główne cechy Soplicowa jako szlacheckiej arkadii w „Panu Tadeuszu”.', back: '1) Szacunek dla tradycji i obyczaju (grzybobranie, polowanie, polonez, porządek przy stole); 2) Gościnność otwarta dla każdego; 3) Pielęgnowanie patriotyzmu (zegar grający Mazurka Dąbrowskiego, portrety Kościuszki i Rejtana); 4) Harmonia człowieka z litewską przyrodą.', hint: 'Tradycja, gościnność, patriotyzm, natura.', category: 'motyw' },
    { id: 'kf4-30', front: 'Co oznaczają słowa „Ojczyzna to wielki zbiorowy obowiązek” oraz „Przeszłość – jest to dziś, tylko cokolwiek dalej” u Norwida?', back: 'Norwid odrzuca pusty patriotyzm martyrologiczny i bezmyślną walkę; wymaga codziennej pracy, odpowiedzialności moralnej za wspólnotę i ciągłości historycznej z tradycją.', hint: 'Codzienny obowiązek i ciągłość dziejów.', category: 'cytat' }
  ],
  quiz: [
    {
      q: "Wskaż zdanie, które zawiera BŁĄD KARDYNALNY w interpretacji „Dziadów części III” Adama Mickiewicza:",
      options: [
        "Konrad w Wielkiej Improwizacji żąda od Boga rządu dusz nad ludzkością.",
        "Ksiądz Piotr otrzymuje profetyczną wizję, w której Polska jest Chrystusem narodów.",
        "Konrad ostatecznie wyrzeka się Boga, wypowiada bluźnierstwo, że Bóg jest Carem, i zostaje na zawsze potępiony przez chór aniołów.",
        "W Salonie Warszawskim młodzi patrioci dyskutują po polsku przy drzwiach o carskich prześladowaniach."
      ],
      correct: 2,
      explanation: "To kardynalny błąd rzeczowy! Konrad nie wypowiada bluźnierczego słowa „Carem” — mdleje, a słowo dopowiada diabeł. Nie zostaje potępiony, lecz ocalony przez modlitwy Ewy i egzorcyzm ks. Piotra.",
      whyWrong: {
        0: "To prawda — Konrad żąda „rządu dusz”.",
        1: "To prawda — scena V (Widzenie ks. Piotra) zawiera koncepcję mesjanizmu.",
        3: "To prawda — scena VII ukazuje podział na towarzystwo przy stoliku i przy drzwiach."
      },
      examTip: "Popełnienie tego błędu na maturze skutkuje wyzerowaniem całego wypracowania (0/35 pkt)!"
    },
    {
      q: "Czym różni się winkelriedyzm Słowackiego („Kordian”) od mesjanizmu Mickiewicza („Dziady cz. III”)?",
      options: [
        "Winkelriedyzm stawia na czynną, zbrojną walkę i aktywne poświęcenie jednostki, a mesjanizm zakłada bierne cierpienie i wiarę w zmartwychwstanie z woli Boga.",
        "Winkelriedyzm nawołuje do ucieczki z kraju, a mesjanizm do walki dyplomatycznej.",
        "Winkelriedyzm jest koncepcją ateistyczną, a mesjanizm prawosławną.",
        "Winkelriedyzm głosi kult pieniądza, a mesjanizm pochwałę ascezy."
      ],
      correct: 0,
      explanation: "Słowacki ostro polemizował z Mickiewiczem: odrzucał bierne czekanie na cud (Chrystus narodów), wzywając do rewolucyjnego uderzenia w cara (Winkelried narodów).",
      whyWrong: {
        1: "Żadna z koncepcji nie postulowała ucieczki z kraju.",
        2: "Oba nurty wyrosły na gruncie chrześcijańskiej kultury polskiej.",
        3: "Winkelriedyzm nie ma nic wspólnego z kultem pieniądza (przeciwko któremu Kordian buntował się w Londynie)."
      },
      examTip: "To jedno z ulubionych pytań porównawczych egzaminatorów CKE w Części 2 arkusza."
    },
    {
      q: "Dlaczego Jacek Soplica w „Panu Tadeuszu” nie ujawnił swojej prawdziwej tożsamości po powrocie do Soplicowa?",
      options: [
        "Obawiał się aresztowania przez władze carskie za dawne morderstwo Stolnika.",
        "Chciał potajemnie odebrać zamek Horeszków z rąk Hrabiego.",
        "Zapomniał kim jest w wyniku ran odniesionych pod Hohenlinden.",
        "W ramach pokuty za zabójstwo Stolnika chciał odkupić winy nie jako dumny warchoł, lecz jako anonimowy, pokorny sługa sprawy narodowej (Ksiądz Robak)."
      ],
      correct: 3,
      explanation: "Jacek Soplica przyjął miano „Robaka”, by zrezygnować z pychy i zrehabilitować się cichą, niebezpieczną służbą emisariusza przygotowującego powstanie.",
      whyWrong: {
        0: "Władze carskie nie ścigały go za zabójstwo Horeszki — wręcz przeciwnie, uważały go błędnie za poplecznika.",
        1: "Jacek dążył do zgody rodów i pogodzenia Sopliców z Horeszkami poprzez ślub Tadeusza i Zosi.",
        2: "Jacek zachował pełną świadomość i cel działania."
      },
      examTip: "Ewolucja Jacka Soplicy to sztandarowy motyw przemiany duchowej i pokuty."
    },
    {
      q: "Kto w „Kordianie” Juliusza Słowackiego wypowiada do głównego bohatera słowa: „Niechaj się Polaki modlą, czczą cara i wierzą”?",
      options: [
        "Papież podczas audiencji w Watykanie",
        "Prezes na zebraniu spiskowców",
        "Wielki Książę Konstanty",
        "Doktor w szpitalu wariatów"
      ],
      correct: 0,
      explanation: "Papież nakazuje Kordianowi uległość wobec prawosławnego zaborcy i grozi rzuceniem klątwy na powstańców, co niszczy wiarę młodzieńca w autorytet Kościoła.",
      whyWrong: {
        1: "Prezes argumentował grzechem królobójstwa, ale nie reprezentował Rzymu.",
        2: "Konstanty był carskim bratem i namiestnikiem wojskowym w Warszawie.",
        3: "Doktor drwił z Kordiana, podważając sens poświęcenia."
      },
      examTip: "Scena u Papieża tłumaczy dramat rozczarowania Kordiana polityką Watykanu wobec powstania."
    },
    {
      q: "Które wydarzenie w „Panu Tadeuszu” doprowadziło do ostatecznego pojednania zwaśnionej szlachty zaścianka dobrzyńskiego z Soplicami?",
      options: [
        "Zaręczyny Tadeusza z Telimeną.",
        "Polowanie na niedźwiedzia w mateczniku.",
        "Wygrany przez Sędziego proces o zamek Horeszków.",
        "Wspólna walka z batalionem wojsk rosyjskich dowodzonym przez majora Płuta i kapitana Rykowa podczas bitwy w Soplicowie."
      ],
      correct: 3,
      explanation: "Najazd Moskali na Soplicowo sprawił, że Polacy odłożyli domowe swary i ramię w ramię odparli wspólnego wroga.",
      whyWrong: {
        0: "Tadeusz zaręczył się z Zosią, a nie z Telimeną.",
        1: "Polowanie na niedźwiedzia zbliżyło Hrabiego, ale nie zakończyło sporu o zamek.",
        2: "Proces podsycał spór, a nie go łagodził."
      },
      examTip: "Motyw zgody narodowej wobec zewnętrznego zagrożenia to kluczowy element Księgi IX."
    },
    {
      q: "Wskaż zdanie, które poprawnie charakteryzuje postać Karusi w balladzie „Romantyczność” Mickiewicza:",
      options: [
        "To racjonalna dziewczyna szukająca pomocy u wiejskiego lekarza.",
        "To obłąkana z żalu dziewczyna, która dzięki sile miłości widzi i dotyka ducha zmarłego narzeczonego Jasieńka, wbrew drwinom oświeconego Starca.",
        "To arystokratka gardząca zabobonami prostego ludu.",
        "To zjawa mszcząca się na niewiernym kochanku."
      ],
      correct: 1,
      explanation: "Karusia jest uosobieniem „czucia i wiary” — jej miłość przekracza granice śmierci, co lud rozumie, a racjonalista odrzuca jako majaczenie.",
      whyWrong: {
        0: "Karusia odrzucała pomoc medyczną i nie szukała lekarza.",
        2: "Karusia była prostą wiejską dziewczyną.",
        3: "Karusia nie mściła się na nikim — to motyw z „Świtezianki”."
      },
      examTip: "Karusia reprezentuje poznanie intuicyjne, Starzec — poznanie rozumowe."
    },
    {
      q: "Jakie znaczenie ma tytułowy instrument w wierszu Cypriana Kamila Norwida „Fortepian Szopena”?",
      options: [
        "Jest symbolem arystokratycznego luksusu i zbytku.",
        "Symbolizuje niemoc artysty zmagającego się z gruźlicą.",
        "Jest zwykłym meblem zniszczonym przez pomyłkę podczas pożaru pałacu.",
        "Jest symbolem sztuki doskonałej, łączącej polskość z uniwersalnym pięknem, która staje się ofiarą carskiego barbarzyństwa."
      ],
      correct: 3,
      explanation: "Fortepian Chopina wyrzucony przez żołnierzy carskich na bruk staje się symbolem tragicznego losu polskiej kultury pod carskim uciskiem.",
      whyWrong: {
        0: "Norwid nie traktował instrumentu Chopina jako przedmiotu snobizmu.",
        1: "Wiersz nie dotyczy choroby Chopina, lecz losu jego dzieła w Warszawie w 1863 r.",
        2: "Zniszczenie pałacu Zamoyskich było celową carską represją po zamachu."
      },
      examTip: "Fraza: „Idea — osiągnęła bruk” to jedno z najsłynniejszych zdań poezji Norwida."
    },
    {
      q: "Wskaż cechę, która NIE charakteryzuje dramatu romantycznego:",
      options: [
        "Rygorystyczne przestrzeganie antycznej zasady trzech jedności (czasu, miejsca, akcji).",
        "Kompozycja otwarta i fragmentaryczność scen.",
        "Synkretyzm rodzajowy (łączenie dramatu, epiki i liryki).",
        "Współwystępowanie świata realnego z siłami nadprzyrodzonymi (duchy, anioły, diabły)."
      ],
      correct: 0,
      explanation: "Dramat romantyczny programowo odrzucał regułę trzech jedności na rzecz swobody czasoprzestrzennej i wielowątkowości.",
      whyWrong: {
        1: "Kompozycja otwarta to sztandarowy wyznacznik gatunku (np. brak finału w „Kordianie”).",
        2: "Synkretyzm (np. Ustęp epicki w „Dziadach”) jest stałą cechą dramatu romantycznego.",
        3: "Obecność zjaw i zaświatów to fundament spirytualizmu romantycznego."
      },
      examTip: "Pytanie o cechy dramatu romantycznego to maturalny pewniak za 2 punkty."
    },
    {
      q: "O czym opowiada Jan Sobolewski w scenie I (więziennej) w „Dziadach części III”?",
      options: [
        "O ucieczce Konrada z celi przez podziemny korytarz.",
        "O wywózce kibitkami na Sybir uwięzionych przez Nowosilcowa polskich studentów i dzieci, w tym o męczeństwie Janczewskiego i Wasilewskiego.",
        "O przebiegu nocy listopadowej i szturmie na Belweder.",
        "O zawarciu tajnego przymierza z rewolucjonistami rosyjskimi."
      ],
      correct: 1,
      explanation: "Sobolewski był świadkiem wywózki skazanych na zsyłkę uczniów — jego relacja to najbardziej wstrząsający obraz martyrologii polskiej młodzieży w dramacie.",
      whyWrong: {
        0: "Konrad nie uciekał z celi.",
        2: "Scena dotyczy procesu filomatów (1823), a nie nocy listopadowej (1830).",
        3: "Przymierze z Rosjanami pojawia się w wierszu „Do przyjaciół Moskali”, a nie w celi."
      },
      examTip: "Postać Janczewskiego krzyczącego z kibitki „Jeszcze Polska nie zginęła!” to żelazny topos patriotyczny."
    },
    {
      q: "Jakie przesłanie niesie wiersz Cypriana Kamila Norwida „Bema pamięci żałobny-rapsod”?",
      options: [
        "Potępienie powstań zbrojnych jako niepotrzebnego przelewu krwi.",
        "Żal, że po śmierci generała nikt już nie pamięta o jego zasługach.",
        "Przekonanie, że śmierć bohatera narodowego nie kończy walki, lecz staje się niegasnącym płomieniem porywającym naród w pochodzie ku wolności.",
        "Pochwała ugody z carem w celu ocalenia biologicznego bytu narodu."
      ],
      correct: 2,
      explanation: "Rapsod Norwida przekształca żałobny kondukt w triumfalny marsz ludzkości ku przyszłemu wyzwoleniu.",
      whyWrong: {
        0: "Norwid czcił bohaterstwo gen. Bema walczącego w Polsce i na Węgrzech.",
        1: "Wiersz dowodzi, że pamięć o wielkich ludziach przekracza grób.",
        3: "Norwid nie propagował serwilizmu wobec zaborcy."
      },
      examTip: "Zwróć uwagę na stylizację rycerską wiersza (topory, pachołki, koń wodza)."
    },
    {
      q: "Na czym polegał tragizm Konrada Wallenroda w powieści poetyckiej Mickiewicza?",
      options: [
        "Został zdemaskowany przez Krzyżaków przed rozpoczęciem walki.",
        "Aby uratować ojczyznę, musiał sprzeniewierzyć się kodeksowi rycerskiemu, posłużyć się zdradą i podstępem, co zniszczyło go moralnie i doprowadziło do samobójstwa.",
        "Został otruty przez Aldonę, która uznała go za zdrajcę Litwy.",
        "Utracił pamięć o rodzinnym kraju po uderzeniu w bitwie."
      ],
      correct: 1,
      explanation: "Wallenrodyzm to tragiczny dylemat: zwycięstwo militarne okupione osobistą hańbą moralną i poczuciem złamania rycerskiego honoru.",
      whyWrong: {
        0: "Wallenrod skutecznie doprowadził Zakon do klęski militarnej.",
        2: "Aldona kochała go do końca i zamurowała się w wieży, by być blisko niego.",
        3: "Wallenrod doskonale pamiętał o Litwie dzięki pieśniom Halbana."
      },
      examTip: "Motto utworu z Machiavellego: „Macie bowiem wiedzieć, że są dwa sposoby walczenia: trzeba być lisem i lwem”."
    },
    {
      q: "Wskaż zdanie prawdziwe dotyczące poematu „Pan Tadeusz” Adama Mickiewicza:",
      options: [
        "Utwór został napisany prozą poetycką na wzór biblijny.",
        "Akcja utworu toczy się w czasie powstania styczniowego pod Warszawą.",
        "Dzieło składa się z 12 ksiąg pisanych regularnym trzynastozgłoskowcem ze średniówką po 7 sylabie.",
        "Głównym wątkiem utworu jest krwawa zemsta Tadeusza na zabójcach jego matki."
      ],
      correct: 2,
      explanation: "„Pan Tadeusz” to klasyczny wierszowany epos pisany polskim trzynastozgłoskowcem (7+6) z rymami parzystymi (AABB).",
      whyWrong: {
        0: "Epos jest pisany wierszem, a nie prozą.",
        1: "Akcja toczy się w latach 1811–1812 na Litwie (wojny napoleońskie).",
        3: "Wątkiem jest spór o zamek, miłość Tadeusza i Zosi oraz pokuta Jacka Soplicy."
      },
      examTip: "Znajomość formy trzynastozgłoskowca jest wymagana w zadaniach wersyfikacyjnych CKE."
    },
    {
      q: "Co w balladzie „Romantyczność” Adama Mickiewicza symbolizuje spór między Narratorem a Starcem?",
      options: [
        "Konflikt między romantycznym poznaniem intuicyjno-uczuciowym („czucie i wiara”) a oświeceniowym racjonalizmem („szkiełko i oko”).",
        "Spór polityczny o kształt granicy między Litwą a Królestwem Polskim.",
        "Różnicę między stylem klasycystycznym a barokowym konceptem w poezji.",
        "Walkę o majątek rodzinny między Karusią a mieszkańcami miasteczka."
      ],
      correct: 0,
      explanation: "Starzec reprezentuje zimny empiryzm oświeceniowy („szkiełko i oko”), a Narrator staje po stronie ludu i Karusi, głosząc prawdę serca i empatii.",
      whyWrong: {
        1: "Ballada jest manifestem filozoficzno-literackim, nie politycznym.",
        2: "Nie dotyczy teorii poezji barokowej.",
        3: "Karusia rozmawia z duchem zmarłego ukochanego Jasieńka, a nie walczy o spadek."
      },
      examTip: "Wers „Czucie i wiara silniej mówi do mnie / Niż mędrca szkiełko i oko” to hasło-klucz przełomu romantycznego."
    },
    {
      q: "Który bohater „Dziadów części III” reprezentuje prometejski bunt przeciwko Bogu, a kto pokorną wiarę i wizję mesjanistyczną?",
      options: [
        "Bunt reprezentuje Konrad (Wielka Improwizacja), a pokorę i mesjanizm — Ksiądz Piotr (Widzenie).",
        "Bunt reprezentuje Ksiądz Piotr, a pokorę — Senator Nowosilcow.",
        "Bunt reprezentuje Ewa, a mesjanizm — Gustaw w celi bazylianów.",
        "Bunt reprezentuje Piotr Wysocki, a pokorę — Doktor."
      ],
      correct: 0,
      explanation: "Konrad w Wielkiej Improwizacji bluźni z pychy i miłości do narodu, żądając „rządu dusz”, natomiast pokorny Ksiądz Piotr staje się narzędziem Boga i otrzymuje proroctwo o Polsce jako Chrystusie narodów.",
      whyWrong: {
        1: "Ksiądz Piotr jest ucieleśnieniem chrześcijańskiej pokory, a Senator — carskiego zepsucia.",
        2: "Ewa to niewinna, pobożna dziewczyna modląca się za więźniów.",
        3: "Doktor to służalec Nowosilcowa."
      },
      examTip: "Kontrast pychy Konrada i pokory Księdza Piotra jest kluczowym motywem „Dziadów cz. III”."
    },
    {
      q: "Co wydarzyło się w scenie I („Więzienie”) „Dziadów części III” i jaką funkcję pełni w dramacie?",
      options: [
        "Więźniowie filomaci dzielą się opowieściami (m.in. Sobolewski o wywózce dzieci na Sybir), ukazując realne męczeństwo polskiego narodu pod zaborem rosyjskim.",
        "Konrad ucieka z klasztoru bazylianów do Paryża na spotkanie z papieżem.",
        "Ksiądz Piotr ogłasza upadek powstania listopadowego przed senatem warszawskim.",
        "Nowosilcow wręcza więźniom ułaskawienie w zamian za rezygnację z nauki."
      ],
      correct: 0,
      explanation: "Scena I buduje realistyczny obraz carskich represji w Wilnie (proces filomatów i filaretów) oraz przemiany Gustawa w Konrada.",
      whyWrong: {
        1: "Do Paryża i Rzymu podróżuje Kordian (bohater Słowackiego), nie Konrad.",
        2: "Akcja toczy się w 1823 r. w Wilnie, przed powstaniem listopadowym.",
        3: "Nowosilcow właśnie zaostrzał śledztwo i represje."
      },
      examTip: "Nie myl Gustawa-Konrada (Mickiewicz) z Kordianem (Słowacki) — to częsta pułapka maturalna."
    },
    {
      q: "Jakie wydarzenie w Rzymie z Aktu II „Kordiana” przyspieszyło rozczarowanie bohatera do instytucji międzynarodowych?",
      options: [
        "Papież Grzegorz XVI odmówił błogosławieństwa dla polskiej walki o wolność i nakazał Polakom posłuszeństwo wobec cara.",
        "Król Anglii odmówił Kordianowi pożyczki na zakup broni dla spiskowców.",
        "Wioletta wyznała Kordianowi, że wstąpiła do zakonu karmelitanek.",
        "Książę Konstanty aresztował Kordiana na placu św. Piotra."
      ],
      correct: 0,
      explanation: "Papież przyjął podarunek (garść polskiej ziemi z krwią męczenników) z obojętnością i wezwał do uległości wobec caratu, co zburzyło resztki złudzeń Kordiana.",
      whyWrong: {
        1: "W Londynie Kordian rozmawiał z dozorcą w parku i dostrzegł wszechwładzę pieniądza, nie prosił króla o pożyczkę.",
        2: "Wioletta opuściła Kordiana, gdy sądziła, że stracił majątek.",
        3: "Konstanty pojawia się w Akcie III w Warszawie, nie w Rzymie."
      },
      examTip: "Wizyta w Watykanie stanowi gorzką polemikę Słowackiego z mesjanistyczną wiarą w opiekę Kościoła nad polską sprawą."
    },
    {
      q: "Co było powodem spóźnienia się posłańca z ułaskawieniem w finale „Kordiana” i jak należy rozumieć zakończenie dramatu?",
      options: [
        "Adiutant z ułaskawieniem od Wielkiego Księcia Konstantego nie zdążył przed rozkazem oficera (lub dotarł w ostatniej chwili) — dramat ma zakończenie otwarte.",
        "Kordian sam odmówił przyjęcia ułaskawienia i wyskoczył przez okno Cytadeli.",
        "Car Mikołaj I osobiście ułaskawił Kordiana podczas balu koronacyjnego.",
        "Spiskowcy odbili Kordiana z placu Marsowego i wywieźli go do Szwajcarii."
      ],
      correct: 0,
      explanation: "Słowacki celowo urywa akcję dokładnie w momencie, gdy oficer podnosi rękę z rozkazem strzału, a z boku nadjeżdża adiutant — finał pozostaje niedopowiedziany (otwarty).",
      whyWrong: {
        1: "Nie ma takiej sceny w dramacie.",
        2: "Car podpisał wyrok śmierci, a o ułaskawienie walczył brat cara, Konstanty.",
        3: "Spiskowcy nie odbili Kordiana."
      },
      examTip: "Kompozycja otwarta finału „Kordiana” to ulubione pytanie testowe CKE o budowę dramatu romantycznego."
    },
    {
      q: "Dlaczego Gerwazy Rębajło przez lata nienawidził Sopliców i na końcu wybaczył Jackowi Soplicy?",
      options: [
        "Poprzysiągł zemstę za zabójstwo swojego pana, Stolnika Horeszki, lecz na łożu śmierci Jacka (ks. Robaka) usłyszał o jego pokucie i ocaleniu Hrabiego.",
        "Zazdrościł Sędziemu Soplicy bogactwa i tytułu hrabiowskiego.",
        "Był agentem carskim próbującym przejąć zamek Horeszków dla Rosji.",
        "Chciał poślubić Telimenę, która wybrała Tadeusza."
      ],
      correct: 0,
      explanation: "Gerwazy był wiernym sługą Stolnika i po jego śmierci mścił się na Soplicach, ale wyznanie umierającego księdza Robaka oraz fakt, że Stolnik przed śmiercią wybaczył Jackowi znakiem krzyża, skłoniły Klucznika do pojednania.",
      whyWrong: {
        1: "Gerwazy nie walczył o własne bogactwo, lecz o pamięć rodu Horeszków.",
        2: "Gerwazy walczył przeciwko Moskalom podczas zajazdu w Księdze IX.",
        3: "Nie miał wątku miłosnego z Telimeną."
      },
      examTip: "Spowiedź Jacka Soplicy przed Gerwazym (Księga X) to szczytowy moment motywu winy, pokuty i przebaczenia w literaturze polskiej."
    },
    {
      q: "Które zdanie najtrafniej opisuje funkcję „Pana Tadeusza” jako epopei narodowej?",
      options: [
        "Utrwala obraz odchodzącej Polski szlacheckiej w chwili przełomu dziejowego (1811–1812), łącząc realizm obyczajowy z pokrzepieniem serc emigrantów.",
        "Jest realistyczną powieścią krytykującą bezwzględnie wszelkie tradycje ziemiańskie.",
        "Opisuje powstanie styczniowe na Żmudzi z perspektywy pozytywistycznego scjentyzmu.",
        "Stanowi satyrę oświeceniową na sejmiki szlacheckie za czasów Stanisława Augusta."
      ],
      correct: 0,
      explanation: "Mickiewicz na emigracji w Paryżu stworzył nostalgiczny, idealizowany, lecz pełen humoru i prawdy obraz szlacheckiego świata na progu nadziei napoleońskiej.",
      whyWrong: {
        1: "Utwór pokazuje wady szlachty (kłótliwość, prywata), ale z ogromnym ciepłem i afirmacją patriotyzmu.",
        2: "Akcja toczy się w latach 1811–1812 (na ponad 50 lat przed powstaniem styczniowym).",
        3: "To epopeja romantyczna, nie satyra oświeceniowa."
      },
      examTip: "Pamiętaj: akcja „Pana Tadeusza” = 5 dni w 1811 r. i 1 dzień w 1812 r. (wiosna napoleońska)."
    },
    {
      q: "Jaki główny sens ma refren i pointa wiersza Cypriana Kamila Norwida „Moja piosnka [II]” („Do kraju tego, gdzie kruszynę chleba...”)?",
      options: [
        "Wyraża głęboką tęsknotę wygnańca za Polską prostych wartości moralnych, szacunku dla chleba i dotrzymywania danego słowa.",
        "Wzywa emigrantów do natychmiastowego ataku zbrojnego na Petersburg.",
        "Krytykuje przyrodę polską jako ubogą w porównaniu z krajobrazem Włoch.",
        "Chwali nowoczesny przemysł i koleje żelazne w Europie Zachodniej."
      ],
      correct: 0,
      explanation: "Norwid buduje portret idealnej ojczyzny poprzez etykę codzienności (podnoszenie kruszyny chleba z ziemi, poszanowanie bocianiego gniazda, „tak” za „tak” i „nie” za „nie”).",
      whyWrong: {
        1: "Wiersz jest liryczną elegią tęsknoty, nie wezwaniem militarnym.",
        2: "Poeta z czułością wspomina właśnie polską przyrodę i bociany.",
        3: "Nie ma w utworze pochwały industrializacji."
      },
      examTip: "„Moja piosnka [II]” to znakomity przykład patriotyzmu codziennego i motywu emigracji/tęsknoty za ojczyzną."
    }
  ]
};
