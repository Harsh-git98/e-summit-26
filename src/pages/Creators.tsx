import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FEATURED_CREATORS, CREATOR_EVENTS } from "@/data/constants";
import { Instagram, Youtube, Video } from "lucide-react";
import EventModal from "@/components/EventModal";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ParticleCanvas from "@/components/ParticleCanvas";

const CreatorsPage = () => {
  const ref = useRef(null);
  const eventsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const eventsInView = useInView(eventsRef, { once: true, margin: "-60px" });
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
              <Video className="w-8 h-8 text-secondary" />
              <Badge className="px-4 py-1.5 text-sm bg-secondary/20 text-secondary border-secondary/30 animate-pulse-glow">
                CREATOR COMMUNITY
              </Badge>
            </motion.div>
            
            <motion.h1
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-gradient text-3xl md:text-6xl">Creators Conclave</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Where digital influencers and content creators come together to inspire.
            </motion.p>
            
            <motion.p
              className="text-sm md:text-base text-muted-foreground tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Master new skills, network, and grow your influence
            </motion.p>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Featured Creators */}
      <section className="py-16 md:py-24 px-4" ref={ref}>
        <div className="container mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2">Featured Creators</h2>
            <p className="text-center text-muted-foreground">Meet the influential voices shaping digital culture</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_CREATORS.map((creator, i) => (
              <motion.div
                key={creator.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden group hover:border-secondary/40 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg">{creator.name}</h3>
                  <p className="text-sm text-muted-foreground">{creator.handle}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-primary font-medium">{creator.followers} followers</span>
                    {creator.platform === "Instagram" ? (
                      <Instagram size={16} className="text-muted-foreground hover:text-pink-500 transition-colors cursor-pointer" />
                    ) : (
                      <Youtube size={16} className="text-muted-foreground hover:text-red-500 transition-colors cursor-pointer" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Events */}
      <section className="py-16 md:py-24 px-4 bg-white/5" ref={eventsRef}>
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2">Creator Events & Workshops</h2>
            <p className="text-center text-muted-foreground">Master new skills and network with fellow creators</p>
          </motion.div>

          <div className="space-y-4">
            {CREATOR_EVENTS.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={eventsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-6 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10 transition-all cursor-pointer group"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                        {event.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{event.day} • {event.time}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 group-hover:text-secondary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                  <motion.div
                    className="text-muted-foreground group-hover:text-secondary transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0"
                    initial={{ x: -5 }}
                    whileHover={{ x: 3 }}
                  >
                    <ChevronRight size={24} />
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

export default CreatorsPage;
