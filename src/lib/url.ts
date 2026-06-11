// Build a site-internal URL that respects Astro's configured `base`.
// In dev the base is "/"; in the GitHub Pages build it's "/brand/".
// Using this for every internal link keeps both environments working.
//
//   url('/')          -> "/brand/"
//   url('/projects')  -> "/brand/projects"
//   url('favicon.svg')-> "/brand/favicon.svg"
//
// External links (http…, mailto…) should NOT go through this.

// `import.meta.env` is provided by Astro/Vite at build time. BASE_URL may or
// may not carry a trailing slash depending on config ("/brand" vs "/brand/"),
// so normalize to a single leading-slash, no-trailing-slash root and rebuild.
const RAW: string = (import.meta as any).env.BASE_URL;
const BASE = RAW.replace(/\/+$/, ''); // "" at root, "/brand" on Pages

export function url(path = '/'): string {
  const clean = path.replace(/^\/+/, ''); // strip leading slashes
  return clean ? `${BASE}/${clean}` : `${BASE}/`;
}
