import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles, getArticleBySlug } from "@/data/articlesData";
import Seo, { SITE_URL } from "@/components/Seo";

const ArticlePage = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Seo
          title="Article Not Found | Zuula Obusobozibwo"
          description="This article could not be found."
          noIndex
        />
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
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: new URL(article.image, SITE_URL).toString(),
    datePublished: new Date(article.date).toISOString(),
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Zuula Obusobozibwo",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/articles/${article.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${article.title} | Zuula Obusobozibwo`}
        description={article.excerpt}
        image={article.image}
        type="article"
        structuredData={articleSchema}
      />
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
        <div className="site-container grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_300px] xl:gap-14">
          <div className="min-w-0">
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

          <Link
            to="/articles"
            className="inline-flex items-center gap-2 mt-12 font-body text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            <ArrowLeft size={16} /> Back to Articles
          </Link>
          </div>

          <aside aria-label="Article sidebar" className="min-w-0 space-y-8 lg:sticky lg:top-40">
            <div className="border-b border-border pb-7">
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-wide text-muted-foreground">Advertise with us</p>
              <Link to="/contact" className="font-body text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary">
                Contact us to place your advertisement here.
              </Link>
            </div>
            {related.length > 0 && (
              <section aria-labelledby="sidebar-related-heading">
                <h2 id="sidebar-related-heading" className="font-display text-xl font-bold text-foreground">Related articles</h2>
                <p className="mb-5 mt-3 font-body text-sm leading-relaxed text-muted-foreground">Keep reading for more Kingdom-focused teachings.</p>
                <div className="space-y-4">
                  {related.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.slug}
                      to={`/articles/${relatedArticle.slug}`}
                      className="group block rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <h3 className="font-body text-base font-semibold leading-snug text-foreground group-hover:text-primary">{relatedArticle.title}</h3>
                      <p className="mt-2 line-clamp-3 font-body text-sm leading-relaxed text-muted-foreground">{relatedArticle.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </aside>
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