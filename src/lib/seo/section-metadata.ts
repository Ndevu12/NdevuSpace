/**
 * Section Metadata Configuration
 * Centralized SEO configuration for indexable portfolio sections
 * Each section has unique metadata for improved search visibility
 */

import { SITE_CONFIG } from "@/data/seo";

// =============================================================================
// TYPES
// =============================================================================

export interface SectionSEO {
  /** Section identifier matching DOM id */
  id: string;
  /** Clean URL path for the section */
  path: string;
  /** Display name for navigation */
  name: string;
  /** SEO-optimized page title */
  title: string;
  /** Meta description for search results */
  description: string;
  /** Section-specific keywords for targeted SEO */
  keywords: string[];
  /** Sitemap priority (0.0 - 1.0) */
  priority: number;
  /** Sitemap change frequency */
  changeFreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  /** OpenGraph specific title (optional, falls back to title) */
  ogTitle?: string;
  /** OpenGraph specific description (optional, falls back to description) */
  ogDescription?: string;
}

export type SectionId = "about" | "projects" | "contact";

// =============================================================================
// SECTION-SPECIFIC KEYWORDS
// Organized by search intent for maximum visibility
// =============================================================================

const ABOUT_KEYWORDS = [
  // Personal branding
  "Jean Paul Elisa",
  "Jean Paul Elisa NIYOKWIZERWA",
  "Ndevu",
  "Ndevuspace",
  "about Jean Paul Elisa",
  "Jean Paul Elisa background",
  "Jean Paul Elisa story",
  // Professional identity
  "Full Stack Software Engineer Rwanda",
  "Software Engineer Rwanda",
  "System Design Rwanda",
  "Rwandan Developer",
  "Kigali Software Engineer",
  // Education & credentials
  "ALX Graduate",
  "ALX Software Engineer",
  "Stanford ML Certificate",
  "University of Rwanda Graduate",
  // Engineering depth
  "Software Architecture Rwanda",
  "Full Stack Developer Rwanda",
  "Backend Engineer Rwanda",
];

const PROJECTS_KEYWORDS = [
  // Portfolio terms
  "Jean Paul Elisa Portfolio",
  "Jean Paul Elisa Projects",
  "Rwanda Developer Portfolio",
  "African Developer Projects",
  // Technical projects
  "Full Stack Projects",
  "React Projects Portfolio",
  "Node.js Projects",
  "AI ML Projects",
  "Web Application Portfolio",
  // Industry specific
  "SaaS Projects",
  "Startup Projects",
  "Real Estate Tech",
  "Fintech Projects Africa",
  // Open source
  "Open Source Contributor",
  "GitHub Developer Rwanda",
  "Open Source Projects Africa",
];

const CONTACT_KEYWORDS = [
  // Hiring intent
  "Hire Developer Rwanda",
  "Hire Full Stack Developer Africa",
  "Hire Tech Lead Rwanda",
  "Hire React Developer Rwanda",
  "Hire Node.js Developer Africa",
  // Freelance
  "Freelance Developer Rwanda",
  "Remote Developer Africa",
  "Contract Developer Rwanda",
  // Collaboration
  "Tech Collaboration Rwanda",
  "Technical Partner Africa",
  "Software Development Partner Africa",
  // Contact terms
  "Contact Jean Paul Elisa",
  "Jean Paul Elisa Email",
  "Hire Jean Paul Elisa",
];

// =============================================================================
// SECTION CONFIGURATIONS
// =============================================================================

