import type { Metadata } from "next";
import { MeldezettelWienPageClient } from "./MeldezettelWienPageClient";

export const metadata: Metadata = {
  title: "Meldezettel Wien | Ummeldung nach dem Umzug",
  description:
    "Meldezettel Wien: Frist von 3 Tagen, nötige Unterlagen und Ablauf der Wohnsitz-Ummeldung nach dem Umzug einfach erklärt.",
  alternates: { canonical: "https://www.baktransport.at/ratgeber/meldezettel-wien" },
};

export default function MeldezettelWienPage() {
  return <MeldezettelWienPageClient />;
}
