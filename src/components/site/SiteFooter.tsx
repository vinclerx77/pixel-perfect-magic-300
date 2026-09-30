import { nav, site } from "@/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-4 pt-12 pb-28 sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="heading-display text-lg">
            VPN <span className="text-primary">&amp;</span> Apostas
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            {site.legalDisclaimer}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <nav aria-label="Seções">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Seções</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Informações legais">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Termos de uso
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Política de privacidade
                </a>
              </li>
            </ul>
            <p className="mt-3 text-[11px] text-muted-foreground/70">
              Links de placeholder [verificar fonte oficial]
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
}

/** Faixa fixa presente em todas as páginas. */
export function AgeBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/30 bg-background/92 backdrop-blur-xl">
      <p className="mx-auto max-w-6xl px-4 py-2.5 text-center text-xs font-black uppercase tracking-[0.18em] text-primary sm:px-6">
        {site.footerNotice}
      </p>
    </div>
  );
}
