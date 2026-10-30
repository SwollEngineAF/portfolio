"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden border-b border-border/80"
    >
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-64 size-[42rem] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:px-10 lg:pb-20 lg:pt-24">
        <div className="relative z-10 flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-card/70 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]"
          >
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.9)]" />
            SCADA · IT · Product Engineering
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="mt-8 font-display text-[clamp(4.1rem,11vw,8.6rem)] font-semibold leading-[0.82] tracking-[-0.085em] text-foreground"
          >
            Syahiid
            <br />
            <span className="text-accent">Rasidi.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            From airport operations and industrial automation to reliable IT and
            purposeful products, I work where systems meet people.
          </motion.p>
          <p className="mt-3 max-w-xl text-sm font-medium tracking-wide text-foreground/85 sm:text-base">
            SCADA · IT · product — solving real systems with quiet precision.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-[0_0_28px_hsl(var(--accent)/0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View selected work
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </motion.a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Get in touch
              <ArrowDown aria-hidden="true" className="size-3.5 -rotate-45" />
            </a>
          </motion.div>

          <div className="mt-12 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground sm:mt-16 sm:text-xs">
            <span aria-hidden="true" className="h-px w-10 bg-accent/70" />
            Working across airports, industry &amp; digital products
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center py-3 sm:py-7 lg:py-0">
          <div
            aria-hidden="true"
            className="absolute inset-[8%] rounded-full bg-accent/10 blur-[70px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[4%] rounded-full border border-white/10"
          />
          <motion.div
            aria-hidden="true"
            className="absolute inset-[8%] rounded-full border border-dashed border-accent/45"
            animate={{ rotate: 360 }}
            transition={{ duration: 36, ease: "linear", repeat: Infinity }}
          >
            <span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_18px_hsl(var(--accent)/0.9)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="relative z-10 my-8 aspect-[4/5] w-[70%] max-w-[330px] overflow-hidden rounded-[46%_46%_1.5rem_1.5rem] border border-white/15 bg-card shadow-[0_24px_100px_rgba(0,0,0,0.45)] sm:my-10"
          >
            <Image
              src="/assets/Portrait.png"
              alt="Portrait of Syahiid Rasidi"
              fill
              priority
              unoptimized={process.env.NODE_ENV !== "production"}
              sizes="(max-width: 768px) 70vw, 330px"
              className="object-cover object-[center_35%] grayscale contrast-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-white/5"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Systems in motion
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Engineering with purpose.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            className="absolute left-0 top-[23%] z-20 hidden rounded-xl border border-white/10 bg-background/85 px-4 py-3 shadow-xl backdrop-blur-md sm:block"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              First IT role
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-foreground">
              2006 <span className="text-accent">→</span> now
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            className="absolute bottom-[20%] right-0 z-20 hidden max-w-40 rounded-xl border border-white/10 bg-background/85 px-4 py-3 shadow-xl backdrop-blur-md sm:block"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              Focus
            </p>
            <p className="mt-1 text-xs font-semibold leading-5 text-foreground">
              Critical systems. Human outcomes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
