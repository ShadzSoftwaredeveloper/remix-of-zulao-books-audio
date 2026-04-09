import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const AboutCtaSection = () => (
  <section className="py-16 bg-primary">
    <div className="site-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Be Part of the Movement</h2>
        <p className="font-body text-primary-foreground/80 max-w-md mx-auto mb-8">
          Discover your purpose, equip your family, and impact generations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/ebooks" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]">
            <BookOpen size={16} /> Browse eBooks
          </a>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-body text-sm font-semibold hover:bg-primary-foreground/10 transition-colors active:scale-[0.98]">
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutCtaSection;
