import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { STATS } from "@/data/constants";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1591115765373-5f9cf1da241d?w=800&h=600&fit=crop"
                alt="E-Summit Event"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/30 mix-blend-multiply" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">E-Summit'26</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              E-Summit'26 is the annual flagship event of the Entrepreneurship Development Cell, IIEST Shibpur, aimed at fostering entrepreneurial initiatives among students and aspiring entrepreneurs. It brings together 10,000+ attendees, 50+ startups & investors, and 20+ industry leaders.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From high-stakes competitions like Envisage and Hackstart, to keynotes, panel discussions, a creators conclave, and the Startup & Drone/Auto Expo — E-Summit is where ideas meet opportunity.
            </p>
            <p className="text-muted-foreground/70 leading-relaxed text-sm mb-8">
              IIEST Shibpur, established in 1856, is one of the oldest and most prestigious technical institutions in Asia. The Entrepreneurship Development Cell (EDC) works to nurture innovation and startup culture on campus.
            </p>

            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground gap-2">
              <Download size={16} /> Download Brochure
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 text-center animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
