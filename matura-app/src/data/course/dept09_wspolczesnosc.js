export const DEPT_09 = {
  id: 'dept-09',
  displayNum: 9,
  code: 'DZIAŁ 9',
  title: 'Literatura Współczesna — Poezja i Groteska',
  subtitle: '„Tango” Mrożka (w całości), powojenna poezja świadectwa (Różewicz, Herbert, Szymborska, Miłosz) i proza stanu wojennego',
  duration: '85 min',
  xp: 260,
  notes: [
    {
      id: 'kn9-1',
      title: 'Sławomir Mrożek „Tango” — groteska, odwrócony bunt i triumf chamstwa',
      badge: 'Lektura obowiązkowa (w całości)',
      intro:
        '„Tango” (1964) to arcydzieło polskiego teatru absurdu i groteski. Mrożek konstruuje wielopoziomową parabolę o kryzysie kultury europejskiej, bankructwie awangardowych rewolucji obyczajowych oraz nieuchronnym mechanizmie przejmowania władzy przez prymitywną, brutalną siłę (totalitaryzm / faszyzm / komunizm).',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: 'Uwaga na błąd kardynalny w „Tangu” Mrożka!',
          items: [
            '1. Artur NIE buntuje się przeciwko rygorom tradycji, lecz PRZECIWKO ICH BRAKOWI! To syn domaga się zakazów, obyczaju i ślubu, a rodzice (Stomil i Eleonora) forsują całkowitą anarchię i swobodę seksualną.',
            '2. Artur NIE ginie w pojedynku ani przez samobójstwo — zostaje zdradziecko zabity ciosem w kark (kaniakiem) przez Edka tuż po tym, gdy dowiaduje się o zdradzie narzeczonej Ali.',
            '3. Finałowy taniec la cumparsita tańczy Edek z wujem Eugeniuszem (reprezentantem dawnej inteligencji, który oportunistycznie zakłada lokajskie getry i podporządkowuje się nowemu władcy), a NIE Artur czy Stomil.'
          ]
        },
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Kluczowe pojęcia i problematyka dramatu',
          items: [
            'Odwrócony konflikt pokoleń: młodzież chce ładu i skrępowania formą; starzy żyją w wiecznym buncie z młodości i nudzie bezkształtu.',
            'Dekonstrukcja Formy: w świecie, w którym wszystko jest wolno, wolność staje się bezwartościowa („Buntować się przeciw wam? A kto wy jesteście? Bezkształtna masa, amorficzna maź!”).',
            'Sama forma to za mało: Artur odkrywa, że tradycyjny ślub bez autentycznej wiary jest pusty. Szukając nowej idei scalającej świat, dochodzi do władzy absolutnej nad życiem i śmiercią, co toruje drogę brutalnej sile.',
            'Triumf Edka: Edek to ucieleśnienie masowego prostaka, bezrefleksyjnej siły fizycznej i bezwzględności. Gdy intelektualiści spierają się o idee, Edek po prostu zadaje śmiertelny cios.'
          ]
        },
        {
          type: 'quote',
          label: 'Finałowe didaskalia dramatu — taniec La Cumparsita',
          text:
            '„Edek bierze Eugeniusza wpół. [...] Z głośnika rozlega się z całą siłą ostre, huczne, zmysłowe tango „La Cumparsita”. Grają je same instrumenty dęte, głośno, brutalnie, z ogromnym wyrazem. Edek tańczy z Eugeniuszem tango. Edek prowadzi. Eugeniusz posłusznie stawia kroki. Tańczą poprawnie, z wielką powagą, z elegancją typową dla tanga. Edek ma na sobie za ciasną marynarkę Artura. [...] Kurtyna zapada powoli”.'
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Artur — tragiczny reformator i niedoszły tyran',
              desc: '25-letni student medycyny i filozofii, który pragnie przywrócić porządek w zdemoralizowanym domu.',
              details: {
                summary:
                  'Artur cierpi na brak ograniczeń. Chce uporządkować salon (usunięcie katafalku, dziecinnego wózka) i zrekonstruować tradycyjny ślub z Alą jako ceremonię nadającą sens życiu.',
                bullets: [
                  'Dostrzega, że rodzice żyją w ułudzie wolności, która zmieniła się w bezwład i bałagan.',
                  'Zmusza babcię Eugenię do leżenia na katafalku, a Stomilowi wręcza rewolwer, by zastrzelił cudzołożącego Edka.',
                  'Kryzys ideowy: śmierć babci uświadamia mu, że sama forma nie uratuje świata — decyduje się na terror i władzę („Tylko władza da się stworzyć z niczego!”).',
                  'Zostaje zabity przez Edka po wyznaniu Ali, że zdradziła go rano z Edkiem.'
                ],
                essayUse:
                  'Idealny przykład do tematów o buncie przeciwko chaosowi, pułapkach rewolucji, niemocy intelektualisty wobec przemocy oraz konflikcie jednostki z otoczeniem.'
              }
            },
            {
              term: 'Stomil i Eleonora — awangarda w stanie rozkładu',
              desc: 'Rodzice Artura, którzy w młodości zburzyli tradycyjną moralność i teraz wegetują w pustce.',
              details: {
                summary:
                  'Stomil to pseudoartysta paradujący w rozchełstanej piżamie, zajmujący się bezsensownymi eksperymentami teatralnymi. Eleonora otwarcie romansuje z lokajem Edkiem.',
                bullets: [
                  'Uważają brak wstydu i konwenansów za największe osiągnięcie ludzkości.',
                  'Gdy syn żąda od Stomila honorowego pojedynku o żonę, Stomil daje się wciągnąć Edkowi w partię brydża.',
                  'Symbolizują klęskę inteligencji liberalno-awangardowej, która niszcząc tradycyjne wartości, stworzyła próżnię dla prymitywnego autorytaryzmu.'
                ],
                essayUse:
                  'Używaj w motywie rodziny w kryzysie, krytyki sztuki oderwanej od etyki oraz upadku autorytetu rodzicielskiego.'
              }
            },
            {
              term: 'Edek (Edward Wachmistrz) — bezwzględny brutal',
              desc: 'Prymitywny sługus, karciarz i kochanek matki, który ostatecznie przejmuje absolutną władzę.',
              details: {
                summary:
                  'Początkowo tolerowany jako nieszkodliwy „prostaczek z ludu”. W rzeczywistości cyniczny pragmatyk, który bez skrupułów wykorzystuje naiwność gospodarzy.',
                bullets: [
                  'Cechy: fizyczna siła, brak norm moralnych, zmysłowość, wulgarność i bezczelność.',
                  'Zabija Artura bez wahania, a następnie wkłada jego za ciasną marynarkę, ogłaszając nowy porządek: „Teraz moja kolej. Wy będziecie mnie słuchać”.',
                  'Jego tango z Eugeniuszem to symboliczny sojusz brutalnej dyktatury z kapitulującym oportunizmem elit.'
                ],
                essayUse:
                  'Znakomity do tematów o naturze totalitaryzmu, motywie tyrana, zderzeniu rozumu z siłą i triumfie antykultury.'
              }
            },
            {
              term: 'Groteska i nawiązania do „Wesela” i „Hamleta”',
              desc: 'Zabiegi estetyczne i intertekstualne tworzące strukturę komediowo-tragiczną.',
              details: {
                summary:
                  'Mrożek łączy tragizm losów Artura z jarmarcznym komizmem sytuacji (babcia w dżokejce, ojciec bez spodni).',
                bullets: [
                  'Nawiązanie do „Hamleta” Szekspira: Artur jak Hamlet chce pomścić upadek moralny matki i zabić jej kochanka, lecz paraliżuje go groteskowa rzeczywistość.',
                  'Nawiązanie do „Wesela” Wyspiańskiego: finałowe tango La Cumparsita to współczesny odpowiednik chocholego tańca — letarg i zniewolenie narodu przez obcą, prymitywną siłę.',
                  'Klamra dramatu: sztuka zaczyna się i kończy grą w karty oraz zmysłowym tangiem.'
                ],
                essayUse:
                  'W pytaniach i wypracowaniach o roli groteski, funkcji intertekstualności i nawiązaniach do dramatu narodowego.'
              }
            }
          ]
        }
      ],
      flashcards: [],
      quiz: []
    },
    {
      id: 'kn9-2',
      title: 'Tadeusz Różewicz — poezja po Holokauście i kryzys wartości',
      badge: 'Pewniak CKE (Poezja)',
      intro:
        'Tadeusz Różewicz debiutując tomem „Niepokój” (1947), dokonał najgłębszej rewolucji w powojennej poezji polskiej. Wstrząśnięty doświadczeniem Zagłady odrzucił tradycyjne piękno, metaforę i rym, tworząc tzw. „wiersz różewiczowski” — surowy, ascetyczny zapis porażenia nieludzkim światem.',
      blocks: [
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Wiersz „Ocalony” (1947) — kluczowe tezy interpretacyjne',
          items: [
            'Dramat 24-letniego podmiotu lirycznego: ocalał fizycznie z wojennej rzezi, lecz został doszczętnie zniszczony moralnie i psychicznie.',
            'Zrównanie wartości: wojna unieważniła fundamenty etyki europejskiej — pojęcia stały się pustymi dźwiękami („cnota i występek / prawda i kłamstwo / piękno i brzydota / męstwo i tchórzostwo — znaczyły dokładnie to samo”).',
            'Zatarte granice: człowiek okazał się tożsamy ze zwierzęciem i rzeczą („człowieka tak się zabija jak zwierzę / widziałem: / furgony porąbanych ludzi / którzy nie zostaną zbawieni”).',
            'Błaganie o mistrza: finałowa prośba o nauczyciela, który „od nowa nazwie rzeczy i pojęcia / i oddzieli światło od ciemności” to krzyk o odbudowę Dekalogu od zera.'
          ]
        },
        {
          type: 'quote',
          label: 'Tadeusz Różewicz — „Ocalony” (fragment)',
          text:
            '„Mam dwadzieścia cztery lata / ocalałem / prowadzony na rzeź. // [...] Szukam nauczyciela i mistrza / niech przywróci mi wzrok słuch i mowę / niech jeszcze raz nazwie rzeczy i pojęcia / niech oddzieli światło od ciemności. // Mam dwadzieścia cztery lata / ocalałem / prowadzony na rzeź”.'
        },
        {
          type: 'grid',
          items: [
            {
              term: '„Wiersz różewiczowski” — poezja ściśniętego gardła',
              desc: 'Nowatorski typ wiersza wolnego stworzony przez Tadeusza Różewicza.',
              details: {
                summary:
                  'Po Auschwitz tradycyjna, ozdobna poezja wydała się Różewiczowi niemoralna. Stworzył język ogołocony z metafor.',
                bullets: [
                  'Brak rymów, brak regularnego metrum i brak znaków interpunkcyjnych.',
                  'Krótkie, jedno- lub dwuwyrazowe wersy nadające wagę każdemu słowu.',
                  'Oparcie dynamiki na pauzach i przerzutniach semantycznych.',
                  'Styl zbliżony do oszczędnego protokołu sądowego lub zeznania naocznego świadka.'
                ],
                essayUse:
                  'Znakomity w zadaniach z teorii liryki w Części 2 arkusza oraz w wypracowaniach o ewolucji języka poezji wobec wojennej traumy.'
              }
            },
            {
              term: '„List do ludożerców” (1958) — apel o elementarne człowieczeństwo',
              desc: 'Gorzka satyra i zarazem uniwersalny apel przeciwko codziennemu egoizmowi.',
              details: {
                summary:
                  'Wiersz z podtytułem „szkic do dramatu współczesnego”. Ludożercami poeta nazywa zwykłych ludzi, którzy w powojennej szarzyźnie traktują innych jak wrogów.',
                bullets: [
                  'Obrazy codziennej agresji: walka o miejsce w przedziale kolejowym, kupowanie gazety z pogardą, zgrzytanie zębami na drugiego człowieka.',
                  'Przesłanie etyczne: „Nie zjadajmy się Dobrze / bo nie zmartwychwstaniemy / Naprawdę”.',
                  'Ostrzeżenie przed powrotem nieludzkiego świata w realiach powszedniego dnia.'
                ],
                essayUse:
                  'Wykorzystuj w tematach dotyczących relacji międzyludzkich, kryzysu empatii, dehumanizacji i apeli o tolerancję.'
              }
            }
          ]
        }
      ],
      flashcards: [],
      quiz: []
    },
    {
      id: 'kn9-3',
      title: 'Zbigniew Herbert — Pan Cogito i imperatyw wierności zasadom',
      badge: 'Pewniak CKE (Poezja)',
      intro:
        'Zbigniew Herbert to najwybitniejszy polski poeta-klasyk XX wieku. Poprzez postać Pana Cogito (od Kartezjańskiego „Cogito ergo sum” – myślę, więc jestem) stworzył uniwersalny kodeks etyczny człowieka broniącego godności i zasad moralnych w świecie totalitarnego kłamstwa, relatywizmu i przemocy.',
      blocks: [
        {
          type: 'callout',
          variant: 'emerald',
          title: '„Przesłanie Pana Cogito” (1974) — katechizm heroizmu moralnego',
          items: [
            'Nakaz bezwzględnego sprzeciwu: „Idź wyprostowany wśród tych co na kolanach / wśród odwróconych plecami i obalonych w proch”.',
            'Racja ocalenia: człowiek nie ocalał po to, by wygodnie żyć, lecz by dawać świadectwo prawdzie i pamięci o zamordowanych („masz mało czasu trzeba dać świadectwo”).',
            'Święta pogarda dla zła: pogarda dla katów, szpiclów i tchórzy, ale połączona z autoironią i samokrytycyzmem („strzeż się jednak dumy niepotrzebnej / oglądaj w lustrze swą błazeńską twarz”).',
            'Wierność przegranym bez nadziei na nagrodę: człowiek prawy musi trwać przy wartościach nawet wtedy, gdy sprawa jest z góry przegrana. Jedyną ziemską zapłatą będzie „chłosta śmiechu, zabójstwo na śmietniku”.',
            'Finałowy imperatyw: „Bądź wierny Idź” — lakoniczne polecenie trwania w prawdzie mimo samotności.'
          ]
        },
        {
          type: 'callout',
          variant: 'blue',
          title: 'Cechy dykcji poetyckiej Zbigniewa Herberta',
          items: [
            'Klasycyzm: odwołania do mitologii greckiej, historii Rzymu i filozofii antycznej.',
            'Ironia i dystans: ochrona przed patosem i pustym moralizatorstwem.',
            'Alegoryczność i uniwersalizm: wiersze pisane w realiach PRL stawały się ponadczasowymi traktatami o wolności ducha.'
          ]
        },
        {
          type: 'quote',
          label: 'Zbigniew Herbert — „Przesłanie Pana Cogito” (fragment)',
          text:
            '„powtarzaj stare zaklęcia ludzkości bajki i legendy / bo tak zdobędziesz dobro którego nie zdobędziesz / powtarzaj wielkie słowa powtarzaj je z uporem / jak ci co szli przez pustynię i ginęli w piasku // a nagrodzą cię za to tym co mają pod ręką / chłostą śmiechu zabójstwem na śmietniku // idź bo tylko tak będziesz przyjęty do grona zimnych czaszek / do grona twoich przodków: Gilgamesza Hektora Rolanda / obrońców królestwa bez kresu i miasta popiołów // Bądź wierny Idź”.'
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Postawa Pana Cogito — stoicyzm heroiczny',
              desc: 'Filozoficzny portret współczesnego inteligenta rozpiętego między słabością a nakazem etycznym.',
              details: {
                summary:
                  'Pan Cogito nie jest herosem bez skazy — odczuwa lęk, ból i zwątpienie, ale dokonuje świadomego wyboru wierności podstawowym wartościom.',
                bullets: [
                  'Odrzuca konformizm i układy z oprawcami.',
                  'Pojęcie „kwestii smaku”: sprzeciw wobec systemu opiera się nie tylko na ideologii, lecz na poczuciu estetyki i wstręcie do ordynarnego kłamstwa władzy.',
                  'Solidarność z ofiarami i przegranymi w historii.'
                ],
                essayUse:
                  'Niezbędny kontekst do tematów o odwadze cywilnej, oporze wobec tyranii, godności jednostki i roli wierności sumieniu.'
              }
            }
          ]
        }
      ],
      flashcards: [],
      quiz: []
    },
    {
      id: 'kn9-4',
      title: 'Szymborska, Miłosz i Nowakowski — Nobel, historia i PRL',
      badge: 'Pewniak CKE (Poezja i Proza)',
      intro:
        'Nobliści Wisława Szymborska i Czesław Miłosz oraz mistrz realistycznego opowiadania Marek Nowakowski dopełniają obraz literatury współczesnej: od poetyckiego zachwytu nad jednostkowym istnieniem, przez moralny sąd nad tyranem, aż po bezwzględną diagnozę realiów PRL i stanu wojennego.',
      blocks: [
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Czesław Miłosz — poeta jako pamięć i sumienie',
          items: [
            '„Który skrzywdziłeś” (1950): wiersz-ostrzeżenie przed pychą totalitarnych dyktatorów. Poeta staje się trybunałem skrzywdzonych: tyran może wymordować poddanych, ale słowo poety ocali pamięć o zbrodni („Nie bądź bezpieczny. Poeta pamięta. / Możesz go zabić — narodzi się nowy. / Spisane będą czyny i rozmowy”).',
            '„Campo di Fiori” (1943): zestawienie męczeńskiej śmierci filozofa Giordana Bruna na rzymskim stosie w 1600 r. z zagładą getta warszawskiego w 1643 r. Symbolem obojętności jest wirująca warszawska karuzela obok płonącego getta. Poeta postuluje „bunt poetyckiego słowa” przeciwko samotności ofiar.'
          ]
        },
        {
          type: 'callout',
          variant: 'blue',
          title: 'Wisława Szymborska — filozofia zachwytu i mikrokosmosu',
          items: [
            '„Nic dwa razy” (1957): afirmacja niepowtarzalności ludzkiego losu i heraklitejskiej zmienności („Żaden dzień się nie powtórzy / nie ma dwóch podobnych nocy / dwóch tych samych spojrzeń w oczy”).',
            '„Kot w pustym mieszkaniu” (1993): przejmujący obraz żałoby i pustki po stracie bliskiej osoby ukazany oczami osamotnionego zwierzęcia („Umrzeć — tego nie robi się kotu / Bo co ma począć kot w pustym mieszkaniu”). Brak patosu potęguje tragizm śmierci.',
            '„Radość pisania” (1967): autotematyczny manifest potęgi twórczej poety. Pisanie to „zemsta ręki śmiertelnej” nad niszczącym czasem — pisarz zachowuje istnienie wbrew śmierci.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Marek Nowakowski — „Górą Edek” i proza stanu wojennego',
              desc: 'Współczesne opowiadanie nawiązujące tytułem i przesłaniem do „Tanga” Mrożka.',
              details: {
                summary:
                  'Znakomite opowiadanie obyczajowe ukazujące konfrontację inteligenta w małym Fiacie z chamskim kierowcą dużego Fiata (lub Forda) na warszawskim skrzyżowaniu.',
                bullets: [
                  'Inteligent jest spychany z pasa ruchu przez bezczelnego kierowcę. Chce zaprotestować, lecz gdy widzi potężnego, prostackiego osiłka w skórzanej kurtce, spuszcza wzrok i ustępuje.',
                  'Tytułowy „Edek” to ucieleśnienie triumfu chamstwa, siły i bezprawia — wprost nawiązujący do Edka z „Tanga” Mrożka.',
                  'Autor stawia diagnozę polskiemu społeczeństwu: kultura, maniery i inteligencja kapitulują przed agresywnym prymitywizmem.'
                ],
                essayUse:
                  'Świetny, krótki tekst kultury do tematów o przemianach społecznych, relacji kultura vs brutalność oraz jako nawiązanie intertekstualne do Mrożka.'
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
      id: 'kf9-1',
      front: 'Jaka jest rola katafalku i wózka dziecięcego w salonie Stomila w „Tangu” Mrożka?',
      back: 'Katafalk po dziadku (sprzed 5 lat) i wózek Artura to symbole chaosu, braku formy i odrzucenia tradycji przez pokolenie rodziców.',
      hint: 'Pomyśl o przedmiotach z różnych etapów życia porzuconych w salonie.',
      category: 'lektura'
    },
    {
      id: 'kf9-2',
      front: 'Na czym polega paradoks odwróconego buntu pokoleń w „Tangu”?',
      back: 'Młody Artur buntuje się przeciw anarchii i domaga się tradycyjnych reguł oraz zakazów, podczas gdy starzy rodzice forsują rozwiązłość i brak norm.',
      hint: 'Kto chce zasad, a kto wolności bez granic?',
      category: 'motyw'
    },
    {
      id: 'kf9-3',
      front: 'Kto i w jaki sposób zabija Artura w finale „Tanga”?',
      back: 'Edek zabija Artura ciosem w kark (kaniakiem) od tyłu, po tym gdy Artur załamał się zdradą Ali.',
      hint: 'Prymitywna siła vs bezbronny intelektualista.',
      category: 'bohater'
    },
    {
      id: 'kf9-4',
      front: 'Jakie znaczenie ma finałowy taniec la cumparsita w „Tangu” i kto go tańczy?',
      back: 'Tańczą go Edek z wujem Eugeniuszem. Oznacza triumf prymitywnej siły fizycznej (Edek) i kapitulację konformistycznych elit (Eugeniusz).',
      hint: 'Aluzja do chocholego tańca z „Wesela”.',
      category: 'cytat'
    },
    {
      id: 'kf9-5',
      front: 'Do jakich dwóch wielkich dramatów nawiązuje Mrożek w „Tangu”?',
      back: 'Do „Hamleta” Williama Szekspira (motyw syna mszczącego się za upadek matki) oraz „Wesela” Stanisława Wyspiańskiego (finałowy letargiczny taniec).',
      hint: 'Jeden dramat elżbietański, drugi młodopolski.',
      category: 'kontekst'
    },
    {
      id: 'kf9-6',
      front: 'Czym jest tzw. „wiersz różewiczowski”?',
      back: 'Wiersz wolny, bezrymowy, pozbawiony znaków interpunkcyjnych i ozdobnych metafor; oparty na ascezie słowa i pauzach semantycznych.',
      hint: 'Poezja ściśniętego gardła po Zagładzie.',
      category: 'pojecie'
    },
    {
      id: 'kf9-7',
      front: 'O co prosi podmiot liryczny w finale wiersza „Ocalony” Tadeusza Różewicza?',
      back: 'O nauczyciela i mistrza, który od nowa nazwie rzeczy i pojęcia oraz oddzieli światło od ciemności (odbuduje zrujnowany Dekalog).',
      hint: 'Szukam nauczyciela i mistrza...',
      category: 'cytat'
    },
    {
      id: 'kf9-8',
      front: 'Kim są tytułowi „ludożercy” w wierszu Różewicza „List do ludożerców”?',
      back: 'To zwykli ludzie, którzy na co dzień wykazują egoizm, wrogość i znieczulicę wobec bliźnich (np. w kolejce, pociągu).',
      hint: 'Nie zjadajmy się, dobrze?',
      category: 'pojecie'
    },
    {
      id: 'kf9-9',
      front: 'Co oznacza kluczowe polecenie „Bądź wierny Idź” w „Przesłaniu Pana Cogito” Herberta?',
      back: 'Nakaz trwania przy wartościach moralnych, dawania świadectwa prawdzie i obrony skrzywdzonych mimo braku ziemskiej nagrody i groźby śmierci.',
      hint: 'Koniec wiersza, katechizm wierności.',
      category: 'cytat'
    },
    {
      id: 'kf9-10',
      front: 'Dlaczego wierność Pana Cogito skierowana jest ku „pokonanym i obalonym w proch”?',
      back: 'Bo etyka Herberta odrzuca kult zwycięzców; nakazuje solidarność z ofiarami i pamięć o zamordowanych przodkach (Roland, Hektor, Gilgamesz).',
      hint: 'Etyka bez nagrody doczesnej.',
      category: 'motyw'
    },
    {
      id: 'kf9-11',
      front: 'O czym mówi wiersz Wisławy Szymborskiej „Nic dwa razy”?',
      back: 'O niepowtarzalności każdej chwili ludzkiego życia; żaden dzień ani uścisk się nie powtórzy, dlatego rodzimy się bez wprawy i pomrzemy bez rutyny.',
      hint: 'Heraklitejska rzeka czasu.',
      category: 'motyw'
    },
    {
      id: 'kf9-12',
      front: 'W jaki sposób wiersz „Kot w pustym mieszkaniu” Szymborskiej przedstawia dramat żałoby?',
      back: 'Przez pryzmat opuszczonego kota, który nie rozumie śmierci właściciela, lecz odczuwa bolesną pustkę i zmianę porządku w mieszkaniu.',
      hint: '„Umrzeć — tego nie robi się kotu”.',
      category: 'pojecie'
    },
    {
      id: 'kf9-13',
      front: 'Na czym polega przesłanie wiersza Czesława Miłosza „Który skrzywdziłeś”?',
      back: 'To przestroga dla tyrana: władca może zabić poddanych, lecz nie ujdzie sprawiedliwości, gdyż poeta spisze jego zbrodnie dla potomnych.',
      hint: '„Nie bądź bezpieczny. Poeta pamięta”.',
      category: 'motyw'
    },
    {
      id: 'kf9-14',
      front: 'Jakie dwa obrazy zestawia Czesław Miłosz w wierszu „Campo di Fiori”?',
      back: 'Śmierć Giordana Bruna na stosie w Rzymie (1600) oraz płonące getto warszawskie (1943) obok beztroskiej karuzeli na placu Krasińskich.',
      hint: 'Samotność ginących i obojętność tłumu.',
      category: 'kontekst'
    },
    {
      id: 'kf9-15',
      front: 'Kim jest tytułowy bohater opowiadania Marka Nowakowskiego „Górą Edek”?',
      back: 'To bezczelny, silny fizycznie kierowca w skórzanej kurtce, który zajeżdża drogę inteligentowi i zmusza go do pokornego ustąpienia.',
      hint: 'Współczesna reinkarnacja Edka z dramatu Mrożka.',
      category: 'bohater'
    },
    {
      id: 'kf9-16',
      front: 'Co oznacza pojęcie „zemsta ręki śmiertelnej” w wierszu Szymborskiej „Radość pisania”?',
      back: 'Moc literatury do utrwalania ulotnych chwil i istot wbrew prawom przemijania i śmierci; artysta stwarza nieśmiertelny świat na papierze.',
      hint: 'Triumf kreacji nad przemijaniem.',
      category: 'cytat'
    },
    {
      id: 'kf9-17',
      front: 'Jaką postawę reprezentuje wuj Eugeniusz w „Tangu” Mrożka?',
      back: 'Oportunizm i uległość elit: najpierw współpracuje z Arturem, a po jego śmierci bez wahania podporządkowuje się prymitywnemu Edkowi.',
      hint: 'Zakłada lokajskie getry i tańczy tango.',
      category: 'bohater'
    },
    {
      id: 'kf9-18',
      front: 'Czym różni się postawa Różewicza od postawy Herberta wobec katastrofy wojennej?',
      back: 'Różewicz uważa, że wojna zniszczyła dawne wartości i język (nihilizm etyczny), a Herbert nakazuje trwać przy dawnych wartościach mimo klęski (stoicyzm).',
      hint: 'Ocalony (pustka) vs Pan Cogito (wierność).',
      category: 'kontekst'
    }
  ],
  quiz: [
    {
      id: "kq9-1",
      q: "Jaki jest główny cel działań Artura w dramacie „Tango” Sławomira Mrożka?",
      options: [
        "Przywrócenie norm moralnych, hierarchii i formy w pogrążonym w anarchii domu",
        "Zniszczenie tradycyjnego mieszczańskiego ładu i wprowadzenie rewolucji seksualnej",
        "Zdobycie majątku rodziny i ucieczka z Alą za granicę",
        "Zabicie Edka z zemsty za zamordowanie jego ojca Stomila"
      ],
      correct: 0,
      explanation: "Artur reprezentuje odwrócony bunt pokoleń — cierpi z powodu braku zakazów i reguł, dlatego chce zmusić rodzinę do powrotu do tradycji i zorganizować konwencjonalny ślub.",
      whyWrong: {
        1: "Zniszczenie ładu i rewolucję obyczajową przeprowadzili już jego rodzice (Stomil i Eleonora).",
        2: "Artur nie dba o pieniądze; kierują nim idee porządku i sensu istnienia.",
        3: "Stomil nie został zamordowany przez Edka — żyje i gra z nim w karty."
      },
      examTip: "Pamiętaj: bunt Artura jest „buntem na opak” — to młody domaga się reguł od wyzwolonych rodziców!"
    },
    {
      id: "kq9-2",
      q: "W jaki sposób ginie Artur w finale „Tanga”?",
      options: [
        "Popełnia samobójstwo z rozpaczy po zradzie Ali",
        "Zostaje zastrzelony z rewolweru przez zazdrosnego Stomila",
        "Zostaje zabity ciosem w kark z zaskoczenia przez Edka",
        "Umiera na katafalku z powodu nieuleczalnej choroby"
      ],
      correct: 2,
      explanation: "Gdy załamany zdradą Ali Artur traci panowanie nad sobą, Edek podstępnie zachodzi go od tyłu i zadaje mu śmiertelny cios kaniakiem w kark.",
      whyWrong: {
        0: "Artur nie popełnia samobójstwa — to Edek fizycznie pozbawia go życia.",
        1: "Stomil nie potrafi strzelać i zamiast tego gra w karty.",
        3: "Na katafalku ze starości umiera babcia Eugenia, a nie Artur."
      },
      examTip: "To jeden z najczęstszych błędów kardynalnych na maturze! Artur nie strzela do siebie, lecz zostaje zamordowany przez Edka."
    },
    {
      id: "kq9-3",
      q: "Finałowy taniec la cumparsita w „Tangu” tańczą:",
      options: [
        "Artur i Ala nad ciałem babci Eugenii",
        "Edek i Eleonora świętując przejęcie majątku",
        "Stomil i Eleonora na znak pojednania małżeńskiego",
        "Edek i wuj Eugeniusz nad zwłokami Artura"
      ],
      correct: 3,
      explanation: "Edek bierze wpół wuja Eugeniusza i tańczą tango La Cumparsita, co symbolizuje triumf bezczelnego chama nad skapitulowaną inteligencją.",
      whyWrong: {
        0: "Artur w tej scenie już nie żyje, a Ala płacze z boku.",
        1: "Eleonora była kochanką Edka, ale Edek tańczy z uległym Eugeniuszem w lokajskich getrach.",
        2: "Stomil i Eleonora są sparaliżowani strachem i bezradni."
      },
      examTip: "Taniec Edka z Eugeniuszem to bezpośrednia aluzja do chocholego tańca z „Wesela” Wyspiańskiego."
    },
    {
      id: "kq9-4",
      q: "W wierszu „Ocalony” Tadeusza Różewicza podmiot liryczny stwierdza, że:",
      options: [
        "Doświadczenie wojny doprowadziło do zatarcia różnic między pojęciami dobra i zła",
        "Poezja jest jedynym lekarstwem na zło świata i potrafi przywrócić wiarę w Boga",
        "Zbrodniarze wojenni zostaną natychmiast ukarani na Sądzie Ostatecznym",
        "Należy zapomnieć o przeszłości i bezrefleksyjnie cieszyć się ocalonym życiem"
      ],
      correct: 0,
      explanation: "Podmiot liryczny wyznaje, że cnota i występek, prawda i kłamstwo znaczyły dokładnie to samo — wojna doprowadziła do całkowitej ruiny tradycyjnego systemu wartości.",
      whyWrong: {
        1: "Różewicz odrzuca wiarę w łatwą moc sztuki; poezja tradycyjna wydała mu się bezradna.",
        2: "W wierszu pada wstrząsające zdanie, że furgony porąbanych ludzi „nie zostaną zbawieni”.",
        3: "Podmiot nie potrafi się cieszyć życiem — czuje się wewnętrznie martwy."
      },
      examTip: "Zwróć uwagę na kontrast: ciało ocalało z rzezi, ale dusza została unicestwiona przez nihilizm wojenny."
    },
    {
      id: "kq9-5",
      q: "Czym charakteryzuje się forma tzw. „wiersza różewiczowskiego”?",
      options: [
        "Kunsztowną formą sonetu z bogatymi rymami okalającymi",
        "Użyciem wyłącznie patetycznych archaizmów i inwokacji do bóstwa",
        "Trzynastozgłoskowcem ze średniówką po siódmej sylabie na wzór „Pana Tadeusza”",
        "Wierszem wolnym, bezrymowym, asyntaktycznym, pozbawionym znaków interpunkcyjnych i ozdobników"
      ],
      correct: 3,
      explanation: "Wiersz różewiczowski rezygnuje z rymów, metrum, interpunkcji i metafor na rzecz maksymalnego ascetyzmu i surowości języka.",
      whyWrong: {
        0: "Sonety pisał Mickiewicz czy Szekspir, nie Różewicz w tomie „Niepokój”.",
        1: "Różewicz unikał patosu — uważał go za fałszywy i niemoralny po Zagładzie.",
        2: "Trzynastozgłoskowiec to domena eposu klasycznego i Mickiewicza."
      },
      examTip: "W teście historycznoliterackim często pytają o budowę wiersza Różewicza: pamiętaj o pojęciu „przerzutni semantycznej” i „ascezy poetyckiej”."
    },
    {
      id: "kq9-6",
      q: "Kluczowe przesłanie utworu Zbigniewa Herberta „Przesłanie Pana Cogito” nakazuje:",
      options: [
        "Podporządkowanie się silniejszym w celu biologicznego przetrwania represji",
        "Trwanie przy wartościach moralnych i dawanie świadectwa prawdzie bez względu na klęskę",
        "Zbrojny odwet i fizyczną zemstę na oprawcach i szpiclach",
        "Ucieczkę w świat sztuki i całkowite odcięcie się od spraw społecznych"
      ],
      correct: 1,
      explanation: "Imperatyw „Bądź wierny Idź” zobowiązuje człowieka do wierności zasadom, godności i pamięci o zamordowanych, nawet jeśli jedyną nagrodą będzie pogarda i śmierć.",
      whyWrong: {
        0: "Pan Cogito gardzi konformizmem i „tymi co na kolanach”.",
        2: "Herbert nie nawołuje do ślepej zemsty, lecz do „gniewu bezsilnego” i zachowania czystości moralnej.",
        3: "Etyka Herberta to etyka zaangażowana, a nie eskapistyczna."
      },
      examTip: "Herbert definiuje heroizm nowoczesny: nie walka o ordery, lecz cicha wierność przegranym."
    },
    {
      id: "kq9-7",
      q: "W wierszu „Campo di Fiori” Czesław Miłosz zestawia ze sobą:",
      options: [
        "Zwycięstwo pod Grunwaldem z klęską powstania warszawskiego",
        "Sąd nad Sokratesem z procesem Jezusa przed Piłatem",
        "Egzekucję powstańców listopadowych z męczeństwem pierwszych chrześcijan",
        "Męczeństwo Giordana Bruna na stosie z zagładą powstańców w getcie warszawskim"
      ],
      correct: 3,
      explanation: "Miłosz porównuje rzymski tłum bawiący się tuż po spaleniu Giordana Bruna z warszawiakami bawiącymi się na karuzeli obok płonącego getta, ukazując wieczną samotność ginących.",
      whyWrong: {
        0: "Miłosz nie nawiązuje w tym wierszu do bitwy pod Grunwaldem.",
        1: "Męczeństwo Sokratesa opisywał Norwid, nie Miłosz w „Campo di Fiori”.",
        2: "To analogia z epoki romantyzmu u Słowackiego, a nie u Miłosza."
      },
      examTip: "Motyw karuzeli na placu Krasińskich to wstrząsający topos obojętności świadków Zagłady."
    },
    {
      id: "kq9-8",
      q: "Wiersz Czesława Miłosza „Który skrzywdziłeś” zawiera przede wszystkim:",
      options: [
        "Pochwałę bezkarności i wiecznej potęgi autorytarnego władcy",
        "Ostrzeżenie dla tyrana, że poezja spisze jego zbrodnie i przekaże je osądowi historii",
        "Religijną modlitwę o odpuszczenie grzechów prześladowcom",
        "Apel do narodu o zbrojne powstanie przeciwko zaborcy"
      ],
      correct: 1,
      explanation: "Wiersz ostrzega tyrana: „Nie bądź bezpieczny. Poeta pamięta. / Możesz go zabić — narodzi się nowy. / Spisane będą czyny i rozmowy”. Poeta jest obrońcą skrzywdzonych i strażnikiem pamięci.",
      whyWrong: {
        0: "Wiersz mówi o nieuchronnym upadku i potępieniu zbrodniarza („Lepszy dla ciebie byłby świt zimowy / I sznur i gałąź...”).",
        2: "Wiersz nie ma charakteru modlitwy, lecz moralnego oskarżenia i wyroku.",
        3: "To wiersz o funkcji poezji i pamięci, a nie tyrtejska pieśń powstańcza."
      },
      examTip: "Wiersz ten został umieszczony na Pomniku Poległych Stoczniowców 1970 w Gdańsku — to świetny kontekst historyczny!"
    },
    {
      id: "kq9-9",
      q: "W wierszu Wisławy Szymborskiej „Kot w pustym mieszkaniu” motyw śmierci został ukazany:",
      options: [
        "Przez pryzmat rozpaczy osamotnionego zwierzęcia, co pozwala uniknąć patosu",
        "Za pomocą średniowiecznego toposu danse macabre i upersonifikowanej kostuchy",
        "W formie tragicznego monologu umierającego żołnierza na polu bitwy",
        "Jako mistyczna brama do rajskiego zjednoczenia dusz w zaświatach"
      ],
      correct: 0,
      explanation: "Szymborska opisuje stratę bliskiego z perspektywy kota, który zauważa brak człowieka w codziennych czynnościach („Ktoś tutaj był i był, / a potem nagle zniknął”), dzięki czemu wiersz jest głęboko poruszający bez cienia banału.",
      whyWrong: {
        1: "Danse macabre to motyw średniowieczny („Rozmowa Polikarpa”), nieobecny u Szymborskiej.",
        2: "Podmiotem ani bohaterem nie jest żołnierz, lecz kot w domowym pokoju.",
        3: "W wierszu nie ma religijnego mistycyzmu — jest dotkliwa, ziemska pustka."
      },
      examTip: "Zwróć uwagę na technikę „udziwnienia” (defamiliaryzacji): patrzenie na ludzkie dramaty z perspektywy nie-ludzkiej."
    },
    {
      id: "kq9-10",
      q: "Jaki problem społeczno-moralny podejmuje Marek Nowakowski w opowiadaniu „Górą Edek”?",
      options: [
        "Heroiczną walkę podziemia solidarnościowego z milicją w czasie stanu wojennego",
        "Dylematy moralne lekarzy w realiach powojennego getta warszawskiego",
        "Kapitulację inteligencji i kultury osobistej przed bezczelnością i brutalną siłą",
        "Konflikt pokoleniowy między powstańcami warszawskimi a młodzieżą PRL"
      ],
      correct: 2,
      explanation: "Kierowca-inteligent zostaje bezprawnie zepchnięty z drogi przez chama w skórzanej kurtce i ze strachu ustępuje, co Nowakowski puentuje jako zwycięstwo prymitywizmu nad kulturą.",
      whyWrong: {
        0: "To opowiadanie obyczajowe o ruchu ulicznym i relacjach społecznych, a nie opis walki partyzanckiej.",
        1: "O lekarzach w getcie pisała Hanna Krall w „Zdążyć przed Panem Bogiem”.",
        3: "Bohaterowie reprezentują zderzenie chamstwa z inteligencją, a nie konflikt weteranów."
      },
      examTip: "Tytuł opowiadania to bezpośredni cytat i aluzja do Edka z „Tanga” Sławomira Mrożka."
    },
    {
      id: "kq9-11",
      q: "Sens metafory „zemsta ręki śmiertelnej” w wierszu Szymborskiej „Radość pisania” oznacza:",
      options: [
        "Zbrojny zamach poety na tyrana uciskającego społeczeństwo",
        "Ocalenie ulotnego świata przed przemijaniem dzięki potędze aktu twórczego",
        "Zemstę człowieka na naturze za jego śmiertelne przeznaczenie",
        "Odrzucenie pisania wierszy jako czynności bezużytecznej"
      ],
      correct: 1,
      explanation: "Dla Szymborskiej pisanie jest jedyną dostępną człowiekowi formą przezwyciężenia śmierci — słowo utrwala na papierze to, co w rzeczywistości musi zginąć.",
      whyWrong: {
        0: "Szymborska nie pisze o zamachu terrorystycznym, lecz o twórczości literackiej.",
        2: "Poetka nie mści się na naturze — w wierszu chroni sarnę przed myśliwymi.",
        3: "Wiersz jest pochwałą, a nie negacją radości pisania i wolności kreacji."
      },
      examTip: "Jest to wiersz autotematyczny — traktujący o procesie powstawania literatury i roli twórcy."
    },
    {
      id: "kq9-12",
      q: "Co w „Tangu” Mrożka symbolizują lokajskie getry założone przez wuja Eugeniusza w finale dramatu?",
      options: [
        "Jego bezgraniczne oddanie zasadom arystokratycznego honoru",
        "Przebranie przygotowane na ślub Artura z Alą",
        "Oportunizm i bezwstydne pogodzenie się z rolą sługi nowego władcy — Edka",
        "Zwycięstwo rewolucji proletariackiej i walkę klas"
      ],
      correct: 2,
      explanation: "Eugeniusz natychmiast po zabójstwie Artura zakłada lokajskie getry i z uśmiechem tańczy z Edkiem, stając się symbolem elity, która wysługuje się nowej, brutalnej dyktaturze.",
      whyWrong: {
        0: "Eugeniusz porzuca wszelki honor, byle tylko zachować spokój i życie.",
        1: "Getry zakłada po śmierci Artura na polecenie Edka, a nie na ślub.",
        3: "Mrożek parodiuje oportunizm ludzi wykształconych, a nie głosi manifest marksistowski."
      },
      examTip: "Postawa Eugeniusza to studium kolaboracji i konformizmu elit wobec totalitaryzmu."
    }
  ]
};
