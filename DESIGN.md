---
version: alpha
name: Pivo Landing
description: Premium dark Nexus-style SaaS landing page for plumbing revenue operations, using motion, bento cards, dark panels, and audit-first conversion clarity.
colors:
  primary: "#181612"
  paper: "#F3EFE6"
  ink: "#181612"
  muted: "#6F6658"
  charcoal: "#191815"
  cream: "#FFF8EA"
  sand: "#DED5C5"
  line: "#D6CFC3"
  orange: "#FB923C"
  warm-eyebrow: "#F3D4B8"
  gold: "#E5C27C"
typography:
  hero:
    fontFamily: Satoshi
    fontSize: 96px
    fontWeight: 500
    lineHeight: .86
    letterSpacing: "-.075em"
  h2:
    fontFamily: Satoshi
    fontSize: 64px
    fontWeight: 500
    lineHeight: .94
    letterSpacing: "-.065em"
  h3:
    fontFamily: Satoshi
    fontSize: 27px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-.04em"
  body:
    fontFamily: Satoshi
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.45
  lede:
    fontFamily: Satoshi
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.45
  eyebrow:
    fontFamily: Satoshi
    fontSize: 12px
    fontWeight: 700
    letterSpacing: .32em
rounded:
  sharp: 4px
  header: 22px
  pill: 999px
spacing:
  button-x: 20px
  card: 28px
  panel: 32px
  section-y: 120px
  section-tight-y: 38px
components:
  hero-primary-button:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
  hero-ghost-button:
    backgroundColor: "#322F2A"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
  light-card:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: 28px
  dark-audit-panel:
    backgroundColor: "#2D2A24"
    textColor: "{colors.cream}"
    rounded: "{rounded.sharp}"
    padding: 32px
  orange-problem-cue:
    backgroundColor: "#3A261A"
    textColor: "{colors.orange}"
    rounded: "{rounded.pill}"
    padding: 8px
  gold-proof-cue:
    backgroundColor: "#342D1D"
    textColor: "{colors.gold}"
    rounded: "{rounded.pill}"
    padding: 8px
  muted-lede:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    rounded: "{rounded.sharp}"
    padding: 16px
  hero-eyebrow:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.warm-eyebrow}"
    rounded: "{rounded.pill}"
    padding: 8px
  sand-cue:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: 8px
  line-divider:
    backgroundColor: "{colors.line}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: 8px
---

# Pivo Landing Design System

## Overview

The Pivo landing page now follows the Nexus work-management-platform template direction: dark SaaS atmosphere, centered hero, motion reveals, floating glass nav, marquee strip, bento feature cards, animated pricing/offer cards, and a strong final CTA.

The visual style should feel premium, modern, and operational, while the content stays blunt and commercial: missed calls, slow callbacks, stale quotes, and messy dispatch handoffs leak revenue.

## Colors

- **Paper (`#F3EFE6`)** is the main light-page background after the hero.
- **Ink (`#181612`)** carries the main body content.
- **Zinc/charcoal dark surfaces** drive the whole page, following the Nexus template direction.
- **Orange (`#FB923C`)** signals urgency, revenue leakage, CTA hover states, and numbered problem cues.
- **Cream / white** are used for hero CTAs and dark-section text.
- **Muted brown/gray (`#756D60`)** supports ledes and secondary explanatory text.

Use warm neutrals. Avoid cold blue enterprise SaaS palettes.

## Typography

Use **Satoshi** where available. The landing typography is larger and more editorial than the app UI:

- Hero H1 should be oversized, tight, and memorable.
- H2 sections should feel like campaign headlines, not dashboard labels.
- Eyebrows are uppercase, widely tracked, and restrained.
- Body copy should stay direct and business-readable.

## Layout

The page structure is linear and conversion-focused:

1. floating glass navbar
2. centered dark SaaS hero with motion reveal
3. marquee strip for workflow concepts
4. command-room product proof
5. bento grid for the hidden leak and audit deliverables
6. Revenue Leak Audit offer block
7. pricing/offer path cards
8. final CTA and footer

Keep section width around `1160px` and large vertical rhythm. The page should breathe more than the app demo.

## Elevation & Depth

Depth comes from:

- dark radial glows
- floating glass header
- bento card hover scale
- subtle border beam on the audit-first offer
- shimmer CTA
- noise overlay

Do not bring back the old static Hously image-led look unless Jacky explicitly asks. The current template direction is Nexus-style dark SaaS.

## Shapes

Use a contrast of shapes:

- Pill buttons and header CTA for marketing friendliness.
- Sharp 4px cards and product frames for professional seriousness.
- 22px fixed header radius for the floating glass navigation.

## Components

- **Header:** fixed floating glass navbar with hover pill animation.
- **Hero buttons:** primary white shimmer pill, secondary dark outline pill.
- **Bento cards:** dark rounded cards with subtle hover scale and operational icons.
- **Product frame:** dark mock command-room card with urgent/warm/recovered queue rows.
- **Audit block:** dark rounded section with clear diagnostic price, practical deliverables, and request-audit CTA.
- **Pricing cards:** three dark offer cards with the audit highlighted as the first step.
- **Final CTA:** large centered dark section with direct audit request and demo link.

## Do's and Don'ts

- Do keep the hero cinematic and premium.
- Do keep the copy commercially direct.
- Do make the Revenue Leak Audit feel like the first practical step: clear price, clear deliverables, clear next action.
- Do preserve the Nexus-style dark SaaS motion/template structure while replacing generic platform copy with Pivo plumbing revenue content.
- Don't make it cartoonish, overly blue, image-template dependent, or startup-generic.
- Don't add too many CTAs before the audit offer is clear.
- Don't sacrifice readability for visual atmosphere.
