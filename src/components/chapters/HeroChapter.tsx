"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { gsap, registerGsap } from "@/lib/motion/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

const HeroScene = dynamic(() => import("@/components/canvas/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-ink" aria-hidden />,
});

export default function HeroChapter() {
  const reducedMotion = useReducedMotion();
  const contentRef = useRef<HTMLDivElement>(null);
  const [showAmbient, setShowAmbient] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const el = document.getElementById("hero");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowAmbient(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !contentRef.current) return;
    registerGsap();
    gsap.fromTo(
      contentRef.current.querySelectorAll("[data-hero-animate]"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.3,
      },
    );
  }, [reducedMotion]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end chapter-padding pb-32 overflow-hidden"
    >
      {!reducedMotion && showAmbient && <HeroScene />}
      {!reducedMotion && !showAmbient && (
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-ink to-ink"
          aria-hidden
        />
      )}
      <div ref={contentRef} className="relative max-w-site mx-auto w-full">
        <p
          data-hero-animate
          className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted mb-8"
        >
          {site.role} — Islamabad
        </p>
        <h1
          data-hero-animate
          className="text-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] text-paper max-w-4xl"
        >
          {site.tagline}
        </h1>
        <p
          data-hero-animate
          className="mt-10 text-lg md:text-xl text-muted max-w-prose leading-relaxed"
        >
          Interfaces, APIs, and AI workflows for products that need to ship—not
          slide decks.
        </p>
        <div data-hero-animate className="mt-14 flex flex-wrap gap-4">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 bg-accent text-ink text-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 border border-[var(--border)] text-paper text-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mono text-[10px] text-muted uppercase tracking-widest">
        <span>Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-muted to-transparent animate-pulse" />
      </div>
    </section>
  );
}
