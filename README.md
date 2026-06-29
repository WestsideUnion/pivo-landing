# Pivo Landing Page

Standalone Next/React marketing and business-development landing page for Pivo, ready for Vercel.

UI direction: adapted from Jacky's Hously modern architecture studio template — dark architectural hero, warm orange/sand accent, Satoshi typography, sharp minimal cards, image-led sections, and scroll-driven hero animation.

## Design system

This repo has a project `DESIGN.md` contract for future landing-page visual work. Follow it before changing the hero, typography, colors, cards, CTA styling, layout rhythm, or visual direction.

Validate with:

```bash
npx -y @google/design.md lint DESIGN.md
```

## Local preview

```bash
npm install
npm run dev
```

## Deploy to Vercel

Import `WestsideUnion/pivo-landing` into Vercel.

Recommended settings:

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: leave default
