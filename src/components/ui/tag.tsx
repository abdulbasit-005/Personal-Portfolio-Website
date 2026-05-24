import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded border border-subtle px-2 py-0.5 font-mono text-[11px] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
