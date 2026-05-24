import type { Metadata } from "next";
import localFont from "next/font/local";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ToastProvider } from "@/components/providers/toast-provider";
import { personalData } from "@/lib/content/personal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(personalData.siteUrl),
  title: {
    default: `${personalData.name} — ${personalData.role}`,
    template: `%s · ${personalData.name}`,
  },
  description: personalData.tagline,
  keywords: [
    "Abdul Basit",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
  ],
  authors: [{ name: personalData.name }],
  openGraph: {
    title: personalData.name,
    description: personalData.tagline,
    url: personalData.siteUrl,
    siteName: personalData.name,
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: `${personalData.name} portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: personalData.name,
    description: personalData.tagline,
    images: ["/Website-overview.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
    >
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
