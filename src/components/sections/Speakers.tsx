import { SPEAKERS } from "@/data/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Speakers = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Past <span className="text-gradient">Speakers</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Industry leaders who graced our stage
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div 
          className="flex animate-marquee hover:pause"
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...SPEAKERS, ...SPEAKERS].map((speaker, i) => (
            <motion.div 
              key={`${speaker.name}-${i}`} 
              className="flex-shrink-0 mx-3 sm:mx-4 text-center group cursor-pointer"
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/60 transition-all duration-300 mx-auto mb-2 sm:mb-3 shadow-lg shadow-transparent group-hover:shadow-primary/30">
                <motion.img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  loading="lazy" 
                />
              </div>
              <p className="font-heading font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors duration-300">{speaker.name}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground px-2">{speaker.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
