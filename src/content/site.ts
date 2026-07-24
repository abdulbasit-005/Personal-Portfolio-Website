export const site = {
  name: "Abdul Basit",
  role: "Full-Stack Developer",
  tagline: "Building AI-native products with Next.js & Node.",
  intro:
    "Full-stack developer crafting AI-native web products with clarity and precision.",
  positioning:
    "I’m a full-stack developer who likes building things that run fast and look clean.\n\nMy background started in digital design, which means I actually care about UI/UX and translating Figma files into smooth, responsive frontends. On the engineering side, I spend most of my time in the JavaScript ecosystem mostly building apps with TypeScript, Next.js, Node.js, and Prisma.\n\nAside from traditional web development, I’ve spent a lot of time lately working with n8n and LLMs, building custom automation pipelines that handle heavy lifting like automated content/image generation and event-driven workflows.\n\nWhether it’s building a secure product marketplace from scratch for a startup or setting up internal tools to save an engineering team hours of manual work, I focus on writing clean, maintainable code.\n\nMy daily tech stack: TypeScript, Next.js, React, Node.js, Express, Prisma, MySQL, Firebase, and n8n.",
  email: "rajaabdulbasit@gmail.com",
  phone: "+92 3175972977",
  location: "Islamabad, Pakistan",
  profileImage: "/pic3.jpg",
  resume:
    "https://drive.google.com/file/d/1nW9PSRP_nAq5R0dZ3tnVtpBQmJrISCkW/view?usp=sharing",
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
        "Dashboards, design systems, and responsive interfaces with Next.js, Tailwind, and Radix-built for clarity under real data loads.",
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
        "APIs, auth, payments, and databases-Prisma, MongoDB, Stripe, and Node services designed to scale with product growth.",
      items: ["Node.js", "Prisma", "MongoDB", "Stripe"],
    },
  ],
  toolkit: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      label: "Frameworks & Libraries",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Shadcn/UI",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      label: "Databases & ORMs",
      items: ["MySQL", "Prisma", "Firebase (Firestore)", "MongoDB"],
    },
    {
      label: "Tools & Platforms",
      items: ["Git", "GitHub", "Vercel", "n8n", "Framer", "Figma", "Canva"],
    },
    {
      label: "Authentication",
      items: ["Firebase Auth", "Next-Auth (Google OAuth)"],
    },
    {
      label: "Other",
      items: [
        "REST APIs",
        "Responsive Design",
        "UI/UX",
        "Automation Workflows",
      ],
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
