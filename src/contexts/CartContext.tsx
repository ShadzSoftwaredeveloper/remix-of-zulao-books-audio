import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { BookItem } from "@/components/BookDetailDialog";

export interface CartItem extends BookItem {
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  isOpen: boolean;
  addItem: (book: BookItem) => void;
  removeItem: (title: string) => void;
  updateQuantity: (title: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
}

const STORAGE_KEY = "zuula-book-cart";
const CartContext = createContext<CartContextValue | undefined>(undefined);

const loadCart = (): CartItem[] => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as CartItem[]) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(loadCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((book: BookItem) => {
    setItems((current) => {
      const existing = current.find((item) => item.title === book.title);
      if (existing) {
        return current.map((item) =>
          item.title === book.title ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...current, { ...book, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((title: string) => {
    setItems((current) => current.filter((item) => item.title !== title));
  }, []);

  const updateQuantity = useCallback((title: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((current) =>
      current.map((item) => (item.title === title ? { ...item, quantity } : item)),
    );
  }, []);

  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((count, item) => count + item.quantity, 0),
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }),
    [addItem, isOpen, items, removeItem, updateQuantity],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};