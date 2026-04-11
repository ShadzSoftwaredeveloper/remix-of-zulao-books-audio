import { useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Target, Eye, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import JourneySection from "@/components/about/JourneySection";
import AboutCtaSection from "@/components/about/AboutCtaSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutHeroSection />
      <AboutSection />
      
      <CoreValuesSection />
      <JourneySection />
      <TestimonialsSection />
      <AboutCtaSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
