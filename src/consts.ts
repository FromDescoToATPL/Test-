export const SITE_NAME = "Kaido";
// Prénom déduit de ton adresse mail — remplace si ce n'est pas le bon.
export const AUTHOR_NAME = "Clément";
export const SITE_TAGLINE = "Guide JDM & passion automobile au Japon";
export const SITE_DESCRIPTION =
  "Kaido est le guide du passionné d'automobile au Japon : bonnes adresses, location de voitures, shopping et conseils pratiques à Tokyo, autour du Mont Fuji, à Osaka et à Kyoto.";
// TODO: remplace par le vrai domaine une fois le site déployé (utilisé pour le SEO et les liens canoniques).
export const SITE_URL = "https://exemple.com";

// Préfixe les chemins internes avec le "base" Astro (vide sur Vercel, "/Test-/" sur le miroir GitHub Pages)
// pour que les liens de nav restent corrects sur les deux déploiements sans dupliquer le code.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return path === "/" ? base : `${base}${path.slice(1)}`;
}

export interface NavLink {
  label: string;
  href: string;
}

export const destinationLinks: NavLink[] = [
  { label: "Tokyo", href: withBase("/tokyo/") },
  { label: "Mont Fuji", href: withBase("/mont-fuji/") },
  { label: "Osaka", href: withBase("/osaka/") },
  { label: "Kyoto", href: withBase("/kyoto/") },
];

export const mainNavLinks: NavLink[] = [
  { label: "Louer une voiture", href: withBase("/louer-une-voiture/") },
  { label: "Shopping", href: withBase("/shopping/") },
  { label: "Conduire au Japon", href: withBase("/conduire-au-japon/") },
  { label: "À propos", href: withBase("/a-propos/") },
];
