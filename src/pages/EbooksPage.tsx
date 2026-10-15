import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import EbooksSection from "@/components/EbooksSection";
import Footer from "@/components/Footer";
import LugandaTranslator from "@/components/LugandaTranslator";
import { useTypewriter } from "@/hooks/use-typewriter";

const EbooksPage = () => {
  const [query, setQuery] = useState("");
  const placeholder = useTypewriter([
    "Search books, authors, topics...",
    "Find your next transformative read...",
    "Search by title or author...",
    "Discover faith-deepening books...",
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

       <section className="relative pt-40 md:pt-44 pb-16 md:pb-28 overflow-hidden bg-gradient-to-b from-accent/[0.08] via-background to-accent/[0.04]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(hsl(320 85% 45%) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-primary mb-5">
              Read, Reflect, and Be Transformed
            </p>

             <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Equipping People with Life-Changing Books
            </h1>

            <p className="font-body text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto mb-10">
              Transformative titles by Tumusiime Joseph Prosper — written to deepen your
              faith, awaken your mind, and unlock the possibility within you.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative max-w-xl mx-auto mb-8"
            >
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={query ? "" : `${placeholder}|`}
                 className="w-full rounded-full bg-background py-4 pl-12 pr-5 font-body text-sm sm:pl-14 sm:pr-32 sm:text-base text-foreground placeholder:text-muted-foreground shadow-lg shadow-foreground/5 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
               <span className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-primary/10 px-6 py-2.5 font-body text-sm font-semibold text-primary sm:block">
                Search
              </span>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#ebooks"
                className="inline-flex items-center rounded-full bg-primary/10 px-6 py-3 font-body text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
              >
                Browse the Library
              </a>
              <Link
                to="/about#about"
                className="inline-flex items-center rounded-full bg-background px-6 py-3 font-body text-sm font-semibold text-foreground border border-border hover:bg-muted transition-colors"
              >
                About the Author
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EbooksSection showAll search={query} onSearchChange={setQuery} hideSearch />
      <LugandaTranslator kind="book" />
      <Footer />
    </div>
  );
};

export default EbooksPage;
