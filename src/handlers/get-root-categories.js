
/**
 * A Lambda function that returns list of root categories.
 */
 exports.getRootCategoriesHandler = async () =>{
     var categories =[
    {
      "id": "502",
      "semantic_id": "/hem-tradgard--c502",
      "name": "Hem & Trädgård",
      "name_hierarchical": "Hem & Trädgård",
      "aliases": [],
      "products_total": 341424,
      "stores_total": 1881,
      "featured_stores_total": 1062,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "Hem & trädgård är en kategori som bland annat huserar allt inom kök, inredning, städning, verktyg och trädgård. Här hittar du även saker till bilen, kontorsutrustning och livsmedel.",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/hem_familj.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/hem_familj.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/502",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=502&ref=61745",
      "path": [
        {
          "id": "502",
          "semantic_id": "/hem-tradgard--c502",
          "name": "Hem & Trädgård"
        }
      ],
      "preferred_view_mode": null
    },
    {
      "id": "328",
      "semantic_id": "/datorer-tillbehor--c328",
      "name": "Datorer & Tillbehör",
      "name_hierarchical": "Datorer & Tillbehör",
      "aliases": [
        "Datorer & Delar"
      ],
      "products_total": 94163,
      "stores_total": 669,
      "featured_stores_total": 421,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "Datorer och tillbehör med bland annat bildskärmar, skrivare, möss, tangentbord och olika datorkomponenter. Här finner du både kompletta datorer och alla komponenter som behövs för hemmabygget. Det finns även nätverksprodukter för hemnätverket, kablar för att ansluta alltihopa och mjukvaror om du behöver exempelvis köpa till operativsystem.",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/datorodelar.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/datorodelar.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/328",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=328&ref=61745",
      "path": [
        {
          "id": "328",
          "semantic_id": "/datorer-tillbehor--c328",
          "name": "Datorer & Tillbehör"
        }
      ],
      "preferred_view_mode": "list-large"
    },
    {
      "id": "626",
      "semantic_id": "/spel-film--c626",
      "name": "Spel & Film",
      "name_hierarchical": "Spel & Film",
      "aliases": [],
      "products_total": 89663,
      "stores_total": 402,
      "featured_stores_total": 221,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "Här hittar ni både de hetaste spelkonsollerna och spelen till dem. För er som hellre spelar analogt har vi ett stort utbud av sällskapsspel. Här finner ni produkter till PlayStation, Nintendo, Xbox, PC och Mac.",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/spelokonsol.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/spelokonsol.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/626",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=626&ref=61745",
      "path": [
        {
          "id": "626",
          "semantic_id": "/spel-film--c626",
          "name": "Spel & Film"
        }
      ],
      "preferred_view_mode": null
    },
    {
      "id": "479",
      "semantic_id": "/ljud-bild-musik--c479",
      "name": "Ljud, Bild & Musik",
      "name_hierarchical": "Ljud, Bild & Musik",
      "aliases": [],
      "products_total": 63277,
      "stores_total": 777,
      "featured_stores_total": 491,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "I kategorin Ljud och Bild finns allt från TV-apparater, blu-rayspelare och hembiopaket till bilstereo och musikinstrument som elgitarrer och trumset, och syntar.",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/ljudobild.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/ljudobild.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/479",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=479&ref=61745",
      "path": [
        {
          "id": "479",
          "semantic_id": "/ljud-bild-musik--c479",
          "name": "Ljud, Bild & Musik"
        }
      ],
      "preferred_view_mode": null
    },
    {
      "id": "298",
      "semantic_id": "/mobil-gps--c298",
      "name": "Mobil & GPS",
      "name_hierarchical": "Mobil & GPS",
      "aliases": [],
      "products_total": 19667,
      "stores_total": 668,
      "featured_stores_total": 433,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "Mobiltelefoner, smarta tillbehör och GPS-navigatorer finner du här. Vi listar även trådlösa telefoner för anslutning till vanliga telejacket. Skydda din telefon med skal och skärmskydd, ladda batteriet med portabla batterier och utforska nya världar med VR-glasögon för smartphones. Kanske behöver du ett handsfree-set till bil eller MC? Glöm inte minneskortet och den praktiska mobilhögtalaren.",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/mobilogps.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/mobilogps.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/298",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=298&ref=61745",
      "path": [
        {
          "id": "298",
          "semantic_id": "/mobil-gps--c298",
          "name": "Mobil & GPS"
        }
      ],
      "preferred_view_mode": null
    },
    {
      "id": "1944",
      "semantic_id": "/skor-klader-accessoarer--c1944",
      "name": "Skor, Kläder & Accessoarer",
      "name_hierarchical": "Skor, Kläder & Accessoarer",
      "aliases": [],
      "products_total": 196792,
      "stores_total": 1325,
      "featured_stores_total": 709,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "Här hittar du skor, kläder och accessoarer för alla tillfällen. Från träningskläder och löparskor, till varma underställ och vinterfodrade skor. Här finns även väskor och ryggsäckar, solglasögon samt armbandsur.",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/skor_klader_accessoarer.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/skor_klader_accessoarer.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/1944",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=1944&ref=61745",
      "path": [
        {
          "id": "1944",
          "semantic_id": "/skor-klader-accessoarer--c1944",
          "name": "Skor, Kläder & Accessoarer"
        }
      ],
      "preferred_view_mode": null
    },
    {
      "id": "956",
      "semantic_id": "/skonhet-halsa--c956",
      "name": "Skönhet & Hälsa",
      "name_hierarchical": "Skönhet & Hälsa",
      "aliases": [],
      "products_total": 109766,
      "stores_total": 1108,
      "featured_stores_total": 641,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "Här hittar du det mesta inom livsstil och skönhet, från smink till klockor, till parfym och linsvätskor. Jämför pris på livsstil och skönhetsprodukter från Lancome, Max Factor, Alcon, Bausch & Lomb, BaByliss, Ray-Ban och många fler.",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/skonhet_halsa.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/skonhet_halsa.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/956",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=956&ref=61745",
      "path": [
        {
          "id": "956",
          "semantic_id": "/skonhet-halsa--c956",
          "name": "Skönhet & Hälsa"
        }
      ],
      "preferred_view_mode": null
    },
    {
      "id": "765",
      "semantic_id": "/sport-friluftsliv--c765",
      "name": "Sport & Friluftsliv",
      "name_hierarchical": "Sport & Friluftsliv",
      "aliases": [],
      "products_total": 57873,
      "stores_total": 1165,
      "featured_stores_total": 640,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "Sport & Friluftsliv är en kategori för all sport- och fritidsutrustning som behövs under årets alla månader. Här finns prylarna till campingen, fisketuren, jakten och vandringsturen, såväl som cykelsemestern, fotbollsmatchen, löprundan och det hemmagjorda gymmet. Komplettera med en pulsklocka eller ett aktivitetsband för full koll på träningar och aktiviteter. Glöm inte bra skor till fötterna.",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/sport_friluftsliv.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/sport_friluftsliv.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/765",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=765&ref=61745",
      "path": [
        {
          "id": "765",
          "semantic_id": "/sport-friluftsliv--c765",
          "name": "Sport & Friluftsliv"
        }
      ],
      "preferred_view_mode": null
    },
    {
      "id": "1943",
      "semantic_id": "/barn-leksaker--c1943",
      "name": "Barn & Familj",
      "name_hierarchical": "Barn & Familj",
      "aliases": [],
      "products_total": 24814,
      "stores_total": 623,
      "featured_stores_total": 367,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "Här hittar du praktiska prylar och kläder till barn. Från skor och kläder till leksaker, barnvagnar och skötbord.",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/barn_leksaker.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/barn_leksaker.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/1943",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=1943&ref=61745",
      "path": [
        {
          "id": "1943",
          "semantic_id": "/barn-familj--c1943",
          "name": "Barn & Familj"
        }
      ],
      "preferred_view_mode": null
    },
    {
      "id": "480",
      "semantic_id": "/foto-video--c480",
      "name": "Foto & Video",
      "name_hierarchical": "Foto & Video",
      "aliases": [],
      "products_total": 8424,
      "stores_total": 322,
      "featured_stores_total": 222,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "Här finns allt för den som lägger tid på att bevaka och dokumentera sin vardag. Vare sig det är den glade amatören eller det inbitna proffset finns rätt grejor här. Använd gärna filtren för att hitta rätt kamera eller tillbehör för dina behov.",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/foto.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/foto.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/480",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=480&ref=61745",
      "path": [
        {
          "id": "480",
          "semantic_id": "/foto-video--c480",
          "name": "Foto & Video"
        }
      ],
      "preferred_view_mode": null
    },
    {
      "id": "2106",
      "semantic_id": "/--c2106",
      "name": "Hushållsapparater & Vitvaror",
      "name_hierarchical": "Hushållsapparater & Vitvaror",
      "aliases": [],
      "products_total": 2924,
      "stores_total": 0,
      "featured_stores_total": 0,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "Hushållsapparater och vitvaror för hemmet. Här hittar du allt från sommarens hetaste grillar till olika köksmaskiner och hela minikök om du behöver det.",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/AGD.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/AGD.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/2106",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=2106&ref=61745",
      "path": [
        {
          "id": "2106",
          "semantic_id": "/hushallsapparater-vitvaror--c2106",
          "name": "Hushållsapparater & Vitvaror"
        }
      ],
      "preferred_view_mode": null
    },
    {
      "id": "v3456",
      "semantic_id": "/--cv3456",
      "name": "Gamer Zone",
      "name_hierarchical": "Gamer Zone",
      "aliases": [],
      "products_total": 0,
      "stores_total": 0,
      "featured_stores_total": 0,
      "lowest_price": null,
      "immediate_products": false,
      "child_categories": true,
      "description": "",
      "logo": {
        "96": "https://pricespy-75b8.kxcdn.com/g/cat/96/gamer.png",
        "192": "https://pricespy-75b8.kxcdn.com/g/cat/192/gamer.png"
      },
      "uri": "https://api.prisjakt.nu/v1/categories/v3456",
      "web_uri": "https://www.prisjakt.nu/kategori.php?k=v3456&ref=61745",
      "path": [
        {
          "id": "v3456",
          "semantic_id": "/gamer-zone--cv3456",
          "name": "Gamer Zone"
        }
      ],
      "preferred_view_mode": null
    }
  ];
  return categories;
     
 }