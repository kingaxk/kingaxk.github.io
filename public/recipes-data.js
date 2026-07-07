// ============================================================================
// Rytuały dnia — baza przepisów i dodatków
// Ten plik zawiera WYŁĄCZNIE dane (przepisy, dodatki) — edytuj go swobodnie,
// nie dotykając index.html. Musi być wgrany do tego samego repozytorium
// GitHub, w tym samym folderze co index.html, pod nazwą recipes-data.js
// (index.html wczytuje go automatycznie przy starcie).
//
// KONWENCJA JEDNOSTEK (ważne przy dodawaniu nowych przepisów!) — lista
// zakupów sumuje składniki po dokładnym dopasowaniu nazwa+jednostka, więc
// ten sam składnik musi zawsze mieć tę samą nazwę i jednostkę wszędzie:
//   - płyny (oleje, sosy, mleko, woda, soki) -> zawsze "ml"
//   - stałe odmierzane na wagę (mąka, cukier, ser, mięso) -> zawsze "g"
//   - policzalne (jajka, ząbki czosnku, kromki, sztuki owoców) -> "sztuka" / "ząbek" / "kromka"
//   - łyżka = 15ml, łyżeczka = 5ml, szklanka = 250ml (dla płynów - dla
//     składników stałych mierzonych łyżką/łyżeczką przelicz na gramy wg
//     gęstości, np. 1 łyżka oleju ≈ 12g, 1 łyżka miodu ≈ 21g)
//   - jedna nazwa = jeden zapis (np. zawsze "Jajka", nigdy "Jajko M"/"Jajka L")
// ============================================================================

