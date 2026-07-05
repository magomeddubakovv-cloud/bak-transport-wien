import type { Metadata } from "next";
import { KuechenmarkenPageClient } from "./KuechenmarkenPageClient";

export const metadata: Metadata = {
  title: "Küchenmontage Marken Wien | IKEA, XXXLutz, Mömax & mehr",
  description:
    "Küchenmontage in Wien für IKEA, XXXLutz, Mömax, Kika, Leiner, Nolte, Nobilia, EWE, Miele und weitere Küchenmarken.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/kuechenmontage/marken" },
};

export default function KuechenmarkenPage() {
  return <KuechenmarkenPageClient />;
}
