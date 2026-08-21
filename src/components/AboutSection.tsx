import { motion } from "framer-motion";
import podcastAsset from "@/assets/founder-podcast.png.asset.json";

const FOUNDER_IMG = "/lovable-uploads/927c6d88-9f65-4954-82af-f1e83c834b55.jpg";

interface AboutSectionProps {
  /** Use the podcast still instead of the founder portrait (homepage). */
  variant?: "founder" | "podcast";
}

const AboutSection = ({ variant = "founder" }: AboutSectionProps) => {
  const imgSrc = variant === "podcast" ? podcastAsset.url : FOUNDER_IMG;
  return (
    <section id="about" className="py-24 bg-background">
      <div className="site-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <div className="relative">
              <img

                alt="Joseph Prosper - Founder"
                className="rounded-lg w-full max-w-md mx-auto shadow-xl" src="/lovable-uploads/927c6d88-9f65-4954-82af-f1e83c834b55.jpg" />
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-lg -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
              About the Founder
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              I'm Joseph Prosper
            </h2>
            <p className="font-body text-foreground/70 leading-relaxed mb-4">
              Founder of Zuula Obusobozibwo — Empowering You To Impact
              Generations. God has placed unique gifts within you. When you
              discover and use them, you step into your purpose, influence
              others, and fulfill your Kingdom destiny.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed mb-6">
              "We believe every person carries a reservoir of strength and
              purpose, though life's challenges can blur that vision and leave
              us uncertain of who we are and where we're going."
            </p>
            <blockquote className="border-l-4 border-secondary pl-4 italic font-display text-lg text-foreground/80">
              Unlock Your Gifts, Influence, and Destiny for God's Kingdom
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;