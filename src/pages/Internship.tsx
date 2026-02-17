import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FAIR_COMPANIES, INTERNSHIP_STEPS, EXPO_BENEFITS } from "@/data/constants";
import { Building2, Sparkles } from "lucide-react";

const InternshipPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Layout>
      <section className="relative py-24 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            className="font-heading text-4xl md:text-7xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gradient">Fair & Expo</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Internship Fair, Startup Expo, and Drone & Auto Expo — meet top companies, showcase innovation, and land your dream opportunity.
          </motion.p>
        </div>
      </section>

      {/* Expo Benefits */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
            What to <span className="text-gradient">Expect</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {EXPO_BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="glass rounded-lg px-5 py-3 flex items-center gap-2 hover:border-primary/30 transition-colors"
              >
                <Sparkles size={14} className="text-secondary" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16 px-4" ref={ref}>
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-heading text-2xl md:text-3xl font-bold text-center mb-10"
          >
            Visiting Companies
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {FAIR_COMPANIES.map((company, i) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass rounded-lg px-5 py-3 flex items-center gap-2 hover:border-primary/30 transition-colors"
              >
                <Building2 size={14} className="text-primary" />
                <span className="text-sm font-medium">{company}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Timeline */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12">
            How It <span className="text-gradient">Works</span>
          </h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary" />

            {INTERNSHIP_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 pb-10 last:pb-0"
              >
                <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InternshipPage;
