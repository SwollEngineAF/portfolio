"use client";


import { useState, useEffect } from "react";
import HeroSection from "./herosection";
import AboutMe from "./aboutme";
import Skills from "./skills";
import { RecentProjects } from "./recentprojects";
import SocialMedia from "./socialmedia";
import NavBar from "./navbar";

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isDarkMode ? "bg-background-dark text-foreground-dark" : "bg-background text-foreground"}`}>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col gap-12 md:gap-16">
        <NavBar toggleDarkMode={toggleDarkMode} />
        <HeroSection isDarkMode={isDarkMode} />
        <AboutMe />
        <Skills />
        <RecentProjects />
        <SocialMedia />
      </main>
    </div>
  );
}