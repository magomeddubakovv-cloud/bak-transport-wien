import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { RegionsSection } from "@/components/RegionsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BAK Transport Wien | Umzugsfirma ab €650 | Fixpreis",
  description:
    "BAK Transport – Umzugsfirma Wien ab €650. Privatumzüge, Firmenumzüge, Möbelmontage. Alle 23 Bezirke, Fixpreis, vollversichert, Rückmeldung in 60 Min.",
  alternates: { canonical: "https://www.baktransport.at" },
  keywords: ["Umzugsfirma Wien", "Privatumzug Wien ab 650", "Umzug Wien günstig Fixpreis", "Umzugsunternehmen Wien alle Bezirke"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.baktransport.at/#website",
  url: "https://www.baktransport.at",
  name: "BAK Transport Wien",
  description: "Professionelle Umzugsfirma in Wien mit Fixpreis",
  publisher: { "@id": "https://www.baktransport.at/#business" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://www.baktransport.at/?s={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet ein Privatumzug in Wien mit BAK Transport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Privatumzug mit BAK Transport Wien kostet ab €650 für Wohnungen bis 50m². Mittlere Wohnungen (50–100m²) starten ab €950. Nach einer kostenlosen Besichtigung erhalten Sie einen verbindlichen Fixpreis ohne versteckte Kosten.",
      },
    },
    {
      "@type": "Question",
      name: "Führt BAK Transport Umzüge in allen 23 Wiener Bezirken durch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, BAK Transport ist in allen 23 Wiener Bezirken aktiv — vom 1. Bezirk (Innere Stadt) bis zum 23. Bezirk (Liesing). Wir kennen Wien und seine Besonderheiten sehr gut.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell erhalte ich ein Angebot von BAK Transport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach Ihrer Anfrage melden wir uns innerhalb von 60 Minuten bei Ihnen — werktags und auch am Wochenende. Wir vereinbaren dann eine kostenlose Besichtigung und erstellen ein verbindliches Fixpreisangebot.",
      },
    },
    {
      "@type": "Question",
      name: "Sind meine Möbel beim Umzug mit BAK Transport versichert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, alle Umzugsgüter sind während des gesamten Transports vollversichert. BAK Transport übernimmt die volle Verantwortung für Ihre Möbel und Gegenstände von Haustür zu Haustür.",
      },
    },
    {
      "@type": "Question",
      name: "Macht BAK Transport auch Firmenumzüge in Wien?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, BAK Transport führt professionelle Firmenumzüge in Wien und Österreich durch — auch außerhalb der Geschäftszeiten, am Wochenende oder nachts, um den Betrieb nicht zu unterbrechen.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist im Umzugspaket von BAK Transport enthalten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Im Paket enthalten sind: erfahrene Umzugshelfer, LKW mit Hebebühne, Möbeldecken und Schutzfolie, Ab- und Aufbau von Möbeln, An- und Abfahrt sowie Vollversicherung. Zusatzleistungen wie Küchenmontage oder Klaviertransport sind auf Anfrage möglich.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Umzugsservice Wien",
  provider: {
    "@type": "MovingCompany",
    name: "BAK Transport Wien",
    telephone: "+4368110723047",
    url: "https://www.baktransport.at",
  },
  areaServed: { "@type": "City", name: "Wien" },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "650",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "650",
      priceCurrency: "EUR",
      description: "Ab €650 für Wohnungen bis 50m²",
    },
  },
  serviceType: ["Privatumzug", "Firmenumzug", "Möbelmontage", "Küchenmontage"],
};

export default function Home() {
  return (
    <>
      <StructuredData data={websiteSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={serviceSchema} />
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ReviewsSection />
        <ServicesSection />
        <WhyUsSection />
        <QuoteFormSection />
        <RegionsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
