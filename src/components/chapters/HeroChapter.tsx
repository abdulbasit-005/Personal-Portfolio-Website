"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
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
      className="relative min-h-screen flex flex-col justify-center chapter-padding overflow-hidden"
    >
      {!reducedMotion && showAmbient && <HeroScene />}
      {!reducedMotion && !showAmbient && (
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-ink to-ink"
          aria-hidden
        />
      )}

      <div
        ref={contentRef}
        className="relative max-w-site mx-auto w-full min-w-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        <div className="lg:col-span-7 order-2 lg:order-1 min-w-0">
          <p
            data-hero-animate
            className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted mb-6"
          >
            {site.name} - {site.role}
          </p>
          <h1
            data-hero-animate
            className="text-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-paper break-words"
          >
            {site.tagline}
          </h1>
          <p
            data-hero-animate
            className="mt-8 text-lg md:text-xl text-muted max-w-prose leading-relaxed"
          >
            {site.intro}
          </p>
          <div data-hero-animate className="mt-12 flex flex-wrap gap-4">
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

        <div
          data-hero-animate
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-3 border border-accent/20 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative aspect-[4/5] w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden border border-[var(--border)] bg-surface">
              <Image
                src={site.profileImage}
                alt={site.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 320px, 400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mono text-[10px] text-muted uppercase tracking-widest">
        <span>Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-muted to-transparent animate-pulse" />
      </div>
    </section>
  );
}
