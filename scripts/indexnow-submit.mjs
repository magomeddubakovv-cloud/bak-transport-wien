#!/usr/bin/env node
// Submits page URLs to IndexNow (Bing/Yandex/Seznam) so changes are picked up
// faster than waiting for a crawl. Run manually after a deploy that adds or
// changes pages: `npm run indexnow` (whole sitemap) or
// `npm run indexnow -- https://www.baktransport.at/ratgeber/neuer-artikel` (single URL).

const HOST = "www.baktransport.at";
const KEY = "d237bab15b83434e9a0be5d12d1c9d66";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function getUrlsFromSitemap() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Konnte Sitemap nicht laden: ${res.status} ${res.statusText}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) throw new Error("Sitemap enthält keine URLs.");
  return urls;
}

async function submit(urlList) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  if (res.status === 200 || res.status === 202) {
    console.log(`✓ IndexNow: ${urlList.length} URL(s) übermittelt (Status ${res.status}).`);
  } else {
    const body = await res.text().catch(() => "");
    throw new Error(`IndexNow-Übermittlung fehlgeschlagen: ${res.status} ${res.statusText} ${body}`);
  }
}

const arg = process.argv[2];
const urlList = arg ? [arg] : await getUrlsFromSitemap();
await submit(urlList);
