import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users } from "lucide-react";
import { TEAM_STRUCTURE } from "@/data/constants";
import { Badge } from "@/components/ui/badge";
import ParticleCanvas from "@/components/ParticleCanvas";

const TeamPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
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
              <Users className="w-8 h-8 text-secondary" />
              <Badge className="px-4 py-1.5 text-sm bg-secondary/20 text-secondary border-secondary/30 animate-pulse-glow">
                OUR DEDICATION
              </Badge>
            </motion.div>
            
            <motion.h1
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-gradient text-3xl md:text-6xl">Our Team</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dedicated individuals working together to make E-Summit 2026 an unforgettable experience
            </motion.p>
            
            <motion.p
              className="text-sm md:text-base text-muted-foreground tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Meet the passionate people behind the event
            </motion.p>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Team Structure */}
      <section className="py-16 md:py-24 px-4" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid gap-12"
          >
            {TEAM_STRUCTURE.map((team, roleIndex) => (
              <motion.div
                key={team.role}
                variants={itemVariants}
                className="space-y-6"
              >
                {/* Role Header */}
                <div className="border-b border-secondary/20 pb-4">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {team.role}
                  </h3>
                </div>

                {/* Years Sections */}
                <div className="grid md:grid-cols-3 gap-8">
                  {/* 4th Year */}
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                      4th Year
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3">
                      {team.members["4th"].length > 0 ? (
                        team.members["4th"].map((member, mIndex) => (
                          <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.1 * mIndex }}
                            className="glass rounded-lg overflow-hidden group hover:border-secondary/40 transition-all duration-300"
                          >
                            <div className="aspect-square overflow-hidden bg-white/5">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-2 text-center">
                              <p className="text-xs font-semibold text-foreground truncate">
                                {member.name}
                              </p>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="col-span-2 md:col-span-2 p-3 rounded-lg bg-white/5 text-muted-foreground text-xs italic text-center">
                          -
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3rd Year */}
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-semibold">
                      3rd Year
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3">
                      {team.members["3rd"].length > 0 ? (
                        team.members["3rd"].map((member, mIndex) => (
                          <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.1 * mIndex }}
                            className="glass rounded-lg overflow-hidden group hover:border-secondary/40 transition-all duration-300"
                          >
                            <div className="aspect-square overflow-hidden bg-white/5">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-2 text-center">
                              <p className="text-xs font-semibold text-foreground truncate">
                                {member.name}
                              </p>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="col-span-2 md:col-span-2 p-3 rounded-lg bg-white/5 text-muted-foreground text-xs italic text-center">
                          -
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 2nd Year */}
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-sm font-semibold">
                      2nd Year
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3">
                      {team.members["2nd"].length > 0 ? (
                        team.members["2nd"].map((member, mIndex) => (
                          <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.1 * mIndex }}
                            className="glass rounded-lg overflow-hidden group hover:border-secondary/40 transition-all duration-300"
                          >
                            <div className="aspect-square overflow-hidden bg-white/5">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-2 text-center">
                              <p className="text-xs font-semibold text-foreground truncate">
                                {member.name}
                              </p>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="col-span-2 md:col-span-2 p-3 rounded-lg bg-white/5 text-muted-foreground text-xs italic text-center">
                          -
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="glass rounded-lg p-6 text-center hover:border-secondary/40 transition-all">
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">10</div>
              <p className="text-muted-foreground text-sm">Core Teams</p>
            </div>
            <div className="glass rounded-lg p-6 text-center hover:border-secondary/40 transition-all">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                {TEAM_STRUCTURE.reduce((sum, team) => sum + team.members["4th"].length, 0)}
              </div>
              <p className="text-muted-foreground text-sm">4th Year Members</p>
            </div>
            <div className="glass rounded-lg p-6 text-center hover:border-secondary/40 transition-all">
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">
                {TEAM_STRUCTURE.reduce((sum, team) => sum + team.members["3rd"].length, 0)}
              </div>
              <p className="text-muted-foreground text-sm">3rd Year Members</p>
            </div>
            <div className="glass rounded-lg p-6 text-center hover:border-secondary/40 transition-all">
              <div className="text-3xl md:text-4xl font-heading font-bold text-amber-500 mb-2">
                {TEAM_STRUCTURE.reduce((sum, team) => sum + team.members["2nd"].length, 0)}
              </div>
              <p className="text-muted-foreground text-sm">2nd Year Members</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
