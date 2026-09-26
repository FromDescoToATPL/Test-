import type { Spot, ParkingTip } from "./types";
import { withBase } from "../consts";

export const kyotoIntro =
  "Kyoto surprend : entre les temples et les jardins zen se cachent quelques repaires de passionnés parmi les plus respectés du pays. A-PIT Auto y tient sa place de référence, et Liberty Walk n'est jamais bien loin.";

export const kyotoSpots: Spot[] = [
  {
    name: "A-PIT Auto Kyoto",
    category: "garage",
    area: "À préciser",
    description:
      "Le temple des passionnés à Kyoto. Pièces, préparations, ambiance atelier : une adresse qui revient systématiquement dans la bouche des amateurs de JDM en visite dans la région du Kansai.",
    tip: "Ajoute l'adresse, ce que tu y as vu ou acheté, et ton avis sur l'accueil.",
    articleHref: withBase("/kyoto/a-pit-auto/"),
    filled: false,
  },
  {
    name: "Liberty Walk (boutique Kyoto)",
    category: "shopping",
    area: "À préciser",
    description:
      "Seconde adresse Liberty Walk du séjour, pour les vêtements et accessoires de la marque. Pratique si la boutique d'Osaka n'a pas tout ce que tu cherchais.",
    tip: "Ajoute l'adresse exacte, tes achats, les prix, et tes photos.",
    filled: false,
  },
];

export const kyotoParking: ParkingTip[] = [
  {
    area: "Autour des temples (Kiyomizu-dera, Fushimi Inari, Arashiyama...)",
    advice:
      "Parkings payants sur place mais capacité limitée : sature vite en haute saison (sakura au printemps, momiji en automne). Arrive avant 9h ou privilégie les parkings un peu excentrés couplés à une marche à pied.",
  },
  {
    area: "Centre-ville (Gion, Kawaramachi)",
    advice:
      "Ruelles étroites, souvent interdites ou peu adaptées à la circulation automobile lors des festivals. Un parking coin parking en périphérie du centre + transports en commun est souvent plus simple.",
  },
];

export const kyotoTips: string[] = [
  "Section à développer : itinéraires, meilleures routes de montagne autour de Kyoto, spots photo avec une JDM en premier plan.",
];
