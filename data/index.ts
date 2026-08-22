type Role = {
  company: string;
  companyLink: string;
  companyLogo: string;
  role: string;
  location: string;
  /** ISO year-month. Sort key: the rendered `duration` string is display-only. */
  start: string;
  /** ISO year-month, omitted while the role is current. */
  end?: string;
  duration: string;
  /** One line. What the job is. */
  summary: string;
  /** Two to four specifics. Each names something built, not a capability held. */
  highlights: string[];
};

const experience: Role[] = [
  {
    company: "OEE-Intellisuite",
    companyLink: "https://oeeintellisuite.com",
    companyLogo: "",
    role: "Fullstack Developer, Part-time",
    location: "Remote",
    start: "2026-01",
    end: "2026-05",
    duration: "Jan 2026 - May 2026",
    summary: "Fullstack feature work on the OEE and Vorne products.",
    highlights: [
      "Built server and client features end-to-end in Next.js and TypeScript, with PostgreSQL and Prisma for data modeling, migrations, and query tuning.",
      "Implemented real-time client/server synchronization with Zero Sync.",
      "Maintained the automated suite: Vitest for unit and integration, Playwright for end-to-end.",
    ],
  },
  {
    company: "Upwork",
    companyLink: "https://www.upwork.com/freelancers/~ahmedsamy",
    companyLogo: "",
    role: "Frontend Developer, Freelance",
    location: "Remote",
    start: "2025-10",
    duration: "Oct 2025 - Present",
    summary: "Custom client dashboards in Next.js, TypeScript, and Prisma.",
    highlights: [
      "Built device downtime logs and analytics for a work-tracker dashboard.",
      "Modeled and tuned the PostgreSQL layer for real-time updates, synchronized with Zero Sync.",
    ],
  },
  {
    company: "Buguard LLC",
    companyLink: "https://buguard.io",
    companyLogo: "/buguard-logo.webp",
    role: "Frontend Engineer",
    location: "Cairo, Egypt",
    start: "2024-01",
    duration: "Jan 2024 - Present",
    summary:
      "Cybersecurity dashboards and product sites for DarkAtlas, in React, Next.js, and Tailwind.",
    highlights: [
      "Built the data-intensive threat tables and analytics visualizations analysts work in daily, with Ant Design and React Query.",
      "Implemented RBAC across admin, analyst, and client roles, and integrated REST and GraphQL for cross-product data sync.",
      "Led the migration to a unified monorepo, and cut load times with SSR, lazy loading, and code splitting.",
      "Mentor interns on component architecture and Git workflow.",
    ],
  },
  // Current roles first, newest start first; finished roles after, newest end
  // first. Sorting on start alone would float a finished role above two live
  // ones, which is how the list drifted out of order before.
].sort((a, b) => {
  if (!a.end !== !b.end) return a.end ? 1 : -1;
  return a.end && b.end
    ? b.end.localeCompare(a.end)
    : b.start.localeCompare(a.start);
});

const education = [
  {
    institution: "University of Sadat City",
    degree: "B.Sc. Computer Science",
    duration: "2020 - 2024",
    institutionLink: "https://usc.edu.eg",
    institutionLogo: "/uni.png",
    description:
      "Graduated with Second Class Upper Division. Relevant coursework: Data Structures, Algorithms, Database Management, Web Development.",
  },
];

type Product = {
  /** Sidebar code in the real product, or a short site name. Tab label. */
  code: string;
  name: string;
  /** Products are apps in the platform; sites are the marketing surfaces.
      The switcher rules between the two groups rather than blurring them. */
  kind: "product" | "site";
  /** What it is. Not a claim about who built what. */
  blurb: string;
  image: string;
  imageAlt: string;
  /** Public surfaces get their own link. The apps sit behind a login. */
  href?: string;
};

type Project = {
  title: string;
  /** One line for the index row. The lead entry uses `description`. */
  summary: string;
  description: string;
  technologies: string[];
  image: string;
  /** Alt text describing what the screenshot actually shows. */
  imageAlt: string;
  previewLink: string;
  repoLink: string;
  /** Lead entry. Exactly one project should carry this. */
  featured?: boolean;
  /** Extra metadata rows on the lead entry. */
  meta?: { label: string; value: string }[];
  /** Lead entry only. Renders the product switcher instead of one image. */
  products?: Product[];
};

