import type { Spot, ParkingTip } from "./types";
import { withBase } from "../consts";

export const osakaIntro =
  "Osaka, c'est l'énergie brute du Japon : Dotonbori qui clignote, une culture street plus décomplexée qu'à Tokyo, des rendez-vous nocturnes de passionnés au coin d'une rue, et quelques adresses culte côté streetwear automobile, à commencer par Liberty Walk.";

// Adresses testées sur place par Clément.
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
    name: "Rassemblements à Dotonbori et au parc Sankaku",
    category: "meetup",
    area: "Dotonbori et Amerikamura",
    description:
      "Un soir de semaine, à Dotonbori, juste avant d'arriver au parc Sankaku, je suis tombé sur une rangée de MX-5 garées capot ouvert, leurs propriétaires en train de comparer leurs préparations. Un peu plus loin, au parc, c'était un rassemblement de motos.",
    tip: "Ces rassemblements ont l'air improvisés : baladez-vous le soir entre Dotonbori et le parc en gardant l'œil ouvert. Liberty Walk est juste à côté, dans le quartier de Horie.",
    mapsQuery: "Mitsu Park (Sankaku Koen), Nishishinsaibashi, Osaka",
    filled: true,
  },
];

// Adresses repérées pour le prochain voyage, pas encore testées (la section le précise une seule fois).
export const osakaDiscover: Spot[] = [
  {
    name: "MR.HIRO CAR STUDIO",
    category: "location",
    area: "Taishō, sud-ouest d'Osaka",
    description:
      "Le garage de Mr. Hiro, rempli des JDM qu'il a préparées : on peut le visiter et louer ses voitures, de la Toyota AE86 à la Nissan Skyline GT-R R32. À l'étage, des simulateurs pour le sim racing, et sur le toit, une piste de karting drift.",
    tip: "Ce n'est pas donné et le nombre de voitures est limité : réservez bien à l'avance.",
    mapsQuery: "34.65669274686977,135.47187963818163",
    filled: true,
  },
  {
    name: "Japan Drive Legends",
    category: "location",
    area: "Shinsaibashi, centre d'Osaka",
    description:
      "Une agence de location de JDM en plein centre, avec un accueil en anglais. Dans le parc, entre autres : GT86, Fairlady Z, Lancer Evolution, GTO et Silvia S15.",
    tip: "Retrait et retour entre 10 h et 19 h.",
    mapsQuery: "Japan Drive Legends, 3 Chome-8-15 Minamisenba, Chuo Ward, Osaka",
    website: "https://rent.japandrivelegends.com/jdm-car-rental/",
    filled: true,
  },
  {
    name: "Osaka Auto Messe",
    category: "evenement",
    area: "INTEX Osaka, en bord de baie",
    description:
      "L'un des plus grands salons de voitures préparées du Japon, chaque année à la mi-février depuis 1997. Prochaine édition du 12 au 14 février 2027.",
    tip: "Plus de 200 000 visiteurs chaque année : réservez hôtel et voiture tôt.",
    mapsQuery: "INTEX Osaka",
    website: "https://www.automesse.jp/en/",
    filled: true,
  },
  {
    name: "Mont Rokko et observatoire Higashi-Rokko",
    category: "route",
    area: "Kobe, à environ 1 h d'Osaka",
    description:
      "Les virages serrés de l'Omote-Rokko Driveway grimpent jusqu'au sommet du mont Rokko. Là-haut, l'observatoire Higashi-Rokko est un repaire connu des passionnés, avec vue sur toute la baie d'Osaka.",
    tip: "Observatoire gratuit, mais situé sur la Royu Driveway, une route à péage.",
    mapsQuery: "Higashi Rokko Observatory",
    filled: true,
  },
  {
    name: "Pont Akashi-Kaikyō et île d'Awaji",
    category: "route",
    area: "Kobe, à environ 1 h d'Osaka",
    description:
      "Près de 4 km au-dessus du détroit d'Akashi : l'un des plus longs ponts suspendus du monde, pour rejoindre l'île d'Awaji et ses routes le long de la mer intérieure de Seto.",
    tip: "Pont à péage : une carte ETC simplifie tout.",
    mapsQuery: "Akashi Kaikyo Bridge",
    filled: true,
  },
];

export const osakaParking: ParkingTip[] = [
  {
    area: "Dotonbori / Namba",
    advice:
      "Zone piétonne très dense : oubliez l'idée de vous garer sur place. Utilisez l'un des nombreux parkings-tours « Times » à quelques rues de là et terminez à pied.",
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
