import AudioSection from "@/components/AudioSection";
import Seo from "@/components/Seo";

const AudioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Christian Audio Teachings | Zuula Obusobozibwo"
        description="Listen to free Christian audio teachings in English and Luganda on spiritual growth, personal development, faith, and business."
      />
      <AudioSection />
    </div>
  );
};

export default AudioPage;
