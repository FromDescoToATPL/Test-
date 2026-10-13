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
  /** Lien public normal (sans affiliation), affiché tant que `url` vaut A_REMPLIR. */
  lienPublic: string;
  /** Ex. { fr: "27 000 ¥ les 7 h", en: "¥27,000 for 7 hours" } : affiché précédé de « À partir de ». */
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
      fr: "L'agence où j'ai loué mon Evo VIII à Tokyo : location libre sur 7 ou 24 h.",
      en: "The agency where I rented my Evo VIII in Tokyo: self-drive for 7 or 24 hours.",
    },
    url: A_REMPLIR,
    lienPublic: "https://only-jdm.com/",
    // Fiche Lancer Evolution VIII GSR sur only-jdm.com, vérifiée le 06/10/2026.
    prixIndicatif: { fr: "27 000 ¥ les 7 h", en: "¥27,000 for 7 hours" },
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

/** Le lien à afficher : l'affilié s'il existe, sinon le lien public. */
export function lienOffre(offre: Offre): string {
  return estAffilie(offre) ? offre.url : offre.lienPublic;
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
