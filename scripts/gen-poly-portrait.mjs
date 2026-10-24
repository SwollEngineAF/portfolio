import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PNG } from "pngjs";
import Delaunator from "delaunator";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const inputPath = path.join(root, "public/assets/Portrait.png");
const outPath = path.join(root, "components/polygon-portrait.tsx");

const TARGET_W = 400;
const TARGET_H = 500;
const EDGE_POINTS = 10;
const GRID_X = 8;
const GRID_Y = 10;
const FEATURE_POINTS = 48;
const JITTER = 0.42;

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function sample(png, x, y) {
  const xi = Math.max(0, Math.min(png.width - 1, Math.round(x)));
  const yi = Math.max(0, Math.min(png.height - 1, Math.round(y)));
  const i = (png.width * yi + xi) << 2;
  return {
    r: png.data[i],
    g: png.data[i + 1],
    b: png.data[i + 2],
    a: png.data[i + 3],
  };
}

function shadeBucket(L) {
  // 0 = darkest ink … 7 = brightest highlight
  if (L < 28) return 0;
  if (L < 55) return 1;
  if (L < 85) return 2;
  if (L < 120) return 3;
  if (L < 155) return 4;
  if (L < 190) return 5;
  if (L < 225) return 6;
  return 7;
}

function rand(seed) {
  let t = (seed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

const png = PNG.sync.read(fs.readFileSync(inputPath));
const sx = png.width / TARGET_W;
const sy = png.height / TARGET_H;

const points = [];
const key = new Set();

function addPoint(x, y) {
  const nx = Math.max(0, Math.min(TARGET_W, x));
  const ny = Math.max(0, Math.min(TARGET_H, y));
  const k = `${Math.round(nx * 2) / 2},${Math.round(ny * 2) / 2}`;
  if (key.has(k)) return;
  key.add(k);
  points.push([nx, ny]);
}

// Corners + edge points
addPoint(0, 0);
addPoint(TARGET_W, 0);
addPoint(0, TARGET_H);
addPoint(TARGET_W, TARGET_H);
for (let i = 1; i < EDGE_POINTS; i++) {
  const t = i / EDGE_POINTS;
  addPoint(t * TARGET_W, 0);
  addPoint(t * TARGET_W, TARGET_H);
  addPoint(0, t * TARGET_H);
  addPoint(TARGET_W, t * TARGET_H);
}

// Jittered grid denser on face region
for (let gy = 0; gy <= GRID_Y; gy++) {
  for (let gx = 0; gx <= GRID_X; gx++) {
    const baseX = (gx / GRID_X) * TARGET_W;
    const baseY = (gy / GRID_Y) * TARGET_H;
    const seed = gx * 1009 + gy * 9176;
    const jx = (rand(seed) - 0.5) * (TARGET_W / GRID_X) * JITTER;
    const jy = (rand(seed + 1) - 0.5) * (TARGET_H / GRID_Y) * JITTER;
    // denser in center face band
    const cx = TARGET_W * 0.5;
    const cy = TARGET_H * 0.38;
    const dx = (baseX - cx) / (TARGET_W * 0.35);
    const dy = (baseY - cy) / (TARGET_H * 0.32);
    const inFace = dx * dx + dy * dy < 1.1;
    if (!inFace && rand(seed + 2) < 0.35) continue;
    addPoint(baseX + jx, baseY + jy);
  }
}

// Extra feature points biased by local contrast (edges)
const candidates = [];
for (let y = 2; y < TARGET_H - 2; y += 3) {
  for (let x = 2; x < TARGET_W - 2; x += 3) {
    const c = sample(png, x * sx, y * sy);
    const r = sample(png, (x + 2) * sx, y * sy);
    const d = sample(png, x * sx, (y + 2) * sy);
    const Lc = luminance(c.r, c.g, c.b);
    const score =
      Math.abs(Lc - luminance(r.r, r.g, r.b)) +
      Math.abs(Lc - luminance(d.r, d.g, d.b));
    if (score > 18) candidates.push({ x, y, score });
  }
}
candidates.sort((a, b) => b.score - a.score);
for (let i = 0; i < Math.min(FEATURE_POINTS, candidates.length); i++) {
  const c = candidates[i];
  const j = rand(i * 97);
  addPoint(c.x + (j - 0.5) * 4, c.y + (rand(i * 131) - 0.5) * 4);
}

const delaunay = Delaunator.from(points);
const triangles = delaunay.triangles;
const polys = [];

for (let i = 0; i < triangles.length; i += 3) {
  const a = points[triangles[i]];
  const b = points[triangles[i + 1]];
  const c = points[triangles[i + 2]];
  const cx = (a[0] + b[0] + c[0]) / 3;
  const cy = (a[1] + b[1] + c[1]) / 3;
  // sample a few points inside triangle for stable color
  const samples = [
    [cx, cy],
    [(a[0] + cx) / 2, (a[1] + cy) / 2],
    [(b[0] + cx) / 2, (b[1] + cy) / 2],
    [(c[0] + cx) / 2, (c[1] + cy) / 2],
  ];
  let Lsum = 0;
  for (const [px, py] of samples) {
    const col = sample(png, px * sx, py * sy);
    Lsum += luminance(col.r, col.g, col.b);
  }
  const L = Lsum / samples.length;
  const bucket = shadeBucket(L);
  const pts = [
    a[0].toFixed(1),
    a[1].toFixed(1),
    b[0].toFixed(1),
    b[1].toFixed(1),
    c[0].toFixed(1),
    c[1].toFixed(1),
  ].join(" ");
  polys.push({ pts, bucket, L });
}

// Sort dark-to-light so highlights paint on top
polys.sort((a, b) => a.bucket - b.bucket);

const polygonLines = polys
  .map(
    (p) =>
      `        <polygon points="${p.pts}" className="pp-s${p.bucket}" />`
  )
  .join("\n");

const tsx = `"use client";

import { cn } from "@/lib/utils";

type PolygonPortraitProps = {
  className?: string;
  title?: string;
};

/**
 * Low-poly portrait derived from the site portrait photo.
 * Shade classes map to CSS variables that flip with .dark.
 */
export default function PolygonPortrait({
  className,
  title = "Syahiid Rasidi",
}: PolygonPortraitProps) {
  return (
    <svg
      viewBox="0 0 ${TARGET_W} ${TARGET_H}"
      role="img"
      aria-label={title}
      className={cn("polygon-portrait h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <rect width="${TARGET_W}" height="${TARGET_H}" className="pp-bg" />
${polygonLines}
    </svg>
  );
}
`;

fs.writeFileSync(outPath, tsx);
console.log(
  `Wrote ${outPath} with ${polys.length} polygons from ${points.length} points`
);
