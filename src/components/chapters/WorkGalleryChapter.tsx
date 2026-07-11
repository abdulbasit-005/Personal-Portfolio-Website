"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { featuredProjects } from "@/content/projects";
import { gsap, registerGsap } from "@/lib/motion/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

function ProjectSlide({
  project,
  index,
  className = "",
}: {
  project: (typeof featuredProjects)[number];
  index: number;
  className?: string;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative flex-shrink-0 ${className}`}
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
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="text-mono text-[10px] text-accent uppercase tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-display text-2xl md:text-4xl text-paper mt-2 group-hover:text-accent transition-colors break-words">
            {project.name}
          </h3>
          <p className="text-muted mt-2 text-sm">{project.tagline}</p>
        </div>
      </article>
    </Link>
  );
}

export default function WorkGalleryChapter() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [useHorizontalScroll, setUseHorizontalScroll] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setUseHorizontalScroll(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (
      reducedMotion ||
      !useHorizontalScroll ||
      !sectionRef.current ||
      !trackRef.current
    ) {
      return;
    }

    registerGsap();
    const track = trackRef.current;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => {
          const padding = 48;
          return -(track.scrollWidth - window.innerWidth + padding);
        },
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
  }, [reducedMotion, useHorizontalScroll]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-0 md:min-h-screen overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-20 pt-24 md:pt-32 lg:pt-40">
        <div className="max-w-site mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 md:mb-8 min-w-0">
          <div className="min-w-0">
            <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
              02 - Selected work
            </p>
            <h2 className="text-display text-4xl md:text-6xl text-paper mt-4 break-words">
              Case studies
            </h2>
          </div>
          <Link
            href="/work"
            className="text-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors link-underline shrink-0"
          >
            Full archive →
          </Link>
        </div>
      </div>

      {/* Mobile: vertical stack - no horizontal pin */}
      <div className="md:hidden flex flex-col gap-6 px-6 pb-24 max-w-full">
        {featuredProjects.map((project, index) => (
          <ProjectSlide
            key={project.slug}
            project={project}
            index={index}
            className="w-full max-w-full"
          />
        ))}
      </div>

      {/* Desktop: horizontal scroll chapter */}
      <div
        ref={trackRef}
        className="hidden md:flex gap-8 lg:gap-10 px-12 lg:px-20 pb-24 will-change-transform max-w-none"
      >
        {featuredProjects.map((project, index) => (
          <ProjectSlide
            key={project.slug}
            project={project}
            index={index}
            className="w-[55vw] lg:w-[45vw] max-w-[640px]"
          />
        ))}
      </div>
    </section>
  );
}
