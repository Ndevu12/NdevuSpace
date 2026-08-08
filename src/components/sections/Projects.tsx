"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui";
import { projects } from "@/data";
import { ArrowUpRight, Github } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section id="projects">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SectionHeader index="01" label="Selected Work" title="Things I've built" />

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={item}
              className="glass-panel glass-sheen p-8 md:p-10 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Index */}
                <span className="font-mono text-sm text-gray-400 dark:text-gray-500 pt-1.5">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="font-mono text-sm text-gray-400 dark:text-gray-500">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <p className="mt-4 font-mono text-xs tracking-wide text-gray-500 dark:text-gray-400">
                    {project.technologies.join(" · ")}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 md:pt-1.5">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white border-b border-transparent hover:border-current transition-colors duration-300"
                    >
                      Visit
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/10 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
