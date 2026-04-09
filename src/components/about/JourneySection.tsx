import { motion } from "framer-motion";

const milestones = [
  { year: "2018", title: "The Vision Begins", desc: "Joseph Prosper receives the calling to empower families through prayer and purpose." },
  { year: "2020", title: "First Publication", desc: "The Generational Family Prayer Altar is published and reaches hundreds of homes." },
  { year: "2022", title: "Digital Expansion", desc: "Audio teachings and eBooks launched online, reaching believers across East Africa." },
  { year: "2024", title: "Growing Impact", desc: "Thousands of families empowered through books, teachings, and community gatherings." },
];

const JourneySection = () => (
  <section className="py-20 bg-muted/50">
    <div className="site-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">Our Story</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">The Journey So Far</h2>
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />
        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex items-start gap-6 mb-10 sm:mb-12 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
          >
            <div className="absolute left-5 sm:left-1/2 w-3 h-3 rounded-full bg-secondary border-2 border-background -translate-x-1/2 mt-1.5 z-10" />
            <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"}`}>
              <span className="inline-block font-display text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-2">{m.year}</span>
              <h4 className="font-display text-lg font-bold text-foreground mb-1">{m.title}</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JourneySection;
