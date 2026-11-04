// Toutes les offres de réservation du site (tours, locations, eSIM...), en un seul endroit.
// Les pages les affichent avec <EncartReserver ids={[...]} /> : ajouter ou corriger une offre ne demande
// jamais de toucher aux articles.
//
// Règles :
// - `url` = lien affilié complet, copié tel quel depuis le tableau de bord GetYourGuide ou Klook.
//   Ne jamais deviner un format de lien ou un identifiant partenaire. Tant qu'il n'existe pas : A_REMPLIR,
//   et le site affiche `lienPublic` (lien normal, sans commission).
// - Si le tableau de bord propose un identifiant de campagne ou de sous-compte, y mettre le nom de la page
//   (ex. « daikoku-fr ») pour savoir quelle page rapporte.
// - Prix toujours « à partir de », avec la date de vérification. Seulement des faits vérifiés.

export const A_REMPLIR = "A_REMPLIR";

export type Plateforme = "getyourguide" | "klook" | "direct";
export type CategorieOffre = "tour" | "location" | "musee" | "esim" | "transport";

export interface Offre {
  /** Identifiant court, utilisé par les pages : ex. "daikoku-tour-gtr". */
  id: string;
  plateforme: Plateforme;
  categorie: CategorieOffre;
  titre: { fr: string; en: string };
  /** Une phrase. */
  description: { fr: string; en: string };
  /** Lien affilié complet, ou A_REMPLIR tant qu'il n'existe pas. */
  url: string;
  /** Lien public normal (sans affiliation), affiché tant que `url` vaut A_REMPLIR. Une adresse par langue si besoin. */
  lienPublic: string | { fr: string; en: string };
  /** Ex. { fr: "27 000 ¥ les 7 h", en: "¥27,000 for 7 hours" } : affiché précédé de « À partir de ». */
  prixIndicatif?: { fr: string; en: string };
  /** Date de vérification du prix, format AAAA-MM-JJ. */
  dateVerif?: string;
}

