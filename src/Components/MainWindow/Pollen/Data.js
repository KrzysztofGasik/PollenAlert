import image1 from "../../../../img/Leszczyna.jpg";
import image2 from "../../../../img/Olcha.jpg";
import image3 from "../../../../img/Cis.jpg";
import image4 from "../../../../img/Topola.jpg";
import image5 from "../../../../img/Wierzba.png";
import image6 from "../../../../img/Brzoza.jpg";
import image7 from "../../../../img/Grab.jpg";
import image8 from "../../../../img/Jesion.jpg";
import image9 from "../../../../img/Dab.jpg";
import image10 from "../../../../img/Buk.jpg";
import image11 from "../../../../img/Sosna.jpg";
import image12 from "../../../../img/Swierk.jpg";
import image13 from "../../../../img/BezCzarny.jpg";
import image14 from "../../../../img/Lipa.jpg";
import image15 from "../../../../img/Platan.jpg";
import image16 from "../../../../img/Trawa.jpg";
import image17 from "../../../../img/Babka.jpg";
import image18 from "../../../../img/Pokrzywa.jpg";
import image19 from "../../../../img/Szczaw.jpg";
import image20 from "../../../../img/Zyto.jpg";
import image21 from "../../../../img/BabkaLancetowata.jpg";
import image22 from "../../../../img/Komosa.jpg";
import image23 from "../../../../img/BabkaSzerokolistna.jpg";
import image24 from "../../../../img/Bylica.jpg";
import image25 from "../../../../img/Ambrozja.jpg";
import image26 from "../../../../img/Cladosporium.jpg";
import image27 from "../../../../img/Alternaria.jpg";
import image28 from "../../../../img/Kurz.jpg";
import image29 from "../../../../img/Animal.jpg";

