# Nutriday

## Overview
Landing page B2B para restaurante corporativo em Alagoas, com 17 anos de mercado. Objetivo: gerar leads via WhatsApp e apresentar credibilidade institucional.

**Design Direction**: "Brasileiro Vibrante" - Bold colors, organic blob shapes, giant decorative numbers, asymmetric layouts inspired by Brazilian art and tropical energy.

## Commands
- `npm run dev` - Start development server (Turbopack)
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Design tokens & global styles
└── components/
    ├── Navbar/         # Fixed navigation with organic logo
    ├── Hero/           # Diagonal split hero with floating stats
    ├── Features/       # Bento Grid layout with 6 differentials
    ├── HowItWorks/     # 3-step timeline with animated progress
    ├── Services/       # Tag cloud design with pricing
    ├── About/          # Founders story with organic shapes
    ├── CTASection/     # Final CTA with blob animations
    └── Footer/         # Grid layout with wave decoration
```

## Design Tokens

### Colors
```css
--color-verde: #264838;       /* Primary - authority, health */
--color-verde-claro: #84A14F; /* Accent - freshness */
--color-laranja: #EE701E;     /* CTA - energy, appetite */
--color-creme: #DCE1CB;       /* Background - organic */
--color-terracota: #C45D2E;   /* Deep accent */
--color-amarelo: #F5B041;     /* Warm accent */
```

### Typography
- Display: Archivo Black (bold, impactful headlines)
- Body: Outfit (modern, readable)

### Key Visual Elements
- Organic blob shapes with morph animations
- Giant decorative numbers (17, ZAP)
- Diagonal backgrounds and asymmetric layouts
- Bento grid for features
- Floating elements with animation delays
- Grain texture overlay

### Spacing
Uses CSS custom properties: `--space-xs` through `--space-5xl`

## Components

All components follow the same pattern:
- `ComponentName.tsx` - React component
- `ComponentName.module.css` - Scoped styles
- `index.ts` - Named export

### Key Patterns
- IntersectionObserver for scroll reveal animations
- CSS Modules for styling
- WhatsApp links for all CTAs (update number in components)
- Staggered animation delays for visual interest

## Content to Update

Before deploying, update these items:

1. **WhatsApp Number**: Search for `5582993132265` and replace with actual number
   - Files: Navbar, Hero, Services, CTASection, Footer

2. **Images**: Replace placeholders in:
   - Hero section (main photo)
   - About section (founders photo)

3. **Instagram**: Update Instagram URL in Footer

4. **Contact Info**: Update phone/address in Footer if needed

## Deployment

Deploy to Vercel:
```bash
npx vercel
```

## Referral Code (post-project)
When completing the project: `RESTNUTRIDAY`
