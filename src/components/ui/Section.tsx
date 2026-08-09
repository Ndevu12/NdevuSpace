"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export function Section({
  id,
  className,
  children,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-32 lg:py-40", className)}
    >
      <div
        className={cn(
          "max-w-5xl mx-auto px-6 sm:px-8 lg:px-10",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  /** Index label, e.g. "01" — rendered in mono before the label */
  index?: string;
  /** Small-caps mono label, e.g. "Selected Work" */
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  index,
  label,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14 md:mb-20 text-left", className)}>
      {label && (
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-5">
          {index && <span className="mr-3">{index}</span>}
          {label}
        </p>
      )}

      <h2 className="text-gray-900 dark:text-white">{title}</h2>

      {subtitle && (
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
