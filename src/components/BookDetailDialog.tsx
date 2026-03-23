import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, ShoppingCart, Star, Eye } from "lucide-react";

export interface BookItem {
  title: string;
  author: string;
  cover: string;
  free: boolean;
  price?: string;
  description?: string;
  pdfUrl?: string;
}

interface BookDetailDialogProps {
  book: BookItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookDetailDialog = ({ book, open, onOpenChange }: BookDetailDialogProps) => {
  if (!book) return null;

  const handlePreview = () => {
    const pdfUrl = book.pdfUrl || "#";
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm p-0 overflow-hidden rounded-xl border-border bg-background">
        <DialogTitle className="sr-only">{book.title}</DialogTitle>

        {/* Cover — full width, natural aspect ratio */}
        <div className="relative w-full">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-auto object-contain"
          />
          {book.price && (
            <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-body font-bold bg-secondary text-secondary-foreground shadow-md">
              {book.price}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="px-5 pb-5 pt-2 flex flex-col gap-3">
          <div>
            <h2 className="font-display text-lg font-bold text-foreground leading-tight">
              {book.title}
            </h2>
            <p className="font-body text-xs text-muted-foreground mt-0.5">
              by {book.author}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={13}
                className={s <= 4 ? "fill-secondary text-secondary" : "text-border"}
              />
            ))}
            <span className="font-body text-xs text-muted-foreground ml-1">4.0</span>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 mt-1">
            <button className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]">
              <ShoppingCart size={15} />
              Buy Now — {book.price || "UShs 20,000"}
            </button>
            <button
              onClick={handlePreview}
              className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg border border-border text-foreground font-body text-sm font-medium hover:bg-muted transition-colors active:scale-[0.98]"
            >
              <Eye size={15} />
              Preview PDF
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDetailDialog;
