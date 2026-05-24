import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abdul Basit Portfolio",
    short_name: "Abdul Basit",
    description: "Immersive portfolio — full-stack developer & AI workflows",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0A09",
    theme_color: "#0B0A09",
    icons: [
      {
        src: "/Pwa-logos/new-icons/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/Pwa-logos/new-icons/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
