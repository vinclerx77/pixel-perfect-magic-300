import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { myths } from "@/content";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

export function MythsSection() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section
      id="mitos"
      aria-labelledby="mitos-title"
      className="border-y border-border/70 bg-card/30 px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        kicker="Separe o que é real"
        title={
          <>
            <span className="block">Mitos e</span>
            <span className="text-primary">verdades</span>
          </>
        }
        subtitle="Toque em um cartão para ver a resposta. Afirmações comuns, explicadas de forma sóbria."
      />
      <h2 id="mitos-title" className="sr-only">
        Mitos e verdades
      </h2>

      <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {myths.map((myth, i) => {
          const isFlipped = Boolean(flipped[i]);
          return (
            <li key={myth.claim} className="reveal">
              <div className="flip-card h-60" data-flipped={isFlipped}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isFlipped}
                  aria-label={`${myth.claim} Ver resposta.`}
                  className="flip-inner block w-full cursor-pointer text-left"
                >
                  <div className="surface-card surface-card-hover flip-face flex h-60 flex-col justify-between p-5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Afirmação {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base font-bold leading-snug text-foreground">{myth.claim}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                      <RotateCcw aria-hidden="true" className="size-3.5" />
                      Ver resposta
                    </span>
                  </div>

                  <div className="surface-card flip-face flip-face-back flex h-60 flex-col gap-3 overflow-auto p-5">
                    <span
                      className={cn(
                        "w-fit rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em]",
                        myth.verdict === "MITO"
                          ? "bg-destructive/15 text-destructive"
                          : "bg-primary-soft text-primary",
                      )}
                    >
                      {myth.verdict}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{myth.answer}</p>
                  </div>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
