import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectListCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 border-b border-[var(--border)] items-center"
    >
      <div className="md:col-span-5 relative aspect-[16/10] overflow-hidden rounded-lg bg-surface border border-[var(--border)] group-hover:border-accent/30 transition-colors">
        <Image
          src={project.images[0] ?? "/placeholder/placeholder.png"}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      <div className="md:col-span-7">
        <span className="text-mono text-[10px] text-muted uppercase tracking-widest">
          {project.date || "Project"}
        </span>
        <h2 className="text-display text-3xl md:text-4xl text-paper mt-2 group-hover:text-accent transition-colors">
          {project.name}
        </h2>
        <p className="text-muted mt-3 max-w-prose">{project.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <li
              key={tool}
              className="text-mono text-[10px] uppercase tracking-wider text-muted"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
