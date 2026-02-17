import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { TRACKS } from "@/data/constants";

const BentoGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            What's In It <span className="text-gradient">For You</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Six power-packed tracks designed to ignite your entrepreneurial spirit.
          </p>
        </motion.div>

        <div className="hidden md:grid grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] lg:auto-rows-[220px]">
          {TRACKS.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
              className={`${track.span} group`}
              whileHover={{ scale: 1.02 }}
            >
              <Link
          to={track.href}
          className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 h-full flex flex-col justify-between relative overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 block"
              >
          {/* Hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
          />

          <div className="relative z-10">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <track.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 sm:mb-3 group-hover:text-secondary transition-colors duration-300" />
            </motion.div>
            <h3 className="font-heading text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">{track.title}</h3>
          </div>
          <p className="relative z-10 text-xs sm:text-sm text-muted-foreground leading-relaxed">{track.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden grid grid-cols-1 gap-3 sm:gap-4">
          {TRACKS.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="group"
              whileHover={{ scale: 1.02 }}
            >
              <Link
          to={track.href}
          className="glass rounded-xl p-4 sm:p-5 py-5 flex flex-col justify-between relative overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 block"
              >
          <div className="relative z-10">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <track.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3 group-hover:text-secondary transition-colors duration-300" />
            </motion.div>
            <h3 className="font-heading text-base sm:text-lg font-semibold mb-1 sm:mb-2">{track.title}</h3>
          </div>
          <p className="relative z-10 text-xs sm:text-sm text-muted-foreground leading-relaxed">{track.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
            </div>
          </section>
        );
      };

      export default BentoGrid;
