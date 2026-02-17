import {
  Trophy, Mic, MessageSquare, Video, Briefcase, Rocket,
  Brain, HelpCircle, Palette, Wrench, Gavel,
  Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe,
} from "lucide-react";

// ── Navigation ──
export const NAV_LINKS = [
  { label: "Competitions", href: "/competitions" },
  { label: "Networking", href: "/networking" },
  { label: "Creators", href: "/creators" },
  { label: "Internship", href: "/internship" },
  { label: "Contact", href: "/contact" },
];

// ── About Stats ──
export const STATS = [
  { label: "Attendees", value: 5000, suffix: "+" },
  { label: "Startups", value: 50, suffix: "+" },
  { label: "Speakers", value: 20, suffix: "+" },
];

// ── Bento Grid Tracks ──
export const TRACKS = [
  { title: "Competitions", description: "Ideathon, VC Pitching & more — test your entrepreneurial mettle.", icon: Trophy, href: "/competitions", span: "col-span-2 row-span-2" },
  { title: "Keynote Sessions", description: "Industry leaders sharing vision on AI & Women empowerment.", icon: Mic, href: "/networking", span: "col-span-1 row-span-1" },
  { title: "Panel Discussions", description: "Debates on AI, Ethics, and the future of entrepreneurship.", icon: MessageSquare, href: "/networking", span: "col-span-1 row-span-1" },
  { title: "Creators Conclave", description: "Digital influencers & content creators come together.", icon: Video, href: "/creators", span: "col-span-1 row-span-2" },
  { title: "Internship Fair", description: "Career opportunities with top companies visiting campus.", icon: Briefcase, href: "/internship", span: "col-span-1 row-span-1" },
  { title: "Startup Expo", description: "Showcase innovation and connect with investors.", icon: Rocket, href: "/networking", span: "col-span-1 row-span-1" },
];

// ── Past Speakers ──
export const SPEAKERS = [
  { name: "Dr. Aarti Gupta", title: "AI Research Lead, Google", image: "https://i.pravatar.cc/200?img=1" },
  { name: "Priya Sharma", title: "CEO, TechWomen India", image: "https://i.pravatar.cc/200?img=5" },
  { name: "Rajeev Kapoor", title: "Founder, InnoVentures", image: "https://i.pravatar.cc/200?img=3" },
  { name: "Sanya Malhotra", title: "VP Engineering, Microsoft", image: "https://i.pravatar.cc/200?img=9" },
  { name: "Vikram Singh", title: "Partner, Sequoia Capital", image: "https://i.pravatar.cc/200?img=7" },
  { name: "Ananya Das", title: "CTO, DeepMind India", image: "https://i.pravatar.cc/200?img=10" },
  { name: "Rohit Mehta", title: "Founder, AI4Bharat", image: "https://i.pravatar.cc/200?img=11" },
  { name: "Meera Joshi", title: "Director, NASSCOM", image: "https://i.pravatar.cc/200?img=16" },
];

// ── Sponsors ──
export const CURRENT_SPONSORS = [
  { name: "TechCorp", logo: "https://placehold.co/200x80/1a1a2e/ffffff?text=TechCorp" },
  { name: "InnovateLabs", logo: "https://placehold.co/200x80/1a1a2e/ffffff?text=InnovateLabs" },
  { name: "FutureAI", logo: "https://placehold.co/200x80/1a1a2e/ffffff?text=FutureAI" },
  { name: "StartupIndia", logo: "https://placehold.co/200x80/1a1a2e/ffffff?text=StartupIndia" },
];

export const PAST_SPONSORS = [
  { name: "DataDriven", logo: "https://placehold.co/160x60/333/999?text=DataDriven" },
  { name: "CloudNine", logo: "https://placehold.co/160x60/333/999?text=CloudNine" },
  { name: "ByteForce", logo: "https://placehold.co/160x60/333/999?text=ByteForce" },
  { name: "NeuralNet", logo: "https://placehold.co/160x60/333/999?text=NeuralNet" },
  { name: "QuantumLeap", logo: "https://placehold.co/160x60/333/999?text=QuantumLeap" },
  { name: "VentureX", logo: "https://placehold.co/160x60/333/999?text=VentureX" },
];

// ── Competitions ──
export const COMPETITIONS = [
  { title: "Ideathon / VC Pitching", description: "Pitch your startup idea to a panel of VCs and industry experts. Top ideas win funding and mentorship.", icon: Brain, team: "Team of 2-4" },
  { title: "E-Quiz", description: "Test your knowledge of entrepreneurship, startups, and technology in this fast-paced quiz competition.", icon: HelpCircle, team: "Individual" },
  { title: "Branding Challenge", description: "Create a complete brand identity from scratch. Logo, tagline, pitch deck — all in 24 hours.", icon: Palette, team: "Team of 2-3" },
  { title: "Proto-Make", description: "Build a working prototype that solves a real-world problem. Hardware + Software tracks.", icon: Wrench, team: "Team of 3-5" },
  { title: "Auction War", description: "Strategic bidding game where teams compete to build the best portfolio of startup assets.", icon: Gavel, team: "Team of 2-4" },
];

// ── Networking Events ──
export const NETWORKING_EVENTS = [
  { title: "Keynote Session 1", description: "Opening keynote on 'The Future of Women in AI' by leading industry voices.", time: "10:00 AM", day: "Day 1" },
  { title: "Panel Discussion 1", description: "Debate: 'AI Ethics — Where Do We Draw the Line?' with experts from academia and industry.", time: "2:00 PM", day: "Day 1" },
  { title: "Keynote Session 2", description: "Closing keynote on 'Building Billion-Dollar Startups from Tier-2 Cities'.", time: "10:00 AM", day: "Day 2" },
  { title: "Panel Discussion 2", description: "Discussion: 'Women Founders — Breaking the Glass Ceiling in Tech'.", time: "2:00 PM", day: "Day 2" },
  { title: "Startup Expo", description: "Exhibition hall where 50+ startups showcase products and connect with investors.", time: "All Day", day: "Day 1 & 2" },
];

// ── Creators ──
export const FEATURED_CREATORS = [
  { name: "Ankita Roy", handle: "@ankitaroy", followers: "1.2M", platform: "Instagram", image: "https://i.pravatar.cc/300?img=20" },
  { name: "Sahil Tech", handle: "@sahiltech", followers: "800K", platform: "YouTube", image: "https://i.pravatar.cc/300?img=12" },
  { name: "Nisha Verma", handle: "@nishaverma", followers: "2.5M", platform: "Instagram", image: "https://i.pravatar.cc/300?img=23" },
  { name: "Dev Diaries", handle: "@devdiaries", followers: "500K", platform: "YouTube", image: "https://i.pravatar.cc/300?img=15" },
];

// ── Internship Fair Companies ──
export const FAIR_COMPANIES = [
  "Google", "Microsoft", "Amazon", "Flipkart", "Razorpay",
  "Zerodha", "PhonePe", "Ola", "Swiggy", "CRED",
  "Tata Digital", "Infosys", "TCS", "Wipro", "HCL",
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
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/esummit_iiest", color: "hover:text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/esummit-iiest", color: "hover:text-blue-400" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/esummit_iiest", color: "hover:text-sky-400" },
  { name: "Email", icon: Mail, href: "mailto:esummit@iiests.ac.in", color: "hover:text-primary" },
];

export const CONTACT_INFO = {
  email: "esummit@iiests.ac.in",
  phone: "+91 98765 43210",
  address: "IIEST Shibpur, Howrah, West Bengal — 711103",
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
