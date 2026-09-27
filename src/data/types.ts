export type SpotCategory =
  | "location"
  | "achat"
  | "garage"
  | "musee"
  | "circuit"
  | "shopping"
  | "meetup"
  | "route"
  | "parking"
  | "restauration"
  | "evenement";

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
  /** false = adresse repérée (recherches, conseils) mais pas encore visitée par Clément : affiche le badge "Pas encore testé". */
  tested?: boolean;
}

export interface ParkingTip {
  area: string;
  advice: string;
}
