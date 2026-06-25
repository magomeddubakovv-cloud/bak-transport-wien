import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.baktransport.at";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    // Leistungen — high priority (money pages)
    { url: `${base}/leistungen/privatumzug`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/firmenumzug`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/leistungen/moebelmontage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/leistungen/kuechenmontage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/leistungen/schwerlasttransport`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/leistungen/notfallumzug`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Regionen — high priority (local SEO pages)
    { url: `${base}/regionen/wien`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/regionen/niederoesterreich`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/regionen/oesterreich`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/regionen/deutschland`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/regionen/schweiz`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/regionen/grenzueberschreitend`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    // Unternehmen
    { url: `${base}/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/karriere`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
