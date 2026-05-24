export type Project = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tools: string[];
  role: string;
  code: string;
  demo: string;
  date: string;
  featured: boolean;
  images: string[];
  videos?: string[];
  highlights: string[];
  challenges: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "docs-now",
    name: "Docs-now",
    tagline: "Chat with your PDFs using semantic search and streaming AI.",
    description:
      "A SaaS app for AI conversations over PDF documents. Next.js 15, tRPC, Prisma, OpenAI, Pinecone, Kinde auth, Stripe subscriptions, and UploadThing file handling.",
    tools: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Prisma",
      "OpenAI",
      "Pinecone",
      "Stripe",
    ],
    role: "Full-stack developer",
    code: "",
    demo: "https://docs-now.vercel.app",
    date: "2025-10",
    featured: true,
    images: [
      "/projects/docs-now/docs-now-landing.png",
      "/projects/docs-now/Docs-now.png",
      "/projects/docs-now/docs-now-chat.jpg",
    ],
    highlights: [
      "Streaming GPT responses with vector search over uploaded PDFs.",
      "Type-safe APIs with tRPC and subscription tiers via Stripe.",
      "Dashboard for uploads, chat history, and document management.",
    ],
    challenges: [
      "Embedding and querying large documents efficiently in Pinecone.",
      "Keeping streaming context accurate across long conversations.",
    ],
  },
  {
    id: 2,
    slug: "issue-tracker",
    name: "Issue Tracker",
    tagline: "Full-stack issue tracking with auth, charts, and filters.",
    description:
      "Issue tracking built with Next.js 15, Prisma, Supabase, NextAuth (Google), React Query, and Radix UI—with dashboards, pagination, and full CRUD.",
    tools: ["Next.js", "TypeScript", "Prisma", "Supabase", "NextAuth"],
    role: "Full-stack developer",
    code: "https://github.com/Ghost-oo5/issue-tracker",
    demo: "https://issuetracker005.vercel.app/",
    date: "2024",
    featured: true,
    images: [
      "/projects/issue-tracker/issue-tracker.png",
      "/projects/issue-tracker/dashboard.png",
      "/projects/issue-tracker/issues.png",
    ],
    highlights: [
      "Google OAuth via NextAuth wired to Prisma.",
      "Dashboard charts and filtered issue views.",
    ],
    challenges: [
      "Auth session handling across server and client components.",
      "Coordinating shared state across complex filter UIs.",
    ],
  },
  {
    id: 3,
    slug: "gamehub",
    name: "GameHub",
    tagline: "Discover games via the RAWG API with search and infinite scroll.",
    description:
      "A React game discovery app using the RAWG API—search, genre filters, infinite scroll, and a responsive layout with React Query and Chakra UI.",
    tools: ["React", "RAWG API", "React Query", "Chakra UI", "Tailwind"],
    role: "Frontend developer",
    code: "https://github.com/Ghost-oo5/game-hub",
    demo: "https://gamehub-new.vercel.app/",
    date: "2024",
    featured: true,
    images: ["/projects/gamehub/gamehub.png"],
    highlights: [
      "Live game data with genre filters and infinite scroll.",
      "Responsive grid layout with efficient React Query caching.",
    ],
    challenges: [
      "API rate limits and client-side cache invalidation.",
      "Smooth infinite scroll without layout shift.",
    ],
  },
  {
    id: 4,
    slug: "ai-image-generator",
    name: "AI Image Generator",
    tagline: "Generate and refine images with Google GenAI and FastAPI.",
    description:
      "Image generation tool with prompt enhancement, FastAPI backend (Google GenAI SDK), and a Next.js frontend. Uses Pydantic, Pillow, and n8n for workflows.",
    tools: ["FastAPI", "Python", "Next.js", "Google GenAI", "n8n"],
    role: "Full-stack developer",
    code: "https://github.com/Ghost-oo5/Google-flash2.0-exp-image-server",
    demo: "https://automation.alphabase.co/agents/image-generator/generate-image",
    date: "2024",
    featured: false,
    images: ["/placeholder/placeholder.png"],
    videos: ["/projects/AI-image-generator/AI-image-generator.mp4"],
    highlights: [
      "FastAPI service wrapping Google's GenAI image APIs.",
      "Next.js UI for prompts, feedback, and result display.",
    ],
    challenges: [
      "Async job handling and user feedback during generation.",
      "Balancing prompt quality with generation latency.",
    ],
  },
  {
    id: 5,
    slug: "juhuu-marketplace",
    name: "JUHUU Marketplace",
    tagline: "Marketplace front-end for an IoT mobility platform.",
    description:
      "A React marketplace showcasing JUHUU services and products—responsive layout with Tailwind and brand-aligned UI.",
    tools: ["React", "Tailwind CSS", "JavaScript"],
    role: "Full-stack developer",
    code: "https://github.com/Ghost-oo5/marketplace-juhuu-app",
    demo: "https://marketplace-juhuu-app.vercel.app/",
    date: "2023",
    featured: false,
    images: ["/projects/juhuu/marketplace-juhuu.png"],
    highlights: [
      "Brand-consistent UI from design handoff.",
      "Performance-focused static and dynamic routes.",
    ],
    challenges: [
      "Third-party integration boundaries.",
      "Cross-browser layout consistency.",
    ],
  },
  {
    id: 6,
    slug: "juhuu-bikebox",
    name: "JUHUU BikeBox",
    tagline: "Product site for secure bike storage hardware.",
    description:
      "Promotional site for BikeBox—product overview, features, and contact flows in HTML, CSS, and JavaScript.",
    tools: ["HTML", "CSS", "JavaScript"],
    role: "Frontend developer",
    code: "https://github.com/Ghost-oo5/Juhoo",
    demo: "https://juhoo.vercel.app/",
    date: "2023",
    featured: false,
    images: ["/projects/juhuu/juhoo.png"],
    highlights: [
      "Lightweight marketing site with responsive layout.",
      "Feature sections with subtle motion.",
    ],
    challenges: [
      "Strong presentation with limited content.",
      "Media weight vs. load time.",
    ],
  },
  {
    id: 7,
    slug: "rentistan",
    name: "Rentistan",
    tagline: "React Native app connecting tenants and property managers.",
    description:
      "Rental management app with listings, messaging, and Firebase auth—built with Expo and React Navigation.",
    tools: ["React Native", "Expo", "Firebase", "Firestore"],
    role: "Mobile developer",
    code: "https://github.com/Ghost-oo5/Rentistan--A-Rental-App-in-React-Native-via-Expo",
    demo: "",
    date: "2023",
    featured: false,
    images: ["/placeholder/placeholder.png"],
    highlights: [
      "Real-time chat on Firestore.",
      "Navigation flows for listings and messaging.",
    ],
    challenges: [
      "Realtime sync across devices.",
      "Performance on lower-end hardware.",
    ],
  },
  {
    id: 8,
    slug: "notion-table-clone",
    name: "Notion Table Clone",
    tagline: "Editable task table with drag-and-drop and local persistence.",
    description:
      "Notion-style table with column/row reordering, tags, localStorage, and dark mode—React, TypeScript, Vite, Chakra UI.",
    tools: ["React", "TypeScript", "Vite", "Chakra UI"],
    role: "Frontend developer",
    code: "https://github.com/Ghost-oo5/Notion-Table-Clone",
    demo: "https://task-table-zeta.vercel.app/",
    date: "2023",
    featured: false,
    images: ["/projects/tasktable/task-table.png"],
    highlights: [
      "Drag-and-drop columns and rows.",
      "Persistent state in localStorage with dark mode.",
    ],
    challenges: [
      "Consistent state during drag operations.",
      "Schema evolution in localStorage.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getSimilarProjects(slug: string, limit = 2) {
  return projects.filter((p) => p.slug !== slug).slice(0, limit);
}
