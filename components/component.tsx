/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B283iLCOAGs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect } from "react"
import HeroSection from "./herosection"
import AboutMe from "./aboutme"
import Skills from "./skills"
import RecentProjects from "./recentprojects"
import SocialMedia from "./socialmedia"
import FooterBar from "./footerbar"

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [typewriterText, setTypewriterText] = useState("SCADA Engineer");

  useEffect(() => {
    const typewriterTexts = ["SCADA Engineer", "UI Developer", "IT/OT Hybrid Engineer", "Cybersecurity N00b"];
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypewriterText(typewriterTexts[currentIndex]);
      currentIndex = (currentIndex + 1) % typewriterTexts.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isDarkMode ? "bg-background-dark text-foreground-dark" : "bg-background text-foreground"}`}>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col gap-12 md:gap-16">
        <HeroSection />
        <AboutMe />
        <Skills />
        <RecentProjects />
        <SocialMedia />
        <FooterBar toggleDarkMode={toggleDarkMode} />
      </main>
    </div>
  );
}