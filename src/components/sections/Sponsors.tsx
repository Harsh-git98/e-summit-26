import { CURRENT_SPONSORS, PAST_SPONSORS } from "@/data/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Sponsors = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Sponsors</span>
          </h2>
        </motion.div>

        {/* Current */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-heading text-xl font-semibold text-center mb-8">Current Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {CURRENT_SPONSORS.map((s) => (
              <div key={s.name} className="glass rounded-xl p-6 flex items-center justify-center hover:border-primary/30 transition-colors">
                <img src={s.logo} alt={s.name} className="max-h-12 w-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Past */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-heading text-lg font-semibold text-center mb-8 text-muted-foreground">Past Sponsors</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {PAST_SPONSORS.map((s) => (
              <div key={s.name} className="glass rounded-lg p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:border-primary/20">
                <img src={s.logo} alt={s.name} className="max-h-8 w-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
