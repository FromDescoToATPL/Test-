import type { Spot } from "./types";
import { withBase } from "../consts";

export const louerIntro =
  `Louer une voiture, c'est clairement la meilleure façon de sortir des sentiers battus au Japon : routes de montagne, spots isolés, garages de passionnés que les transports en commun n'atteignent jamais. Mais avant de prendre la route, il y a un choix à faire, et il change complètement l'expérience.
D'un côté, les grandes enseignes traditionnelles (Toyota, Nissan, ORIX...) : des comptoirs dans presque toutes les gares et tous les aéroports, mais un parc plutôt classique. Je vous en parle en fin de page.
De l'autre, les agences spécialisées, bien plus confidentielles, qui louent des sportives et de vraies JDM à la journée. Ce sont des adresses qu'on ne trouve pas sur les comparateurs classiques : il faut les chercher, souvent directement sur Google Maps dans la ville visée. En échange, vous montez dans une voiture qui a une âme : une Evolution préparée, une Corvette, parfois plus. Je suis passé par les deux, à Tokyo chez OnlyJDM et à Kawaguchiko chez MFJ Rental Cars, et honnêtement, ça valait chaque minute de recherche.
Dans ce guide, je vous donne les bonnes adresses des deux types d'agences et tout ce qu'il faut vérifier avant de prendre les clés.`;

// Agences classées par ville (un visiteur choisit selon l'endroit où il sera, pas entre deux villes).
// Un seul endroit à modifier pour ajouter une agence testée, une agence repérée ou une ville.
// Fiches volontairement courtes (5 infos clés) : les détails restent dans l'article de chaque agence.
// Une valeur absente (undefined) s'affiche « à confirmer » : à compléter avant de publier.
export type CritereLocation =
  | "voiture"
  | "prix"
  | "boite"
  | "caution"
  | "age";

export interface AgenceTestee {
  /** Sert aussi à associer la photo dans la page. */
  slug: "onlyjdm" | "mfj";
  name: string;
  area: string;
  values: Record<CritereLocation, string | undefined>;
  /** Précision en petit sous une valeur (ex. source ou date d'un tarif). */
  notes?: Partial<Record<CritereLocation, string>>;
  verdict: string;
  articleHref: string;
  website: string;
}

export interface VilleLocation {
  /** Ancre de la section dans la page (#tokyo, #mont-fuji...). */
  id: string;
  name: string;
  testees: AgenceTestee[];
  reperees: Spot[];
}

export const criteresLocation: { key: CritereLocation; label: string; emphasis?: boolean }[] = [
  { key: "voiture", label: "Voiture louée" },
  { key: "prix", label: "Prix", emphasis: true },
  { key: "boite", label: "Boîte" },
  { key: "caution", label: "Caution" },
  { key: "age", label: "Âge minimum" },
];

const onlyJdm: AgenceTestee = {
  slug: "onlyjdm",
  name: "OnlyJDM",
  area: "Tokyo, agence du sud (Ōta)",
  values: {
    voiture: "Mitsubishi Lancer Evolution VIII GSR",
    prix: "27 000 ¥ les 7 h, 30 000 ¥ les 24 h",
    boite: "Manuelle, 6 vitesses",
    caution: "50 000 ¥, rendue au retour de la voiture",
    age: "23 ans et 3 ans de permis",
  },
  notes: { prix: "Tarifs affichés sur leur site en octobre 2026." },
  verdict:
    "Des prix attractifs et une vraie JDM préparée. Seul bémol : l'agence est loin du centre, comptez 40 minutes de train et 15 minutes à pied depuis Shinjuku.",
  articleHref: withBase("/tokyo/only-jdm/"),
  website: "https://only-jdm.com/",
};

const mfj: AgenceTestee = {
  slug: "mfj",
  name: "MFJ Rental Cars",
  area: "Kawaguchiko, au pied du mont Fuji",
  values: {
    voiture: "Chevrolet Corvette C7 Stingray (pas une JDM, mais quel V8)",
    prix: "13 000 ¥ la journée",
    boite: "Automatique",
    caution: "Aucune",
    age: "21 ans",
  },
  notes: { prix: "Environ 72 €, le tarif promo payé lors de ma réservation." },
  verdict:
    "Une Corvette à prix promo et une gérante adorable. Attention au carburant : facturé sur une consommation de référence, il désavantage les conducteurs économes.",
  articleHref: withBase("/mont-fuji/mfj-rental-cars/"),
  website: "https://mfj-car.com/en/index.html",
};

// Encadré « Vraie GT-R ou look GT-R ? ». Faits techniques vérifiés : BNR34 = RB26DETT 2,6 L biturbo, transmission
// intégrale, boîte manuelle 6 rapports uniquement ; ER34 = RB25 2,5 L, propulsion, boîte manuelle 5 rapports ou auto.
export const louerGtr = {
  eyebrow: "Avant de réserver une R34",
  title: "Vraie GT-R ou look GT-R ?",
  intro:
    "Beaucoup d'agences louent des Skyline R34 habillées comme une GT-R. De l'extérieur, c'est presque la même voiture. Sous le capot, pas du tout. Rien de malhonnête si l'agence l'annonce clairement, mais mieux vaut savoir ce que vous payez.",
  colonnes: { gtr: "Vraie GT-R", look: "Look GT-R" },
  lignes: [
    { label: "Code châssis", gtr: "BNR34", look: "ER34, le plus souvent" },
    { label: "Moteur", gtr: "RB26 biturbo, 2,6 L", look: "RB25, 2,5 L" },
    { label: "Transmission", gtr: "Intégrale", look: "Propulsion" },
    { label: "Boîte", gtr: "Manuelle uniquement", look: "Manuelle ou automatique" },
  ],
  astuceTitre: "Comment vérifier",
  astuce:
    "Demandez le code châssis à l'agence avant de payer : il figure sur le certificat d'immatriculation japonais (le shaken-sho). Et retenez ceci : une R34 en boîte automatique n'est jamais une vraie GT-R.",
};

