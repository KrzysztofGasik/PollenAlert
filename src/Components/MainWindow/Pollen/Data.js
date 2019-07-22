 const Months = [
    {
      month: "Styczeń",
      trees: ["Leszczyna"],
      grass: []
    },
    {
      month: "Luty",
      trees: ["Leszczyna", "Olcha", "Cis"],
      grass: []
    },
    {
      month: "Marzec",
      trees: ["Leszczyna","Olcha","Topola","Wierzba biała"],
      grass: []
    },
    {
      month: "Kwiecień",
      trees: ["Brzoza","Topola", "Grab pospolity", "Jesion wyniosły", "Wierzba biała", "Dąb bezszypułkowy"],
      grass: []
    },
    {
      month: "Maj",
      trees: ["Brzoza", "Dąb bezszypułkowy", "Buk zwyczajny", "Wierzba biała","Sosna","Świerk pospolity"],
      grass: ["Trawa", "Babka zwyczajna", "Pokrzywa", "Szczaw"]
    },
    {
      month: "Czerwiec",
      trees: ["Bez czarny","Lipa", "Platan"],
      grass: ["Trawa","Żyto","Szczaw", "Babka lancetowata", "Pokrzywa", "Komosa"]
    },
    {
      month: "Lipiec",
      trees: [""],
      grass: []
    },
    {
      month: "Sierpień",
      trees: [""],
      grass: []
    },
    {
      month: "Wrzesień",
      trees: [""],
      grass: []
    },
    {
      month: "Październik",
      trees: [""],
      grass: []
    }
  ];

