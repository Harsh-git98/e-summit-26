import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { NETWORKING_EVENTS } from "@/data/constants";
import EventModal from "@/components/EventModal";
import { ChevronRight, Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ParticleCanvas from "@/components/ParticleCanvas";

const NetworkingPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <Layout>
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <ParticleCanvas />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <Mic className="w-8 h-8 text-secondary" />
              <Badge className="px-4 py-1.5 text-sm bg-secondary/20 text-secondary border-secondary/30 animate-pulse-glow">
                CONNECT & INSPIRE
              </Badge>
            </motion.div>
            
            <motion.h1
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-gradient text-3xl md:text-6xl">Networking</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Keynotes, panels, and expos — connect with leaders shaping the future.
            </motion.p>
            
            <motion.p
              className="text-sm md:text-base text-muted-foreground tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Learn from industry leaders and expand your professional network
            </motion.p>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 px-4" ref={ref}>
        <div className="container mx-auto max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />

            {NETWORKING_EVENTS.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-2 z-10 cursor-pointer hover:scale-150 transition-transform"
                  whileHover={{ scale: 1.5 }}
                  onClick={() => setSelectedEvent(event)}
                />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    className="glass rounded-xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {event.day}
                        </span>
                        <span className="text-xs text-muted-foreground">{event.time}</span>
                      </div>
                      <motion.div
                        className="text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                        initial={{ x: -5 }}
                        whileHover={{ x: 3 }}
                      >
                        <ChevronRight size={18} />
                      </motion.div>
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-3">Click to view details →</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EventModal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </Layout>
  );
};

export default NetworkingPage;
