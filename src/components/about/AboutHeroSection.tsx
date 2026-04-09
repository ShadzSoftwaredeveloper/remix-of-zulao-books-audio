import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import heroMain from "@/assets/about-hero-main.jpg";
import heroTopRight from "@/assets/about-hero-top-right.jpg";
import heroMidRight from "@/assets/about-hero-mid-right.jpg";
import heroBottom from "@/assets/about-hero-bottom.jpg";

const DotPattern = ({ className }: { className?: string }) => (
  <div className={`grid grid-cols-7 gap-1.5 ${className}`}>
    {Array.from({ length: 49 }).map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
    ))}
  </div>
);

const AboutHeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-4"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-4">
              About Us
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3 leading-tight">
              We Provide Best{" "}
              <span className="text-secondary">Empowerment</span>{" "}
              Services For You.
            </h1>
            {/* Decorative swirl */}
            <svg width="100" height="18" viewBox="0 0 100 18" className="mb-6">
              <path
                d="M2 16C25 -4 50 20 98 2"
                stroke="hsl(var(--secondary))"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <p className="font-body text-muted-foreground leading-relaxed max-w-lg mb-12">
              Zuula Obusobozibwo empowers individuals and families to discover their God-given gifts,
              build generational prayer altars, and step boldly into their Kingdom purpose —
              transforming communities one household at a time.
            </p>

            {/* Vision & Mission cards */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                  <Eye size={26} />
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Our Vision</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  A generation of families rooted in faith, walking in purpose, and raising Kingdom leaders.
                </p>
              </div>
              <div>
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary/10 text-secondary mb-3">
                  <Target size={26} />
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Our Mission</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Equipping believers with tools and knowledge for Kingdom impact across generations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image collage matching reference layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block min-h-[520px]"
          >
            {/* Dot pattern top center */}
            <DotPattern className="absolute -top-2 left-[35%] z-10 opacity-60" />

            {/* White blob behind main image */}
            <div className="absolute top-8 left-[15%] w-[300px] h-[320px] bg-background rounded-[40%_60%_55%_45%/50%_40%_60%_50%] z-[1]" />

            {/* Main large image (center-left) */}
            <div className="absolute top-6 left-[12%] w-[260px] h-[350px] rounded-2xl overflow-hidden shadow-xl z-[2]">
              <img
                src={heroMain}
                alt="Empowered community member"
                className="w-full h-full object-cover"
                width={640}
                height={800}
              />
            </div>

            {/* Top right image */}
            <div className="absolute top-0 right-0 w-[200px] h-[160px] rounded-xl overflow-hidden shadow-lg z-[3]">
              <img
                src={heroTopRight}
                alt="Online learning"
                className="w-full h-full object-cover"
                loading="lazy"
                width={640}
                height={512}
              />
            </div>

            {/* Middle right image */}
            <div className="absolute top-[180px] right-0 w-[200px] h-[220px] rounded-xl overflow-hidden shadow-lg z-[3]">
              <img
                src={heroMidRight}
                alt="Studying and writing"
                className="w-full h-full object-cover"
                loading="lazy"
                width={512}
                height={640}
              />
            </div>

            {/* Dot pattern right side */}
            <DotPattern className="absolute top-[180px] -right-4 z-0 opacity-40" />

            {/* Bottom center-left image */}
            <div className="absolute bottom-0 left-[15%] w-[240px] h-[150px] rounded-xl overflow-hidden shadow-lg z-[3]">
              <img
                src={heroBottom}
                alt="Creative work"
                className="w-full h-full object-cover"
                loading="lazy"
                width={640}
                height={512}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
