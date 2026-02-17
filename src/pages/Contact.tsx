import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/constants";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      <section className="relative py-24 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            className="font-heading text-4xl md:text-7xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gradient">Contact Us</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="glass rounded-2xl p-8"
            >
              <h2 className="font-heading text-xl font-semibold mb-6">Get in Touch</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <Input placeholder="Your Name" className="bg-white/5 border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50" />
                </div>
                <div className="relative">
                  <Input type="email" placeholder="Email Address" className="bg-white/5 border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50" />
                </div>
                <div className="relative">
                  <Input placeholder="Subject" className="bg-white/5 border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50" />
                </div>
                <div className="relative">
                  <Textarea placeholder="Your Message" rows={4} className="bg-white/5 border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground gap-2">
                  <Send size={16} /> Send Message
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="font-heading text-xl font-semibold mb-6">Reach Out</h2>
              <ul className="space-y-5 text-muted-foreground mb-10">
                <li className="flex items-center gap-3"><Mail className="text-primary" size={18} /> {CONTACT_INFO.email}</li>
                <li className="flex items-center gap-3"><Phone className="text-primary" size={18} /> {CONTACT_INFO.phone}</li>
                <li className="flex items-start gap-3"><MapPin className="text-primary mt-0.5 shrink-0" size={18} /> {CONTACT_INFO.address}</li>
              </ul>

              <h3 className="font-heading font-semibold mb-4">Follow Us</h3>
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
                    <s.icon size={22} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
