import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import booksHero from "@/assets/books-hero.jpg";
import zuula1 from "@/assets/zuula-1.webp.asset.json";
import zuulaHome from "@/assets/zuula-homep.webp.asset.json";

const slides = [booksHero, zuula1.url, zuulaHome.url];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={slides[index]}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative z-10 site-container py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-4">
            
            Zuula Obusobozibwo
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            
            Book Website Design{" "}
            <span className="text-gold-gradient">for Your Formal Design</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-lg text-primary-foreground/80 mb-8 max-w-lg">
            
            Transform your mindset, harness your unique talents, and embark on a
            journey to create a life full of purpose, endless possibilities, and
            lasting fulfillment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-4">
            
            <Link
              to="/ebooks"
              className="inline-flex items-center px-8 py-3 rounded-full text-secondary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg bg-accent">
              
              Browse eBooks
            </Link>
            <Link
              to="/audio"
              className="inline-flex items-center px-8 py-3 rounded-full border-2 text-primary-foreground font-body font-semibold text-sm hover:bg-primary-foreground/10 transition-colors border-accent">
              
              Listen to Audio
            </Link>
          </motion.div>

          {/* Slider dots */}
          <div className="flex gap-2 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-accent" : "w-2 bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          

















          
        </div>
      </div>
    </section>);

};

export default HeroSection;