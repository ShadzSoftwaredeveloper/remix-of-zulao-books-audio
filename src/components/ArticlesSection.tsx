import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Kingdom Stewardship & Financial Integrity",
    excerpt: "Stewardship is a Kingdom mandate. Resources, talents, and finances managed with integrity expand influence and honor God.",
    tag: "Kingdom",
    image: "https://zulaobusobozibwo.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-2.00.24-PM.jpeg",
  },
  {
    title: "Raising the Next Generation of Kingdom Leaders",
    excerpt: "Kingdom legacy is built when mature leaders intentionally mentor the next generation to carry God's purposes forward.",
    tag: "Mentorship",
    image: "https://zulaobusobozibwo.com/wp-content/uploads/2025/08/WhatsApp-Image-2026-01-28-at-1.59.28-PM.jpeg",
  },
  {
    title: "The Power of Vision & Purpose in the Kingdom",
    excerpt: "Vision is prophetic fuel, and purpose is the power behind it. Together, they propel believers into divine impact.",
    tag: "Vision",
    image: "https://zulaobusobozibwo.com/wp-content/uploads/2025/08/pexels-pixabay-247195-scaled.jpg",
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 bg-muted/50">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">Blog</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Latest Articles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover rounded-lg overflow-hidden bg-background shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">
                  {a.tag}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-2">{a.title}</h3>
                <p className="font-body text-sm text-foreground/60 mb-4">{a.excerpt}</p>
                <a
                  href="https://zulaobusobozibwo.com/articles/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-body text-sm font-semibold text-primary hover:text-secondary transition-colors"
                >
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
