import { motion } from "framer-motion";

const DotPattern = ({ className }: { className?: string }) => (
  <div className={`grid grid-cols-7 gap-1.5 ${className}`}>
    {Array.from({ length: 49 }).map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
    ))}
  </div>
);

const AboutHeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-4">
              About Us
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              We Provide Best{" "}
              <span className="text-secondary">Empowerment</span>{" "}
              Services For You.
            </h1>
            {/* Decorative underline */}
            <div className="w-24 h-1 rounded-full bg-primary mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed max-w-lg mb-10">
              Zuula Obusobozibwo empowers individuals and families to discover their God-given gifts, 
              build generational prayer altars, and step boldly into their Kingdom purpose — 
              transforming communities one household at a time.
            </p>

            {/* Vision & Mission cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Eye size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">Our Vision</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    A generation of families rooted in faith, walking in purpose, and raising Kingdom leaders.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Target size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">Our Mission</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Equipping believers with tools and knowledge for Kingdom impact across generations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Decorative dots top */}
            <DotPattern className="absolute -top-4 right-1/3 z-10 opacity-60" />
            
            {/* Main large image */}
            <div className="relative z-[2]">
              <div className="w-[280px] h-[340px] rounded-2xl overflow-hidden shadow-xl mx-auto">
                <img
                  src="/lovable-uploads/927c6d88-9f65-4954-82af-f1e83c834b55.jpg"
                  alt="Joseph Prosper - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Top right image */}
            <div className="absolute top-0 right-0 w-[180px] h-[150px] rounded-xl overflow-hidden shadow-lg z-[3]">
              <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                <BookOpen size={40} className="text-primary" />
              </div>
            </div>

            {/* Bottom right image */}
            <div className="absolute bottom-8 right-4 w-[170px] h-[180px] rounded-xl overflow-hidden shadow-lg z-[3]">
              <div className="w-full h-full bg-secondary/15 flex items-center justify-center">
                <Heart size={40} className="text-secondary" />
              </div>
            </div>

            {/* Bottom left image */}
            <div className="absolute bottom-0 left-8 w-[160px] h-[140px] rounded-xl overflow-hidden shadow-lg z-[1]">
              <div className="w-full h-full bg-accent flex items-center justify-center">
                <Users size={36} className="text-accent-foreground" />
              </div>
            </div>

            {/* Decorative dots bottom right */}
            <DotPattern className="absolute -bottom-6 -right-2 z-0 opacity-40" />

            {/* Blob shape behind main image */}
            <div className="absolute top-12 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-[1]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
