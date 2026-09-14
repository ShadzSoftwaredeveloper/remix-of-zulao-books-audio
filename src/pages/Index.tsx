import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EbooksSection from "@/components/EbooksSection";
import HomeBlogSection from "@/components/HomeBlogSection";
import FeaturedPodcastHero from "@/components/FeaturedPodcastHero";
import HomeAudioSection from "@/components/HomeAudioSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EbooksSection />
      <HomeBlogSection />
      <FeaturedPodcastHero />
      <HomeAudioSection />
      <GoogleReviewsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