// Agences repérées mais pas encore testées : infos neutres uniquement (ville, formules, site officiel), aucun avis.
const samurai: Spot = {
  name: "Samurai Car Japan",
  category: "location",
  area: "Shibuya, Tokyo",
  description:
    "Des Skyline R34 en location libre sur 24 ou 48 h, ou en sortie encadrée jusqu'à Daikoku. L'agence joue franc jeu : ce sont des Skyline 25GT Turbo (ER34) au look GT-R, pas des BNR34.",
  tip: "Boîte manuelle ou automatique selon la voiture.",
  website: "https://samuraicarjapanjdm.jp/",
  filled: true,
};

const omoren: Spot = {
  name: "Omoshiro Rent a Car (Omoren)",
  category: "location",
  area: "Noda (Chiba), quelques voitures près de l'aéroport de Narita",
  description:
    "Une très large flotte de voitures de passionnés, des petites sportives jusqu'à la Skyline GT-R R34, avec un site en anglais.",
  website: "https://omoren.com/",
  filled: true,
};

const fun2drive: Spot = {
  name: "Fun2Drive",
  category: "location",
  area: "Hakone, près du mont Fuji",
  description:
    "Des balades guidées en convoi et en anglais sur les routes de montagne de Hakone, au volant de GT-R, NSX, Supra ou RX-7. Une sortie encadrée plutôt qu'une location libre.",
  website: "https://fun2drive-japan.com/",
  filled: true,
};

const japanDriveLegends: Spot = {
  name: "Japan Drive Legends",
  category: "location",
  area: "Shinsaibashi, centre d'Osaka",
  description:
    "Une agence de location de JDM en plein centre, avec un accueil en anglais. Dans le parc, entre autres : GT86, Fairlady Z, Lancer Evolution, GTO et Silvia S15.",
  tip: "Retrait et retour entre 10 h et 19 h.",
  mapsQuery: "Japan Drive Legends, 3 Chome-8-15 Minamisenba, Chuo Ward, Osaka",
  website: "https://rent.japandrivelegends.com/jdm-car-rental/",
  filled: true,
};

const mrHiro: Spot = {
  name: "MR.HIRO CAR STUDIO",
  category: "location",
  area: "Taishō, Osaka",
  description:
    "Un garage de passionnés qui loue des JDM restaurées : AE86, RX-7, 180SX, Silvia S15, NSX, S2000 et même une Skyline GT-R R32. Sur place, un simulateur de course et un bar.",
  tip: "Formules de 3 h à 24 h, avec un kilométrage inclus selon la durée.",
  mapsQuery: "MR.HIRO CAR STUDIO, 4 Chome-12-21 Izuo, Taisho Ward, Osaka",
  website: "https://mrhiro-jdm.com/",
  filled: true,
};

export const villesLocation: VilleLocation[] = [
  { id: "tokyo", name: "Tokyo", testees: [onlyJdm], reperees: [samurai, omoren] },
  { id: "mont-fuji", name: "Mont Fuji et Hakone", testees: [mfj], reperees: [fun2drive] },
  { id: "osaka", name: "Osaka", testees: [], reperees: [japanDriveLegends, mrHiro] },
];

export const grandesEnseignes = {
  description:
    "Toyota Rent a Car, Nissan Rent a Car, ORIX Rent a Car, Times Car Rental, Nippon Rent-A-Car : les réseaux les plus simples pour un premier passage, comptoirs en anglais dans la plupart des gares et aéroports.",
  tip: "Réservez en ligne avant de partir : les modèles populaires (et les rares sportives du parc) partent vite en haute saison.",
};

export const louerConseils: { titre: string; texte: string; link?: { label: string; href: string } }[] = [
  {
    titre: "La traduction officielle du permis",
    texte:
      "Le permis français seul ne suffit pas : il faut faire une demande de translation de votre permis auprès de la JAF. Détails complets sur la page",
    link: { label: "Conduire au Japon", href: withBase("/conduire-au-japon/") },
  },
  {
    titre: "Assurance et franchise",
    texte:
      "L'assurance de base (incluse) couvre les dommages mais laisse souvent une franchise élevée en cas d'accident. Une assurance complémentaire (CDW/franchise réduite) proposée au comptoir coûte quelques milliers de yens par jour et peut rajouter un coût conséquent sur la location. Si vous êtes aguerri, vous pourrez économiser quelques dizaines d'euros en gardant l'assurance de base. À Tokyo, je n'ai eu aucun souci.",
  },
  {
    titre: "Âge et ancienneté de permis",
    texte:
      "La plupart des loueurs exigent au moins 21 ans et 1 an de permis ; les agences spécialisées sportives montent parfois la barre plus haut (25 ans, 2-3 ans de permis). Vérifiez les conditions exactes avant de réserver.",
  },
  {
    titre: "Photos et vidéos avant/après",
    texte:
      "Avant même de démarrer, faites le tour complet du véhicule et prenez des photos et une vidéo, y compris des rayures ou dommages déjà présents. Refaites la même chose au retour, avant de rendre les clés. C'est votre seule protection en cas de désaccord sur l'état de la voiture à la restitution, et ça ne prend que deux minutes.",
  },
  {
    titre: "GPS et carte ETC",
    texte:
      "Demandez le GPS en anglais et une carte ETC (télépéage) dès la réservation : les deux se négocient facilement au comptoir mais peuvent manquer si vous les demandez au dernier moment.",
  },
];
