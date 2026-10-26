"use client";

import { useState, useEffect } from "react";
import AboutMe from "./aboutme";
import Skills from "./skills";
import { RecentProjects } from "./recentprojects";
import SocialMedia from "./socialmedia";
import NavBar from "./navbar";
import HeroSection from "./herosection";

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div className="relative min-h-[100dvh] bg-background text-foreground">
      <NavBar toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <div className="mx-auto flex max-w-5xl flex-col gap-24 px-6 py-20 md:gap-32 md:px-12 md:py-28 lg:px-16">
        <AboutMe isDarkMode={isDarkMode} />
        <Skills />
        <RecentProjects />
        <SocialMedia />
      </div>
      <footer className="mx-auto max-w-5xl border-t border-border px-6 py-10 md:px-12 lg:px-16">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Syahiid Rasidi
        </p>
      </footer>
    </div>
  );
}
