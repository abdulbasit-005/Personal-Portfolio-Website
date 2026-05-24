import type { MetadataRoute } from "next";
import { personalData } from "@/lib/content/personal";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${personalData.siteUrl}/sitemap.xml`,
  };
}
