export type SpotCategory =
  | "location"
  | "achat"
  | "garage"
  | "musee"
  | "circuit"
  | "shopping"
  | "meetup"
  | "parking"
  | "restauration";

export interface Spot {
  name: string;
  category: SpotCategory;
  area?: string;
  description: string;
  tip?: string;
  priceRange?: string;
  mapsQuery?: string;
  website?: string;
  /** Lien interne vers un article dédié (ex. "/kyoto/a-pit-auto/") pour les adresses qui ont assez de matière pour leur propre page. */
  articleHref?: string;
  /** true = entrée rédigée par Clément ; false = emplacement prêt à compléter */
  filled: boolean;
}

export interface ParkingTip {
  area: string;
  advice: string;
}
