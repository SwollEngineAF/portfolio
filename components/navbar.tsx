"use client";

import { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";

type NavBarProps = {
  toggleDarkMode: () => void;
};

const NavBar: React.FC<NavBarProps> = ({ toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "border-b border-border/80 bg-background/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 md:h-16 md:px-12 lg:px-16">
        <a
          href="#"
          className={`font-display text-base tracking-tight text-foreground transition-opacity duration-500 md:text-lg ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!scrolled}
          tabIndex={scrolled ? 0 : -1}
        >
          Syahiid Rasidi
        </a>

        <div className="flex items-center gap-5 md:gap-8">
          <a
            href="#projects"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-ochre sm:inline"
          >
            Work
          </a>
          <a
            href="#about-me"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-ochre sm:inline"
          >
            About
          </a>
          <a
            href="mailto:syahiid.rasidi@gmail.com"
            className="text-sm text-muted-foreground transition-colors hover:text-ochre"
          >
            Email
          </a>
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="text-foreground/80 transition-colors hover:text-ochre"
          >
            <CgDarkMode className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
