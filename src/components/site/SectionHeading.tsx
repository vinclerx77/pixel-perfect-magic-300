import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      {kicker && (
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">{kicker}</p>
      )}
      <h2 className="heading-display mt-3 text-2xl sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
