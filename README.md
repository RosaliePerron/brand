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

Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare
Pages, …), or use the included GitHub Pages workflow below.

## Deploy to GitHub Pages

A workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds and publishes the site on every push to `main`.

**One-time setup** (on github.com):

1. Go to the repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it. Push to `main` (or run the workflow manually from the **Actions**
tab) and the site goes live at:

```
https://rosalieperron.github.io/brand/
```

### About the base path

Because this deploys as a *project* site under `/brand/`, the site is built
with a base path. This is configured in
[`astro.config.mjs`](astro.config.mjs) (`site` + `base`), and all internal
links route through a small [`src/lib/url.ts`](src/lib/url.ts) helper so they
work both locally (at `/`) and on Pages (at `/brand/`). **Always use
`url('/path')` for internal links** — never a bare `href="/path"` — or it will
404 in production.

If you later switch to a **custom domain** or rename the repo to
`rosalieperron.github.io`, set `base: '/'` (or remove it) in `astro.config.mjs`
and update `site`. The `url()` helper handles the root case automatically.

## Make it yours

Almost everything lives in **one file**: [`src/data/site.ts`](src/data/site.ts).

- **Name, role, tagline, bio, email, location** → the `site` object.
- **Social links** (GitHub, LinkedIn, etc.) → the `links` array.
- **Projects** (title, description, tags, repo/demo links) → the `projects` array.

Other things to update:

- **Domain / base path** → `astro.config.mjs` (`site` + `base`) — used for
  canonical/OG URLs and the GitHub Pages subpath. See the deploy section above.
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
