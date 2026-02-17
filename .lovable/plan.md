

# Update E-Summit Website with Brochure Content

## Overview
Replace placeholder/generic content across the website with actual data from the E-Summit'26 Sponsorship Brochure. This includes updating text, stats, competitions, speakers, sponsors, contact info, and adding new event tracks mentioned in the brochure.

---

## Changes

### 1. Update `src/data/constants.ts` (Central Data File)

**About Stats** -- Update to match brochure numbers:
- Attendees: 10,000+ (brochure says "10,000+ students")
- Startups: 50+ (brochure confirms "50+ startups and investors")
- Speakers: 20+ (keep as is, brochure lists multiple past speakers)

**Competitions** -- Replace current list with brochure competitions:
- Envisage (B-Plan Competition)
- Disrupt (Auction)
- QR Hunt (Knowledge stream of the Entrepreneurial World)
- Hackstart (Buildathon Challenge)
- Build With US (Branding Challenge)
- Entrivia (Entrepreneurship Quiz)

**Tracks / Bento Grid** -- Add new tracks from brochure:
- Replace "Startup Expo" with "Startup Expo & Drone/Auto Expo"
- Add "Workshops" as a track (mentioned on page 4)
- Keep: Competitions, Keynote Sessions, Creator Conclave, Internship Fair (now "Fair & Expo")

**Past Speakers** -- Replace with real speakers from brochure:
- Shruti Reddy -- Founder & CEO, Anthyesti Funeral Services
- Debarya Dutta -- Founder-CEO, Upraised
- Ranjan Mistry -- Social Entrepreneur
- Swaroop Prasad Ghosh -- Director, Maulana Abul Kalam Azad Institute of Asian Studies
- Aaqib Hussain -- Founding Partner, Freeflow Venture Builders
- Ankit Prasad -- Founder & CEO, Bobble AI
- Tanya Khanijow -- Travel Vlogger
- Sumit Gupta -- Co-Founder, Infimonk
- Ranjan Das -- Chairman, The Strategy Academy
- Kiran Verma -- Founder, Simply Blood

**Past Sponsors** -- Replace with real sponsors from brochure:
- Xelp, Simoco, 10000 Startups (NASSCOM), ACE Money, Engineering Academy, ISOEH, Enliqui, CoinDCX, RedBull, SquashCODE, WOW!, Paharpur, Freeflow, Think India, and others

**Contact Info** -- Update with brochure details:
- Email: iiests.edc@gmail.com
- Website: edc-iiests.in
- Social: edc.iiests
- Contact: Shreyansh (8478090242), Arnav Aarit (9060227813)
- Address: Entrepreneurship Development Cell, IIEST Shibpur, Howrah, West Bengal, 711101

**Social Links** -- Update Instagram/social handles to `edc.iiests`

### 2. Update `src/components/sections/About.tsx`

- Change "About E-Summit" description to use brochure text: "E-Summit'26 is the annual flagship event of E-Cell, IIEST Shibpur to foster entrepreneurial initiatives..."
- Update the mission/goals paragraph from brochure page 3
- Add "About IIEST Shibpur" blurb from brochure page 2 as secondary text

### 3. Update `src/components/sections/Hero.tsx`

- Change title to "E-SUMMIT'26" (with the apostrophe 26)
- Update subtitle to "March 2026" or "March 2026 | IIEST Shibpur"
- Keep "Empowering Women & AI" tagline
- Add "Entrepreneurship Development Cell" subtitle

### 4. Update `src/pages/Competitions.tsx`

- Update competition cards with the 6 real competitions from the brochure (Envisage, Disrupt, QR Hunt, Hackstart, Build With US, Entrivia)

### 5. Update `src/components/Footer.tsx`

- Update contact info to match brochure (email, phone numbers, address with correct PIN 711101)
- Add "Entrepreneurship Development Cell" branding

### 6. Update `src/pages/Internship.tsx`

- Rename to "Fair & Expo" to match brochure terminology
- Update description with Startup Expo + Drone/Auto Expo content from brochure
- Include the expo benefits: Inground Visibility, Investors Trail, Networking Arena, etc.

### 7. Update `src/pages/Contact.tsx`

- Update contact details to match brochure: email, phone numbers (Shreyansh & Arnav Aarit), address

---

## Technical Details

All changes are data-driven updates to `src/data/constants.ts` and text updates in component files. No architectural changes needed. The component structure remains the same -- only the content props/data change.

**Files to modify:**
- `src/data/constants.ts` -- primary data updates
- `src/components/sections/Hero.tsx` -- title/subtitle text
- `src/components/sections/About.tsx` -- about text content
- `src/components/Footer.tsx` -- contact info
- `src/pages/Competitions.tsx` -- hero text
- `src/pages/Internship.tsx` -- rename/update content
- `src/pages/Contact.tsx` -- contact details
- `src/components/Navbar.tsx` -- update nav link label if renaming Internship to Fair & Expo

