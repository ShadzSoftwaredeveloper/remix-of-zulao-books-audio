import AudioSection from "@/components/AudioSection";
import LugandaTranslator from "@/components/LugandaTranslator";

const AudioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AudioSection />
      <LugandaTranslator kind="audio teaching" />
    </div>
  );
};

export default AudioPage;
