// Import JSON data
import projectsJson from './json/projects.json';

// Re-export SEO data
export * from './seo';

// ============================================
// PROJECTS DATA
// ============================================

// Featured projects rendered in the Selected Work section
export const projects = projectsJson.featured;
