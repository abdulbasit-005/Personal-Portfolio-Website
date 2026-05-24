"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { featuredProjects } from "@/content/projects";
import { gsap, registerGsap } from "@/lib/motion/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export default function WorkGalleryChapter() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !trackRef.current) return;
    registerGsap();

    const track = trackRef.current;
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="chapter-padding pb-0">
        <div className="max-w-site mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
              02 — Selected work
            </p>
            <h2 className="text-display text-4xl md:text-6xl text-paper mt-4">
              Case studies
            </h2>
          </div>
          <Link
            href="/work"
            className="text-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors link-underline"
          >
            Full archive →
          </Link>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 md:gap-10 px-6 md:px-12 lg:px-20 pb-24 will-change-transform"
      >
        {featuredProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group relative flex-shrink-0 w-[85vw] md:w-[55vw] lg:w-[45vw]"
          >
            <article className="relative aspect-[16/10] overflow-hidden rounded-lg bg-surface border border-[var(--border)] group-hover:border-accent/40 transition-colors duration-500">
              {project.video ? (
                <video
                  src={project.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              ) : (
                <Image
                  src={project.images[0] ?? "/placeholder/placeholder.png"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 45vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-mono text-[10px] text-accent uppercase tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-display text-3xl md:text-4xl text-paper mt-2 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted mt-2 text-sm">{project.tagline}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
