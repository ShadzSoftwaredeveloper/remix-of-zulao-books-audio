import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Camera,
  GraduationCap,
  Mic2,
  Radio,
  Star,
  Ticket,
  Users,
} from "lucide-react";

const growthPaths = [
  { Icon: Mic2, title: "Keynote Speaking", desc: "Book Joseph for conferences, churches and corporate stages.", action: "Book a date", to: "/contact" },
  { Icon: Star, title: "1:1 Mentorship", desc: "Personalized coaching to discover your gifts and purpose.", action: "Join now", to: "https://t.me/ZuulaMentorship", external: true },
  { Icon: GraduationCap, title: "Courses & Masterclasses", desc: "Purpose-led programs for personal growth, faith and leadership.", action: "Start learning", to: "/audio" },
  { Icon: Ticket, title: "Live Events & Tickets", desc: "Join conferences and gatherings, in person and online.", action: "Get tickets", to: "/contact" },
  { Icon: Users, title: "Membership Community", desc: "A tribe of purpose-driven believers walking together.", action: "Join the circle", to: "https://t.me/ZuulaMentorship", external: true },
  { Icon: Radio, title: "Podcast & Video", desc: "Weekly teachings on Kingdom purpose and wholeness.", action: "Listen now", to: "/audio" },
  { Icon: BookOpen, title: "Books & eBooks", desc: "A curated library to deepen your faith and potential.", action: "Browse library", to: "/ebooks" },
  { Icon: Building2, title: "Corporate Packages", desc: "Tailored keynote and workshop bundles for teams.", action: "Enquire", to: "/contact" },
  { Icon: Camera, title: "Media Kit & Reel", desc: "Speaker bio, photos and media details for organizers.", action: "Request kit", to: "/contact" },
];

const JourneySection = () => (
  <section className="py-16 md:py-24 bg-muted/70 overflow-hidden">
    <div className="site-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="inline-flex rounded-full border border-primary/20 bg-background/60 px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
          Everything in one place
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Ways to grow with Joseph
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {growthPaths.map(({ Icon, title, desc, action, to, external }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:min-h-[220px] sm:p-6"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
              <Icon size={21} strokeWidth={1.8} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">{desc}</p>
            {external ? (
              <a href={to} target="_blank" rel="noopener noreferrer" className="group mt-auto inline-flex items-center gap-2 font-body text-sm font-semibold text-primary">
                {action}<ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            ) : (
              <Link to={to} className="group mt-auto inline-flex items-center gap-2 font-body text-sm font-semibold text-primary">
                {action}<ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JourneySection;
