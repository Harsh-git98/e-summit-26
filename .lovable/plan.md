

# E-Summit IIEST Shibpur — Landing Website Plan

## Design System
- **Theme:** "Cybernetic Elegance" — Dark mode with glassmorphism, neon glows, and bento grid layouts
- **Palette:** Void Black (#050505), Electric Royal Blue (#4169E1), Neon Magenta (#D946EF), White text, Soft Gray (#9CA3AF) body
- **Typography:** Syne (headings) + Inter (body) via Google Fonts — large, kinetic type
- **Effects:** Glassmorphic frosted cards, neon glow borders, gradient accents, scroll-triggered animations via Framer Motion

---

## Pages & Features

### 1. Landing Page (Home)

**Hero Section**
- Full-screen dark background with animated particle/neural network effect (canvas-based)
- Large staggered text reveal: "E-SUMMIT IIEST SHIBPUR" + "Empowering Women & AI"
- Pulsing "Coming Soon" badge
- Mouse-move parallax on background elements

**About Us Section**
- Split layout: duotone image left, mission text right
- Floating glass stat cards (Attendees, Startups, Speakers) with count-up animation on scroll
- Glowing "Download Brochure" CTA button

**What's In It For You — Bento Grid**
- 6 cards in a responsive bento grid layout (varied sizes)
- Competitions, Keynote Sessions, Panel Discussions, Creators Conclave, Internship Fair, Startup Expo
- Each with a Lucide icon, hover glow gradient effect, and links to sub-pages

**Past Speakers**
- Infinite horizontal scroll marquee of circular headshots with name/title overlays

**Sponsors**
- Current Sponsors: prominent white-on-glass grid
- Past Sponsors: smaller grayscale logos, color on hover

**Past Gallery**
- Photo gallery section with lightbox-style hover previews

### 2. Competitions Page
- Hero banner + cards for: Ideathon/VC Pitching, Quiz, Branding Challenge, Proto-make, Auction-war
- Event team details section
- Glassmorphic card design with hover animations

### 3. Networking Page
- Timeline/vertical view for: Keynote Session 1 & 2, Panel Discussion 1 & 2, Startup Expo
- Networking team details
- Animated timeline with scroll-triggered reveals

### 4. Creator Conclave Page
- About section + grid of creator profile cards (4 featured + college creators)
- Creators Conclave team section
- Cards with image, name, social links

### 5. Internship Fair Page
- About section + list of visiting companies
- Vertical step progress bar "Procedure Timeline"
- Team details section

### 6. Contact Page
- Sleek glassmorphic form with floating labels
- Contact info display + social media links

---

## Global Components

**Navbar**
- Fixed, glassmorphic top bar with blur backdrop
- Links: Competitions, Networking, Creators, Internship, Contact
- Mobile hamburger menu with slide-in animation

**Footer**
- Minimalist dark footer: quick links, social media icons (color-explode on hover), contact info

---

## Technical Approach
- **Framer Motion** for all scroll-triggered animations, staggered reveals, hover effects
- **React Router** for multi-page navigation
- Fully **responsive mobile-first** design
- All components accept **data via props** (dummy data in constants files, ready for backend API integration)
- API service files structured for future MERN backend connection

