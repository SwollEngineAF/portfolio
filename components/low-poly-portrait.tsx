"use client";

import { useLayoutEffect, useRef } from "react";
import {
  PORTRAIT_FACETS,
  PORTRAIT_VIEW,
  type PortraitFacet,
} from "./low-poly-portrait-data";

/**
 * Faceted portrait. Light mode holds a warm ink studio;
 * dark mode re-lights the same planes in ochre. The pointer
 * moves that lamp, and a theme change sweeps it across the face.
 */

type RGB = [number, number, number];
type Stop = readonly [number, RGB];
type Lamp = { x: number; y: number };

const LIGHT: readonly Stop[] = [
  [0.0, [24, 19, 15]],
  [0.18, [48, 36, 27]],
  [0.36, [102, 74, 50]],
  [0.52, [158, 118, 82]],
  [0.7, [204, 170, 140]],
  [0.86, [232, 216, 200]],
  [1, [250, 246, 240]],
];

const DARK: readonly Stop[] = [
  [0.0, [8, 7, 6]],
  [0.22, [16, 13, 11]],
  [0.4, [34, 26, 19]],
  [0.52, [72, 46, 26]],
  [0.66, [148, 92, 42]],
  [0.8, [204, 146, 72]],
  [0.92, [232, 196, 140]],
  [1, [248, 232, 210]],
];

const OCHRE: RGB = [176, 98, 48];
const GOLD: RGB = [236, 178, 98];

const REST_LIGHT: Lamp = { x: 0.7, y: 0.2 };
const REST_DARK: Lamp = { x: 0.62, y: 0.16 };
const LAMP_RADIUS = 0.3;

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

function mixStops(t: number, stops: readonly Stop[]): RGB {
  const u = clamp01(t);
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, c0] = stops[i];
    const [t1, c1] = stops[i + 1];
    if (u <= t1 || i === stops.length - 2) {
      const span = t1 - t0;
      const k = span === 0 ? 0 : clamp01((u - t0) / span);
      return [
        c0[0] + (c1[0] - c0[0]) * k,
        c0[1] + (c1[1] - c0[1]) * k,
        c0[2] + (c1[2] - c0[2]) * k,
      ];
    }
  }
  return stops[stops.length - 1][1];
}

