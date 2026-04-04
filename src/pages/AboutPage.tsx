import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Target, Eye, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const values = [
  { icon: Heart, title: "Faith-Driven", desc: "Rooted in biblical truth and the transformative power of the Gospel." },
  { icon: BookOpen, title: "Empowerment", desc: "Equipping every believer with tools and knowledge for Kingdom impact." },
  { icon: Users, title: "Community", desc: "Building strong, prayer-centered families and communities across generations." },
  { icon: Sparkles, title: "Excellence", desc: "Pursuing the highest standard in every resource, teaching, and outreach." },
];

const milestones = [
  { year: "2018", title: "The Vision Begins", desc: "Joseph Prosper receives the calling to empower families through prayer and purpose." },
  { year: "2020", title: "First Publication", desc: "The Generational Family Prayer Altar is published and reaches hundreds of homes." },
  { year: "2022", title: "Digital Expansion", desc: "Audio teachings and eBooks launched online, reaching believers across East Africa." },
  { year: "2024", title: "Growing Impact", desc: "Thousands of families empowered through books, teachings, and community gatherings." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="page-header">
        <div className="relative z-10 site-container text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            About Us
          </h1>
          <p className="font-body text-primary-foreground/80 max-w-lg mx-auto">
            Learn more about Joseph Prosper and the mission of Zuula Obusobozibwo.
          </p>
        </div>
      </div>

      {/* Founder Bio */}
      <AboutSection />

      {/* Mission & Vision */}
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

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
              What We Stand For
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
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

      {/* Journey / Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
              Our Story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              The Journey So Far
            </h2>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 sm:mb-12 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 sm:left-1/2 w-3 h-3 rounded-full bg-secondary border-2 border-background -translate-x-1/2 mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"}`}>
                  <span className="inline-block font-display text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-2">
                    {m.year}
                  </span>
                  <h4 className="font-display text-lg font-bold text-foreground mb-1">{m.title}</h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="site-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Be Part of the Movement
            </h2>
            <p className="font-body text-primary-foreground/80 max-w-md mx-auto mb-8">
              Discover your purpose, equip your family, and impact generations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/ebooks"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]"
              >
                <BookOpen size={16} />
                Browse eBooks
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-body text-sm font-semibold hover:bg-primary-foreground/10 transition-colors active:scale-[0.98]"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
