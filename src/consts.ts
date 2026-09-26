export const SITE_NAME = "JDM Trip";
// Passe à true une fois qu'un vrai réseau pub (AdSense ou autre) est branché.
// Tant que c'est false, AdSlot n'affiche rien nulle part sur le site.
export const ADS_ENABLED = false;
// Prénom déduit de ton adresse mail — remplace si ce n'est pas le bon.
export const AUTHOR_NAME = "Clément";
// TODO: remplace par le vrai domaine une fois le site déployé (utilisé pour le SEO et les liens canoniques).
export const SITE_URL = "https://exemple.com";

// Slogan, description et liens de navigation dépendent de la langue : voir src/i18n.ts.

// Préfixe les chemins internes avec le "base" Astro (vide sur Vercel, "/Test-/" sur le miroir GitHub Pages)
// pour que les liens de nav restent corrects sur les deux déploiements sans dupliquer le code.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return path === "/" ? base : `${base}${path.slice(1)}`;
}
