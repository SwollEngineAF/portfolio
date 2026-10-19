"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="mb-4">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ochre">
          Career
        </p>
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Meaningful work
        </h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          I&apos;ve been working since high school. Here&apos;s a timeline of
          the journey.
        </p>
      </div>

      <div ref={ref} className="relative pb-8 pt-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start pt-12 md:flex-row md:gap-10 md:pt-28"
          >
            <div
              className={`z-30 flex max-w-xs flex-col items-center self-start md:w-full md:max-w-sm md:flex-row ${
                index === 0 ? "top-20" : "top-28"
              } md:sticky`}
            >
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-background">
                <div className="h-2 w-2 rounded-full bg-ochre" />
              </div>
              <h3 className="hidden font-display text-xl font-medium text-muted-foreground md:block md:pl-16 md:text-4xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-16 pr-0 md:pl-4">
              <h3 className="mb-4 block text-left font-display text-2xl font-medium text-muted-foreground md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-px overflow-hidden bg-border [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-px rounded-full bg-gradient-to-t from-ochre via-ochre/60 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
