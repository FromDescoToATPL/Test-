import type { Spot } from "./types";

export const shoppingIntro =
  "Ramener un bout du Japon automobile ne se limite pas à un aimant de frigo : vêtements de marques cultes, voitures miniatures introuvables ailleurs, pièces et goodies de garages spécialisés. Voici où chercher.";

export const shoppingSpots: Spot[] = [
  {
    name: "Voitures miniatures — échoppe repérée",
    category: "shopping",
    area: "À préciser (ville + quartier)",
    description:
      "Des vitrines entières de miniatures au 1/43 et 1/64 (Ebbro, Solido, Hi-Story...), classées par marque et par série — un vrai paradis pour collectionneurs, des kei-cars aux prototypes Le Mans.",
    tip: "Ajoute le nom de la boutique, la ville, les gammes de prix observées, et tes trouvailles.",
    filled: false,
  },
  {
    name: "Liberty Walk (Osaka & Kyoto)",
    category: "shopping",
    area: "Osaka + Kyoto",
    description:
      "Vêtements et accessoires de la marque culte du widebody japonais, disponibles dans ses boutiques d'Osaka et de Kyoto — voir les pages dédiées à chaque ville pour les détails.",
    tip: "Détails complets à renseigner sur les pages Osaka et Kyoto.",
    filled: false,
  },
  {
    name: "A-PIT Auto Kyoto",
    category: "shopping",
    area: "Kyoto",
    description:
      "Au-delà de la préparation automobile, une adresse où dénicher pièces et goodies pour tout passionné de passage dans le Kansai — voir la page Kyoto.",
    tip: "Détails complets à renseigner sur la page Kyoto.",
    filled: false,
  },
];
