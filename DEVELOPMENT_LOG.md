# Pivo Landing Development Log

Purpose: timestamped handoff notes for Jacky and future agents. Keep entries concise: when, what changed, why, and where to inspect.

## 2026-06-30 UTC — Rebuilt landing with Nexus template direction

What changed:

- Replaced the rejected Hously/static-feeling UI with a Nexus-style dark SaaS landing page.
- Kept the implementation in Next.js/React components, not static HTML/CSS.
- Added template-inspired sections:
  - floating glass navbar
  - animated hero
  - workflow marquee
  - dark command-room product proof
  - bento-grid problem/system cards
  - Revenue Leak Audit offer block
  - audit-first pricing cards
  - final CTA and footer
- Preserved Pivo business content around missed calls, quote follow-up, dispatch handoffs, plumbing revenue operations, and the Revenue Leak Audit.
- Updated `DESIGN.md` to make Nexus-style dark SaaS the current visual contract.

Why:

- Jacky said the previous UI/UX was really bad and asked to use the uploaded Nexus work-management-platform design as the template while keeping Pivo content.

Verification:

- Ran `npm run build` successfully with Next.js 16.2.9.
- Ran `npx -y @google/design.md lint DESIGN.md` successfully with 0 errors and 0 warnings.
- Verified the local dev server returned HTTP 200 and included the expected Pivo/Nexus-redesign content.
- Browser screenshot was blocked by runtime browser policy / Chrome crashpad in this container, so visual verification is limited to build + rendered HTML response here.

## 2026-06-30 UTC — Tightened Revenue Leak Audit offer

What changed:

- Strengthened the landing page around the first paid offer: `Revenue Leak Audit`.
- Changed the primary CTA language from booking to requesting the audit.
- Added a clearer audit panel with one-time diagnostic price range: `$500–$1,500`.
- Added a `What you get` deliverables list:
  - missed-call review
  - quote follow-up map
  - dispatch handoff check
  - revenue leak summary
- Added an `After the audit` outcomes section so owners know what they walk away with.
- Updated the final CTA mailto link with a pre-filled audit request template.
- Updated `DESIGN.md` prose to preserve the audit-offer design direction.

Why:

- Jacky asked to tighten the landing page offer first.
- The page needed to make the audit feel like a concrete first step before selling software or platform commitment.

Verification:

- Ran `npx -y @google/design.md lint DESIGN.md` successfully with 0 errors and 0 warnings.
- Ran `npm run build` successfully with Next.js 16.2.9.

## 2026-06-29 UTC — Added DESIGN.md visual contract

What changed:

- Added `DESIGN.md` for the standalone Next/React Pivo landing repo.
- Captured the current landing-page visual contract:
  - Hously-inspired architectural hero mood
  - plumbing revenue-operations messaging
  - warm paper/charcoal/orange palette
  - oversized editorial Satoshi typography
  - pill CTAs and sharp 4px cards
  - Revenue Leak Audit as the primary conversion offer
- Updated `README.md` with the design-system validation command.

Why:

- Jacky adopted the Google Labs DESIGN.md pattern and wants future frontend/product work, including sub-agents, to use persistent project design memory.
- The landing page needs to stay premium, specific, and commercially sharp instead of becoming a generic SaaS page.

Verification:

- Ran `npx -y @google/design.md lint DESIGN.md` successfully with 0 errors and 0 warnings.

## 2026-06-25 02:20 UTC — Restored original hero background

What changed:

- Restored the original Hously hero background image as `public/assets/images/hously-background.png`.
- Updated `app/page.tsx` so the hero background uses the restored Hously image again.
- Kept the plumbing-business SVG visuals for the other landing sections.

Why:

- Jacky asked to bring back the hero background after the plumbing-image replacement pass.

Verification:

- Ran `npm run build` successfully with Next.js `16.2.9`.

GitHub:

- Commit: `ea82dd4 Restore original hero background`

Current image state after this update:

- Hero background: restored original Hously architecture background.
- Hero foreground: plumbing-business SVG foreground.
- Supporting section visuals: plumbing-business SVGs for intake, service van, tools, and dispatch.

## 2026-06-25 02:05 UTC — Replaced Hously architecture images with plumbing-business visuals

What changed:

- Removed the remaining Hously architecture image assets from the Next landing repo.
- Added local plumbing-business SVG visuals under `public/assets/images/`:
  - `pivo-hero-bg.svg`
  - `pivo-hero-fg.svg`
  - `pivo-intake.svg`
  - `pivo-van.svg`
  - `pivo-tools.svg`
  - `pivo-dispatch.svg`
