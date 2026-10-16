import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Heart, ArrowLeft } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { audioSeries, categories } from "@/data/audioData";
import LugandaToggle, { DescLang } from "@/components/LugandaToggle";

const formatTime = (seconds: number) => {
  if (isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const AudioSection = () => {
  const navigate = useNavigate();
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(75);
  const [muted, setMuted] = useState(false);
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [lang, setLang] = useState<DescLang>("en");
  const [trackDurations, setTrackDurations] = useState<Record<number, string>>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const current = audioSeries[currentTrack];

  // Load real durations from audio metadata
  useEffect(() => {
    audioSeries.forEach((track, index) => {
      if (!track.src) return;
      const tempAudio = new Audio();
      tempAudio.preload = "metadata";
      tempAudio.src = track.src;
      tempAudio.addEventListener("loadedmetadata", () => {
        setTrackDurations(prev => ({ ...prev, [index]: formatTime(tempAudio.duration) }));
      });
    });
  }, []);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    audio.addEventListener("timeupdate", () => setCurrentTime(audio.currentTime));
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
    audio.addEventListener("ended", () => {
      const next = (currentTrack + 1) % audioSeries.length;
      setCurrentTrack(next);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Update source when track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const track = audioSeries[currentTrack];
    if (track.src) {
      audio.src = track.src;
      if (isPlaying) audio.play().catch(() => {});
    } else {
      audio.pause();
      audio.src = "";
      setCurrentTime(0);
      setDuration(0);
    }
  }, [currentTrack]);

  // Play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audio.src) return;
    if (isPlaying) audio.play().catch(() => {});
    else audio.pause();
  }, [isPlaying]);

  // Volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume / 100;
    }
  }, [volume, muted]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % audioSeries.length);
    setCurrentTime(0);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + audioSeries.length) % audioSeries.length);
    setCurrentTime(0);
  };

  const seek = useCallback((val: number[]) => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      audio.currentTime = (val[0] / 100) * audio.duration;
      setCurrentTime(audio.currentTime);
    }
  }, []);

  const toggleLike = (index: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const playTrack = (i: number) => {
    setCurrentTrack(i);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
     <section id="audio" className="py-10 pb-32 sm:py-12 bg-cream overflow-hidden">
      <div className="site-container">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          <span className="font-body text-sm">Back to Home</span>
        </button>

        {/* Recommended Teachings - Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Recommended Teachings
            </h2>
            <LugandaToggle value={lang} onChange={setLang} />
          </div>
          <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {categories.filter(cat => cat.value !== "all").map((cat) => {
              const catTracks = audioSeries.filter(a => a.category === cat.value);
              const firstTrack = catTracks[0];
              const firstTrackIndex = audioSeries.indexOf(firstTrack);
              return (
                <button
                  key={cat.value}
                  onClick={() => { setCategoryFilter(cat.value); playTrack(firstTrackIndex); }}
                  className={`flex-shrink-0 text-left group transition-all ${categoryFilter === cat.value ? "scale-105" : ""}`}
                >
                  <div className={`w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md ring-2 transition-all ${categoryFilter === cat.value ? "ring-primary" : "ring-transparent"}`}>
                    <img src={firstTrack?.image} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <p className="font-display text-xs sm:text-sm font-semibold text-foreground mt-2 truncate w-28 sm:w-36">{cat.label}</p>
                  <p className="font-body text-xs text-muted-foreground">{catTracks.length} tracks</p>
                  <p lang={lang} className="font-body text-xs text-foreground/70 mt-1 w-28 sm:w-36 line-clamp-3">{lang === "lg" ? cat.descLg : cat.descEn}</p>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Track List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
           <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">All Teachings</h2>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
               <SelectTrigger className="w-full font-body text-sm sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-card rounded-xl border border-border overflow-hidden">
            {/* Table Header - hidden on mobile */}
            <div className="hidden sm:grid grid-cols-[40px_1fr_1fr_80px_80px_40px] gap-4 px-5 py-3 border-b border-border text-xs font-body font-medium text-muted-foreground uppercase tracking-wider">
              <span>#</span>
              <span>Track / Artist</span>
              <span>Album</span>
              <span>Time</span>
              <span>Plays</span>
              <span></span>
            </div>

            {/* Track Rows */}
            {audioSeries.filter(a => categoryFilter === "all" || a.category === categoryFilter).map((audio) => {
              const originalIndex = audioSeries.indexOf(audio);
              return (
              <button
                key={originalIndex}
                onClick={() => playTrack(originalIndex)}
                className={`w-full flex sm:grid sm:grid-cols-[40px_1fr_1fr_80px_80px_40px] gap-3 sm:gap-4 px-4 sm:px-5 py-3 items-center text-left transition-colors hover:bg-accent/50 ${currentTrack === originalIndex ? "bg-accent/30" : ""}`}
              >
                {/* Number - hidden on mobile */}
                <span className={`hidden sm:block font-body text-sm ${currentTrack === originalIndex ? "text-primary font-bold" : "text-muted-foreground"}`}>
                  {currentTrack === originalIndex && isPlaying ? (
                    <span className="flex items-center gap-[2px]">
                      <span className="w-[3px] h-3 bg-primary rounded-full animate-pulse" />
                      <span className="w-[3px] h-4 bg-primary rounded-full animate-pulse [animation-delay:150ms]" />
                      <span className="w-[3px] h-2 bg-primary rounded-full animate-pulse [animation-delay:300ms]" />
                    </span>
                  ) : (
                    String(originalIndex + 1).padStart(2, "0")
                  )}
                </span>

                {/* Track info */}
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <img src={audio.image} alt={audio.title} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                  <div className="min-w-0">
                    <p className={`font-display text-sm font-semibold truncate ${currentTrack === originalIndex ? "text-primary" : "text-foreground"}`}>{audio.title}</p>
                    <p className="font-body text-xs text-muted-foreground">Zula Obusobozi Bwo</p>
                    <p className="font-body text-xs text-muted-foreground sm:hidden">{trackDurations[originalIndex] || audio.duration}</p>
                  </div>
                </div>

                {/* Desktop-only columns */}
                <span className="hidden sm:block font-body text-sm text-muted-foreground truncate">{audio.album}</span>
                <span className="hidden sm:block font-body text-sm text-muted-foreground">{trackDurations[originalIndex] || audio.duration}</span>
                <span className="hidden sm:block font-body text-sm text-muted-foreground">{audio.plays}</span>

                <span
                  onClick={(e) => { e.stopPropagation(); toggleLike(originalIndex); }}
                  className="flex items-center justify-center flex-shrink-0"
                >
                  <Heart size={16} className={liked.has(originalIndex) ? "fill-destructive text-destructive" : "text-muted-foreground hover:text-foreground"} />
                </span>
              </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Audio Player - Responsive */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border shadow-lg">
        <div className="site-container flex items-center gap-3 sm:gap-4 py-2 sm:py-3">
          {/* Track Info */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0 w-auto sm:w-64">
            <img src={current.image} alt={current.title} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0" />
             <div className="hidden min-w-0 min-[360px]:block">
              <p className="font-display text-xs sm:text-sm font-semibold text-foreground truncate max-w-[100px] sm:max-w-none">{current.title}</p>
              <p className="font-body text-xs text-muted-foreground hidden sm:block">Zula Obusobozi Bwo</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex-1 flex flex-col items-center gap-0.5 sm:gap-1">
            <div className="flex items-center gap-3 sm:gap-4">
              <button onClick={prevTrack} className="text-muted-foreground hover:text-foreground transition-colors">
                <SkipBack size={18} />
              </button>
              <button
                onClick={togglePlay}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
              </button>
              <button onClick={nextTrack} className="text-muted-foreground hover:text-foreground transition-colors">
                <SkipForward size={18} />
              </button>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 w-full max-w-md">
              <span className="font-body text-[10px] sm:text-xs text-muted-foreground w-8 sm:w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <Slider
                value={[progress]}
                onValueChange={seek}
                max={100}
                step={0.1}
                className="flex-1"
              />
              <span className="font-body text-[10px] sm:text-xs text-muted-foreground w-8 sm:w-10">
                {duration > 0 ? formatTime(duration) : (trackDurations[currentTrack] || current.duration)}
              </span>
            </div>
          </div>

          {/* Volume - hidden on mobile */}
          <div className="hidden sm:flex items-center gap-2 w-36 flex-shrink-0">
            <button onClick={() => setMuted(!muted)} className="text-muted-foreground hover:text-foreground transition-colors">
              {muted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <Slider
              value={[muted ? 0 : volume]}
              onValueChange={(val) => { setVolume(val[0]); setMuted(false); }}
              max={100}
              step={1}
              className="flex-1"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default AudioSection;
