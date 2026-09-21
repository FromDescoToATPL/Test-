export const SITE_NAME = "Kaido";
// Prénom déduit de ton adresse mail — remplace si ce n'est pas le bon.
export const AUTHOR_NAME = "Clément";
export const SITE_TAGLINE = "Guide JDM & passion automobile au Japon";
export const SITE_DESCRIPTION =
  "Kaidō est le guide du passionné d'automobile au Japon : bonnes adresses, location, achat de voitures, shopping et conseils pratiques à Tokyo, autour du Mont Fuji, à Osaka et à Kyoto.";
// TODO: remplace par le vrai domaine une fois le site déployé (utilisé pour le SEO et les liens canoniques).
export const SITE_URL = "https://exemple.com";

export interface NavLink {
  label: string;
  href: string;
}

export const destinationLinks: NavLink[] = [
  { label: "Tokyo", href: "/tokyo/" },
  { label: "Mont Fuji", href: "/mont-fuji/" },
  { label: "Osaka", href: "/osaka/" },
  { label: "Kyoto", href: "/kyoto/" },
];

export const mainNavLinks: NavLink[] = [
  { label: "Acheter une voiture", href: "/acheter-une-voiture/" },
  { label: "Shopping", href: "/shopping/" },
  { label: "Conduire au Japon", href: "/conduire-au-japon/" },
  { label: "À propos", href: "/a-propos/" },
];
