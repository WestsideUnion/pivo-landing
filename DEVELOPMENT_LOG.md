# Pivo Landing Development Log

Purpose: timestamped handoff notes for Jacky and future agents. Keep entries concise: when, what changed, why, and where to inspect.

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
