"use client";

import React from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} {PERSONAL_INFO.shortName} — {PERSONAL_INFO.location}
          </p>

          <div className="flex items-center gap-1">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              aria-label="Email"
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="ml-2 p-2 rounded-full glass-panel !rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
