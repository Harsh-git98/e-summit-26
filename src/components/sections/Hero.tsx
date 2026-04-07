import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";
import logo from "@/assets/logo-esumm1.png";

const TARGET_DATE = new Date("2026-04-18T00:00:00").getTime();

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

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
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl w-16 h-20 md:w-20 md:h-24 flex items-center justify-center shadow-lg">
      <span className="text-3xl md:text-4xl font-bold text-primary">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">
      {label}
    </span>
  </div>
);

const Hero = () => {
  const { days, hours, mins, secs } = useCountdown();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4">

      {/* 🔥 Background */}
      <ParticleCanvas />

      {/* Gradient mesh */}
    
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-primary/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-secondary/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* 🔥 HEADLINE */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full" />
              <div></div>
              <img src={logo} className="relative h-40 md:h-30 brightness-250 contrast-250" />
            </div>
          </motion.div>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
          >
            The Entrepreneurship Summit of IIEST Shibpur — where ideas turn into startups.
          </motion.p>

          {/* DATE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-primary font-semibold tracking-wide"
          >
            18th – 19th April
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a  href="/#/networking" className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center gap-2 overflow-hidden">
              Explore Events
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a href="https://www.edciiests.in" className="px-6 py-3 rounded-xl border border-white/20 backdrop-blur-md hover:bg-white/10 transition flex items-center gap-2">
              
              EDC Website 
              <ArrowRight className="transition group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* LOGO FIX (Glow + visibility) */}
          
        </div>

        {/* RIGHT COUNTDOWN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h3 className="text-center text-sm uppercase tracking-widest text-primary mb-6">
              Launch Countdown
            </h3>

            <div className="flex gap-3">
              <CountdownBox value={days} label="Days" />
              <CountdownBox value={hours} label="Hours" />
              <CountdownBox value={mins} label="Mins" />
              <CountdownBox value={secs} label="Secs" />
            </div>
          </div>
        </motion.div>
      </div>

     
    </section>
  );
};

export default Hero;