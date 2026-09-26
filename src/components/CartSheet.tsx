import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const parsePrice = (price?: string) => Number(price?.replace(/[^0-9]/g, "")) || 0;
const formatPrice = (amount: number) => `UShs ${amount.toLocaleString("en-UG")}`;

const CartSheet = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity } = useCart();
  const subtotal = items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

  const checkout = () => {
    if (!items.length) return;
    const lines = items.map(
      (item, index) =>
        `${index + 1}. ${item.title} — ${item.quantity} × ${item.price ?? "Price on request"}`,
    );
    const message = [
      "Hello, I would like to order these books:",
      "",
      ...lines,
      "",
      `Subtotal: ${formatPrice(subtotal)}`,
      "",
      "Please confirm availability and delivery details.",
    ].join("\n");
    window.open(
      `https://wa.me/25677766708?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex w-full flex-col p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-6 py-5 text-left">
          <SheetTitle className="font-display text-2xl">Your Cart</SheetTitle>
          <SheetDescription>
            {items.length ? "Review your books before ordering." : "Your selected books will appear here."}
          </SheetDescription>
        </SheetHeader>

        {!items.length ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
              <ShoppingBag size={28} />
            </span>
            <h3 className="font-display text-xl font-semibold text-foreground">Your cart is empty</h3>
            <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-muted-foreground">
              Browse the library and add the books you would like to order.
            </p>
            <Button asChild className="mt-6" onClick={closeCart}>
              <a href="/ebooks">Browse Books</a>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
              {items.map((item) => (
                <div key={item.title} className="flex gap-4 border-b border-border pb-5 last:border-0">
                  <div className="h-28 w-20 shrink-0 overflow-hidden rounded-md bg-muted">
                    <img src={item.cover} alt={item.title} className="h-full w-full object-contain" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="font-display text-sm font-semibold leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-body text-sm font-semibold text-primary">{item.price}</p>
                    <div className="mt-auto flex items-center justify-between gap-3">
                      <div className="flex h-9 items-center rounded-md border border-border bg-background">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.title, item.quantity - 1)}
                          disabled={item.quantity === 1}
                          aria-label={`Decrease ${item.title} quantity`}
                        >
                          <Minus size={14} />
                        </Button>
                        <span className="w-7 text-center font-body text-sm font-semibold" aria-live="polite">
                          {item.quantity}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.title, item.quantity + 1)}
                          aria-label={`Increase ${item.title} quantity`}
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 text-destructive hover:bg-destructive/10 hover:text-destructive"
                        onClick={() => removeItem(item.title)}
                        aria-label={`Remove ${item.title} from cart`}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border bg-muted/40 p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-body text-sm text-muted-foreground">Subtotal</span>
                <span className="font-display text-xl font-bold text-foreground">{formatPrice(subtotal)}</span>
              </div>
              <Button type="button" size="lg" className="w-full" onClick={checkout}>
                Order on WhatsApp
              </Button>
              <p className="mt-3 text-center font-body text-xs text-muted-foreground">
                Delivery costs are confirmed on WhatsApp.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;