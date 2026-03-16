import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-4"
          >
            Zuula Obusobozibwo
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Craft Your Life,{" "}
            <span className="text-gold-gradient">Your Way</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-lg text-primary-foreground/80 mb-8 max-w-lg"
          >
            Transform your mindset, harness your unique talents, and embark on a
            journey to create a life full of purpose, endless possibilities, and
            lasting fulfillment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#ebooks"
              className="inline-flex items-center px-8 py-3 rounded-md bg-secondary text-secondary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Browse eBooks
            </a>
            <a
              href="#audio"
              className="inline-flex items-center px-8 py-3 rounded-md border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Listen to Audio
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-10 mt-14"
          >
            {[
              { num: "172+", label: "Sessions" },
              { num: "114+", label: "Clients" },
              { num: "2+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-secondary">{s.num}</p>
                <p className="font-body text-xs uppercase tracking-wider text-primary-foreground/60">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
