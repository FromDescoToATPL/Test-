import type { Spot, ParkingTip } from "./types";
import { withBase } from "../consts";

export const kyotoIntro =
  "Kyoto surprend : entre les temples et les jardins zen se cachent quelques repaires de passionnés parmi les plus respectés du pays. A PIT Autobacs y tient sa place de référence, et Liberty Walk n'est jamais bien loin.";

export const kyotoSpots: Spot[] = [
  {
    name: "A PIT Autobacs Kyoto Shijo",
    category: "shopping",
    area: "Saiin, à l'ouest de Kyoto",
    description:
      "Plusieurs étages consacrés à la voiture : une librairie, des miniatures, des vêtements, des goodies, des magazines, des jantes, et même des concessionnaires.",
    tip: "Les miniatures sont plus chères que le reste, mais les connaisseurs y trouveront de vraies pièces rares.",
    mapsQuery: "A PIT AUTOBACS KYOTO SHIJO, 1 Saiin Yasuzukacho, Ukyo Ward, Kyoto 615-0051",
    articleHref: withBase("/kyoto/a-pit-auto/"),
    filled: true,
  },
];

// Adresses repérées pour le prochain voyage, pas encore testées (la section le dit une fois).
export const kyotoDiscover: Spot[] = [
  {
    name: "Liberty Walk Kyoto",
    category: "shopping",
    area: "Nakagyō, près du pont Sanjo Ohashi",
    description:
      "La boutique Liberty Walk de Kyoto, ouverte en mars 2026 à deux pas de la Kamogawa : vêtements, goodies, articles exclusifs à Kyoto, et même un café pour faire une pause.",
    tip: "Ouverte tous les jours dès 9 h : idéal pour une pause entre deux visites.",
    mapsQuery: "Liberty Walk Kyoto, 92 Nakajimacho, Nakagyo Ward, Kyoto 604-8031",
    website: "https://libertywalk.co.jp/kyoto/",
    filled: true,
  },
];

export const kyotoParking: ParkingTip[] = [
  {
    area: "Autour des temples (Kiyomizu-dera, Fushimi Inari, Arashiyama...)",
    advice:
      "Parkings payants sur place mais capacité limitée : sature vite en haute saison (sakura au printemps, momiji en automne). Arrivez avant 9 h ou privilégiez les parkings un peu excentrés couplés à une marche à pied.",
  },
  {
    area: "Centre-ville (Gion, Kawaramachi)",
    advice:
      "Ruelles étroites, souvent interdites ou peu adaptées à la circulation automobile lors des festivals. Un parking coin parking en périphérie du centre + transports en commun est souvent plus simple.",
  },
];

export const kyotoTips: string[] = [
  "Pas besoin de voiture entre les deux adresses : la ligne Hankyu relie directement la gare de Saiin (près d'A PIT Autobacs) à celle de Kyoto-Kawaramachi, à une dizaine de minutes à pied de Liberty Walk.",
  "Pensez à votre passeport : la détaxe est possible chez A PIT Autobacs.",
];
