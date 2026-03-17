import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="page-header">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="font-body text-primary-foreground/80 max-w-lg mx-auto">
            Learn more about Joseph Prosper and the mission of Zuula Obusobozibwo.
          </p>
        </div>
      </div>
      <AboutSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
