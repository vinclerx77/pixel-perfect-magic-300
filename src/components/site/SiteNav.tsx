import { useEffect, useState } from "react";
import { Menu, Share2, Type, X, Check } from "lucide-react";
import { nav, site } from "@/content";
import { useActiveSection } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const FONT_STEPS = [
  { label: "A−", value: 93.75 },
  { label: "A", value: 100 },
  { label: "A+", value: 112.5 },
  { label: "A++", value: 125 },
];

export function SiteNav() {
  const ids = nav.map((n) => n.id);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [fontIndex, setFontIndex] = useState(1);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    const step = FONT_STEPS[fontIndex] ?? FONT_STEPS[1]!;
    document.documentElement.style.setProperty("--reading-font-size", `${step.value}%`);
  }, [fontIndex]);


  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: site.title, text: site.description, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setShared(true);
      window.setTimeout(() => setShared(false), 2000);
    } catch {
      /* compartilhamento cancelado pelo usuário */
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-2 text-sm font-extrabold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary text-xs font-black text-primary-foreground"
          >
            VPN
          </span>
          <span className="truncate uppercase">
            Apostas <span className="text-primary">&amp;</span> VPN
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-1">
          <nav aria-label="Seções do site" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "true" : undefined}
                    className={cn(
                      "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                      active === item.id
                        ? "bg-primary-soft text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="ml-1 hidden items-center gap-1 rounded-full border border-border px-1 py-1 sm:flex"
            role="group"
            aria-label="Tamanho da fonte do modo de leitura"
          >
            <Type aria-hidden="true" className="mx-1 size-3.5 text-muted-foreground" />
            {FONT_STEPS.map((step, i) => (
              <button
                key={step.label}
                type="button"
                onClick={() => setFontIndex(i)}
                aria-pressed={fontIndex === i}
                aria-label={`Tamanho da fonte ${step.label}`}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[11px] font-bold transition-colors",
                  fontIndex === i
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {step.label}
              </button>
            ))}
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleShare}
            aria-label="Compartilhar esta página"
            className="rounded-full text-muted-foreground hover:text-primary"
          >
            {shared ? (
              <Check aria-hidden="true" className="size-4 text-primary" />
            ) : (
              <Share2 aria-hidden="true" className="size-4" />
            )}
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Seções do site"
          className="border-t border-border bg-background/95 px-4 pb-4 lg:hidden"
        >
          <ul className="grid gap-1 pt-2">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "block rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
                    active === item.id
                      ? "bg-primary-soft text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
