"use client";

import { experiences } from "@/lib/content/experience";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function Experience() {
  const { ref, visible } = useReveal();

  return (
    <Container>
      <Section id="experience" index="03" title="Experience">
        <div
          ref={ref}
          className={cn(
            "reveal border-l border-subtle pl-8",
            visible && "reveal-visible",
          )}
        >
          <ol className="flex flex-col gap-12">
            {experiences.map((exp) => (
              <li key={exp.id} className="relative">
                <span className="absolute -left-[33px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-foreground font-medium">{exp.title}</h3>
                    <p className="text-sm text-muted">
                      {exp.company}
                      {exp.location ? ` · ${exp.location}` : ""}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-muted mt-1 sm:mt-0">
                    {exp.duration}
                  </p>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {exp.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-muted leading-relaxed pl-0"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </Container>
  );
}