/* ============================== RECIPE DATABASE ============================== */
// Ingredients: {name, amount, unit}. Amounts are per the recipe's stated `portions`.
// variantGroups: single-select choice groups (a "Brak"/none option means optional).
const RECIPES = [
  { id:"kanapki", name:"Kanapki", meals:["sniadanie","kolacja"], portions:1,
    description:"Szybka, uniwersalna baza kanapkowa — wybierz pieczywo, a nadzienie dobierz z listy Dodatków.",
    instructions:["Wybrane pieczywo posmaruj lub obłóż wybranym dodatkiem z listy Dodatków (np. pastą, serkiem, wędliną)."],
    fixed:[],
    variantGroups:[
      { id:"pieczywo", label:"Pieczywo", options:[
        { id:"2kromki", label:"2 kromki chleba", ingredients:[{name:"Chleb",amount:2,unit:"kromka"}] },
        { id:"3kromki", label:"3 kromki chleba", ingredients:[{name:"Chleb",amount:3,unit:"kromka"}] },
        { id:"bulka", label:"Bułka", ingredients:[{name:"Bułka",amount:1,unit:"sztuka"}] },
      ]},
    ],
  },
  { id:"bowl_tofu", name:"Bowl z tofu lub tempehem", meals:["obiad","lunch"], portions:1,
    description:"Idealnie zbilansowana miska pełna składników odżywczych. Możesz dowolnie łączyć ulubione kasze, strączki i warzywa. To danie, w którym \"układasz\" składniki obok siebie, a całość spajasz wybranym sosem.",
    instructions:["Ugotuj bazę (ryż lub kaszę) i pozostaw do lekkiego przestudzenia.", "Tofu lub tempeh pokrój w kostkę. Jeśli chcesz, podsmaż je krótko na suchej patelni lub z odrobiną sosu sojowego.", "Przygotuj warzywa: ogórka pokrój, kukurydzę i fasolę odsącz z zalewy.", "Do dużej miski nałóż bazę. Obok układaj sekcjami: tofu/tempeh, fasolę, kukurydzę, ogórka, rukolę/kiełki oraz wybraną surówkę.", "Polej wybranym sosem tuż przed podaniem. Nie mieszaj wszystkiego od razu — bowl najlepiej smakuje z zachowanym podziałem na kolory i tekstury."],
    fixed:[
      {name:"Fasola czerwona (z puszki)",amount:100,unit:"g"},
      {name:"Kukurydza",amount:45,unit:"g"},
      {name:"Ogórek",amount:100,unit:"g"},
      {name:"Rukola lub kiełki",amount:10,unit:"g"},
    ],
    variantGroups:[
      { id:"baza", label:"Baza", options:[
        { id:"ryz", label:"Ryż", ingredients:[{name:"Ryż",amount:50,unit:"g"}] },
        { id:"kasza", label:"Kasza gryczana / bulgur", ingredients:[{name:"Kasza gryczana lub bulgur",amount:50,unit:"g"}] },
      ]},
      { id:"bialko", label:"Białko", options:[
        { id:"tofu", label:"Tofu wędzone", ingredients:[{name:"Tofu wędzone",amount:100,unit:"g"}] },
        { id:"tempeh", label:"Tempeh", ingredients:[{name:"Tempeh",amount:100,unit:"g"}] },
      ]},
      { id:"surowka", label:"Surówka", options:[
        { id:"marchew", label:"Marchewka z sezamem", ingredients:[{name:"Surówka: marchewka z sezamem",amount:100,unit:"g"}] },
        { id:"kapusta", label:"Surówka z białej kapusty", ingredients:[{name:"Surówka z białej kapusty",amount:100,unit:"g"}] },
      ]},
      { id:"sos", label:"Sos", options:[
        { id:"orzechowy", label:"Orzechowy", ingredients:[{name:"Sos orzechowy",amount:1,unit:"łyżka"}] },
        { id:"vinegrette", label:"Vinegrette", ingredients:[{name:"Sos Vinegrette",amount:1,unit:"łyżka"}] },
      ]},
    ],
  },
  { id:"budyn_jaglany", name:"Budyń jaglany", meals:["sniadanie"], portions:2,
    description:"",
    instructions:["Pozbądź się goryczki (kluczowy krok!): kaszę jaglaną przepłucz bardzo dokładnie najpierw lodowatą, a potem wrzącą wodą. Możesz ją też krótko uprażyć na suchej, gorącej patelni.", "Wypłukaną kaszę wrzuć do garnka, zalej mlekiem i dodaj wanilię. Gotuj na małym ogniu pod przykryciem 15-20 minut, aż wchłonie płyn i będzie bardzo miękka.", "Do gorącej kaszy dodaj pokrojonego banana lub łyżkę miodu.", "Zblenduj blenderem ręcznym na najwyższych obrotach na gładką, aksamitną masę."],
    note:"Budyń szybko gęstnieje w miarę stygnięcia — jeśli masa jest zbyt zbita, dolej 2-3 łyżki ciepłego mleka i zblenduj ponownie. Podawaj z borówkami, malinami lub orzechami.",
    fixed:[
      {name:"Kasza jaglana",amount:90,unit:"g"},
      {name:"Mleko",amount:375,unit:"ml"},
      {name:"Ekstrakt z wanilii",amount:1,unit:"łyżeczka"},
    ],
    variantGroups:[
      { id:"slodzik", label:"Słodzik", options:[
        { id:"banan", label:"Banan", ingredients:[{name:"Banan",amount:1,unit:"sztuka"}] },
        { id:"miod", label:"Miód", ingredients:[{name:"Miód",amount:25,unit:"g"}] },
      ]},
    ],
  },
  { id:"buleczki_tofu", name:"Bułeczki z tofu z nadzieniem", meals:["kolacja","lunch"], portions:2,
    description:"Sycące, lekko słone bułeczki na cieście z tofu — świetna odmiana od kanapek i zup. Można je upiec z wyprzedzeniem i odgrzać.",
    instructions:["Odsączone tofu rozgnieć widelcem na gładką masę. Dodaj jajko, mąkę, proszek do pieczenia i sól. Zagnieć elastyczne ciasto.", "Na oliwie zeszklij cebulę z czosnkiem, dodaj pieczarki i smaż, aż odparuje woda i lekko się zarumienią.", "Zdejmij z ognia, wmieszaj posiekane suszone pomidory i parmezan. Wystudź nadzienie.", "Ciasto podziel na 4-6 kawałków, rozpłaszcz, nałóż nadzienie i zlep brzegi.", "Piecz w 190-200°C przez ok. 20-25 minut (albo gotuj na parze 12-15 minut).", "Podawaj ciepłe, samodzielnie lub z lekką sałatką jako lunch."],
    fixed:[
      {name:"Tofu naturalne",amount:200,unit:"g"},
      {name:"Jajka",amount:1,unit:"sztuka"},
      {name:"Mąka pszenna",amount:100,unit:"g"},
      {name:"Proszek do pieczenia",amount:1,unit:"łyżeczka"},
      {name:"Sól",amount:1,unit:"szczypta"},
      {name:"Pieczarki",amount:150,unit:"g"},
      {name:"Cebula",amount:0.5,unit:"sztuka"},
      {name:"Czosnek",amount:1,unit:"ząbek"},
      {name:"Oliwa z zalewy suszonych pomidorów",amount:1,unit:"łyżeczka"},
      {name:"Parmezan tarty",amount:15,unit:"g"},
      {name:"Pomidory suszone",amount:20,unit:"g"},
    ],
    variantGroups:[
      { id:"zielenina", label:"Natka pietruszki / bazylia (opcjonalnie)", options:[
        { id:"brak", label:"Bez", ingredients:[] },
        { id:"tak", label:"Dodaj", ingredients:[{name:"Natka pietruszki lub bazylia",amount:1,unit:"garść"}] },
      ]},
    ],
  },
  { id:"jajecznica", name:"Jajecznica", meals:["sniadanie","lunch","kolacja"], portions:1,
    description:"Genialne, białkowe śniadanie. Zawinięcie jajecznicy w tortillę sprawia, że danie jest super wygodne do zjedzenia w biegu.",
    instructions:["Na maśle/oleju usmaż luźną jajecznicę. Pod koniec smażenia posyp parmezanem.", "Na tej samej, rozgrzanej patelni podsmaż pokrojonego pomidora przez ok. minutę.", "Na tortilli ułóż rukolę, jajecznicę i pomidora (i ew. kukurydzę). Zwiń w rulon lub kopertę."],
    fixed:[
      {name:"Tortilla / chleb / bułka",amount:60,unit:"g"},
      {name:"Masło lub olej",amount:5,unit:"g"},
      {name:"Parmezan tarty",amount:5,unit:"g"},
      {name:"Pomidor",amount:120,unit:"g"},
      {name:"Rukola",amount:1,unit:"garść"},
    ],
    variantGroups:[
      { id:"wersja", label:"Wersja", options:[
        { id:"2jajka", label:"2 jajka, bez kukurydzy", ingredients:[{name:"Jajka",amount:2,unit:"sztuka"}] },
        { id:"3jajka", label:"3 jajka + kukurydza", ingredients:[{name:"Jajka",amount:3,unit:"sztuka"},{name:"Kukurydza",amount:40,unit:"g"}] },
      ]},
    ],
  },
  { id:"mus_orzechowy", name:"Mus orzechowy", meals:["sniadanie"], portions:1,
    description:"Aksamitny, wysokobiałkowy krem, który smakuje jak luksusowy deser, a ma świetne makro. Idealny na zimno w upalne dni.",
    instructions:["Wszystkie składniki (baza + pasta orzechowa + słodzik + ew. kakao) zblenduj na najwyższych obrotach przez 2-3 minuty, aż masa się napowietrzy i będzie gładka.", "Możesz dodać czekoladę, owoce oraz posiekane lub podprażone orzechy.", "Opcjonalnie schłodź w lodówce przed podaniem."],
    fixed:[
      {name:"Pasta orzechowa",amount:25,unit:"g"},
      {name:"Owoce na wierzch (borówki/maliny)",amount:30,unit:"g"},
    ],
    variantGroups:[
      { id:"baza", label:"Baza białkowa", options:[
        { id:"silken", label:"Silken tofu", ingredients:[{name:"Silken tofu",amount:300,unit:"g"}] },
        { id:"twarog", label:"Twaróg + jogurt", ingredients:[{name:"Twaróg",amount:150,unit:"g"},{name:"Jogurt naturalny",amount:100,unit:"g"}] },
        { id:"serek", label:"Serek wiejski lekki", ingredients:[{name:"Serek wiejski lekki",amount:200,unit:"g"}] },
      ]},
      { id:"slodzik", label:"Słodzik", options:[
        { id:"miod", label:"Miód / syrop klonowy", ingredients:[{name:"Miód lub syrop klonowy",amount:25,unit:"g"}] },
        { id:"banan", label:"Banan (mrożony)", ingredients:[{name:"Banan",amount:1,unit:"sztuka"}] },
      ]},
      { id:"czekolada", label:"Tuning czekoladowy (opcjonalnie)", options:[
        { id:"brak", label:"Bez", ingredients:[] },
        { id:"kakao", label:"Kakao", ingredients:[{name:"Kakao gorzkie",amount:1,unit:"łyżeczka"}] },
        { id:"czekolada", label:"Czekolada (polewa)", ingredients:[{name:"Czekolada gorzka",amount:1,unit:"kostka"}] },
      ]},
    ],
  },
  { id:"omlet_placuszki", name:"Omlet lub placuszki", meals:["sniadanie","lunch"], portions:1,
    description:"Puszysta opcja na słodkie rozpoczęcie dnia. Z podanego ciasta możesz usmażyć albo 1 duży omlet, albo kilka mniejszych placuszków.",
    instructions:["Oddziel białka od żółtek. Białka ubij ze szczyptą soli na sztywną pianę.", "Żółtka wymieszaj z twarogiem/skyrem, mąką, słodzikiem i proszkiem do pieczenia na gładką masę.", "Delikatnie wmieszaj pianę do masy żółtkowej.", "Rozgrzej patelnię z tłuszczem, wylej ciasto, ułóż owoce na wierzchu. Smaż na małym ogniu pod przykryciem 3-4 minuty, obróć i smaż jeszcze minutę bez przykrycia."],
    fixed:[
      {name:"Jajka",amount:2,unit:"sztuka"},
      {name:"Twaróg chudy / skyr",amount:50,unit:"g"},
      {name:"Mąka pszenna lub owsiana",amount:30,unit:"g"},
      {name:"Olej lub masło",amount:2,unit:"g"},
      {name:"Proszek do pieczenia",amount:0.1,unit:"łyżeczka"},
      {name:"Owoce (maliny/borówki)",amount:50,unit:"g"},
    ],
    variantGroups:[
      { id:"slodzik", label:"Słodzik", options:[
        { id:"cukier", label:"Cukier", ingredients:[{name:"Cukier",amount:5,unit:"g"}] },
        { id:"erytrytol", label:"Erytrytol", ingredients:[{name:"Erytrytol",amount:1,unit:"łyżeczka"}] },
      ]},
    ],
  },
  { id:"owsianka_chia", name:"Owsianka z chia", meals:["sniadanie"], portions:1,
    description:"Idealne śniadanie \"overnight\" — przygotowujesz wieczorem, rano wyciągasz gotowe z lodówki. Nasiona chia i płatki pęcznieją przez noc, dając super strukturę.",
    instructions:["W słoiku wymieszaj płatki owsiane i nasiona chia.", "Dodaj wybraną bazę płynną oraz słodzik. Dokładnie wymieszaj, aby chia nie zbiły się w grudki.", "Na wierzch wrzuć owoce i opcjonalne orzechy.", "Zamknij słoik, wstaw do lodówki na min. 4 godziny (najlepiej na całą noc). Rano wymieszaj i jedz na zimno."],
    fixed:[
      {name:"Płatki owsiane",amount:40,unit:"g"},
      {name:"Nasiona chia",amount:5,unit:"g"},
      {name:"Owoce (maliny/borówki/truskawki)",amount:70,unit:"g"},
    ],
    variantGroups:[
      { id:"baza", label:"Baza płynna", options:[
        { id:"skyr", label:"Skyr + woda", ingredients:[{name:"Skyr naturalny",amount:150,unit:"g"},{name:"Woda",amount:50,unit:"ml"}] },
        { id:"migdalowe", label:"Napój migdałowy", ingredients:[{name:"Napój migdałowy bez cukru",amount:250,unit:"ml"}] },
      ]},
      { id:"slodzik", label:"Dodatek słodzący", options:[
        { id:"miod", label:"Miód / syrop klonowy", ingredients:[{name:"Miód lub syrop klonowy",amount:10,unit:"g"}] },
        { id:"erytrytol", label:"Erytrytol", ingredients:[{name:"Erytrytol",amount:1,unit:"łyżeczka"}] },
      ]},
      { id:"tuning", label:"Chrupiący tuning (opcjonalnie)", options:[
        { id:"brak", label:"Bez", ingredients:[] },
        { id:"orzechy", label:"Orzechy włoskie / migdały", ingredients:[{name:"Orzechy włoskie lub migdały",amount:15,unit:"g"}] },
      ]},
    ],
  },
  { id:"pad_thai", name:"Pad thai z batatem i kapustą", meals:["obiad"], portions:4,
    description:"",
    instructions:["Przygotuj sos: wymieszaj składniki na sos, wyciśnij sok z limonki, zetrzyj imbir, przeciśnij czosnek przez praskę.", "Na oleju podsmaż czosnek i chili.", "Zetrzyj bataty na tarce i podsmażaj ok. 3 minuty.", "Dodaj poszatkowaną kapustę i wodę. Gotuj 5 minut, wlej sos i wymieszaj.", "Na osobnej patelni podsmaż nerkowce. Danie posyp szczypiorkiem i orzechami."],
    fixed:[
      {name:"Sos tamari lub sojowy",amount:30,unit:"ml"},
      {name:"Masło orzechowe",amount:50,unit:"g"},
      {name:"Limonki",amount:2,unit:"sztuka"},
      {name:"Olej sezamowy",amount:15,unit:"g"},
      {name:"Miód",amount:7,unit:"g"},
      {name:"Sos sriracha",amount:1,unit:"łyżeczka"},
      {name:"Imbir świeży",amount:10,unit:"g"},
      {name:"Czosnek",amount:3,unit:"ząbek"},
      {name:"Olej roślinny",amount:55,unit:"g"},
      {name:"Papryczki chili",amount:2,unit:"sztuka"},
      {name:"Nerkowce surowe",amount:70,unit:"g"},
      {name:"Bataty",amount:400,unit:"g"},
      {name:"Kapusta biała",amount:500,unit:"g"},
      {name:"Dymka (zielona cebulka)",amount:2,unit:"sztuka"},
    ],
    variantGroups:[],
  },
  { id:"pieczone_warzywa", name:"Pieczone warzywa (korzeniowe)", meals:["obiad","lunch"], portions:1,
    description:"Słodkawe, aromatyczne i niesamowicie sycące danie jednogarnkowe (z blachy).",
    instructions:["Wymieszaj warzywa z olejem i marynatą (sos sojowy, wędzona papryka, czosnek granulowany, sól, pieprz, opcjonalnie koncentrat pomidorowy). Piecz w 200°C (termoobieg) ok. 35-45 minut, aż ziemniaki i buraki będą miękkie."],
    note:"Warto wyprażyć przyprawy w ziarnach na suchej patelni (nie mielone). Cebulę pokrój w grube pióra i piecz surową razem z warzywami.",
    fixed:[
      {name:"Miks warzyw korzeniowych (ziemniaki, buraki, marchew, pietruszka)",amount:550,unit:"g"},
      {name:"Cebula",amount:1,unit:"sztuka"},
      {name:"Olej / oliwa (do marynaty)",amount:15,unit:"g"},
    ],
    variantGroups:[
      { id:"bialko", label:"Białko", options:[
        { id:"ciecierzyca", label:"Ciecierzyca (pieczona z warzywami)", ingredients:[{name:"Ciecierzyca z puszki",amount:120,unit:"g"}] },
        { id:"halloumi", label:"Ser halloumi", ingredients:[{name:"Ser halloumi",amount:50,unit:"g"}] },
        { id:"hummus", label:"Hummus (jako dip obok)", ingredients:[{name:"Hummus",amount:60,unit:"g"}] },
        { id:"chorizo", label:"Kiełbasa chorizo", ingredients:[{name:"Kiełbasa chorizo",amount:40,unit:"g"}] },
      ]},
    ],
  },
  { id:"risotto", name:"Risotto lub sos makaronowy", meals:["obiad","lunch"], portions:1,
    description:"Kremowe, mocno serowe danie bazowe. W zależności od tego, czy użyjesz ryżu do risotto, czy makaronu, dostosuj technikę przygotowania.",
    instructions:["Risotto: na maśle/oliwie zeszklij cebulę z czosnkiem (i ew. grzybami). Wsyp ryż, smaż 2 minuty aż zrobi się szklisty. Dolewaj gorący bulion porcjami, mieszając, aż wchłonie płyn. W połowie dodaj brokuły lub na koniec purée z dyni. Na koniec wmieszaj parmezan i mozzarellę.", "Sos do makaronu: podsmaż warzywa z cebulą i czosnkiem, zalej bulionem i podduś. Ugotowany makaron wrzuć do sosu, dodaj sery i wymieszaj do roztopienia."],
    fixed:[
      {name:"Cebula",amount:0.5,unit:"sztuka"},
      {name:"Czosnek",amount:1,unit:"ząbek"},
      {name:"Masło lub oliwa",amount:5,unit:"g"},
      {name:"Bulion warzywny",amount:375,unit:"ml"},
      {name:"Parmezan tarty",amount:7,unit:"g"},
      {name:"Mozzarella",amount:60,unit:"g"},
    ],
    variantGroups:[
      { id:"baza", label:"Baza węglowodanowa", options:[
        { id:"ryz", label:"Ryż Arborio", ingredients:[{name:"Ryż Arborio",amount:70,unit:"g"}] },
        { id:"makaron", label:"Makaron", ingredients:[{name:"Makaron (penne / tagliatelle)",amount:70,unit:"g"}] },
      ]},
      { id:"warzywo", label:"Warzywo sezonowe", options:[
        { id:"dynia", label:"Dynia", ingredients:[{name:"Dynia (purée z pieczonej)",amount:150,unit:"g"}] },
        { id:"brokuly", label:"Brokuły", ingredients:[{name:"Brokuły",amount:150,unit:"g"}] },
        { id:"grzyby", label:"Grzyby", ingredients:[{name:"Grzyby (kurki/borowiki/pieczarki)",amount:150,unit:"g"}] },
      ]},
    ],
  },
  { id:"kluseczki_szpinak", name:"Szybkie kluseczki leniwe (ze szpinakiem)", meals:["obiad","lunch","kolacja"], portions:1,
    description:"Ekspresowe leniwe wzbogacone o zielony akcent, dzięki czemu przemycasz do porcji dodatkowe witaminy.",
    instructions:["Zblenduj jajko ze świeżym szpinakiem na gładki zielony płyn.", "W misce połącz twaróg, zielone jajko, mąkę i szczyptę soli. Zagnieć jednolite ciasto.", "Uformuj wałek i pokrój ukośne kluseczki.", "Wrzucaj na wrzącą, osoloną wodę. Gotuj ok. 1-2 minuty od wypłynięcia. Podawaj polane masłem."],
    fixed:[
      {name:"Twaróg",amount:150,unit:"g"},
      {name:"Mąka pszenna lub orkiszowa",amount:45,unit:"g"},
      {name:"Jajka",amount:1,unit:"sztuka"},
      {name:"Szpinak baby",amount:50,unit:"g"},
      {name:"Masło",amount:5,unit:"g"},
      {name:"Sól",amount:1,unit:"szczypta"},
    ],
    variantGroups:[],
  },
  { id:"tofu_panierka", name:"Tofu w panierce", meals:["obiad","lunch"], portions:1,
    description:"Chrupiące tofu w panierce w klasycznym, \"kotletowym\" stylu — sycące danie obiadowe, które można też zabrać jako lunch w pojemniku.",
    instructions:["Plastry tofu osusz i dopraw solą i pieprzem.", "Obtocz w mące, roztrzepanym jajku, a na końcu w bułce tartej.", "Piecz w 200°C przez ok. 20 minut, przewracając w połowie (albo usmaż na patelni, ok. 3 minuty z każdej strony).", "Ugotuj ryż na sypko i zrób surówkę. Podawaj razem."],
    fixed:[
      {name:"Tofu naturalne",amount:150,unit:"g"},
      {name:"Mąka pszenna",amount:10,unit:"g"},
      {name:"Jajka",amount:1,unit:"sztuka"},
      {name:"Bułka tarta",amount:20,unit:"g"},
      {name:"Oliwa lub olej",amount:1,unit:"łyżeczka"},
      {name:"Ryż",amount:50,unit:"g"},
    ],
    variantGroups:[],
  },
  { id:"tortilla_gyros", name:"Tortilla gyros", meals:["sniadanie","obiad","lunch"], portions:1,
    description:"Szybki, sycący wrap w stylu street-food. Idealny na obiad, który można łatwo zmodyfikować w zależności od tego, jakie białko masz pod ręką.",
    instructions:["Na tortilli ułóż świeże warzywa, wybrane białko i surówkę. Dodaj opcjonalne dodatki (feta, oliwki, kukurydza). Zwiń w wrapa."],
    fixed:[
      {name:"Tortilla",amount:60,unit:"g"},
      {name:"Świeże warzywa (pomidor, ogórek, papryka, sałata)",amount:150,unit:"g"},
      {name:"Surówka (kupna lub domowa)",amount:100,unit:"g"},
    ],
    variantGroups:[
      { id:"bialko", label:"Białko", options:[
        { id:"gyros", label:"Wege-gyros", ingredients:[{name:"Wege zamiennik gyrosa",amount:100,unit:"g"}] },
        { id:"halloumi", label:"Ser halloumi", ingredients:[{name:"Ser halloumi",amount:80,unit:"g"}] },
        { id:"ciecierzyca", label:"Ciecierzyca / fasola", ingredients:[{name:"Ciecierzyca lub fasola z puszki",amount:100,unit:"g"}] },
      ]},
      { id:"feta", label:"Feta i oliwki (opcjonalnie)", options:[
        { id:"brak", label:"Bez", ingredients:[] },
        { id:"tak", label:"Dodaj", ingredients:[{name:"Feta",amount:30,unit:"g"},{name:"Oliwki",amount:5,unit:"sztuka"}] },
      ]},
      { id:"kukurydza", label:"Kukurydza (opcjonalnie)", options:[
        { id:"brak", label:"Bez", ingredients:[] },
        { id:"tak", label:"Dodaj", ingredients:[{name:"Kukurydza",amount:40,unit:"g"}] },
      ]},
    ],
  },
  { id:"zupa_azjatycka", name:"Zupa azjatycka z mrożonych warzyw", meals:["lunch","obiad","kolacja"], portions:2,
    description:"Rozgrzewająca, aromatyczna zupa w stylu tajskim. Robi się ją błyskawicznie, korzystając z gotowych mrożonek.",
    instructions:["W garnku na suchym dnie podgrzej przez 30 sekund pastę curry z imbirem.", "Wlej wodę/bulion, dodaj liście kaffiru i zagotuj.", "Wrzuć zamrożone warzywa, gotuj na małym ogniu 7-10 minut, aż będą al dente.", "Wlej mleczko kokosowe, sos sojowy i sok z limonki. Podgrzej (nie gotuj mocno), dopraw do smaku. Posyp dymką."],
    fixed:[
      {name:"Mieszanka warzyw azjatyckich mrożonych",amount:450,unit:"g"},
      {name:"Mleczko kokosowe",amount:200,unit:"ml"},
      {name:"Liście limonki kaffir",amount:4,unit:"sztuka"},
      {name:"Imbir świeży",amount:5,unit:"g"},
      {name:"Sos sojowy",amount:30,unit:"ml"},
      {name:"Sok z limonki",amount:15,unit:"ml"},
      {name:"Pasta curry lub sriracha",amount:5,unit:"g"},
      {name:"Woda lub bulion",amount:500,unit:"ml"},
    ],
    variantGroups:[],
  },
];

