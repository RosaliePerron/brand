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
  // Employer / company the project was realised under. Projects are grouped
  // by this on the projects page. Use the same string to group them together.
  employer: string;
  // Your role on the project. e.g. "Lead developer", "Contributor".
  role?: string;
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
    title: 'Bid solicitation',
    employer: 'TLM',
    role: 'Lead full-stack',
    description:
      'Biggest private bid solicitation software in Québec.',
    tags: ['Rails', 'Haml', 'Heroku'],
    repo: undefined,
    demo: undefined,
    meta: '2025 - Ongoing',
  },
  {
    title: 'Telephone systems',
    employer: 'TLM',
    role: 'Full-stack',
    description:
      'Admin dashboards for IP telephony systems.',
    tags: ['ExpressJS', 'React'],
    repo: undefined,
    demo: undefined,
    meta: '2024',
  },
  {
    title: 'Farm management',
    employer: 'TLM',
    role: 'Lead backend',
    description:
      'Farm management systems with integrated B2B marketplace.',
    tags: ['Django', 'AWS'],
    repo: undefined,
    demo: undefined,
    meta: '2023',
  },
  {
    title: 'Events networking',
    employer: 'TLM',
    role: 'Backend',
    description:
      'Events networking platform to connect professionnal and create learning opportunities.',
    tags: ['Django', 'React', 'AWS'],
    repo: undefined,
    demo: undefined,
    meta: '2020 - 2022',
  },
];
