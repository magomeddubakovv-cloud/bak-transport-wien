import type { Metadata } from "next";
import { UeberUnsPageClient } from "./UeberUnsPageClient";

export const metadata: Metadata = {
  title: "Über BAK Transport Wien | Ihr Umzugsunternehmen",
  description: "BAK Transport Wien: Professionelle Umzüge seit über 10 Jahren. Eigene LKW-Flotte, erfahrenes Team, 5,0★ auf Google, Fixpreisgarantie.",
  alternates: { canonical: "https://www.baktransport.at/ueber-uns" },
};

export default function UeberUnsPage() {
  return <UeberUnsPageClient />;
}
