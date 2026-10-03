import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articlesData";

const ArticlesSection = () => {
  const [featured, ...rest] = articles;

  return (
    <section id="articles" className="py-16 sm:py-24 bg-muted/50 overflow-hidden">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">Blog</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Latest Articles
          </h2>
        </motion.div>

        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-hover grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden bg-background shadow-lg border border-border/60 mb-10 sm:mb-14"
          >
            <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-10 flex flex-col justify-center">
              <span className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">
                Featured · {featured.tag}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-3">
                {featured.title}
              </h3>
              <p className="font-body text-foreground/65 mb-4">{featured.excerpt}</p>
              <p className="font-body text-xs text-foreground/50 flex items-center gap-2 mb-6">
                <CalendarDays size={14} /> {featured.date} · {featured.author}
              </p>
              <Link
                to={`/articles/${featured.slug}`}
                className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        )}

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
          {rest.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-hover flex w-[84vw] max-w-[330px] shrink-0 snap-start flex-col overflow-hidden rounded-lg bg-background shadow-md border border-border/60 md:w-auto md:max-w-none"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">
                  {a.tag}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-2">{a.title}</h3>
                <p className="font-body text-sm text-foreground/60 mb-3">{a.excerpt}</p>
                <p className="font-body text-xs text-foreground/45 mb-4 flex items-center gap-2">
                  <CalendarDays size={13} /> {a.date}
                </p>
                <Link
                  to={`/articles/${a.slug}`}
                  className="mt-auto inline-flex items-center gap-1 font-body text-sm font-semibold text-primary hover:text-secondary transition-colors"
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
