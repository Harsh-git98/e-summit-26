import { Link } from "react-router-dom";
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "@/data/constants";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-void">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-gradient mb-2">E-SUMMIT'26</h3>
            <p className="text-xs text-primary/70 font-medium mb-3">Entrepreneurship Development Cell</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The annual flagship event of EDC, IIEST Shibpur — fostering entrepreneurial initiatives, empowering women in tech, and driving the AI revolution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail size={14} /> {CONTACT_INFO.email}</li>
              <li className="flex items-center gap-2"><Phone size={14} /> {CONTACT_INFO.phone1.name}: {CONTACT_INFO.phone1.number}</li>
              <li className="flex items-center gap-2"><Phone size={14} /> {CONTACT_INFO.phone2.name}: {CONTACT_INFO.phone2.number}</li>
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> {CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground transition-all duration-300 hover:scale-125 ${s.color}`}
                aria-label={s.name}
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© 2026 E-Summit'26 | EDC, IIEST Shibpur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
