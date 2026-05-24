import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

const projectRedirects = [
  { id: "1", slug: "docs-now" },
  { id: "2", slug: "issue-tracker" },
  { id: "3", slug: "gamehub" },
  { id: "4", slug: "ai-image-generator" },
  { id: "5", slug: "juhuu-marketplace" },
  { id: "6", slug: "juhuu-bikebox" },
  { id: "7", slug: "rentistan" },
  { id: "8", slug: "notion-table-clone" },
];

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/work",
        permanent: true,
      },
      ...projectRedirects.map(({ id, slug }) => ({
        source: `/projects/${id}`,
        destination: `/work/${slug}`,
        permanent: true,
      })),
    ];
  },
};

const nextConfigFunction = async (phase: string) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import("@ducanh2912/next-pwa")).default({
      dest: "public",
      register: true,
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};

export default nextConfigFunction;
