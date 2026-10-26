#!/usr/bin/env python3
"""Rebuild components/low-poly-portrait-data.ts from public/assets/Portrait.png.

The runtime palette lives in components/low-poly-portrait.tsx. This script only
freezes the triangulation: a 4:5 center crop, edge-weighted points, and a
relief normal taken from the blurred luminance.
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter
from scipy.spatial import Delaunay

ROOT = Path(__file__).resolve().parents[1]
PORTRAIT = ROOT / "public" / "assets" / "Portrait.png"
OUT = ROOT / "components" / "low-poly-portrait-data.ts"


def facets_from_portrait() -> list[dict]:
    image = Image.open(PORTRAIT).convert("RGB")
    rgb = np.asarray(image).astype(np.float32)
    luminance = (0.2126 * rgb[:, :, 0] + 0.7152 * rgb[:, :, 1] + 0.0722 * rgb[:, :, 2]) / 255.0
    height, width = luminance.shape
    crop = luminance[:, int(width * 0.10) : int(width * 0.90)]
    crop_h, crop_w = crop.shape

    blurred = np.asarray(
        Image.fromarray((crop * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(5))
    ).astype(np.float32) / 255.0
    grad_y, grad_x = np.gradient(blurred)

    edge = np.hypot(*np.gradient(crop))
    edge /= edge.max() + 1e-8
    edge = (
        np.asarray(
            Image.fromarray((edge * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.15))
        ).astype(np.float32)
        / 255.0
    )

    rng = np.random.default_rng(11)
    points: list[tuple[float, float]] = []
    for x in np.linspace(0, crop_w - 1, 11):
        points += [(float(x), 0.0), (float(x), float(crop_h - 1))]
    for y in np.linspace(0, crop_h - 1, 13):
        points += [(0.0, float(y)), (float(crop_w - 1), float(y))]

    weight = (edge ** 1.25) + 0.01
    weight /= weight.sum()
    chosen = rng.choice(weight.size, size=16000, replace=False, p=weight.ravel())
    ys, xs = np.unravel_index(chosen, weight.shape)
    order = np.argsort(-edge[ys, xs])

    accepted: list[tuple[float, float]] = []
    min_lo, min_hi, target = 12.0, 50.0, 170
    for index in order:
        x, y = float(xs[index]), float(ys[index])
        strength = float(edge[int(y), int(x)])
        min_dist = min_hi - (min_hi - min_lo) * min(1.0, strength * 6.0)
        if all((x - ax) ** 2 + (y - ay) ** 2 >= min_dist ** 2 for ax, ay in accepted):
            accepted.append((x, y))
            if len(accepted) >= target:
                break
    points.extend(accepted)

    for ax, ay in (
        (0.34, 0.34), (0.41, 0.328), (0.47, 0.35), (0.56, 0.322), (0.64, 0.318), (0.71, 0.34),
        (0.32, 0.40), (0.37, 0.392), (0.42, 0.398), (0.48, 0.404),
        (0.54, 0.388), (0.60, 0.382), (0.66, 0.386), (0.72, 0.396),
        (0.50, 0.44), (0.50, 0.50), (0.45, 0.548), (0.55, 0.538), (0.50, 0.568),
        (0.42, 0.618), (0.50, 0.632), (0.58, 0.616), (0.46, 0.648), (0.54, 0.644), (0.50, 0.668),
        (0.50, 0.73), (0.43, 0.70), (0.57, 0.70),
        (0.40, 0.835), (0.50, 0.80), (0.60, 0.825), (0.50, 0.885), (0.465, 0.925), (0.535, 0.925),
        (0.64, 0.19), (0.50, 0.15), (0.28, 0.24),
    ):
        points.append((ax * (crop_w - 1), ay * (crop_h - 1)))

    cloud = np.unique(np.round(np.array(points), 1), axis=0)
    triangulation = Delaunay(cloud)
    strength = 90.0
    facets: list[dict] = []

    for a, b, c in triangulation.simplices:
        poly = cloud[[a, b, c]]
        cx, cy = poly.mean(axis=0)
        if not (-2 <= cx <= crop_w + 2 and -2 <= cy <= crop_h + 2):
            continue
        v0, v1, v2 = poly
        samples: list[float] = []
        grads: list[tuple[float, float]] = []
        min_x, min_y = poly.min(axis=0)
        max_x, max_y = poly.max(axis=0)
        for yy in np.linspace(min_y, max_y, 8):
            for xx in np.linspace(min_x, max_x, 8):
                den = (v1[1] - v2[1]) * (v0[0] - v2[0]) + (v2[0] - v1[0]) * (v0[1] - v2[1])
                if abs(den) < 1e-8:
                    continue
                wa = ((v1[1] - v2[1]) * (xx - v2[0]) + (v2[0] - v1[0]) * (yy - v2[1])) / den
                wb = ((v2[1] - v0[1]) * (xx - v2[0]) + (v0[0] - v2[0]) * (yy - v2[1])) / den
                wc = 1 - wa - wb
                if wa >= -0.02 and wb >= -0.02 and wc >= -0.02:
                    ix = int(np.clip(xx, 0, crop_w - 1))
                    iy = int(np.clip(yy, 0, crop_h - 1))
                    samples.append(float(crop[iy, ix]))
                    grads.append((float(grad_x[iy, ix]), float(grad_y[iy, ix])))
        if len(samples) < 2:
            ix = int(np.clip(cx, 0, crop_w - 1))
            iy = int(np.clip(cy, 0, crop_h - 1))
            samples = [float(crop[iy, ix])]
            grads = [(float(grad_x[iy, ix]), float(grad_y[iy, ix]))]

        mean_l = float(np.mean(samples))
        gxm, gym = np.mean(grads, axis=0)
        nx, ny, nz = -gxm * strength, -gym * strength, 1.0
        norm = (nx * nx + ny * ny + nz * nz) ** 0.5
        flat = [round(float(v), 2) for x, y in poly for v in (x / crop_w * 800, y / crop_h * 1000)]
        facets.append(
            {
                "p": flat,
                "l": round(mean_l, 4),
                "n": [round(nx / norm, 4), round(ny / norm, 4), round(nz / norm, 4)],
                "c": [round(float(cx) / crop_w, 4), round(float(cy) / crop_h, 4)],
            }
        )
    return facets


def emit(facets: list[dict]) -> str:
    lines = [
        "/**",
        " * Low-poly relief of the studio portrait.",
        " * Triangulated from public/assets/Portrait.png, center-cropped to 4:5.",
        " * p: triangle in a 800×1000 viewBox. l: luminance. n: relief normal. c: centroid in 0–1.",
        " * Built by scripts/build-low-poly-portrait.py — regenerate rather than hand-edit.",
        " */",
        "export type PortraitFacet = {",
        "  p: readonly [number, number, number, number, number, number];",
        "  l: number;",
        "  n: readonly [number, number, number];",
        "  c: readonly [number, number];",
        "};",
        "",
        "export const PORTRAIT_VIEW = { w: 800, h: 1000 } as const;",
        "",
        "export const PORTRAIT_FACETS: readonly PortraitFacet[] = [",
    ]
    for facet in facets:
        points = ", ".join(str(v) for v in facet["p"])
        normal = ", ".join(str(v) for v in facet["n"])
        centroid = ", ".join(str(v) for v in facet["c"])
        lines.append(
            f"  {{ p: [{points}], l: {facet['l']}, n: [{normal}], c: [{centroid}] }},"
        )
    lines.append("];")
    lines.append("")
    return "\n".join(lines)


if __name__ == "__main__":
    OUT.write_text(emit(facets_from_portrait()))
    print(f"wrote {OUT}")
