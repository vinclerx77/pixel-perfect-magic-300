import { useEffect, useState } from "react";
import { Info } from "lucide-react";
import { banner } from "@/content";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "aviso-legal-aceito";

export function LegalBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* armazenamento indisponível */
    }
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Aviso legal"
      className="fixed inset-x-0 bottom-12 z-50 px-4 sm:bottom-14 sm:px-6"
    >
      <div className="surface-card mx-auto flex max-w-3xl flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4">
        <p className="flex min-w-0 gap-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
          {banner.text}
        </p>
        <Button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full font-bold"
          size="sm"
        >
          {banner.cta}
        </Button>
      </div>
    </div>
  );
}
