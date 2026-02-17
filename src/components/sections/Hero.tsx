import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";
import logo from "@/assets/logo-esumm1.png";
const TARGET_DATE = new Date("2027-03-01T00:00:00").getTime();

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, TARGET_DATE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
};

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="glass-strong rounded-xl w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center">
      <span className="text-3xl sm:text-4xl font-heading font-bold text-primary">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">{label}</span>
  </div>
);

const Hero = () => {
  const { days, hours, mins, secs } = useCountdown();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleCanvas />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Column */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-1.5 text-sm bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
              COMING SOON
            </Badge>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={logo} alt="E-Summit 2026" className="h-24 md:h-24" />
           </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-muted-foreground/80 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering Women & AI
          </motion.p>

          <motion.p
            className="font-heading text-sm sm:text-base text-muted-foreground mt-2 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            IIEST SHIBPUR | Entrepreneurship Development Cell
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Events <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border-primary/30 text-foreground font-semibold hover:bg-primary/10 transition-colors"
            >
              <FileText size={18} /> View Brochure
            </a>
          </motion.div>
        </div>

        {/* Right Column - Countdown */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-center font-heading text-sm sm:text-base font-semibold text-primary tracking-widest mb-6 uppercase">
              Time to Launch
            </h3>
            <div className="flex items-center gap-2 sm:gap-3">
              <CountdownBox value={days} label="Days" />
              <span className="text-2xl sm:text-3xl text-primary font-bold mb-6">:</span>
              <CountdownBox value={hours} label="Hours" />
              <span className="text-2xl sm:text-3xl text-primary font-bold mb-6">:</span>
              <CountdownBox value={mins} label="Mins" />
              <span className="text-2xl sm:text-3xl text-primary font-bold mb-6">:</span>
              <CountdownBox value={secs} label="Secs" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
