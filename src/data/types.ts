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
  /** true = entrée rédigée par Clément ; false = emplacement prêt à compléter */
  filled: boolean;
}

export interface ParkingTip {
  area: string;
  advice: string;
}
