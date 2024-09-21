"use client";

import { useState, useEffect } from "react";
import HeroSection from "./herosection";
import AboutMe from "./aboutme";
import Skills from "./skills";
import RecentProjects from "./recentprojects";
import SocialMedia from "./socialmedia";
import FooterBar from "./footerbar";

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [typewriterText, setTypewriterText] = useState("SCADA Engineer");

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Handle typewriter effect
  useEffect(() => {
    const typewriterTexts = ["SCADA Engineer", "UI Developer", "IT/OT Hybrid Engineer", "Cybersecurity N00b"];
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypewriterText(typewriterTexts[currentIndex]);
      currentIndex = (currentIndex + 1) % typewriterTexts.length;
    }, 2000);
    return () => clearInterval(interval);
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
        <HeroSection isDarkMode={isDarkMode} />
        <AboutMe />
        <Skills />
        <RecentProjects />
        <SocialMedia />
        <FooterBar toggleDarkMode={toggleDarkMode} />
      </main>
    </div>
  );
}