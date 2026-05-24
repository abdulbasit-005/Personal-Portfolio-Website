"use client";

import { personalData, skillGroups, education } from "@/lib/content";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function About() {
  const { ref, visible } = useReveal();

  return (
    <Container>
      <Section id="about" index="02" title="About">
        <div
          ref={ref}
          className={cn(
            "grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16 reveal",
            visible && "reveal-visible",
          )}
        >
          <div className="flex flex-col gap-6 text-muted leading-relaxed">
            {personalData.description.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="text-sm border-t border-subtle pt-6">
              {education.degree} · {education.institution} ·{" "}
              {education.duration}
            </p>
            <div className="grid gap-6 sm:grid-cols-3 pt-4">
              {Object.entries(skillGroups).map(([group, skills]) => (
                <div key={group}>
                  <h3 className="font-mono text-xs text-foreground uppercase mb-3">
                    {group}
                  </h3>
                  <ul className="flex flex-col gap-1.5 text-sm">
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] max-w-[280px] mx-auto lg:mx-0">
            <Image
              src={personalData.profile}
              alt={personalData.name}
              fill
              className="object-cover rounded-lg border border-subtle"
              sizes="280px"
              priority={false}
            />
          </div>
        </div>
      </Section>
    </Container>
  );
}
