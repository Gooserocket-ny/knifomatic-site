// Generates the Google Play "Feature graphic" (1024x500) in the Knifomatic
// blueprint style: wordmark + slogan, tagline, a feature grid with icons, and
// three device screens. Run with: node scripts/play-feature-graphic.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "..", "website screens");
const OUT = join(__dirname, "..", "..", "website screens", "play-store", "feature-graphic.png");

const W = 1024, H = 500;
const ACCENT = "#3A86FF";
const TEXT = "#EAF4FF";
const TEXT2 = "#8FB3D9";
const MUTED = "#5E7C9C";
const BORDER = "#3F6088";
const SANS = "Segoe UI, Arial, sans-serif";
const MONO = "Consolas, monospace";
const esc = (s) => s.replace(/&/g, "&amp;");

// Gear that stands in for the "O" — geometry copied from the site wordmark.
function gear(cx, cy, size, color, opacity = 1) {
  const s = size / 100;
  const teeth = [0, 45, 90, 135, 180, 225, 270, 315]
    .map((d) => `<rect x="-8" y="-50" width="16" height="22" rx="3" transform="rotate(${d})"/>`)
    .join("");
  return `<g transform="translate(${cx} ${cy}) scale(${s})" fill="${color}" opacity="${opacity}">
    ${teeth}<circle r="33" fill="none" stroke="${color}" stroke-width="17"/></g>`;
}

// Sharp-toothed blueprint gear (star rim + concentric circles + crosshair),
// matching the app backdrop (src/components/blueprintTemplate.ts).
function bpGear(cx, cy, R, teeth, stroke, opacity) {
  const rin = R * 0.77, step = Math.PI / teeth;
  let d = "";
  for (let i = 0; i < teeth * 2; i++) {
    const r = i % 2 === 0 ? R : rin, a = i * step - Math.PI / 2;
    d += `${i ? "L" : "M"}${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)} `;
  }
  const arm = (R * 0.22).toFixed(1);
  return `<g fill="none" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round" opacity="${opacity}">
    <path stroke-width="1.4" d="${d}Z"/>
    <circle cx="${cx}" cy="${cy}" r="${(R * 0.80).toFixed(1)}"/>
    <circle cx="${cx}" cy="${cy}" r="${(R * 0.55).toFixed(1)}"/>
    <circle cx="${cx}" cy="${cy}" r="${(R * 0.31).toFixed(1)}"/>
    <circle cx="${cx}" cy="${cy}" r="${(R * 0.12).toFixed(1)}"/>
    <line x1="${cx - arm}" y1="${cy}" x2="${(cx + +arm).toFixed(1)}" y2="${cy}"/>
    <line x1="${cx}" y1="${cy - arm}" x2="${cx}" y2="${(cy + +arm).toFixed(1)}"/>
  </g>`;
}

