import { useState } from "react";
import { AlertTriangle, ShieldCheck, ShieldX } from "lucide-react";
import { scenarios } from "@/content";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

type OptionId = (typeof scenarios.options)[number]["id"];

export function ScenarioSimulator() {
  const [selected, setSelected] = useState<OptionId>("autorizada");

  return (
    <section
      id="cenarios"
      aria-labelledby="cenarios-title"
      className="border-y border-border/70 bg-card/30 px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        id="cenarios-title"
        kicker="Simulador"
        title={
          <>
            <span className="block">Riscos: cenários</span>
            <span className="text-primary">lado a lado</span>
          </>
        }
        subtitle={scenarios.subtitle}
      />

      <div className="mx-auto mt-10 max-w-5xl">
        <div
          role="radiogroup"
          aria-label="Escolha o tipo de plataforma"
          className="reveal mx-auto flex w-fit items-center gap-1 rounded-full border border-border bg-background p-1"
        >
          {scenarios.options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={selected === opt.id}
              onClick={() => setSelected(opt.id)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors sm:px-5 sm:text-sm",
                selected === opt.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-4">
          {scenarios.rows.map((row) => (
            <li key={row.criterion} className="surface-card reveal p-5 sm:p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                {row.criterion}
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div
                  className={cn(
                    "rounded-2xl border p-4 transition-opacity duration-300",
                    selected === "autorizada"
                      ? "border-primary/40 bg-primary-soft opacity-100"
                      : "border-border bg-background/40 opacity-55",
                  )}
                >
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
                    <ShieldCheck aria-hidden="true" className="size-4" />
                    Casa autorizada
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {row.autorizada}
                  </p>
                </div>
                <div
                  className={cn(
                    "rounded-2xl border p-4 transition-opacity duration-300",
                    selected === "nao-autorizada"
                      ? "border-destructive/45 bg-destructive/10 opacity-100"
                      : "border-border bg-background/40 opacity-55",
                  )}
                >
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-destructive">
                    <ShieldX aria-hidden="true" className="size-4" />
                    Casa não autorizada
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {row.naoAutorizada}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p
          className="reveal mt-6 flex gap-3 rounded-2xl border border-primary/40 bg-primary-soft p-5 text-sm font-semibold leading-relaxed text-primary"
          role="note"
        >
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          {scenarios.conclusion}
        </p>
      </div>
    </section>
  );
}
