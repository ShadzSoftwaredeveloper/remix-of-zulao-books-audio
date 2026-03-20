import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import booksHero from "@/assets/books-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={booksHero} alt="" className="w-full h-full object-cover" />
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
              className="inline-flex items-center px-8 py-3 rounded-full text-secondary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg bg-fuchsia-800">
              
              Browse eBooks
            </Link>
            <Link
              to="/audio"
              className="inline-flex items-center px-8 py-3 rounded-full border-2 text-primary-foreground font-body font-semibold text-sm hover:bg-primary-foreground/10 transition-colors border-fuchsia-800">
              
              Listen to Audio
            </Link>
          </motion.div>

          {/* Stats */}
          

















          
        </div>
      </div>
    </section>);

};

export default HeroSection;