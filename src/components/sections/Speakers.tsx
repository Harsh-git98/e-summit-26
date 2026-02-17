import { SPEAKERS } from "@/data/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Speakers = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Past <span className="text-gradient">Speakers</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...SPEAKERS, ...SPEAKERS].map((speaker, i) => (
            <div key={`${speaker.name}-${i}`} className="flex-shrink-0 mx-4 text-center group">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors mx-auto mb-3">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="font-heading font-semibold text-sm">{speaker.name}</p>
              <p className="text-xs text-muted-foreground">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
