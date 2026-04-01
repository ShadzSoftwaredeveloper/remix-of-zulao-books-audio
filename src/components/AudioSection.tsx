import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Heart, ArrowLeft } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

import kingship1 from "@/assets/audio/kingship-1.jpg";
import kingship2 from "@/assets/audio/kingship-2.jpg";
import kingship3 from "@/assets/audio/kingship-3.jpg";
import kingship4 from "@/assets/audio/kingship-4.jpg";
import kingship5 from "@/assets/audio/kingship-5.jpg";
import kingship10 from "@/assets/audio/kingship-10.jpg";
import kingship11 from "@/assets/audio/kingship-11.jpg";
import kingship12 from "@/assets/audio/kingship-12.jpg";

import kingshipAudio1 from "@/assets/audio/KINGSHIP/KINGSHIP PART 1.mp3";
import kingshipAudio2 from "@/assets/audio/KINGSHIP/KINGSHIP PART 2  .mp3";
import kingshipAudio3 from "@/assets/audio/KINGSHIP/KINGSHIP PART 3 .mp3";
import kingshipAudio4 from "@/assets/audio/KINGSHIP/KINGSHIP PART 4 .mp3";
import kingshipAudio5 from "@/assets/audio/KINGSHIP/KINGSHIP PART 5 .mp3";
import kingshipAudio6 from "@/assets/audio/KINGSHIP/KINGSHIP PART 6   .mp3";
import kingshipAudio7 from "@/assets/audio/KINGSHIP/KINGSHIP PART 7  .mp3";
import kingshipAudio8 from "@/assets/audio/KINGSHIP/KINGSHIP PART 8  .mp3";
import kingshipAudio9 from "@/assets/audio/KINGSHIP/KINGSHIP PART 9  .mp3";
import kingshipAudio10 from "@/assets/audio/KINGSHIP/KINHSHIP  PART 10 .mp3";
import kingshipAudio11 from "@/assets/audio/KINGSHIP/KINHSHIP  PART 11 .mp3";
import kingshipAudio12 from "@/assets/audio/KINGSHIP/KINHSHIP  PART 12 .mp3";

const audioSeries = [
  { title: "Kingship Part 1", album: "Kingship Series", category: "kingship", duration: "4:16", plays: "8,230", price: "Free", image: kingship1, src: kingshipAudio1 },
  { title: "Kingship Part 2", album: "Kingship Series", category: "kingship", duration: "15:20", plays: "6,540", price: "Free", image: kingship2, src: kingshipAudio2 },
  { title: "Kingship Part 3", album: "Kingship Series", category: "kingship", duration: "11:08", plays: "5,120", price: "Free", image: kingship3, src: kingshipAudio3 },
  { title: "Kingship Part 4", album: "Kingship Series", category: "kingship", duration: "14:55", plays: "4,890", price: "Free", image: kingship4, src: kingshipAudio4 },
  { title: "Kingship Part 5", album: "Kingship Series", category: "kingship", duration: "13:30", plays: "3,750", price: "Free", image: kingship5, src: kingshipAudio5 },
  { title: "Kingship Part 6", album: "Kingship Series", category: "kingship", duration: "12:00", plays: "3,200", price: "Free", image: kingship1, src: kingshipAudio6 },
  { title: "Kingship Part 7", album: "Kingship Series", category: "kingship", duration: "14:10", plays: "2,980", price: "Free", image: kingship1, src: kingshipAudio7 },
  { title: "Kingship Part 8", album: "Kingship Series", category: "kingship", duration: "11:45", plays: "2,750", price: "Free", image: kingship1, src: kingshipAudio8 },
  { title: "Kingship Part 9", album: "Kingship Series", category: "kingship", duration: "13:20", plays: "2,600", price: "Free", image: kingship1, src: kingshipAudio9 },
  { title: "Kingship Part 10", album: "Kingship Series", category: "kingship", duration: "16:12", plays: "2,910", price: "Free", image: kingship10, src: kingshipAudio10 },
  { title: "Kingship Part 11", album: "Kingship Series", category: "kingship", duration: "10:45", plays: "2,340", price: "Free", image: kingship11, src: kingshipAudio11 },
  { title: "Kingship Part 12", album: "Kingship Series", category: "kingship", duration: "18:00", plays: "1,890", price: "Free", image: kingship12, src: kingshipAudio12 },
];

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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const current = audioSeries[currentTrack];

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
    <section id="audio" className="py-12 pb-32 bg-background">
      <div className="site-container">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          <span className="font-body text-sm">Back to Home</span>
        </button>

        {/* Recommended Albums */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Recommended Teachings
          </h2>
          <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {audioSeries.slice(0, 6).map((audio, i) => (
              <button
                key={i}
                onClick={() => playTrack(i)}
                className={`flex-shrink-0 text-left group transition-all ${currentTrack === i ? "scale-105" : ""}`}
              >
                <div className={`w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md ring-2 transition-all ${currentTrack === i ? "ring-primary" : "ring-transparent"}`}>
                  <img src={audio.image} alt={audio.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <p className="font-display text-xs sm:text-sm font-semibold text-foreground mt-2 truncate w-28 sm:w-36">{audio.title}</p>
                <p className="font-body text-xs text-muted-foreground">{audio.plays} plays</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Track List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">All Teachings</h2>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px] font-body text-sm">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="spiritual">Spiritual</SelectItem>
                <SelectItem value="financial">Financial</SelectItem>
                <SelectItem value="personal-discovery">Personal Discovery</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
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
            {audioSeries.filter(a => categoryFilter === "all" || a.category === categoryFilter).map((audio, i) => {
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
                    <p className="font-body text-xs text-muted-foreground sm:hidden">{audio.duration}</p>
                  </div>
                </div>

                {/* Desktop-only columns */}
                <span className="hidden sm:block font-body text-sm text-muted-foreground truncate">{audio.album}</span>
                <span className="hidden sm:block font-body text-sm text-muted-foreground">{audio.duration}</span>
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
            <div className="min-w-0 hidden xs:block sm:block">
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
                {duration > 0 ? formatTime(duration) : current.duration}
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
