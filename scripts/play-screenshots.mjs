// Generates Play Store marketing screenshots (1080x1920) from the app captures.
// Blueprint "Signature Blue" styling to match knifomatic.com. Run with: node scripts/play-screenshots.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "..", "website screens");
const OUT = join(__dirname, "..", "..", "website screens", "play-store");

// Canvas
const W = 1080, H = 1920;
// Phone frame geometry
const SW = 600, SH = 1300;          // screen (matches 1080x2340 ratio exactly)
const PAD = 22, RO = 54, RI = 34;   // bezel padding, outer/inner radius
const PW = SW + PAD * 2, PH = SH + PAD * 2;
const PX = Math.round((W - PW) / 2), PY = 486;
const SX = PX + PAD, SY = PY + PAD;

// Palette (from globals.css)
const ACCENT = "#3A86FF";
const TEXT = "#EAF4FF";
const TEXT2 = "#8FB3D9";
const BORDER = "#3F6088";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const shots = [
  { src: "homescreen.webp",     out: "01-home.png",        eyebrow: "01 · HOME SCREEN",          l1: "Everything,",         l2: "one tap away" },
  { src: "collection 1.webp",   out: "02-collections.png", eyebrow: "02 · COLLECTIONS",          l1: "Group knives the",    l2: "way you think" },
  { src: "collection 2.webp",   out: "03-contents.png",    eyebrow: "03 · INSIDE A COLLECTION",  l1: "Every blade",         l2: "at a glance" },
  { src: "catalog.webp",        out: "04-catalog.png",     eyebrow: "04 · BUILT-IN CATALOG",     l1: "Build your collection",  l2: "straight from the catalog" },
  { src: "knife details.webp",  out: "05-detail.png",      eyebrow: "05 · KNIFE DETAIL",         l1: "Full spec sheet, available",  l2: "to customize and export" },
];

function background({ eyebrow, l1, l2 }) {
  const dimX = 150;                       // engineering dimension line, left of phone
  const dimTop = PY, dimBot = PY + PH;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="0%" r="120%">
      <stop offset="0%" stop-color="#123B63"/>
      <stop offset="45%" stop-color="#0B2A4A"/>
      <stop offset="100%" stop-color="#06182D"/>
    </radialGradient>
    <pattern id="fine" width="22" height="22" patternUnits="userSpaceOnUse">
      <path d="M22 0H0V22" fill="none" stroke="rgba(143,179,217,.06)" stroke-width="1"/>
    </pattern>
    <pattern id="coarse" width="110" height="110" patternUnits="userSpaceOnUse">
      <path d="M110 0H0V110" fill="none" stroke="rgba(143,179,217,.10)" stroke-width="1"/>
    </pattern>
    <linearGradient id="bezel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(16,42,67,.95)"/>
      <stop offset="100%" stop-color="rgba(9,28,50,.95)"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#fine)"/>
  <rect width="${W}" height="${H}" fill="url(#coarse)"/>

  <!-- corner drafting ticks -->
  <g stroke="rgba(143,179,217,.5)" stroke-width="2" fill="none">
    <path d="M56 56 h44 M56 56 v44"/>
    <path d="M${W - 56} 56 h-44 M${W - 56} 56 v44"/>
    <path d="M56 ${H - 56} h44 M56 ${H - 56} v-44"/>
    <path d="M${W - 56} ${H - 56} h-44 M${W - 56} ${H - 56} v-44"/>
  </g>

  <!-- faint crosshair marks -->
  <g stroke="rgba(143,179,217,.28)" stroke-width="1.5" fill="none" opacity=".7">
    <circle cx="915" cy="240" r="16"/><path d="M915 214 v52 M889 240 h52"/>
    <circle cx="170" cy="1740" r="16"/><path d="M170 1714 v52 M144 1740 h52"/>
  </g>

  <!-- eyebrow + headline -->
  <text x="80" y="176" font-family="Consolas, monospace" font-size="26" letter-spacing="5" fill="${ACCENT}">${esc(eyebrow)}</text>
  <text x="78" y="266" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="58" fill="${TEXT}">${esc(l1)}</text>
  <text x="78" y="336" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="58" fill="${TEXT}">${esc(l2)}</text>
  <rect x="80" y="372" width="66" height="5" rx="2.5" fill="${ACCENT}"/>

  <!-- dimension line beside the phone -->
  <g stroke="rgba(58,134,255,.55)" stroke-width="1.5" fill="none">
    <line x1="${dimX}" y1="${dimTop}" x2="${dimX}" y2="${dimBot}"/>
    <path d="M${dimX - 8} ${dimTop + 12} L${dimX} ${dimTop} L${dimX + 8} ${dimTop + 12}"/>
    <path d="M${dimX - 8} ${dimBot - 12} L${dimX} ${dimBot} L${dimX + 8} ${dimBot - 12}"/>
    <line x1="${dimX - 10}" y1="${dimTop}" x2="${dimX + 10}" y2="${dimTop}"/>
    <line x1="${dimX - 10}" y1="${dimBot}" x2="${dimX + 10}" y2="${dimBot}"/>
  </g>

  <!-- phone bezel (screen is composited on top) -->
  <rect x="${PX}" y="${PY}" width="${PW}" height="${PH}" rx="${RO}" ry="${RO}"
        fill="url(#bezel)" stroke="${BORDER}" stroke-width="1.5"/>
  <rect x="${SX}" y="${SY}" width="${SW}" height="${SH}" rx="${RI}" ry="${RI}"
        fill="#06182D" stroke="rgba(143,179,217,.28)" stroke-width="1"/>
</svg>`;
}

async function roundedScreen(srcPath) {
  const img = await sharp(srcPath).resize(SW, SH, { fit: "cover" }).toBuffer();
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${SW}" height="${SH}"><rect width="${SW}" height="${SH}" rx="${RI}" ry="${RI}" fill="#fff"/></svg>`
  );
  return sharp(img).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
}

await mkdir(OUT, { recursive: true });
for (const s of shots) {
  const bg = Buffer.from(background(s));
  const screen = await roundedScreen(join(SRC, s.src));
  await sharp(bg)
    .composite([{ input: screen, left: SX, top: SY }])
    .flatten({ background: "#06182D" }) // 24-bit, no alpha (Play requirement)
    .removeAlpha()
    .png()
    .toFile(join(OUT, s.out));
  console.log("wrote", s.out);
}
console.log("done ->", OUT);
