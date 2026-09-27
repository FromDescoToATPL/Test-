# JDM Trip — guide JDM & passion automobile au Japon

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

## Version anglaise

Le français reste à la racine (`/tokyo/`), l'anglais vit sous `/en/` avec des slugs traduits (`/en/tokyo/`,
`/en/rent-a-car/`...). Chaque page française a sa jumelle dans `src/pages/en/`, et les données dans `src/data/en/`.

- Textes d'interface (menu, pied de page, cookies, cartes) : [src/i18n.ts](src/i18n.ts)
- Nouvelle page : créer les deux versions et ajouter la paire dans `PAGE_PAIRS` ([src/i18n.ts](src/i18n.ts)), sinon
  le bouton FR/EN renvoie vers l'accueil et les balises hreflang manquent.
- Toute modification de contenu en français doit être reportée dans la version anglaise.

## Avant la mise en ligne

- [x] Compléter les adresses marquées `filled: false` (plus aucune sur le site)
- [x] Mentions légales et confidentialité finalisées : éditeur particulier anonyme, hébergeur Vercel,
      contact@jdmtrip.com (valeurs dans [src/consts.ts](src/consts.ts) : `CONTACT_EMAIL`, `HOST`)
- [x] Adresse principale `https://www.jdmtrip.com` définie dans [astro.config.mjs](astro.config.mjs) (`site`) et
      [public/robots.txt](public/robots.txt)
- [ ] Au lancement : passer `INDEXABLE` à `true` dans [src/consts.ts](src/consts.ts) pour retirer le noindex
- [ ] Vérifier `AUTHOR_NAME` dans [src/consts.ts](src/consts.ts)
- [ ] Plus tard, pubs : micro-entreprise + nom dans les mentions légales, bandeau cookies certifié Google (CMP),
      `ADS_ENABLED` à true (réaffiche le bandeau), [AdSlot.astro](src/components/AdSlot.astro) et page confidentialité à jour
- [ ] Ajouter une vraie photo de couverture pour Kyoto (héros actuellement sans photo — Osaka en a une depuis le déplacement de la photo MX-5)
- [ ] Vérifier le nom exact et les horaires du musée du sport automobile près de Fuji Speedway avant publication

## Déploiement

Site 100% statique (`output: "static"`), déployé automatiquement à chaque push sur `main` à deux endroits :

- **Vercel** (production) — projet "test-le-pilote", build zéro-config.
- **GitHub Pages** (miroir) — via [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml), servi sous
  `/Test-/`. Le `base` d'Astro s'adapte automatiquement (`astro.config.mjs`, variable `GITHUB_ACTIONS`) et ce miroir
  passe en `noindex` pour ne pas dupliquer le contenu indexé par Google — voir `withBase()` dans
  [src/consts.ts](src/consts.ts), à utiliser pour tout nouveau lien interne.
