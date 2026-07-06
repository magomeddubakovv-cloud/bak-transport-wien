import type { Metadata } from "next";
import { AltbauUmzugWienPageClient } from "./AltbauUmzugWienPageClient";

export const metadata: Metadata = {
  title: "Umzug im Altbau Wien | Gründerzeithaus ohne Lift",
  description:
    "Umzug im Wiener Altbau: enge Stiegenhäuser, fehlender Lift und Stuckdecken — was beim Gründerzeithaus-Umzug zu beachten ist.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber/altbau-umzug-wien" },
};

export default function AltbauUmzugWienPage() {
  return <AltbauUmzugWienPageClient />;
}
