// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as a *project* site:
//   https://rosalieperron.github.io/brand/
// `site` is your Pages origin; `base` is the repo subpath.
//
// If you later move to a custom domain or rename the repo to
// `rosalieperron.github.io`, set `base: '/'` (or remove it) and point
// `site` at the new URL.
//
// https://astro.build/config
export default defineConfig({
  site: 'https://rosalieperron.github.io',
  base: '/brand',
});
