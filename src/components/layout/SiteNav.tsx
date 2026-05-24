"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export default function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("hero");

  useEffect(() => {
    if (!isHome) return;

    const sections = site.navChapters.map((c) => document.getElementById(c.id));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] mix-blend-difference">
      <nav
        className="flex items-center justify-between gap-3 px-4 sm:px-6 md:px-12 lg:px-20 py-5 md:py-6 min-w-0 max-w-full"
        aria-label="Main"
      >
        <Link
          href="/"
          className="text-mono text-xs uppercase tracking-[0.2em] text-paper hover:text-accent transition-colors"
        >
          {site.name.split(" ")[0]}
          <span className="text-muted">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {isHome ? (
            site.navChapters.map((chapter) => (
              <button
                key={chapter.id}
                type="button"
                onClick={() => scrollTo(chapter.id)}
                className={`text-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${
                  active === chapter.id
                    ? "text-accent"
                    : "text-muted hover:text-paper"
                }`}
              >
                {chapter.label}
              </button>
            ))
          ) : (
            <>
              <Link
                href="/#work"
                className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted hover:text-paper transition-colors"
              >
                Work
              </Link>
              <Link
                href="/work"
                className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted hover:text-paper transition-colors"
              >
                Archive
              </Link>
              <Link
                href="/#contact"
                className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted hover:text-paper transition-colors"
              >
                Contact
              </Link>
            </>
          )}
        </div>

        <Link
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-mono text-[10px] uppercase tracking-[0.2em] text-paper border border-[var(--border)] px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:border-accent hover:text-accent transition-colors shrink-0"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
