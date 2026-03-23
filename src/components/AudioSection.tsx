import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const audioSeries = [
  { title: "Kingship Part 1", album: "Kingship Series", duration: "12:45", plays: "8,230", price: "UShs 1,000", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINGSHIP-PART-1-he8y5o-mp3-image-bz5rsx-400x400.jpg" },
  { title: "Kingship Part 2", album: "Kingship Series", duration: "15:20", plays: "6,540", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINGSHIP-PART-2-2hxzod-mp3-image-neon8g-400x400.jpg" },
  { title: "Kingship Part 3", album: "Kingship Series", duration: "11:08", plays: "5,120", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINGSHIP-PART-3-ccjm5j-mp3-image-lbi44z-400x400.jpg" },
  { title: "Kingship Part 4", album: "Kingship Series", duration: "14:55", plays: "4,890", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINGSHIP-PART-4-rvr0gt-mp3-image-zlavzj-400x400.jpg" },
  { title: "Kingship Part 5", album: "Kingship Series", duration: "13:30", plays: "3,750", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINGSHIP-PART-5-bdgyu7-mp3-image-c4k38b-400x400.jpg" },
  { title: "Kingship Part 10", album: "Kingship Series", duration: "16:12", plays: "2,910", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINHSHIP-PART-10-7nmpic-mp3-image-brmhlf-400x400.jpg" },
  { title: "Kingship Part 11", album: "Kingship Series", duration: "10:45", plays: "2,340", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINHSHIP-PART-11-8t33gv-mp3-image-azvdzb-400x400.jpg" },
  { title: "Kingship Part 12", album: "Kingship Series", duration: "18:00", plays: "1,890", price: "Free", image: "https://zulaobusobozibwo.com/wp-content/uploads/woocommerce_uploads/2025/08/KINHSHIP-PART-12-n8znp2-mp3-image-ok7r9n-400x400.jpg" },
];

const AudioSection = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % audioSeries.length);
    setProgress(0);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + audioSeries.length) % audioSeries.length);
    setProgress(0);
  };

  const toggleLike = (index: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextTrack();
            return 0;
          }
          return prev + 0.5;
        });
      }, 300);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying]);

  const current = audioSeries[currentTrack];

  return (
    <section id="audio" className="py-12 bg-background">
      <div className="site-container">
        {/* Recommended Albums */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Recommended Teachings
          </h2>
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {audioSeries.slice(0, 6).map((audio, i) => (
              <button
                key={i}
                onClick={() => { setCurrentTrack(i); setProgress(0); setIsPlaying(true); }}
                className={`flex-shrink-0 text-left group transition-all ${currentTrack === i ? 'scale-105' : ''}`}
              >
                <div className={`w-36 h-36 rounded-2xl overflow-hidden shadow-md ring-2 transition-all ${currentTrack === i ? 'ring-primary' : 'ring-transparent'}`}>
                  <img src={audio.image} alt={audio.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <p className="font-display text-sm font-semibold text-foreground mt-2 truncate w-36">{audio.title}</p>
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
            <h2 className="font-display text-2xl font-bold text-foreground">All Teachings</h2>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="free">Free</TabsTrigger>
                <TabsTrigger value="paid">Paid</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="bg-card rounded-xl border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[40px_1fr_1fr_80px_80px_40px] gap-4 px-5 py-3 border-b border-border text-xs font-body font-medium text-muted-foreground uppercase tracking-wider">
              <span>#</span>
              <span>Track / Artist</span>
              <span>Album</span>
              <span>Time</span>
              <span>Plays</span>
              <span></span>
            </div>

            {/* Track Rows */}
            {audioSeries.map((audio, i) => (
              <button
                key={i}
                onClick={() => { setCurrentTrack(i); setProgress(0); setIsPlaying(true); }}
                className={`w-full grid grid-cols-[40px_1fr_1fr_80px_80px_40px] gap-4 px-5 py-3 items-center text-left transition-colors hover:bg-accent/50 ${currentTrack === i ? 'bg-accent/30' : ''}`}
              >
                <span className={`font-body text-sm ${currentTrack === i ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                  {currentTrack === i && isPlaying ? (
                    <span className="flex items-center gap-[2px]">
                      <span className="w-[3px] h-3 bg-primary rounded-full animate-pulse" />
                      <span className="w-[3px] h-4 bg-primary rounded-full animate-pulse [animation-delay:150ms]" />
                      <span className="w-[3px] h-2 bg-primary rounded-full animate-pulse [animation-delay:300ms]" />
                    </span>
                  ) : (
                    String(i + 1).padStart(2, '0')
                  )}
                </span>
                <div className="flex items-center gap-3 min-w-0">
                  <img src={audio.image} alt={audio.title} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                  <div className="min-w-0">
                    <p className={`font-display text-sm font-semibold truncate ${currentTrack === i ? 'text-primary' : 'text-foreground'}`}>{audio.title}</p>
                    <p className="font-body text-xs text-muted-foreground">Zula Obusobozi Bwo</p>
                  </div>
                </div>
                <span className="font-body text-sm text-muted-foreground truncate">{audio.album}</span>
                <span className="font-body text-sm text-muted-foreground">{audio.duration}</span>
                <span className="font-body text-sm text-muted-foreground">{audio.plays}</span>
                <span
                  onClick={(e) => { e.stopPropagation(); toggleLike(i); }}
                  className="flex items-center justify-center"
                >
                  <Heart size={16} className={liked.has(i) ? 'fill-destructive text-destructive' : 'text-muted-foreground hover:text-foreground'} />
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Audio Player */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border shadow-lg">
        <div className="site-container flex items-center gap-4 py-3">
          {/* Track Info */}
          <div className="flex items-center gap-3 w-64 flex-shrink-0">
            <img src={current.image} alt={current.title} className="w-12 h-12 rounded-lg object-cover" />
            <div className="min-w-0">
              <p className="font-display text-sm font-semibold text-foreground truncate">{current.title}</p>
              <p className="font-body text-xs text-muted-foreground">Zula Obusobozi Bwo</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex-1 flex flex-col items-center gap-1">
            <div className="flex items-center gap-4">
              <button onClick={prevTrack} className="text-muted-foreground hover:text-foreground transition-colors">
                <SkipBack size={20} />
              </button>
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
              </button>
              <button onClick={nextTrack} className="text-muted-foreground hover:text-foreground transition-colors">
                <SkipForward size={20} />
              </button>
            </div>
            <div className="flex items-center gap-3 w-full max-w-md">
              <span className="font-body text-xs text-muted-foreground w-10 text-right">
                {Math.floor(progress / 100 * 15)}:{String(Math.floor((progress / 100 * 15 * 60) % 60)).padStart(2, '0')}
              </span>
              <Slider
                value={[progress]}
                onValueChange={(val) => setProgress(val[0])}
                max={100}
                step={0.1}
                className="flex-1"
              />
              <span className="font-body text-xs text-muted-foreground w-10">{current.duration}</span>
            </div>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-2 w-36 flex-shrink-0">
            <Volume2 size={18} className="text-muted-foreground" />
            <Slider defaultValue={[75]} max={100} step={1} className="flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioSection;
