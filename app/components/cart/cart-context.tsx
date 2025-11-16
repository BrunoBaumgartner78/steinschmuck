// app/components/cart/cart-context.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image?: string;
  quantity: number;
};

export type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalAmount: number;
  totalQuantity: number; // 👈 neu
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(
    item: Omit<CartItem, "quantity">,
    quantity: number = 1
  ): void {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id
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
