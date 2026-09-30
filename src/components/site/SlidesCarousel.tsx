import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ExternalLink, Info, Pause, Play } from "lucide-react";
import { slides } from "@/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const AUTOPLAY_MS = 9000;

export function SlidesCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  useEffect(() => {
    if (!embla || !playing || paused) return;
    const id = window.setInterval(() => embla.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [embla, playing, paused]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!embla) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        embla.scrollNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        embla.scrollPrev();
      }
    },
    [embla],
  );

  return (
    <section id="slides" aria-labelledby="slides-title" className="px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        kicker="Entenda em 6 passos"
        title={
          <>
            <span className="block">O essencial sobre</span>
            <span className="text-primary">VPN, regras e riscos</span>
          </>
        }
        subtitle="Deslize, use as setas do teclado ou os botões para avançar. Conteúdo informativo, sem passo a passo de uso."
      />
      <h2 id="slides-title" className="sr-only">
        Entenda o essencial sobre VPN, regras e riscos
      </h2>

      <div
        ref={containerRef}
        className="reveal mx-auto mt-10 max-w-2xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="overflow-hidden rounded-3xl"
          ref={emblaRef}
          role="group"
          aria-roledescription="carrossel"
          aria-label="Slides informativos"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <div className="flex touch-pan-y">
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                className="min-w-0 flex-[0_0_100%] px-1"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} de ${slides.length}: ${slide.title}`}
                aria-hidden={index !== i}
              >
                <article
                  className={cn(
                    "surface-card flex min-h-[30rem] flex-col p-6 sm:min-h-[32rem] sm:p-8",
                    slide.highlight && "border-primary/45",
                  )}
                  style={slide.highlight ? { boxShadow: "var(--glow-primary)" } : undefined}
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    {slide.kicker}
                  </p>
                  <h3
                    className={cn(
                      "heading-display mt-3 text-xl sm:text-2xl",
                      slide.highlight && "text-primary",
                    )}
                  >
                    {slide.title}
                  </h3>

                  <div className="mt-5 space-y-3.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {slide.body.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>

                  {slide.notice && (
                    <div className="mt-6 rounded-2xl border border-primary/35 bg-primary-soft p-4">
                      <p className="flex gap-2.5 text-sm font-semibold text-primary">
                        <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                        <span>{slide.notice}</span>
                      </p>
                      {slide.noticeLink && (
                        <a
                          href={slide.noticeLink.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary underline underline-offset-4 hover:no-underline"
                        >
                          {slide.noticeLink.label}
                          <ExternalLink aria-hidden="true" className="size-3.5" />
                        </a>
                      )}
                    </div>
                  )}

                  <div className="mt-auto pt-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold text-muted-foreground">
                        Slide {i + 1}/{slides.length}
                      </span>
                      <div className="flex min-w-0 flex-1 gap-1.5" aria-hidden="true">
                        {slides.map((s, j) => (
                          <span
                            key={s.title}
                            className={cn(
                              "h-1 flex-1 rounded-full transition-colors duration-300",
                              j <= index ? "bg-primary" : "bg-border",
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-full"
            aria-label="Slide anterior"
            onClick={() => embla?.scrollPrev()}
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="rounded-full text-xs font-bold uppercase tracking-wide"
            aria-pressed={playing}
            onClick={() => setPlaying((v) => !v)}
          >
            {playing ? (
              <Pause aria-hidden="true" className="size-3.5" />
            ) : (
              <Play aria-hidden="true" className="size-3.5" />
            )}
            {playing ? "Pausar" : "Automático"}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-full"
            aria-label="Próximo slide"
            onClick={() => embla?.scrollNext()}
          >
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
