

# Redesign Hero Section Layout with Countdown Timer

## Overview
Restructure the hero section from centered layout to a **split two-column layout** matching the reference image: text content left-aligned on the left, a glassmorphic countdown timer on the right. Add a live countdown to March 2026.

## Layout Changes

**Current:** Centered text, single "Explore" button
**New:** Two-column split layout (left: text + buttons, right: countdown timer card)

### Left Column
- "COMING SOON" badge (top-left, matching current primary color styling)
- Large title: "E-Summit" with "Summit" in primary blue gradient, "2026" on second line in white
- Subtitle: "Where Ideas Become Startups" (or keep "Empowering Women & AI")
- Org line: "IIEST SHIBPUR | Entrepreneurship Development Cell"
- Two buttons side by side:
  - "Explore Events" (filled primary gradient, with arrow icon)
  - "View Brochure" (outline/glass style, with file icon)

### Right Column
- Glassmorphic card with "TIME TO LAUNCH" header in primary color
- Four flip-clock style digit boxes: Days, Hours, Mins, Secs
- Each box: dark glass background with large neon-blue numbers, label underneath
- Colon separators between boxes
- Live countdown using `useState` + `useEffect` with `setInterval` targeting March 1, 2026

### Responsive Behavior
- Desktop (lg+): two columns side by side
- Tablet/Mobile: stacked -- text on top, countdown below, both centered

## Technical Details

**File to modify:** `src/components/sections/Hero.tsx`

- Add `useState` and `useEffect` imports from React
- Create countdown logic: calculate days/hours/mins/secs from `Date.now()` to target date (March 1, 2026)
- Update interval every second
- Change outer container from `text-center` to a flex row with `items-center justify-between`
- Left div: left-aligned text with staggered Framer Motion animations (keep existing)
- Right div: glassmorphic countdown card with 4 digit boxes
- Keep `ParticleCanvas` and gradient orbs as background
- Style countdown boxes with `glass` utility class, primary color numbers
- Add `ArrowRight` and `FileText` icons from lucide-react for buttons

