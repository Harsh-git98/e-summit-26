import {
  Trophy, Mic, MessageSquare, Video, Briefcase, Rocket,
  Brain, HelpCircle, Palette, Wrench, Gavel, Search,
  Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe,
} from "lucide-react";

// ── Navigation ──
export const NAV_LINKS = [
  { label: "Competitions", href: "/competitions" },
  { label: "Networking", href: "/networking" },
  { label: "Creators", href: "/creators" },
  { label: "Fair & Expo", href: "/internship" },
  { label: "Contact", href: "/contact" },
];

// ── About Stats ──
export const STATS = [
  { label: "Attendees", value: 10000, suffix: "+" },
  { label: "Startups & Investors", value: 50, suffix: "+" },
  { label: "Speakers", value: 20, suffix: "+" },
];

// ── Bento Grid Tracks ──
export const TRACKS = [
  { title: "Competitions", description: "Envisage, Disrupt, QR Hunt, Hackstart & more — test your entrepreneurial mettle.", icon: Trophy, href: "/competitions", span: "col-span-2 row-span-2" },
  { title: "Keynote Sessions", description: "Industry leaders sharing vision on AI, startups & Women empowerment.", icon: Mic, href: "/networking", span: "col-span-1 row-span-1" },
  { title: "Panel Discussions", description: "Debates on AI, Ethics, and the future of entrepreneurship.", icon: MessageSquare, href: "/networking", span: "col-span-1 row-span-1" },
  { title: "Creators Conclave", description: "Digital influencers & content creators come together.", icon: Video, href: "/creators", span: "col-span-1 row-span-2" },
  { title: "Fair & Expo", description: "Internship Fair, Startup Expo, Drone & Auto Expo — all under one roof.", icon: Briefcase, href: "/internship", span: "col-span-1 row-span-1" },
  { title: "Workshops", description: "Hands-on sessions to build real skills in tech and business.", icon: Wrench, href: "/networking", span: "col-span-1 row-span-1" },
];

// ── Past Speakers ──
export const SPEAKERS = [
  { name: "Shruti Reddy", title: "Founder & CEO, Anthyesti Funeral Services", image: "https://i.pravatar.cc/200?img=1" },
  { name: "Debarya Dutta", title: "Founder-CEO, Upraised", image: "https://i.pravatar.cc/200?img=3" },
  { name: "Ranjan Mistry", title: "Social Entrepreneur", image: "https://i.pravatar.cc/200?img=7" },
  { name: "Swaroop Prasad Ghosh", title: "Director, MAKAIAS", image: "https://i.pravatar.cc/200?img=11" },
  { name: "Aaqib Hussain", title: "Founding Partner, Freeflow Venture Builders", image: "https://i.pravatar.cc/200?img=5" },
  { name: "Ankit Prasad", title: "Founder & CEO, Bobble AI", image: "https://i.pravatar.cc/200?img=12" },
  { name: "Tanya Khanijow", title: "Travel Vlogger", image: "https://i.pravatar.cc/200?img=9" },
  { name: "Sumit Gupta", title: "Co-Founder, Infimonk", image: "https://i.pravatar.cc/200?img=15" },
  { name: "Ranjan Das", title: "Chairman, The Strategy Academy", image: "https://i.pravatar.cc/200?img=8" },
  { name: "Kiran Verma", title: "Founder, Simply Blood", image: "https://i.pravatar.cc/200?img=16" },
];

// ── Sponsors ──
export const CURRENT_SPONSORS = [
  { name: "NASSCOM 10000 Startups", logo: "https://placehold.co/200x80/1a1a2e/ffffff?text=NASSCOM" },
  { name: "CoinDCX", logo: "https://placehold.co/200x80/1a1a2e/ffffff?text=CoinDCX" },
  { name: "RedBull", logo: "https://placehold.co/200x80/1a1a2e/ffffff?text=RedBull" },
  { name: "Freeflow", logo: "https://placehold.co/200x80/1a1a2e/ffffff?text=Freeflow" },
];

export const PAST_SPONSORS = [
  { name: "Xelp", logo: "https://placehold.co/160x60/333/999?text=Xelp" },
  { name: "Simoco", logo: "https://placehold.co/160x60/333/999?text=Simoco" },
  { name: "ACE Money", logo: "https://placehold.co/160x60/333/999?text=ACE+Money" },
  { name: "Engineering Academy", logo: "https://placehold.co/160x60/333/999?text=Engg+Academy" },
  { name: "ISOEH", logo: "https://placehold.co/160x60/333/999?text=ISOEH" },
  { name: "Enliqui", logo: "https://placehold.co/160x60/333/999?text=Enliqui" },
  { name: "SquashCODE", logo: "https://placehold.co/160x60/333/999?text=SquashCODE" },
  { name: "WOW!", logo: "https://placehold.co/160x60/333/999?text=WOW!" },
  { name: "Paharpur", logo: "https://placehold.co/160x60/333/999?text=Paharpur" },
  { name: "Think India", logo: "https://placehold.co/160x60/333/999?text=Think+India" },
];

