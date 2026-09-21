import type { Spot, ParkingTip } from "./types";

export const osakaIntro =
  "Osaka, c'est l'énergie brute du Japon : Dotonbori qui clignote, une culture street plus décomplexée qu'à Tokyo, et pour les passionnés, quelques adresses culte côté streetwear automobile — Liberty Walk en tête.";

export const osakaSpots: Spot[] = [
  {
    name: "Liberty Walk — boutique Osaka",
    category: "shopping",
    area: "À préciser",
    description:
      "La marque culte du widebody JDM (LB★WORKS) propose aussi des vêtements et accessoires en boutique — un passage obligé pour ramener autre chose qu'un aimant sur le frigo.",
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
      "De vastes parkings souterrains desservent le quartier des affaires — pratiques et un peu moins chers qu'en surface.",
  },
];

export const osakaTips: string[] = [
  "Section à développer : itinéraires, adresses gourmandes, spots photo — ajoute tes trouvailles au fil de tes prochains voyages.",
];
