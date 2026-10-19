import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import founderImage from "@/assets/tumusime joseph prosper.jpeg";
import geraldImage from "@/assets/eg.gerland ssentongo.png";
import roseImage from "@/assets/mrs rose ssentongo.png";
import nelsonImage from "@/assets/pr mandella nelson.png";

const team = [
  {
    name: "Tumusiime Joseph Prosper",
    role: "Founder & Lead Teacher",
    bio: "Author, keynote speaker and founder of Zuula Obusobozibwo — equipping believers to discover their gifts and build generational altars.",
    image: founderImage,
    initials: "JP",
    background: "bg-accent",
  },
  {
    name: "Eng. Sentongo Gerald Mukasa",
    role: "Mentor & Partnerships",
    bio: "Leads our circles and church partnerships, walking with new members from their first teaching to their first step of impact.",
    image: geraldImage,
    initials: "SN",
    background: "bg-secondary",
  },
  {
    name: "Mrs Rose Sentongo",
    role: "Mentor",
    bio: "walking with new members from their first teaching to their first step of impact.",
    image: roseImage,
    initials: "DM",
    background: "bg-primary",
  },
  {
    name: "Pastor Nelson Mandela",
    role: "Events & Operations",
    bio: "Runs the logistics behind every conference, masterclass and mentoring season, so every gathering flows with care.",
    image: nelsonImage,
    initials: "GA",
    background: "bg-muted-foreground",
  },
  //  {
  //   name: "Mugerwa Shadrach",
  //   role: "Mentor",
  //   bio: "Shapes the podcast, video and social content that carries the teachings to young people across the region and beyond.",
  //   initials: "DM",
  //   background: "bg-primary",
  // },
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] =
    useState<(typeof team)[number] | null>(null);

  return (
  <section id="team" className="overflow-hidden bg-cream py-16 sm:py-24">
    <div className="site-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
      >
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
          Serving With Purpose
        </p>
        <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-primary" />
        <h2 className="mb-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Meet Our Team
        </h2>
        <p className="mx-auto max-w-3xl font-body text-sm leading-relaxed text-muted-foreground sm:text-lg">
          A small, dedicated team serving the vision behind Zuula Obusobozibwo —
          equipping believers through every book, teaching, event, and mentoring
          circle.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#E7E3E9] shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl"
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className={`absolute inset-0 flex items-center justify-center ${member.background}`}>
                <span className="font-display text-5xl font-bold text-primary-foreground/80 sm:text-7xl">
                  {member.initials}
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 text-center text-white sm:p-4">
              <h3 className="font-display text-sm font-bold leading-tight sm:text-lg">
                {member.name}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedMember(member)}
                className="mt-2 rounded-full border border-white/70 px-3 py-1 font-body text-[10px] font-semibold text-white transition-colors hover:bg-white hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-xs"
                aria-label={`View ${member.name}'s full profile`}
              >
                Full details
              </button>
            </div>
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

    <Dialog
      open={!!selectedMember}
      onOpenChange={(open) => {
        if (!open) setSelectedMember(null);
      }}
    >
      {selectedMember && (
        <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-lg">
          <div className="flex flex-col items-center text-center">
            {selectedMember.image ? (
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="mb-5 h-32 w-32 rounded-full object-cover"
              />
            ) : (
              <div
                className={`mb-5 flex h-32 w-32 items-center justify-center rounded-full ${selectedMember.background}`}
                aria-hidden="true"
              >
                <span className="font-display text-4xl font-bold text-primary-foreground">
                  {selectedMember.initials}
                </span>
              </div>
            )}
            <DialogHeader className="items-center">
              <DialogTitle className="font-display text-2xl font-bold text-foreground">
                {selectedMember.name}
              </DialogTitle>
              <DialogDescription className="font-body font-semibold text-primary">
                {selectedMember.role}
              </DialogDescription>
            </DialogHeader>
            <p className="mt-5 font-body text-sm leading-relaxed text-muted-foreground">
              {selectedMember.bio}
            </p>
          </div>
        </DialogContent>
      )}
    </Dialog>
  </section>
  );
};

export default TeamSection;