export const INDEXABLE_SECTIONS: Record<SectionId, SectionSEO> = {
  about: {
    id: "about",
    path: "/about",
    name: "About",
    title: "About Jean Paul Elisa | Full Stack Software Engineer from Rwanda",
    description:
      "Learn about Jean Paul Elisa NIYOKWIZERWA - Full Stack Software Engineer based in Kigali, Rwanda. ALX Graduate & Stanford ML certified with expertise in architecting and shipping scalable web applications, backend systems, and AI-powered platforms.",
    keywords: ABOUT_KEYWORDS,
    priority: 0.9,
    changeFreq: "monthly",
    ogTitle: "About Jean Paul Elisa | My Journey in Software Engineering",
    ogDescription:
      "Discover the story of Jean Paul Elisa - from Rwanda to architecting production-grade systems and contributing to the technical community across Africa.",
  },
  projects: {
    id: "projects",
    path: "/projects",
    name: "Projects",
    title: "Projects & Portfolio | Jean Paul Elisa - Software Engineer Rwanda",
    description:
      "View Jean Paul Elisa's project portfolio featuring full-stack web applications, AI-powered platforms, real estate tech solutions, and open-source contributions. Built with React, Node.js, Python, and modern cloud technologies.",
    keywords: PROJECTS_KEYWORDS,
    priority: 0.85,
    changeFreq: "weekly",
    ogTitle: "Project Portfolio | Jean Paul Elisa",
    ogDescription:
      "Featured projects: Full-stack applications, AI platforms, and innovative tech solutions from Rwanda.",
  },
  contact: {
    id: "contact",
    path: "/contact",
    name: "Contact",
    title: "Contact Jean Paul Elisa | Hire a Developer in Rwanda",
    description:
      "Get in touch with Jean Paul Elisa for software development projects, technical leadership roles, freelance work, or collaboration opportunities. Based in Kigali, Rwanda - available for remote and on-site engagements.",
    keywords: CONTACT_KEYWORDS,
    priority: 0.7,
    changeFreq: "yearly",
    ogTitle: "Contact | Jean Paul Elisa",
    ogDescription:
      "Reach out for collaboration, hiring, or project inquiries. Available for remote and on-site work.",
  },
} as const;

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all valid section IDs
 */
export function getSectionIds(): SectionId[] {
  return Object.keys(INDEXABLE_SECTIONS) as SectionId[];
}

/**
 * Check if a string is a valid section ID
 */
export function isValidSectionId(id: string | null | undefined): id is SectionId {
  if (!id) return false;
  return id in INDEXABLE_SECTIONS;
}

/**
 * Get section configuration by ID
 * Returns null if section doesn't exist
 */
export function getSectionById(id: string | null | undefined): SectionSEO | null {
  if (!isValidSectionId(id)) return null;
  return INDEXABLE_SECTIONS[id];
}

/**
 * Get section configuration by path
 * Handles both "/about" and "about" formats
 */
export function getSectionByPath(path: string): SectionSEO | null {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const section = Object.values(INDEXABLE_SECTIONS).find(
    (s) => s.path === normalizedPath
  );
  return section ?? null;
}

/**
 * Get all section paths for sitemap generation
 */
export function getAllSectionPaths(): string[] {
  return Object.values(INDEXABLE_SECTIONS).map((s) => s.path);
}

/**
 * Get section configurations for sitemap
 */
export function getSitemapSections(): Pick<SectionSEO, "path" | "priority" | "changeFreq">[] {
  return Object.values(INDEXABLE_SECTIONS).map(({ path, priority, changeFreq }) => ({
    path,
    priority,
    changeFreq,
  }));
}

/**
 * Build canonical URL for a section
 */
export function buildSectionCanonicalUrl(sectionId: SectionId): string {
  const section = INDEXABLE_SECTIONS[sectionId];
  return `${SITE_CONFIG.url}${section.path}`;
}

/**
 * Get combined keywords for a section (section-specific + core branding)
 */
export function getSectionKeywords(sectionId: SectionId): string[] {
  const section = INDEXABLE_SECTIONS[sectionId];
  // Core branding keywords that should appear on all pages
  const coreKeywords = [
    "Jean Paul Elisa",
    "Ndevuspace",
    "Software Engineer Rwanda",
    "Tech Lead Rwanda",
  ];
  // Combine and deduplicate
  return [...new Set([...section.keywords, ...coreKeywords])];
}
