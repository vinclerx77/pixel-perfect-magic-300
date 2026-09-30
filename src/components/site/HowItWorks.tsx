import { Eye, EyeOff, Globe, Laptop, Lock, Server } from "lucide-react";
import { howItWorks } from "@/content";
import { SectionHeading } from "./SectionHeading";

const ICONS = [Laptop, Lock, Server, Globe];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        id="como-funciona-title"
        kicker="Infográfico"
        title={
          <>
            <span className="block">Como a</span>
            <span className="text-primary">VPN funciona</span>
          </>
        }
        subtitle={howItWorks.subtitle}
      />

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-[1.35fr_1fr]">
        <div className="surface-card reveal p-5 sm:p-7">
          <ol className="grid gap-4 sm:grid-cols-2">
            {howItWorks.steps.map((step, i) => {
              const Icon = ICONS[i] ?? Globe;
              return (
                <li key={step.label} className="relative">
                  <div className="rounded-2xl border border-border bg-background/50 p-4">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="pulse-soft grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"
                      >
                        <Icon className="size-4.5" />
                      </span>
                      <p className="min-w-0 text-sm font-bold uppercase tracking-wide">
                        {step.label}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                  </div>
                  {i < howItWorks.steps.length - 1 && (
                    <span aria-hidden="true" className="flow-line mt-2 block h-1 rounded-full" />
                  )}
                </li>
              );
            })}
          </ol>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {howItWorks.caption}
          </p>
        </div>

        <div className="grid gap-5">
          <div className="surface-card reveal p-5 sm:p-6">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
              <Eye aria-hidden="true" className="size-4" />
              O provedor vê
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {howItWorks.sees.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card reveal p-5 sm:p-6">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
              <EyeOff aria-hidden="true" className="size-4" />
              O provedor não vê
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {howItWorks.doesNotSee.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-border" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
