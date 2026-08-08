"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  sheen?: boolean;
}

/**
 * Liquid glass panel — the canonical surface of the design.
 * Frosted fill, specular top edge, floating shadow; optional
 * sheen sweep and lift on hover.
 */
export function Card({
  className,
  children,
  hover = true,
  sheen = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "glass-panel",
        sheen && "glass-sheen",
        hover && "transition-all duration-500 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
