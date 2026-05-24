export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tools: string[];
  role: string;
  code: string;
  demo: string;
  date: string;
  images: string[];
  video?: string;
  highlights: string[];
  challenges: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "docs-now",
    name: "Docs-now",
    tagline: "Chat with your PDFs",
    description:
      "AI SaaS for document conversations—streaming GPT responses, Pinecone semantic search, Kinde auth, and Stripe subscriptions on a type-safe tRPC + Prisma stack.",
    tools: [
      "Next.js 15",
      "TypeScript",
      "tRPC",
      "Prisma",
      "OpenAI",
      "Pinecone",
      "Stripe",
      "Kinde",
    ],
    role: "Full-stack Developer",
    code: "",
    demo: "https://docs-now.vercel.app",
    date: "2025-10",
    images: [
      "/projects/docs-now/docs-now-landing.png",
      "/projects/docs-now/Docs-now.png",
      "/projects/docs-now/docs-now-chat.jpg",
    ],
    highlights: [
      "Streaming AI chat with context-aware PDF understanding",
      "Vector embeddings and semantic search at scale",
      "Subscription billing with Free and Pro tiers",
    ],
    challenges: [
      "Balancing streaming latency with retrieval accuracy across large documents",
      "Orchestrating OpenAI, Pinecone, Stripe, and Kinde without fragile coupling",
    ],
    featured: true,
  },
  {
    slug: "issue-tracker",
    name: "Issue Tracker",
    tagline: "Full-stack issue management",
    description:
      "Next.js 15 app with Google OAuth, Prisma/MySQL, interactive dashboards, and Radix UI—built for teams who need fast filtering and reliable CRUD.",
    tools: [
      "Next.js 15",
      "Prisma",
      "NextAuth",
      "React Query",
      "Radix UI",
      "Tailwind",
    ],
    role: "Full-stack Developer",
    code: "https://github.com/Ghost-oo5/issue-tracker",
    demo: "https://issuetracker005.vercel.app/",
    date: "2024",
    images: [
      "/projects/issue-tracker/issue-tracker.png",
      "/projects/issue-tracker/dashboard.png",
      "/projects/issue-tracker/issues.png",
    ],
    highlights: [
      "Secure Google OAuth with session-aware routes",
      "Real-time dashboard charts and advanced filters",
    ],
    challenges: [
      "NextAuth session flow integrated cleanly with Prisma models",
      "Coordinating shared state across dashboard views",
    ],
    featured: true,
  },
  {
    slug: "gamehub",
    name: "GameHub",
    tagline: "Discover games at speed",
    description:
      "RAWG-powered discovery platform with genre filters, search, and infinite scroll—React Query keeps the feed snappy.",
    tools: ["React", "RAWG API", "React Query", "Chakra UI", "Tailwind"],
    role: "Frontend Developer",
    code: "https://github.com/Ghost-oo5/game-hub",
    demo: "https://gamehub-new.vercel.app/",
    date: "2024",
    images: ["/projects/gamehub/gamehub.png"],
    highlights: [
      "External API integration with caching strategy",
      "Smooth infinite scroll on varied viewports",
    ],
    challenges: ["API rate limits and client-side cache invalidation"],
    featured: true,
  },
  {
    slug: "ai-image-generator",
    name: "AI Image Generator",
    tagline: "Generative media pipeline",
    description:
      "FastAPI backend with Google GenAI SDK, Next.js frontend, and n8n workflows for prompt enhancement and async image delivery.",
    tools: ["FastAPI", "Next.js", "Google GenAI", "n8n", "Pydantic"],
    role: "Full-stack Developer",
    code: "https://github.com/Ghost-oo5/Google-flash2.0-exp-image-server",
    demo: "https://automation.alphabase.co/agents/image-generator/generate-image",
    date: "2024",
    images: ["/placeholder/placeholder.png"],
    video: "/projects/AI-image-generator/AI-image-generator.mp4",
    highlights: [
      "GenAI image generation with feedback loops",
      "Workflow automation via n8n",
    ],
    challenges: ["Async task orchestration with reliable user feedback"],
    featured: true,
  },
  {
    slug: "juhuu-marketplace",
    name: "JUHUU Marketplace",
    tagline: "IoT commerce surface",
    description:
      "Marketplace for JUHUU's micro-mobility platform—React and Tailwind with brand-consistent, performance-minded UI.",
    tools: ["React", "Tailwind CSS"],
    role: "Full-Stack Developer",
    code: "https://github.com/Ghost-oo5/marketplace-juhuu-app",
    demo: "https://marketplace-juhuu-app.vercel.app/",
    date: "2023",
    images: ["/projects/juhuu/marketplace-juhuu.png"],
    highlights: [
      "Design-dev collaboration on brand system",
      "SEO and performance optimization",
    ],
    challenges: ["Third-party API integration across regions"],
    featured: false,
  },
  {
    slug: "juhuu-bikebox",
    name: "JUHUU BikeBox",
    tagline: "Product marketing site",
    description:
      "Promotional site for secure bike storage—focused storytelling, responsive layout, and fast load with lean HTML/CSS/JS.",
    tools: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Developer",
    code: "https://github.com/Ghost-oo5/Juhoo",
    demo: "https://juhoo.vercel.app/",
    date: "2023",
    images: ["/projects/juhuu/juhoo.png"],
    highlights: [
      "Motion-led product storytelling",
      "Mobile-first responsive build",
    ],
    challenges: ["Rich media without sacrificing LCP"],
    featured: false,
  },
  {
    slug: "rentistan",
    name: "Rentistan",
    tagline: "Rental management app",
    description:
      "React Native + Expo app with Firebase auth, Firestore chat, and property listings for tenants and managers.",
    tools: ["React Native", "Expo", "Firebase", "Firestore"],
    role: "Mobile Developer",
    code: "https://github.com/Ghost-oo5/Rentistan--A-Rental-App-in-React-Native-via-Expo",
    demo: "",
    date: "2023",
    images: ["/placeholder/placeholder.png"],
    highlights: [
      "Real-time messaging on Firestore",
      "Cross-platform navigation patterns",
    ],
    challenges: ["Realtime sync across device profiles"],
    featured: false,
  },
  {
    slug: "notion-table-clone",
    name: "Notion Table Clone",
    tagline: "Editable task grid",
    description:
      "Drag-and-drop columns and rows, tag inputs, localStorage persistence, and dark mode—React, TypeScript, Vite.",
    tools: ["React", "TypeScript", "Vite", "Chakra UI"],
    role: "Frontend Developer",
    code: "https://github.com/Ghost-oo5/Notion-Table-Clone",
    demo: "https://task-table-zeta.vercel.app/",
    date: "2023",
    images: ["/projects/tasktable/task-table.png"],
    highlights: [
      "react-beautiful-dnd column/row reorder",
      "Persistent local state",
    ],
    challenges: ["Consistent state during drag operations"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1]! : null,
    next: index < projects.length - 1 ? projects[index + 1]! : null,
  };
}
