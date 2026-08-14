import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articlesData";

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
              key={a.slug}
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

export default ArticlesSection;
