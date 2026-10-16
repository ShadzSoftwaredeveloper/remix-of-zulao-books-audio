import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "Faith-Driven", desc: "Rooted in biblical truth and the transformative power of the Gospel." },
  { icon: BookOpen, title: "Empowerment", desc: "Equipping every believer with tools and knowledge for Kingdom impact." },
  { icon: Users, title: "Community", desc: "Building strong, prayer-centered families and communities across generations." },
  { icon: Sparkles, title: "Excellence", desc: "Pursuing the highest standard in every resource, teaching, and outreach." },
];

const CoreValuesSection = () => (
  <section className="py-16 sm:py-20 bg-cream">
    <div className="site-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">What We Stand For</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Our Core Values</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center p-6 rounded-xl border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-300"
          >
            <span className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <v.icon size={24} />
            </span>
            <h4 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h4>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValuesSection;
