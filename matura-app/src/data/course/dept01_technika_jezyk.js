/* ==========================================================================
   DEPARTMENT 01: Technika Arkusza i Kształcenie Językowe
   File: matura-app/src/data/course/dept01_technika_jezyk.js
   ========================================================================== */

export const DEPT_01 = {
  id: 'dept-01',
  displayNum: 1,
  code: 'DZIAŁ 1',
  title: 'Technika Arkusza i Kształcenie Językowe',
  subtitle: 'Notatka syntetyzująca 4/4, funkcje języka, środki stylistyczne, retoryka i kultura języka',
  duration: '75 min',
  xp: 200,
  notes: [
    {
      id: 'kn1-1',
      title: 'Notatka syntetyzująca — algorytm 4/4 pkt, uniwersalne wzorce i pułapki CKE',
      badge: 'Pewniak CKE (4 pkt)',
      intro: 'Notatka syntetyzująca to kluczowe zadanie Części 1 arkusza CKE („Język polski w użyciu”). Stanowi aż 40% punktów tej części (4 z 10 pkt) i niemal 7% całego egzaminu pisemnego. Zadanie polega na zwięzłym, obiektywnym zestawieniu stanowisk dwóch autorów w ściśle określonym limicie 60–90 wyrazów.',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: 'Pułapki zerujące i ucinające punkty (Zasady CKE)',
          items: [
            'Rygorystyczny limit 60–90 wyrazów: napisanie 59 słów lub 91 słów oznacza odjęcie 1 punktu za treść (maks. 3/4 pkt za całą notatkę). Samo niespełnienie limitu słów nie zeruje automatycznie pracy.',
            'Zasada liczenia słów: Zaimki, spójniki („i”, „że”) oraz jednoliterowe przyimki („w”, „z”, „o”) są liczone jako osobne wyrazy. Liczby zapisane cyframi (np. „1984”, „2”) to również pełne wyrazy. Wyrazy z łącznikiem (np. „biało-czerwony”) liczą się jako jeden wyraz.',
            'Zero dosłownych cytatów: notatka syntetyzująca musi być parafrazą własnymi słowami — dosłowne przytaczanie zdań w cudzysłowie obniża ocenę za umiejętność uogólnienia i syntezy.',
            'Zero własnej opinii: Sformułowania wartościujące („autor słusznie zauważa”, „moim zdaniem”) są błędem merytorycznym — obowiązuje bezwzględny obiektywizm relacjonowania.',
            'Zasada kaskadowa oceny: Jeśli za treść (0–3 pkt) otrzymasz 0 punktów, ocena za poprawność językową wynosi automatycznie 0 punktów, niezależnie od bezbłędnej polszczyzny.'
          ]
        },
        {
          type: 'callout',
          variant: 'emerald',
          title: 'Kryteria Oceny CKE (Treść 0–3 pkt + Język 0–1 pkt)',
          items: [
            'Treść — aspekt 1 (przedstawienie stanowisk): Zgodność z poleceniem oraz trafne oddanie stanowisk obu autorów.',
            'Treść — aspekt 2 (zestawienie): Bezpośrednie porównanie stanowisk (wskazanie podobieństw, różnic lub relacji między nimi). Dwa oddzielne miniaturowe streszczenia bez łącznika logicznego obniżają wynik!',
            'Treść — aspekt 3 (synteza i limit słów): Uogólnienie własnymi słowami, spójność oraz zmieszczenie się w przedziale 60–90 wyrazów (przekroczenie limitu odejmuje 1 pkt z oceny treści).',
            'Kryterium Językowe (0–1 pkt): Przyznawany za poprawność językową, ortograficzną i interpunkcyjną przy zachowaniu maks. 2 błędów łącznie (3 lub więcej błędów = 0 pkt za język).'
          ]
        },
        {
          type: 'quote',
          label: 'Uniwersalny Wzorzec Maturalny na 4/4 pkt (~74 słowa)',
          text: 'Zarówno [Autor 1 / Tekst 1], jak i [Autor 2 / Tekst 2] podejmują zagadnienie [dokładny temat z polecenia]. Autorzy są zgodni co do tego, że [wspólne stanowisko / punkt wyjścia]. Różnią się jednak w ocenie [konkretny aspekt różnicy]. Pierwszy autor akcentuje [główny argument tekstu 1], wskazując na [wniosek 1]. Z kolei drugi autor skupia się na [główny argument tekstu 2], dowodząc, że [wniosek 2]. W podsumowaniu pierwszy tekst uwypukla wymiar [np. społeczny], natomiast drugi kładzie nacisk na aspekt [np. psychologiczny].',
          analysis: 'Wzorzec realizuje wszystkie wymogi CKE: nazywa wspólny temat, wskazuje punkt wspólny, przeprowadza kontrastową syntezę i kończy klamrą porównawczą.'
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Katalog zwrotów syntetyzujących',
              desc: 'Zwroty logiczne gwarantujące właściwe zestawienie stanowisk.',
              details: {
                summary: 'Aby nie stworzyć dwóch odrębnych streszczeń, każde zdanie powinno operować łącznikami porównawczymi.',
                bullets: [
                  '„Zarówno [Autor 1], jak i [Autor 2] zauważają, że…” (wskazanie analogii).',
                  '„Obaj autorzy / Obie autorki / Oboje autorów podziela(ją) pogląd o…” (podstawa wspólna).',
                  '„Z kolei [Autor 2], w przeciwieństwie do [Autora 1], kładzie nacisk na…” (kontrast).',
                  '„Podczas gdy pierwszy tekst skupia się na…, drugi uwypukla rolę…” (zestawienie proporcji).',
                  '„W podsumowaniu można stwierdzić, że autorzy ujmują zjawisko komplementarnie: z perspektywy… oraz…” (synteza końcowa).'
                ],
                essayUse: 'Zwroty te są równie przydatne w zakończeniu wypracowania maturalnego przy syntetyzowaniu wniosków z dwóch lektur.'
              }
            },
            {
              term: 'Modelowe studium przypadku (77 słów)',
              desc: 'Autentyczny przykład syntezy tekstów o roli sztucznej inteligencji w edukacji.',
              details: {
                summary: 'Polecenie: Porównaj stanowiska autorów na temat wpływu sztucznej inteligencji na proces uczenia się.',
                bullets: [
                  'Tekst modelowy (77 słów): „Zarówno Jan Kowalski, jak i Anna Nowak analizują wpływ sztucznej inteligencji na proces uczenia się. Oboje autorów jest zgodnych, że algorytmy nieodwracalnie przekształcają tradycyjną edukację. Różnią się jednak w ocenie skutków tej transformacji. Kowalski akcentuje korzyści, wykazując, że technologia umożliwia personalizację nauczania i wspiera autonomię ucznia. Z kolei Nowak ostrzega przed degradacją pamięci i zanikiem krytycznego myślenia u młodzieży. W podsumowaniu pierwszy autor dostrzega w technologii szansę rozwojową, natomiast druga badaczka traktuje ją jako realne zagrożenie poznawcze.”'
                ],
                essayUse: 'Zwróć uwagę na dokładne policzenie słów (77 wyrazów mieści się idealnie w bezpiecznym marginesie 70–80 słów).'
              }
            },
            {
              term: 'Strategia zarządzania czasem i brudnopisem',
              desc: 'Jak napisać notatkę w 15 minut podczas egzaminu.',
              details: {
                summary: 'Krok po kroku: od lektury tekstów do czystopisu.',
                bullets: [
                  'Krok 1 (3 min): Podkreśl w obu tekstach po jednym zdaniu-kluczu będącym główną tezą w temacie polecenia.',
                  'Krok 2 (5 min): Ułóż w brudnopisie zdania według powyższego szablonu (wspólny mianownik + 2 argumenty kontrastowe + synteza).',
                  'Krok 3 (3 min): Policz słowa! Jeśli masz 55 słów — rozbuduj przydawkę lub wstaw spójnik („podczas gdy”). Jeśli masz 95 słów — wykreśl zbędne przymiotniki i zredukuj omówienia.',
                  'Krok 4 (4 min): Przepisz na czysto i sprawdź interpunkcję przed spójnikami przeciwstawnymi („natomiast”, „z kolei”, „jednakże”).'
                ],
                essayUse: 'Napisanie notatki na początku egzaminu zapewnia bezpieczne 4 punkty i redukuje stres przed wypracowaniem.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn1-2',
      title: 'Funkcje języka i pragmatyka komunikacji w zadaniach arkuszowych',
      badge: 'Czytanie ze zrozumieniem',
      intro: 'W zadaniach analitycznych do Części 1 arkusza regularnie pojawia się polecenie: „Określ funkcję językową dominującą w podanym fragmencie i zilustruj ją elementem z tekstu”. Znajomość 6 funkcji Romana Jakobsona to gwarancja zdobycia 1–2 punktów.',
      blocks: [
        {
          type: 'callout',
          variant: 'blue',
          title: 'Algorytm rozpoznawania funkcji języka CKE',
          items: [
            '1. Spójrz na intencję nadawcy: Czy informuje? Ujawnia emocje? Nakłania do działania? Bawi się formą? Sprawdza łączność? Czy wyjaśnia słowo?',
            '2. Zawsze podawaj DWA elementy w odpowiedzi: NAZWĘ funkcji oraz ŚRODEK JĘZYKOWY (np. „Funkcja impresywna, obecna w postaci czasowników w trybie rozkazującym: »zwróćmy uwagę«, »pamiętajmy«”). Podanie samej nazwy funkcji bez przykładu = 0 pkt!'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: '1. Funkcja informatywna (poznawcza / referencjalna)',
              desc: 'Przekaz obiektywnych faktów, danych, definicji.',
              details: {
                summary: 'Dominantą jest odniesienie do rzeczywistości pozajęzykowej.',
                bullets: [
                  'Wskaźniki językowe: czasowniki w 3. osobie l. poj. i mn., zdania oznajmujące, słownictwo neutralne emocjonalnie, terminologia naukowa, liczby, daty, brak wykrzyknień.',
                  'Przykłady tekstów: artykuł naukowy, notka encyklopedyczna, komunikat prasowy, podręcznik akademicki.'
                ],
                essayUse: 'Wstęp i akapity analityczne wypracowania muszą zachowywać funkcję poznawczą (obiektywizm badawczy).'
              }
            },
            {
              term: '2. Funkcja impresywna (nakłaniająca / konatywna)',
              desc: 'Wywieranie wpływu na odbiorcę, nakłanianie do zmiany zachowania lub przekonań.',
              details: {
                summary: 'Skupiona na odbiorcy komunikatu.',
                bullets: [
                  'Wskaźniki językowe: tryb rozkazujący („spójrzmy”, „nie bądź obojętny”), czasowniki w 1. os. l. mn. („musimy podjąć walkę”), pytania retoryczne, zwroty do adresata (apostrofy), słownictwo wartościujące i perswazyjne.',
                  'Przykłady: przemówienia polityczne, kazania (Kazania sejmowe Skargi), manifesty (Oda do młodości), reklamy, publicystyka zaangażowana.'
                ],
                essayUse: 'Zakończenie rozprawki może stosować umiarkowaną funkcję impresywną w formie apelu do czytelnika.'
              }
            },
            {
              term: '3. Funkcja ekspresywna (emotywna)',
              desc: 'Wyrażanie uczuć, emocji, przeżyć wewnętrznych i ocen nadawcy.',
              details: {
                summary: 'Skupiona na nadawcy komunikatu.',
                bullets: [
                  'Wskaźniki językowe: czasowniki w 1. os. l. poj. („żałuję”, „czuję”, „nienawidzę”), zdania wykrzyknikowe, zdrobnienia lub zgrubienia, pauzy, wielokropki, nacechowane epitety emocjonalne.',
                  'Przykłady: liryka wyznania (Treny Kochanowskiego), Wielka Improwizacja w Dziadach cz. III, pamiętniki (Pasek).'
                ],
                essayUse: 'Uważaj, by nie nadużywać funkcji ekspresywnej w wypracowaniu maturalnym (unikaj wykrzyknień i emfazy).'
              }
            },
            {
              term: '4. Funkcja poetycka (estetyczna)',
              desc: 'Zwrócenie uwagi na sam kształt językowy komunikatu, jego brzmienie i wieloznaczność.',
              details: {
                summary: 'Kluczowa w tekstach artystycznych.',
                bullets: [
                  'Wskaźniki językowe: nagromadzenie metafor, oksymoronów, rymów, aliteracji, niecodzienny szyk wyrazów (inwersja), neologizmy artystyczne (leśmianizmy).',
                  'Przykłady: poezja barokowa (Morsztyn), symbolizm młodopolski, liryka awangardowa.'
                ],
                essayUse: 'Wykorzystywana przy analizie środków poetyckich w interpretacji wiersza.'
              }
            },
            {
              term: '5. Funkcja fatyczna i 6. Funkcja metajęzykowa',
              desc: 'Nawiązanie/podtrzymanie kontaktu oraz objaśnianie kodu językowego.',
              details: {
                summary: 'Dwie rzadziej spotykane, lecz regularnie testowane funkcje pomocnicze.',
                bullets: [
                  'Funkcja fatyczna: służy sprawdzeniu kanału łączności i podtrzymaniu uwagi („Halo?”, „Słuchajcie”, „Rozumiesz?”, „Prawda?”, „Dzień dobry”).',
                  'Funkcja metajęzykowa: wypowiedź traktuje o samym języku, znaczeniu słów, etymologii lub gramatyce („Słowo »fatum« pochodzi z łaciny i oznacza…”, „Przez pojęcie to rozumiemy…”).'
                ],
                essayUse: 'Gdy autor artykułu definiuje kluczowe pojęcie tematu, realizuje funkcję metajęzykową.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn1-3',
      title: 'Środki stylistyczne, tropy i figury retoryczne — matryca egzaminacyjna',
      badge: 'Środki artystyczne',
      intro: 'Na egzaminie nie wystarczy rozpoznać nazwy środka stylistycznego. Arkusz CKE za każdym razem wymaga określenia jego FUNKCJI w tekście. Poniższa matryca łączy środek z gotową formułą funkcjonalną.',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: 'Złota zasada CKE: Środek + Funkcja',
          items: [
            'Błędna odpowiedź (0 pkt): „W podanym fragmencie występuje metafora”.',
            'Poprawna odpowiedź (1 pkt): „Występuje metafora (»morze łez«), która służy poetyckiemu wyolbrzymieniu bezmiaru cierpienia podmiotu lirycznego po stracie dziecka”.',
            'Nigdy nie pisz ogólników typu: „urozmaica tekst”, „upiększa wiersz”, „zaciekawia czytelnika” — to odpowiedzi szablonowo odrzucane przez klucz CKE!'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Oksymoron vs Antyteza vs Paradoks',
              desc: 'Trzy figury sprzeczności, które uczniowie notorycznie mylą na egzaminie.',
              details: {
                summary: 'Kluczowe rozróżnienie gramatyczno-logiczne.',
                bullets: [
                  'Oksymoron: zestawienie DWÓCH wyrazów sprzecznych znaczeniowo w obrębie jednego związku frazowego (zwykle rzeczownik + przymiotnik): „żywy trup”, „suchy ocean”, „gorzki miód”, „jasny mrok”. Funkcja: uwypuklenie wewnętrznego rozdarcia lub paradoksalnej natury uczucia.',
                  'Antyteza: przeciwstawienie dwóch CAŁYCH zdań lub członów składniowych: „Lepiej z mądrym zgubić, niż z głupim znaleźć”, „Jedni giną za ojczyznę, drudzy tańczą na salonach”. Funkcja: wyostrzenie kontrastu moralnego lub społecznego.',
                  'Paradoks: całe stwierdzenie, z pozoru absurdalne lub sprzeczne z logiką, niosące głęboką mądrość: „Wiem, że nic nie wiem”, „Kto chce zachować swoje życie, straci je”. Funkcja: zmuszenie odbiorcy do głębszego namysłu filozoficznego.'
                ],
                essayUse: 'Nieodzowne przy omawianiu poezji barokowej (Naborowski, Morsztyn) i romantycznej.'
              }
            },
            {
              term: 'Symbol vs Alegoria',
              desc: 'Podstawowe rozróżnienie semantyczne dla literatury klasycznej i modernistycznej.',
              details: {
                summary: 'Różnica tkwi w liczbie uprawnionych interpretacji.',
                bullets: [
                  'Alegoria: znak JEDNOZNACZNY. Posiada jedno, utrwalone w tradycji kulturowej znaczenie. Przykłady: lis w bajkach Krasickiego (przebiegłość), waga (sprawiedliwość), statek miotany falami w Kazaniach Skargi (zagrożona ojczyzna).',
                  'Symbol: znak WIELOZNACZNY. Nie da się go wyczerpać jedną definicją; jest otwarty na wiele równoprawnych odczytań. Przykłady z „Wesela”: Złoty Róg (szansa na wolność, głos tradycji, zryw narodu), Chochoł (marazm, uśpienie, ale też nadzieja na zmartwychwstanie).'
                ],
                essayUse: 'W wypracowaniu: nazwanie Chochoła alegorią jest błędem rzeczowym; to symbol!'
              }
            },
            {
              term: 'Peryfraza, Eufemizm i Hiperbola',
              desc: 'Środki przekształcania znaczeń i tonacji wypowiedzi.',
              details: {
                summary: 'Operacje leksykalne nadające tekstowi odpowiedni rejestr emocjonalny.',
                bullets: [
                  'Peryfraza (omówienie): zastąpienie właściwej nazwy rozbudowanym opisem: „złota kula” = słońce, „autor Pana Tadeusza” = Adam Mickiewicz. Funkcja: podniesienie walorów estetycznych, unikanie powtórzeń.',
                  'Eufemizm: złagodzenie wyrazu zbyt dosadnego, drastycznego lub tabuizowanego: „odszedł na wieczny spoczynek” zamiast „umarł”, „mija się z prawdą” zamiast „kłamie”. Funkcja: kultura języka, takt, unikanie wulgarności.',
                  'Hiperbola (przesadnia): celowe wyolbrzymienie zjawiska: „czekałem całą wieczność”, „wylał rzekę łez”, „Nazywam się Milijon”. Funkcja: potęgowanie dramatyzmu i ekspresji.'
                ],
                essayUse: 'Peryfraza jest kluczowym narzędziem wzbogacania słownictwa i unikania powtórzeń w rozprawce.'
              }
            },
            {
              term: 'Figury składniowe: Anafora, Inwersja, Paralelizm',
              desc: 'Operacje na strukturze zdania rytmizujące wypowiedź i wzmacniające perswazję.',
              details: {
                summary: 'Najczęstsze środki w poezji patriotycznej i mowach oratorskich.',
                bullets: [
                  'Anafora: powtórzenie tego samego słowa na początku kolejnych wersów lub zdań. Funkcja: nadanie rytmu, budowanie podniosłego nastroju, gradacja napięcia.',
                  'Inwersja: szyk przestawny wyrazów, nienaturalny dla polszczyzny. Funkcja: wyeksponowanie słowa przesuniętego na koniec lub początek zdania, stylizacja na język dawny.',
                  'Paralelizm składniowy: zastosowanie zdań o bliźniaczej strukturze gramatycznej. Funkcja: zestawienie analogicznych sytuacji lub myśli w celu ich porównania.'
                ],
                essayUse: 'Wykorzystaj analizę anafory przy omawianiu „Bema pamięci żałobnego-rapsodu” Norwida.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'kn1-4',
      title: 'Retoryka, perswazja vs manipulacja i kultura języka (eliminacja błędów)',
      badge: 'Język w użyciu',
      intro: 'Zadania z Części 1 sprawdzają biegłość w rozróżnianiu rzetelnej argumentacji od manipulacji oraz eliminacji kardynalnych usterek językowych, które w wypracowaniu maturalnym mogą zaważyć na zdaniu progu 30%.',
      blocks: [
        {
          type: 'callout',
          variant: 'amber',
          title: 'Najpowszechniejsze błędy językowe w pracach maturalnych (Utrata punktów!)',
          items: [
            'Błąd imiesłowowego równoważnika zdania: Podmiot zdania głównego MUSI być wykonawcą czynności wyrażonej imiesłowem przysłówkowym (-ąc, -wszy, -łszy)! Błąd: „Idąc do szkoły, spadł deszcz” (to deszcz szedł do szkoły?). Poprawnie: „Kiedy szedłem do szkoły, spadł deszcz”.',
            'Pleonazmy („masło maślane”): „cofać się w tył”, „wracać z powrotem”, „w miesiącu maju”, „okres czasu”, „kontynuować dalej”. W wypracowaniu używaj: „cofać się”, „wracać”, „w maju”, „okres”, „kontynuować”.',
            'Błędy fleksyjne: Błędnie: „w cudzysłowiu” → Poprawnie: „w cudzysłowie”. Błędnie: „tą książkę” (w bierniku) → Poprawnie: „tę książkę”. Błędnie: „poszłem” → Poprawnie: „poszedłem”.',
            'Mylenie pojęć leksykalnych: „Bynajmniej” to NIE „przynajmniej”! „Bynajmniej” oznacza przeczenie: „wcale nie, zupełnie nie” (np. „Bynajmniej się nie zgadzam”). „Dedykowany” to nie „przeznaczony” (książka może być komuś dedykowana, ale komputer jest przeznaczony dla graczy).'
          ]
        },
        {
          type: 'grid',
          items: [
            {
              term: 'Perswazja a Manipulacja językowa',
              desc: 'Fundamentalne rozróżnienie etyczne w analizie publicystyki na maturze.',
              details: {
                summary: 'Różnica dotyczy jawności celów nadawcy i poszanowania odbiorcy.',
                bullets: [
                  'Perswazja: uczciwe nakłanianie odbiorcy do swoich racji za pomocą jawnych, logicznych argumentów i faktów. Nadawca szanuje wolność wyboru odbiorcy i nie ukrywa swoich intencji.',
                  'Manipulacja: nieuczciwe, ukryte sterowanie myślami i emocjami odbiorcy bez jego wiedzy. Stosuje fałszywe przesłanki, uogólnienia („wszyscy wiedzą, że...”), argumenty *ad personam* (atak na człowieka zamiast na tezę), manipulację statystyką i język nienawiści.'
                ],
                essayUse: 'Kluczowe przy analizie tekstów orwellowskich (nowomowa w „Roku 1984”) oraz publicystyki politycznej.'
              }
            },
            {
              term: 'Typologia argumentów retorycznych',
              desc: 'Trzy filary klasycznej argumentacji (Logos, Ethos, Pathos).',
              details: {
                summary: 'W zadaniach CKE musisz nazwać rodzaj zastosowanego argumentu.',
                bullets: [
                  'Argumenty logiczne (rozumowe / Logos): wnioskowanie indukcyjne (od szczegółu do ogółu) lub dedukcyjne (od ogólnej reguły do szczegółu), związki przyczynowo-skutkowe, definicje.',
                  'Argumenty etyczne i autorytatywne (Ethos): odwołanie do wiarygodności nadawcy, norm moralnych, autorytetów naukowych lub kulturowych.',
                  'Argumenty rzeczowe: autentyczne fakty, dane statystyczne, wyniki badań naukowych, cytaty z dokumentów, przykłady historyczne.',
                  'Argumenty emocjonalne (Pathos): odwoływanie się do uczuć odbiorcy (litości, strachu, dumy narodowej, współczucia), wyolbrzymianie zagrożeń.'
                ],
                essayUse: 'W wypracowaniu maturalnym najwyżej punktowane są argumenty logiczne poparte trafnym kontekstem rzeczowym.'
              }
            }
          ]
        }
      ]
    }
  ],
  flashcards: [
    { id: 'kf1-1', front: 'Jaki jest bezwzględny limit słów w notatce syntetyzującej na maturze CKE?', back: 'Od 60 do 90 wyrazów. Napisanie 59 lub 91 słów skutkuje utratą 1 punktu w kryterium treści (maks. 3/4 pkt).', hint: 'Margines bezpieczeństwa to 70–80 słów.', category: 'wypracowanie' },
    { id: 'kf1-2', front: 'Co oznacza zasada kaskadowa w ocenie notatki syntetyzującej?', back: 'Jeśli notatka otrzyma 0 punktów za treść (np. całkowity brak realizacji polecenia i zestawienia stanowisk), to automatycznie otrzymuje 0 punktów za język (wynik całkowity: 0/4 pkt).', hint: 'Bez treści nie ma punktu za poprawność językową.', category: 'wypracowanie' },
    { id: 'kf1-3', front: 'Dlaczego w notatce syntetyzującej NIE WOLNO stosować dosłownych cytatów?', back: 'Notatka sprawdza umiejętność własnego uogólnienia — dosłowne przytaczanie zdań z tekstu obniża ocenę za kryterium treści (brak syntezy własnymi słowami). Stosuj wyłącznie parafrazę.', hint: 'Zero cudzysłowów — pisz własnymi słowami.', category: 'wypracowanie' },
    { id: 'kf1-4', front: 'Na czym polega funkcja metajęzykowa wypowiedzi?', back: 'Tekst skupia się na samym języku — wyjaśnia znaczenie wyrazu, etymologię, poprawność gramatyczną lub reguły ortograficzne (np. definicja słownikowa).', hint: 'Język opowiadający o języku.', category: 'jezyk' },
    { id: 'kf1-5', front: 'Czym różni się funkcja impresywna od ekspresywnej?', back: 'Funkcja impresywna skupia się na odbiorcy (nakłania, rozkazuje, przekonuje), a ekspresywna na nadawcy (wyraża jego własne emocje, stan ducha i oceny).', hint: 'Impresja = wpływ na kogoś; ekspresja = wyrzucenie z siebie uczuć.', category: 'jezyk' },
    { id: 'kf1-6', front: 'Czym różni się oksymoron od antytezy?', back: 'Oksymoron to zestawienie dwóch sprzecznych wyrazów (np. „gorzki miód”), a antyteza to zestawienie dwóch przeciwstawnych całych zdań lub sądów logicznych.', hint: 'Oksymoron to miniatura (związek wyrazowy); antyteza to konstrukcja zdaniowa.', category: 'pojecie' },
    { id: 'kf1-7', front: 'Co to jest peryfraza? Podaj przykład.', back: 'Omówienie — zastąpienie właściwej nazwy przedmiotu rozbudowanym opisem cech, np. „złota kula” zamiast „słońce”, „autor Dziadów” zamiast „Mickiewicz”.', hint: 'Mówienie dookoła, by uniknąć powtórzenia.', category: 'pojecie' },
    { id: 'kf1-8', front: 'Dlaczego symbol jest wieloznaczny, a alegoria jednoznaczna?', back: 'Alegoria ma jedno, z góry ustalone znaczenie w kulturze (np. lis = chytrość), a symbol otwiera się na nieskończenie wiele interpretacji (np. Chochoł w „Weselu”).', hint: 'Alegoria ma klucz w tradycji; symbol zależy od kontekstu odbiorcy.', category: 'pojecie' },
    { id: 'kf1-9', front: 'Na czym polega błąd imiesłowowego równoważnika zdania?', back: 'Czynność wyrażona imiesłowem przysłówkowym (-ąc, -wszy, -łszy) musi być wykonywana przez ten sam podmiot, co orzeczenie główne (błąd: „Idąc parkiem, spadł liść”).', hint: 'Kto szedł parkiem? Na pewno nie liść!', category: 'jezyk' },
    { id: 'kf1-10', front: 'Jaka jest poprawna forma: „w cudzysłowiu” czy „w cudzysłowie”?', back: 'Wyłącznie „w cudzysłowie” (odmienia się jak „w rowie”, „w grobie”, a nie jak „w przysłówiu”).', hint: 'Rów -> w rowie; cudzysłów -> w cudzysłowie.', category: 'jezyk' },
    { id: 'kf1-11', front: 'Co oznacza wyraz „bynajmniej” i dlaczego nie wolno mylić go z „przynajmniej”?', back: '„Bynajmniej” to partykuła przecząca wzmacniająca negację („wcale nie, zupełnie nie”). „Przynajmniej” wyznacza minimalny zakres („chociaż, co najmniej”).', hint: '„Bynajmniej nie piłem” = wcale nie piłem.', category: 'jezyk' },
    { id: 'kf1-12', front: 'Czym różni się perswazja od manipulacji?', back: 'Perswazja jest jawna, uczciwa i oparta na faktach z poszanowaniem woli odbiorcy. Manipulacja jest ukryta, stosuje fałsz, kłamstwo i chwyty socjotechniczne.', hint: 'Perswazja szanuje rozum; manipulacja traktuje człowieka przedmiotowo.', category: 'jezyk' },
    { id: 'kf1-13', front: 'Co to jest anafora i jaka jest jej funkcja retoryczna?', back: 'Powtórzenie tego samego słowa lub zwrotu na początku kolejnych wersów lub zdań. Służy rytmizacji wypowiedzi, gradacji napięcia i wzmocnieniu siły perswazji.', hint: 'Anafora = powtórzenie na początku.', category: 'pojecie' },
    { id: 'kf1-14', front: 'Co to jest pleonazm? Podaj 3 klasyczne przykłady.', back: 'Błąd logiczno-językowy polegający na powtórzeniu tej samej treści w sąsiadujących wyrazach („masło maślane”). Przykłady: „cofać się w tył”, „w miesiącu maju”, „okres czasu”.', hint: 'Nie cofaj się w tył, bo w przód się nie da.', category: 'jezyk' },
    { id: 'kf1-15', front: 'Jaka funkcja języka dominuje w haśle: „Nie bądź obojętny, przyłącz się do zbiórki!”?', back: 'Funkcja impresywna (nakłaniająca) — zastosowano tryb rozkazujący i bezpośredni apel do działania.', hint: 'Skupienie na zachowaniu odbiorcy.', category: 'jezyk' },
    { id: 'kf1-16', front: 'Co to jest inwersja w poezji i prozie artystycznej?', back: 'Szyk przestawny wyrazów, naruszający naturalną kolejność gramatyczną w celu uwypuklenia kluczowego słowa lub stylizacji na język dawny.', hint: 'Przestawienie słów dla patosu.', category: 'pojecie' },
    { id: 'kf1-17', front: 'Czym jest argument rzeczowy w wypowiedzi argumentacyjnej?', back: 'Argument oparty na weryfikowalnych faktach: danych statystycznych, wynikach badań, cytatach z ekspertów, konkretnych datach i wydarzeniach historycznych.', hint: 'Fakty, liczby, twarde dowody.', category: 'wypracowanie' },
    { id: 'kf1-18', front: 'Dlaczego nie wolno pisać w wypracowaniu: „Uważam, że autor ma rację” w analizie tekstu w Części 1?', back: 'Zadania w Części 1 badają zrozumienie intencji i struktury tekstu autora, a nie osobiste upodobania zdającego — liczy się bezstronny dowód analityczny.', hint: 'Arkusz bada wiedzę i logikę, nie sympatie.', category: 'wypracowanie' },
    { id: 'kf1-19', front: 'Jak dzielą się 4 punkty za notatkę syntetyzującą w zasadach oceniania CKE?', back: 'Za treść (wspólny temat, zestawienie podobieństw i różnic, uogólnienie własnymi słowami oraz limit 60–90 wyrazów) otrzymuje się 0–3 pkt, a za poprawność językową, ortograficzną i interpunkcyjną (maks. 2 błędy) — 0–1 pkt (łącznie maks. 4 pkt).', hint: 'Podział 3 pkt (treść) + 1 pkt (język).', category: 'wypracowanie' },
    { id: 'kf1-20', front: 'Czym jest zasada trójdzielnej struktury akapitów w notatce syntetyzującej?', back: 'Akapit 1: wprowadzenie wspólnego tematu obu tekstów; Akapit 2: rozwinięcie różnic i punktów stycznych obu autorów; Akapit 3: zwięzła synteza klamrowa bez własnych ocen.', hint: 'Wspólny mianownik → zestawienie → klamra.', category: 'wypracowanie' },
    { id: 'kf1-21', front: 'Dlaczego w notatce syntetyzującej zakazane jest dosłowne cytowanie lub kopiowanie zdań z arkusza?', back: 'Notatka sprawdza umiejętność własnego, skondensowanego parafrazowania sensu obu tekstów — przepisywanie całych zdań grozi utratą punktów za brak uogólnienia i przekroczeniem limitu 90 słów.', hint: 'Parafraza i uogólnienie zamiast „kopiuj-wklej”.', category: 'wypracowanie' },
    { id: 'kf1-22', front: 'Czym różni się funkcja fatyczna języka od funkcji poetyckiej?', back: 'Funkcja fatyczna służy nawiązaniu, podtrzymaniu lub zakończeniu kontaktu z odbiorcą („Halo, słyszysz mnie?”, „Dzień dobry”), a funkcja poetycka skupia uwagę na samej formie i brzmieniu komunikatu (rytm, metafory, gry słowne).', hint: 'Kontakt z rozmówcą vs piękno/organizacja tekstu.', category: 'pojecie' },
    { id: 'kf1-23', front: 'Na czym polega funkcja referencjalna (informatywna/poznawcza) i jakie cechy tekstu na nią wskazują?', back: 'Przekazuje obiektywną wiedzę o świecie, faktach i zjawiskach; wyróżnia się brakiem emocjonalizmów, obecnością terminów naukowych, liczb, dat i czasowników w 3. osobie.', hint: 'Neutralny przekaz faktów.', category: 'pojecie' },
    { id: 'kf1-24', front: 'Czym jest hiperbola i eufemizm oraz jaką pełnią funkcję w tekście?', back: 'Hiperbola to celowe wyolbrzymienie (np. „morze łez”) wzmacniające ekspresję; eufemizm to złagodzenie dosłownego, drastycznego określenia (np. „odszedł” zamiast „umarł”) z przyczyn obyczajowych lub retorycznych.', hint: 'Przesada vs złagodzenie.', category: 'pojecie' },
    { id: 'kf1-25', front: 'Na czym polega paralelizm składniowy i jaką funkcję pełni w przemówieniach lub poezji?', back: 'To powtarzanie zdań lub fraz o identycznej bądź bardzo podobnej budowie gramatycznej; nadaje wypowiedzi rytm, uporządkowanie oraz wzmacnia siłę argumentacji lub patos.', hint: 'Powtarzalny schemat gramatyczny.', category: 'pojecie' },
    { id: 'kf1-26', front: 'Jak odróżnić paradoks od oksymoronu w zadaniu maturalnym?', back: 'Oksymoron to dwuwyrazowy związek wyrazów o sprzecznych znaczeniach (np. „gorący lód”), natomiast paradoks to całe zdanie lub myśl pozornie sprzeczna z logiką, lecz kryjąca głębszą prawdę (np. „Wiem, że nic nie wiem”).', hint: 'Dwa wyrazy vs całe zdanie z głębszym sensem.', category: 'pojecie' },
    { id: 'kf1-27', front: 'Czym jest argumentacja ad personam i dlaczego dyskwalifikuje ją etyka retoryczna?', back: 'To atakowanie cech osobistych, wyglądu, wieku lub życiorysu rozmówcy zamiast odnoszenia się do jego tez — jest chwytem erystycznym i manipulacją, a nie argumentem merytorycznym.', hint: 'Atak na człowieka zamiast na pogląd.', category: 'pojecie' },
    { id: 'kf1-28', front: 'Podaj przykład błędu frazeologicznego (kontaminacji) i wyjaśnij, jak go poprawić.', back: 'Błąd: „odgrywać ważną rolę” pomieszane z „mieć znaczenie” daje niepoprawne „odgrywać ważne znaczenie” albo „brać udział” + „uczestniczyć” → „brać uczestnictwo”. Poprawnie: rozdzielić związki („odgrywać ważną rolę” lub „mieć ważne znaczenie”).', hint: 'Skrzyżowanie dwóch frazeologizmów.', category: 'pojecie' },
    { id: 'kf1-29', front: 'Czym różni się wulgaryzacja od archaizacji i potocyzacji stylu w zadaniu z analizy tekstu?', back: 'Archaizacja stylizuje język na dawny (dawne słownictwo/fleksja), potocyzacja wprowadza swobodną mowę codzienną dla bliskości z odbiorcą, a wulgaryzacja celowo łamie tabu językowe w celu szoku lub oddania brutalności.', hint: 'Dawność vs codzienność vs łamanie tabu.', category: 'pojecie' },
    { id: 'kf1-30', front: 'Jak brzmi złota zasada CKE dotycząca nazywania środków stylistycznych w części testowej arkusza?', back: 'Samo podanie nazwy środka (np. „autor użył metafory”) daje 0 pkt — zawsze należy podać przykład z tekstu ORAZ określić jego konkretną funkcję w tym fragmencie (np. buduje nastrój grozy, ironizuje).', hint: 'Nazwa + przykład + funkcja w kontekście.', category: 'wypracowanie' }
  ],
  quiz: [
    {
      q: "Które z poniższych sformułowań w notatce syntetyzującej jest BŁĘDEM merytorycznym podlegającym obniżeniu punktów?",
      options: [
        "„Obaj autorzy są zgodni co do tego, że technologia zmienia relacje międzyludzkie.”",
        "„Z kolei drugi autor, w przeciwieństwie do pierwszego, kładzie nacisk na wymiar etyczny.”",
        "„Moim zdaniem pierwszy autor słusznie zauważa, że sztuczna inteligencja jest zagrożeniem.”",
        "„Podsumowując, pierwszy tekst dotyczy aspektu prawnego, a drugi — psychologicznego.”"
      ],
      correct: 2,
      explanation: "W notatce syntetyzującej obowiązuje całkowity obiektywizm relacjonowania — wyrażanie własnych sądów („moim zdaniem”) i ocenianie autorów („słusznie”) jest kardynalnym błędem.",
      whyWrong: {
        0: "To wzorcowe zdanie wskazujące wspólny mianownik obu tekstów (kryterium A i B).",
        1: "To prawidłowy zabieg kontrastujący stanowiska obu twórców (kryterium B).",
        3: "To wzorcowa synteza klamrowa zestawiająca ujęcia obu autorów."
      },
      examTip: "Pisz tak, jakbyś był bezstronnym sprawozdawcą referującym dyskusję na konferencji naukowej."
    },
    {
      q: "Uczeń napisał notatkę syntetyzującą liczącą dokładnie 58 wyrazów. Jaka jest maksymalna liczba punktów, jaką może otrzymać za to zadanie?",
      options: [
        "3 punkty",
        "4 punkty",
        "2 punkty",
        "0 punktów"
      ],
      correct: 0,
      explanation: "Za niespełnienie wymogu objętości (limit 60–90 słów) uczeń traci 1 punkt w ocenie treści. Jeśli praca jest poza tym merytorycznie i językowo doskonała, może otrzymać maksymalnie 3 punkty (2 za treść + 1 za język).",
      whyWrong: {
        1: "4 punkty są niemożliwe z powodu złamania dolnego limitu 60 słów.",
        2: "2 punkty otrzymałby, gdyby dodatkowo popełnił błędy językowe lub usterki syntezy.",
        3: "Samo przekroczenie limitu słów nie zeruje pracy — 0 pkt pada dopiero przy 0 pkt za treść (zasada kaskadowa)."
      },
      examTip: "Zawsze licz słowa w brudnopisie. Jeśli masz 58 wyrazów, dodaj jedno rozwinięcie (np. „w sposób jednoznaczny”) i bezpiecznie osiągnij 62 słowa."
    },
    {
      q: "Wskaż zdanie, w którym poprawnie użyto imiesłowowego równoważnika zdania:",
      options: [
        "Czytając „Dziady”, zgasło nagle światło w pokoju.",
        "Wracając z egzaminu, zaczął padać ulewny deszcz.",
        "Analizując motyw władzy, uczeń przywołał dramat Szekspira.",
        "Oglądając wystawę malarstwa, zachwyt zwiedzających wzbudził obraz Matejki."
      ],
      correct: 2,
      explanation: "W opcji C podmiotem zdania głównego jest „uczeń” i to on wykonuje czynność wyrażoną imiesłowem („analizując”).",
      whyWrong: {
        0: "Błąd: to światło czytało „Dziady”? Zgasło światło, kiedy czytałem „Dziady”.",
        1: "Błąd: to deszcz wracał z egzaminu? Kiedy wracałem z egzaminu, zaczął padać deszcz.",
        3: "Błąd: to zachwyt oglądał wystawę? Kiedy zwiedzający oglądali wystawę, zachwycił ich obraz."
      },
      examTip: "Klasyk maturalny w zadaniach z poprawnej polszczyzny. Szukaj podmiotu gramatycznego zdania głównego!"
    },
    {
      q: "„Słowo »katastrofizm« oznacza w historii literatury nurt wyrażający przeczucie nieuchronnego upadku cywilizacji”. Jaka funkcja języka dominuje w tym zdaniu?",
      options: [
        "Funkcja poetycka",
        "Funkcja ekspresywna",
        "Funkcja fatyczna",
        "Funkcja metajęzykowa"
      ],
      correct: 3,
      explanation: "Funkcja metajęzykowa polega na posługiwaniu się językiem w celu objaśnienia znaczenia innego elementu językowego.",
      whyWrong: {
        0: "Brak zabiegów poetyckich czy metafor artystycznych.",
        1: "Zdanie nie ujawnia żadnych emocji ani wzruszeń nadawcy.",
        2: "Zdanie nie służy nawiązaniu kontaktu (jak „halo” czy „słuchaj”)."
      },
      examTip: "Gdy autor definiuje termin w cudzysłowie lub wyjaśnia pochodzenie słowa — to funkcja metajęzykowa."
    },
    {
      q: "Które z poniższych wyrażeń stanowi BŁĄD leksykalny typu pleonazm?",
      options: [
        "W miesiącu lipcu",
        "Twardy orzech do zgryzienia",
        "Głęboka woda",
        "Zacięta walka"
      ],
      correct: 0,
      explanation: "„W miesiącu lipcu” to pleonazm, ponieważ lipiec z definicji jest miesiącem. Poprawna forma to: „w lipcu”.",
      whyWrong: {
        1: "To w 100% poprawny związek frazeologiczny (błędem byłoby: „ciężki orzech”).",
        2: "To poprawne połączenie wyrazowe (kolokacja bez powtórzenia treści), a nie pleonazm.",
        3: "To poprawna kolokacja."
      },
      examTip: "Unikaj w wypracowaniu: „w miesiącu…”, „w okresie czasu…”, „cofnąć się wstecz…”."
    },
    {
      q: "Wyrażenie „suchy ocean” zastosowane przez Adama Mickiewicza w „Stepach akermańskich” to:",
      options: [
        "Peryfraza",
        "Eufemizm",
        "Anafora",
        "Oksymoron"
      ],
      correct: 3,
      explanation: "Oksymoron to epitet sprzeczny logicznie — zestawienie wody (ocean) z jej zaprzeczeniem (suchy) oddające bezkres roślinności stepowej.",
      whyWrong: {
        0: "Peryfraza to omówienie wielowyrazowe.",
        1: "Eufemizm to złagodzenie wyrazu drastycznego.",
        2: "Anafora to powtórzenie słów na początku wersów."
      },
      examTip: "Oksymorony pojawiają się regularnie na maturze w poezji barokowej i romantycznej."
    },
    {
      q: "Wskaż zdanie zawierające błąd fleksyjny:",
      options: [
        "Znalazłem ten cytat w cudzysłowie.",
        "Wczoraj poszłem do teatru na „Dziady”.",
        "Przeczytałem tę pasjonującą lekturę w dwa dni.",
        "Profesorowie uniwersytetu wydali nowe oświadczenie."
      ],
      correct: 1,
      explanation: "Forma męska czasu przeszłego brzmi: „poszedłem” (analogicznie: „szedłem”, a nie „szłem”). Forma „poszłem” jest rażącym błędem fleksyjnym.",
      whyWrong: {
        0: "„W cudzysłowie” to forma wzorcowo poprawna.",
        2: "Biernik zaimka „ta” przed rzeczownikiem żeńskim brzmi „tę” („tę książkę”, „tę lekturę”).",
        3: "„Profesorowie” to poprawna forma mianownika l. mn."
      },
      examTip: "Za błąd „poszłem” lub „w cudzysłowiu” w wypracowaniu egzaminator od razu potrąca punkt z kryterium językowego."
    },
    {
      q: "Czym różni się symbol od alegorii?",
      options: [
        "Symbol występuje tylko w poezji, a alegoria wyłącznie w prozie.",
        "Alegoria jest figurą retoryczną, a symbol błędem składniowym.",
        "Alegoria dotyczy wyłącznie zwierząt, a symbol tylko przedmiotów nieożywionych.",
        "Symbol jest znakiem wieloznacznym, a alegoria ma jedno, stałe znaczenie umowne."
      ],
      correct: 3,
      explanation: "Alegoria ma jedno ustalone znaczenie (np. mrówka = pracowitość), podczas gdy symbol jest otwarty na wiele interpretacji (np. Chochoł, Złoty Róg).",
      whyWrong: {
        0: "Oba środki występują we wszystkich rodzajach literackich.",
        1: "Symbol nie jest żadnym błędem składniowym.",
        2: "Alegoria może dotyczyć pojęć, ludzi, przedmiotów (np. statek = ojczyzna)."
      },
      examTip: "Gdy na maturze interpretujesz „Wesele”, zawsze używaj pojęcia „symbol”, a przy bajkach Krasickiego — „alegoria”."
    },
    {
      q: "Wskaż zdanie, w którym poprawnie użyto słowa „bynajmniej”:",
      options: [
        "Musisz poświęcić na naukę bynajmniej dwie godziny dziennie.",
        "Film był ciekawy i bynajmniej warto go obejrzeć.",
        "Bynajmniej nie zamierzam usprawiedliwiać postępowania bohatera.",
        "Kup mi w sklepie bynajmniej dwa bochenki chleba."
      ],
      correct: 2,
      explanation: "„Bynajmniej” służy wzmocnieniu przeczenia („wcale nie”). W zdaniu C oznacza: „Wcale nie zamierzam usprawiedliwiać…”.",
      whyWrong: {
        0: "Należało użyć słowa „przynajmniej” (co najmniej).",
        1: "Należało użyć słowa „naprawdę” lub „z pewnością”.",
        3: "Należało użyć słowa „przynajmniej”."
      },
      examTip: "Pamiętaj: „bynajmniej” wymaga słowa „nie” w sąsiedztwie (bynajmniej nie!)."
    },
    {
      q: "Jaki zabieg stylistyczny zastosował Słowacki w wersach: „Rozłączeni — lecz jedno o drugim pamięta; / Pomiędzy nami lata biały gołąb smutku”?",
      options: [
        "Oksymoron i peryfrazę",
        "Antytezę i metaforę",
        "Inwokację i elipsę",
        "Onomatopeję i rym męski"
      ],
      correct: 1,
      explanation: "Zestawienie „Rozłączeni — lecz jedno o drugim pamięta” to antyteza (zderzenie rozłąki z duchową jednością), a „lata biały gołąb smutku” to metafora.",
      whyWrong: {
        0: "Brak oksymoronu.",
        2: "Brak inwokacji (brak zwrotu do bóstwa/ojczyzny).",
        3: "Brak wyrazów dźwiękonaśladowczych."
      },
      examTip: "Szukaj kontrastu w pierwszym wersie — słowo „lecz” wprowadza klasyczną antytezę."
    },
    {
      q: "Gdy autor tekstu publicystycznego przytacza oficjalne dane Głównego Urzędu Statystycznego, stosuje argument:",
      options: [
        "Emocjonalny",
        "Rzeczowy",
        "Logiczny",
        "Ad personam"
      ],
      correct: 1,
      explanation: "Argumenty rzeczowe opierają się na konkretnych, sprawdzalnych faktach, liczbach, statystykach i dokumentach.",
      whyWrong: {
        0: "Argument emocjonalny odwołuje się do wzruszenia, lęku lub empatii.",
        2: "Argument logiczny opiera się na schemacie wnioskowania dedukcyjnego.",
        3: "Argument ad personam to atak na osobę oponenta zamiast merytorycznej dyskusji."
      },
      examTip: "Statystyki, daty i cytaty z ustaw to zawsze argumenty rzeczowe."
    },
    {
      q: "Wskaż szereg zawierający wyłącznie błędy zewnątrzjęzykowe (ortograficzne lub interpunkcyjne):",
      options: [
        "Brak przecinka przed spójnikiem „ale”, pisownia „nie łatwy” zamiast „niełatwy”.",
        "Użycie zwrotu „w cudzysłowiu”, błąd imiesłowu przysłówkowego.",
        "Mylenie „bynajmniej” z „przynajmniej”, pleonazm „okres czasu”.",
        "Zastosowanie oksymoronu zamiast antytezy w analizie wiersza."
      ],
      correct: 0,
      explanation: "Błędy interpunkcyjne (przecinek) oraz błędy pisowni „nie” z przymiotnikami to klasyczne błędy zewnątrzjęzykowe (graficzne i interpunkcyjne).",
      whyWrong: {
        1: "To błędy wewnątrzjęzykowe (fleksyjny i składniowy).",
        2: "To błędy wewnątrzjęzykowe (leksykalno-semantyczne).",
        3: "To błąd rzeczowy w interpretacji tekstu."
      },
      examTip: "Zasady oceniania CKE surowo rozróżniają błędy gramatyczne od ortograficznych i interpunkcyjnych."
    },
    {
      q: "Co w ocenie treści notatki syntetyzującej sprawdza pierwsze kryterium merytoryczne (przedstawienie stanowisk)?",
      options: [
        "Określenie wspólnego tematu lub problemu, do którego odnoszą się oba teksty źródłowe.",
        "Zacytowanie minimum dwóch zdań z każdego tekstu w celu udowodnienia jego lektury.",
        "Wyrażenie własnego stanowiska wobec tezy pierwszego i drugiego autora.",
        "Użycie co najmniej trzech terminów z zakresu teorii literatury."
      ],
      correct: 0,
      explanation: "Pierwszy warunek kryterium treści bada, czy zdający prawidłowo rozpoznał i nazwał wspólny temat/problem oraz stanowiska autorów w obu tekstach.",
      whyWrong: {
        1: "Cytowanie fragmentów w notatce jest zbędne i marnuje limit 60–90 słów.",
        2: "W notatce obowiązuje obiektywizm bez własnych opinii.",
        3: "Terminy literaturoznawcze nie są obowiązkowym wymogiem notatki syntetyzującej."
      },
      examTip: "Pierwsze zdanie notatki zawsze zacznij od wskazania wspólnego tematu obu tekstów."
    },
    {
      q: "W którym zdaniu dominuje funkcja fatyczna języka?",
      options: [
        "„Czy mógłbyś mówić nieco głośniej, bo przerywa połączenie?”",
        "„W tym roku matura z języka polskiego rozpocznie się o godzinie 9:00.”",
        "„Słowo «epopeja» pochodzi z języka greckiego i oznacza utwór narracyjny.”",
        "„Ach, jakże cudowny jest ten wiosenny poranek nad Wisłą!”"
      ],
      correct: 0,
      explanation: "Pytanie sprawdzające kanał komunikacji i podtrzymujące kontakt z rozmówcą („Czy mógłbyś mówić głośniej, bo przerywa”) realizuje funkcję fatyczną.",
      whyWrong: {
        1: "To funkcja informatywna (referencjalna) — przekazuje fakt.",
        2: "To funkcja metajęzykowa — wyjaśnia znaczenie i pochodzenie słowa.",
        3: "To funkcja ekspresywna — wyraża zachwyt nadawcy."
      },
      examTip: "Funkcja fatyczna to wszelkie powitania, pożegnania i pytania o to, czy odbiorca słucha/rozumie."
    },
    {
      q: "Wskaż poprawne rozróżnienie między alegorią a symbolem:",
      options: [
        "Alegoria ma jedno skonwencjonalizowane znaczenie (np. waga = sprawiedliwość), a symbol jest wieloznaczny.",
        "Symbol ma zawsze tylko jedno znaczenie słownikowe, a alegoria jest nieprzetłumaczalna.",
        "Alegoria występuje wyłącznie w liryce, a symbol wyłącznie w powieściach realistycznych.",
        "Symbol polega na zastąpieniu słowa dłuższym opisem, a alegoria to zestawienie przeciwieństw."
      ],
      correct: 0,
      explanation: "Alegoria odwołuje się do utrwalonego w kulturze, jednoznacznego kodu (np. lis = chytrość), podczas gdy symbol otwiera wiele równorzędnych interpretacji (np. chochoł w „Weselu”).",
      whyWrong: {
        1: "Jest dokładnie odwrotnie.",
        2: "Oba tropy występują we wszystkich rodzajach literackich.",
        3: "Opis zastępujący wyraz to peryfraza, a zestawienie przeciwieństw to antyteza."
      },
      examTip: "Pamiętaj o parze: alegoria = 1 klucz (jednoznaczna), symbol = wiele kluczy (wieloznaczny)."
    },
    {
      q: "Który z poniższych zabiegów językowych jest klasycznym przykładem manipulacji, a nie uczciwej perswazji?",
      options: [
        "Ukrywanie niewygodnych danych i wywoływanie strachu przez fałszywe dychotomie („kto nie jest z nami, ten niszczy kraj”).",
        "Przytaczanie zweryfikowanych raportów GUS oraz opinii niezależnych ekspertów.",
        "Przedstawienie zarówno zalet, jak i potencjalnych kosztów proponowanego rozwiązania.",
        "Jasne oddzielenie faktów od własnej tezy i zaproszenie odbiorcy do dyskusji."
      ],
      correct: 0,
      explanation: "Manipulacja ukrywa prawdziwą intencję, gra na lękach i stosuje fałszywy wybór („albo-albo”), aby wymusić decyzję bez refleksji odbiorcy.",
      whyWrong: {
        1: "To uczciwy argument rzeczowy (perswazja).",
        2: "To rzetelna argumentacja wielostronna.",
        3: "To etyczna postawa w debacie."
      },
      examTip: "W zadaniach arkuszowych odróżniaj jawną intencję (perswazja) od ukrytego przymusu i emocjonalnego szantażu (manipulacja)."
    },
    {
      q: "Które z poniższych zdań zawiera błąd gramatyczny z użyciem imiesłowowego równoważnika zdania?",
      options: [
        "„Czytając lekturę, wypadła mi z rąk zakładka.”",
        "„Czytając lekturę, robiłem dokładne notatki na marginesie.”",
        "„Wyszedłszy z sali egzaminacyjnej, odetchnęliśmy z ulgą.”",
        "„Patrząc na wykres, zauważamy wyraźny wzrost czytelnictwa.”"
      ],
      correct: 0,
      explanation: "Podmiotem zdania nadrzędnego jest „zakładka” (ona wypadła), a imiesłów „czytając” sugeruje, że to zakładka czytała lekturę — brak tożsamości podmiotu.",
      whyWrong: {
        1: "W obu częściach podmiotem jestem „ja” — zdanie poprawne.",
        2: "W obu częściach podmiotem jesteśmy „my” — zdanie poprawne.",
        3: "W obu częściach podmiotem jesteśmy „my” — zdanie poprawne."
      },
      examTip: "Zawsze zadaj pytanie: czy ta sama osoba/rzecz wykonuje obie czynności w zdaniu?"
    },
    {
      q: "Czym jest kontaminacja (błąd frazeologiczny) i w którym zdaniu występuje?",
      options: [
        "To skrzyżowanie dwóch związków frazeologicznych, widoczne w zdaniu: „Ten argument odgrywa bardzo ważne znaczenie”.",
        "To powtórzenie tego samego wyrazu na początku wersów, np. „Wszędzie cicho, wszędzie pusto”.",
        "To celowe zastąpienie wyrazu jego łagodniejszym odpowiednikiem, np. „mijać się z prawdą”.",
        "To błąd ortograficzny polegający na łącznej pisowni partykuły „nie” z czasownikiem."
      ],
      correct: 0,
      explanation: "„Odgrywać rolę” i „mieć znaczenie” zostały błędnie zmieszane w niepoprawne „odgrywać znaczenie”.",
      whyWrong: {
        1: "To anafora — środek stylistyczny, nie błąd.",
        2: "To eufemizm.",
        3: "To błąd ortograficzny, a nie kontaminacja frazeologiczna."
      },
      examTip: "Uważaj w wypracowaniach na zwroty typu „odnosić wrażenie” vs „mieć poczucie” — nigdy ich nie krzyżuj."
    },
    {
      q: "W wypowiedzi publicystycznej autor użył zwrotu: „Zatopiliśmy się w oceanie bezsensownych powiadomień”. Jaką funkcję pełni tu hiperbola?",
      options: [
        "Wyolbrzymia skalę zjawiska nadmiaru bodźców cyfrowych, aby wywołać niepokój i skłonić odbiorcę do refleksji.",
        "Łagodzi negatywny wydźwięk uzależnienia od telefonu, wprowadzając ton żartobliwy.",
        "Nadaje tekstowi obiektywny charakter sprawozdania statystycznego.",
        "Wyjaśnia dokładną etymologię słowa „powiadomienie”."
      ],
      correct: 0,
      explanation: "Hiperbola („ocean powiadomień”) celowo przejaskrawia problem, aby uświadomić odbiorcy jego ogromną skalę i zaangażować go emocjonalnie.",
      whyWrong: {
        1: "Łagodzeniem zajmuje się eufemizm, nie hiperbola.",
        2: "Metaforyczna przesada jest subiektywna, nie statystyczna.",
        3: "Nie ma tu analizy pochodzenia wyrazu (funkcji metajęzykowej)."
      },
      examTip: "Na maturze opisując hiperbolę, zawsze pokaż, CO dokładnie zostało wyolbrzymione i PO CO."
    },
    {
      q: "Które zdanie jest w pełni poprawne pod względem normy językowej i interpunkcyjnej?",
      options: [
        "„W cudzysłowie umieszczamy tytuły utworów, natomiast w nawiasie — daty wydania.”",
        "„W cudzysłowiu umieszczamy tytuły utworów, lecz nie wiemy gdzie je zapisać.”",
        "„Bynajmniej rozumiem treść tego wiersza, choć jest on trudny.”",
        "„Wracając do domu przez park, zaczęło mocno padać.”"
      ],
      correct: 0,
      explanation: "Poprawna forma miejscownika rzeczownika „cudzysłów” to „w cudzysłowie”; zdanie ma również poprawną interpunkcję.",
      whyWrong: {
        1: "Forma „w cudzysłowiu” jest błędna, a przed „gdzie” brakuje przecinka.",
        2: "„Bynajmniej” znaczy „wcale nie” i nie może zastępować słowa „przynajmniej”.",
        3: "Błąd imiesłowowego równoważnika zdania („wracając” nie może odnosić się do „zaczęło padać”)."
      },
      examTip: "Zapamiętaj trójkę maturalną: w cudzysłowie (NIE -wiu), bynajmniej = wcale nie, oraz spójność podmiotu przy imiesłowie."
    }
  ]
};
