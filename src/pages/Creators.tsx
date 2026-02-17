import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FEATURED_CREATORS } from "@/data/constants";
import { Instagram, Youtube } from "lucide-react";

const CreatorsPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Layout>
      <section className="relative py-24 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/5 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            className="font-heading text-4xl md:text-7xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gradient">Creators Conclave</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Where digital influencers and content creators come together to inspire.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4" ref={ref}>
        <div className="container mx-auto">
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
    </Layout>
  );
};

export default CreatorsPage;
