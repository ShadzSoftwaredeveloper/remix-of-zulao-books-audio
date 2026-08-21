import { motion } from "framer-motion";
import { ArrowRight, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { audioSeries, categories } from "@/data/audioData";

const HomeAudioSection = () => {
  const featuredCats = categories.filter((cat) => cat.value !== "all");

  return (
    <section className="py-20 bg-background">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="font-body text-xs sm:text-sm uppercase tracking-[0.22em] text-primary mb-3 flex items-center gap-2">
              <Headphones size={16} /> Audio Teachings
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Listen & Be Transformed
            </h2>
            <p className="font-body text-foreground/60 max-w-xl mt-3">
              Explore powerful audio teachings across every area of life — from
              kingship and the Spirit to finances and personal discovery.
            </p>
          </div>
          <Link
            to="/audio"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity self-start sm:self-auto shadow-lg shadow-primary/20"
          >
            Listen to All Audios <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featuredCats.map((cat, i) => {
            const catTracks = audioSeries.filter((a) => a.category === cat.value);
            const firstTrack = catTracks[0];
            return (
              <motion.div
                key={cat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to="/audio"
                  className="group block rounded-2xl overflow-hidden bg-card border border-border/60 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={firstTrack?.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="font-display text-base font-bold text-white drop-shadow">
                        {cat.label}
                      </p>
                      <p className="font-body text-xs text-white/80">
                        {catTracks.length} tracks
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeAudioSection;
