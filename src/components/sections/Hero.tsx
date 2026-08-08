"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PERSONAL_INFO, SOCIAL_LINKS, EXTERNAL_LINKS } from "@/lib/constants";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 w-full pt-32 pb-24">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Portrait — small, glass-framed, grayscale */}
          <motion.div variants={item} className="mb-10">
            <div className="glass-panel inline-block p-2 !rounded-2xl">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden">
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.fullName}
                  fill
                  sizes="96px"
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Statement */}
          <motion.h1
            variants={item}
            className="text-[clamp(2.75rem,7vw,5.5rem)] text-gray-900 dark:text-white"
          >
            {PERSONAL_INFO.shortName}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium"
          >
            {PERSONAL_INFO.title} — {PERSONAL_INFO.location}
          </motion.p>

          {/* Short about, kept as the only bio on the site */}
          <motion.p
            id="about"
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-gray-400 scroll-mt-32"
          >
            {PERSONAL_INFO.shortBio}
          </motion.p>

          {/* Links row — glass pill */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href={EXTERNAL_LINKS.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-sheen !rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Read my blog
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="glass-panel !rounded-full px-3 py-2 inline-flex items-center gap-1">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                aria-label="Email Contact"
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
