import { motion } from "framer-motion";
import { Star, MessageSquareQuote, ExternalLink } from "lucide-react";

const reviewLink = "https://g.page/r/CUPUop6xCa0MEBM/review";

const reviews = [
  {
    name: "Sarah Nakamya",
    role: "Community Leader",
    text: "Zuula Obusobozibwo transformed how I see my purpose. The teachings on generational prayer altars opened my eyes to a deeper walk with God.",
    rating: 5,
  },
  {
    name: "David Mugisha",
    role: "Youth Pastor",
    text: "The audio teachings and books have been a game-changer for our youth ministry. Highly recommended!",
    rating: 5,
  },
  {
    name: "Grace Atuhaire",
    role: "Entrepreneur",
    text: "Through the eBooks and mentorship, I discovered gifts I never knew I had. Truly life-changing resources.",
    rating: 5,
  },
];

const GoogleReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-muted/20 overflow-hidden">
      <div className="site-container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          {/* Left: Rating summary + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-3">
              Google Reviews
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
              Loved by Our Community
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8">
              Readers and listeners across Uganda and beyond are sharing how these teachings are transforming their lives. Join the conversation.
            </p>

            <div className="flex w-full flex-col items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm sm:inline-flex sm:w-auto sm:flex-row sm:rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">G</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < 4 ? "fill-secondary text-secondary" : "fill-secondary/50 text-secondary/50"}
                      />
                    ))}
                  </div>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    4.8 out of 5 on Google
                  </p>
                </div>
              </div>
              <a
                href={reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-body text-sm font-semibold hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-secondary/20"
              >
                <ExternalLink size={16} />
                Write a Review
              </a>
            </div>
          </motion.div>

          {/* Right: Review cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} size={14} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-body text-sm text-foreground/80 leading-relaxed mb-4">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center font-display text-accent font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
