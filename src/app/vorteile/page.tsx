import type { Metadata } from "next";
import { VorteilePageClient } from "./VorteilePageClient";

export const metadata: Metadata = {
  title: "Warum BAK Transport? | Vorteile der Umzugsfirma Wien",
  description:
    "Die Vorteile von BAK Transport Wien: Fixpreis, schnelle Rückmeldung, Versicherung, eigenes Team, LKW-Flotte und saubere Planung.",
  alternates: { canonical: "https://www.baktransport.at/vorteile" },
};

export default function VorteilePage() {
  return <VorteilePageClient />;
}
