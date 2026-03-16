import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EbooksSection from "@/components/EbooksSection";
import AudioSection from "@/components/AudioSection";
import ArticlesSection from "@/components/ArticlesSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EbooksSection />
      <AudioSection />
      <ArticlesSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
