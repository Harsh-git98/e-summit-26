import { GALLERY_IMAGES } from "@/data/constants";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<string | null>(null);

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
            Past <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Capturing memorable moments from previous editions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="relative aspect-[3/2] rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelected(img)}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src={img} 
                alt={`Gallery ${i + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy" 
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  className="p-2 sm:p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50"
                >
                  <ZoomIn className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.button 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-foreground p-2 hover:bg-white/10 rounded-full transition-colors z-10" 
              onClick={() => setSelected(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={28} />
            </motion.button>
            <motion.img 
              src={selected} 
              alt="Gallery preview" 
              className="max-w-full max-h-[80vh] rounded-xl sm:rounded-2xl object-contain shadow-2xl shadow-primary/20" 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
