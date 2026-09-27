// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Adresse principale du site (domaine acheté chez OVH, servi par Vercel).
// C'est la seule source : src/consts.ts la relit via import.meta.env.SITE.
const SITE_URL = 'https://jdmtrip.com';

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