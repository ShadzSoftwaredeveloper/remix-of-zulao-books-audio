import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Download } from "lucide-react";
import BookDetailDialog, { BookItem } from "./BookDetailDialog";
import LugandaToggle, { DescLang } from "./LugandaToggle";
import { useTypewriter } from "@/hooks/use-typewriter";
import alterFrontCover from "@/assets/books/alter_front_cover.jpg";
import alter100 from "@/assets/books/alter100.jpg";
import omuwendo from "@/assets/books/omuwendo.jpg";
import alterBack from "@/assets/books/alter_back.jpg";

type ListedBook = BookItem & { descEn: string; descLg: string };

const ebooks: ListedBook[] = [
  {
    title: "The Generational Family Prayer Altar",
    author: "Tumusiime Joseph Prosper",
    cover: alterFrontCover,
    free: false,
    price: "UShs 25,000",
    descEn: "A practical guide to building a prayer altar that carries your family's faith from one generation to the next.",
    descLg: "Ekitabo ekikulambika okuzimba ekyoto ky'okusaba ekitwala okukkiriza kw'amaka go okuva ku mulembe ogumu okutuuka ku mulala.",
  },
  {
    title: "The Generational Family Prayer Altar (Edition 2)",
    author: "Tumusiime Joseph Prosper",
    cover: alter100,
    free: false,
    price: "UShs 25,000",
    descEn: "The expanded edition with new teachings and prayer guides for families who want lasting spiritual foundations.",
    descLg: "Ekitabo kino ekyongezeddwako enjigiriza empya n'endagiriro z'okusaba eri amaka agaagala omusingi gw'omwoyo ogw'olubeerera.",
  },
  {
    title: "Omuwendo Gw'Obulamu",
    author: "Tumusiime Joseph Prosper",
    cover: omuwendo,
    free: false,
    price: "UShs 20,000",
    descEn: "Discover the true value of your life and the purpose God placed within you.",
    descLg: "Zuula omuwendo omutuufu ogw'obulamu bwo n'ekigendererwa Katonda kye yateeka munda yo.",
  },
  {
    title: "Ebwogeere Ku Kitabo",
    author: "Tumusiime Joseph Prosper",
    cover: alterBack,
    free: false,
    price: "UShs 20,000",
    descEn: "Reflections and testimonies from readers whose lives were changed by these teachings.",
    descLg: "Ebirowoozo n'obujulirwa bw'abasomi obulamu bwabwe bwe bwakyusibwa enjigiriza zino.",
  },
];

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
  const [lang, setLang] = useState<DescLang>("en");
  const desc = (book: ListedBook) => (lang === "lg" ? book.descLg : book.descEn);
  const placeholder = useTypewriter([
    "Search by title...",
    "Search by author...",
    "Search by topic...",
    "Search transformative books...",
  ]);

  const filtered = ebooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const displayed = showAll ? filtered : filtered.slice(0, 4);

  return (
    <section
      id="ebooks"
      className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-accent/[0.06] via-background to-accent/[0.06]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(hsl(320 85% 45%) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
            Library
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            eBook Resources
          </h2>
          <p className="font-body text-foreground/60 max-w-lg mx-auto">
            Curated collection of transformative books to deepen your faith and unlock your potential.
          </p>
          <div className="mt-4 flex justify-center">
            <LugandaToggle value={lang} onChange={setLang} />
          </div>
        </motion.div>

        {showAll && !hideSearch && (
          <div className="max-w-md mx-auto mb-10 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder={search ? "" : `${placeholder}|`}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-7 sm:gap-6">
          {displayed.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card-hover group cursor-pointer"
              onClick={() =>
                setSelectedBook({ ...book, description: desc(book) })
              }
            >
              <div className="relative rounded-lg overflow-hidden bg-background shadow-md">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                {book.free ? (
                  <span className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-body font-semibold bg-primary text-primary-foreground">
                    Free
                  </span>
                ) : (
                  book.price && (
                    <span className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-body font-semibold bg-secondary text-secondary-foreground">
                      {book.price}
                    </span>
                  )
                )}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <span className="p-2 rounded-full bg-primary-foreground/90 text-primary">
                    <BookOpen size={18} />
                  </span>
                  <span className="p-2 rounded-full bg-primary-foreground/90 text-primary">
                    <Download size={18} />
                  </span>
                </div>
              </div>
              <div className="mt-3 px-1">
                <h3 className="font-display text-sm font-semibold text-foreground leading-tight">
                  {book.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  {book.author}
                </p>
                <p
                  lang={lang}
                  className="font-body text-xs text-foreground/75 mt-1.5 line-clamp-3"
                >
                  {desc(book)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href="/ebooks"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]"
            >
              <BookOpen size={16} />
              More Books
            </a>
          </motion.div>
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
