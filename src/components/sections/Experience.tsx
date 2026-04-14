"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, TechBadge, Typography } from "@/components/ui";
import { workExperience, education, volunteering } from "@/data";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  Heart,
  Users,
} from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <Section
      id="experience"
      className="transition-colors duration-300"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[80px]" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SectionHeader
          badge="Career Journey"
          title="Featured Professional Experience"
          subtitle="My engineering career, technical roles, and contributions"
        />

        {/* Stacked Sections */}
        <div className="space-y-20">
          {/* Work Experience Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <Briefcase className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <Typography variant="h3">Work Experience</Typography>
                <Typography variant="meta" color="muted" className="mt-1">
                  Engineering roles & technical leadership
                </Typography>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {workExperience.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={cn(
                    "group relative rounded-2xl overflow-hidden",
                    "bg-white dark:bg-white/[0.02]",
                    "border border-gray-200 dark:border-white/[0.06]",
                    "shadow-sm hover:shadow-lg dark:shadow-none",
                    "hover:border-blue-300 dark:hover:border-blue-500/30",
                    "transition-all duration-300",
                  )}
                >
                  {/* Card Content */}
                  <div className="flex flex-col h-full p-7 lg:p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Typography variant="h4" className="mb-1.5">
                          {item.title}
                        </Typography>
                        <Typography variant="subtitle" accent="blue">
                          {item.company}
                        </Typography>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-white/[0.06]">
                      <Typography variant="meta" color="muted" as="span" className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </Typography>
                      <Typography variant="meta" color="muted" as="span" className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </Typography>
                    </div>

                    {/* Description */}
                    <ul className="flex-1 space-y-3.5 mb-7">
                      {item.description.slice(0, 3).map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="flex items-start gap-3"
                        >
                          <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500/60" />
                          <Typography variant="body" color="secondary" as="span">
                            {desc}
                          </Typography>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2.5 pt-5 border-t border-gray-100 dark:border-white/[0.06]">
                      {item.technologies.slice(0, 5).map((tech, techIndex) => (
                        <TechBadge key={techIndex}>{tech}</TechBadge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Community & Volunteering Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/20">
                <Heart className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <Typography variant="h3">Technical Community & Contributions</Typography>
                <Typography variant="meta" color="muted" className="mt-1">
                  Algorithms coaching, competitive programming & community engineering
                </Typography>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {volunteering.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={cn(
                    "group relative rounded-2xl overflow-hidden",
                    "bg-white dark:bg-white/[0.02]",
                    "border border-gray-200 dark:border-white/[0.06]",
                    "shadow-sm hover:shadow-lg dark:shadow-none",
                    "hover:border-green-300 dark:hover:border-green-500/30",
                    "transition-all duration-300",
                  )}
                >
                  {/* Card Content */}
                  <div className="flex flex-col h-full p-7 lg:p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Typography variant="h4" className="mb-1.5">
                          {item.role}
                        </Typography>
                        <Typography variant="subtitle" accent="green">
                          {item.organization}
                        </Typography>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-white/[0.06]">
                      <Typography variant="meta" color="muted" as="span" className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </Typography>
                      <Typography variant="meta" color="muted" as="span" className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </Typography>
                    </div>

                    {/* Description */}
                    <ul className="flex-1 space-y-3.5 mb-7">
                      {item.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="flex items-start gap-3"
                        >
                          <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-green-500/60" />
                          <Typography variant="body" color="secondary" as="span">
                            {desc}
                          </Typography>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2.5 pt-5 border-t border-gray-100 dark:border-white/[0.06]">
                        {item.technologies
                          .slice(0, 5)
                          .map((tech, techIndex) => (
                            <TechBadge key={techIndex}>{tech}</TechBadge>
                          ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <GraduationCap className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <Typography variant="h3">Education & Training</Typography>
                <Typography variant="meta" color="muted" className="mt-1">
                  Academic background & certifications
                </Typography>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {education.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={cn(
                    "group relative rounded-2xl overflow-hidden",
                    "bg-white dark:bg-white/[0.02]",
                    "border border-gray-200 dark:border-white/[0.06]",
                    "shadow-sm hover:shadow-lg dark:shadow-none",
                    "hover:border-purple-300 dark:hover:border-purple-500/30",
                    "transition-all duration-300",
                  )}
                >
                  {/* Card Content */}
                  <div className="flex flex-col h-full p-6 lg:p-7">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-5">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-purple-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Typography variant="h4" className="text-lg">
                          {item.title}
                        </Typography>
                      </div>
                    </div>

                    {/* Institution */}
                    <Typography variant="subtitle" accent="purple" className="mb-3">
                      {item.company}
                    </Typography>

                    {/* Period */}
                    <Typography variant="meta" color="muted" as="div" className="flex items-center gap-1.5 mb-5">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </Typography>

                    {/* Tech Stack */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-5 mt-auto border-t border-gray-100 dark:border-white/[0.06]">
                        {item.technologies
                          ?.slice(0, 4)
                          ?.map((tech, techIndex) => (
                            <TechBadge key={techIndex}>{tech}</TechBadge>
                          ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
