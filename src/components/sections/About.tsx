"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section, SectionHeader, Button } from "@/components/ui";
import { PERSONAL_INFO } from "@/lib/constants";
import { statsData } from "@/data";

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
          subtitle="Production systems, built end to end."
        />

        <div className="flex flex-col items-center">

          <div className="w-full max-w-3xl mx-auto space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I&apos;m a{" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  Full Stack Software Engineer
                </span>{" "}
                who designs and ships production-grade platforms end to end —
                AI-powered features, real-time APIs, and cloud-native
                infrastructure.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I work across{" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  Node.js, Java/Spring, Python, and PostgreSQL
                </span>{" "}
                on Azure and AWS, and coach competitive programming at the
                Rwanda Computing Olympiad.
              </p>
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
