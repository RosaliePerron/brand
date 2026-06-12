// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything about "you" here. One file, no hunting.
// Placeholder content is filled in; swap it for your own.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Rosalie Perron',
  // Shown big on the landing page. Keep it short and declarative.
  role: 'Software Developer',
  // The one-liner under your name. Your "elevator pitch".
  tagline: 'I build careful, fast and efficient software.',
  // A short paragraph for the landing + a longer one is fine too.
  intro:
    "I develop with the end user in mind, because the best code is the one that just works.",
  location: 'Québec, QC',
  email: 'pro@rosalieperron.com',
  // Used for the copyright line + page titles.
  domain: 'rosalieperron.com',
};

// Social / external links. Remove any you don't want; the footer + contact
// page render whatever is here. `label` is what shows; `href` is the link.
export const links = [
  { label: 'GitHub', href: 'https://github.com/rosalieperron' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rosalie-perron-456754143' },
  { label: 'Email', href: 'mailto:pro@rosalieperron.com' },
];

export type Project = {
  title: string;
  // Short, punchy. One or two sentences.
  description: string;
  // Tech / tags shown as small chips.
  tags: string[];
  // Optional links. Leave a field out or set to undefined to hide it.
  repo?: string;
  demo?: string;
  // Year or status, shown subtly. e.g. "2025", "ongoing", "archived".
  meta?: string;
};

export const projects: Project[] = [
  {
    title: 'Ledger',
    description:
      'A double-entry accounting engine with a plain-text source of truth. Parses, validates, and reports in milliseconds.',
    tags: ['Rust', 'CLI', 'Parser'],
    repo: 'https://github.com/yourname/ledger',
    demo: undefined,
    meta: '2025',
  },
  {
    title: 'Tideline',
    description:
      'Self-hosted dashboard that turns scattered API metrics into one calm, glanceable wall of numbers.',
    tags: ['TypeScript', 'Svelte', 'Self-hosted'],
    repo: 'https://github.com/yourname/tideline',
    demo: 'https://demo.example.com',
    meta: '2024',
  },
  {
    title: 'Quietnet',
    description:
      'An experiment in near-ultrasonic data transfer between laptops — chat with no network, just speakers and a mic.',
    tags: ['Python', 'DSP', 'Experiment'],
    repo: 'https://github.com/yourname/quietnet',
    meta: 'archived',
  },
  {
    title: 'Marginalia',
    description:
      'A reading tool that pulls your Kindle highlights into a searchable, linkable web of notes. Built to think with.',
    tags: ['Go', 'SQLite', 'htmx'],
    repo: 'https://github.com/yourname/marginalia',
    demo: 'https://demo.example.com',
    meta: 'ongoing',
  },
];
