import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles, getArticleBySlug } from "@/data/articlesData";

const ArticlePage = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  useEffect(() => {
    document.title = article
      ? `${article.title} | Zuula Obusobozibwo`
      : "Article Not Found | Zuula Obusobozibwo";
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="site-container py-32 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Article not found</h1>
          <Link to="/articles" className="font-body text-primary hover:text-secondary">
            Back to Articles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = article.relatedSlugs
    .map((relatedSlug) => getArticleBySlug(relatedSlug))
    .filter((relatedArticle): relatedArticle is (typeof articles)[number] => Boolean(relatedArticle));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div
        className="page-header"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="relative z-10 site-container text-center">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">
            {article.tag}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 max-w-3xl mx-auto">
            {article.title}
          </h1>
          <p className="font-body text-sm text-primary-foreground/70">
            {article.author} · {article.date}
          </p>
        </div>
      </div>

      <article className="py-16">
        <div className="site-container max-w-3xl">
          <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-md mb-10">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            {article.content.map((p, i) => (
              <p key={i} className="font-body text-base sm:text-lg text-foreground/75 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {article.sections.map((section) => (
            <section key={section.heading} className="mt-10 sm:mt-12">
              <h2 className="mb-5 font-display text-2xl sm:text-3xl font-bold text-foreground">
                {section.heading}
              </h2>
              <div className="space-y-6">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="font-body text-base sm:text-lg text-foreground/75 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {related.length > 0 && (
            <aside className="mt-12 border-l-4 border-primary bg-muted/60 px-5 py-5 sm:px-6">
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                Continue exploring
              </p>
              <div className="flex flex-col gap-3">
                {related.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    to={`/articles/${relatedArticle.slug}`}
                    className="font-display text-lg font-bold text-primary transition-colors hover:text-secondary"
                  >
                    {relatedArticle.title}
                  </Link>
                ))}
              </div>
            </aside>
          )}

          <Link
            to="/articles"
            className="inline-flex items-center gap-2 mt-12 font-body text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            <ArrowLeft size={16} /> Back to Articles
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="site-container">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Related Reading</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to={`/articles/${a.slug}`}
                  className="card-hover rounded-lg overflow-hidden bg-background shadow-md"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{a.title}</h3>
                    <p className="font-body text-sm text-foreground/60">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ArticlePage;