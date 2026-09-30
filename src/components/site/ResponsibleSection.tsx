import { Heart, LifeBuoy, TriangleAlert } from "lucide-react";
import { responsible } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function ResponsibleSection() {
  return (
    <section
      id="jogo-responsavel"
      aria-labelledby="jogo-responsavel-title"
      className="px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        id="jogo-responsavel-title"
        kicker="Cuidado com você"
        title={
          <>
            <span className="block">Jogo</span>
            <span className="text-primary">responsável</span>
          </>
        }
        subtitle={responsible.subtitle}
      />

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">
        <div className="surface-card reveal p-5 sm:p-7">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
            <TriangleAlert aria-hidden="true" className="size-4" />
            Sinais de alerta
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {responsible.signs.map((sign) => (
              <li key={sign} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                {sign}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5">
          <div className="surface-card reveal p-5 sm:p-6">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground">
              <LifeBuoy aria-hidden="true" className="size-4 text-primary" />
              Ferramentas de controle
            </p>
            <dl className="mt-4 space-y-4">
              {responsible.tools.map((tool) => (
                <div key={tool.label}>
                  <dt className="text-sm font-bold text-foreground">{tool.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {tool.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="reveal rounded-2xl border border-primary/40 bg-primary-soft p-5 sm:p-6"
            style={{ boxShadow: "var(--glow-primary)" }}
          >
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
              <Heart aria-hidden="true" className="size-4" />
              Onde buscar ajuda
            </p>
            <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-foreground/90">
              {responsible.help.map((line) => (
                <p key={line.slice(0, 20)}>{line}</p>
              ))}
            </div>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-primary">
              {responsible.ageWarning}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
