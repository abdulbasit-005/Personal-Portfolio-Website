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
      gsap.fromTo(
        ".toolkit-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".toolkit-band",
            start: "top 85%",
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
          03 - Capabilities
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

        <div className="toolkit-band mt-24 pt-16 border-t border-[var(--border)]">
          <div className="toolkit-reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
                Full toolkit
              </p>
              <p className="text-display text-2xl md:text-3xl text-paper mt-3">
                Technologies I work with
              </p>
            </div>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              Grouped by practice area-same stack I use on production work and
              personal builds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {site.toolkit.map((group) => (
              <div key={group.label} className="toolkit-reveal">
                <h4 className="text-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
                  {group.label}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-mono text-[10px] uppercase tracking-wider text-muted/90 border border-[var(--border)] px-3 py-1.5 rounded-full bg-ink/40 hover:border-accent/30 hover:text-paper transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
