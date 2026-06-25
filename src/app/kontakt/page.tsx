import type { Metadata } from "next";
import { KontaktPageClient } from "./KontaktPageClient";

export const metadata: Metadata = {
  title: "Kontakt | Kostenloses Angebot in 60 Min | BAK Transport Wien",
  description: "Kontaktieren Sie BAK Transport Wien für ein kostenloses Umzugsangebot. Rückmeldung in 60 Minuten. ☎ Anrufen, WhatsApp oder Formular ausfüllen.",
  alternates: { canonical: "https://www.baktransport.at/kontakt" },
};

export default function KontaktPage() {
  return <KontaktPageClient />;
}
