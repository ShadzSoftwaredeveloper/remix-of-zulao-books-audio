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
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Christian Books & Audio | Zuula Obusobozibwo"
        description="Explore Christian books, Luganda audio teachings, articles, and mentorship from Tumusiime Joseph Prosper. Grow in faith, purpose, and leadership."
      />
      <Navbar />
      <HeroSection />
      <AboutSection showBookCta />
      <EbooksSection hideBookDetails />
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