const projects: Project[] = [
  {
    title: "DarkAtlas Platform",
    featured: true,
    summary:
      "Buguard's cyber-intelligence platform. Four products and two marketing sites.",
    description:
      "Four security products sharing a design system, a component library, and a monorepo, plus the two marketing sites in front of them. I work across all four products on frontend features: data-heavy tables with filtering, sorting, and pagination; analytics visualizations for threat trends and exposure; RBAC across admin, analyst, and client roles; and REST and GraphQL integration for cross-product data sync.",
    meta: [
      { label: "Context", value: "Buguard, 2024 to present" },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "React Query",
      "Recharts",
      "Monorepo",
    ],
    // Fallback for any surface that does not render the switcher.
    image: "/work-da-cti.webp",
    imageAlt:
      "The Threat Intelligence dashboard: forum, credit card, Telegram and vulnerability counters above a targeted-countries choropleth.",
    previewLink: "https://threat.darkatlas.io",
    repoLink: "",
    products: [
      {
        code: "DWM",
        kind: "product",
        name: "Dark Web Monitoring",
        blurb:
          "Breached credentials, malware logs, and typosquatting domains, tracked as reviewable queues.",
        image: "/work-da-dwm.webp",
        imageAlt:
          "The typosquatting domains table, with registered and ignored tabs, sortable DNS record columns, and per-row triage actions.",
      },
      {
        code: "CTI",
        kind: "product",
        name: "Threat Intelligence",
        blurb:
          "Forum, Telegram, and marketplace chatter resolved into counters, trends, and a MITRE ATT&CK view.",
        image: "/work-da-cti.webp",
        imageAlt:
          "The Threat Intelligence dashboard: forum, credit card, Telegram and vulnerability counters above a targeted-countries choropleth.",
      },
      {
        code: "DRP",
        kind: "product",
        name: "Brand Protection",
        blurb:
          "Impersonation and brand-abuse monitoring across app stores, social platforms, and lookalike domains.",
        image: "/work-da-drp.webp",
        imageAlt:
          "The Brand Protection overview: brand, keyword and asset counters above a monitored-keywords area chart over time.",
      },
      {
        code: "ASM",
        kind: "product",
        name: "Attack Surface",
        blurb:
          "External asset discovery, rendered as a live graph of domains, certificates, and open vulnerabilities.",
        image: "/work-da-asm.webp",
        imageAlt:
          "The Attack Surface Management dashboard: an orbital node graph of domains, assets, sources, vulnerabilities and certificates.",
      },
      {
        code: "Buguard",
        kind: "site",
        name: "buguard.io",
        blurb:
          "Marketing site for the parent company, covering the intelligence and offensive-security offering.",
        image: "/work-buguard.webp",
        imageAlt:
          "The Buguard marketing site hero, Cyber Intelligence and Offensive Security, Unified.",
        href: "https://buguard.io",
      },
      {
        code: "DarkAtlas",
        kind: "site",
        name: "darkatlas.io",
        blurb:
          "Marketing site for the platform, with a scan entry point into the products.",
        image: "/work-darkatlas.webp",
        imageAlt: "The DarkAtlas marketing site hero, Protection Beyond Perimeters.",
        href: "https://darkatlas.io",
      },
    ],
  },
  {
    title: "Nagah Furniture",
    summary:
      "Full-stack multilingual storefront. Arabic and English, cart and auth, Postgres and Prisma.",
    description:
      "A full-stack, multilingual e-commerce platform for a furniture company. Responsive UI with Tailwind and shadcn/ui; authentication and session management via NextAuth; PostgreSQL (Neon) with Prisma for data modeling and querying. Zustand drives global state for cart, language, and UI.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "NextAuth",
      "Prisma",
      "PostgreSQL",
      "Zustand",
    ],
    image: "/work-nagah.webp",
    imageAlt:
      "The Nagah storefront home page, with the Arabic language switch in the navigation.",
    previewLink: "https://nagah-furniture.vercel.app/en",
    repoLink: "",
  },
  {
    title: "Spendless",
    summary: "Recurring-expense and subscription tracker.",
    description:
      "An app to track recurring expenses and subscriptions, with insights and reminders for upcoming payments.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
    ],
    image: "/work-spendless.webp",
    imageAlt:
      "The Spendless landing page, showing a monthly spending panel with tracked subscriptions.",
    // The Netlify deploy stopped responding (DNS resolves, connection times
    // out). Re-add the URL here once it is back up; a dead preview link is
    // worse than none. The repo was renamed spend-less-landing-page -> spendless.
    previewLink: "",
    repoLink: "https://github.com/ahmedsamy00x/spendless",
  },
];

// Organized by role, not popularity. Edit freely — Stack component reads this.
const stack: Array<{ category: string; items: string[] }> = [
  { category: "Languages", items: ["TypeScript", "JavaScript"] },
  { category: "Frameworks", items: ["React", "Next.js"] },
  { category: "State & Data", items: ["React Query", "Zustand", "Prisma"] },
  {
    category: "Interface",
    items: ["Tailwind CSS", "SASS", "Ant Design", "shadcn/ui"],
  },
  { category: "Backend", items: ["Node.js", "Express", "REST", "GraphQL"] },
  { category: "Databases", items: ["PostgreSQL", "Supabase"] },
  { category: "Testing", items: ["Vitest", "Playwright"] },
  { category: "Tooling", items: ["Git", "Vite", "Webpack", "ESLint"] },
];

export { education, experience, projects, stack };
