import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Helper to create true ICO file with embedded PNG frames
function createIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(numImages, 4); // count

  let offset = 6 + 16 * numImages;
  const dirEntries = [];

  for (const { size, buffer } of pngBuffers) {
    const dir = Buffer.alloc(16);
    dir.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
    dir.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 = 256)
    dir.writeUInt8(0, 2); // color count
    dir.writeUInt8(0, 3); // reserved
    dir.writeUInt16LE(1, 4); // planes
    dir.writeUInt16LE(32, 6); // bpp
    dir.writeUInt32LE(buffer.length, 8); // size of image data
    dir.writeUInt32LE(offset, 12); // offset
    dirEntries.push(dir);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map((p) => p.buffer)]);
}

async function generate() {
  const logoSvgPath = path.join(rootDir, 'public', 'images', 'logos', 'logo.svg');
  let svgContent = fs.readFileSync(logoSvgPath, 'utf8');

  // Normalize SVG with viewBox and dimensions
  if (!svgContent.includes('viewBox')) {
    svgContent = svgContent.replace(/<svg\b([^>]*)>/i, '<svg $1 viewBox="0 0 128 127">');
  }

  const svgBuffer = Buffer.from(svgContent);

  // Generate clean SVGs for public and app
  fs.writeFileSync(path.join(rootDir, 'public', 'icon.svg'), svgContent, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon.svg'), svgContent, 'utf8');

  const sizes = [16, 32, 48, 96, 180, 192, 512];
  const pngBuffers = {};

  for (const size of sizes) {
    // We give minimal optical margin (approx 2-3%) so edges don't clip while remaining maximum boldness/size
    const pad = Math.max(0, Math.round(size * 0.02));
    const innerSize = size - pad * 2;

    const rendered = await sharp(svgBuffer, { density: 300 })
      .resize(innerSize, innerSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .extend({
        top: pad,
        bottom: size - innerSize - pad,
        left: pad,
        right: size - innerSize - pad,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ compressionLevel: 9 })
      .toBuffer();

    pngBuffers[size] = rendered;
  }

  // Create multi-size ICO (16, 32, 48)
  const icoBuffer = createIco([
    { size: 16, buffer: pngBuffers[16] },
    { size: 32, buffer: pngBuffers[32] },
    { size: 48, buffer: pngBuffers[48] },
  ]);

  // Target files to write
  const writes = [
    { dest: path.join(rootDir, 'public', 'favicon.ico'), data: icoBuffer },
    { dest: path.join(rootDir, 'app', 'favicon.ico'), data: icoBuffer },
    { dest: path.join(rootDir, 'public', 'favicon.png'), data: pngBuffers[512] },
    { dest: path.join(rootDir, 'public', 'icon.png'), data: pngBuffers[512] },
    { dest: path.join(rootDir, 'app', 'icon.png'), data: pngBuffers[512] },
    { dest: path.join(rootDir, 'public', 'favicon-16x16.png'), data: pngBuffers[16] },
    { dest: path.join(rootDir, 'public', 'favicon-32x32.png'), data: pngBuffers[32] },
    { dest: path.join(rootDir, 'public', 'favicon-48x48.png'), data: pngBuffers[48] },
    { dest: path.join(rootDir, 'public', 'favicon-96x96.png'), data: pngBuffers[96] },
    { dest: path.join(rootDir, 'public', 'favicon-192x192.png'), data: pngBuffers[192] },
    { dest: path.join(rootDir, 'public', 'favicon-512x512.png'), data: pngBuffers[512] },
    { dest: path.join(rootDir, 'public', 'apple-touch-icon.png'), data: pngBuffers[180] },
    { dest: path.join(rootDir, 'public', 'apple-touch-icon-precomposed.png'), data: pngBuffers[180] },
    { dest: path.join(rootDir, 'app', 'apple-icon.png'), data: pngBuffers[180] },
    { dest: path.join(rootDir, 'public', 'images', 'logos', 'arsalynk-mark-512.png'), data: pngBuffers[512] },
  ];

  for (const w of writes) {
    fs.writeFileSync(w.dest, w.data);
    console.log(`✓ Wrote ${path.relative(rootDir, w.dest)} (${w.data.length} bytes)`);
  }

  console.log('\nAll favicons generated successfully from yellow logo.svg!');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
