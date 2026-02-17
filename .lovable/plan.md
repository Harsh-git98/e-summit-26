

# Replace Competition Cards with Flip Cards

## Overview
Replace the current flat glassmorphic competition cards on `/competitions` with the interactive `CardFlip` component. Each card will show the competition icon, title, and team size on the front, then flip on hover to reveal the full description and key features.

## Changes

### 1. Create `src/components/ui/flip-card.tsx`
- Add the `CardFlip` component adapted from the provided code
- Adjust the component to accept the competition data shape: `title`, `subtitle` (team size), `description`, `features` (extracted from description), and `color`
- Remove the "Start Building" CTA text and replace with competition-relevant text like "Learn More"
- Ensure the styling aligns with the existing dark theme (void black background, neon blue/magenta accents)

### 2. Update `src/pages/Competitions.tsx`
- Replace the current glassmorphic card grid with `CardFlip` components
- Map each competition from `COMPETITIONS` data to a flip card, passing:
  - `title` = competition name (e.g., "Envisage")
  - `subtitle` = team info (e.g., "Team of 2-4")
  - `description` = the competition description text
  - `features` = short bullet-point features derived from each competition
  - `color` = alternate between neon blue (#4169e1) and magenta (#d946ef) for visual variety
- Keep the hero banner section unchanged
- Maintain the responsive grid layout (1 col mobile, 2 col md, 3 col lg)
- Keep Framer Motion staggered entrance animations wrapping each card

### 3. Update `src/data/constants.ts`
- Add a `features` array to each competition entry (3-4 short feature strings per competition) to populate the flip card back, e.g.:
  - Envisage: ["B-Plan Pitch", "VC Panel Judging", "Funding & Mentorship", "Team of 2-4"]
  - Disrupt: ["Strategic Auction", "Portfolio Building", "High-Stakes Rounds", "Team of 2-4"]
  - etc.

## Technical Details

**No new dependencies needed** -- `lucide-react` is already installed.

**Files to create:**
- `src/components/ui/flip-card.tsx`

**Files to modify:**
- `src/pages/Competitions.tsx` -- swap card rendering to use `CardFlip`
- `src/data/constants.ts` -- add `features` arrays to competition entries

**Component prop mapping:**
```
COMPETITIONS[i].title       -> CardFlip title
COMPETITIONS[i].team        -> CardFlip subtitle
COMPETITIONS[i].description -> CardFlip description
COMPETITIONS[i].features    -> CardFlip features (new field)
color                       -> alternating #4169e1 / #d946ef
```
