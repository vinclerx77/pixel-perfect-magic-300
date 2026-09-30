import { faq } from "@/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-t border-border/70 bg-card/30 px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        id="faq-title"
        kicker="Dúvidas frequentes"
        title={
          <>
            <span className="block">Perguntas</span>
            <span className="text-primary">e respostas</span>
          </>
        }
        subtitle="Respostas curtas e neutras. Questões que dependem de interpretação exigem orientação profissional."
      />

      <div className="reveal mx-auto mt-10 max-w-3xl">
        <Accordion type="single" collapsible className="grid gap-3">
          {faq.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="surface-card border-b-0 px-5 py-1"
            >
              <AccordionTrigger className="text-left text-sm font-bold hover:no-underline sm:text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
