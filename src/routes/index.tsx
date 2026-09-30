import { createFileRoute } from "@tanstack/react-router";
import { faq, site } from "@/content";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site/SiteNav";
import { ReadingProgress } from "@/components/site/ReadingProgress";
import { Hero } from "@/components/site/Hero";
import { SlidesCarousel } from "@/components/site/SlidesCarousel";
import { MythsSection } from "@/components/site/MythsSection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ScenarioSimulator } from "@/components/site/ScenarioSimulator";
import { ResponsibleSection } from "@/components/site/ResponsibleSection";
import { FaqSection } from "@/components/site/FaqSection";
import { AgeBar, SiteFooter } from "@/components/site/SiteFooter";
import { LegalBanner } from "@/components/site/LegalBanner";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.title },
      { name: "description", content: site.description },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "rating", content: "adult" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <SiteNav />
      <a
        href="#slides"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-16 focus:z-60 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>

      <main>
        <Hero />
        <SlidesCarousel />
        <MythsSection />
        <HowItWorks />
        <ScenarioSimulator />
        <ResponsibleSection />
        <FaqSection />
      </main>

      <SiteFooter />
      <AgeBar />
      <LegalBanner />
    </div>
  );
}
