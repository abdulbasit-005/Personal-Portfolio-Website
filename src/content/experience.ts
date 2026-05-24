export type Experience = {
  id: string;
  title: string;
  company: string;
  duration: string;
  summary: string;
  featured?: boolean;
};

export const experiences: Experience[] = [
  {
    id: "forthlogic",
    title: "Full Stack Developer",
    company: "Forthlogic AI",
    duration: "Jul 2025 — Present",
    summary:
      "Node APIs for AI calling & booking, MongoDB data models, Next.js agent dashboards, and n8n automation pipelines for US-based clients.",
    featured: true,
  },
  {
    id: "alphabase",
    title: "Frontend Developer Intern",
    company: "Alphabase Private Ltd.",
    duration: "Nov 2024 — Apr 2025",
    summary:
      "Next.js features, Radix UI components, and AI-powered product surfaces with senior engineering mentorship.",
    featured: true,
  },
  {
    id: "juhuu",
    title: "Frontend Developer",
    company: "Juhuu GmbH",
    duration: "Oct 2023 — Mar 2024",
    summary:
      "IoT platform UI, marketplace experiences, and Figma-to-React delivery for micro-mobility products in Germany.",
    featured: true,
  },
  {
    id: "freelance",
    title: "Independent Builder",
    company: "Personal Projects",
    duration: "Jan 2023 — Present",
    summary:
      "Production SaaS experiments, open-source contributions, and continuous depth in TypeScript, tRPC, and modern AI tooling.",
    featured: false,
  },
];

export const featuredExperiences = experiences.filter((e) => e.featured);
