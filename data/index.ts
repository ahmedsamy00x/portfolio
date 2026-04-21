const experience = [
  {
    company: "Buguard LLC",
    companyLink: "https://buguard.io",
    companyLogo: "/buguard-logo.webp",
    role: "Frontend Engineer",
    location: "Cairo, Egypt",
    duration: "Jan 2024 — Present",
    description:
      "Building and maintaining cybersecurity dashboards and landing pages in React, Next.js, and Tailwind. Designed data-intensive dashboards and interactive tables for real-time threat insights; integrated REST and GraphQL APIs for cross-product data sync; built modular components and analytics visualizations with Ant Design and React Query. Implemented RBAC across admin, analyst, and client roles, led the migration to a unified monorepo, and optimized performance with SSR, lazy loading, and code splitting. Mentor interns on component architecture, Git workflows, and best practices.",
  },
  {
    company: "OEE-Intellisuite",
    companyLink: "https://oeeintellisuite.com",
    companyLogo: "",
    role: "Fullstack Developer — Part-time",
    location: "Remote",
    duration: "Jan 2026 — Present",
    description:
      "Fullstack work on the OEE and Vorne projects. Build server-side and client-side features end-to-end in Next.js and TypeScript, with PostgreSQL and Prisma for data modeling, migrations, and optimized queries. Implemented real-time synchronization between client and server via Zero Sync, and maintain the automated test suite with Vitest for unit/integration tests and Playwright for end-to-end.",
  },
  {
    company: "Upwork",
    companyLink: "https://www.upwork.com/freelancers/~ahmedsamy",
    companyLogo: "",
    role: "Frontend Developer — Freelance",
    location: "Remote",
    duration: "Oct 2025 — Present",
    description:
      "Custom dashboards in Next.js, TypeScript, and Prisma. Built device downtime logs and analytics for a Work Tracker Dashboard, integrated PostgreSQL with optimized queries and data models for real-time updates, and used Zero Sync for fast client/server synchronization. Deliver responsive, scalable UI following modern architecture and performance standards.",
  },
];

const education = [
  {
    institution: "University of Sadat City",
    degree: "B.Sc. Computer Science",
    duration: "2020 — 2024",
    institutionLink: "https://usc.edu.eg",
    institutionLogo: "/uni.png",
    description:
      "Graduated with Second Class Upper Division. Relevant coursework: Data Structures, Algorithms, Database Management, Web Development.",
  },
];

const projects = [
  {
    title: "Threat Intelligence Platform",
    description:
      "Darkatlas's dark-web monitoring platform. Owned end-to-end features including data-heavy tables with filtering, sorting, and pagination for real-time threat intelligence. Independently implemented interactive charts for threat trends, exposure metrics, and monitoring activity. Integrated REST APIs and built robust form validation flows as self-contained features from design to deployment.",
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
    image: "/threat-intel.png",
    previewLink: "https://threat.darkatlas.io",
    repoLink: "",
  },
  {
    title: "Nagah Furniture",
    description:
      "A full-stack, multilingual e-commerce platform for a furniture company. Modern, responsive UI with Tailwind and shadcn/ui; authentication and session management via NextAuth; PostgreSQL (Neon) with Prisma for scalable data modeling and querying. Zustand drives global state for cart, language, and UI. Arabic and English support from day one.",
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
    image: "/nagah-furniture.png",
    previewLink: "https://nagah-furniture.vercel.app/en",
    repoLink: "",
  },
  {
    title: "DarkAtlas Landing Page",
    description:
      "Landing page for DarkAtlas showcasing the platform's capabilities with a sleek, modern design and responsive layout.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GraphQL",
    ],
    image: "/da-landing.png",
    previewLink: "https://darkatlas.io",
    repoLink: "",
  },
  {
    title: "Spendless",
    description:
      "An app to track recurring expenses and subscriptions, helping users stay on top of their finances with insights and reminders for upcoming payments.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
    ],
    image: "/spendless-landing.png",
    previewLink: "https://spendless-landing.netlify.app",
    repoLink: "https://github.com/ahmedsamy00x/spend-less-landing-page",
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
