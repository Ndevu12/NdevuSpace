import React from "react";
import { cn } from "@/lib/utils";

// =============================================================================
// TYPE SCALE
// Premium typography system — single source of truth for all text styles
// =============================================================================

const variantStyles = {
  /** Page title — used in Hero h1 */
  h1: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight",
  /** Section title — used in SectionHeader h2 */
  h2: "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
  /** Sub-section title — Work Experience, Education headings */
  h3: "text-2xl font-bold leading-tight",
  /** Card title — role names, project names, skill category titles */
  h4: "text-xl font-semibold leading-snug",
  /** Subtitle — company names, org names, section descriptions */
  subtitle: "text-base font-medium",
  /** Body text — descriptions, paragraphs, bullet points */
  body: "text-base leading-relaxed",
  /** Large body — About section paragraphs, hero description */
  "body-lg": "text-lg leading-relaxed",
  /** Meta text — dates, locations, small info */
  meta: "text-sm",
  /** Caption — stat labels, footnotes, tiny labels */
  caption: "text-xs",
} as const;

const colorStyles = {
  /** Primary text — headings, titles */
  default: "text-gray-900 dark:text-white",
  /** Secondary text — body copy, descriptions */
  secondary: "text-gray-600 dark:text-gray-300",
  /** Muted text — meta info, captions, dates */
  muted: "text-gray-500 dark:text-gray-400",
  /** Inherit color from parent */
  inherit: "",
} as const;

const accentStyles = {
  blue: "text-blue-600 dark:text-blue-400",
  green: "text-green-600 dark:text-green-400",
  purple: "text-purple-600 dark:text-purple-400",
} as const;

// Default semantic HTML tags per variant
const defaultTags: Record<TypographyVariant, keyof React.JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  subtitle: "p",
  body: "p",
  "body-lg": "p",
  meta: "span",
  caption: "span",
};

// Default color per variant
const defaultColors: Record<TypographyVariant, TypographyColor> = {
  h1: "default",
  h2: "default",
  h3: "default",
  h4: "default",
  subtitle: "secondary",
  body: "secondary",
  "body-lg": "secondary",
  meta: "muted",
  caption: "muted",
};

// =============================================================================
// TYPES
// =============================================================================

export type TypographyVariant = keyof typeof variantStyles;
export type TypographyColor = keyof typeof colorStyles;
export type TypographyAccent = keyof typeof accentStyles;

export interface TypographyProps {
  /** Typography variant — determines size, weight, and line height */
  variant: TypographyVariant;
  /** HTML tag override (defaults to semantic tag for the variant) */
  as?: keyof React.JSX.IntrinsicElements;
  /** Text color preset */
  color?: TypographyColor;
  /** Accent color — overrides color prop (for company/org names) */
  accent?: TypographyAccent;
  /** Additional CSS classes */
  className?: string;
  children: React.ReactNode;
}

// =============================================================================
// COMPONENT
// =============================================================================

export function Typography({
  variant,
  as,
  color,
  accent,
  className,
  children,
}: TypographyProps) {
  const Tag = as || defaultTags[variant];
  const resolvedColor = accent
    ? accentStyles[accent]
    : colorStyles[color || defaultColors[variant]];

  return (
    <Tag
      className={cn(
        variantStyles[variant],
        resolvedColor,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
