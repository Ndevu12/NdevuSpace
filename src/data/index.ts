// Import JSON data
import projectsJson from './json/projects.json';
import quotesJson from './json/quotes.json';

// Re-export SEO data
export * from './seo';

// ============================================
// PROJECTS DATA
// ============================================

// Featured projects rendered in the Selected Work section
export const projects = projectsJson.featured;

// ============================================
// QUOTES DATA
// ============================================

// Personal quotes rendered in the quote carousel
export const quotes = quotesJson.quotes;