/* ============================== ADDONS (DODATKI) DATABASE ============================== */
const ADDONS = [
  { id:"ogorki_chili", name:"Ogórki w zalewie chili", portions:4,
    description:"Chrupiące, ostro-słodkie ogórki. Robione na świeżo, bez pasteryzacji — mogą stać w lodówce do 2 tygodni.",
    instructions:["Pokrojone ogórki zasyp solą, odstaw na 1-2 godziny aż puszczą wodę, potem odlej wodę (nie płucz).", "Dodaj plasterki czosnku.", "Podgrzej składniki zalewy, aż cukier się rozpuści.", "Zalej ogórki ciepłą zalewą, przełóż do słoika. Najlepsze na drugi dzień."],
    fixed:[
      {name:"Ogórki gruntowe",amount:500,unit:"g"},
      {name:"Sól niejodowana",amount:1,unit:"łyżka"},
      {name:"Czosnek",amount:3,unit:"ząbek"},
      {name:"Olej roślinny",amount:12,unit:"g"},
      {name:"Ocet spirytusowy lub jabłkowy",amount:2,unit:"łyżka"},
      {name:"Cukier",amount:12,unit:"g"},
      {name:"Chili w płatkach lub sriracha",amount:1,unit:"łyżeczka"},
    ], variantGroups:[],
  },
  { id:"marchewka_sezam", name:"Marchewka z sezamem", portions:2,
    description:"Chrupiąca marchewka w azjatyckim stylu. Świetnie pasuje do dań z ryżem, makaronem azjatyckim lub jako samodzielna przekąska.",
    instructions:["Wymieszaj olej sezamowy, sos sojowy, sok z cytrusa i miód.", "Połącz sos z marchewką.", "Posyp uprażonym sezamem. Odstaw na 15 minut przed podaniem."],
    fixed:[
      {name:"Marchew",amount:200,unit:"g"},
      {name:"Sezam",amount:5,unit:"g"},
      {name:"Olej sezamowy",amount:5,unit:"g"},
      {name:"Sos sojowy",amount:15,unit:"ml"},
      {name:"Sok z cytryny lub limonki",amount:15,unit:"ml"},
      {name:"Miód lub syrop klonowy",amount:3,unit:"g"},
    ], variantGroups:[],
  },
  { id:"surowka_kapusta", name:"Surówka z kapusty (biała/czerwona)", portions:4,
    description:"Dwie klasyczne wersje barowe do wyboru: lekka octowa oraz bogatsza majonezowa.",
    instructions:["Wersja biała: poszatkowaną kapustę posól, ugnieć, odstaw 10 minut, dodaj olej, ocet i cukier.", "Wersja czerwona: kapustę wymieszaj z kukurydzą, połącz z sosem z majonezu, jogurtu, cytryny, soli i pieprzu."],
    fixed:[], variantGroups:[
      { id:"wersja", label:"Wersja", options:[
        { id:"biala", label:"Biała, octowa", ingredients:[
          {name:"Biała kapusta",amount:500,unit:"g"},
          {name:"Olej roślinny",amount:12,unit:"g"},
          {name:"Ocet jabłkowy lub winny",amount:30,unit:"ml"},
          {name:"Cukier",amount:5,unit:"g"},
        ]},
        { id:"czerwona", label:"Czerwona, z majonezem", ingredients:[
          {name:"Czerwona kapusta",amount:500,unit:"g"},
          {name:"Kukurydza z puszki",amount:110,unit:"g"},
          {name:"Majonez lekki",amount:25,unit:"g"},
          {name:"Jogurt naturalny",amount:25,unit:"g"},
          {name:"Sok z cytryny",amount:1,unit:"łyżka"},
        ]},
      ]},
    ],
  },
  { id:"pasta_tofu_sliwki", name:"Pasta z wędzonego tofu i suszonych śliwek", portions:2,
    description:"Wytrawna, dymna pasta kanapkowa o głębokim smaku przypominającym myśliwskie pieczenie.",
    instructions:["Tofu pokrusz do blendera.", "Dodaj śliwki, sos sojowy, olej, majeranek i pieprz.", "Blenduj na gładką masę, ewentualnie dodaj wody dla lżejszej konsystencji."],
    fixed:[
      {name:"Tofu wędzone",amount:180,unit:"g"},
      {name:"Suszone śliwki",amount:35,unit:"g"},
      {name:"Sos sojowy",amount:15,unit:"ml"},
      {name:"Olej roślinny lub oliwa",amount:12,unit:"g"},
      {name:"Majeranek",amount:1,unit:"łyżeczka"},
    ], variantGroups:[],
  },
  { id:"almette_chorizo", name:"Almette, chorizo i rukola", portions:1,
    description:"Kompozycja na gotową kanapkę na bazie chleba lub bułki.",
    instructions:["Pieczywo posmaruj Almette. Ułóż rukolę, chorizo i pomidora. Skrop sosem balsamicznym."],
    fixed:[
      {name:"Serek Almette",amount:25,unit:"g"},
      {name:"Kiełbasa chorizo",amount:15,unit:"g"},
      {name:"Pomidor",amount:50,unit:"g"},
      {name:"Rukola",amount:1,unit:"garść"},
      {name:"Sos balsamiczny",amount:5,unit:"ml"},
    ], variantGroups:[],
  },
  { id:"ciecierzyca_prazona", name:"Prażona (pieczona) ciecierzyca", portions:1,
    description:"Chrupiący, prosty dodatek — świetny zamiast pieczywa do zup i sałatek.",
    instructions:["Osusz ciecierzycę bardzo dokładnie.", "Wymieszaj z oliwą i przyprawami.", "Piecz w 200°C przez 20-25 minut, potrząsając w połowie. Wystudź przed podaniem — chrupkość rośnie po ostygnięciu."],
    fixed:[
      {name:"Ciecierzyca z puszki",amount:40,unit:"g"},
      {name:"Oliwa z oliwek",amount:2,unit:"g"},
    ], variantGroups:[],
  },
  { id:"sos_balsamiczny", name:"Sos balsamiczny (krem)", portions:7,
    description:"Gęsty, słodko-kwaśny, idealny do polania kanapki lub caprese.",
    instructions:["Ocet wlej do rondelka, dodaj melasę/miód. Gotuj na małym ogniu 10-15 minut bez przykrycia, aż zredukuje się o połowę."],
    fixed:[
      {name:"Ocet balsamiczny",amount:100,unit:"ml"},
      {name:"Melasa z granatu lub miód",amount:25,unit:"g"},
    ], variantGroups:[],
  },
  { id:"sos_orzechowy", name:"Sos orzechowy (a la Pad Thai)", portions:5,
    description:"Kremowy, lekko pikantny, idealny do świeżych warzyw, wrapów lub makaronu.",
    instructions:["Wymieszaj masło orzechowe z sosem sojowym, limonką i srirachą. Dolewaj ciepłą wodę, mieszając, aż uzyskasz gładki krem."],
    fixed:[
      {name:"Masło orzechowe",amount:25,unit:"g"},
      {name:"Sos sojowy",amount:15,unit:"ml"},
      {name:"Sok z limonki",amount:15,unit:"ml"},
      {name:"Sriracha",amount:0.5,unit:"łyżeczka"},
    ], variantGroups:[],
  },
  { id:"sos_sezamowy", name:"Sos sezamowy (tahini-dip)", portions:5,
    description:"Głęboki, lekko goryczkowy, bliskowschodni klasyk.",
    instructions:["Tahini połącz z cytryną i miodem. Dodaj zimną wodę i mieszaj do gładkiego kremu."],
    fixed:[
      {name:"Pasta tahini",amount:25,unit:"g"},
      {name:"Sok z cytryny",amount:1,unit:"łyżka"},
      {name:"Miód lub syrop klonowy",amount:4,unit:"g"},
    ], variantGroups:[],
  },
  { id:"sos_musztardowo_miodowy", name:"Sos musztardowo-miodowy", portions:3,
    description:"Uniwersalny sos, który pasuje do każdej zielonej sałaty.",
    instructions:["Wszystkie składniki umieść w słoiczku, zakręć i energicznie wstrząśnij do gładkiej emulsji."],
    fixed:[
      {name:"Musztarda",amount:25,unit:"g"},
      {name:"Miód",amount:12,unit:"g"},
      {name:"Oliwa z oliwek",amount:12,unit:"g"},
      {name:"Sok z cytryny",amount:1,unit:"łyżka"},
    ], variantGroups:[],
  },
  { id:"sos_vinegrette", name:"Sos Vinegrette (klasyczny)", portions:3,
    description:"Tradycyjny francuski dressing.",
    instructions:["Wymieszaj metodą wstrząsania w słoiku do jednolitej struktury."],
    fixed:[
      {name:"Oliwa z oliwek",amount:24,unit:"g"},
      {name:"Ocet winny lub sok z cytryny",amount:1,unit:"łyżka"},
      {name:"Musztarda",amount:3,unit:"g"},
    ], variantGroups:[],
  },
  { id:"hummus", name:"Hummus domowy", portions:15,
    description:"Aksamitna pasta strączkowa — idealna baza białkowo-tłuszczowa.",
    instructions:["Zblenduj ciecierzycę z tahini, cytryną, czosnkiem, kuminem i solą, dolewając stopniowo lodowatą wodę, aż hummus będzie puszysty i jasny."],
    fixed:[
      {name:"Ciecierzyca z puszki",amount:240,unit:"g"},
      {name:"Pasta tahini",amount:40,unit:"g"},
      {name:"Sok z cytryny",amount:2,unit:"łyżka"},
      {name:"Czosnek",amount:1,unit:"ząbek"},
      {name:"Kumin",amount:0.5,unit:"łyżeczka"},
    ], variantGroups:[],
  },
  { id:"pasta_jajeczna", name:"Pasta jajeczna do kanapek", portions:2,
    description:"Klasyczna, kremowa pasta na kanapki. Dodatek jogurtu odchudza przepis, nie ujmując mu aksamitności.",
    instructions:["Ugotowane na twardo jajka obierz i drobno posiekaj lub rozgnieć.", "Dodaj majonez, jogurt, musztardę, szczypiorek i przyprawy. Wymieszaj na kremową pastę."],
    fixed:[
      {name:"Jajka",amount:3,unit:"sztuka"},
      {name:"Majonez lekki",amount:15,unit:"g"},
      {name:"Jogurt naturalny",amount:30,unit:"g"},
      {name:"Musztarda",amount:10,unit:"g"},
      {name:"Szczypiorek",amount:15,unit:"g"},
    ], variantGroups:[],
  },
];
const MEAL_TAG_LABELS = { sniadanie:"Śniadanie", lunch:"Lunch", obiad:"Obiad", kolacja:"Kolacja" };
function recipesForMeal(tag){ return RECIPES.filter(function(r){ return r.meals.indexOf(tag)!==-1; }); }
function findRecipe(id){ return RECIPES.find(function(r){ return r.id===id; }); }
function findAddon(id){ return ADDONS.find(function(a){ return a.id===id; }); }