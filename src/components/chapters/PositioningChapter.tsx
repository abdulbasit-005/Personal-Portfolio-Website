"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { gsap, registerGsap } from "@/lib/motion/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export default function PositioningChapter() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".positioning-reveal",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="positioning"
      ref={sectionRef}
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 border-t border-[var(--border)]"
    >
      <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-4 positioning-reveal">
          <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
            01 - About
          </p>
          <p className="text-display text-3xl md:text-4xl text-paper mt-6 leading-tight">
            {site.name}
          </p>
          <p className="text-mono text-xs text-muted mt-2 uppercase tracking-widest">
            {site.role}
          </p>
          <h2 className="text-display text-2xl md:text-3xl text-muted mt-10 leading-tight">
            What I build
          </h2>
        </div>
        <div className="lg:col-span-8 positioning-reveal">
          <p className="text-xl md:text-2xl text-paper leading-relaxed whitespace-pre-line">
            {site.positioning}
          </p>
        </div>
      </div>
    </section>
  );
}
