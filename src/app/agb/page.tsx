import type { Metadata } from "next";
import { AgbPageClient } from "./AgbPageClient";

export const metadata: Metadata = {
  title: "AGB | Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen der BAK Transport GmbH Wien.",
  robots: { index: false, follow: false },
};

export default function AgbPage() {
  return <AgbPageClient />;
}
