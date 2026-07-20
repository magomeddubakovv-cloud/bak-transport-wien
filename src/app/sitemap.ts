import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { WIENER_BEZIRKE } from "@/data/wiener-bezirke";
import { NOE_ORTE } from "@/data/noe-orte";

// Falls back to this date if git history is unavailable at build time
// (e.g. a shallow clone) instead of falsely claiming the page changed "now".
const FALLBACK_DATE = new Date("2026-01-01T00:00:00Z");

const lastModifiedCache = new Map<string, Date>();

function lastModified(...paths: string[]): Date {
  const key = paths.join("|");
  const cached = lastModifiedCache.get(key);
  if (cached) return cached;

  let result = FALLBACK_DATE;
  try {
    const out = execSync(`git log -1 --format=%cI -- ${paths.map((p) => `"${p}"`).join(" ")}`, {
      cwd: process.cwd(),
      encoding: "utf-8",
    }).trim();
    if (out) result = new Date(out);
  } catch {
    result = FALLBACK_DATE;
  }

  lastModifiedCache.set(key, result);
  return result;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.baktransport.at";

  const bezirkDate = lastModified("src/app/regionen/wien/[bezirk]", "src/data/wiener-bezirke.ts");
  const orteDate = lastModified("src/app/regionen/niederoesterreich/[ort]", "src/data/noe-orte.ts");

  return [
    { url: base, lastModified: lastModified("src/app/page.tsx"), changeFrequency: "weekly", priority: 1.0 },
    // Leistungen — high priority (money pages)
    { url: `${base}/leistungen/transport-wien`, lastModified: lastModified("src/app/leistungen/transport-wien"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/umzug-preise`, lastModified: lastModified("src/app/leistungen/umzug-preise"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/privatumzug`, lastModified: lastModified("src/app/leistungen/privatumzug"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/firmenumzug`, lastModified: lastModified("src/app/leistungen/firmenumzug"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/moebelmontage`, lastModified: lastModified("src/app/leistungen/moebelmontage"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/leistungen/moebelmontage/marken`, lastModified: lastModified("src/app/leistungen/moebelmontage/marken"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/leistungen/kuechenmontage`, lastModified: lastModified("src/app/leistungen/kuechenmontage"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/leistungen/kuechenmontage/marken`, lastModified: lastModified("src/app/leistungen/kuechenmontage/marken"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/leistungen/schwerlasttransport`, lastModified: lastModified("src/app/leistungen/schwerlasttransport"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/leistungen/notfallumzug`, lastModified: lastModified("src/app/leistungen/notfallumzug"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/leistungen/entruempelung`, lastModified: lastModified("src/app/leistungen/entruempelung"), changeFrequency: "monthly", priority: 0.8 },
    // Regionen — high priority (local SEO pages)
    { url: `${base}/regionen/wien`, lastModified: lastModified("src/app/regionen/wien/page.tsx", "src/app/regionen/wien/WienPageClient.tsx"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/regionen/niederoesterreich`, lastModified: lastModified("src/app/regionen/niederoesterreich/page.tsx", "src/app/regionen/niederoesterreich/NiederoesterreichPageClient.tsx"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/regionen/oesterreich`, lastModified: lastModified("src/app/regionen/oesterreich"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/regionen/deutschland`, lastModified: lastModified("src/app/regionen/deutschland"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/regionen/schweiz`, lastModified: lastModified("src/app/regionen/schweiz"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/regionen/grenzueberschreitend`, lastModified: lastModified("src/app/regionen/grenzueberschreitend"), changeFrequency: "monthly", priority: 0.5 },
    // Wiener Bezirke — local SEO pages
    ...WIENER_BEZIRKE.map(b => ({
      url: `${base}/regionen/wien/${b.slug}`,
      lastModified: bezirkDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // NÖ Orte — local SEO pages
    ...NOE_ORTE.map(o => ({
      url: `${base}/regionen/niederoesterreich/${o.slug}`,
      lastModified: orteDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Unternehmen
    { url: `${base}/anfrage`, lastModified: lastModified("src/app/anfrage"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/vorteile`, lastModified: lastModified("src/app/vorteile"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/versicherung`, lastModified: lastModified("src/app/versicherung"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ratgeber`, lastModified: lastModified("src/app/ratgeber/page.tsx", "src/app/ratgeber/RatgeberPageClient.tsx"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/ratgeber/meldezettel-wien`, lastModified: lastModified("src/app/ratgeber/meldezettel-wien"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/ratgeber/halteverbotszone-wien`, lastModified: lastModified("src/app/ratgeber/halteverbotszone-wien"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/ratgeber/altbau-umzug-wien`, lastModified: lastModified("src/app/ratgeber/altbau-umzug-wien"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/ratgeber/umzugscheckliste-wien`, lastModified: lastModified("src/app/ratgeber/umzugscheckliste-wien"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/glossar`, lastModified: lastModified("src/app/glossar"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/ueber-uns`, lastModified: lastModified("src/app/ueber-uns"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/kontakt`, lastModified: lastModified("src/app/kontakt"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: lastModified("src/app/faq"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/karriere`, lastModified: lastModified("src/app/karriere"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/impressum`, lastModified: lastModified("src/app/impressum"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: lastModified("src/app/datenschutz"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/agb`, lastModified: lastModified("src/app/agb"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
