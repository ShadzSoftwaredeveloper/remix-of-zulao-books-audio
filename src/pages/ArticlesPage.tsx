import Navbar from "@/components/Navbar";
import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";

const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="page-header">
        <div className="relative z-10 site-container text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Articles</h1>
          <p className="font-body text-primary-foreground/80 max-w-lg mx-auto">
            Kingdom-focused teachings and insights for your spiritual growth.
          </p>
        </div>
      </div>
      <ArticlesSection />
      <Footer />
    </div>
  );
};

export default ArticlesPage;
