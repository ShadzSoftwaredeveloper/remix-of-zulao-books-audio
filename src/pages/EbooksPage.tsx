import Navbar from "@/components/Navbar";
import EbooksSection from "@/components/EbooksSection";
import Footer from "@/components/Footer";

const EbooksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="page-header">
        <div className="relative z-10 site-container text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Free eBooks</h1>
          <p className="font-body text-primary-foreground/80 max-w-lg mx-auto">
            Browse and download our curated collection of transformative books.
          </p>
        </div>
      </div>
      <EbooksSection />
      <Footer />
    </div>
  );
};

export default EbooksPage;
