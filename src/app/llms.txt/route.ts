export const dynamic = "force-static";

const BASE = "https://www.baktransport.at";

const LINES = `# BAK Transport Wien

> Professionelle Umzugsfirma in Wien: Privatumzüge, Firmenumzüge, Möbel- und Küchenmontage mit Fixpreis, Vollversicherung bis €100.000 und Rückmeldung in 60 Minuten.

BAK Transport ist in allen 23 Wiener Bezirken, Niederösterreich und darüber hinaus aktiv. Alle Preise sind Fixpreise nach kostenloser Besichtigung, ohne versteckte Kosten.

## Leistungen

- [Transport Wien](${BASE}/leistungen/transport-wien): Transportunternehmen für Privatumzug, Firmenumzug, Möbeltransport, Kleintransporte & Schwerlasttransport in allen 23 Bezirken.
- [Privatumzug](${BASE}/leistungen/privatumzug): Privatumzug Wien ab €650, vollversichert, kostenlose Besichtigung, Fixpreis.
- [Firmenumzug](${BASE}/leistungen/firmenumzug): Büroumzug mit minimaler Ausfallzeit, auch nachts & am Wochenende.
- [Möbelmontage](${BASE}/leistungen/moebelmontage): Auf- und Abbau aller Möbelmarken, auch ohne Umzug buchbar.
- [Möbelmontage — Marken](${BASE}/leistungen/moebelmontage/marken): Möbelmontage für IKEA, XXXLutz, Mömax, Kika, Leiner, JYSK und mehr.
- [Küchenmontage](${BASE}/leistungen/kuechenmontage): Küchenmontage ab €380 inkl. Elektro- & Wasseranschluss, 2 Jahre Garantie.
- [Küchenmontage — Marken](${BASE}/leistungen/kuechenmontage/marken): Küchenmontage für IKEA, XXXLutz, Mömax, Kika, Leiner, Nolte, Nobilia, EWE, Miele.
- [Schwerlasttransport](${BASE}/leistungen/schwerlasttransport): Transport von Klavieren, Tresoren, Maschinen & Spezialequipment.
- [Notfallumzug](${BASE}/leistungen/notfallumzug): Kurzfristiger Umzug, oft noch am selben Tag, 24/7 erreichbar.
- [Entrümpelung](${BASE}/leistungen/entruempelung): Entrümpelung von Wohnung, Keller, Dachboden, Büro und Verlassenschaft.
- [Umzug Preise](${BASE}/leistungen/umzug-preise): Transparente Fixpreise, faire Pakete, Versicherung und klare Leistungen.

## Regionen

- [Umzug Wien](${BASE}/regionen/wien): Umzüge in allen 23 Wiener Bezirken, ab €550 Fixpreis.
- [Umzug Niederösterreich](${BASE}/regionen/niederoesterreich): Umzüge von Wien nach St. Pölten, Klosterneuburg, Baden, Wiener Neustadt & mehr.
- [Umzug Österreich](${BASE}/regionen/oesterreich): Bundesweite Umzüge nach Graz, Linz, Salzburg, Innsbruck & alle Bundesländer.
- [Umzug nach Deutschland](${BASE}/regionen/deutschland): Umzüge Wien–München, Stuttgart, Frankfurt, Berlin, EU-intern ohne Zoll.
- [Umzug in die Schweiz](${BASE}/regionen/schweiz): Umzüge Wien–Zürich, Bern, Basel, Genf inkl. Zollberatung.
- [Grenzüberschreitende Umzüge](${BASE}/regionen/grenzueberschreitend): Umzüge von Wien nach Deutschland, Schweiz, Slowakei, Tschechien, Ungarn & mehr.

## Unternehmen

- [Über uns](${BASE}/ueber-uns): Über BAK Transport Wien — Team, Flotte und Geschichte.
- [Vorteile](${BASE}/vorteile): Woran man eine seriöse Umzugsfirma erkennt — Gewerbeberechtigung, Firmenbucheintrag, Versicherung, Fixpreis.
- [Versicherung](${BASE}/versicherung): Umzug vollversichert durchführen — Schutz, Möbeldecken, Folierung, sicherer Transport.
- [Karriere](${BASE}/karriere): Offene Stellen als Umzugshelfer, LKW-Fahrer und Montagetechniker.
- [Kontakt](${BASE}/kontakt): Kontaktieren Sie BAK Transport Wien für ein kostenloses Angebot, Rückmeldung in 60 Minuten.
- [Angebot anfragen](${BASE}/anfrage): Kostenloses, unverbindliches Umzugsangebot anfragen.
- [FAQ](${BASE}/faq): Häufige Fragen zu Kosten, Ablauf, Versicherung und Bezirken.

## Ratgeber

- [Ratgeber-Übersicht](${BASE}/ratgeber): Checklisten, Kosten, Planung und Tipps für stressfreie Umzüge.
- [Umzugscheckliste Wien](${BASE}/ratgeber/umzugscheckliste-wien): Schritt-für-Schritt-Anleitung von 6–8 Wochen vorher bis zum Umzugstag.
- [Meldezettel Wien](${BASE}/ratgeber/meldezettel-wien): Frist, Unterlagen und Ablauf der Wohnsitz-Ummeldung nach dem Umzug.
- [Halteverbotszone Wien](${BASE}/ratgeber/halteverbotszone-wien): Zuständigkeit, Fristen und Kosten der mobilen Halteverbotszone beantragen.
- [Umzug im Altbau Wien](${BASE}/ratgeber/altbau-umzug-wien): Was bei engen Stiegenhäusern, fehlendem Lift und Stuckdecken zu beachten ist.
- [Glossar](${BASE}/glossar): Umzugsbegriffe wie Fixpreis, Besichtigung, Halteverbotszone und Trageweg einfach erklärt.

## Rechtliches

- [Impressum](${BASE}/impressum): Angaben gemäß § 25 Mediengesetz.
- [Datenschutz](${BASE}/datenschutz): Datenschutzerklärung gemäß DSGVO.
- [AGB](${BASE}/agb): Allgemeine Geschäftsbedingungen der BAK Transport GmbH Wien.
`;

export function GET() {
  return new Response(LINES, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
