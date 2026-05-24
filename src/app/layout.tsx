import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./fonts.css";
import "./globals.css";
import SiteNav from "@/components/layout/SiteNav";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Full-Stack Developer`,
    template: `%s | ${site.name}`,
  },
  description: site.positioning,
  keywords: [
    "Abdul Basit",
    "Full Stack Developer",
    "Next.js",
    "AI automation",
    "TypeScript",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | Portfolio`,
    description: site.tagline,
    url: site.url,
    siteName: `${site.name} Portfolio`,
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
    images: ["/Website-overview.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          <div className="grain-overlay" aria-hidden />
          <ScrollProgress />
          <SiteNav />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <ToastContainer
          position="bottom-right"
          theme="dark"
          toastClassName="!bg-surface !text-paper !border !border-[var(--border)]"
        />
      </body>
    </html>
  );
}
