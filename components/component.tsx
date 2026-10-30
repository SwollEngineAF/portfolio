import { MotionConfig } from "motion/react";
import AboutMe from "./aboutme";
import HeroSection from "./herosection";
import NavBar from "./navbar";
import { RecentProjects } from "./recentprojects";
import Skills from "./skills";
import SocialMedia from "./socialmedia";

export default function Component() {
  return (
    <MotionConfig reducedMotion="user">
      <NavBar />
      <main className="min-h-screen overflow-hidden">
        <HeroSection />
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-5 py-16 sm:gap-28 sm:px-8 sm:py-20 lg:gap-32 lg:px-10 lg:py-24">
          <AboutMe />
          <RecentProjects />
          <Skills />
          <SocialMedia />
        </div>
      </main>
      <footer className="border-t border-border/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} Syahiid Rasidi</p>
          <p className="font-mono uppercase tracking-[0.16em]">
            SCADA · IT · Product Engineering
          </p>
          <a
            href="#top"
            className="w-fit transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </MotionConfig>
  );
}
