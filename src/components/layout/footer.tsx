import { personalData } from "@/lib/content/personal";
import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-serif text-lg text-foreground">
            {personalData.name}
          </p>
          <p className="text-sm text-muted">{personalData.role}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <Link
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </Link>
          <Link
            href={personalData.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href={`mailto:${personalData.email}`}
            className="hover:text-accent transition-colors"
          >
            Email
          </Link>
        </div>

        <p className="text-xs text-muted sm:text-right">
          © {year} {personalData.name}
        </p>
      </Container>
    </footer>
  );
}
