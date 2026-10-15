import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import booksSlider from "@/assets/books-slider.png";
import slider1 from "@/assets/slider-1.jpeg";
import slider2 from "@/assets/slider 2.jpeg";
import yourSoul from "@/assets/your soul.jpeg";

const slides = [
  {
title: "A Library of Possibilities",
    highlight: "Made for Your Journey",
    description:
      "Explore transformative books that deepen your faith, awaken your mind, and help you discover the possibility within you.",
    primaryCta: { label: "Shop Books", to: "/ebooks" },
    secondaryCta: { label: "Learn More", to: "/about" },
  },


  {
    image: slider2,
    title: "Awaken Your Mind,",
    highlight: "Empower Your Life",
    description:
      "From the stage to the page, every message is an invitation to grow — to think clearer, dream bigger, and step boldly into the life you were created for.",
    primaryCta: { label: "Learn More", to: "/about" },
    secondaryCta: { label: "Shop Books", to: "/ebooks" },
  },
  {
    image: yourSoul,
    title: "Your Soul Already",
    highlight: "Knows the Way",
    description:
      "Slow down. Breathe. The wisdom you seek is already within you — waiting to be remembered, honored, and finally lived.",
    primaryCta: { label: "Listen to Audios", to: "/audio" },
    secondaryCta: { label: "Learn More", to: "/about" },
  },
  {
    image: booksSlider,
    title: "Discover the Possibility",
    highlight: "Within Every Page",
    description:
      "Open a book and open your mind. Through words, stories, and teachings, uncover the strength, purpose, and endless possibilities already living inside you.",
    primaryCta: { label: "Shop Books", to: "/ebooks" },
    secondaryCta: { label: "Learn More", to: "/about" },
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-end md:items-center pt-16 md:pt-[100px] overflow-hidden">
      <div className="absolute inset-0 bg-accent">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={slide.image}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative z-10 site-container pb-10 pt-16 md:py-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-4">
            
            Zuula Obusobozibwo
          </motion.p>

          <motion.h1
            key={`title-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-display text-2xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6">
            
            {slide.title}{" "}
            <span className="text-gold-gradient">{slide.highlight}</span>
          </motion.h1>

          <motion.p
            key={`desc-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-sm md:text-lg text-primary-foreground/80 mb-6 md:mb-8 max-w-lg">
            
            {slide.description}
          </motion.p>

          <motion.div
            key={`cta-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-4">

            <Link
              to={slide.primaryCta.to}
              className="inline-flex items-center px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-body font-semibold text-sm shadow-lg shadow-secondary/30 hover:brightness-110 active:scale-[0.98] transition-all">
              {slide.primaryCta.label}
            </Link>
            <Link
              to={slide.secondaryCta.to}
              className="inline-flex items-center px-8 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground font-body font-semibold text-sm hover:bg-primary-foreground/20 active:scale-[0.98] transition-all">
              {slide.secondaryCta.label}
            </Link>
          </motion.div>

          {/* Slider dots */}
          <div className="flex gap-2 mt-6 md:mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-accent" : "w-2 bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          

















          
        </div>
      </div>
    </section>);

};

export default HeroSection;