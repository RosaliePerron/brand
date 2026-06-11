# Personal website

A simple, fast, blog-ready personal site built with [Astro](https://astro.build).
Static output, zero client-side framework — just a little vanilla JS for the
scroll reveals and pointer glow.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs static files to ./dist
npm run preview  # preview the production build locally
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages,
Cloudflare Pages, …).

## Make it yours

Almost everything lives in **one file**: [`src/data/site.ts`](src/data/site.ts).

- **Name, role, tagline, bio, email, location** → the `site` object.
- **Social links** (GitHub, LinkedIn, etc.) → the `links` array.
- **Projects** (title, description, tags, repo/demo links) → the `projects` array.

Other things to update:

- **Domain** → `astro.config.mjs` (`site:`) — used for canonical/OG URLs.
- **Contact form delivery** → see below.
- **Favicon** → [`public/favicon.svg`](public/favicon.svg).
- **Colors / type** → CSS custom properties at the top of
  [`src/styles/global.css`](src/styles/global.css). Dark mode is automatic
  (follows the OS) and defined in the same file.

## Enable the contact form

The contact form posts to [Formspree](https://formspree.io) (free tier, no
backend needed):

1. Create a form at formspree.io and copy its ID (e.g. `xayzwkdq`).
2. Open [`src/pages/contact.astro`](src/pages/contact.astro) and replace
   `FORMSPREE_ID = 'your-form-id'` with your ID.

Until you do, the form renders a visible "demo mode" notice and won't submit.
It already includes a honeypot field for basic spam protection, and submits via
`fetch` so visitors stay on the page.

## Adding a blog later

This is why we chose Astro. When you're ready:

1. `npm run astro add mdx` (or just use Markdown).
2. Create `src/content/blog/` with a `config.ts` content collection.
3. Add `src/pages/blog/index.astro` (list) and
   `src/pages/blog/[...slug].astro` (post), reusing `src/layouts/Base.astro`.

No restructuring of the existing pages required.
