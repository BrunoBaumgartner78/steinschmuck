"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

export type RingInfo = {
  sizeType: "damen" | "herren";
  size: string; // z.B. "52"
};

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image?: string;
  quantity: number;
  category?: string | null; // z.B. "ring"
  ring?: RingInfo | null;
};

export type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalAmount: number;
  totalQuantity: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(
    item: Omit<CartItem, "quantity">,
    quantity: number = 1
  ): void {
    setItems((prev) => {
      const existing = prev.find(
        (p) =>
          p.id === item.id &&
          JSON.stringify(p.ring ?? null) === JSON.stringify(item.ring ?? null)
      );

      if (existing) {
        // gleiche Ringgrösse → Menge erhöhen
        return prev.map((p) =>
          p.id === item.id &&
          JSON.stringify(p.ring ?? null) === JSON.stringify(item.ring ?? null)
            ? { ...p, quantity: p.quantity + quantity }
            : p
        );
      }

      return [...prev, { ...item, quantity }];
    });
  }

  function removeItem(id: string): void {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart(): void {
    setItems([]);
  }

  const { totalAmount, totalQuantity } = useMemo(() => {
    let amount = 0;
    let qty = 0;
    for (const item of items) {
      const q = item.quantity ?? 1;
      amount += (item.price || 0) * q;
      qty += q;
    }
    return { totalAmount: amount, totalQuantity: qty };
  }, [items]);

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    clearCart,
    totalAmount,
    totalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
