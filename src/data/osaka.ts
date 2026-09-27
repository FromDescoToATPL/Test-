import type { Spot, ParkingTip } from "./types";
import { withBase } from "../consts";

export const osakaIntro =
  "Osaka, c'est l'énergie brute du Japon : Dotonbori qui clignote, une culture street plus décomplexée qu'à Tokyo, des rendez-vous nocturnes de passionnés au coin d'une rue, et quelques adresses culte côté streetwear automobile, à commencer par Liberty Walk.";

export const osakaSpots: Spot[] = [
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
  "Section à développer : itinéraires, adresses gourmandes, spots photo. Ajoute tes trouvailles au fil de tes prochains voyages.",
];
