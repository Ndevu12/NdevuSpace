# NdevuSpace Portfolio

[![Live Demo](https://img.shields.io/badge/Live-ndevuspace.com-blue?style=for-the-badge)](https://www.ndevuspace.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Custom-orange?style=for-the-badge)](#-license)

A modern, professional portfolio website for **Jean Paul Elisa NIYOKWIZERWA** - Tech Lead, Full Stack Software Engineer & Entrepreneur based in Kigali, Rwanda.

Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Dynamic metadata per section, clean URLs, and proper sitemap
- **Dark Theme**: Beautiful dark theme with accent colors
- **Animations**: Framer Motion-powered animations and transitions
- **Performance**: Optimized for fast loading and great Core Web Vitals
- **PWA Ready**: Full favicon set and web app manifest
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Indexable Sections**: Each section (`/about`, `/skills`, `/projects`, etc.) has unique metadata for search engines

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Fonts** | Inter (Google Fonts) |
| **Deployment** | Vercel |

## 📁 Project Structure

```
src/
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page (server component)
│   ├── sitemap.ts           # Dynamic sitemap generation
│   ├── robots.ts            # Robots.txt configuration
│   └── cv/                  # CV/Resume page
├── components/
│   ├── home/                # Home page client components
│   ├── layout/              # Header, Footer
│   ├── sections/            # Hero, About, Skills, Projects, etc.
│   └── ui/                  # Reusable UI components (Button, Card, etc.)
├── contexts/                # React contexts (Theme)
├── data/                    # Static data and SEO configuration
│   ├── seo.ts               # Centralized SEO configuration
│   └── json/                # Projects, skills, experience data
├── hooks/                   # Custom React hooks
├── lib/
│   ├── constants.ts         # App constants
│   ├── utils.ts             # Utility functions
│   └── seo/                 # SEO utilities and metadata generators
├── services/                # API services (contact form, etc.)
├── styles/                  # Global CSS styles
└── types/                   # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ndevu12/My-BRAND.git
   cd My-BRAND
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Run the development server:
   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

```bash
# Build the application
yarn build

# Start production server
yarn start
```

## 🎨 Customization

### Personal Information

Edit `src/data/seo.ts` to update site-wide SEO configuration:
- Site name, title, description
- Social links and contact info
- Keywords and meta tags

Edit `src/lib/constants.ts` for navigation and UI constants.

### Content

| Content Type | File Location |
|--------------|---------------|
| **Projects** | `src/data/json/projects.json` |
| **Skills** | `src/data/json/skills.json` |
| **Experience** | `src/data/json/experience.json` |
| **Section SEO** | `src/lib/seo/section-metadata.ts` |

### Styling

- **Colors**: Edit `tailwind.config.ts` to customize the color palette
- **Global Styles**: Edit `src/styles/globals.css` for global CSS changes

### Images

Place your images in the `public/images/` directory:
- Profile pictures
- Project screenshots in `projects/`
- Any other static assets

## 🌐 Deployment

This site is deployed on **Vercel** with automatic deployments from the `develop` branch.

### Deploy Your Own

1. Fork this repository
2. Import the project in [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy!

### Environment Variables

No environment variables are required for basic deployment. For the contact form, configure your email service credentials.

## 🔍 SEO Features

- **Dynamic Metadata**: Each section URL has unique title, description, and keywords
- **Clean URLs**: `/about`, `/skills`, `/projects`, `/experience`, `/contact`
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Open Graph**: Full social media preview support
- **Structured Data**: JSON-LD for rich search results

## 📄 License

This project is open source but requires consent for use.

**You are free to:**
- View and learn from the source code
- Fork the repository for personal reference

**You must:**
- **Request permission** before using this code for your own projects
- Provide attribution to the original author
- Not use this code for commercial purposes without explicit consent

To request permission, please contact: **hello@ndevuspace.com**

See the [LICENSE](LICENSE) file for full details.

## 🤝 Contact

**Jean Paul Elisa NIYOKWIZERWA**

| Platform | Link |
|----------|------|
| 🌐 Website | [www.ndevuspace.com](https://www.ndevuspace.com) |
| 📧 Email | [hello@ndevuspace.com](mailto:hello@ndevuspace.com) |
| 💼 LinkedIn | [jean-paul-elisa](https://linkedin.com/in/jean-paul-elisa) |
| 🐙 GitHub | [Ndevu12](https://github.com/Ndevu12) |
| 📝 Blog | [blog.ndevuspace.com](https://blog.ndevuspace.com) |

---
