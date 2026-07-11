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
    duration: "Jul 2025 - Present",
    summary:
      "Built Node.js APIs and Next.js dashboards for AI-powered workflows. Designed MongoDB schemas for users, conversations, and analytics. Integrated third-party APIs and automated workflows using n8n.",
    featured: true,
  },
  {
    id: "alphabase",
    title: "Frontend Developer Intern",
    company: "Alphabase",
    duration: "Nov 2024 - Apr 2025",
    summary:
      "Developed responsive Next.js/Tailwind UI components for AI applications. Built AI image-generation workflows using n8n and API integrations. Collaborated with designers and engineers to improve UI/UX.",
    featured: true,
  },
  {
    id: "juhuu",
    title: "Frontend Developer",
    company: "JUHUU GmbH",
    duration: "Sep 2023 - Mar 2024",
    summary:
      "Built responsive marketplace websites using React.js and Tailwind CSS. Developed reusable UI components and optimized frontend performance. Collaborated remotely to deliver user-facing features.",
    featured: true,
  },
  {
    id: "freelance",
    title: "Independent Builder",
    company: "Personal Projects",
    duration: "Jan 2023 - Present",
    summary:
      "Production SaaS experiments, open-source contributions, and continuous depth in TypeScript, tRPC, and modern AI tooling.",
    featured: false,
  },
];

export const featuredExperiences = experiences.filter((e) => e.featured);
