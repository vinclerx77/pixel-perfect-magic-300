import { ArrowDown, ShieldAlert } from "lucide-react";
import { hero } from "@/content";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
          <ShieldAlert aria-hidden="true" className="size-3.5" />
          {hero.tag}
        </p>

        <h1 id="hero-title" className="heading-display reveal mt-6 text-3xl sm:text-5xl lg:text-6xl">
          <span className="block">{hero.titleLine1}</span>
          <span className="text-glow-primary mt-1 block">{hero.titleLine2}</span>
        </h1>

        <p className="reveal mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
          {hero.subtitle}
        </p>

        <div className="reveal mt-9 flex justify-center">
          <Button asChild size="lg" className="rounded-full px-7 font-bold">
            <a href="#slides">
              {hero.cta}
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
