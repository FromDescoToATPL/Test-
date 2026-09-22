# Kaido — guide JDM & passion automobile au Japon

Site éditorial (Astro + Tailwind CSS v4) : guide du passionné d'automobile au Japon — Tokyo, Mont Fuji, Osaka, Kyoto,
location de voiture, shopping et conduite sur place. Contenu statique, pensé pour la monétisation (pub + affiliation)
sans sacrifier la vitesse ni la sobriété visuelle.

## Démarrer

```sh
npm install
npm run dev       # http://localhost:4321
npm run build      # build de production dans ./dist
npm run preview    # prévisualiser le build
```

## Structure

```
src/
├── assets/photos/      # Photos du voyage (optimisées automatiquement au build)
├── components/         # Header, Footer, Hero, SpotCard, AdSlot, CookieConsent...
├── data/                # Contenu structuré par page (adresses, conseils, parking...)
├── layouts/Layout.astro # Squelette HTML commun (SEO, header, footer, cookies)
├── pages/                # Une route par fichier (/tokyo/, /shopping/, ...)
└── styles/global.css     # Design tokens (couleurs, typographies, animations)
```

## Ajouter une bonne adresse

Chaque ville a son fichier dans `src/data/` (ex. `src/data/tokyo.ts`). Une adresse est un objet `Spot` :

```ts
{
  name: "Nom du lieu",
  category: "garage", // location | achat | garage | musee | circuit | shopping | meetup | parking | restauration
  area: "Quartier",
  description: "Ce que c'est, ce qu'on y trouve.",
  tip: "Astuce pratique.",
  priceRange: "¥¥",      // optionnel
  website: "https://...", // optionnel
  filled: true, // false = affiche le badge "À compléter" (dashed border) tant que l'adresse n'est pas finalisée
}
```

Passe `filled: true` dès que l'adresse est complète (adresse réelle, avis rédigé) — la carte perd alors son style
"brouillon".

## Avant la mise en ligne

- [ ] Compléter les adresses marquées `filled: false` (voir badges "À compléter" sur le site)
- [ ] Remplacer les placeholders dans [Mentions légales](src/pages/mentions-legales.astro) et
      [Confidentialité](src/pages/confidentialite.astro) (identité, hébergeur, SIRET si activité déclarée)
- [ ] Mettre à jour `SITE_URL` dans [src/consts.ts](src/consts.ts), dans [astro.config.mjs](astro.config.mjs) (`site`) et
      dans [public/robots.txt](public/robots.txt) avec le vrai nom de domaine
- [ ] Vérifier `AUTHOR_NAME` dans [src/consts.ts](src/consts.ts)
- [ ] Brancher un vrai service de pub (AdSense...) dans [AdSlot.astro](src/components/AdSlot.astro) et mettre à jour
      la politique de confidentialité en conséquence
- [ ] Ajouter une vraie photo de couverture pour Kyoto (héros actuellement sans photo — Osaka en a une depuis le déplacement de la photo MX-5)
- [ ] Vérifier le nom exact et les horaires du musée du sport automobile près de Fuji Speedway avant publication

## Déploiement

Site 100% statique (`output: "static"`), déployé automatiquement à chaque push sur `main` à deux endroits :

- **Vercel** (production) — projet "test-le-pilote", build zéro-config.
- **GitHub Pages** (miroir) — via [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml), servi sous
  `/Test-/`. Le `base` d'Astro s'adapte automatiquement (`astro.config.mjs`, variable `GITHUB_ACTIONS`) et ce miroir
  passe en `noindex` pour ne pas dupliquer le contenu indexé par Google — voir `withBase()` dans
  [src/consts.ts](src/consts.ts), à utiliser pour tout nouveau lien interne.
