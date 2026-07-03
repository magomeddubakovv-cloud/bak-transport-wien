"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";

const LABELS: Record<string, string> = {
  leistungen: "Leistungen",
  privatumzug: "Privatumzug",
  firmenumzug: "Firmenumzug",
  kuechenmontage: "Küchenmontage",
  moebelmontage: "Möbelmontage",
  notfallumzug: "Notfallumzug",
  schwerlasttransport: "Schwerlasttransport",
  entruempelung: "Entrümpelung",
  regionen: "Regionen",
  wien: "Wien",
  deutschland: "Deutschland",
  schweiz: "Schweiz",
  oesterreich: "Österreich",
  niederoesterreich: "Niederösterreich",
  grenzueberschreitend: "Grenzüberschreitend",
  // Wiener Bezirke
  "innere-stadt": "Innere Stadt",
  leopoldstadt: "Leopoldstadt",
  landstrasse: "Landstraße",
  wieden: "Wieden",
  margareten: "Margareten",
  mariahilf: "Mariahilf",
  neubau: "Neubau",
  josefstadt: "Josefstadt",
  alsergrund: "Alsergrund",
  favoriten: "Favoriten",
  simmering: "Simmering",
  meidling: "Meidling",
  hietzing: "Hietzing",
  penzing: "Penzing",
  "rudolfsheim-fuenfhaus": "Rudolfsheim-Fünfhaus",
  ottakring: "Ottakring",
  hernals: "Hernals",
  waehring: "Währing",
  doebling: "Döbling",
  brigittenau: "Brigittenau",
  floridsdorf: "Floridsdorf",
  donaustadt: "Donaustadt",
  liesing: "Liesing",
  // Sonstige
  "ueber-uns": "Über uns",
  faq: "FAQ",
  karriere: "Karriere",
  kontakt: "Kontakt",
  impressum: "Impressum",
  datenschutz: "Datenschutz",
};

export function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((seg, i) => ({
    label: LABELS[seg] ?? seg,
    href: "/" + segments.slice(0, i + 1).join("/"),
  }));

  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex items-center flex-wrap gap-x-1.5 gap-y-2 text-sm md:text-[15px]" style={{ color: "#6B7280" }}>
        <li>
          <Link href="/" aria-label="Startseite" className="inline-flex min-h-8 min-w-8 items-center justify-center rounded-md hover:bg-orange-50 hover:text-[#C2410C] transition-colors">
            <Home size={15} />
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-1">
            <ChevronRight size={15} style={{ color: "#D1D5DB" }} />
            {i === crumbs.length - 1 ? (
              <span style={{ color: "#C2410C" }} className="font-semibold">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="inline-flex min-h-8 items-center rounded-md px-1 hover:bg-orange-50 hover:text-[#C2410C] transition-colors">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
