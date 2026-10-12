import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import JourneySection from "@/components/about/JourneySection";
import AboutCtaSection from "@/components/about/AboutCtaSection";
import TeamSection from "@/components/about/TeamSection";
import MediaCtaSection from "@/components/about/MediaCtaSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";

const AboutPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = "About Us | Zuula Obusobozibwo";
  }, []);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // Allow layout to settle before scrolling.
      const t = setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutHeroSection />
      <AboutSection />
      <CoreValuesSection />
      <TeamSection />
      <JourneySection />
      <TestimonialsSection />
      <MediaCtaSection />
      <AboutCtaSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
