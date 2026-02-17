import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { TRACKS } from "@/data/constants";

const BentoGrid = () => {
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
            What's In It <span className="text-gradient">For You</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Six power-packed tracks designed to ignite your entrepreneurial spirit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {TRACKS.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${track.span} group`}
            >
              <Link
                to={track.href}
                className="glass rounded-2xl p-6 h-full flex flex-col justify-between relative overflow-hidden hover:border-primary/40 transition-all duration-500 block"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <track.icon className="w-8 h-8 text-primary mb-3 group-hover:text-secondary transition-colors duration-300" />
                  <h3 className="font-heading text-lg md:text-xl font-semibold mb-2">{track.title}</h3>
                </div>
                <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">{track.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
