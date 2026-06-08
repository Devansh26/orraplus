# ORRA+ — The Future of Everyday Health

> India's premium preventive healthcare platform. Built for the 1.4 billion.

[![Deploy](https://github.com/orraplus/orraplus/actions/workflows/deploy.yml/badge.svg)](https://github.com/orraplus/orraplus/actions/workflows/deploy.yml)

---

## Overview

ORRA+ combines biomarker insights, nutrition science, and personalized health recommendations to help Indians detect health risks early and stay healthier for longer.

**Live Site:** [orraplus.com](https://orraplus.com)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 5 | Build tool & dev server |
| TailwindCSS 3 | Utility-first styling |
| Framer Motion 11 | Animation system |
| Lucide React | Icon library |
| React Hook Form | Form management |
| Zod | Schema validation |

---

## Project Structure

```
src/
├── components/
│   ├── ui/             # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   ├── Badge.tsx
│   │   ├── AnimatedNumber.tsx
│   │   └── GradientText.tsx
│   └── layout/         # Layout components
│       ├── Navbar.tsx
│       └── Footer.tsx
├── sections/           # Full-page sections
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── Roadmap.tsx
│   ├── FounderStory.tsx
│   ├── Comparison.tsx
│   ├── Science.tsx
│   ├── FutureVision.tsx
│   ├── Waitlist.tsx
│   └── TrustSection.tsx
├── hooks/              # Custom React hooks
│   ├── useScrollProgress.ts
│   ├── useCountUp.ts
│   └── useInView.ts
├── utils/              # Pure utilities
│   ├── cn.ts           # Tailwind class merge
│   └── waitlist.ts     # localStorage + backend swap point
├── data/               # Static content data
│   ├── roadmap.ts
│   ├── stats.ts
│   └── biomarkers.ts
├── types/              # Shared TypeScript types
│   └── index.ts
└── layouts/
    └── PageLayout.tsx
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Full-screen dark hero with live health dashboard mockup |
| 2 | **Problem** | Animated stat cards + disease progression timeline |
| 3 | **Solution** | Interactive 3-step process with live visual preview |
| 4 | **Roadmap** | 6-stage health intelligence journey (horizontal desktop, vertical mobile) |
| 5 | **Founder Story** | Editorial layout with large typography and pull quote |
| 6 | **Comparison** | Animated feature comparison table |
| 7 | **Science** | 5 science pillar cards with floating orbs |
| 8 | **Future Vision** | Today vs Tomorrow split-view |
| 9 | **Waitlist** | React Hook Form + Zod validation + localStorage |
| 10 | **Trust** | Privacy and security commitment cards |

---

## Design System

### Colors

```css
--color-brand:       #10b981  /* Emerald-500 */
--color-brand-light: #34d399  /* Emerald-400 */
--color-dark:        #0f172a  /* Slate-900 */
```

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Animation Principles

- Scroll-triggered reveals with `useInView`
- Stagger children with `staggerChildren: 0.12`
- Hover lift: `y: -6, scale: 1.01`
- Float: `y: [0, -12, 0]` loop
- Count-up numbers on viewport entry

---

## Backend Integration (Waitlist)

The waitlist currently stores submissions in `localStorage`. To integrate a real backend:

1. Open `src/utils/waitlist.ts`
2. Find the `submitWaitlistEntry` function
3. Uncomment the `fetch()` call and replace with your API endpoint

```typescript
// Replace localStorage with:
await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(entry),
});
```

---

## SEO

- Full meta tags + Open Graph + Twitter Cards in `index.html`
- Structured data (JSON-LD) for organization
- `robots.txt` and `sitemap.xml` in `/public`
- Semantic HTML throughout (headings hierarchy, ARIA labels, roles)

---

## Deployment

### GitHub Pages (Automated)

Push to `main` branch → GitHub Actions automatically:
1. Installs dependencies (cached)
2. Type-checks with TypeScript
3. Builds production bundle
4. Deploys to GitHub Pages

**Setup:**
1. Go to repository Settings → Pages
2. Set source to "GitHub Actions"
3. Push to `main`

### Manual Deployment

```bash
npm run build
# Upload ./dist folder to any static host (Netlify, Vercel, etc.)
```

---

## Performance

- Code splitting via Vite `manualChunks`
- Lazy loading of all below-fold sections (`React.lazy`)
- `IntersectionObserver` for scroll animations (no scroll event listeners)
- `preconnect` for Google Fonts
- Minified with Terser in production
- Target: Lighthouse > 95

---

## Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Skip-to-content link
- `prefers-reduced-motion` CSS support
- Semantic HTML5 structure
- Focus ring visible on all focusable elements

---

## License

All rights reserved. ORRA+ Health Technologies Pvt. Ltd.

---

*Built with ❤️ for India's health revolution.*
