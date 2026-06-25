import { createWriteStream, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const BASE_URL = 'https://www.stahlundsoehne.at';

const assets = [
  { url: '/logoneulang.png', dest: 'public/images/logoneulang.png' },
  { url: '/header2.png', dest: 'public/images/header2.png' },
  { url: '/logowko-transport.png', dest: 'public/images/logowko-transport.png' },
  { url: '/firmenabc.png', dest: 'public/images/firmenabc.png' },
  { url: '/VC_KV3_pos_RGB.png', dest: 'public/images/VC_KV3_pos_RGB.png' },
  { url: '/logoneu2025.png', dest: 'public/images/logoneu2025.png' },
  { url: '/4.png', dest: 'public/images/privatumzug.png' },
  { url: '/firmenumzug.png', dest: 'public/images/firmenumzug.png' },
];

mkdirSync('public/images', { recursive: true });
mkdirSync('public/seo', { recursive: true });

async function downloadAsset(url, dest) {
  const fullUrl = BASE_URL + url;
  try {
    const res = await fetch(fullUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${fullUrl}`);
    const ws = createWriteStream(dest);
    await pipeline(res.body, ws);
    console.log(`✓ ${dest}`);
  } catch (err) {
    console.error(`✗ ${dest}: ${err.message}`);
  }
}

// Download in batches of 4
async function downloadBatch(batch) {
  await Promise.all(batch.map(a => downloadAsset(a.url, a.dest)));
}

const batchSize = 4;
for (let i = 0; i < assets.length; i += batchSize) {
  await downloadBatch(assets.slice(i, i + batchSize));
}

console.log('\nDone!');
