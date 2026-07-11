import Link from "next/link";
import { projects } from "@/content/projects";
import ProjectListCard from "@/components/work/ProjectListCard";

export const metadata = {
  title: "Work",
  description: "Selected projects and case studies by Abdul Basit.",
};

export default function WorkPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 pt-0 max-w-site mx-auto">
        <Link
          href="/"
          className="text-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent transition-colors"
        >
          ← Home
        </Link>
        <h1 className="text-display text-5xl md:text-7xl text-paper mt-8">
          The archive
        </h1>
        <p className="text-muted mt-6 max-w-prose text-lg">
          Production apps, experiments, and client work-documented with context,
          constraints, and outcomes.
        </p>

        <div className="mt-16">
          {projects.map((project) => (
            <ProjectListCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