- Updated `app/page.tsx` image references and alt text to match plumbing business context.
- Kept assets local so GitHub/Vercel does not depend on unreliable external stock-image links.

Why:

- Jacky asked to replace the template architecture images with plumbing-business-related images.
- Image generation was attempted first but blocked by the OpenAI billing hard limit, so the safe fallback was local SVG imagery.

Verification:

- Ran `npm run build` successfully with Next.js `16.2.9`.

GitHub:

- Commit: `653fa45 Replace landing images with plumbing visuals`

Notes / cuts:

- These are custom local SVG illustrations, not stock photography.
- If Jacky wants real photographic images later, replace the SVG files in `public/assets/images/` with licensed photo assets using the same filenames or update `app/page.tsx` references.

## 2026-06-25 01:35 UTC — Converted landing page to Next/React

What changed:

- Converted `pivo-landing` from static HTML/CSS into a proper Next.js App Router project.
- Added React page structure in `app/page.tsx`.
- Added shared metadata/layout in `app/layout.tsx`.
- Moved global styling into `app/globals.css`.
- Moved Hously-derived image/font assets into `public/assets/` for Next/Vercel serving.
- Rebuilt the hero scroll-intercept animation as React client-side logic using `useEffect`, refs, and wheel/touch listeners.
- Added Vercel-ready project files:
  - `package.json`
  - `package-lock.json`
  - `next.config.mjs`
  - `tsconfig.json`
  - `.gitignore`
- Removed the old static files:
  - `index.html`
  - `styles.css`
  - `hero-scroll.js`
  - `vercel.json`

Why:

- Jacky clarified that the Pivo landing page should use Next/React instead of plain HTML/CSS.
- The standalone `pivo-landing` repo is intended for Vercel-hosted marketing and business-development use.
- Jacky also clarified that Drive zip uploads are not needed because GitHub is enough.

Verification:

- Ran `npm audit --omit=dev` successfully with 0 vulnerabilities after upgrading/pinning dependencies.
- Ran `npm run build` successfully with Next.js `16.2.9`.
- Confirmed the local Next dev server served the page at `http://localhost:3000`.
- Confirmed public asset routing for `/assets/images/hously-background.png`.

GitHub:

- Repo: `https://github.com/WestsideUnion/pivo-landing`
- Commit: `6dc9b84 Convert landing page to Next React`

Notes / cuts:

- No Drive zip was created or uploaded for this change.
- Browser screenshot verification was not available because browser navigation was blocked by runtime policy, so verification used Next build and local HTTP checks.

## 2026-06-25 01:05 UTC — Restored static hero scroll animation

What changed:

- Added `hero-scroll.js` to restore the Hously-style hero scroll-intercept animation in the earlier static HTML version.
- Wired the script into the standalone landing page.
- Added CSS support for smooth hero copy transform/opacity and an unlocked scroll cue.

Why:

- Jacky reported the hero section scrolling animation was not working after the first Hously template adaptation.
- Cause: the original Hously template used React client-side scroll logic; the first static port copied the layered visuals but not the animation logic.

Verification:

- Ran `node --check hero-scroll.js`.
- Parsed HTML with Python `HTMLParser`.
- Checked CSS brace balance.

GitHub:

- Commit: `0801252 Restore hero scroll animation`

## 2026-06-25 00:45 UTC — Applied Hously UI/UX template direction

What changed:

- Applied Jacky's supplied Hously modern architecture studio UI/UX template direction to the standalone Pivo landing page.
- Copied template image/font assets into the repo.
- Updated the page toward the template's dark architectural mood:
  - image-led hero
  - warm orange/sand accent
  - Satoshi typography
  - sharper minimal cards
  - premium command-room feel

Why:

- Jacky supplied the Hously template and asked to apply that UI/UX template to both Pivo and pivo-landing.

Verification:

- Parsed HTML with Python `HTMLParser`.
- Checked CSS brace balance.

GitHub:

- Commit: `2098cc2 Apply Hously UI template direction`

## 2026-06-24 — Created standalone Pivo landing repo

What changed:

- Created the standalone `pivo-landing` repo for marketing/business-development use.
- Initialized the first static landing page version.
- Pushed the repo to GitHub under Westside Union.

Why:

- Jacky wanted Pivo's marketing landing page separated from the main Pivo app repo so it can be developed and deployed independently on Vercel.

GitHub:

- Repo: `https://github.com/WestsideUnion/pivo-landing`
- Commit: `1fe0e0b Create standalone Pivo landing page`
