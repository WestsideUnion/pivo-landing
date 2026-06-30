---
version: alpha
name: Pivo Landing
description: Premium conversion landing page for plumbing revenue operations, using Hously-inspired architectural mood with plumbing-specific business clarity.
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

The Pivo landing page should feel like a premium editorial architecture landing page translated into plumbing revenue operations. It is image-led, atmospheric, and refined, but the message stays blunt and commercial: missed calls, slow callbacks, stale quotes, and messy dispatch handoffs leak revenue.

The page is not a generic SaaS marketing template. It should feel calm, expensive, and specific to owner-operators who understand that the phone ringing is where money starts or disappears.

## Colors

- **Paper (`#F3EFE6`)** is the main light-page background after the hero.
- **Ink (`#181612`)** carries the main body content.
- **Charcoal (`#191815`)** is used for the hero atmosphere, product-frame mockup, and Revenue Leak Audit section.
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

1. sticky glass header
2. full-screen image-led hero with scroll-intercept animation
3. hidden-leak framing
4. problem cards
5. system/product proof
6. visual workflow band
7. Revenue Leak Audit offer
8. pricing assumptions
9. final CTA

Keep section width around `1160px` and large vertical rhythm. The page should breathe more than the app demo.

## Elevation & Depth

Depth comes from:

- image-backed hero layers
- translucent glass header
- soft warm card shadows
- product mockup panels
- dark audit band contrast

Do not overdo glass effects on light sections. The landing page should feel polished, not foggy.

## Shapes

Use a contrast of shapes:

- Pill buttons and header CTA for marketing friendliness.
- Sharp 4px cards and product frames for professional seriousness.
- 22px fixed header radius for the floating glass navigation.

## Components

- **Header:** fixed glass, white text over hero, compact nav.
- **Hero buttons:** primary white pill, secondary ghost pill.
- **Problem cards:** sharp 4px, tall, lightly frosted over paper.
- **Product frame:** dark charcoal mockup with urgent/warm/cool queue cards.
- **Audit band:** full-width charcoal section with a clear one-time diagnostic price, practical deliverables, and a direct request-audit CTA.
- **Outcome strip:** light follow-up section that tells owners what they walk away knowing after the audit.
- **Pricing cards:** simple three-card assumption block, with Core highlighted.

## Do's and Don'ts

- Do keep the hero cinematic and premium.
- Do keep the copy commercially direct.
- Do make the Revenue Leak Audit feel like the first practical step: clear price, clear deliverables, clear next action.
- Do preserve the Hously-inspired architectural mood while replacing generic architecture meaning with plumbing-business reality.
- Don't make it cartoonish, overly blue, or startup-generic.
- Don't add too many CTAs before the audit offer is clear.
- Don't sacrifice readability for visual atmosphere.
