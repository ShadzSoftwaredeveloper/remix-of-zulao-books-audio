import { motion } from "framer-motion";
import { Headphones, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const MediaCtaSection = () => (
  <section className="py-16 bg-muted/50">
    <div className="site-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
          Keep Exploring
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Read & Listen Beyond the Page
        </h2>
        <p className="font-body text-foreground/60 max-w-md mx-auto mb-8">
          Dive deeper into the message — through reflective articles and audio
          teachings that nourish the soul.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            <FileText size={16} /> Visit the Blog
          </Link>
          <Link
            to="/audio"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm font-semibold hover:bg-muted transition-colors active:scale-[0.98]"
          >
            <Headphones size={16} /> Listen to Audios
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MediaCtaSection;
