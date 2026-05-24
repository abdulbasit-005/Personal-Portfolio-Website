"use client";

import { personalData, skillGroups } from "@/lib/content";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const tools = [
    ...skillGroups.frontend.slice(0, 3),
    ...skillGroups.backend.slice(0, 2),
  ];

  return (
    <Container
      as="section"
      className="pt-16 pb-section lg:pt-24 lg:pb-section-lg"
    >
      <div
        ref={ref}
        className={cn(
          "max-w-3xl flex flex-col gap-8 reveal",
          visible && "reveal-visible",
        )}
      >
        <p className="font-mono text-xs text-muted">Available for work</p>
        <h1 className="font-serif text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
          {personalData.name}
          <span className="block text-muted text-2xl sm:text-3xl lg:text-4xl mt-3 font-sans font-normal">
            {personalData.role}
          </span>
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl">
          {personalData.tagline}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/#work">View work</Button>
          <Button href="/#contact" variant="ghost">
            Get in touch
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="font-mono text-[11px] text-muted border border-subtle rounded px-2 py-1"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
}
