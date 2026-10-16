import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Headphones, ArrowRight, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { audioSeries } from "@/data/audioData";

const formatTime = (seconds: number) => {
  if (!seconds || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const FeaturedPodcastHero = () => {
  const featured = audioSeries[0];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio(featured.src);
    audio.preload = "metadata";
    audioRef.current = audio;

    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setIsPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
      audio.src = "";
    };
  }, [featured.src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const seek = (val: number[]) => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      audio.currentTime = (val[0] / 100) * audio.duration;
      setCurrentTime(audio.currentTime);
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="pt-16 sm:pt-20 pb-4 bg-cream overflow-hidden">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl sm:rounded-3xl border border-border/60 bg-gradient-to-br from-accent/15 via-card to-primary/10 shadow-lg"
        >
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-7 p-5 sm:p-10 md:grid-cols-[280px_1fr] md:items-center">
            <div className="relative mx-auto w-full max-w-[280px]">
              <img
                src={featured.image}
                alt={`${featured.title} cover art`}
                className="aspect-square w-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause sample" : "Play sample"}
                className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
              </button>
            </div>

            <div className="min-w-0">
              <p className="font-body text-xs uppercase tracking-[0.22em] text-primary mb-3 flex items-center gap-2">
                <Headphones size={16} /> Featured Teaching
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                {featured.title}
              </h2>
              <p className="font-body text-sm text-muted-foreground mt-2">
                {featured.album} · Zuula Obusobozibwo
              </p>
              <p className="font-body text-foreground/70 mt-4 max-w-xl">
                Press play for a sample of this teaching, then continue with the
                full library of audio messages on kingship, the Spirit, finances
                and personal discovery.
              </p>

              <div className="mt-6 flex items-center gap-3 max-w-lg">
                <span className="font-body text-xs text-muted-foreground w-10 text-right">
                  {formatTime(currentTime)}
                </span>
                <Slider value={[progress]} onValueChange={seek} max={100} step={0.1} className="flex-1" />
                <span className="font-body text-xs text-muted-foreground w-10">
                  {duration > 0 ? formatTime(duration) : featured.duration}
                </span>
              </div>

              <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  onClick={togglePlay}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  {isPlaying ? "Pause Sample" : "Play Sample"}
                </button>
                <Link
                  to="/audio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-background/60 px-6 py-3 font-body text-sm font-semibold text-foreground hover:bg-accent/10 transition-colors"
                >
                  <Volume2 size={16} /> Start Listening <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPodcastHero;
