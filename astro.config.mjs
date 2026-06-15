// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages under the custom domain rosalieperron.com.
// `site` is the canonical origin (used for canonical/OG URLs and the sitemap);
// `base` is '/' because a custom domain serves from the root, not a subpath.
//
// The custom domain is wired up via `public/CNAME` (committed) plus DNS records
// at the registrar. See README for the DNS setup.
//
// https://astro.build/config
export default defineConfig({
  site: 'https://rosalieperron.com',
  base: '/',
});
