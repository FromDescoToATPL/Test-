import type { Spot, ParkingTip } from "./types";

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
    name: "Liberty Walk (boutique Osaka)",
    category: "shopping",
    area: "À préciser",
    description:
      "La marque culte du widebody JDM (LB★WORKS) propose aussi des vêtements et accessoires en boutique. Un passage obligé pour ramener autre chose qu'un aimant sur le frigo.",
    tip: "Ajoute l'adresse exacte, ce que tu as acheté, les prix, et pourquoi tu recommandes (ou pas) la boutique. Pense à ajouter tes photos.",
    filled: false,
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
