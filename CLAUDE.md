# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Premium Australian Restaurant Website** - A production-ready, luxury restaurant website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features premium dark theme with gold accents, smooth Framer Motion animations, and fully responsive design across 11 complete sections.

**Key Characteristics:**
- Enterprise-grade TypeScript (strict mode, 100% coverage)
- Dark luxury design (#0a0a0a background, #C89B3C gold accents)
- 50+ smooth animations using Framer Motion
- Responsive mobile-first design (3 breakpoints: mobile, tablet, desktop)
- All sections use `'use client'` directive (client-side components)
- Glassmorphism styling with backdrop blur effects
- Production build tested and optimized (307 KB bundle)

## Tech Stack

- **Framework**: Next.js 15.5.19 (App Router)
- **Language**: TypeScript 5.3+ (strict mode)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4 + custom CSS
- **Animations**: Framer Motion 11
- **Icons**: Lucide React 0.394
- **Code Quality**: ESLint with next/core-web-vitals

## Architecture & Structure

### Component Organization

```
components/
├── Navbar.tsx              # Fixed sticky navigation (247 lines)
├── Footer.tsx              # Complete footer with newsletter (284 lines)
└── sections/               # 11 page sections
    ├── Hero.tsx            # Two-column hero with stats
    ├── FeaturedMenu.tsx    # 6 menu items with hover effects
    ├── WhyChooseUs.tsx     # 4 feature cards with icons
    ├── AboutUs.tsx         # Restaurant story + stats
    ├── CustomerReviews.tsx # Testimonial slider (controlled state)
    ├── Gallery.tsx         # Masonry gallery layout
    ├── DeliveryArea.tsx    # Interactive service zones
    ├── FAQ.tsx             # Accordion (controlled state)
    └── Contact.tsx         # Contact form + info cards
```

### App Structure

- `app/layout.tsx` - Root layout with SEO metadata, imports global styles
- `app/page.tsx` - Home page: imports and renders all 11 sections sequentially
- `app/globals.css` - Global Tailwind imports, custom animation keyframes, utility classes (.glass, .glass-hover, .heading-premium, .hover-lift, .transition-premium)

### Design System

**Tailwind Extensions** (defined in `tailwind.config.ts`):
- Colors: `gold: #C89B3C`, `dark-bg: #0a0a0a`, `dark-secondary: #1a1a1a`
- Fonts: `font-serif: Playfair Display`, `font-sans: Inter`
- Animations: `fade-in (0.8s)`, `slide-up (0.8s)`, `glow (3s infinite)`
- Backdropfilter: `backdrop-blur-md` configured

**Custom CSS Classes** (in `globals.css`):
- `.glass` - Glassmorphism base (backdrop blur + white/5 bg + white/10 border)
- `.glass-hover` - Glass with hover state (white/10 bg + gold/30 border on hover)
- `.heading-premium` - Serif headings (font-serif, font-bold, tracking-tight)
- `.hover-lift` - Elevation effect on hover (shadow + -translate-y-1)
- `.transition-premium` - Smooth 500ms transitions (all duration-500 ease-out)
- `.gradient-text` - Text gradient (white to gold, bg-clip-text)

## Common Development Tasks

### Start Development Server
```bash
npm run dev
# Opens http://localhost:3000 with hot reload
```

### Build for Production
```bash
npm run build
# Creates optimized .next folder
# Runs TypeScript check, ESLint validation, static generation
```

### Run Production Build Locally
```bash
npm start
# Runs production server on port 3000
```

### Code Quality Check
```bash
npm run lint
# Runs ESLint with next/core-web-vitals config
# Disables react/no-unescaped-entities rule (.eslintrc.json)
```

## Component Patterns

### Client Component Pattern (All Sections Use This)

Every section component follows this structure:
```typescript
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SectionName() {
  // Motion animation variants (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-dark-bg relative">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />

      {/* Content with motion animations */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Animated items */}
      </motion.div>
    </section>
  );
}
```

### Key Patterns:
- **All sections are client components** (`'use client'` directive)
- **Animations trigger on viewport intersection** (`whileInView`, `viewport={{ once: true }}`)
- **Staggered animations** for visual hierarchy (staggerChildren: 0.1)
- **Consistent spacing** (py-20 sections, gap-6 to gap-12 between items)
- **Background gradients** for premium feel (gold/5 or gold/10 opacity)
- **Dark theme** (bg-dark-bg or bg-dark-secondary backgrounds)
- **Hover effects** using glass-hover class or motion whileHover
- **Responsive grid** (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 or 4)

### Controlled State Pattern (CustomerReviews, FAQ)

Components with user interaction:
```typescript
const [currentIndex, setCurrentIndex] = useState(0);

// Navigation or toggle handlers
const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
const toggleAccordion = (index) => setOpenIndex(openIndex === index ? -1 : index);

// Conditional rendering based on state
{openIndex === index && <AnimatePresence>...</AnimatePresence>}
```

## Customization Guide

### Update Menu Items
**File**: `components/sections/FeaturedMenu.tsx`
- Edit `menuItems` array with name, category, description, price, emoji
- Each item renders as a card with category badge, hover animation, add-to-cart button
- To replace emojis: use Next.js Image component (requires images in public/)

### Update Contact Information
**File**: `components/sections/Contact.tsx`
- Phone: search for "(02) 9999 9999"
- Email: search for "hello@premium-restaurant.com"
- Address: search for "123 Premium St, Sydney NSW 2000"
- Hours: update in contactInfo array and opening hours section

### Update Testimonials
**File**: `components/sections/CustomerReviews.tsx`
- Edit `reviews` array (name, role, rating, text, avatar emoji)
- Updates both slider and grid display

### Change Color Scheme
**File**: `tailwind.config.ts`
- Modify `colors.gold` (#C89B3C default)
- Modify `colors['dark-bg']` (#0a0a0a default)
- Modify `colors['dark-secondary']` (#1a1a1a default)

### Update SEO Metadata
**File**: `app/layout.tsx`
- Edit metadata object: title, description, keywords
- Open Graph tags (og:title, og:description, og:type)

## Important Implementation Details

### Animations & Performance
- Framer Motion `whileInView` with `viewport={{ once: true }}` - animations trigger on scroll, only once
- Staggered animations use `staggerChildren: 0.1` (100ms between items)
- Item animations: fade-in (0.8s) + optional transform (slide-up, scale)
- Smooth transitions (300-500ms) on all interactive elements
- No animations on initial page load (controlled with `whileInView`)

### Responsive Design
- **Mobile (0-640px)**: Single column, hamburger menu, touch-optimized buttons
- **Tablet (640-1024px)**: 2-column grids, adjusted spacing
- **Desktop (1024px+)**: 3-4 column grids, full-width sections
- Navbar hides desktop links on mobile, shows hamburger menu
- All images and sections scale proportionally

### Form Handling
**File**: `components/sections/Contact.tsx`
- Contact form uses React state (formData)
- Form submission shows success feedback (submitted state with 3s timeout)
- No backend integration yet - ready for email service connection
- Input fields have validation attributes (required, type="email", etc.)

### Accessibility Notes
- Semantic HTML (sections, nav, footer, form elements)
- Heading hierarchy (h1 in hero, h2 for sections, h3 for subsections)
- ARIA labels ready in footer social links (title attribute)
- Form labels present on all inputs
- Color contrast: white (#fff) text on dark backgrounds meets WCAG AA

## Dependencies & Peer Dependencies

⚠️ **Important**: Install with `npm install --legacy-peer-deps` due to Lucide React peer dependency conflict (requires React 16.5 || 17 || 18, but project uses React 19).

**Runtime**: react@19, react-dom@19, next@15, framer-motion@11, lucide-react@0.394  
**Dev**: typescript@5.3, tailwindcss@3.4, postcss@8.4, autoprefixer@10.4, eslint@8.55

## Build & Deployment

### Production Build
```bash
npm run build
```
- Output: `.next/` folder (~50 MB)
- Bundle: 307 KB (optimized)
- First Load JS: 154 KB
- Static prerendered: 4 routes
- Builds successfully with TypeScript strict mode

### Deployment Options
1. **Vercel** (recommended): `vercel` CLI, auto-deploy from GitHub
2. **Netlify**: Connect GitHub, build: `npm run build`, publish: `.next`
3. **Self-hosted**: `npm start` on Node.js server (port 3000)

## ESLint & Code Quality

- Config: `.eslintrc.json` extends "next/core-web-vitals"
- Custom rule: `react/no-unescaped-entities: "off"` (allows single/double quotes in JSX)
- All files pass ESLint validation
- TypeScript strict mode enabled in `tsconfig.json`

## Environment Setup

- **Node.js**: 18+ required
- **npm**: Latest (or yarn alternative)
- **.env.local**: Optional for environment variables (currently not needed for basic setup)
- **Port**: Development on 3000, production on 3000

## Documentation Files

- `README.md` - Main project documentation
- `QUICKSTART.md` - Quick start guide (5 min setup)
- `00_START_HERE.md` - Project delivery summary
- `PROJECT_DOCUMENTATION.md` - Detailed feature documentation
- `LAUNCH_CHECKLIST.md` - Pre-launch verification steps
- Additional docs: INDEX.md, PROJECT_STATISTICS.md, NEXT_STEPS.md, DELIVERY_SUMMARY.md, FINAL_SUMMARY.md

## Key Files Reference

| File | Purpose | Customization |
|------|---------|---|
| `app/page.tsx` | Home page (renders all sections) | Add/remove sections |
| `components/Navbar.tsx` | Navigation & mobile menu | Logo, links, CTA |
| `components/Footer.tsx` | Footer & newsletter | Links, social media |
| `tailwind.config.ts` | Colors, fonts, animations | Brand colors, typography |
| `app/globals.css` | Global styles & animations | Custom CSS utilities |
| `app/layout.tsx` | Root layout & SEO | Meta tags, title |

## Notes for Future Development

- All sections use viewport-triggered animations (whileInView) - no load-time animation lag
- Component styling uses Tailwind utilities + custom CSS classes for complex effects (glass, hover-lift)
- Dark theme is core to design - avoid light color backgrounds
- Gold (#C89B3C) is the primary accent - use sparingly for emphasis
- Framer Motion variants are defined in each component - consistent pattern across codebase
- Forms, sliders (CustomerReviews), accordion (FAQ) are stateful - all use React hooks
- Image placeholders use emojis currently - ready for Next.js Image optimization
- No external APIs integrated yet - contact form and delivery checker are UI-only

## Production Readiness

✅ TypeScript strict mode enabled  
✅ ESLint validation passing  
✅ Production build tested  
✅ Responsive design verified  
✅ Performance optimized (307 KB bundle)  
✅ Security best practices (no hardcoded secrets)  
✅ Accessibility ready (semantic HTML, WCAG compatible)  
✅ SEO ready (meta tags, Open Graph, semantic HTML)  

Ready for immediate deployment or further customization.
