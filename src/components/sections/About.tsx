"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section, SectionHeader, Button } from "@/components/ui";
import { PERSONAL_INFO } from "@/lib/constants";
import { statsData } from "@/data";
import { Code2, Lightbulb, Users, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Finding elegant solutions to complex technical challenges",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively in agile development environments",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and methodologies",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
      id="about"
      className="transition-colors duration-300"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SectionHeader
          badge="About Me"
          title="Full Stack Software Engineer"
          subtitle="Building production-grade systems from architecture to deployment"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative group">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-blue-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10">
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt="About Jean Paul"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-primary via-transparent to-transparent opacity-60" />
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {statsData.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 rounded-xl bg-white/80 dark:bg-primary/80 backdrop-blur-sm border border-gray-200 dark:border-white/10"
                    >
                      <div className="text-2xl font-bold text-gradient">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                With {" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  Expertise
                </span>{" "}
                in software development and system architecture, I specialize in architecting and
                delivering scalable web applications and backend systems. As a{" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  Full Stack Software Engineer
                </span>
                , I&apos;ve designed and built production platforms with
                AI-powered features, real-time APIs, and cloud-native infrastructure.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                My expertise spans{" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  Node.js, Java/Spring, Python, PostgreSQL
                </span>{" "}
                and cloud platforms like Azure and AWS. I&apos;ve built
                products end-to-end across real estate, mobility, and e-commerce
                — from system design and database optimization to CI/CD
                pipelines and production deployment — serving thousands of users.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                My deep expertise in{" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  data structures and algorithms
                </span>{" "}
                has led me to coach at the Rwanda Computing Olympiad and
                Pan-African Informatics Olympiad, reinforcing my commitment to
                rigorous engineering and technical excellence.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-5">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col p-5 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06] hover:border-gray-300 dark:hover:border-white/15 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none"
                  >
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-4" />
                    <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let&apos;s Work Together
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
