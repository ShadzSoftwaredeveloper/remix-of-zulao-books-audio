import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import EbooksSection from "@/components/EbooksSection";
import Footer from "@/components/Footer";
import booksHero from "@/assets/books-hero.jpg";

const EbooksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative min-h-[85vh] flex items-center pt-16 md:pt-[100px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={booksHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>

        <div className="relative z-10 site-container py-20">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-4"
            >
              Read, Reflect, Be Transformed
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Discover the Possibility{" "}
              <span className="text-gold-gradient">Within Every Page</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-body text-lg text-primary-foreground/80 mb-8 max-w-lg"
            >
              Browse our curated collection of transformative books by Tumusiime Joseph
              Prosper — written to deepen your faith and unlock your potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#ebooks"
                className="inline-flex items-center px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-body font-semibold text-sm shadow-lg shadow-secondary/30 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Browse the Library
              </a>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm hover:bg-primary-foreground/20 active:scale-[0.98] transition-all"
              >
                About the Author
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <EbooksSection showAll />
      <Footer />
    </div>
  );
};

export default EbooksPage;
