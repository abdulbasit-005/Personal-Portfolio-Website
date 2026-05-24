export const site = {
  name: "Abdul Basit",
  role: "Full-Stack Developer",
  tagline: "Building AI-native products with Next.js & Node.",
  positioning:
    "I ship full-stack web products—from conversational AI dashboards at Forthlogic to SaaS tools with type-safe APIs, vector search, and production-grade UX. Based in Islamabad, working with teams across US and EU time zones.",
  email: "rajaabdulbasit@gmail.com",
  phone: "+923175972977",
  location: "Islamabad, Pakistan",
  profileImage: "/pic3.jpg",
  resume:
    "https://drive.google.com/file/d/1TmtDCIlCaZJ4b0npzjwsdDtxiOWwye23/view?usp=drive_link",
  url: "https://abdul-basit-portfolio-website.vercel.app",
  social: {
    github: "https://github.com/abdulbasit-005",
    linkedin: "https://www.linkedin.com/in/abdulbasit005/",
    twitter: "https://twitter.com/Ghost_oo5",
    leetcode: "https://leetcode.com/u/rajaabdulbasit005/",
    stackoverflow: "https://stackoverflow.com/users/15349472/captain-ghost",
  },
  capabilities: [
    {
      title: "Product UI",
      description:
        "Dashboards, design systems, and responsive interfaces with Next.js, Tailwind, and Radix—built for clarity under real data loads.",
      items: ["Next.js", "TypeScript", "Tailwind", "Radix UI"],
    },
    {
      title: "AI Workflows",
      description:
        "LLM integrations, vector search, streaming responses, and n8n automations that connect models to business operations.",
      items: ["OpenAI", "Pinecone", "n8n", "LangChain"],
    },
    {
      title: "Full-Stack Systems",
      description:
        "APIs, auth, payments, and databases—Prisma, MongoDB, Stripe, and Node services designed to scale with product growth.",
      items: ["Node.js", "Prisma", "MongoDB", "Stripe"],
    },
  ],
  navChapters: [
    { id: "hero", label: "Intro" },
    { id: "positioning", label: "About" },
    { id: "work", label: "Work" },
    { id: "capabilities", label: "Skills" },
    { id: "journey", label: "Journey" },
    { id: "contact", label: "Contact" },
  ],
} as const;

export type NavChapter = (typeof site.navChapters)[number];
