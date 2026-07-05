import type { Metadata } from "next";
import { MoebelmarkenPageClient } from "./MoebelmarkenPageClient";

export const metadata: Metadata = {
  title: "Möbelmontage Marken Wien | IKEA, XXXLutz, Mömax",
  description:
    "Möbelmontage in Wien für IKEA, XXXLutz, Mömax, Kika, Leiner, JYSK und weitere Marken. BAK Transport montiert Schränke, Betten und Büromöbel.",
  alternates: { canonical: "https://www.baktransport.at/leistungen/moebelmontage/marken" },
};

export default function MoebelmarkenPage() {
  return <MoebelmarkenPageClient />;
}
