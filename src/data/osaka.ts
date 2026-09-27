import type { Spot, ParkingTip } from "./types";
import { withBase } from "../consts";

export const osakaIntro =
  "Osaka, c'est l'énergie brute du Japon : Dotonbori qui clignote, une culture street plus décomplexée qu'à Tokyo, des rendez-vous nocturnes de passionnés au coin d'une rue, et quelques adresses culte côté streetwear automobile, à commencer par Liberty Walk.";

export const osakaNote =
  "Mon passage à Osaka a été court : à part Liberty Walk, je n'ai pas eu le temps de tout faire. J'ai donc ajouté les adresses repérées pour mon prochain voyage, avec la mention « Pas encore testé ». Elles seront complétées, photos à l'appui, au fil de mes voyages.";

export const osakaSpots: Spot[] = [
  {
    name: "Liberty Walk Osaka",
    category: "shopping",
    area: "Kitahorie, non loin de Dotonbori",
    description:
      "La petite boutique de la marque culte du widebody (LB★WORKS) : vêtements, accessoires, miniatures et éditions limitées Osaka.",
    tip: "Si vous connaissez déjà la boutique de Tokyo, le détour vaut surtout pour les éditions limitées Osaka.",
    mapsQuery: "Liberty Walk, 1 Chome-3-13 Kitahorie, Nishi Ward, Osaka 550-0014",
    articleHref: withBase("/osaka/liberty-walk/"),
    filled: true,
  },
  {
    name: "Parc Sankaku (Mitsu Park)",
    category: "meetup",
    area: "Amerikamura, à deux pas de Dotonbori",
    description:
      "Le petit parc triangulaire au cœur d'Amerikamura, point de ralliement de la culture street d'Osaka. En passant un soir, je suis tombé sur un rassemblement de motos. Je n'y ai pas vu de voitures ce jour-là, mais je ne serais pas surpris d'en croiser aussi.",
    tip: "Liberty Walk se trouve dans le quartier voisin de Horie : les deux se font facilement à pied dans la même soirée.",
    mapsQuery: "Mitsu Park (Sankaku Koen), Nishishinsaibashi, Osaka",
    filled: true,
  },
  {
    name: "Rendez-vous nocturne Roadster / Miata",
    category: "meetup",
    area: "À préciser (quartier repéré avec boutiques UGG à proximité)",
    description:
      "Une rangée de MX-5/Roadster garées capot ouvert un soir de semaine, propriétaires en train de comparer les préparations : c'est ce genre de rendez-vous informel qui rend Osaka unique pour un passionné.",
    tip: "Précise le quartier et si c'est un rendez-vous régulier (jour/heure) pour que les lecteurs puissent y aller aussi.",
    filled: false,
  },
  {
    name: "MR.HIRO CAR STUDIO",
    category: "location",
    area: "Taishō, sud-ouest d'Osaka",
    description:
      "Le garage de Mr. Hiro, rempli des JDM qu'il a préparées : on peut le visiter et louer ses voitures, de la Toyota AE86 à la Nissan Skyline GT-R R32. À l'étage, des simulateurs de course pour les amateurs de sim racing, et sur le toit, une piste de karting drift. Je n'ai malheureusement pas eu le temps d'y aller.",
    tip: "Ce n'est pas donné, et le nombre de voitures est limité : réservez bien à l'avance si l'une d'elles vous fait de l'œil.",
    mapsQuery: "34.65669274686977,135.47187963818163",
    filled: true,
    tested: false,
  },
  {
    name: "Japan Drive Legends",
    category: "location",
    area: "Shinsaibashi, centre d'Osaka",
    description:
      "Une agence de location de JDM en plein centre, avec un accueil en anglais. Dans le parc, entre autres : une GT86, une Fairlady Z, une Lancer Evolution, une GTO et une Silvia S15. Repérée en préparant ce guide, pas encore testée.",
    tip: "Retrait et retour entre 10 h et 19 h. Comme partout au Japon : permis international ou traduction officielle, selon votre pays.",
    mapsQuery: "Japan Drive Legends, 3 Chome-8-15 Minamisenba, Chuo Ward, Osaka",
    website: "https://rent.japandrivelegends.com/jdm-car-rental/",
    filled: true,
    tested: false,
  },
  {
    name: "Osaka Auto Messe",
    category: "evenement",
    area: "INTEX Osaka, en bord de baie",
    description:
      "L'un des plus grands salons de voitures préparées du Japon, chaque année à la mi-février depuis 1997 : voitures modifiées, pièces, tuning, audio et accessoires. La prochaine édition a lieu du 12 au 14 février 2027.",
    tip: "Plus de 200 000 visiteurs chaque année : si votre voyage tombe en février, réservez hôtel et voiture tôt.",
    mapsQuery: "INTEX Osaka",
    website: "https://www.automesse.jp/en/",
    filled: true,
    tested: false,
  },
];

export const osakaRoutes: Spot[] = [
  {
    name: "Mont Rokko et observatoire Higashi-Rokko",
    category: "route",
    area: "Kobe, à environ 1 h d'Osaka",
    description:
      "Les virages serrés de l'Omote-Rokko Driveway grimpent au-dessus de Kobe jusqu'au sommet du mont Rokko. Là-haut, l'observatoire Higashi-Rokko, gratuit et ouvert jour et nuit (sauf en hiver), est un repaire connu des passionnés, avec vue sur toute la baie d'Osaka.",
    tip: "L'observatoire se trouve sur la Royu Driveway, une route à péage. La vue de nuit vaut le détour.",
    mapsQuery: "Higashi Rokko Observatory",
    filled: true,
    tested: false,
  },
  {
    name: "Pont Akashi-Kaikyō et île d'Awaji",
    category: "route",
    area: "Kobe, à environ 1 h d'Osaka",
    description:
      "Près de 4 km au-dessus du détroit d'Akashi : l'un des plus longs ponts suspendus du monde relie Kobe à l'île d'Awaji, qui se découvre idéalement en voiture, le long de la mer intérieure de Seto.",
    tip: "Le pont fait partie de l'autoroute, donc à péage : une carte ETC simplifie tout.",
    mapsQuery: "Akashi Kaikyo Bridge",
    filled: true,
    tested: false,
  },
];

export const osakaParking: ParkingTip[] = [
  {
    area: "Dotonbori / Namba",
    advice:
      "Zone piétonne très dense : oublie l'idée de te garer sur place. Utilise l'un des nombreux parkings-tours « Times » à quelques rues de là et termine à pied.",
  },
  {
    area: "Umeda",
    advice:
      "De vastes parkings souterrains desservent le quartier des affaires, pratiques et un peu moins chers qu'en surface.",
  },
];

export const osakaTips: string[] = [
  "Dotonbori, Amerikamura et Horie sont voisins : Liberty Walk et le parc Sankaku se font à pied dans la même soirée, pas besoin de voiture.",
  "Pour vraiment rouler, sortez de la ville : le mont Rokko et le pont d'Akashi sont à environ 1 h de route.",
  "Fans de sport auto : le circuit de Suzuka, théâtre du Grand Prix du Japon de F1, est à environ 2 h de route d'Osaka.",
];
