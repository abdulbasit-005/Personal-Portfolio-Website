"use client";

import { personalData } from "@/lib/content/personal";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

const navItems = [
  { label: "Work", hash: "work" },
  { label: "About", hash: "about" },
  { label: "Experience", hash: "experience" },
  { label: "Contact", hash: "contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const sectionHref = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-subtle bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container as="div" className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-foreground hover:text-accent transition-colors"
        >
          {personalData.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              href={sectionHref(item.hash)}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button href={personalData.resume} external variant="ghost">
            Resume
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden text-sm text-muted"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open && (
        <div className="border-t border-subtle md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.hash}
                href={sectionHref(item.hash)}
                className="text-base text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button href={personalData.resume} external variant="ghost">
              Resume
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
