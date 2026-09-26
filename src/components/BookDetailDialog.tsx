import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

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
  const { addItem } = useCart();
  if (!book) return null;

  const handlePreview = () => {
    window.open(book.pdfUrl || "#", "_blank", "noopener,noreferrer");
  };

  const handleAddToCart = () => {
    addItem(book);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden rounded-xl border-border bg-background">
        <DialogTitle className="sr-only">{book.title}</DialogTitle>

        <div className="grid sm:grid-cols-[220px_1fr]">
          {/* Cover — left */}
          <div className="relative bg-muted flex items-center justify-center p-4 sm:p-0">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-auto object-contain sm:h-full sm:object-contain"
            />
            {book.price && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-body font-bold bg-secondary text-secondary-foreground shadow-md">
                {book.price}
              </span>
            )}
          </div>

          {/* Details — right */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-secondary font-semibold mb-2">
                Premium eBook
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
                  "A powerful and transformative resource to deepen your faith, unlock your potential, and step into your Kingdom purpose."}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="font-display text-3xl font-bold text-foreground">
                  {book.price || "UShs 20,000"}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button
                type="button"
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handlePreview}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border border-border text-foreground font-body text-sm font-medium hover:bg-muted transition-colors active:scale-[0.98]"
              >
                <Eye size={16} />
                Preview PDF
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDetailDialog;
