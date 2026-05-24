import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  projects,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/content/projects";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} | ${site.name}`,
      description: project.tagline,
      images: project.images[0] ? [{ url: project.images[0] }] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <main className="pt-32 pb-24">
      <article className="max-w-site mx-auto chapter-padding pt-0">
        <Link
          href="/work"
          className="text-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent transition-colors"
        >
          ← All work
        </Link>

        <header className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="text-mono text-[10px] uppercase tracking-widest text-muted">
              {project.role} · {project.date || "Case study"}
            </p>
            <h1 className="text-display text-5xl md:text-7xl text-paper mt-4 leading-[0.95]">
              {project.name}
            </h1>
            <p className="text-xl text-muted mt-6">{project.tagline}</p>
            <p className="text-paper/80 mt-8 leading-relaxed max-w-prose">
              {project.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-ink text-mono text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Live site
                </Link>
              )}
              {project.code && (
                <Link
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--border)] text-paper text-mono text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  Source
                </Link>
              )}
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--border)] bg-surface">
            {project.video ? (
              <video
                src={project.video}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={project.images[0] ?? "/placeholder/placeholder.png"}
                alt={project.name}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </header>

        {project.images.length > 1 && (
          <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.slice(1).map((img, i) => (
              <div
                key={img}
                className={`relative aspect-video rounded-lg overflow-hidden border border-[var(--border)] ${i === 0 && project.images.length === 2 ? "md:col-span-2" : ""}`}
              >
                <Image
                  src={img}
                  alt={`${project.name} screenshot ${i + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </section>
        )}

        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-mono text-[10px] uppercase tracking-widest text-accent mb-6">
              Highlights
            </h2>
            <ul className="space-y-4">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="text-paper/90 leading-relaxed pl-4 border-l-2 border-accent/40"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-mono text-[10px] uppercase tracking-widest text-accent mb-6">
              Challenges
            </h2>
            <ul className="space-y-4">
              {project.challenges.map((c) => (
                <li
                  key={c}
                  className="text-muted leading-relaxed pl-4 border-l border-[var(--border)]"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-mono text-[10px] uppercase tracking-widest text-muted mb-6">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-mono text-[10px] uppercase tracking-wider text-muted border border-[var(--border)] px-4 py-2 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <nav className="mt-24 pt-12 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between gap-8">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group text-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
            >
              <span className="block text-muted/60 mb-1">Previous</span>
              <span className="text-paper group-hover:text-accent">
                {prev.name}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group text-right text-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
            >
              <span className="block text-muted/60 mb-1">Next</span>
              <span className="text-paper group-hover:text-accent">
                {next.name}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <div className="mt-16">
          <Link
            href="/#contact"
            className="inline-flex bg-accent text-ink text-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Discuss this project
          </Link>
        </div>
      </article>
    </main>
  );
}