// ── Competitions ──
export const COMPETITIONS = [
  { title: "Envisage", description: "The flagship B-Plan competition — present your startup idea to a panel of VCs and industry experts. Top ideas win funding and mentorship.", icon: Brain, team: "Team of 2-4", features: ["B-Plan Pitch", "VC Panel Judging", "Funding & Mentorship", "Team of 2-4"] },
  { title: "Disrupt", description: "A high-stakes auction game where teams compete strategically to build the best portfolio of startup assets.", icon: Gavel, team: "Team of 2-4", features: ["Strategic Auction", "Portfolio Building", "High-Stakes Rounds", "Team of 2-4"] },
  { title: "QR Hunt", description: "A thrilling knowledge hunt through the entrepreneurial world — decode clues, scan QR codes, and race to the finish.", icon: Search, team: "Team of 2-3", features: ["QR Code Clues", "Entrepreneurship Trivia", "Campus-Wide Hunt", "Team of 2-3"] },
  { title: "Hackstart", description: "A buildathon challenge — ideate, prototype, and present a working solution to real-world problems within a time limit.", icon: Wrench, team: "Team of 3-5", features: ["Rapid Prototyping", "Real-World Problems", "Time-Bound Build", "Team of 3-5"] },
  { title: "Build With US", description: "The ultimate branding challenge — create a complete brand identity from scratch. Logo, tagline, pitch deck — all in 24 hours.", icon: Palette, team: "Team of 2-3", features: ["Brand Identity", "Logo & Tagline", "Pitch Deck", "24-Hour Sprint"] },
  { title: "Entrivia", description: "Test your knowledge of entrepreneurship, startups, and technology in this fast-paced entrepreneurship quiz.", icon: HelpCircle, team: "Individual", features: ["Quick-Fire Rounds", "Startup Knowledge", "Tech & Business", "Individual Event"] },
];

// ── Networking Events ──
export const NETWORKING_EVENTS = [
  { title: "Keynote Session 1", description: "Opening keynote on 'The Future of Women in AI' by leading industry voices.", time: "10:00 AM", day: "Day 1" },
  { title: "Panel Discussion 1", description: "Debate: 'AI Ethics — Where Do We Draw the Line?' with experts from academia and industry.", time: "2:00 PM", day: "Day 1" },
  { title: "Keynote Session 2", description: "Closing keynote on 'Building Billion-Dollar Startups from Tier-2 Cities'.", time: "10:00 AM", day: "Day 2" },
  { title: "Panel Discussion 2", description: "Discussion: 'Women Founders — Breaking the Glass Ceiling in Tech'.", time: "2:00 PM", day: "Day 2" },
  { title: "Startup Expo & Drone/Auto Expo", description: "Exhibition hall where 50+ startups showcase products alongside drone and auto exhibitions.", time: "All Day", day: "Day 1 & 2" },
];

// ── Creators ──
export const FEATURED_CREATORS = [
  { name: "Ankita Roy", handle: "@ankitaroy", followers: "1.2M", platform: "Instagram", image: "https://i.pravatar.cc/300?img=20" },
  { name: "Sahil Tech", handle: "@sahiltech", followers: "800K", platform: "YouTube", image: "https://i.pravatar.cc/300?img=12" },
  { name: "Nisha Verma", handle: "@nishaverma", followers: "2.5M", platform: "Instagram", image: "https://i.pravatar.cc/300?img=23" },
  { name: "Dev Diaries", handle: "@devdiaries", followers: "500K", platform: "YouTube", image: "https://i.pravatar.cc/300?img=15" },
];

// ── Fair & Expo Companies ──
export const FAIR_COMPANIES = [
  "Google", "Microsoft", "Amazon", "Flipkart", "Razorpay",
  "Zerodha", "PhonePe", "Ola", "Swiggy", "CRED",
  "Tata Digital", "Infosys", "TCS", "Wipro", "HCL",
];

export const EXPO_BENEFITS = [
  "Inground Visibility",
  "Investors Trail",
  "Networking Arena",
  "Drone & Auto Expo",
  "Startup Showcase",
];

export const INTERNSHIP_STEPS = [
  { step: 1, title: "Register Online", description: "Sign up on our portal with your resume and preferred companies." },
  { step: 2, title: "Profile Screening", description: "Our team reviews your profile and matches you with relevant companies." },
  { step: 3, title: "Get Your Slot", description: "Receive your interview schedule and company assignments." },
  { step: 4, title: "Attend the Fair", description: "Visit booths, give interviews, and network with recruiters." },
  { step: 5, title: "Get Hired!", description: "Receive offers on the spot or within a week of the fair." },
];

// ── Contact / Social ──
export const SOCIAL_LINKS = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/edc.iiests", color: "hover:text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/edc-iiests", color: "hover:text-blue-400" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/edc_iiests", color: "hover:text-sky-400" },
  { name: "Website", icon: Globe, href: "https://edc-iiests.in", color: "hover:text-primary" },
  { name: "Email", icon: Mail, href: "mailto:iiests.edc@gmail.com", color: "hover:text-primary" },
];

export const CONTACT_INFO = {
  email: "iiests.edc@gmail.com",
  phone1: { name: "Shreyansh", number: "+91 84780 90242" },
  phone2: { name: "Arnav Aarit", number: "+91 90602 27813" },
  address: "Entrepreneurship Development Cell, IIEST Shibpur, Howrah, West Bengal — 711101",
};

// ── Gallery ──
export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5f9cf1da241d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=400&fit=crop",
];
