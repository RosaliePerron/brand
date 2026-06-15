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
https://rosalieperron.com
```

### Custom domain (rosalieperron.com)

The site is served from the custom domain `rosalieperron.com`. Two things make
that work:

1. **[`public/CNAME`](public/CNAME)** — committed so GitHub Pages keeps the
   custom domain set on every deploy. (Without it, a deploy can clear the
   domain in repo Settings.)
2. **DNS records at the registrar** — point the domain at GitHub Pages:

   For the apex domain `rosalieperron.com`, create four `A` records:

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   (Optionally also four `AAAA` records: `2606:50c0:8000::153`,
   `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.)

   For the `www` subdomain, add a `CNAME` record pointing to
   `rosalieperron.github.io`.

After DNS propagates, go to repo **Settings → Pages**, confirm the custom
domain is `rosalieperron.com`, and tick **Enforce HTTPS**.

### About the base path

The site builds at the root (`base: '/'` in
[`astro.config.mjs`](astro.config.mjs)) because a custom domain serves from `/`,
not a subpath. All internal links route through a small
[`src/lib/url.ts`](src/lib/url.ts) helper that respects the configured base.
**Always use `url('/path')` for internal links** — never a bare `href="/path"`.

## Make it yours

Almost everything lives in **one file**: [`src/data/site.ts`](src/data/site.ts).

- **Name, role, tagline, bio, email, location** → the `site` object.
- **Social links** (GitHub, LinkedIn, etc.) → the `links` array.
- **Projects** (title, description, tags, repo/demo links) → the `projects` array.

Other things to update:

- **Domain / base path** → `astro.config.mjs` (`site` + `base`) and
  `public/CNAME` — used for canonical/OG URLs and the custom domain. See the
  deploy section above.
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
