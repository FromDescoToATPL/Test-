import type { SpotCategory } from "./types";

// Icône associée à chaque catégorie d'adresse (cartes et listes "À découvrir").
export const categoryIcon: Record<
  SpotCategory,
  "car" | "tag" | "building" | "flag" | "shopping-bag" | "map-pin" | "parking" | "steering-wheel"
> = {
  location: "car",
  achat: "tag",
  garage: "car",
  musee: "building",
  circuit: "flag",
  shopping: "shopping-bag",
  meetup: "map-pin",
  route: "steering-wheel",
  parking: "parking",
  restauration: "map-pin",
  evenement: "flag",
};
