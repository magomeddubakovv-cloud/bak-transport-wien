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
  "Kostenlos",
  "60 Min Antwort",
  "Fixpreis",
  "Vollversichert",
  "1.000+ Umzüge",
];

export default function AnfragePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <Navbar />
      <main className="pt-[88px]">
        {/* Hero Banner */}
        <section style={{ backgroundColor: "#C2410C" }} className="py-8 md:py-14">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <p className="text-[11px] md:text-xs uppercase tracking-[3px] md:tracking-[4px] font-bold mb-3" style={{ color: "#FED7AA" }}>
              Kostenloses Angebot
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Ihr persönliches Fixpreis-Angebot
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto" style={{ color: "#FFEDD5" }}>
              Formular ausfüllen — wir melden uns innerhalb von <strong style={{ color: "#FED7AA" }}>60 Minuten</strong> mit Ihrem Angebot.
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-3 max-w-xl mx-auto">
              {TRUST.map(item => (
                <div key={item} className="flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-[13px] sm:text-sm font-semibold text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#FFEDD5" }}>
                  <Check size={13} className="shrink-0" style={{ color: "#FED7AA" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <QuoteFormSection />

        {/* So geht es weiter */}
        <section className="py-10 md:py-16" style={{ backgroundColor: "#C2410C" }}>
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-10">So geht es weiter</h2>
            <div className="grid grid-cols-3 gap-3 sm:gap-8">
              {[
                { step: "1", title: "Anfrage senden", text: "Füllen Sie das Formular aus — dauert nur 2 Minuten." },
                { step: "2", title: "Wir melden uns", text: "Innerhalb von 60 Minuten erhalten Sie Ihr persönliches Fixpreis-Angebot." },
                { step: "3", title: "Umzug starten", text: "Nach Ihrer Bestätigung kümmern wir uns um alles weitere." },
              ].map(({ step, title, text }) => (
                <div key={step} className="flex flex-col items-center rounded-2xl px-2 py-4 sm:p-0">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mb-3 sm:mb-4"
                    style={{ backgroundColor: "#FFFFFF", color: "#C2410C" }}>
                    {step}
                  </div>
                  <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 leading-tight">{title}</h3>
                  <p className="hidden sm:block text-sm" style={{ color: "#FED7AA" }}>{text}</p>
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
