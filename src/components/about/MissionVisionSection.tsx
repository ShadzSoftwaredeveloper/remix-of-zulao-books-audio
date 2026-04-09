import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const MissionVisionSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="site-container">
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-background border border-border"
        >
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
            <Target size={22} />
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
          <p className="font-body text-foreground/70 leading-relaxed">
            To empower individuals and families to discover their God-given gifts, build generational prayer altars, and step boldly into their Kingdom purpose — transforming communities one household at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-xl bg-background border border-border"
        >
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 text-secondary mb-5">
            <Eye size={22} />
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
          <p className="font-body text-foreground/70 leading-relaxed">
            A generation of families across Africa and beyond, firmly rooted in faith, walking in purpose, and raising up Kingdom leaders who impact the world for Christ.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MissionVisionSection;
