"use client";

import { getFeaturedProjects } from "@/lib/content/projects";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/work/project-card";
import { Button } from "@/components/ui/button";

export function SelectedWork() {
  const { ref, visible } = useReveal();
  const featured = getFeaturedProjects();

  return (
    <Container>
      <Section id="work" index="01" title="Work">
        <div ref={ref} className={cn("reveal", visible && "reveal-visible")}>
          <p className="text-muted max-w-xl mb-10 leading-relaxed">
            Selected projects from client work, internships, and personal
            builds.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-12">
            <Button href="/work" variant="ghost">
              View all projects
            </Button>
          </div>
        </div>
      </Section>
    </Container>
  );
}
