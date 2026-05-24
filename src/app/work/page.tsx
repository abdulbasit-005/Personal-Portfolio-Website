import { projects } from "@/lib/content/projects";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/work/project-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects and case studies by Abdul Basit.",
};

export default function WorkPage() {
  return (
    <Container className="py-section lg:py-section-lg">
      <header className="mb-12 max-w-2xl">
        <p className="font-mono text-xs text-muted mb-3">Archive</p>
        <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Work</h1>
        <p className="mt-4 text-muted leading-relaxed">
          Apps, experiments, and client projects—mostly Next.js, TypeScript, and
          AI-backed features.
        </p>
      </header>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
