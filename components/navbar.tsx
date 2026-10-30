"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useScroll } from "motion/react";

const NavBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/75 backdrop-blur-xl">
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
      />
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <a
          href="#top"
          aria-label="Syahiid Rasidi, back to top"
          className="flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="font-display text-xl font-bold tracking-[-0.08em] text-foreground">
            SR<span className="text-accent">.</span>
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-foreground min-[420px]:inline">
            Syahiid Rasidi
          </span>
        </a>

        <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground sm:gap-5 sm:text-sm md:gap-6 lg:gap-7">
          <a className="transition-colors hover:text-accent" href="#projects">
            Work
          </a>
          <a
            className="hidden transition-colors hover:text-accent sm:inline-flex"
            href="#about-me"
          >
            About
          </a>
          <a
            className="hidden transition-colors hover:text-accent md:inline-flex"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="hidden transition-colors hover:text-accent lg:inline-flex"
            href="#skills"
          >
            Skills
          </a>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:px-4 sm:text-sm"
        >
          Contact
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
