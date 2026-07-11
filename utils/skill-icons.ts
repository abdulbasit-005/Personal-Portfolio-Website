import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiFigma,
  SiBootstrap,
  SiMui,
  SiCanva,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFreelancer,
  SiExpress,
  SiPrisma,
  SiVercel,
  SiN8N,
  SiFramer,
  SiRadixui,
} from "react-icons/si";
import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    case "html":
      return SiHtml5;
    case "css":
      return SiCss3;
    case "javascript":
      return SiJavascript;
    case "js":
      return SiJavascript;
    case "typescript":
      return SiTypescript;
    case "ts":
      return SiTypescript;
    case "react":
      return SiReact;
    case "next js":
    case "nextjs":
    case "next.js":
      return SiNextdotjs;
    case "tailwind":
    case "tailwindcss":
      return SiTailwindcss;
    case "node js":
    case "nodejs":
    case "node.js":
      return SiNodedotjs;
    case "mongodb":
      return SiMongodb;
    case "mysql":
      return SiMysql;
    case "firebase":
      return SiFirebase;
    case "git":
      return SiGit;
    case "figma":
      return SiFigma;
    case "bootstrap":
      return SiBootstrap;
    case "materialui":
    case "mui":
      return SiMui;
    case "canva":
      return SiCanva;
    case "illustrator":
      return SiAdobeillustrator;
    case "photoshop":
      return SiAdobephotoshop;
    case "express":
      return SiExpress;
    case "prisma":
      return SiPrisma;
    case "vercel":
      return SiVercel;
    case "n8n":
      return SiN8N;
    case "framer":
      return SiFramer;
    case "shadcn/ui":
      return SiRadixui;
    default:
      return SiFreelancer; // Fallback icon
  }
};

export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();
  switch (skillLower) {
    case "html":
      return "#ef4444"; // Red-500
    case "css":
      return "#dc2626"; // Red-600
    case "javascript":
      return "#b91c1c"; // Red-700
    case "typescript":
      return "#ef4444"; // Red-500
    case "react":
      return "#dc2626"; // Red-600
    case "next js":
    case "nextjs":
    case "next.js":
      return "#ffffff"; // Keep white for contrast
    case "tailwind":
      return "#991b1b"; // Red-800
    case "node js":
    case "nodejs":
      return "#b91c1c"; // Red-700
    case "mongodb":
      return "#7f1d1d"; // Red-900
    case "mysql":
      return "#991b1b"; // Red-800
    case "firebase":
      return "#ef4444"; // Red-500
    case "git":
      return "#dc2626"; // Red-600
    case "figma":
      return "#b91c1c"; // Red-700
    case "bootstrap":
      return "#991b1b"; // Red-800
    case "materialui":
    case "mui":
      return "#ef4444"; // Red-500
    case "express":
    case "vercel":
    case "shadcn/ui":
    case "prisma":
      return "#ffffff";
    case "n8n":
      return "#ea4335";
    case "framer":
      return "#0055FF";
    default:
      return "#ef4444"; // Default Red
  }
};
