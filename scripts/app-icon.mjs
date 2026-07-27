// Builds the Knifomatic Android adaptive icon (+ iOS square) from the brass
// emblem on the signature blueprint backdrop, with the emblem sized to the
// adaptive safe zone. Pass "final" to write into the app's assets; otherwise
// previews are written to OUT_PREVIEW.
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = "C:/Users/kotom/Desktop/WBC-Projects/knifeapp/assets";
const PLAY = "C:/Users/kotom/Desktop/WBC-Projects/website screens/play-store";
const PREVIEW = "C:/Users/kotom/AppData/Local/Temp/claude/C--Users-kotom-Desktop-WBC-Projects-knifeapp/6f6e2828-4b7b-434d-9519-348b080761e3/scratchpad";
const FINAL = process.argv[2] === "final";
const OUT = FINAL ? ASSETS : PREVIEW;

const S = 1024;
// Adaptive safe zone: 108dp canvas, ~66dp guaranteed-visible circle = 625px.
// The Android launcher foreground must stay inside it so circle/squircle masks
// never clip the main gear. Play Store and iOS icons are shown as a rounded
// SQUARE (no circle crop), so the emblem can fill much more of the frame.
const EMBLEM_W = 610;        // adaptive launcher foreground (circle-safe)
const EMBLEM_W_SQUARE = 955; // iOS + Play Store square icons (near full-bleed)

// Plain blueprint backdrop: signature-blue gradient (same stops as the feature
// graphic) + a clear, fairly large grid. No decorative gears — only the emblem.
function backdropSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
    <defs>
      <radialGradient id="bg" cx="50%" cy="0%" r="130%">
        <stop offset="0%" stop-color="#123B63"/>
        <stop offset="45%" stop-color="#0B2A4A"/>
        <stop offset="100%" stop-color="#06182D"/>
      </radialGradient>
      <pattern id="grid" width="171" height="171" patternUnits="userSpaceOnUse">
        <path d="M171 0H0V171" fill="none" stroke="rgba(143,179,217,.20)" stroke-width="2.2"/>
      </pattern>
    </defs>
    <rect width="${S}" height="${S}" fill="url(#bg)"/>
    <rect width="${S}" height="${S}" fill="url(#grid)"/>
  </svg>`;
}

// Emblem, trimmed and scaled to `width`, centered on a transparent SxS canvas.
async function emblemLayer(width) {
  const trimmed = await sharp(join(ASSETS, "loading-icon.png"))
    .trim({ threshold: 12 })
    .resize({ width })
    .toBuffer();
  const meta = await sharp(trimmed).metadata();
  const left = Math.round((S - meta.width) / 2);
  const top = Math.round((S - meta.height) / 2);
  return sharp({ create: { width: S, height: S, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: trimmed, left, top }])
    .png()
    .toBuffer();
}

// White silhouette of the emblem (for the Android themed / monochrome icon).
async function monochromeLayer() {
  const trimmed = await sharp(join(ASSETS, "loading-icon.png"))
    .trim({ threshold: 12 })
    .resize({ width: EMBLEM_W })
    .toBuffer();
  const meta = await sharp(trimmed).metadata();
  const alpha = await sharp(trimmed).ensureAlpha().extractChannel("alpha").threshold(80).toBuffer();
  const white = await sharp({ create: { width: meta.width, height: meta.height, channels: 3, background: "#ffffff" } })
    .joinChannel(alpha).png().toBuffer();
  const left = Math.round((S - meta.width) / 2);
  const top = Math.round((S - meta.height) / 2);
  return sharp({ create: { width: S, height: S, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: white, left, top }]).png().toBuffer();
}

async function main() {
  const backdrop = await sharp(Buffer.from(backdropSvg())).png().toBuffer();
  const fg = await emblemLayer(EMBLEM_W);            // adaptive launcher foreground
  const fgBig = await emblemLayer(EMBLEM_W_SQUARE);  // larger emblem for square icons
  const mono = await monochromeLayer();

  // Composited square (iOS + Play + preview), no alpha — larger emblem.
  const square = await sharp(backdrop).composite([{ input: fgBig }]).flatten({ background: "#06182D" }).removeAlpha().png().toBuffer();

  if (FINAL) {
    await sharp(backdrop).png().toFile(join(ASSETS, "android-icon.png"));           // backgroundImage
    await sharp(fg).png().toFile(join(ASSETS, "android-icon-foreground.png"));      // foregroundImage
    await sharp(mono).png().toFile(join(ASSETS, "android-icon-monochrome.png"));    // monochromeImage
    await sharp(square).png().toFile(join(ASSETS, "ios-icon.png"));                 // iOS square
    // Google Play Store listing icon: 512x512, square, no alpha.
    await sharp(square).resize(512, 512).removeAlpha().png().toFile(join(PLAY, "play-store-icon-512.png"));
    console.log("wrote final icons to", ASSETS, "and Play icon to", PLAY);
  } else {
    await sharp(backdrop).png().toFile(join(OUT, "ic_background.png"));
    await sharp(fg).png().toFile(join(OUT, "ic_foreground.png"));
    await sharp(square).png().toFile(join(OUT, "ic_square.png")); // the actual (square) icon
    // Safe-zone check only: how a round launcher would mask the square asset.
    const circle = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}"><circle cx="${S/2}" cy="${S/2}" r="${S/2}" fill="#fff"/></svg>`);
    await sharp(square).composite([{ input: circle, blend: "dest-in" }]).png().toFile(join(OUT, "ic_check_circle.png"));
    console.log("wrote previews to", OUT);
  }
}

main();
