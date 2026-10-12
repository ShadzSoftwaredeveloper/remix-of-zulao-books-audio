import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search } from "lucide-react";
import BookDetailDialog, { BookItem } from "./BookDetailDialog";
import { useTypewriter } from "@/hooks/use-typewriter";
import alterFrontCover from "@/assets/books/alter_front_cover.jpg";
import alter100 from "@/assets/books/alter100.jpg";
import omuwendo from "@/assets/books/omuwendo.jpg";
import alterBack from "@/assets/books/alter_back.jpg";

const ebooks: BookItem[] = [
  { title: "The Generational Family Prayer Altar", author: "Tumusiime Joseph Prosper", cover: alterFrontCover, free: false, price: "UShs 25,000" },
  { title: "The Generational Family Prayer Altar (Edition 2)", author: "Tumusiime Joseph Prosper", cover: alter100, free: false, price: "UShs 25,000" },
  { title: "Omuwendo Gw'Obulamu", author: "Tumusiime Joseph Prosper", cover: omuwendo, free: false, price: "UShs 20,000" },
  { title: "Ebwogeere Ku Kitabo", author: "Tumusiime Joseph Prosper", cover: alterBack, free: false, price: "UShs 20,000" },
];

const PriceBadge = ({ price }: { price: string }) => (
  <span className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-body font-semibold bg-secondary text-secondary-foreground shadow-sm">
    {price}
  </span>
);

const EbooksSection = ({
  showAll = false,
  search: searchProp,
  onSearchChange,
  hideSearch = false,
}: {
  showAll?: boolean;
  search?: string;
  onSearchChange?: (value: string) => void;
  hideSearch?: boolean;
}) => {
  const [internalSearch, setInternalSearch] = useState("");
  const search = searchProp !== undefined ? searchProp : internalSearch;
  const setSearch = onSearchChange ?? setInternalSearch;
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const placeholder = useTypewriter([
    "Search by title...",
    "Search by author...",
    "Search by topic...",
    "Search transformative books...",
  ]);

  const filtered = ebooks.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  const displayed = showAll ? filtered : filtered.slice(0, 4);
  const [featured, ...rest] = displayed;

  const renderCover = (book: BookItem, large = false) => (
    <div className="relative rounded-lg overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      {book.price && <PriceBadge price={book.price} />}
      {large && (
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="p-3 rounded-full bg-primary-foreground/90 text-primary">
            <BookOpen size={22} />
          </span>
        </div>
      )}
    </div>
  );

  return (
    <section id="ebooks" className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-accent/[0.06] via-background to-accent/[0.06]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(hsl(320 85% 45%) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="site-container">
        {/* Header row — heading left, link right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
              <BookOpen size={22} />
            </span>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                Discover Your Next Book
              </h2>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Transformative titles to deepen your faith and unlock your potential.
              </p>
            </div>
          </div>
          {!showAll && (
            <a
              href="/ebooks"
              className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              More Books
              <span aria-hidden="true">→</span>
            </a>
          )}
        </motion.div>

        {/* Search — only on full page */}
        {showAll && !hideSearch && (
          <div className="max-w-md mx-auto mb-10 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder={search ? "" : `${placeholder}|`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        )}

        {/* Grid — featured card + smaller cards */}
        {displayed.length > 0 && (
          <div className="grid grid-cols-2 gap-3 gap-y-7 sm:gap-6 md:grid-cols-5">
            {/* Featured */}
            <motion.div
              key={featured.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-hover group cursor-pointer col-span-2 md:col-span-2 md:row-span-2"
              onClick={() => setSelectedBook(featured)}
            >
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-3 sm:p-4 shadow-md">
                {renderCover(featured, true)}
                <div className="mt-4 flex flex-1 flex-col">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground leading-tight">
                    {featured.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground mt-1">{featured.author}</p>
                  <p className="font-body text-sm font-semibold text-primary mt-3">
                    {featured.price || "Free"}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    eBook · PDF preview available
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Smaller cards */}
            {rest.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.05 }}
                className={`card-hover group cursor-pointer ${i === rest.length - 1 && rest.length % 2 !== 0 ? "col-span-2 md:col-span-1" : ""}`}
                onClick={() => setSelectedBook(book)}
              >
                <div className="flex h-full flex-col rounded-xl border border-border bg-card p-2.5 sm:p-3 shadow-md">
                  {renderCover(book)}
                  <div className="mt-3 flex flex-1 flex-col">
                    <h3 className="font-display text-sm font-semibold text-foreground leading-tight">
                      {book.title}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground mt-1">{book.author}</p>
                    <p className="font-body text-sm font-semibold text-primary mt-2">
                      {book.price || "Free"}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">
                      eBook · PDF preview available
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <BookDetailDialog
        book={selectedBook}
        open={!!selectedBook}
        onOpenChange={(open) => !open && setSelectedBook(null)}
      />
    </section>
  );
};

export default EbooksSection;
