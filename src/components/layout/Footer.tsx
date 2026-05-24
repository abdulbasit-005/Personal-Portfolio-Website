import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-site mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-display text-2xl text-paper">{site.name}</p>
          <p className="text-mono text-xs text-muted mt-2 uppercase tracking-widest">
            {site.location}
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-mono text-xs uppercase tracking-widest">
          <Link
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors link-underline"
          >
            GitHub
          </Link>
          <Link
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors link-underline"
          >
            LinkedIn
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="text-muted hover:text-accent transition-colors link-underline"
          >
            Email
          </Link>
          <Link
            href="/work"
            className="text-muted hover:text-accent transition-colors link-underline"
          >
            Work
          </Link>
        </div>

        <p className="text-mono text-[10px] text-muted uppercase tracking-widest self-end">
          © {year}
        </p>
      </div>
    </footer>
  );
}
