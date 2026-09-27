import type { SpotCategory } from "./data/types";
import { AUTHOR_NAME, SITE_NAME, withBase } from "./consts";

export type Lang = "fr" | "en";
export const LANGS: Lang[] = ["fr", "en"];

// Chaque page française et son équivalent anglais (chemins sans le "base" Astro).
// Le français reste à la racine, l'anglais vit sous /en/ avec des slugs traduits.
// Ajouter une ligne ici à chaque nouvelle page pour que le bouton FR/EN et les balises hreflang suivent.
const PAGE_PAIRS: Record<Lang, string>[] = [
  { fr: "/", en: "/en/" },
  { fr: "/tokyo/", en: "/en/tokyo/" },
  { fr: "/tokyo/only-jdm/", en: "/en/tokyo/only-jdm/" },
  { fr: "/tokyo/ou-rouler/", en: "/en/tokyo/where-to-drive/" },
  { fr: "/tokyo/boutiques-miniatures/", en: "/en/tokyo/scale-model-shops/" },
  { fr: "/mont-fuji/", en: "/en/mount-fuji/" },
  { fr: "/mont-fuji/mfj-rental-cars/", en: "/en/mount-fuji/mfj-rental-cars/" },
  { fr: "/mont-fuji/musee-du-sport-automobile/", en: "/en/mount-fuji/fuji-motor-sports-museum/" },
  { fr: "/osaka/", en: "/en/osaka/" },
  { fr: "/osaka/liberty-walk/", en: "/en/osaka/liberty-walk/" },
  { fr: "/kyoto/", en: "/en/kyoto/" },
  { fr: "/kyoto/a-pit-auto/", en: "/en/kyoto/a-pit-auto/" },
  { fr: "/louer-une-voiture/", en: "/en/rent-a-car/" },
  { fr: "/conduire-au-japon/", en: "/en/driving-in-japan/" },
  { fr: "/a-propos/", en: "/en/about/" },
  { fr: "/mentions-legales/", en: "/en/legal-notice/" },
  { fr: "/confidentialite/", en: "/en/privacy/" },
];

/** Chemin de la page sans le base (GitHub Pages sert le site sous /Test-/), toujours avec un slash final. */
function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL;
  const path = pathname.startsWith(base) ? `/${pathname.slice(base.length)}` : pathname;
  return path.endsWith("/") ? path : `${path}/`;
}

export function getLang(url: URL): Lang {
  return stripBase(url.pathname).startsWith("/en/") ? "en" : "fr";
}

/** Les deux versions de la page courante, ou undefined pour une page sans équivalent (404). */
export function findPagePair(url: URL): Record<Lang, string> | undefined {
  const path = stripBase(url.pathname);
  return PAGE_PAIRS.find((pair) => pair.fr === path || pair.en === path);
}

/** Lien vers la même page dans l'autre langue, ou vers l'accueil de cette langue à défaut. */
export function translatePath(url: URL, target: Lang): string {
  const pair = findPagePair(url);
  return withBase(pair ? pair[target] : target === "en" ? "/en/" : "/");
}

export interface NavLink {
  label: string;
  href: string;
}

