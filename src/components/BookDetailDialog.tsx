import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, Download, ShoppingCart, X, Star } from "lucide-react";

export interface BookItem {
  title: string;
  author: string;
  cover: string;
  free: boolean;
  price?: string;
  description?: string;
}

interface BookDetailDialogProps {
  book: BookItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookDetailDialog = ({ book, open, onOpenChange }: BookDetailDialogProps) => {
  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden rounded-xl border-border bg-background">
        <DialogTitle className="sr-only">{book.title}</DialogTitle>
        <div className="grid sm:grid-cols-[240px_1fr]">
          {/* Cover */}
          <div className="relative bg-muted">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-full object-cover sm:min-h-[360px]"
            />
            {book.free && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-body font-bold bg-primary text-primary-foreground">
                Free
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col">
            <div className="flex-1">
              <p className="font-body text-xs uppercase tracking-[0.15em] text-secondary font-semibold mb-2">
                {book.free ? "Free eBook" : "Premium eBook"}
              </p>
              <h2 className="font-display text-2xl font-bold text-foreground leading-tight mb-1">
                {book.title}
              </h2>
              <p className="font-body text-sm text-muted-foreground mb-4">
                by {book.author}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className={s <= 4 ? "fill-secondary text-secondary" : "text-border"}
                  />
                ))}
                <span className="font-body text-xs text-muted-foreground ml-1">4.0</span>
              </div>

              <p className="font-body text-sm text-foreground/70 leading-relaxed mb-6">
                {book.description ||
                  "A powerful and transformative resource to deepen your faith, unlock your potential, and step into your Kingdom purpose. This book will guide you through practical teachings rooted in timeless biblical principles."}
              </p>

              {/* Price */}
              {!book.free && (
                <div className="mb-6">
                  <span className="font-display text-3xl font-bold text-foreground">
                    {book.price || "UShs 15,000"}
                  </span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              {book.free ? (
                <>
                  <button className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]">
                    <Download size={16} />
                    Download Free
                  </button>
                  <button className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border border-border text-foreground font-body text-sm font-medium hover:bg-muted transition-colors active:scale-[0.98]">
                    <BookOpen size={16} />
                    Read Online
                  </button>
                </>
              ) : (
                <>
                  <button className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]">
                    <ShoppingCart size={16} />
                    Buy Now
                  </button>
                  <button className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border border-border text-foreground font-body text-sm font-medium hover:bg-muted transition-colors active:scale-[0.98]">
                    <BookOpen size={16} />
                    Preview
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDetailDialog;