// Measure rendered ink width of a text run with the real font, via render + trim.
async function measureWidth(text, { size, weight = 800, family = SANS, ls = 0 }) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="6000" height="${Math.ceil(size * 2)}">
    <text x="0" y="${Math.round(size * 1.2)}" font-family="${family}" font-weight="${weight}"
          font-size="${size}" letter-spacing="${ls}" xml:space="preserve" fill="#fff">${text}</text></svg>`;
  const { info } = await sharp(Buffer.from(svg)).trim().toBuffer({ resolveWithObject: true });
  return info.width;
}

// Feature-card icons, copied from the site (viewBox 0 0 32 32).
const ICONS = {
  collections: `<rect x="4" y="6" width="24" height="6" rx="1"/><rect x="4" y="14" width="24" height="6" rx="1"/><rect x="4" y="22" width="24" height="6" rx="1"/><path d="M8 9h3M8 17h3M8 25h3"/>`,
  specs: `<path d="M6 12 L20 12 L26 16 L20 20 L6 20 Z"/><path d="M6 8 L6 5 M26 8 L26 5"/><path d="M6 6.5 L26 6.5"/><path d="M11 24 L11 27 M21 24 L21 27"/>`,
  catalog: `<path d="M16 9 C12.5 6.5 8 6.5 4.5 7.8 L4.5 25 C8 23.7 12.5 23.7 16 26"/><path d="M16 9 C19.5 6.5 24 6.5 27.5 7.8 L27.5 25 C24 23.7 19.5 23.7 16 26"/><path d="M16 9 L16 26"/>`,
  sync: `<path d="M9 21a5 5 0 0 1 .6-9.96 7 7 0 0 1 13.2 2.1A4.5 4.5 0 0 1 22.5 21z"/><path d="M13 25.5h6"/><path d="M15 23.5 L13 25.5 L15 27.5"/>`,
  rotation: `<path d="M27 16a11 11 0 1 1-3.6-8.1"/><path d="M27 5v6h-6"/><circle cx="16" cy="16" r="2.4"/>`,
  themes: `<circle cx="16" cy="16" r="11"/><path d="M16 5 A11 11 0 0 1 16 27 Z" fill="${ACCENT}" stroke="none" opacity=".6"/>`,
};
function icon(name, x, y, size, color) {
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 32 32" fill="none"
    stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
}

// One framed phone (rounded screen inside a thin bezel) as an RGBA buffer.
const SW = 166, SH = 360, PAD = 9, RO = 30, RI = 22;
const PWID = SW + PAD * 2, PHGT = SH + PAD * 2;
async function makePhone(file) {
  const screen = await sharp(join(SRC, file)).resize(SW, SH, { fit: "cover" }).toBuffer();
  const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${SW}" height="${SH}"><rect width="${SW}" height="${SH}" rx="${RI}" ry="${RI}" fill="#fff"/></svg>`);
  const rounded = await sharp(screen).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
  const bezel = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${PWID}" height="${PHGT}">
    <rect x="0.75" y="0.75" width="${PWID - 1.5}" height="${PHGT - 1.5}" rx="${RO}" ry="${RO}"
      fill="#0d233d" stroke="${BORDER}" stroke-width="1.5"/></svg>`);
  return sharp(bezel).composite([{ input: rounded, left: PAD, top: PAD }]).png().toBuffer();
}

async function build() {
  // Wordmark: KNIF [gear] MATIC, left-aligned. Sized so the whole wordmark spans
  // the same width as the slogan line beneath it. Gear diameter and the gaps are
  // tied to the font size (0.88em / 0.06em), so total width scales linearly with F.
  const wx = 44, wyB = 86;
  const sloganSize = 12.5, sloganLS = 3.5;
  const sloganText = "YOUR KNIFE COLLECTION. ENGINEERED.";
  const sloganW = await measureWidth(sloganText, { size: sloganSize, weight: 600, family: MONO, ls: sloganLS });

  const F0 = 50;
  const [wK0, wM0] = await Promise.all([measureWidth("KNIF", { size: F0 }), measureWidth("MATIC", { size: F0 })]);
  const wordW0 = wK0 + wM0 + F0 * (0.88 + 2 * 0.06); // gear + two gaps
  const F = (F0 * sloganW) / wordW0;                 // scale to slogan width
  const G = F * 0.88, gpad = F * 0.06;
  const [wK] = await Promise.all([measureWidth("KNIF", { size: F })]);
  // Optical nudge: "F" leaves more open space on its right than "M" does on its
  // left, so equal geometric gaps look left-shifted. Push the gear right a touch.
  const gearDx = 4; // ≈ "M" left side bearing → puts the gear's center midway between F and M
  const gcx = wx + wK + gpad + gearDx + G / 2;
  const mStart = wx + wK + gpad + gearDx + G + gpad;

  const features = [
    { k: "collections", t: "Collections",       d: "Shelves, tiers, rotations" },
    { k: "specs",       t: "Detailed specs",     d: "Steel, size, weight, lock" },
    { k: "catalog",     t: "Built-in catalog",   d: "Popular knives, prefilled" },
    { k: "sync",        t: "Sync across devices", d: "Your catalog everywhere" },
    { k: "rotation",    t: "Daily rotation",     d: "A new knife each day" },
    { k: "themes",      t: "Multiple themes",    d: "Your look, your accent" },
  ];
  const colX = [44, 258];
  const rowY = [232, 300, 368]; // icon top of each row
  const cells = features.map((f, i) => {
    const x = colX[i % 2], y = rowY[Math.floor(i / 2)];
    return `${icon(f.k, x, y, 30, ACCENT)}
      <text x="${x + 40}" y="${y + 13}" font-family="${SANS}" font-weight="700" font-size="15" fill="${TEXT}">${esc(f.t)}</text>
      <text x="${x + 40}" y="${y + 30}" font-family="${MONO}" font-weight="600" font-size="11.5" letter-spacing="0.3" fill="${TEXT2}">${esc(f.d)}</text>`;
  }).join("\n");

  const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <radialGradient id="bg" cx="35%" cy="0%" r="130%">
        <stop offset="0%" stop-color="#123B63"/><stop offset="45%" stop-color="#0B2A4A"/><stop offset="100%" stop-color="#06182D"/>
      </radialGradient>
      <pattern id="fine" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="rgba(143,179,217,.06)" stroke-width="1"/></pattern>
      <pattern id="coarse" width="110" height="110" patternUnits="userSpaceOnUse"><path d="M110 0H0V110" fill="none" stroke="rgba(143,179,217,.10)" stroke-width="1"/></pattern>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <rect width="${W}" height="${H}" fill="url(#fine)"/>
    <rect width="${W}" height="${H}" fill="url(#coarse)"/>

    <!-- sharp-toothed blueprint gears: one big top-right, two smaller bottom-left -->
    ${bpGear(966, 52, 156, 18, "#7EC8F5", 0.14)}
    ${bpGear(35, 470, 72, 15, "#7EC8F5", 0.13)}
    ${bpGear(153, 498, 46, 12, "#7EC8F5", 0.13)}

    <g stroke="rgba(143,179,217,.5)" stroke-width="2" fill="none">
      <path d="M32 32 h34 M32 32 v34"/><path d="M${W - 32} 32 h-34 M${W - 32} 32 v34"/>
      <path d="M32 ${H - 32} h34 M32 ${H - 32} v-34"/><path d="M${W - 32} ${H - 32} h-34 M${W - 32} ${H - 32} v-34"/>
    </g>

    <!-- wordmark + slogan -->
    <text x="${wx}" y="${wyB}" font-family="${SANS}" font-weight="800" font-size="${F}" fill="${TEXT}">KNIF</text>
    ${gear(gcx, wyB - F * 0.36, G, TEXT)}
    <text x="${mStart}" y="${wyB}" font-family="${SANS}" font-weight="800" font-size="${F}" fill="${TEXT}">MATIC</text>
    <text x="${wx}" y="${wyB + 26}" font-family="${MONO}" font-weight="600" font-size="${sloganSize}" letter-spacing="${sloganLS}" fill="${TEXT2}" xml:space="preserve">${sloganText}</text>

    <!-- tagline -->
    <text x="${wx}" y="${wyB + 78}" font-family="${SANS}" font-weight="700" font-size="22" fill="${TEXT}">Track, organize, and manage</text>
    <text x="${wx}" y="${wyB + 108}" font-family="${SANS}" font-weight="700" font-size="22" fill="${TEXT}">your whole knife collection.</text>

    <!-- feature grid -->
    ${cells}

    <!-- bottom trust line -->
    <line x1="${wx}" y1="446" x2="464" y2="446" stroke="rgba(143,179,217,.28)" stroke-width="1"/>
    <text x="${wx}" y="468" font-family="${MONO}" font-weight="600" font-size="11.5" letter-spacing="1.5" fill="${MUTED}" xml:space="preserve">FREE  <tspan fill="${ACCENT}">·</tspan>  NO DATA SELLING  <tspan fill="${ACCENT}">·</tspan>  WORKS OFFLINE  <tspan fill="${ACCENT}">·</tspan>  GUEST MODE</text>
  </svg>`;

  const [homeP, contentsP, detailP] = await Promise.all([
    makePhone("homescreen.webp"),
    makePhone("collection 2.webp"),
    makePhone("knife details.webp"),
  ]);

  // Fanned overlap: two backs, front centered and raised.
  const backTop = 100, frontTop = 74;
  await sharp(Buffer.from(bg))
    .composite([
      { input: homeP,     left: 486, top: backTop },
      { input: detailP,   left: 816, top: backTop },
      { input: contentsP, left: 651, top: frontTop },
    ])
    .flatten({ background: "#06182D" })
    .removeAlpha()
    .png()
    .toFile(OUT);
  console.log("wrote", OUT);
}

build();