function lerpRGB(a: RGB, b: RGB, t: number): RGB {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

function shade(facet: PortraitFacet, theme: number, lamp: Lamp): string {
  const { l, n, c } = facet;
  const lx = lamp.x - c[0];
  const ly = lamp.y - c[1];
  const lz = 0.45;
  const ln = Math.hypot(lx, ly, lz) || 1;
  const lambert = Math.max(0, (n[0] * lx + n[1] * ly + n[2] * lz) / ln);
  const pool = Math.exp(
    -((lamp.x - c[0]) ** 2 + (lamp.y - c[1]) ** 2) / (LAMP_RADIUS * LAMP_RADIUS),
  );
  const tLight = clamp01(l * (0.9 + 0.16 * lambert));
  const tDark = clamp01(l * (0.86 + 0.22 * lambert));
  const base = lerpRGB(mixStops(tLight, LIGHT), mixStops(tDark, DARK), theme);
  const accent = lerpRGB(OCHRE, GOLD, theme);
  const gain = (0.62 + 0.28 * theme) * (0.18 + 0.82 * l ** 0.55);
  const col = lerpRGB(base, accent, pool * gain);
  return `rgb(${Math.round(col[0])},${Math.round(col[1])},${Math.round(col[2])})`;
}

type LowPolyPortraitProps = {
  dark: boolean;
};

const LowPolyPortrait = ({ dark }: LowPolyPortraitProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const polys = useRef<SVGPolygonElement[]>([]);
  const lamp = useRef<Lamp>({ ...REST_LIGHT });
  const lampTarget = useRef<Lamp>({ ...REST_LIGHT });
  const theme = useRef(0);
  const themeTarget = useRef(0);
  const hovering = useRef(false);
  const reduceMotion = useRef(false);
  const sawDark = useRef(dark);
  const ready = useRef(false);
  const raf = useRef(0);

  const paint = () => {
    const nodes = polys.current;
    const t = theme.current;
    const current = lamp.current;
    for (let i = 0; i < nodes.length; i++) {
      const color = shade(PORTRAIT_FACETS[i], t, current);
      nodes[i].setAttribute("fill", color);
      nodes[i].setAttribute("stroke", color);
    }
  };

  const settle = () => {
    const ease = reduceMotion.current ? 1 : 0.085;
    lamp.current.x += (lampTarget.current.x - lamp.current.x) * ease;
    lamp.current.y += (lampTarget.current.y - lamp.current.y) * ease;
    theme.current += (themeTarget.current - theme.current) * (reduceMotion.current ? 1 : 0.07);
    const dx = lampTarget.current.x - lamp.current.x;
    const dy = lampTarget.current.y - lamp.current.y;
    const dt = themeTarget.current - theme.current;
    return dx * dx + dy * dy < 0.000004 && dt * dt < 0.000016;
  };

  const kick = () => {
    if (raf.current) return;
    const step = () => {
      const done = settle();
      paint();
      if (done) {
        lamp.current.x = lampTarget.current.x;
        lamp.current.y = lampTarget.current.y;
        theme.current = themeTarget.current;
        paint();
        raf.current = 0;
        return;
      }
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  };
  const kickRef = useRef(kick);
  kickRef.current = kick;

  useLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    if (polys.current.length === 0) {
      polys.current = Array.from(svg.querySelectorAll("polygon"));
    }
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    themeTarget.current = dark ? 1 : 0;
    const rest = dark ? REST_DARK : REST_LIGHT;

    if (!ready.current) {
      ready.current = true;
      sawDark.current = dark;
      theme.current = themeTarget.current;
      lamp.current = { ...rest };
      lampTarget.current = { ...rest };
      paint();
      return;
    }

    // A theme change carries the lamp across the face before the browser paints.
    if (!hovering.current) {
      if (sawDark.current !== dark && !reduceMotion.current) {
        lamp.current = dark ? { x: 0.16, y: 0.46 } : { x: 0.84, y: 0.4 };
      }
      lampTarget.current = { ...rest };
    }
    sawDark.current = dark;
    paint();
    kickRef.current();

    return () => {
      cancelAnimationFrame(raf.current);
      raf.current = 0;
    };
  }, [dark]);

  const pointFromEvent = (event: React.PointerEvent<SVGSVGElement>): Lamp => {
    const rect = event.currentTarget.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
    };
  };

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${PORTRAIT_VIEW.w} ${PORTRAIT_VIEW.h}`}
      role="img"
      aria-label="Low-poly portrait of Syahiid Rasidi"
      className="h-full w-full"
      onPointerMove={(event) => {
        hovering.current = true;
        lampTarget.current = pointFromEvent(event);
        kickRef.current();
      }}
      onPointerLeave={() => {
        hovering.current = false;
        lampTarget.current =
          themeTarget.current > 0.5 ? { ...REST_DARK } : { ...REST_LIGHT };
        kickRef.current();
      }}
    >
      <defs>
        <filter
          id="portrait-grain"
          x="0"
          y="0"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.55"
            numOctaves="3"
            seed="7"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix in="noise" type="saturate" values="0" result="gray" />
          <feComposite
            in="SourceGraphic"
            in2="gray"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="0.92"
            k4="-0.46"
          />
        </filter>
      </defs>
      <g filter="url(#portrait-grain)">
        {PORTRAIT_FACETS.map((facet, index) => {
          const color = shade(facet, dark ? 1 : 0, dark ? REST_DARK : REST_LIGHT);
          const [x1, y1, x2, y2, x3, y3] = facet.p;
          return (
            <polygon
              key={index}
              points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
              fill={color}
              stroke={color}
              strokeWidth={1.25}
              strokeLinejoin="round"
            />
          );
        })}
      </g>
    </svg>
  );
};

export default LowPolyPortrait;
