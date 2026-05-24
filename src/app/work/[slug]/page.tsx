import {
  getProjectBySlug,
  getSimilarProjects,
  projects,
} from "@/lib/content/projects";
import { ProjectCard } from "@/components/work/project-card";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
      images: project.images[0] ? [{ url: project.images[0] }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const heroImage = project.images[0];
  const gallery = project.images.slice(1).filter(Boolean);
  const similar = getSimilarProjects(slug, 2);

  return (
    <Container className="py-12 lg:py-16">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        All work
      </Link>

      <header className="max-w-3xl mb-12">
        <p className="font-mono text-xs text-muted mb-3">
          {project.date || "Project"} · {project.role}
        </p>
        <h1 className="font-serif text-4xl tracking-tight sm:text-5xl mb-4">
          {project.name}
        </h1>
        <p className="text-lg text-muted leading-relaxed">{project.tagline}</p>
        <div className="flex flex-wrap gap-3 mt-8">
          {project.demo && (
            <Button href={project.demo} external>
              Live site
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          )}
          {project.code && (
            <Button href={project.code} external variant="ghost">
              Source
            </Button>
          )}
        </div>
      </header>

      {heroImage && !heroImage.includes("placeholder") && (
        <div className="relative aspect-video rounded-lg border border-subtle overflow-hidden mb-16">
          <Image
            src={heroImage}
            alt={project.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1120px) 100vw, 1120px"
          />
        </div>
      )}

      <div className="grid gap-16 lg:grid-cols-[1fr_240px] lg:gap-20">
        <div className="flex flex-col gap-14 min-w-0">
          <section>
            <h2 className="font-mono text-xs text-muted mb-4">Overview</h2>
            <p className="text-muted leading-relaxed">{project.description}</p>
          </section>

          {project.highlights.length > 0 && (
            <section>
              <h2 className="font-mono text-xs text-muted mb-4">
                What I built
              </h2>
              <ul className="flex flex-col gap-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted leading-relaxed pl-4 border-l border-subtle"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.challenges.length > 0 && (
            <section>
              <h2 className="font-mono text-xs text-muted mb-4">Challenges</h2>
              <ul className="flex flex-col gap-3">
                {project.challenges.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted leading-relaxed pl-4 border-l border-subtle"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {gallery.length > 0 && (
            <section>
              <h2 className="font-mono text-xs text-muted mb-4">Screenshots</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {gallery.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-video rounded-lg border border-subtle overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-mono text-xs text-muted mb-4">Stack</h2>
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </aside>
      </div>

      {similar.length > 0 && (
        <section className="mt-20 pt-16 border-t border-subtle">
          <h2 className="font-serif text-2xl mb-8">More work</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {similar.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
