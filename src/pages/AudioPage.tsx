import Navbar from "@/components/Navbar";
import AudioSection from "@/components/AudioSection";
import Footer from "@/components/Footer";

const AudioPage = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <div className="page-header">
        <div className="relative z-10 site-container text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Audio Teachings</h1>
          <p className="font-body text-primary-foreground/80 max-w-lg mx-auto">
            Listen to powerful audio teachings on Kingdom leadership and purpose.
          </p>
        </div>
      </div>
      <AudioSection />
      <Footer />
    </div>
  );
};

export default AudioPage;