const Months = [
    {
      month: "Styczeń",
      trees: ["Leszczyna"]
    },
    {
      month: "Luty",
      trees: ["Leszczyna", "Olcha", "Cis"]
    },
    {
      month: "Marzec",
      trees: ["Leszczyna","Olcha","Topola","Wierzba biała"]
    },
    {
      month: "Kwiecień",
      trees: ["Brzoza","Topola", "Grab pospolity", "Jesion wyniosły", "Wierzba biała", "Dąb bezszypułkowy","Cladosporium","Alternaria"]
    },
    {
      month: "Maj",
      trees: ["Brzoza", "Dąb bezszypułkowy", "Buk zwyczajny", "Wierzba biała","Sosna","Świerk pospolity","Trawa", "Babka zwyczajna", "Pokrzywa", "Szczaw"]
    },
    {
      month: "Czerwiec",
      trees: ["Bez czarny","Lipa", "Platan","Trawa","Żyto","Szczaw", "Babka lancetowata", "Pokrzywa", "Komosa","Cladosporium","Alternaria"]
    },
    {
      month: "Lipiec",
      trees: ["Trawa", "Pokrzywa","Komosa","Babka lancetowata","Szczaw","Babka szerokolistna", "Bylica","Cladosporium","Alternaria"]
    },
    {
      month: "Sierpień",
      trees: ["Trawa","Bylica","Pokrzywa","Komosa","Babka lancetowata","Babka szerokolistna","Ambrozja","Cladosporium","Alternaria"]
    },
    {
      month: "Wrzesień",
      trees: ["Trawa","Bylica","Pokrzywa","Komosa","Babka lancetowata","Babka szerokolistna","Ambrozja","Kurz","Cladosporium","Alternaria"]
    },
    {
      month: "Październik",
      trees: ["Trawa","Bylica","Pokrzywa","Komosa","Babka lancetowata","Babka szerokolistna","Ambrozja","Kurz","Zwierzęta","Cladosporium","Alternaria"]
    }
  ];

  const Data = [
    {
      id: 1,
      name: "Leszczyna",
      type: "drzewo",
      info: "Leszczyna pospolita, orzech laskowy (Corylus avellana L.) – gatunek krzewu należącego do rodziny brzozowatych. Występuje w stanie dzikim w całej Europie i Azji Mniejszej po Kaukaz. W Polsce pospolita zarówno na niżu jak i w górach do ok. 1300 m n.p.m.",
      image: image1
    },
    {
      id: 2,
      name: "Olcha",
      type: "drzewo",
      info: "Olsza, olcha (Alnus Mill.) – rodzaj drzew i krzewów z rodziny brzozowatych (Betulaceae A. Gray). Według różnych źródeł zalicza się do niego od 25 do 44 gatunków. Występują one naturalnie w strefie umiarkowanej i borealnej półkuli północnej, na wschodzie jej zasięg występowania dociera do indyjskiego stanu Asam i Azji Południowo-Wschodniej.",
      image: image2
    },
    {
      id: 3,
      name: "Cis",
      type: "drzewo",
      info: "Cis (Taxus) – rodzaj roślin z rodziny cisowatych (Taxaceae), których przedstawiciele występują w Europie, Azji północnej, wschodniej i południowo-wschodniej, północno-zachodniej Afryce oraz Ameryce Północnej (na południu sięgając po Salwador). W Polsce rośnie w naturze tylko jeden gatunek – cis pospolity (Taxus baccata).",
      image: image3
    },
    {
      id: 4,
      name: "Topola",
      type: "drzewo",
      info: "Topola (Populus L.) – rodzaj drzew z rodziny wierzbowatych (Salicaceae Mirb.). Zalicza się do niego 35 gatunków, spośród których typowym jest Populus alba L.. W Polsce występują trzy rodzime gatunki topoli: topola czarna, topola biała i topola osika.",
      image: image4
    },
    {
      id: 5,
      name: "Wierzba biała",
      type: "drzewo",
      info: "Wierzba biała, w. srebrna, w. pospolita (Salix alba L.) – gatunek drzewa należący do rodziny wierzbowatych. Rodzimym obszarem jej występowania jest Europa, Azja i Afryka Północna (Algieria, Maroko), rozprzestrzenia się też gdzie indziej. Nie występowała w Skandynawii, Irlandii i Szkocji, ale została tam sprowadzona i jest sadzona jako roślina ozdobna. W Polsce pospolita na całym terytorium.",
      image: image5
    },
    {
      id: 6,
      name: "Brzoza",
      type: "drzewo",
      info: "Brzoza (Betula L.) – rodzaj drzew i krzewów należący do rodziny brzozowatych. Obejmuje trudną do sprecyzowania liczbę gatunków, ponieważ w obrębie rodzaju łatwo powstają mieszańce międzygatunkowe o trudnym do ustalenia statusie taksonomicznym. Wyróżnia się zazwyczaj ok. 30–60 gatunków, ale też w niektórych bazach taksonomicznych za zaakceptowane uznaje się już ponad 100 gatunków.",
      image: image6
    },
    {
      id: 7,
      name: "Grab pospolity",
      type: "drzewo",
      info: "Grab pospolity, g. zwyczajny (Carpinus betulus L.) – gatunek średniej wielkości drzewa liściastego z rodziny brzozowatych (Betulaceae) (we współczesnych systemach APG, w innych ujęciach w rodzinie leszczynowatych). Występuje w Europie od Francji do Ukrainy. W Polsce częsty na całym niżu i w niższych położeniach górskich.",
      image: image7
    },
    {
      id: 8,
      name: "Jesion wyniosły",
      type: "drzewo",
      info: "Jesion wyniosły (Fraxinus excelsior L.) – gatunek drzewa należący do rodziny oliwkowatych. Występuje naturalnie na większości obszaru Europy i w Azji Zachodniej (Liban, Syria oraz Kaukaz i Zakaukazie). W Polsce jest pospolity na całym obszarze.",
      image: image8
    },
    {
      id: 9,
      name: "Dąb bezszypułkowy",
      type: "drzewo",
      info: "Dąb bezszypułkowy (Quercus petraea (Matt.) Liebl.) – gatunek drzewa liściastego z rodziny bukowatych. Występuje naturalnie w Europie Środkowej, Irlandii, Wielkiej Brytanii, południowej Skandynawii, aż po tereny Włoch i Bułgarii. W Polsce występuje rzadziej od dębu szypułkowego – ma w Polsce swoją północno-wschodnią granicę zasięgu.",
      image: image9
    },
    {
      id: 10,
      name: "Buk zwyczajny",
      type: "drzewo",
      info: "Buk pospolity, buk zwyczajny (Fagus sylvatica L.) – gatunek drzewa należący do rodziny bukowatych (Fagaceae Dumort.). Występuje na przeważającej części kontynentu europejskiego. W Polsce pospolity, gatunek rodzimy.",
      image: image10
    },
    {
      id: 11,
      name: "Sosna",
      type: "drzewo",
      info: "Sosna (Pinus L. 1753) – rodzaj roślin z rodziny sosnowatych (Pinaceae Lindl.) obejmujący niemal 115 gatunków drzew i krzewów. Występują przeważnie w strefie klimatu umiarkowanego półkuli północnej, choć niektóre gatunki rosną również w strefach cieplejszych (tu jednak zwykle w górach). W Ameryce Środkowej najdalej na południe sięgają do Gwatemali, Salwadoru i Nikaragui, zaś w Azji do Archipelagu Malajskiego. Jedyne naturalne stanowisko na półkuli południowej znajduje się na Sumatrze (P. merkusii).",
      image: image11
    },
    {
      id: 12,
      name: "Świerk pospolity",
      type: "drzewo",
      info: "Świerk pospolity (Picea abies (L.) H.Karst) – gatunek drzewa z rodziny sosnowatych (Pinaceae). Jest to jedyny gatunek świerka występujący naturalnie w Polsce. Rośnie głównie w północno-wschodniej części kraju, na południu Polski, w górach i na pogórzu. Nie występuje w sposób naturalny w centralnej i zachodniej Polsce (tzw. pas bezświerkowy). Zasięg tego gatunku rozciąga się na północy Europy od Norwegii do Rosji, występuje także w Alpach, Sudetach, Karpatach oraz na Bałkanach. Na wschodzie sięga Uralu, gdzie stopniowo wypiera go świerk syberyjski (Picea obovata). Północna granica występowania przebiega w Norwegii.",
      image: image12
    },
    {
      id: 13,
      name: "Bez czarny",
      type: "drzewo",
      info: "Bez czarny, dziki bez czarny (Sambucus nigra L.) – gatunek rośliny z rodziny piżmaczkowatych (Adoxaceae), dawniej zaliczany był także do rodziny bzowatych (Sambucaceae) i przewiertniowatych (Caprifoliaceae). Gatunek szeroko rozprzestrzeniony w Europie, w Polsce pospolity.",
      image: image13
    },
    {
      id: 14,
      name: "Lipa",
      type: "drzewo",
      info: "Lipa (Tilia) – rodzaj długowiecznych drzew należący do podrodziny lipowatych. Rosną w umiarkowanej strefie półkuli północnej. Zalicza się do niego ok. 30 gatunków. Gatunkiem typowym jest Tilia europaea L.",
      image: image14
    },
    {
      id: 15,
      name: "Platan",
      type: "drzewo",
      info: "Platan (Platanus L. ) – rodzaj drzew należący do rodziny platanowatych, obejmujący 6 gatunków, występujących w południowo-wschodniej Europie, Azji Mniejszej, Indiach, Meksyku i Ameryce Północnej. Gatunkiem typowym jest Platanus orientalis.",
      image: image15
    },
    {
      id: 16,
      name: "Trawa",
      type: "trawa",
      info: "Wiechlinowate, trawy (Poaceae (R. Br.) Barnh., Gramineae Juss.) – rodzina roślin należąca do rzędu wiechlinowców. Liczy ok. 11 tys. gatunków. Rośliny te stanowią główny komponent roślinności formacji trawiastych, łąk i pastwisk. Należą do niej również ważne rośliny uprawne, w tym zboża. W Polsce występuje ponad 150 gatunków traw.",
      image: image16
    },
    {
      id: 17,
      name: "Babka zwyczajna",
      type: "trawa",
      info: "Babka zwyczajna, babka większa (Plantago major L.) – gatunek rośliny należący do rodziny babkowatych. Rodzimy obszar występowania obejmował Europę i Azję, ale jako gatunek zawleczony rozprzestrzenił się także na innych kontynentach, szczególnie pospolicie w Ameryce Północnej. W Polsce gatunek pospolity na całym terenie.",
      image: image17
    },
    {
      id: 18,
      name: "Pokrzywa",
      type: "trawa",
      info: "Pokrzywa zwyczajna (Urtica dioica L.) – gatunek rośliny z rodziny pokrzywowatych (Urticaceae). Występuje w stanie dzikim w Europie, Azji, Afryce Północnej, Ameryce Północnej, a zawleczona została także na inne obszary i kontynenty. Rośnie w wilgotnych lasach i zaroślach oraz bardzo często, jako gatunek synantropijny, na żyznych siedliskach ruderalnych.",
      image: image18
    },
    {
      id: 19,
      name: "Szczaw",
      type: "trawa",
      info: "Szczaw (Rumex L.) – rodzaj roślin z rodziny rdestowatych. Obejmuje około 200 gatunków szeroko rozprzestrzenionych na całym świecie, zwłaszcza w strefach klimatu umiarkowanego. Rośliny z tego rodzaju bywają kłopotliwe do identyfikacji, gatunki są bardzo zmienne, do cech diagnostycznych niezbędnych do prawidłowego oznaczenia gatunków należą detale budowy kwiatów. Występują na terenach ruderalnych, na brzegach wód, na terenach zalewowych zarówno nad rzekami, jak i wzdłuż wybrzeży morskich, na łąkach.",
      image: image19
    },
    {
      id: 20,
      name: "Żyto",
      type: "trawa",
      info: "Żyto (Secale L.) – rodzaj roślin jednorocznych, dwuletnich lub wieloletnich z rodziny wiechlinowatych. Pochodzi z Azji. Liczy około 10 gatunków, z których najważniejszym ze względów gospodarczych jest uprawiane żyto zwyczajne. Gatunkiem typowym jest Secale cereale L.",
      image: image20
    },
    {
      id: 21,
      name: "Babka lancetowata",
      type: "trawa",
      info: "Babka lancetowata, babka wąskolistna, języczki polne (Plantago lanceolata L.) – gatunek byliny należący do rodziny babkowatych (Plantaginaceae Juss.). Występuje w stanie dzikim w niemal całej Europie, w Afryce północnej oraz w Azji zachodniej aż do Himalajów i jej części środkowej. Jako gatunek zawleczony obecny jest w Ameryce Północnej, Środkowej i Południowej, na Hawajach, w Australii i na Madagaskarze. Gatunek bardzo zmienny, przystosowuje się do różnych warunków, został rozwleczony na wszystkie kontynenty. W Polsce pospolity.",
      image: image21
    },
    {
      id: 22,
      name: "Komosa",
      type: "trawa",
      info: "Komosa (Chenopodium L.) – rodzaj roślin, należący w różnych systemach klasyfikacyjnych do rodziny komosowatych lub szarłatowatych (m.in. system APG III z 2009). Obejmuje ponad 100 gatunków spotykanych na całym niemal świecie, z czego w Polsce występuje ok. 30 gatunków, zarówno rodzimych, jak i zawleczonych lub uprawianych. Niektóre gatunki są jadalne.",
      image: image22
    },
    {
      id: 23,
      name: "Babka szerokolistna",
      type: "trawa",
      info: "Babka szerokolistna występuje na terenach europejskich oraz w Azji Północnej i Środkowej. Zbieramy ją od maja do września. Zioło nazywane jest również babką pospolitą, zwyczajną, szeroką, wielką, a także podróżnikiem.",
      image: image23
    },
    {
      id: 24,
      name: "Bylica",
      type: "trawa",
      info: "Bylica pospolita (Artemisia vulgaris L.) – gatunek rośliny z rodziny astrowatych. Rodzime obszary jego występowania to Europa, znaczna część Azji oraz Algieria i Tunezja. Jako gatunek zawleczony rozprzestrzenił się również w Ameryce Północnej i innych rejonach świata. W Polsce gatunek bardzo pospolity na całym niżu, oraz na pogórzu. Status gatunku we florze Polski: gatunek rodzimy.",
      image: image24
    },
    {
      id: 25,
      name: "Ambrozja",
      type: "trawa",
      info: "Ambrozja, d. bożybyt (Ambrosia L.) – rodzaj roślin należący do rodziny astrowatych. Niegdyś ambrozja bylicolistna nazywana była bożybytem.",
      image: image25
    },
    {
      id: 26,
      name: "Cladosporium",
      type: "grzyb",
      info: "Cladosporium - liczący kilkaset gatunków rodzaj grzybów z klasy Dothideomycetes. Są to grzyby mikroskopijne, szeroko rozprzestrzenione na świecie i występujące w różnych strefach klimatycznych. Większość gatunków to saprotrofy rozwijające się na obumarłych roślinach, grzybach i innych odpadach organicznych, niektóre jednak są pasożytami roślin.",
      image: image26
    },
    {
      id: 27,
      name: "Alternaria",
      type: "grzyb",
      info: "Alternaria Nees – rodzaj workowców z klasy Dothideomycetes. Należy do niego kilkaset gatunków. Grzyby mikroskopijne, saprotrofy lub pasożyty. Niektóre są endemitami, większość jest szeroko rozprzestrzeniona na całym świecie.",
      image: image27
    },
    {
      id: 28,
      name: "Kurz",
      type: "grzyb",
      info: "Roztocze kurzu domowego – grupa saprofitycznych, mikroskopijnych (0,1–0,5 mm długości) pajęczaków z rzędu roztoczy (Acari), żyjących w kurzu domowym i żywiących się głównie naskórkiem. Roztocze, ich odnóża oraz odchody są alergenami powodującymi reakcje alergiczne takie jak kaszel, duszności, czy swędzenie u osób uczulonych.",
      image: image28
    },
    {
      id: 29,
      name: "Zwierzęta",
      type: "zwierze",
      info: "Alergia na sierść zwierząt domowych (kot i pies). Łzawienie oczu, katar, zatkany nos, kichanie, kaszel – tak objawia się najczęściej alergia na zwierzęta domowe. Zdarza się jednak, że pojawienie się zwierzaka w domu wywołuje bardzo niepokojące ataki duszności, a nawet astmę",
      image: image29
    }
  ]

  const Coniferous = ["Sosna", "Świerk pospolity"];
  const Grass = ["Trawa","Babka zwyczajna","Pokrzywa","Szczaw","Żyto","Babka lancetowata","Komosa","Babka szerokolistna","Bylica","Ambrozja"]
  const Fungus = ["Cladosporium","Alternaria"];
  const Dust = ["Kurz"];
  const Animal = ["Zwierzęta"];
  
  export {Months, Data, Coniferous, Grass, Fungus, Dust, Animal};