export const offres: Offre[] = [
  {
    id: "onlyjdm-location",
    plateforme: "direct",
    categorie: "location",
    titre: { fr: "Louer une JDM chez OnlyJDM", en: "Rent a JDM from OnlyJDM" },
    description: {
      fr: "L'agence où j'ai loué mon Evo VIII à Tokyo : location libre sur 7 ou 24 h.",
      en: "The agency where I rented my Evo VIII in Tokyo: self-drive for 7 or 24 hours.",
    },
    url: A_REMPLIR,
    lienPublic: "https://only-jdm.com/",
    // Fiche Lancer Evolution VIII GSR sur only-jdm.com, vérifiée le 06/10/2026.
    prixIndicatif: { fr: "27 000 ¥ les 7 h", en: "¥27,000 for 7 hours" },
    dateVerif: "2026-10-06",
  },
  {
    id: "mfj-location",
    plateforme: "direct",
    categorie: "location",
    titre: { fr: "Louer une sportive chez MFJ Rental Cars", en: "Rent a sports car from MFJ Rental Cars" },
    description: {
      fr: "L'agence de Kawaguchiko qui m'a loué la Corvette C7, à la journée, au pied du mont Fuji.",
      en: "The Kawaguchiko agency that rented me the Corvette C7 for the day, at the foot of Mount Fuji.",
    },
    url: A_REMPLIR,
    lienPublic: "https://mfj-car.com/en/index.html",
  },
  // --- Daikoku PA (article /experiences/daikoku-tours-jdm/) : offres relevées le 04/11/2026 ---
  {
    // source : https://www.getyourguide.com/fr-fr/tokyo-l193/tokyo-realjpn-car-culture-daikoku-jdm-meet-r34rxplus-t560550/
    // 4,8/5 (725 avis), 3 h, petit groupe (10 max), anglais, annulation gratuite 24 h, péages inclus. Vérifié le 04/11/2026.
    id: "daikoku-gyg-car-culture",
    plateforme: "getyourguide",
    categorie: "tour",
    titre: { fr: "Daikoku et ambiance Tokyo Drift, en petit groupe", en: "Daikoku and Tokyo Drift vibes, in a small group" },
    description: {
      fr: "Trois heures avec des passionnés locaux, arrêt chez A PIT Autobacs. Noté 4,8/5 sur 725 avis.",
      en: "Three hours with local enthusiasts, with a stop at A PIT Autobacs. Rated 4.8/5 from 725 reviews.",
    },
    url: A_REMPLIR,
    lienPublic: {
      fr: "https://www.getyourguide.com/fr-fr/tokyo-l193/tokyo-realjpn-car-culture-daikoku-jdm-meet-r34rxplus-t560550/",
      en: "https://www.getyourguide.com/tokyo-l193/tokyo-realjpn-car-culture-daikoku-jdm-meet-r34rxplus-t560550/",
    },
    prixIndicatif: { fr: "71 €", en: "€71" },
    dateVerif: "2026-11-04",
  },
  {
    // source : https://www.getyourguide.com/fr-fr/tokyo-l193/tokyo-l-experience-fast-furious-tokyo-drift-3-t794698/
    // Organisateur Tokyo Turismo. 4,8/5 (6 309 avis), 3 à 4 h, passager d'une voiture de sport (3 à 4 par voiture),
    // retour à l'hébergement dans le centre de Tokyo, carburant et péages inclus. Vérifié le 04/11/2026.
    id: "daikoku-gyg-tokyo-turismo",
    plateforme: "getyourguide",
    categorie: "tour",
    titre: { fr: "Daikoku en passager d'une vraie JDM", en: "Daikoku as a passenger in a real JDM" },
    description: {
      fr: "Skyline, GT-R ou Evo selon le soir, avec Tokyo Turismo. Retour à votre hôtel. Noté 4,8/5 sur plus de 6 300 avis.",
      en: "A Skyline, GT-R or Evo depending on the night, with Tokyo Turismo. Drop-off at your hotel. Rated 4.8/5 from 6,300+ reviews.",
    },
    url: A_REMPLIR,
    lienPublic: {
      fr: "https://www.getyourguide.com/fr-fr/tokyo-l193/tokyo-l-experience-fast-furious-tokyo-drift-3-t794698/",
      en: "https://www.getyourguide.com/tokyo-l193/tokyo-l-experience-fast-furious-tokyo-drift-3-t794698/",
    },
    prixIndicatif: { fr: "121 €", en: "€121" },
    dateVerif: "2026-11-04",
  },
  {
    // source : https://www.klook.com/fr/activity/137151-tokyo-daikoku-car-meetup-night-city-tour-with-local-guide/
    // 4,9/5 (2,3k avis), 2 h 30 à 3 h, formule classique ou VIP. Prix relevé dans la recherche Klook. Vérifié le 04/11/2026.
    id: "daikoku-klook-nuit",
    plateforme: "klook",
    categorie: "tour",
    titre: { fr: "Visite nocturne JDM avec guide local", en: "JDM night tour with a local guide" },
    description: {
      fr: "En voiture JDM, avec une formule classique ou VIP. Noté 4,9/5 sur plus de 2 300 avis.",
      en: "In a JDM car, with a standard or VIP option. Rated 4.9/5 from 2,300+ reviews.",
    },
    url: A_REMPLIR,
    lienPublic: {
      fr: "https://www.klook.com/fr/activity/137151-tokyo-daikoku-car-meetup-night-city-tour-with-local-guide/",
      en: "https://www.klook.com/activity/137151-tokyo-daikoku-car-meetup-night-city-tour-with-local-guide/",
    },
    prixIndicatif: { fr: "119 €", en: "€119" },
    dateVerif: "2026-11-04",
  },
  {
    // source : https://www.klook.com/fr/activity/147074-tokyo-daikoku-self-drive-tour/
    // 4 h, 80 km derrière une voiture guide, carburant et péages inclus. 21 ans et 3 ans de permis, permis physique +
    // passeport + permis international 1949 ou traduction japonaise (France citée). Prix relevé dans la recherche Klook.
    // Vérifié le 04/11/2026.
    id: "daikoku-klook-au-volant",
    plateforme: "klook",
    categorie: "tour",
    titre: { fr: "Conduire une JDM jusqu'à Daikoku", en: "Drive a JDM to Daikoku yourself" },
    description: {
      fr: "Quatre heures au volant derrière une voiture guide, carburant et péages compris. 21 ans et 3 ans de permis minimum.",
      en: "Four hours behind the wheel, following a lead car, fuel and tolls included. Minimum 21 years old with 3 years of driving.",
    },
    url: A_REMPLIR,
    lienPublic: {
      fr: "https://www.klook.com/fr/activity/147074-tokyo-daikoku-self-drive-tour/",
      en: "https://www.klook.com/activity/147074-tokyo-daikoku-self-drive-tour/",
    },
    prixIndicatif: { fr: "467 €", en: "€467" },
    dateVerif: "2026-11-04",
  },
];

export function getOffre(id: string): Offre {
  const offre = offres.find((o) => o.id === id);
  if (!offre) throw new Error(`Offre inconnue : "${id}" (voir src/data/offres.ts)`);
  return offre;
}

/** Vrai dès qu'un lien affilié est renseigné (plateforme partenaire ou accord direct avec une agence). */
export function estAffilie(offre: Offre): boolean {
  return offre.url !== A_REMPLIR;
}

/** Le lien à afficher : l'affilié s'il existe, sinon le lien public (dans la langue de la page). */
export function lienOffre(offre: Offre, lang: "fr" | "en"): string {
  if (estAffilie(offre)) return offre.url;
  return typeof offre.lienPublic === "string" ? offre.lienPublic : offre.lienPublic[lang];
}

/**
 * Vrai dès qu'au moins un vrai lien affilié est renseigné. Bascule automatiquement le lien « Liens affiliés »
 * du pied de page et le paragraphe « Publicité & liens affiliés » des mentions légales.
 */
export const affiliationActive = offres.some(estAffilie);

const NOMS_PLATEFORMES: Record<Exclude<Plateforme, "direct">, string> = { getyourguide: "GetYourGuide", klook: "Klook" };

/** Plateformes qui ont au moins un vrai lien affilié, ex. ["GetYourGuide", "Klook"]. */
export const plateformesActives = [
  ...new Set(
    offres.filter((o) => estAffilie(o) && o.plateforme !== "direct").map((o) => NOMS_PLATEFORMES[o.plateforme as "getyourguide" | "klook"]),
  ),
];

/** Vrai si une agence a un accord direct (code promo ou commission) avec un lien rempli. */
export const accordDirectActif = offres.some((o) => estAffilie(o) && o.plateforme === "direct");
