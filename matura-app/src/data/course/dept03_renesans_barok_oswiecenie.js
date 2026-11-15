/* ==========================================================================
   DEPARTMENT 03: Złoty Wiek i Wiek Rozumu: Renesans, Barok, Oświecenie
   File: matura-app/src/data/course/dept03_renesans_barok_oswiecenie.js
   ========================================================================== */

export const DEPT_03 = {
  id: 'dept-03',
  displayNum: 3,
  code: 'DZIAŁ 3',
  title: 'Złoty Wiek i Wiek Rozumu: Renesans, Barok, Oświecenie',
  subtitle: 'Humanizm Kochanowskiego, mrok i zbrodnia w Makbecie, sarmatyzm, komizm Skąpca i dydaktyzm Krasickiego',
  duration: '80 min',
  xp: 200,
  notes: [
    {
      id: 'kn3-1',
      title: 'Renesans i Jan Kochanowski — humanizm, kryzys Trenów i Odprawa posłów greckich',
      badge: 'Złoty wiek kultury',
      intro: 'Renesans (XVI w.) to epoka odrodzenia antyku i narodzin humanizmu, stawiającego człowieka w centrum zainteresowania („Homo sum et nihil humani a me alienum esse puto”). Twórczość Jana Kochanowskiego z Czarnolasu stanowi apogeum polskiego renesansu, łącząc kunszt starożytnych form z głębią narodowej myśli.',
      blocks: [
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Filary myśli renesansowej u Kochanowskiego',
          items: [
            'Antropocentryzm i humanizm: zachwyt możliwościami twórczymi człowieka i harmonią Bożego świata (Pieśń „Czego chcesz od nas, Panie, za Twe hojne dary”).',
            'Synteza stoicyzmu i epikureizmu w „Pieśniach”: cnota jako jedyna stała wartość w zmiennym świecie Fortuny (stoicyzm) połączona z umiarkowaną radością życia w gronie przyjaciół (epikureizm — „Chcemy sobie być radzi”).',
            'Topos Horacjański: świadomość poetyckiej nieśmiertelności („Niezwykłym i nie leda piórem opatrzony... Non omnis moriar”).',
            'Pojęcie Theatrum Mundi (Świat jako teatr): we fraszce „O żywocie ludzkim” (nr 101: „Fraszki to wszytko, cokolwiek myślemy”) ludzie są łątkami (marionetkami) odgrywającymi swoje role, po czym trafiają do jednego worka.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Cykl „Trenów” — dramat światopoglądowy renesansowego poety',
              desc: '19 utworów żałobnych po śmierci 2,5-letniej córki Urszulki.',
              details: {
                summary: 'Złamanie antycznej reguły decorum (treny pisano dla wybitnych mężów stanu, a nie małych dzieci) oraz zapis rozpadu humanistycznej wiary.',
                bullets: [
                  'Etap 1: Początkowy żal i wyidealizowany obraz zmarłej Urszulki (Tren I, V — porównanie zgasłego życia dziecka do młodej gałązki oliwnej ściętej omyłkowo przez ogrodnika).',
                  'Etap 2: Bunt i kryzys filozoficzny (Treny IX, X, XI — obowiązkowe w PP od 2024 r.):',
                  'Tren IX: Upadek stoicyzmu — Mądrość, której poeta uczył się całe życie, nie chroni przed rozpaczą; Kochanowski wyznaje, że „zrzucony z ostatnich schodów” stał się równy zwykłemu prostaczkowi.',
                  'Tren X: Kryzys wiary religijnej — seria dramatycznych pytań o miejsce pobytu duszyczki („Gdzieśkolwiek jest, jeśliś jest...”), podważenie dogmatów chrześcijańskich.',
                  'Tren XI: Rozpacz ocierająca się o nihilizm — poeta cytuje słowa Brutusa: „Fraszka cnota!”, dochodząc do wniosku, że pobożność i prawość przed niczym nie ratują.',
                  'Etap 3: Ukojenie i odrodzenie w Trenie XIX („Sen” — PR / przejściowo 2025–2028): poecie ukazuje się we śnie zmarła matka z Urszulką na rękach, zapewniając, że dziecko jest bezpieczne w niebie, i dając synowi humanistyczną lekcję: „Ludzkie przygody ludzkie noś” (znoszenie cierpienia po ludzku, z godnością i pokorą).'
                ],
                essayUse: 'Wzorcowy przykład w motywach: cierpienie po stracie dziecka, kryzys wiary, bunt przeciw filozofii, miłość ojcowska.'
              }
            },
            {
              term: '„Odprawa posłów greckich” — pierwsza polska tragedia humanistyczna [poza PP od 2024 r.]',
              desc: 'Dramat polityczny o odpowiedzialności rządzących (kontekst / przejściowo 2025–2028).',
              details: {
                summary: 'Kostium mitu trojańskiego posłużył poecie do krytyki wad współczesnej mu polskiej szlachty.',
                bullets: [
                  'Konflikt: Posłowie greccy (Ulisses, Menelaos) żądają zwrotu Heleny uprowadzonej przez Aleksandra (Parysa).',
                  'Postawy obywatelskie: Antenor (prawy patriota przedkładający dobro państwa nad prywatę, żąda oddania Heleny) kontra Aleksander (egoistyczny królewicz przekupujący radę trojańską).',
                  'Król Priam: władca słaby, ulegający emocjom syna i demagogii Iketaona.',
                  'Monolog Kasandry: odrzucona wieszczka przepowiada nieuchronny pożar i zagładę Troi.',
                  'Chór: pieśń „Wy, którzy pospolitą rzeczą władacie” — napomnienie dla sędziów i królów, że mają władzę od Boga i przed Nim zdadzą sprawę ze swoich wyroków.'
                ],
                essayUse: 'W tematach: odpowiedzialność za państwo, przekupstwo, patriotyzm vs prywatny egoizm.'
              }
            },
            {
              term: 'Piotr Skarga: „Kazania sejmowe” — kaznodziejstwo polityczne [poza PP od 2024 r.]',
              desc: 'Patriotyczne ostrzeżenie przed upadkiem I Rzeczypospolitej (kontekst / przejściowo 2025–2028).',
              details: {
                summary: 'Skarga diagnozuje 6 chorób trawiących Rzeczpospolitą (m.in. brak miłości ojczyzny, swary domowe, naruszenie praw Kościoła, niesprawiedliwe prawa).',
                bullets: [
                  'Słynna metafora tonącego okrętu (Kazanie wtóre): Rzeczpospolita jest jak wspólny okręt miotany falami; gdy okręt tonie z powodu zaniedbania, głupcy ratują własne tłumoki i worki, zamiast ratować statek — i giną razem z nim.',
                  'Styl oratorski: pytania retoryczne, inwektywy, stylizacja biblijna.'
                ],
                essayUse: 'Jako kontekst publicystyczny w tematach patriotycznych i troski o ojczyznę.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn3-2',
      title: 'William Szekspir: „Makbet” — spirala zbrodni, fatum psychologiczne i wina',
      badge: 'Lektura w całości (*)',
      intro: '„Makbet” Szekspira to jedno z najważniejszych dzieł teatru światowego. Przełamuje ramy tragedii klasycznej, wprowadzając teatr elżbietański (złamanie trzech jedności, odejście od decorum, świat nadprzyrodzony). Stanowi uniwersalne studium rodzenia się zbrodni i jej niszczącego wpływu na ludzką psychikę.',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: 'Ostrzeżenia przed błędem kardynalnym w „Makbecie”!',
          items: [
            'Makbet NIE został zmuszony przez czarownice do morderstwa: wiedźmy przepowiedziały mu koronę, ale to Makbet sam dokonał wolnego moralnego wyboru pod wpływem podszeptów żony.',
            'Lady Makbet NIE zabiła króla Dunkana własnymi rękami: weszła do komnaty, ale wyznała, że śpiący król przypominał jej ojca; sztylety wbił osobiście Makbet.',
            'Banko NIE był wspólnikiem zbrodni: zachował czyste sumienie, mimo że wiedział o przepowiedni czarownic; Makbet zlecił jego zamordowanie ze strachu przed utratą władzy na rzecz jego potomków.'
          ]
        },
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Mechanizm spirali zbrodni i rozpadu moralnego',
          items: [
            '1. Pokusa: spotkanie z czarownicami na wrzosowisku budzi skrywane, uśpione ambicje dzielnego wodza Makbeta.',
            '2. Pierwsza zbrodnia: zabójstwo śpiącego króla Dunkana w zamku w Inverness — Makbet łamie potrójny obowiązek (poddanego, gospodarza i krewnego). Słyszy głos: „Makbet zabił sen!”.',
            '3. Spirala terroru: jedna zbrodnia wymusza kolejne, by zatuszować poprzednie (zamordowanie strażników, zamordowanie przyjaciela Banka, bezwzględna rzeź żony i niewinnych dzieci Makdufa).',
            '4. Paranoja i obojętność: Makbet staje się samotnym, krwawym tyranem, znieczulonym na ból i śmierć („Życie jest tylko przechodnim cieniem, nędznym aktorem...”).',
            '5. Piekło sumienia Lady Makbet: bezwzględna początkowo kobieta popada w lunatyzm, bezskutecznie próbuje zmyć wyimaginowane plamy krwi z rąk („Ciągle jeszcze zapach krwi...”) i popełnia samobójstwo.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Dwuznaczność przepowiedni czarownic',
              desc: 'Zło mami człowieka dwuznacznymi obietnicami i fałszywym poczuciem bezpieczeństwa.',
              details: {
                summary: 'Zasada czarownic: „Piękne jest wstrętne, a wstrętne jest piękne”.',
                bullets: [
                  'Druga przepowiednia: wiedźmy zapewniają Makbeta, że nie pokona go nikt zrodzony z kobiety i nie zginie, dopóki las Birnam nie podejdzie pod zamek Dunsinane.',
                  'Złudzenie nietykalności: Makbet czuje się bezpieczny jak bóg, popadając w ślepotę.',
                  'Rzeczywistość: wojska powstańcze Malkolma maskują się gałęziami ściętymi w lesie Birnam, szturmując zamek (las ruszył ku Dunsinane); Makduf został wyjęty z łona matki przedwcześnie przez cesarskie cięcie, więc pokonuje Makbeta w pojedynku.'
                ],
                essayUse: 'Idealny przykład w tematach: zło w świecie, manipulacja, złudne poczucie siły, wina i kara.'
              }
            },
            {
              term: 'Teatr elżbietański a tragedia grecka',
              desc: 'Rewolucja dramaturgiczna Williama Szekspira.',
              details: {
                summary: 'Odrzucenie antycznych reguł na rzecz realizmu psychologicznego i dynamizmu.',
                bullets: [
                  'Złamanie zasady trzech jedności: akcja trwa wiele miesięcy (czas), przenosi się między zamkami, wrzosowiskiem i Anglią (miejsce), prowadzonych jest wiele wątków (akcja).',
                  'Złamanie decorum: wprowadzenie sceny humorystycznej z pijanym Odźwiernym tuż po makabrycznym morderstwie Dunkana; krew i śmierć pokazywane wprost na scenie.',
                  'Obecność sił nadprzyrodzonych: wiedźmy, zjawy, krwawy duch Banka siadający na miejscu Makbeta podczas uczty (widoczny tylko dla niego jako projekcja obłędu).',
                  'Psychologizacja postaci: Makbet nie jest marionetką fatum — przeżywa wewnętrzną walkę moralną przed i po zbrodni.'
                ],
                essayUse: 'Kluczowe pytanie testowe za 2 pkt: „Porównaj kreację tragizmu w Antygonie i Makbecie”.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn3-3',
      title: 'Barok: sarmatyzm, konceptyzm, Molier („Skąpiec”) i Pasek („Pamiętniki”) ',
      badge: 'Złota wolność i vanitas',
      intro: 'Barok (XVII w. – połowa XVIII w.) to epoka niepokoju, kontrastów i dysharmonii, wyrosła na gruncie wojen religijnych i kryzysu renesansowego ładu. W Polsce ukształtował się sarmatyzm — unikalna formacja kulturowa szlachty. Na zachodzie Europy rozkwitła komedia Moliera.',
      blocks: [
        {
          type: 'callout',
          variant: 'blue',
          title: 'Wyznaczniki poezji barokowej (Konceptyzm i Marinizm)',
          items: [
            'Konceptyzm (G. Marino): poezja ma szokować, olśniewać niezwykłym pomysłem (konceptem), a nie tylko odwzorowywać naturę.',
            'Jan Andrzej Morsztyn — wiersz „Do trupa”: koncept oparty na paradoksalnym zestawieniu nieszczęśliwie zakochanego z leżącym trupem. Trup jest w lepszej sytuacji — nie czuje bólu, spoczywa w chłodzie, podczas gdy nieszczęsny kochanek płonie niewygasłym ogniem cierpienia.',
            'Daniel Naborowski — wiersz „Krótkość żywota”: topos vanitas; ludzkie życie ujęte jako mgnienie oka, dym, dźwięk, cień i punkt zawieszony między nicościami.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Sarmatyzm i „Pamiętniki” Jana Chryzostoma Paska [poza PP od 2024 r. — kontekst]',
              desc: 'Autentyczny obraz mentalności polskiej szlachty XVII wieku (przejściowo 2025–2028).',
              details: {
                summary: 'Mit o pochodzeniu szlachty polskiej od starożytnego walecznego ludu Sarmatów.',
                bullets: [
                  'Część I (żołnierska): wyprawa do Danii pod wodzą Stefana Czarnieckiego; obraz żołnierskiego męstwa, ale też rabunków i zderzenia z obcą kulturą.',
                  'Część II (ziemiańska): życie szlachcica w majątku — pieniactwo, procesy w sądach, sejmiki, pojedynki, uczty i biesiady, głośna sprawa oswojonej wydry.',
                  'Zalety Sarmaty: patriotyzm, odwaga wojenna, przywiązanie do wolności (złota wolność), gościnność.',
                  'Wady Sarmaty: pycha, ksenofobia, pijaństwo, warcholstwo, powierzchowna dewocja (wiara oparta na gestach, a nie moralności).',
                  'Język Paska: styl gawędziarski, makaronizmy (wtrącenia łacińskie), język potoczny i rubaszny.'
                ],
                essayUse: 'Wzór mentalności szlacheckiej do zestawienia z „Panem Tadeuszem”, „Potopem” czy „Zemstą”.'
              }
            },
            {
              term: 'Molier: „Skąpiec” — komedia charakterów klasycyzmu francuskiego',
              desc: 'Lektura w całości (*). Demaskacja niszczącej siły chciwości.',
              details: {
                summary: 'Arcydzieło komedii ukazujące patologiczną deformację osobowości pod wpływem żądzy pieniądza.',
                bullets: [
                  'Harpagon: podstarzały paryski mieszczanin, dla którego pieniądz jest najwyższą i jedyną wartością na świecie. Pieniądz zastępuje mu miłość, rodzinę i wiarę.',
                  'Destrukcja więzi rodzinnych: Harpagon głodzi sługi i konie, pożycza pieniądze na lichwiarski procent (jak się okazuje — własnemu synowi!), planuje wydać córkę Elizę za starego Anzelma bez posagu („bez posagu!”) i odebrać synowi Kleantowi ukochaną Mariannę (ubogą dziewczynę bez posagu, co Harpagonowi rekompensuje jej rzekoma oszczędność).',
                  'Słynny monolog po kradzieży szkatułki: Harpagon traci zmysły po zniknięciu 10 tysięcy talarów zakopanych w ogrodzie — podejrzewa cały świat, widownię w teatrze, a w amoku łapie samego siebie za rękę, krzycząc: „Łapaj złodzieja!”.',
                  'Trzy odmiany komizmu: postaciowy (dziwactwa Harpagona), sytuacyjny (przesłuchanie Walerego mylącego szkatułkę z miłością do Elizy), słowny (dialogi pełne uszczypliwości i nieporozumień).'
                ],
                essayUse: 'W motywach: pieniądz, skąpstwo, relacje ojciec-dzieci, maski społeczne.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn3-4',
      title: 'Oświecenie i Ignacy Krasicki — racjonalizm, satyra i dydaktyzm bajek',
      badge: 'Wiek rozumu',
      intro: 'Oświecenie (XVIII w.) zwane „wiekiem świateł” postawiło na racjonalizm (Kartezjusz: Cogito ergo sum), empiryzm (Locke) oraz dydaktyzm sztuki. Za czasów stanisławowskich literatura miała za zadanie naprawę upadającej Rzeczypospolitej zgodnie z formułą „Uczyć bawiąc” (Docere et delectare). Ignacy Krasicki („książę poetów polskich”) był mistrzem tej metody.',
      blocks: [
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Bajka a Satyra w twórczości Ignacego Krasickiego',
          items: [
            'Bajka: krótki utwór wierszowany o charakterze alegorycznym, zakończony jednoznacznym morałem (pouczeniem etycznym). Bajki epigramatyczne (zwarte, 4 wersy) oraz narracyjne (dłuższe historyjki). Zwierzęta są alegoriami ludzkich wad i zalet.',
            'Satyra: utwór ośmieszający wady społeczne, obyczajowe, polityczne lub instytucje. Satyra krytykuje zjawiska, a NIE konkretne osoby z imienia i nazwiska; operuje karykaturą, wyolbrzymieniem i ironią.'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Kanon Bajek Krasickiego',
              desc: 'Gorzka diagnoza praw rządzących światem pod maską zwierzęcą.',
              details: {
                summary: 'Krasicki nie ma złudzeń — w świecie wygrywa siła, bezwzględność i spryt.',
                bullets: [
                  '„Jagnię i wilcy”: wilcy dopadają niewinne jagnię w lesie. Na pytanie jagnięcia, jakim prawem je pożrą, wilk odpowiada: „Smacznyś, słaby i w lesie!”. Morał: w bezwzględnym świecie rację ma silniejszy, a prawo moralne nie chroni słabych przed tyranią.',
                  '„Ptaszki w klatce”: dialog dwóch czyżyków uwięzionych w klatce. Młody czyżyk, urodzony w niewoli, chwali klatkę (dobre jedzenie, bezpieczeństwo). Stary czyżyk, który pamięta wolność, gorzko płacze. Morał: człowiek, który nie zaznał wolności, nie rozumie tragedii niewoli (alegoria Polski pod zaborami).',
                  '„Dewotka”: kobieta podczas żarliwej modlitwy i wymawiania słów „i odpuść nam nasze winy” bije służącą za drobne przewinienie. Morał: bezlitosna krytyka obłudy religijnej i powierzchownej pobożności.'
                ],
                essayUse: 'Idealne odwołania w tematach: wolność, natura ludzka, obłuda, prawo silniejszego.'
              }
            },
            {
              term: 'Kanon Satyr Krasickiego',
              desc: 'Karykatura narodowych przywar Polaków czasów saskich i stanisławowskich.',
              details: {
                summary: 'Krasicki piętnuje pijaństwo, bezkrytyczne uleganie modzie i konserwatywny opór szlachty.',
                bullets: [
                  '„Do króla”: kunsztowny koncept oparty na pozornej krytyce Stanisława Augusta Poniatowskiego. Podmiot liryczny (ciemny sarmata) zarzuca królowi, że: nie jest cudzoziemcem („król swój”), jest zbyt młody, zbyt mądry i kocha naukę oraz książki zamiast polowań. W rzeczywistości to druzgocąca satyra na głupotę szlachty, a nie na króla.',
                  '„Pijaństwo”: dialog dwóch szlachciców. Jeden opowiada o kolejnych etapach libacji (imieniny żony, ugoszczenie sąsiadów, bójka po pijanemu, kac). Mimo że potępia zgubne skutki nałogu i chwali trzeźwość, na koniec oświadcza, że spieszy się... „napić się wódki”. Pokazuje bezsilność rozumu wobec nałogu.',
                  '„Świat zepsuty”: lament nad upadkiem dawnych cnót rycerskich przodków i rozprzestrzenieniem się fałszu, zdrady, chciwości i bezprawia.',
                  '„Hymn do miłości ojczyzny” („Święta miłości kochanej ojczyzny...”): pochwała bezinteresownego poświęcenia dla ojczyzny — utwór obowiązkowy z kanonu polskiego Oświecenia.',
                  '„Żona modna”: satyra na kosmopolityzm — małżeństwo rozsądnego, chciwego na posag szlachcica Piotra z bogatą panną wychowaną w mieście kończy się finansową i życiową katastrofą z powodu jej bezmyślnego naśladowania francuszczyzny (fajerwerki puszczają z dymem stodołę).'
                ],
                essayUse: 'W tematach: wady narodowe Polaków, krytyka obyczajów, racjonalizm Oświecenia.'
              }
            }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'kf3-1', front: 'Jaka dewiza Terencjusza stała się hasłem przewodnim renesansowego humanizmu?', back: '„Homo sum et nihil humani a me alienum esse puto” (Człowiekiem jestem i nic, co ludzkie, nie jest mi obce).', hint: 'Zainteresowanie wszystkim, co dotyczy człowieka.', category: 'cytat' },
    { id: 'kf3-2', front: 'Na czym polegał kryzys światopoglądowy Kochanowskiego w Trenie IX i X?', back: 'W Trenie IX podważył stoicką Mądrość (która nie uchroniła go przed cierpieniem), a w Trenie X załamała się jego wiara chrześcijańska w życie pozagrobowe („Gdzieśkolwiek jest, jeśliś jest”).', hint: 'Kryzys rozumu (stoicyzmu) i kryzys wiary religijnej.', category: 'lektura' },
    { id: 'kf3-3', front: 'Jakie przesłanie przynosi zmarła matka poety w Trenie XIX („Sen”)?', back: 'Poucza syna: „Ludzkie przygody ludzkie noś” — cierpienie jest naturalną częścią ludzkiego losu i należy znosić je z godnością; zapewnia, że Urszulka jest bezpieczna w niebie (Tren XIX: PR / przejściowo 2025–2028).', hint: 'Humanistyczna lekcja pokory wobec losu.', category: 'cytat' },
    { id: 'kf3-4', front: 'Kto w „Odprawie posłów greckich” reprezentuje postawę prawego patrioty, a kto egoisty?', back: 'Prawym patriotą stawiającym dobro ojczyzny na pierwszym miejscu jest Antenor; egoistycznym manipulatorem przekupującym radę jest Aleksander (Parys).', hint: 'Antenor vs Aleksander.', category: 'bohater' },
    { id: 'kf3-5', front: 'Na czym polega metafora ojczyzny w „Kazaniach sejmowych” Piotra Skargi?', back: 'Ojczyzna jest tonącym okrętem — gdy pasażerowie zamiast ratować statek dbają o własne bagaże, giną wraz z tonącym okrętem.', hint: 'Rzeczpospolita jako miotany falami okręt.', category: 'motyw' },
    { id: 'kf3-6', front: 'Jakie przepowiednie otrzymał Makbet od czarownic w Akcie I i IV?', back: 'W Akcie I: zostanie tanem Kawdoru i królem Szkocji. W Akcie IV: nie pokona go nikt zrodzony z kobiety, dopóki las Birnam nie podejdzie pod Dunsinane.', hint: 'Korona oraz złudna nietykalność.', category: 'lektura' },
    { id: 'kf3-7', front: 'W jaki sposób zginęła Lady Makbet?', back: 'Popadła w obłęd, paranoję i lunatyzm (ciągłe zmywanie wyimaginowanej krwi z rąk), po czym popełniła samobójstwo.', hint: 'Wyrzuty sumienia doprowadzające do samobójstwa.', category: 'bohater' },
    { id: 'kf3-8', front: 'Wymień 3 cechy teatru elżbietańskiego widoczne w „Makbecie”.', back: 'Złamanie zasady trzech jedności (czas, miejsce, akcja), odrzucenie zasady decorum (krew i sceny komiczne), obecność świata nadprzyrodzonego (wiedźmy, duch Banka).', hint: 'Brak jedności, brak decorum, duchy.', category: 'pojecie' },
    { id: 'kf3-9', front: 'Czym był konceptyzm w poezji barokowej?', back: 'Dążeniem do zaskoczenia i zadziwienia odbiorcy niezwykłym pomysłem literackim (konceptem), paradoksem lub niespodziewaną pointą (np. Morsztyn „Do trupa”).', hint: 'Szokowanie niezwykłym skojarzeniem.', category: 'epoka' },
    { id: 'kf3-10', front: 'Na czym polega koncept w wierszu „Do trupa” J. A. Morsztyna?', back: 'Na paradoksalnym porównaniu sytuacji zakochanego i nieboszczyka — trup leży w spokoju i chłodzie, a kochanek cierpi niewyobrażalne męki wewnętrznego ognia miłości.', hint: 'Trup ma lepiej niż nieszczęśliwie zakochany.', category: 'lektura' },
    { id: 'kf3-11', front: 'Wymień główne wady sarmatyzmu ukazane w „Pamiętnikach” Paska.', back: 'Pieniactwo (nadużywanie sądów), warcholstwo, ksenofobia (wrogość do cudzoziemców), pijaństwo i powierzchowna, jarmarczna pobożność.', hint: 'Ciemna strona złotej wolności szlacheckiej.', category: 'motyw' },
    { id: 'kf3-12', front: 'Jaka mania zdominowała osobowość Harpagona w „Skąpcu” Moliera?', back: 'Patologiczne skąpstwo i ubóstwienie pieniądza — podporządkował całe życie, rodzinę i sługi ochronie swojej ukochanej szkatułki ze złotem.', hint: 'Szkatułka ważniejsza niż dzieci.', category: 'bohater' },
    { id: 'kf3-13', front: 'Na czym polega komizm sytuacji w przesłuchaniu Walerego przez Harpagona?', back: 'Na komizmie omyłki: Harpagon krzyczy o skradzionej szkatułce, a Walery jest przekonany, że oskarża się go o potajemną miłość do córki Elizy.', hint: 'Jeden mówi o pieniądzach, drugi o miłości.', category: 'lektura' },
    { id: 'kf3-14', front: 'Jaka zasada wywodząca się z poetyki Horacego przyświecała literaturze Oświecenia?', back: '„Docere et delectare” (Uczyć bawiąc) — literatura miała naprawiać obyczaje i edukować obywatela poprzez atrakcyjną, często satyryczną formę.', hint: 'Uczyć bawiąc.', category: 'epoka' },
    { id: 'kf3-15', front: 'Jaki morał płynie z bajki Krasickiego „Jagnię i wilcy”?', back: 'W świecie opartym na egoizmie rację ma silniejszy („Smacznyś, słaby i w lesie”), a niewinność i prawo moralne nie chronią słabych przed przemocą.', hint: 'Prawo brutalnej siły.', category: 'cytat' },
    { id: 'kf3-16', front: 'Na czym polega przewrotny koncept satyry „Do króla” Krasickiego?', back: 'Pod pozorem wyliczania wad Stanisława Augusta (za młody, nie cudzoziemiec, mądry, wykształcony) Krasicki w rzeczywistości obnaża głupotę i zawiść szlachty.', hint: 'Zarzuty wobec króla są w istocie jego zaletami.', category: 'lektura' },
    { id: 'kf3-17', front: 'Co ośmiesza Ignacy Krasicki w satyrze „Pijaństwo”?', back: 'Niemoc silnej woli i hipokryzję Polaków — szlachcic wygłasza moralizatorski traktat o zgubnych skutkach pijaństwa, po czym sam natychmiast idzie się napić.', hint: 'Wzniosła teoria kontra nałóg.', category: 'motyw' },
    { id: 'kf3-18', front: 'Co oznacza topos Theatrum Mundi w twórczości Kochanowskiego?', back: 'Świat jest teatrem, w którym ludzie są aktorami/marionetkami odgrywającymi narzucone role, a po spektaklu śmierć chowa ich do tego samego worka.', hint: 'Ludzie jako kukiełki Boga/Fortuny.', category: 'motyw' },
    { id: 'kf3-19', front: 'Czym jest antropocentryzm renesansowy (dewiza Terencjusza)?', back: 'Postawa stawiająca człowieka, jego godność, rozum i ziemskie doświadczenie w centrum zainteresowania sztuki i nauki („Człowiekiem jestem i nic, co ludzkie, nie jest mi obce”).', hint: 'Człowiek w centrum świata zamiast wyłącznie Boga.', category: 'epoka' },
    { id: 'kf3-20', front: 'Jaką wymowę obywatelską ma „Odprawa posłów greckich” Jana Kochanowskiego?', back: 'Poprzez kostium antyczny (upadek Troi przez przekupstwo i prywatę Aleksandra-Parysa) Kochanowski ostrzega Rzeczpospolitą przed anarchią szlachty i lekceważeniem dobra publicznego.', hint: 'Troja jako ostrzeżenie dla Polski.', category: 'lektura' },
    { id: 'kf3-21', front: 'Jakie dwie główne wady szlachty piętnuje Piotr Skarga w „Kazaniach sejmowych”?', back: 'Przekładanie prywaty (własnego interesu) nad dobro Rzeczypospolitej, brak zgody wewnętrznej oraz osłabienie władzy królewskiej — obrazowane metaforą tonącego okrętu.', hint: 'Tonący okręt i prywata.', category: 'lektura' },
    { id: 'kf3-22', front: 'Dlaczego w „Makbecie” Szekspira nie wolno pisać, że „czarownice zmusiły Makbeta do zbrodni”?', back: 'Czarownice jedynie rozbudziły ukrytą w nim ambicję — Makbet zachował wolną wolę i sam podjął decyzję o zabójstwie Dunkana (błąd kardynalny w razie zrzucenia winy na fatum).', hint: 'Przepowiednia jako katalizator, a nie przymus.', category: 'lektura' },
    { id: 'kf3-23', front: 'Na czym polegała dwuznaczność (podwójne dno) drugich przepowiedni czarownic dla Makbeta?', back: '„Nikt zrodzony z niewiasty” nie zabije Makbeta — Makduf przyszedł na świat przez cesarskie cięcie; „Las Birnam nie podejdzie pod Dunsynan” — żołnierze użyli gałęzi jako kamuflażu.', hint: 'Cesarskie cięcie Makdufa i gałęzie jako kamuflaż.', category: 'lektura' },
    { id: 'kf3-24', front: 'Wymień 3 cechy dramatu szekspirowskiego odróżniające go od tragedii antycznej.', back: '1) Złamanie zasady trzech jedności (wiele miejsc i miesięcy akcji); 2) Krwawe sceny zbrodni na oczach widzów (brak zasady decorum); 3) Wprowadzenie duchów, czarownic oraz ewolucji psychologicznej bohatera.', hint: 'Brak 3 jedności, przemoc na scenie, duchy.', category: 'pojecie' },
    { id: 'kf3-25', front: 'Czym był sarmatyzm w Rzeczypospolitej i jak ujawnił się w „Pamiętnikach” Jana Chryzostoma Paska?', back: 'Ideologia szlachty polskiej łącząca dumę z „złotej wolności” i rzekomego pochodzenia od Sarmatów z ksenofobią, warcholstwem, pijaństwem i powierzchowną pobożnością — barwnie opisaną w gawędowym stylu Paska.', hint: 'Złota wolność + warcholstwo i ksenofobia.', category: 'epoka' },
    { id: 'kf3-26', front: 'Jakie dwie wady ludzkie bezlitośnie wyśmiewa Molier w „Skąpcu”?', back: 'Skąpstwo i chciwość niszczącą więzi rodzinne (Harpagon chce wydać Elizę bez posagu i ożenić się z wybranką syna) oraz obłudę i ślepotę wynikającą z obsesji na punkcie pieniędzy.', hint: 'Pieniądze ważniejsze od własnych dzieci.', category: 'bohater' },
    { id: 'kf3-27', front: 'Czym różni się satyra od bajki w twórczości Ignacego Krasickiego?', back: 'Bajka to krótki utwór alegoryczny (często ze zwierzętami) z uniwersalnym morałem o naturze ludzkiej; satyra to dłuższy utwór ośmieszający konkretne wady obyczajowe i społeczne współczesnych (bez podawania gotowej recepty).', hint: 'Uniwersalna alegoria vs krytyka obyczajów epoki.', category: 'pojecie' },
    { id: 'kf3-28', front: 'Jaki obraz Boga i świata wyłania się z pieśni (hymnu) „Czego chcesz od nas, Panie” Jana Kochanowskiego?', back: 'Bóg jest ukazany jako renesansowy Wielki Budowniczy i Artysta harmonijnego świata, któremu człowiek winien jest wdzięczne serce zamiast krwawych ofiar.', hint: 'Bóg-Architekt i harmonia natury.', category: 'lektura' },
    { id: 'kf3-29', front: 'Na czym polegał marinizm i jakie środki stosował w poezji barokowej (np. Morsztyn)?', back: 'Nurt dążący do zaskoczenia i olśnienia czytelnika wyszukanym konceptem, nagromadzeniem oksymoronów, hiperbol, wyliczeń i paradoksów (np. porównanie zakochanego do trupa).', hint: 'Zaskoczenie czytelnika kunsztowną formą.', category: 'pojecie' },
    { id: 'kf3-30', front: 'Jakie główne instytucje i prądy charakteryzowały Oświecenie w Polsce?', back: 'Racjonalizm i empiryzm, Komisja Edukacji Narodowej (1773), Szkoła Rycerska, czasopismo „Monitor”, Teatr Narodowy oraz hasło „uczyć bawiąc” w służbie naprawy Rzeczypospolitej.', hint: 'Rozum, edukacja (KEN), Monitor i reformy.', category: 'epoka' }
  ],
  quiz: [
    {
      q: "W którym utworze Jan Kochanowski wypowiada słynne słowa: „Fraszka cnota!”, oznaczające dramatyczny kryzys wiary w stoicką sprawiedliwość świata?",
      options: [
        "W Trenie IX",
        "W Trenie X",
        "W Trenie XI",
        "W Trenie XIX"
      ],
      correct: 2,
      explanation: "Tren XI rozpoczyna się odwołaniem do słów Marka Brutusa: „Fraszka cnota!”, wyrażając rozpacz i poczucie, że pobożne życie nie chroni człowieka przed złem.",
      whyWrong: {
        0: "Tren IX dotyczy upadku wiary w Mądrość („Kupiłem cię, Mądrości...”).",
        1: "Tren X to kryzys wiary religijnej („Gdzieśkolwiek jest, jeśliś jest...”).",
        3: "Tren XIX przynosi ukojenie i sen o matce poety."
      },
      examTip: "Zapamiętaj triadyczny kryzys Trenów: IX (stoicyzm) -> X (wiara w zaświaty) -> XI (nihilizm i zwątpienie w cnotę)."
    },
    {
      q: "Które z poniższych zachowań charakteryzuje postawę Makbeta tuż przed zabójstwem króla Dunkana?",
      options: [
        "Wewnętrzna szamotanina i halucynacje w postaci widmowego sztyletu prowadzącego do komnaty króla.",
        "Zimna, bezwzględna pewność siebie i całkowity brak wątpliwości moralnych.",
        "Próba ucieczki z zamku i zrzucenie winy na syna Dunkana, Malkolma.",
        "Złożenie przysięgi na wierność czarownicom przed ołtarzem zła."
      ],
      correct: 0,
      explanation: "Makbet zmaga się z sumieniem, widząc zjawę krwawego sztyletu zawieszonego w powietrzu, co dowodzi jego głębokiego rozdarcia psychologicznego.",
      whyWrong: {
        1: "Zimną krew zachowywała wówczas Lady Makbet, a nie Makbet.",
        2: "Makbet nie uciekał z zamku.",
        3: "Makbet nie składał przysięgi czarownicom — spotkał je na wrzosowisku."
      },
      examTip: "Wizja sztyletu to kluczowy symbol walki psychicznej w dramacie Szekspira."
    },
    {
      q: "Wskaż zdanie, które zawiera BŁĄD RZECZOWY dotyczący lektury „Makbet”:",
      options: [
        "Makbet zlecił zamordowanie Banka oraz jego syna Fleance’a, lecz syn zdołał uciec.",
        "Lady Makbet zginęła na polu bitwy, walcząc w zbroi u boku męża przeciw wojskom Malkolma.",
        "Czarownice przepowiedziały Makbetowi, że nie pokona go nikt zrodzony z kobiety.",
        "Makduf został wyjęty z łona matki przez cesarskie cięcie, co umożliwiło mu pokonanie Makbeta."
      ],
      correct: 1,
      explanation: "Zdanie B jest rażącym błędem — Lady Makbet popadła w obłęd i lunatyzm, po czym popełniła samobójstwo w zamku.",
      whyWrong: {
        0: "To prawda — zabójcy zabili Banka, ale Fleance uciekł w mroku.",
        2: "To autentyczna druga przepowiednia czarownic.",
        3: "To fakt wyjaśniający klęskę Makbeta w pojedynku finałowym."
      },
      examTip: "Taki błąd w wypracowaniu maturalnym kwalifikuje się jako błąd kardynalny!"
    },
    {
      q: "Na czym polega tragizm Antenora w „Odprawie posłów greckich” Jana Kochanowskiego?",
      options: [
        "Zostaje skazany na śmierć przez Aleksandra za zdradę stanu.",
        "Zostaje przekupiony przez Ulissesa złotem greckim.",
        "Popełnia samobójstwo po uprowadzeniu Heleny.",
        "Mimo że ma rację moralną i polityczną, jego mądry głos zostaje odrzucony przez skorumpowaną większość, co przypieczętowuje zagładę państwa."
      ],
      correct: 3,
      explanation: "Tragizm Antenora polega na bezsilności prawego patrioty w starciu ze ślepą, przekupioną większością prowadzącą kraj do wojny.",
      whyWrong: {
        0: "Antenor nie został skazany na śmierć.",
        1: "Antenor był nieskazitelnie uczciwy i odrzucił podarki Aleksandra.",
        2: "Antenor nie popełnił samobójstwa; po odrzuceniu posłów nakazuje szykować się do obrony."
      },
      examTip: "Antenor to wzór obywatelskiej odwagi i nieskazitelności moralnej."
    },
    {
      q: "Wiersz Jana Andrzeja Morsztyna „Do trupa” jest klasycznym przykładem:",
      options: [
        "Liryki konceptystycznej (marinizmu)",
        "Sielanki sentymentalnej",
        "Eposu rycerskiego",
        "Hymnu religijnego"
      ],
      correct: 0,
      explanation: "Utwór opiera się na barokowym kunsztownym pomyśle (koncepcie) porównania zakochanego z trupem.",
      whyWrong: {
        1: "Sielanka sentymentalna to nurt Oświecenia (Karpiński).",
        2: "Epos rycerski to utwór epicki o walkach wojowników.",
        3: "Wiersz nie ma charakteru modlitwy ani hymnu."
      },
      examTip: "Gdy widzisz nazwisko J. A. Morsztyna — od razu kojarz z pojęciami: koncept, marinizm, antyteza."
    },
    {
      q: "Jaką rolę w komedii Moliera „Skąpiec” odgrywa szkatułka Harpagona?",
      options: [
        "Jest symbolem jego szlacheckiego rodowodu.",
        "Jest bezwartościową pamiątką po zmarłej żonie.",
        "Zawiera testament przepisujący cały majątek na szpital ubogich.",
        "Jest fetyszem i najwyższą wartością zastępującą bohaterowi wszelkie ludzkie uczucia i relacje rodzinne."
      ],
      correct: 3,
      explanation: "Szkatułka z 10 tysiącami talarów to centrum egzystencji Harpagona, jego największa miłość, której utrata doprowadza go do szaleństwa.",
      whyWrong: {
        0: "Harpagon był mieszczaninem, a nie arystokratą dbającym o rodowód.",
        1: "Szkatułka zawierała złote monety i była dla niego bezcenna.",
        2: "Harpagon nie zamierzał oddawać ani grosza ubogim."
      },
      examTip: "Monolog Harpagona po kradzieży szkatułki to arcydzieło komizmu postaciowego i tragedii chciwości."
    },
    {
      q: "Metafora tonącego okrętu w „Kazaniach sejmowych” Piotra Skargi miała na celu:",
      options: [
        "Uświadomienie szlachcie, że dobro wspólne (ojczyzna) stoi wyżej niż prywatne majątki, a jej upadek pociągnie za sobą zagładę wszystkich.",
        "Pochwałę morskich podbojów polskiej floty.",
        "Krytykę handlu morskiego prowadzonego przez mieszczan gdańskich.",
        "Zachętę do ucieczki z kraju przed najazdem wrogów."
      ],
      correct: 0,
      explanation: "Skarga ostrzegał, że ratowanie własnych bogactw w momencie, gdy „okręt Rzeczypospolitej” tonie, jest szczytem głupoty i samobójstwem.",
      whyWrong: {
        1: "Rzeczpospolita nie posiadała potężnej floty wojennej.",
        2: "Kazanie nie dotyczyło gospodarki morskiej Gdańska.",
        3: "Skarga nawoływał do jedności i obrony ojczyzny, a nie ucieczki."
      },
      examTip: "To najsłynniejsza alegoria patriotyczna w literaturze polskiej renesansu."
    },
    {
      q: "Która z bajek Ignacego Krasickiego zawiera ostrzeżenie, że ten, kto urodził się w niewoli, nie potrafi zrozumieć pragnienia wolności?",
      options: [
        "„Jagnię i wilcy”",
        "„Dewotka”",
        "„Ptaszki w klatce”",
        "„Kruk i lis”"
      ],
      correct: 2,
      explanation: "W „Ptaszkach w klatce” młody czyżyk cieszy się z klatki i jedzenia, a stary płacze, bo poznał smak wolności.",
      whyWrong: {
        0: "„Jagnię i wilcy” traktuje o prawie silniejszego.",
        1: "„Dewotka” ośmiesza fałszywą pobożność.",
        3: "„Kruk i lis” piętnuje podatność na pochlebstwa."
      },
      examTip: "Bajka „Ptaszki w klatce” powstała po I rozbiorze Polski (1772) i ma podtekst patriotyczny."
    },
    {
      q: "W satyrze „Do króla” Ignacy Krasicki posłużył się mechanizmem:",
      options: [
        "Bezpośredniego ataku na politykę zagraniczną Stanisława Augusta.",
        "Parodii eposu rycerskiego.",
        "Oceny moralnej opartej na teologii św. Tomasza z Akwinu.",
        "Kunsztownej ironii, w której rzekome wady króla okazują się w istocie zaletami, demaskując ciemnotę szlachty."
      ],
      correct: 3,
      explanation: "Krasicki wkłada w usta szlachcica zarzuty (że król jest młody, mądry, wykształcony, dba o kulturę), które w oczach mądrego czytelnika są najwyższą pochwałą monarchy.",
      whyWrong: {
        0: "Krasicki był przyjacielem króla i wspierał jego reformy.",
        1: "Parodią eposu rycerskiego jest poemat heroikomiczny „Monachomachia”.",
        2: "Utwór nie odwołuje się do tomizmu średniowiecznego."
      },
      examTip: "Zastosowanie ironii i odwróconego punktu widzenia to szczytowe osiągnięcie Krasickiego."
    },
    {
      q: "Sarmata ukazany w „Pamiętnikach” Jana Chryzostoma Paska to postać:",
      options: [
        "Wyidealizowany rycerz bez skazy, wzorowany na średniowiecznym Rolandzie.",
        "Złożona, jowialna, odważna w walce, ale zarazem porywcza, ksenofobiczna, skłonna do biesiad i procesów sądowych.",
        "Oświecony intelektualista postulujący zniesienie pańszczyzny i poddaństwa chłopów.",
        "Zaciekły protestant walczący z kontrreformacją w Polsce."
      ],
      correct: 1,
      explanation: "Pasek ukazuje pełnokrwisty portret przeciętnego szlachcica — pełnego zalet w boju, ale i ułomności życia codziennego (awantury, procesy, zabobonność).",
      whyWrong: {
        0: "Pasek nie ukrywał grabieży i brutalności żołnierzy.",
        2: "Sarmaci byli konserwatystami broniącymi swoich przywilejów.",
        3: "Pasek był żarliwym, tradycyjnym katolikiem."
      },
      examTip: "Pasek pisał stylem gawędy szlacheckiej z licznymi makaronizmami."
    },
    {
      q: "Wskaż zdanie opisujące zakończenie komedii „Skąpiec” Moliera:",
      options: [
        "Harpagon traci cały majątek i umiera w nędzy.",
        "Kleant i Eliza uciekają z Paryża, a Harpagon zostaje aresztowany za lichwę.",
        "Dzięki pojawieniu się zamożnego Anzelma dzieci Harpagona biorą ślub z ukochanymi, a skąpiec zostaje sam, tuląc odzyskaną szkatułkę.",
        "Marianna wychodzi za Harpagona ze względu na jego złoto."
      ],
      correct: 2,
      explanation: "Finał operuje motywem deus ex machina: Anzelm okazuje się ojcem Walerego i Marianny i pokrywa koszty obu ślubów, na co Harpagon z radością przystaje, byle nie wydać grosza.",
      whyWrong: {
        0: "Harpagon odzyskuje swoje złoto do ostatniego talara.",
        1: "Harpagon nie zostaje aresztowany.",
        3: "Marianna poślubia młodego Kleanta, a nie starego Harpagona."
      },
      examTip: "Ostatnie słowa dramatu ukazują Harpagona ściskającego swoją ukochaną szkatułkę."
    },
    {
      q: "Który z prądów myślowych Oświecenia głosił, że Bóg stworzył świat jak Wielki Zegarmistrz, ale nie ingeruje w jego dalsze prawa?",
      options: [
        "Ateizm",
        "Deizm",
        "Panteizm",
        "Scholastyka"
      ],
      correct: 1,
      explanation: "Deizm (popularny wśród encyklopedystów i myślicieli XVIII w., np. Woltera) porównywał Boga do zegarmistrza, a wszechświat do działającego mechanizmu.",
      whyWrong: {
        0: "Ateizm całkowicie odrzuca istnienie Boga.",
        2: "Panteizm utożsamia Boga z całą przyrodą.",
        3: "Scholastyka to średniowieczna filozofia rozumowego dowodzenia prawd wiary."
      },
      examTip: "Deizm był próbą pogodzenia nauki o prawach fizyki z istnieniem Stwórcy."
    },
    {
      q: "Jaką rolę w „Odprawie posłów greckich” Jana Kochanowskiego pełni monolog Ulissesa oraz pieśń chóru „Wy, którzy pospolitą rzeczą władacie”?",
      options: [
        "Przypominają władcom o odpowiedzialności moralnej przed Bogiem i poddanymi za los państwa.",
        "Zachęcają Greków do jak najszybszego podboju ziem polskich.",
        "Stanowią pochwałę prywatnego bogactwa ponad interes publiczny.",
        "Wyśmiewają klasyczną edukację humanistyczną na dworze trojańskim."
      ],
      correct: 0,
      explanation: "Kochanowski wkłada w usta chóru przestrogę dla polskich rządzących: władza to służba i obowiązek wobec ojczyzny, a przekupstwo oraz prywata prowadzą kraj do upadku.",
      whyWrong: {
        1: "Akcja toczy się w starożytnej Troi, bez wzmianki o podboju Polski.",
        2: "Dramat piętnuje prywatę, a nie ją pochwala.",
        3: "Utwór sam jest wzorcem renesansowej tragedii humanistycznej."
      },
      examTip: "Łącz „Odprawę posłów greckich” z „Kazaniami sejmowymi” Skargi jako renesansowy głos troski o Rzeczpospolitą."
    },
    {
      q: "Wskaż właściwą kolejność etapów upadku moralnego Makbeta w dramacie Szekspira:",
      options: [
        "Wahanie i wyrzuty sumienia przy zabójstwie Dunkana → paranoja i zlecenie mordu Banka → rzeź rodziny Makdufa i całkowite otępienie.",
        "Natychmiastowe odrzucenie przepowiedni → obrona Dunkana przed zamachowcami → dobrowolne oddanie tronu Malkolmowi.",
        "Samobójstwo z poczucia winy przed zabójstwem Dunkana → przejęcie władzy przez Lady Makbet.",
        "Zabicie Makdufa w pierwszej scenie → ucieczka z kraju z obawy przed czarownicami."
      ],
      correct: 0,
      explanation: "Szekspir mistrzowsko ukazuje spiralę zbrodni: pierwsza zbrodnia rodzi strach, który wymusza kolejne morderstwa, aż do całkowitego wyjałowienia emocjonalnego bohatera.",
      whyWrong: {
        1: "Makbet uległ pokusie władzy i sam zabił Dunkana.",
        2: "To Lady Makbet popełniła samobójstwo w finale, nie Makbet przed zbrodnią.",
        3: "Makduf walczy z Makbetem dopiero w finałowym akcie."
      },
      examTip: "Spirala zbrodni w „Makbecie” to idealny argument do tematów o destrukcyjnym wpływie niepohamowanej żądzy władzy."
    },
    {
      q: "Jaką rolę w moralnej przemianie Makbeta i jego późniejszej klęsce odegrała Lady Makbet?",
      options: [
        "Przełamała początkowe wahanie męża, grając na jego ambicji i męskiej dumie, lecz sama popadła w obłęd i popełniła samobójstwo.",
        "Od początku powstrzymywała Makbeta przed zbrodnią i ostrzegła króla Dunkana.",
        "Zabiła własnoręcznie króla Dunkana i objęła tron Szkocji jako królowa.",
        "Wydała Makbeta synom Dunkana tuż po uczcie w Inverness."
      ],
      correct: 0,
      explanation: "Lady Makbet początkowo wykazuje żelazną determinację, zarzucając mężowi tchórzostwo, ale ciężar współwiny niszczy ją psychicznie (lunatykowanie i zmywanie wyimaginowanej krwi).",
      whyWrong: {
        1: "To ona namawiała i planowała morderstwo Dunkana.",
        2: "Król Dunkan został zasztyletowany przez samego Makbeta (ona jedynie podłożyła sztylety strażnikom).",
        3: "Pozostała wierna mężowi aż do obłędu i śmierci."
      },
      examTip: "Pamiętaj o odwróceniu ról: na początku silna Lady Makbet i słaby Makbet; na końcu obłąkana Lady Makbet i skamieniały tyran Makbet."
    },
    {
      q: "Który wiersz barokowy najlepiej ilustruje konceptyzm poprzez zestawienie stanu zakochanego z sytuacją nieboszczyka?",
      options: [
        "„Do trupa” Jana Andrzeja Morsztyna",
        "„Krótkość żywota” Daniela Naborowskiego",
        "„Pijaństwo” Ignacego Krasickiego",
        "„Pieśń IX” Jana Kochanowskiego"
      ],
      correct: 0,
      explanation: "W sonecie „Do trupa” Morsztyn buduje kunsztowny koncept na kontraście: trup ma spokój, natomiast zakochany płonie wiecznym ogniem namiętności i cierpi jeszcze bardziej.",
      whyWrong: {
        1: "„Krótkość żywota” to poezja metafizyczna o przemijaniu czasu (vanitas).",
        2: "„Pijaństwo” to satyra oświeceniowa.",
        3: "„Pieśń IX” Kochanowskiego to renesansowa liryka stoicka."
      },
      examTip: "Barokowy koncept = zaskakujące, paradoksalne porównanie dwóch odległych sfer rzeczywistości (np. miłość i śmierć)."
    },
    {
      q: "Wskaż scenę ze „Skąpca” Moliera, która najpełniej obnaża komizm i chorobliwą obsesję Harpagona:",
      options: [
        "Przesłuchanie kucharza Jakuba i słynny monolog po kradzieży szkatułki, gdy Harpagon chwyta za własne ramię.",
        "Scena pojedynku Harpagona z królem Francji o prawo do noszenia peruki.",
        "Dobrowolne rozdanie całego majątku biedakom po rozmowie z Kleantem.",
        "Podróż Harpagona statkiem do Ameryki w poszukiwaniu złota."
      ],
      correct: 0,
      explanation: "Po stracie szkatułki z dziesięcioma tysiącami talarów Harpagon w szale oskarża cały świat i samego siebie, chwytając się za własną rękę w przekonaniu, że złapał złodzieja.",
      whyWrong: {
        1: "W utworze nie ma wątku pojedynku z królem.",
        2: "Harpagon do samego końca kocha wyłącznie swoją szkatułkę.",
        3: "Akcja dramatu rozgrywa się w jednym dniu w Paryżu."
      },
      examTip: "Molier łączy komizm słowny, sytuacyjny i charakterów, by pokazać, jak obsesja na punkcie pieniądza odczłowiecza."
    },
    {
      q: "Jaki główny wniosek płynie z analizy „Pamiętników” Jana Chryzostoma Paska jako dokumentu epoki sarmackiej?",
      options: [
        "Sarmaci łączyli autentyczną odwagę rycerską i przywiązanie do wolności z kłótliwością, pijaństwem, zabobonem i pogardą dla cudzoziemców.",
        "Szlachta polska XVII wieku odrzuciła tradycję katolicką i budowała nowoczesne fabryki.",
        "Pasek krytykuje polską szlachtę z pozycji oświeconego racjonalisty i mieszczanina.",
        "„Pamiętniki” to traktat naukowy napisany wierszem o historii starożytnej Grecji."
      ],
      correct: 0,
      explanation: "Pasek bezkrytycznie opisuje własne awantury, procesy i bitwy, dając niezwykle barwny, realistyczny portret sarmatyzmu ze wszystkimi jego blaskami i cieniami.",
      whyWrong: {
        1: "Szlachta sarmacka była głęboko przywiązana do powierzchownie rozumianego katolicyzmu i ziemiańskiego stylu życia.",
        2: "Pasek sam był typowym sarmatą, nie krytykiem z epoki Oświecenia.",
        3: "Dzieło napisane jest barwną prozą pamiętnikarską (gawędą szlachecką)."
      },
      examTip: "Kontrastuj sarmacką mentalność Paska z oświeceniową krytyką szlacheckich wad u Ignacego Krasickiego."
    },
    {
      q: "Dlaczego w satyrze „Do króla” Ignacy Krasicki posłużył się przewrotną ironią?",
      options: [
        "Aby wyliczając rzekome „wady” króla (młodość, pochodzenie polskie, łagodność, mądrość), ośmieszyć zacofanie i zawiść szlachty sarmackiej.",
        "Aby otwarcie wezwać szlachtę do detronizacji Stanisława Augusta Poniatowskiego.",
        "Aby skrytykować francuskich filozofów za wprowadzanie reform edukacyjnych.",
        "Aby napisać panegiryk na cześć magnaterii zwalczającej Konstytucję."
      ],
      correct: 0,
      explanation: "Pozorny atak na króla jest w istocie pochwałą oświeconego władcy i bezlitosną kpiną z sarmackich uprzedzeń (np. niechęci do uczoności i młodości).",
      whyWrong: {
        1: "Krasicki należał do obozu zwolenników reform królewskich.",
        2: "Poeta sam czerpał z idei francuskiego Oświecenia.",
        3: "Satyra ośmiesza właśnie wrogów króla i reform."
      },
      examTip: "Ironia to jedno z najważniejszych narzędzi dydaktycznych literatury Oświecenia."
    },
    {
      q: "Co oznacza metaforyczne porównanie ojczyzny do tonącego okrętu w „Kazaniach sejmowych” Piotra Skargi?",
      options: [
        "Wskazuje, że w chwili zagrożenia państwa ratowanie własnej „skrzynki” (prywaty) jest szaleństwem, bo zatonie cały okręt wraz z majątkiem.",
        "Zachęca polską szlachtę do emigracji morskiej do Ameryki Południowej.",
        "Chwali rozwój handlu morskiego w Gdańsku w XVI wieku.",
        "Oznacza, że król powinien zrzec się władzy na rzecz marynarki wojennej."
      ],
      correct: 0,
      explanation: "Skarga używa sugestywnej przypowieści: gdy okręt (ojczyzna) tonie, głupcem jest ten, kto zamiast ratować statek, pilnuje tylko swoich prywatnych skarbów w kajucie.",
      whyWrong: {
        1: "Metafora nie dotyczy emigracji zamorskiej.",
        2: "Nie jest to pochwała handlu, lecz dramatyczna przestroga polityczna.",
        3: "Skarga postulował właśnie wzmocnienie władzy królewskiej."
      },
      examTip: "Cytat o tonącym okręcie Skargi świetnie sprawdza się w rozprawkach o odpowiedzialności za dobro wspólne."
    }
  ]
};
