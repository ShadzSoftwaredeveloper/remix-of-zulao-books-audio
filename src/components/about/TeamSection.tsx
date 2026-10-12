import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FOUNDER_IMG = "/lovable-uploads/927c6d88-9f65-4954-82af-f1e83c834b55.jpg";

const team = [
  {
    name: "Tumusiime Joseph Prosper",
    role: "Founder & Lead Teacher",
    bio: "Author, keynote speaker and founder of Zuula Obusobozibwo — equipping believers to discover their gifts and build generational altars.",
    image: FOUNDER_IMG,
    accent: "primary",
  },
  {
    name: "Sarah Nakamya",
    role: "Community & Partnerships",
    bio: "Leads our circles and church partnerships, walking with new members from their first teaching to their first step of impact.",
    initials: "SN",
    accent: "secondary",
  },
  {
    name: "David Mugisha",
    role: "Youth & Media",
    bio: "Shapes the podcast, video and social content that carries the teachings to young people across the region and beyond.",
    initials: "DM",
    accent: "accent",
  },
  {
    name: "Grace Atuhaire",
    role: "Events & Operations",
    bio: "Runs the logistics behind every conference, masterclass and mentoring season, so every gathering flows with care.",
    initials: "GA",
    accent: "primary",
  },
];

const accentText: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

const accentRing: Record<string, string> = {
  primary: "ring-primary/25",
  secondary: "ring-secondary/30",
  accent: "ring-accent/25",
};

const TeamSection = () => (
  <section id="team" className="py-16 sm:py-24 bg-muted/40 overflow-hidden">
    <div className="site-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="inline-flex rounded-full border border-primary/20 bg-background/60 px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
          The People Behind The Work
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          Meet The Team
        </h2>
        <svg width="90" height="16" viewBox="0 0 90 16" className="mx-auto">
          <path
            d="M2 14C22 -2 45 18 88 2"
            stroke="hsl(var(--secondary))"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <p className="mx-auto mt-5 max-w-xl font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
          A small, dedicated team serving the vision behind Zuula Obusobozibwo —
          every book, teaching, event and mentoring circle is carried by real hands.
        </p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
            className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            {member.image ? (
              <div
                className={`mb-5 h-24 w-24 overflow-hidden rounded-full ring-4 ${accentRing[member.accent]} bg-muted`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div
                className={`mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 ring-4 ${accentRing[member.accent]}`}
              >
                <span
                  className={`font-display text-2xl font-bold ${accentText[member.accent]}`}
                >
                  {member.initials}
                </span>
              </div>
            )}

            <h3 className="font-display text-lg font-bold leading-snug text-foreground">
              {member.name}
            </h3>
            <p
              className={`mt-1 font-body text-xs font-semibold uppercase tracking-[0.15em] ${accentText[member.accent]}`}
            >
              {member.role}
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-primary"
        >
          Work with our team
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default TeamSection;
