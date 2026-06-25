import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";

mkdirSync("public/images/photos", { recursive: true });

// Curated Unsplash photos for a moving/transport company
const photos = [
  // Hero & general
  {
    id: "hero-movers",
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop",
    dest: "public/images/photos/hero-movers.jpg",
  },
  {
    id: "hero-truck",
    url: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?w=1920&q=85&auto=format&fit=crop",
    dest: "public/images/photos/hero-truck.jpg",
  },
  // Services
  {
    id: "privatumzug",
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/privatumzug.jpg",
  },
  {
    id: "firmenumzug",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/firmenumzug.jpg",
  },
  {
    id: "moebelmontage",
    url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/moebelmontage.jpg",
  },
  {
    id: "kuechenmontage",
    url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/kuechenmontage.jpg",
  },
  {
    id: "schwerlast",
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/schwerlast.jpg",
  },
  {
    id: "notfall",
    url: "https://images.unsplash.com/photo-1574534311474-b2f13ffe5cce?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/notfall.jpg",
  },
  // Regions
  {
    id: "wien",
    url: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/wien.jpg",
  },
  {
    id: "oesterreich",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/oesterreich.jpg",
  },
  {
    id: "deutschland",
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/deutschland.jpg",
  },
  {
    id: "schweiz",
    url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/schweiz.jpg",
  },
  // About / Team
  {
    id: "team",
    url: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/team.jpg",
  },
  {
    id: "about",
    url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/about.jpg",
  },
  // Boxes / packing
  {
    id: "kartons",
    url: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=85&auto=format&fit=crop",
    dest: "public/images/photos/kartons.jpg",
  },
];

async function download(photo) {
  try {
    const res = await fetch(photo.url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const ws = createWriteStream(photo.dest);
    await pipeline(res.body, ws);
    console.log(`✓ ${photo.dest}`);
  } catch (err) {
    console.error(`✗ ${photo.dest}: ${err.message}`);
  }
}

// 4 at a time
for (let i = 0; i < photos.length; i += 4) {
  await Promise.all(photos.slice(i, i + 4).map(download));
}
console.log("\nDone!");
