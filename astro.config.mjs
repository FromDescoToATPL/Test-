// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: remplace par le vrai domaine une fois le site déployé (garde en phase avec SITE_URL dans src/consts.ts).
const SITE_URL = 'https://exemple.com';

// GitHub Actions définit GITHUB_ACTIONS=true automatiquement pendant un run.
// Vercel ne le définit pas, donc ce build (root, "/") n'est jamais affecté :
// seul le miroir GitHub Pages est servi sous /Test-/.
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: isGithubPagesBuild ? '/Test-/' : '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});