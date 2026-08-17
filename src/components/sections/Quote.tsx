"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { quotes } from "@/data";
import { PERSONAL_INFO } from "@/lib/constants";

// Reading-time-based display duration: short quotes ~6s, long ones up to 12s
const quoteDuration = (text: string) =>
  Math.min(12000, Math.max(6000, 3500 + text.length * 45));

export function Quote() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const viewportRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  // Random starting quote per visit; null until mounted to avoid
  // an SSR hydration mismatch (same pattern as ObfuscatedEmail)
  const [index, setIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * quotes.length));
  }, []);

  // Track the slide width so the glide and drag stay correct on resize
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => setWidth(el.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const advance = useCallback(() => {
    setIndex((i) => (i === null ? i : (i + 1) % quotes.length));
  }, []);

  // Auto-advance after the current quote's reading time; paused on
  // hover/drag and restarted fresh on resume
  useEffect(() => {
    if (index === null || paused || !isInView) return;
    const timer = setTimeout(advance, quoteDuration(quotes[index]));
    return () => clearTimeout(timer);
  }, [index, paused, isInView, advance]);

  // Before the client-side random pick lands, show the first quote;
  // server and first client render agree, so hydration stays clean
  const displayIndex = index ?? 0;
  const duration = quoteDuration(quotes[displayIndex]);

  return (
    <motion.section
      ref={sectionRef}
      aria-label="Quotes"
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <div ref={viewportRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          {/* Horizontal glide track — one quote per slide, draggable */}
          <motion.div
            className="flex items-stretch"
            drag="x"
            dragConstraints={{
              left: -(quotes.length - 1) * width,
              right: 0,
            }}
            dragElastic={0.12}
            animate={{ x: -displayIndex * width }}
            transition={{ type: "spring", stiffness: 120, damping: 24 }}
            onDragStart={() => setPaused(true)}
            onDragEnd={(_, info) => {
              setPaused(false);
              const swipe = info.offset.x + info.velocity.x * 0.2;
              if (swipe < -width / 4) {
                setIndex((i) =>
                  i === null ? i : Math.min(i + 1, quotes.length - 1)
                );
              } else if (swipe > width / 4) {
                setIndex((i) => (i === null ? i : Math.max(i - 1, 0)));
              }
            }}
          >
            {quotes.map((text, i) => (
              <figure
                key={i}
                className="shrink-0 flex flex-col items-center justify-center text-center px-4 sm:px-12 min-h-[20rem]"
                style={{ width: width || "100%" }}
              >
                {/* Decorative opening mark */}
                <span
                  aria-hidden="true"
                  className="font-serif text-7xl md:text-8xl leading-none text-gray-200 dark:text-gray-800 select-none"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-6 md:-mt-8">
                  <p className="font-serif italic text-[clamp(1.5rem,3.2vw,2.25rem)] leading-snug text-gray-900 dark:text-white max-w-3xl">
                    &ldquo;{text}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                  — {PERSONAL_INFO.shortName}
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>

        {/* Counter + hairline progress for the current quote */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <span className="font-mono text-xs text-gray-400 dark:text-gray-500">
            {String(displayIndex + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
          </span>
          <div className="w-40 h-px bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <div
              key={displayIndex}
              className="h-full bg-gray-900 dark:bg-white quote-progress"
              style={{
                animationDuration: `${duration}ms`,
                animationPlayState: paused || !isInView ? "paused" : "running",
              }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
