import type { Project } from "@/lib/content/projects";
import { Tag } from "@/components/ui/tag";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  const image = project.images[0];
  const hasImage = image && !image.includes("placeholder");

  return (
    <article className="group flex flex-col border border-subtle rounded-lg overflow-hidden bg-surface/50 transition-colors duration-200 hover:border-accent/30">
      <Link href={`/work/${project.slug}`} className="flex flex-col flex-1">
        <div className="relative aspect-[16/10] bg-surface overflow-hidden">
          {hasImage ? (
            <Image
              src={image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-muted">
              {project.name}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 p-5 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-muted shrink-0 mt-1 group-hover:text-accent transition-colors" />
          </div>
          <p className="text-sm text-muted leading-relaxed line-clamp-2">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {project.tools.slice(0, 4).map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
