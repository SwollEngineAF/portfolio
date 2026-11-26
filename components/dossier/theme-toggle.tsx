"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    setIsDark(nextIsDark);
  }

  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      {isDark ? <Sun aria-hidden="true" size={16} /> : <Moon aria-hidden="true" size={16} />}
    </button>
  );
}
