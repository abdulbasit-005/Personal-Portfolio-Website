"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { gsap, registerGsap } from "@/lib/motion/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export default function CapabilitiesChapter() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".capability-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
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
      id="capabilities"
      ref={sectionRef}
      className="chapter-padding border-t border-[var(--border)]"
    >
      <div className="max-w-site mx-auto">
        <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
          03 — Capabilities
        </p>
        <h2 className="text-display text-4xl md:text-5xl text-paper mt-4 mb-16 max-w-xl">
          How I deliver
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {site.capabilities.map((cap, i) => (
            <article
              key={cap.title}
              className="capability-card border border-[var(--border)] rounded-lg p-8 bg-surface/50 hover:bg-surface transition-colors"
            >
              <span className="text-mono text-[10px] text-accent uppercase tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-display text-2xl text-paper mt-4">
                {cap.title}
              </h3>
              <p className="text-muted mt-4 text-sm leading-relaxed">
                {cap.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="text-mono text-[10px] uppercase tracking-wider text-muted border border-[var(--border)] px-3 py-1 rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
