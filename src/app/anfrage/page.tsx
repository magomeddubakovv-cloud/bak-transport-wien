import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { StructuredData } from "@/components/StructuredData";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Angebot anfragen | Kostenlos & unverbindlich | BAK Transport Wien",
  description: "Jetzt kostenloses Umzugsangebot von BAK Transport Wien anfragen. Fixpreis in 60 Minuten. Privatumzug, Firmenumzug, Möbelmontage — wir melden uns sofort.",
  alternates: { canonical: "https://www.baktransport.at/anfrage" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BAK Transport Wien", item: "https://www.baktransport.at" },
    { "@type": "ListItem", position: 2, name: "Angebot anfragen", item: "https://www.baktransport.at/anfrage" },
  ],
};

const TRUST = [
  "Kostenlos & unverbindlich",
  "Antwort in 60 Minuten",
  "Fixpreis — keine versteckten Kosten",
  "Vollversichert",
  "Über 1.000 erfolgreiche Umzüge",
];

export default function AnfragePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <Navbar />
      <main className="pt-[88px]">
        {/* Hero Banner */}
        <section style={{ backgroundColor: "#1E3A5F" }} className="py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <p className="text-xs uppercase tracking-[4px] font-bold mb-3" style={{ color: "#FED7AA" }}>
              Kostenloses Angebot
            </p>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              Ihr persönliches Fixpreis-Angebot
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-xl mx-auto" style={{ color: "#CBD5E1" }}>
              Formular ausfüllen — wir melden uns innerhalb von <strong style={{ color: "#FED7AA" }}>60 Minuten</strong> mit Ihrem Angebot.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {TRUST.map(item => (
                <div key={item} className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#E2E8F0" }}>
                  <Check size={13} style={{ color: "#FED7AA" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <QuoteFormSection />

        {/* So geht es weiter */}
        <section className="py-12 md:py-16" style={{ backgroundColor: "#1E3A5F" }}>
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">So geht es weiter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Anfrage senden", text: "Füllen Sie das Formular aus — dauert nur 2 Minuten." },
                { step: "2", title: "Wir melden uns", text: "Innerhalb von 60 Minuten erhalten Sie Ihr persönliches Fixpreis-Angebot." },
                { step: "3", title: "Umzug starten", text: "Nach Ihrer Bestätigung kümmern wir uns um alles weitere." },
              ].map(({ step, title, text }) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                    style={{ backgroundColor: "#C2410C" }}>
                    {step}
                  </div>
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm" style={{ color: "#94A3B8" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