const fr = {
  htmlLang: "fr",
  ogLocale: "fr_FR",
  tagline: "Guide JDM & passion automobile au Japon",
  description:
    `${SITE_NAME} est le guide du passionné d'automobile au Japon : bonnes adresses, location de voitures, shopping et conseils pratiques à Tokyo, autour du Mont Fuji, à Osaka et à Kyoto.`,
  skipToContent: "Aller au contenu",
  homeLabel: `Accueil ${SITE_NAME}`,
  mainNav: "Navigation principale",
  destinations: "Destinations",
  guides: "Guides",
  openMenu: "Ouvrir le menu",
  language: "Langue",
  langNames: { fr: "Version française", en: "English version" },
  destinationLinks: [
    { label: "Tokyo", href: withBase("/tokyo/") },
    { label: "Mont Fuji", href: withBase("/mont-fuji/") },
    { label: "Osaka", href: withBase("/osaka/") },
    { label: "Kyoto", href: withBase("/kyoto/") },
  ] as NavLink[],
  mainNavLinks: [
    { label: "Louer une voiture", href: withBase("/louer-une-voiture/") },
    { label: "Conduire au Japon", href: withBase("/conduire-au-japon/") },
    { label: "À propos", href: withBase("/a-propos/") },
  ] as NavLink[],
  rights: "Tous droits réservés.",
  legalLink: { label: "Mentions légales", href: withBase("/mentions-legales/") },
  privacyLink: { label: "Confidentialité & cookies", href: withBase("/confidentialite/") },
  cookie: {
    label: "Consentement aux cookies",
    text: "Ce site utilise des cookies pour mesurer l'audience et, à terme, afficher des publicités pertinentes. Tu peux accepter ou refuser, ton choix est modifiable à tout moment.",
    more: "En savoir plus",
    decline: "Refuser",
    accept: "Accepter",
  },
  ad: { label: "Publicité", placeholder: "Emplacement réservé" },
  spot: {
    toComplete: "À compléter",
    tip: "Astuce",
    note: `Note pour ${AUTHOR_NAME}`,
    tipSeparator: " : ",
    openMaps: "Ouvrir dans Google Maps",
    website: "Site officiel",
    readArticle: "Lire l'article",
    categories: {
      location: "Location",
      achat: "Achat",
      garage: "Garage / atelier",
      musee: "Musée",
      circuit: "Circuit",
      shopping: "Shopping",
      meetup: "Rendez-vous",
      route: "Balade",
      parking: "Parking",
      restauration: "Restauration",
    } as Record<SpotCategory, string>,
  },
};

const en: typeof fr = {
  htmlLang: "en",
  ogLocale: "en_US",
  tagline: "A JDM and car culture guide to Japan",
  description:
    `${SITE_NAME} is the car enthusiast's guide to Japan: great spots, car rentals, shopping and practical tips in Tokyo, around Mount Fuji, in Osaka and Kyoto.`,
  skipToContent: "Skip to content",
  homeLabel: `${SITE_NAME} home`,
  mainNav: "Main navigation",
  destinations: "Destinations",
  guides: "Guides",
  openMenu: "Open menu",
  language: "Language",
  langNames: { fr: "Version française", en: "English version" },
  destinationLinks: [
    { label: "Tokyo", href: withBase("/en/tokyo/") },
    { label: "Mount Fuji", href: withBase("/en/mount-fuji/") },
    { label: "Osaka", href: withBase("/en/osaka/") },
    { label: "Kyoto", href: withBase("/en/kyoto/") },
  ],
  mainNavLinks: [
    { label: "Rent a car", href: withBase("/en/rent-a-car/") },
    { label: "Driving in Japan", href: withBase("/en/driving-in-japan/") },
    { label: "About", href: withBase("/en/about/") },
  ],
  rights: "All rights reserved.",
  legalLink: { label: "Legal notice", href: withBase("/en/legal-notice/") },
  privacyLink: { label: "Privacy & cookies", href: withBase("/en/privacy/") },
  cookie: {
    label: "Cookie consent",
    text: "This site uses cookies to measure traffic and, later on, to show relevant ads. You can accept or decline, and change your mind at any time.",
    more: "Learn more",
    decline: "Decline",
    accept: "Accept",
  },
  ad: { label: "Advertisement", placeholder: "Reserved space" },
  spot: {
    toComplete: "Coming soon",
    tip: "Tip",
    note: `Note for ${AUTHOR_NAME}`,
    tipSeparator: ": ",
    openMaps: "Open in Google Maps",
    website: "Official website",
    readArticle: "Read the article",
    categories: {
      location: "Car rental",
      achat: "Buying",
      garage: "Garage / workshop",
      musee: "Museum",
      circuit: "Race track",
      shopping: "Shopping",
      meetup: "Car meet",
      route: "Drive",
      parking: "Parking",
      restauration: "Food",
    },
  },
};

export const ui: Record<Lang, typeof fr> = { fr, en };

/** Textes d'interface de la langue de la page courante. */
export function useUi(url: URL) {
  return ui[getLang(url)];
}
