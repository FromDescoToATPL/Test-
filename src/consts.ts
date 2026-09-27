export const SITE_NAME = "JDM Trip";
// Passe à true une fois qu'un vrai réseau pub (AdSense ou autre) est branché.
// Tant que c'est false, AdSlot n'affiche rien nulle part sur le site.
export const ADS_ENABLED = false;
// Prénom déduit de ton adresse mail — remplace si ce n'est pas le bon.
export const AUTHOR_NAME = "Clément";
// Adresse principale du site, définie une seule fois dans astro.config.mjs (option `site`).
export const SITE_URL = new URL(import.meta.env.SITE ?? "https://www.jdmtrip.com").origin;
// Interrupteur unique pour Google : false = balise noindex sur toutes les pages (avant le lancement).
// Passe à true le jour de la mise en ligne sur www.jdmtrip.com. Le miroir GitHub Pages reste toujours en noindex.
export const INDEXABLE = true;

// Mentions légales : éditeur particulier et anonyme, à titre non professionnel (possible tant que le site ne
// rapporte pas de revenus réguliers). Le jour des pubs : micro-entreprise, et nom + adresse à ajouter ici et
// dans src/pages/mentions-legales.astro (+ version anglaise).
export const CONTACT_EMAIL = "contact@jdmtrip.com";
export const HOST = {
  name: "Vercel Inc.",
  address: "440 N Barranca Ave #4133, Covina, CA 91723",
  country: { fr: "États-Unis", en: "United States" },
  phone: "+1 559 288 7060",
  website: "https://vercel.com",
};

// Slogan, description et liens de navigation dépendent de la langue : voir src/i18n.ts.

// Préfixe les chemins internes avec le "base" Astro (vide sur Vercel, "/Test-/" sur le miroir GitHub Pages)
// pour que les liens de nav restent corrects sur les deux déploiements sans dupliquer le code.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return path === "/" ? base : `${base}${path.slice(1)}`;
}
