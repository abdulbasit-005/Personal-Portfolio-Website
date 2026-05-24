"use client";

import { personalData } from "@/lib/content/personal";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/contact/contact-form";

export function Contact() {
  const { ref, visible } = useReveal();

  return (
    <Container>
      <Section id="contact" index="04" title="Contact">
        <div
          ref={ref}
          className={cn(
            "grid gap-12 lg:grid-cols-2 lg:gap-16 reveal",
            visible && "reveal-visible",
          )}
        >
          <div>
            <p className="text-muted leading-relaxed mb-8">
              Open to full-time roles, contract work, and interesting product
              builds. Tell me what you are working on.
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href={`mailto:${personalData.email}`}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  {personalData.email}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${personalData.phone}`}
                  className="text-muted hover:text-accent transition-colors"
                >
                  {personalData.phone}
                </Link>
              </li>
              <li className="text-muted">{personalData.location}</li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-8 text-sm text-muted">
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
                href={personalData.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Twitter
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </Container>
  );
}
