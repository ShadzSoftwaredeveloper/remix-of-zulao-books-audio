import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import heroMain from "@/assets/about-hero-main.jpg";
import heroTopRight from "@/assets/about-hero-top-right.jpg";
import heroMidRight from "@/assets/about-hero-mid-right.jpg";
import heroBottom from "@/assets/about-hero-bottom.jpg";

const DotPattern = ({ className, cols = 7, count = 49, color = "bg-secondary/50" }: { className?: string; cols?: number; count?: number; color?: string }) => (
  <div className={`grid gap-1.5 ${className}`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className={`w-1.5 h-1.5 rounded-full ${color}`} />
    ))}
  </div>
);

const AboutHeroSection = () => {
  return (
    <section className="relative pb-16 pt-40 md:pb-24 md:pt-52 lg:pb-28 lg:pt-56 bg-muted/30 overflow-hidden">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-2 lg:pt-4"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-4">
              About Us
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
              We Provide Best{" "}
              <span className="text-secondary">Empowerment</span>{" "}
              Services For You.
            </h1>
            {/* Decorative swirl */}
            <svg width="100" height="18" viewBox="0 0 100 18" className="mb-6">
              <path
                d="M2 16C25 -4 50 20 98 2"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <p className="font-body text-muted-foreground leading-relaxed max-w-lg mb-10 lg:mb-12">
              Zuula Obusobozibwo empowers individuals and families to discover their God-given gifts,
              build generational prayer altars, and step boldly into their Kingdom purpose —
              transforming communities one household at a time.
            </p>

            {/* Vision & Mission cards */}
            <div className="grid gap-6 min-[360px]:grid-cols-2 lg:gap-8">
              <div>
                <span className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                  <Eye size={24} />
                </span>
                <h3 className="font-display text-base lg:text-lg font-bold text-foreground mb-1">Our Vision</h3>
                <p className="font-body text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  A generation of families rooted in faith, walking in purpose, and raising Kingdom leaders.
                </p>
              </div>
              <div>
                <span className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-secondary/10 text-secondary mb-3">
                  <Target size={24} />
                </span>
                <h3 className="font-display text-base lg:text-lg font-bold text-foreground mb-1">Our Mission</h3>
                <p className="font-body text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  Equipping believers with tools and knowledge for Kingdom impact across generations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Mobile: simple 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                <img src={heroMain} alt="Empowered community member" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img src={heroTopRight} alt="Online learning" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img src={heroMidRight} alt="Studying" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="col-span-2 rounded-xl overflow-hidden shadow-lg aspect-[16/7]">
                <img src={heroBottom} alt="Creative work" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>

            {/* Desktop: absolute positioned collage */}
            <div className="hidden lg:block relative min-h-[540px]">
              {/* Dot pattern top */}
              <DotPattern className="absolute -top-2 left-[30%] z-10 opacity-60" />

              {/* White blob behind main image */}
              <div className="absolute top-4 left-[8%] w-[55%] h-[65%] bg-background rounded-[40%_60%_55%_45%/50%_40%_60%_50%] z-[1]" />

              {/* Main large image (center-left) */}
              <div className="absolute top-8 left-[5%] w-[52%] h-[370px] rounded-2xl overflow-hidden shadow-xl z-[2] border-4 border-background">
                <img src={heroMain} alt="Empowered community member" className="w-full h-full object-cover" width={640} height={800} />
              </div>

              {/* Top right image */}
              <div className="absolute top-0 right-0 w-[38%] h-[180px] rounded-xl overflow-hidden shadow-lg z-[3]">
                <img src={heroTopRight} alt="Online learning" className="w-full h-full object-cover" loading="lazy" width={640} height={512} />
              </div>

              {/* Middle right image */}
              <div className="absolute top-[200px] right-0 w-[38%] h-[220px] rounded-xl overflow-hidden shadow-lg z-[3]">
                <img src={heroMidRight} alt="Studying and writing" className="w-full h-full object-cover" loading="lazy" width={512} height={640} />
              </div>

              {/* Dot pattern right - teal colored */}
              <DotPattern className="absolute top-[440px] right-0 z-10 opacity-50" color="bg-primary/50" cols={7} count={49} />


              {/* Decorative circle outline bottom right */}
              <div className="absolute -bottom-8 right-8 w-[120px] h-[120px] rounded-full border-2 border-muted-foreground/10 z-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
