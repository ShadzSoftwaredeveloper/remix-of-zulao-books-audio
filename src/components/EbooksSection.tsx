import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Download } from "lucide-react";
import BookDetailDialog, { BookItem } from "./BookDetailDialog";

const ebooks: BookItem[] = [
  { title: "The Inner Chamber", author: "Andrew Murray", cover: "https://zulaobusobozibwo.com/wp-content/uploads/2026/01/inner-chamner.jpg", free: true },
  { title: "The Master's Indwelling", author: "Andrew Murray", cover: "https://zulaobusobozibwo.com/wp-content/uploads/2026/01/THE-MASTERS-INDWELLING.jpg", free: true },
  { title: "He Holds My Tomorrows", author: "Gareth Evans", cover: "https://zulaobusobozibwo.com/wp-content/uploads/2026/01/He-Holds-My-Tomorrows.jpg", free: true },
  { title: "Lord, Teach Us To Pray", author: "Andrew Murray", cover: "https://zulaobusobozibwo.com/wp-content/uploads/2026/01/LORD-TEACH-US-TO-PRAY.jpg", free: true },
  { title: "The Body of Christ: A Reality", author: "Watchman Nee", cover: "https://zulaobusobozibwo.com/wp-content/uploads/2026/01/the-Body-of-Christ.jpg", free: true },
  { title: "Jesus Himself", author: "Andrew Murray", cover: "https://zulaobusobozibwo.com/wp-content/uploads/2026/01/JESUS-HIMSELF.jpg", free: true },
  { title: "The Key In My Hand", author: "Gareth Evans", cover: "https://zulaobusobozibwo.com/wp-content/uploads/2026/01/THE-KEY-IN-MY-HAND.jpg", free: true },
  { title: "Baptism with the Holy Spirit", author: "R. A. Torrey", cover: "https://zulaobusobozibwo.com/wp-content/uploads/2026/01/BAPTISM-WITH-THE-HOLY-SPIRIT.jpg", free: true },
];

const EbooksSection = () => {
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  const filtered = ebooks.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="ebooks" className="py-24 bg-muted/50">
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
            Free eBook Resources
          </h2>
          <p className="font-body text-foreground/60 max-w-lg mx-auto">
            Curated collection of transformative books to deepen your faith and unlock your potential.
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-hover group cursor-pointer"
              onClick={() => setSelectedBook(book)}
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
                {book.free && (
                  <span className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-body font-semibold bg-primary text-primary-foreground">
                    Free
                  </span>
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
                <p className="font-body text-xs text-muted-foreground mt-1">{book.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
