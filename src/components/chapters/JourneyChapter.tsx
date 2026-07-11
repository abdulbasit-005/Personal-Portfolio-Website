"use client";

import { useEffect, useRef } from "react";
import { featuredExperiences } from "@/content/experience";
import { gsap, registerGsap } from "@/lib/motion/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export default function JourneyChapter() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".journey-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 border-t border-[var(--border)]"
    >
      <div className="max-w-site mx-auto">
        <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
          04 - Journey
        </p>
        <h2 className="text-display text-4xl md:text-5xl text-paper mt-4 mb-16">
          Where I&apos;ve shipped
        </h2>

        <div className="flex flex-col gap-0 border-t border-[var(--border)]">
          {featuredExperiences.map((exp) => (
            <article
              key={exp.id}
              className="journey-item grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-[var(--border)] group"
            >
              <div className="md:col-span-3">
                <p className="text-mono text-[10px] uppercase tracking-widest text-muted">
                  {exp.duration}
                </p>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-display text-xl md:text-2xl text-paper group-hover:text-accent transition-colors">
                  {exp.title}
                </h3>
                <p className="text-mono text-xs text-muted mt-1 uppercase tracking-wider">
                  {exp.company}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="text-muted leading-relaxed">{exp.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
