"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, EXTERNAL_LINKS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks";
import { useTheme } from "@/contexts/ThemeContext";
import { ExternalLink, Sun, Moon } from "lucide-react";
import { Logo } from "../ui/logo";

export function Header() {
  const activeSection = useScrollSpy(
    NAV_ITEMS.filter((item) => item.href.startsWith("#")).map((item) =>
      item.href.replace("#", "")
    )
  );
  const { isDark, toggleTheme } = useTheme();

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      {/* Floating liquid-glass pill */}
      <div className="glass-chrome max-w-3xl mx-auto rounded-full px-4 sm:px-5 py-2.5 flex items-center justify-between gap-3">
        <Logo />

        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-0.5 left-3 right-3 h-px bg-gray-900 dark:bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}

          <a
            href={EXTERNAL_LINKS.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            Blog
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors duration-300"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
