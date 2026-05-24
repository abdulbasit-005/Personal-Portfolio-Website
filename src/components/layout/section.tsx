import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  index?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-section lg:py-section-lg scroll-mt-24", className)}
    >
      {(index || title) && (
        <header className="mb-10 flex flex-col gap-2 sm:mb-12">
          {index && (
            <span className="font-mono text-xs text-muted">{index}</span>
          )}
          {title && (
            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