//Opracowanie: dr med. Piotr Rapiejko na podstawie pomiarów Ośrodka Badania Alergenów Środowiskowych

  const Trees = [
    {
      id: 1,
      name: "Leszczyna",
      info: "Leszczyna pospolita, orzech laskowy (Corylus avellana L.) – gatunek krzewu należącego do rodziny brzozowatych. Występuje w stanie dzikim w całej Europie i Azji Mniejszej po Kaukaz. W Polsce pospolita zarówno na niżu jak i w górach do ok. 1300 m n.p.m.",
      image: "../img/Leszczyna.jpg"
    },
    {
      id: 2,
      name: "Olcha",
      info: "Olsza, olcha (Alnus Mill.) – rodzaj drzew i krzewów z rodziny brzozowatych (Betulaceae A. Gray). Według różnych źródeł zalicza się do niego od 25 do 44 gatunków. Występują one naturalnie w strefie umiarkowanej i borealnej półkuli północnej, na wschodzie jej zasięg występowania dociera do indyjskiego stanu Asam i Azji Południowo-Wschodniej.",
      image: "../img/Olcha.jpg"
    },
    {
      id: 3,
      name: "Cis",
      info: "Cis (Taxus) – rodzaj roślin z rodziny cisowatych (Taxaceae), których przedstawiciele występują w Europie, Azji północnej, wschodniej i południowo-wschodniej, północno-zachodniej Afryce oraz Ameryce Północnej (na południu sięgając po Salwador). W Polsce rośnie w naturze tylko jeden gatunek – cis pospolity (Taxus baccata).",
      image: "../img/Cis.jpg"
    },
    {
      id: 4,
      name: "Topola",
      info: "Topola (Populus L.) – rodzaj drzew z rodziny wierzbowatych (Salicaceae Mirb.). Zalicza się do niego 35 gatunków, spośród których typowym jest Populus alba L.. W Polsce występują trzy rodzime gatunki topoli: topola czarna, topola biała i topola osika.",
      image: "../img/Topola.jpg"
    },
    {
      id: 5,
      name: "Wierzba biała",
      info: "Wierzba biała, w. srebrna, w. pospolita (Salix alba L.) – gatunek drzewa należący do rodziny wierzbowatych. Rodzimym obszarem jej występowania jest Europa, Azja i Afryka Północna (Algieria, Maroko), rozprzestrzenia się też gdzie indziej. Nie występowała w Skandynawii, Irlandii i Szkocji, ale została tam sprowadzona i jest sadzona jako roślina ozdobna. W Polsce pospolita na całym terytorium.",
      image: "../img/Wierzba.png"
    },
    {
      id: 6,
      name: "Brzoza",
      info: "Brzoza (Betula L.) – rodzaj drzew i krzewów należący do rodziny brzozowatych. Obejmuje trudną do sprecyzowania liczbę gatunków, ponieważ w obrębie rodzaju łatwo powstają mieszańce międzygatunkowe o trudnym do ustalenia statusie taksonomicznym. Wyróżnia się zazwyczaj ok. 30–60 gatunków, ale też w niektórych bazach taksonomicznych za zaakceptowane uznaje się już ponad 100 gatunków.",
      image: "../img/Brzoza.jpg"
    },
    {
      id: 7,
      name: "Grab pospolity",
      info: "Grab pospolity, g. zwyczajny (Carpinus betulus L.) – gatunek średniej wielkości drzewa liściastego z rodziny brzozowatych (Betulaceae) (we współczesnych systemach APG, w innych ujęciach w rodzinie leszczynowatych). Występuje w Europie od Francji do Ukrainy. W Polsce częsty na całym niżu i w niższych położeniach górskich.",
      image: "../img/Grab.jpg"
    },
    {
      id: 8,
      name: "Jesion wyniosły",
      info: "Jesion wyniosły (Fraxinus excelsior L.) – gatunek drzewa należący do rodziny oliwkowatych. Występuje naturalnie na większości obszaru Europy i w Azji Zachodniej (Liban, Syria oraz Kaukaz i Zakaukazie). W Polsce jest pospolity na całym obszarze.",
      image: "../img/Jesion.jpg"
    },
    {
      id: 9,
      name: "Dąb bezszypułkowy",
      info: "Dąb bezszypułkowy (Quercus petraea (Matt.) Liebl.) – gatunek drzewa liściastego z rodziny bukowatych. Występuje naturalnie w Europie Środkowej, Irlandii, Wielkiej Brytanii, południowej Skandynawii, aż po tereny Włoch i Bułgarii. W Polsce występuje rzadziej od dębu szypułkowego – ma w Polsce swoją północno-wschodnią granicę zasięgu.",
      image: "../img/Dab.jpg"
    },
    {
      id: 10,
      name: "Buk zwyczajny",
      info: "Buk pospolity, buk zwyczajny (Fagus sylvatica L.) – gatunek drzewa należący do rodziny bukowatych (Fagaceae Dumort.). Występuje na przeważającej części kontynentu europejskiego. W Polsce pospolity, gatunek rodzimy.",
      image: "../img/Buk.jpg"
    },
    {
      id: 11,
      name: "Sosna",
      info: "Sosna (Pinus L. 1753) – rodzaj roślin z rodziny sosnowatych (Pinaceae Lindl.) obejmujący niemal 115 gatunków drzew i krzewów. Występują przeważnie w strefie klimatu umiarkowanego półkuli północnej, choć niektóre gatunki rosną również w strefach cieplejszych (tu jednak zwykle w górach). W Ameryce Środkowej najdalej na południe sięgają do Gwatemali, Salwadoru i Nikaragui, zaś w Azji do Archipelagu Malajskiego. Jedyne naturalne stanowisko na półkuli południowej znajduje się na Sumatrze (P. merkusii).",
      image: "../img/Sosna.jpg"
    },
    {
      id: 12,
      name: "Świerk pospolity",
      info: "Świerk pospolity (Picea abies (L.) H.Karst) – gatunek drzewa z rodziny sosnowatych (Pinaceae). Jest to jedyny gatunek świerka występujący naturalnie w Polsce. Rośnie głównie w północno-wschodniej części kraju, na południu Polski, w górach i na pogórzu. Nie występuje w sposób naturalny w centralnej i zachodniej Polsce (tzw. pas bezświerkowy). Zasięg tego gatunku rozciąga się na północy Europy od Norwegii do Rosji, występuje także w Alpach, Sudetach, Karpatach oraz na Bałkanach. Na wschodzie sięga Uralu, gdzie stopniowo wypiera go świerk syberyjski (Picea obovata). Północna granica występowania przebiega w Norwegii.",
      image: "../img/Swierk.jpeg"
    },
    {
      id: 13,
      name: "Bez czarny",
      info: "Bez czarny, dziki bez czarny (Sambucus nigra L.) – gatunek rośliny z rodziny piżmaczkowatych (Adoxaceae), dawniej zaliczany był także do rodziny bzowatych (Sambucaceae) i przewiertniowatych (Caprifoliaceae). Gatunek szeroko rozprzestrzeniony w Europie, w Polsce pospolity.",
      image: "../img/BezCzarny.jpg"
    },
    {
      id: 14,
      name: "Lipa",
      info: "Lipa (Tilia) – rodzaj długowiecznych drzew należący do podrodziny lipowatych. Rosną w umiarkowanej strefie półkuli północnej. Zalicza się do niego ok. 30 gatunków. Gatunkiem typowym jest Tilia europaea L.",
      image: "../img/Lipa.jpg"
    },
    {
      id: 15,
      name: "Platan",
      info: "Platan (Platanus L. ) – rodzaj drzew należący do rodziny platanowatych, obejmujący 6 gatunków, występujących w południowo-wschodniej Europie, Azji Mniejszej, Indiach, Meksyku i Ameryce Północnej. Gatunkiem typowym jest Platanus orientalis.",
      image: "../img/Platan.jpg"
    }
  ]
  const Grasses = [
    {
      id: 1,
      name: "Trawa",
      info: "Wiechlinowate, trawy (Poaceae (R. Br.) Barnh., Gramineae Juss.) – rodzina roślin należąca do rzędu wiechlinowców. Liczy ok. 11 tys. gatunków. Rośliny te stanowią główny komponent roślinności formacji trawiastych, łąk i pastwisk. Należą do niej również ważne rośliny uprawne, w tym zboża. W Polsce występuje ponad 150 gatunków traw.",
      image: "../img/Trawa.jpg"
    },
    {
      id: 2,
      name: "Babka zwyczajna",
      info: "Babka zwyczajna, babka większa (Plantago major L.) – gatunek rośliny należący do rodziny babkowatych. Rodzimy obszar występowania obejmował Europę i Azję, ale jako gatunek zawleczony rozprzestrzenił się także na innych kontynentach, szczególnie pospolicie w Ameryce Północnej. W Polsce gatunek pospolity na całym terenie.",
      image: "../img/Babka.jpg"
    },
    {
      id: 3,
      name: "Pokrzywa",
      info: "Pokrzywa zwyczajna (Urtica dioica L.) – gatunek rośliny z rodziny pokrzywowatych (Urticaceae). Występuje w stanie dzikim w Europie, Azji, Afryce Północnej, Ameryce Północnej, a zawleczona została także na inne obszary i kontynenty. Rośnie w wilgotnych lasach i zaroślach oraz bardzo często, jako gatunek synantropijny, na żyznych siedliskach ruderalnych.",
      image: "../img/Pokrzywa.jpg"
    },
    {
      id: 4,
      name: "Szczaw",
      info: "Szczaw (Rumex L.) – rodzaj roślin z rodziny rdestowatych. Obejmuje około 200 gatunków szeroko rozprzestrzenionych na całym świecie, zwłaszcza w strefach klimatu umiarkowanego. Rośliny z tego rodzaju bywają kłopotliwe do identyfikacji, gatunki są bardzo zmienne, do cech diagnostycznych niezbędnych do prawidłowego oznaczenia gatunków należą detale budowy kwiatów. Występują na terenach ruderalnych, na brzegach wód, na terenach zalewowych zarówno nad rzekami, jak i wzdłuż wybrzeży morskich, na łąkach.",
      image: "../img/Szczaw.jpg"
    },
    {
      id: 5,
      name: "Żyto",
      info: "Żyto (Secale L.) – rodzaj roślin jednorocznych, dwuletnich lub wieloletnich z rodziny wiechlinowatych. Pochodzi z Azji. Liczy około 10 gatunków, z których najważniejszym ze względów gospodarczych jest uprawiane żyto zwyczajne. Gatunkiem typowym jest Secale cereale L.",
      image: "../img/Zyto.jpg"
    },
    {
      id: 6,
      name: "Babka lancetowata",
      info: "Babka lancetowata, babka wąskolistna, języczki polne (Plantago lanceolata L.) – gatunek byliny należący do rodziny babkowatych (Plantaginaceae Juss.). Występuje w stanie dzikim w niemal całej Europie, w Afryce północnej oraz w Azji zachodniej aż do Himalajów i jej części środkowej. Jako gatunek zawleczony obecny jest w Ameryce Północnej, Środkowej i Południowej, na Hawajach, w Australii i na Madagaskarze. Gatunek bardzo zmienny, przystosowuje się do różnych warunków, został rozwleczony na wszystkie kontynenty. W Polsce pospolity.",
      image: "../img/BabkaLancetowata.jpg"
    },
    {
      id: 7,
      name: "Komosa",
      info: "Komosa (Chenopodium L.) – rodzaj roślin, należący w różnych systemach klasyfikacyjnych do rodziny komosowatych lub szarłatowatych (m.in. system APG III z 2009). Obejmuje ponad 100 gatunków spotykanych na całym niemal świecie, z czego w Polsce występuje ok. 30 gatunków, zarówno rodzimych, jak i zawleczonych lub uprawianych. Niektóre gatunki są jadalne.",
      image: "../img/Komosa.jpg"
    }
  ]
  export {Months, Trees, Grasses};