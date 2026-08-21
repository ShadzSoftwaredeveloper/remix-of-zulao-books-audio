import { motion } from "framer-motion";
import { ArrowRight, PenLine } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articlesData";

const HomeBlogSection = () => {
  const latest = articles.slice(0, 3);

  return (
    <section className="py-20 bg-muted/40">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="font-body text-xs sm:text-sm uppercase tracking-[0.22em] text-primary mb-3 flex items-center gap-2">
              <PenLine size={16} /> From the Blog
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Reflections to Nourish the Soul
            </h2>
          </div>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 font-body text-sm font-semibold text-primary hover:bg-primary/20 transition-colors self-start sm:self-auto"
          >
            Visit the Blog <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {latest.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover rounded-xl overflow-hidden bg-background shadow-md border border-border/60"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">
                  {a.tag}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-2 line-clamp-2">
                  {a.title}
                </h3>
                <p className="font-body text-sm text-foreground/60 mb-4 line-clamp-2">
                  {a.excerpt}
                </p>
                <Link
                  to={`/articles/${a.slug}`}
                  className="inline-flex items-center gap-1 font-body text-sm font-semibold text-primary hover:text-secondary transition-colors"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
