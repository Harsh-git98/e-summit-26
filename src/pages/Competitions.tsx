import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { COMPETITIONS } from "@/data/constants";
import CardFlip from "@/components/ui/flip-card";

const CARD_COLORS = ["#4169e1", "#d946ef"];

const CompetitionsPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-24 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            className="font-heading text-4xl md:text-7xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gradient">Competitions</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Test your entrepreneurial mettle in high-stakes challenges designed to push boundaries.
          </motion.p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 md:py-24 px-4" ref={ref}>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETITIONS.map((comp, i) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <CardFlip
                title={comp.title}
                subtitle={comp.team}
                description={comp.description}
                features={comp.features}
                color={CARD_COLORS[i % 2]}
                icon={comp.icon}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default CompetitionsPage;
