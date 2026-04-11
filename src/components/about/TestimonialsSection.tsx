import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Nakamya",
    role: "Community Leader",
    text: "Zuula Obusobozibwo transformed how I see my purpose. The teachings on generational prayer altars opened my eyes to a deeper walk with God and empowered my entire household.",
    rating: 5,
  },
  {
    name: "David Mugisha",
    role: "Youth Pastor",
    text: "The resources and audio teachings have been a game-changer for our youth ministry. We've seen young people step boldly into their Kingdom assignments like never before.",
    rating: 5,
  },
  {
    name: "Grace Atuhaire",
    role: "Entrepreneur",
    text: "Through the eBooks and mentorship, I discovered gifts I never knew I had. Today I run a thriving business rooted in faith and service to my community.",
    rating: 5,
  },
];

const DotPattern = ({ className }: { className?: string }) => (
  <div className={`grid grid-cols-5 gap-1.5 ${className}`}>
    {Array.from({ length: 25 }).map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="relative py-20 bg-muted/20 overflow-hidden">
      {/* Decorative dots */}
      <DotPattern className="absolute top-8 right-8 opacity-50" />
      <DotPattern className="absolute bottom-12 left-6 opacity-30" />

      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-3">
              Testimonials
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2 leading-tight">
              What Our Community<br />Has To Say
            </h2>
            {/* Decorative swirl */}
            <svg width="80" height="16" viewBox="0 0 80 16" className="mb-6">
              <path
                d="M2 14C20 -2 40 18 78 2"
                stroke="hsl(var(--secondary))"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-display text-secondary font-bold text-lg">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-display font-bold text-foreground">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>

            {/* Dots + Arrows */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === current ? "bg-secondary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2 ml-4">
                <button onClick={prev} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={next} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: Video Tour Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg bg-card">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Ministry Video Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground leading-snug">
                  Take a Video Tour to Learn<br />About Our Ministry
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
