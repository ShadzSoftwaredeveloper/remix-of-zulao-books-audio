import { motion } from "framer-motion";
import { Play, Headphones } from "lucide-react";

const audioSeries = [
  { title: "Kingship Part 1", price: "UShs 1,000", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINGSHIP-PART-1-he8y5o-mp3-image-bz5rsx-400x400.jpg" },
  { title: "Kingship Part 2", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINGSHIP-PART-2-2hxzod-mp3-image-neon8g-400x400.jpg" },
  { title: "Kingship Part 3", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINGSHIP-PART-3-ccjm5j-mp3-image-lbi44z-400x400.jpg" },
  { title: "Kingship Part 4", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINGSHIP-PART-4-rvr0gt-mp3-image-zlavzj-400x400.jpg" },
  { title: "Kingship Part 5", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINGSHIP-PART-5-bdgyu7-mp3-image-c4k38b-400x400.jpg" },
  { title: "Kingship Part 10", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINHSHIP-PART-10-7nmpic-mp3-image-brmhlf-400x400.jpg" },
  { title: "Kingship Part 11", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINHSHIP-PART-11-8t33gv-mp3-image-azvdzb-400x400.jpg" },
  { title: "Kingship Part 12", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINHSHIP-PART-12-n8znp2-mp3-image-ok7r9n-400x400.jpg" },
];

const AudioSection = () => {
  return (
    <section id="audio" className="py-24 bg-background">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
            Audio Series
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Kingship Series
          </h2>
          <p className="font-body text-foreground/60 max-w-lg mx-auto">
            Powerful audio teachings on Kingdom leadership and purpose. Listen and be transformed.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {audioSeries.map((audio, i) => (
            <motion.div
              key={audio.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-hover group"
            >
              <div className="relative rounded-lg overflow-hidden bg-muted shadow-md">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={audio.image}
                    alt={audio.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="p-3 rounded-full bg-secondary text-secondary-foreground">
                    <Play size={24} />
                  </button>
                </div>
              </div>
              <div className="mt-3 px-1 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">{audio.title}</h3>
                  <p className="font-body text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Headphones size={12} /> Audio Teaching
                  </p>
                </div>
                <span className={`font-body text-xs font-semibold px-2 py-1 rounded ${audio.price === "Free" ? "bg-primary/10 text-primary" : "bg-secondary/20 text-secondary"}`}>
                  {audio.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudioSection;
