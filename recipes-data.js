// ============================================================================
// Rytuały dnia — baza przepisów i dodatków
// Ten plik zawiera WYŁĄCZNIE dane (przepisy, dodatki) — edytuj go swobodnie,
// nie dotykając index.html. Musi być wgrany do tego samego repozytorium
// GitHub, w tym samym folderze co index.html, pod nazwą recipes-data.js
// (index.html wczytuje go automatycznie przy starcie).
// ============================================================================

/* ============================== RECIPE DATABASE ============================== */
// Ingredients: {name, amount, unit}. Amounts are per the recipe's stated `portions`.
// variantGroups: single-select choice groups (a "Brak"/none option means optional).
const RECIPES = [
  { id:"kanapki", name:"Kanapki", meals:["sniadanie","kolacja"], portions:1,
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
    fixed:[
      {name:"Tofu naturalne",amount:200,unit:"g"},
      {name:"Jajko M",amount:1,unit:"sztuka"},
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
    fixed:[
      {name:"Tortilla / chleb / bułka",amount:60,unit:"g"},
      {name:"Masło lub olej",amount:5,unit:"g"},
      {name:"Parmezan tarty",amount:5,unit:"g"},
      {name:"Pomidor",amount:1,unit:"sztuka"},
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
    fixed:[
      {name:"Pasta orzechowa",amount:25,unit:"g"},
      {name:"Owoce na wierzch (borówki/maliny)",amount:30,unit:"g"},
    ],
    variantGroups:[
      { id:"baza", label:"Baza białkowa", options:[
        { id:"silken", label:"Silken tofu", ingredients:[{name:"Silken tofu",amount:300,unit:"g"}] },
        { id:"twarog", label:"Twaróg + jogurt", ingredients:[{name:"Twaróg chudy",amount:150,unit:"g"},{name:"Jogurt naturalny",amount:100,unit:"g"}] },
        { id:"serek", label:"Serek wiejski lekki", ingredients:[{name:"Serek wiejski lekki",amount:200,unit:"g"}] },
      ]},
      { id:"slodzik", label:"Słodzik", options:[
        { id:"miod", label:"Miód / syrop klonowy", ingredients:[{name:"Miód lub syrop klonowy",amount:25,unit:"g"}] },
        { id:"banan", label:"Banan (mrożony)", ingredients:[{name:"Banan",amount:100,unit:"g"}] },
      ]},
      { id:"czekolada", label:"Tuning czekoladowy (opcjonalnie)", options:[
        { id:"brak", label:"Bez", ingredients:[] },
        { id:"kakao", label:"Kakao", ingredients:[{name:"Kakao gorzkie",amount:1,unit:"łyżeczka"}] },
        { id:"czekolada", label:"Czekolada (polewa)", ingredients:[{name:"Czekolada gorzka",amount:1,unit:"kostka"}] },
      ]},
    ],
  },
  { id:"omlet_placuszki", name:"Omlet lub placuszki", meals:["sniadanie","lunch"], portions:1,
    fixed:[
      {name:"Jajka M",amount:2,unit:"sztuka"},
      {name:"Twaróg chudy / skyr",amount:50,unit:"g"},
      {name:"Mąka pszenna lub owsiana",amount:30,unit:"g"},
      {name:"Olej lub masło",amount:2,unit:"g"},
      {name:"Proszek do pieczenia",amount:1,unit:"szczypta"},
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
    fixed:[
      {name:"Sos tamari lub sojowy",amount:30,unit:"ml"},
      {name:"Masło orzechowe",amount:50,unit:"g"},
      {name:"Limonki",amount:2,unit:"sztuka"},
      {name:"Olej sezamowy",amount:1,unit:"łyżka"},
      {name:"Miód",amount:1,unit:"łyżeczka"},
      {name:"Sos sriracha",amount:1,unit:"łyżeczka"},
      {name:"Imbir świeży",amount:1,unit:"kawałek (2,5 cm)"},
      {name:"Czosnek",amount:3,unit:"ząbek"},
      {name:"Olej roślinny",amount:60,unit:"ml"},
      {name:"Papryczki chili",amount:2,unit:"sztuka"},
      {name:"Nerkowce surowe",amount:70,unit:"g"},
      {name:"Bataty",amount:400,unit:"g"},
      {name:"Kapusta biała",amount:500,unit:"g"},
      {name:"Dymka (zielona cebulka)",amount:2,unit:"sztuka"},
    ],
    variantGroups:[],
  },
  { id:"pieczone_warzywa", name:"Pieczone warzywa (korzeniowe)", meals:["obiad","lunch"], portions:1,
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
    fixed:[
      {name:"Cebula",amount:0.5,unit:"sztuka"},
      {name:"Czosnek",amount:1,unit:"ząbek"},
      {name:"Masło lub oliwa",amount:5,unit:"g"},
      {name:"Bulion warzywny",amount:375,unit:"ml"},
      {name:"Parmezan",amount:7,unit:"g"},
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
    fixed:[
      {name:"Twaróg półtłusty lub chudy",amount:150,unit:"g"},
      {name:"Mąka pszenna lub orkiszowa",amount:45,unit:"g"},
      {name:"Jajko M",amount:1,unit:"sztuka"},
      {name:"Szpinak baby",amount:50,unit:"g"},
      {name:"Masło",amount:5,unit:"g"},
      {name:"Sól",amount:1,unit:"szczypta"},
    ],
    variantGroups:[],
  },
  { id:"tofu_panierka", name:"Tofu w panierce", meals:["obiad","lunch"], portions:1,
    fixed:[
      {name:"Tofu naturalne",amount:150,unit:"g"},
      {name:"Mąka pszenna",amount:10,unit:"g"},
      {name:"Jajko M",amount:1,unit:"sztuka"},
      {name:"Bułka tarta",amount:20,unit:"g"},
      {name:"Oliwa lub olej",amount:1,unit:"łyżeczka"},
      {name:"Ryż",amount:50,unit:"g"},
    ],
    variantGroups:[],
  },
  { id:"tortilla_gyros", name:"Tortilla gyros", meals:["sniadanie","obiad","lunch"], portions:1,
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
    fixed:[
      {name:"Ogórki gruntowe",amount:500,unit:"g"},
      {name:"Sól niejodowana",amount:1,unit:"łyżka"},
      {name:"Czosnek",amount:3,unit:"ząbek"},
      {name:"Olej roślinny",amount:1,unit:"łyżka"},
      {name:"Ocet spirytusowy lub jabłkowy",amount:2,unit:"łyżka"},
      {name:"Cukier",amount:12,unit:"g"},
      {name:"Chili w płatkach lub sriracha",amount:1,unit:"łyżeczka"},
    ], variantGroups:[],
  },
  { id:"marchewka_sezam", name:"Marchewka z sezamem", portions:2,
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
          {name:"Majonez lekki lub tradycyjny",amount:25,unit:"g"},
          {name:"Jogurt naturalny",amount:25,unit:"g"},
          {name:"Sok z cytryny",amount:1,unit:"łyżka"},
        ]},
      ]},
    ],
  },
  { id:"pasta_tofu_sliwki", name:"Pasta z wędzonego tofu i suszonych śliwek", portions:2,
    fixed:[
      {name:"Tofu wędzone",amount:180,unit:"g"},
      {name:"Suszone śliwki",amount:35,unit:"g"},
      {name:"Sos sojowy",amount:15,unit:"ml"},
      {name:"Olej roślinny lub oliwa",amount:12,unit:"g"},
      {name:"Majeranek",amount:1,unit:"łyżeczka"},
    ], variantGroups:[],
  },
  { id:"almette_chorizo", name:"Almette, chorizo i rukola", portions:1,
    fixed:[
      {name:"Serek Almette",amount:25,unit:"g"},
      {name:"Kiełbasa chorizo",amount:15,unit:"g"},
      {name:"Pomidor",amount:50,unit:"g"},
      {name:"Rukola",amount:1,unit:"garść"},
      {name:"Sos balsamiczny",amount:5,unit:"ml"},
    ], variantGroups:[],
  },
  { id:"ciecierzyca_prazona", name:"Prażona (pieczona) ciecierzyca", portions:1,
    fixed:[
      {name:"Ciecierzyca z puszki",amount:40,unit:"g"},
      {name:"Oliwa z oliwek",amount:2,unit:"g"},
    ], variantGroups:[],
  },
  { id:"sos_balsamiczny", name:"Sos balsamiczny (krem)", portions:7,
    fixed:[
      {name:"Ocet balsamiczny",amount:100,unit:"ml"},
      {name:"Melasa z granatu lub miód",amount:25,unit:"g"},
    ], variantGroups:[],
  },
  { id:"sos_orzechowy", name:"Sos orzechowy (a la Pad Thai)", portions:5,
    fixed:[
      {name:"Masło orzechowe",amount:25,unit:"g"},
      {name:"Sos sojowy",amount:1,unit:"łyżka"},
      {name:"Sok z limonki",amount:1,unit:"łyżka"},
      {name:"Sriracha",amount:0.5,unit:"łyżeczka"},
    ], variantGroups:[],
  },
  { id:"sos_sezamowy", name:"Sos sezamowy (tahini-dip)", portions:5,
    fixed:[
      {name:"Pasta tahini",amount:25,unit:"g"},
      {name:"Sok z cytryny",amount:1,unit:"łyżka"},
      {name:"Miód lub syrop klonowy",amount:0.5,unit:"łyżeczka"},
    ], variantGroups:[],
  },
  { id:"sos_musztardowo_miodowy", name:"Sos musztardowo-miodowy", portions:3,
    fixed:[
      {name:"Musztarda",amount:25,unit:"g"},
      {name:"Miód",amount:12,unit:"g"},
      {name:"Oliwa z oliwek",amount:12,unit:"g"},
      {name:"Sok z cytryny",amount:1,unit:"łyżka"},
    ], variantGroups:[],
  },
  { id:"sos_vinegrette", name:"Sos Vinegrette (klasyczny)", portions:3,
    fixed:[
      {name:"Oliwa z oliwek",amount:24,unit:"g"},
      {name:"Ocet winny lub sok z cytryny",amount:1,unit:"łyżka"},
      {name:"Musztarda",amount:0.5,unit:"łyżeczka"},
    ], variantGroups:[],
  },
  { id:"hummus", name:"Hummus domowy", portions:15,
    fixed:[
      {name:"Ciecierzyca z puszki",amount:240,unit:"g"},
      {name:"Pasta tahini",amount:40,unit:"g"},
      {name:"Sok z cytryny",amount:2,unit:"łyżka"},
      {name:"Czosnek",amount:1,unit:"ząbek"},
      {name:"Kumin",amount:0.5,unit:"łyżeczka"},
    ], variantGroups:[],
  },
  { id:"pasta_jajeczna", name:"Pasta jajeczna do kanapek", portions:2,
    fixed:[
      {name:"Jajka L (ugotowane na twardo)",amount:3,unit:"sztuka"},
      {name:"Majonez lekki",amount:15,unit:"g"},
      {name:"Jogurt naturalny gęsty",amount:30,unit:"g"},
      {name:"Musztarda",amount:10,unit:"g"},
      {name:"Szczypiorek",amount:15,unit:"g"},
    ], variantGroups:[],
  },
];
const MEAL_TAG_LABELS = { sniadanie:"Śniadanie", lunch:"Lunch", obiad:"Obiad", kolacja:"Kolacja" };
function recipesForMeal(tag){ return RECIPES.filter(function(r){ return r.meals.indexOf(tag)!==-1; }); }
function findRecipe(id){ return RECIPES.find(function(r){ return r.id===id; }); }
function findAddon(id){ return ADDONS.find(function(a){ return a.id===id; }); }
