"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "maison-corgi-cart";

function sanitizeSavedCart(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (item) =>
        item &&
        typeof item.id !== "undefined" &&
        typeof item.name === "string" &&
        Number.isFinite(Number(item.price)),
    )
    .map((item) => ({
      ...item,
      price: Number(item.price),
      qty: Math.max(1, Number(item.qty) || 1),
    }));
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(STORAGE_KEY);

      if (savedCart) {
        setCart(sanitizeSavedCart(JSON.parse(savedCart)));
      }
    } catch (error) {
      console.error("Impossible de lire le panier enregistré :", error);
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Impossible d’enregistrer le panier :", error);
    }
  }, [cart, hydrated]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
          emoji: product.emoji,
          background: product.background,
          qty: 1,
        },
      ];
    });
  }

  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
  }

  function updateQty(productId, newQuantity) {
    const quantity = Number(newQuantity);

    if (!Number.isFinite(quantity)) {
      return;
    }

    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, qty: Math.max(1, quantity) }
          : item,
      ),
    );
  }

  function clearCart() {
    setCart([]);
  }

  const count = useMemo(
    () => cart.reduce((total, item) => total + item.qty, 0),
    [cart],
  );

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.qty,
        0,
      ),
    [cart],
  );

  const value = {
    cart,
    count,
    subtotal,
    hydrated,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart doit être utilisé à l’intérieur de CartProvider.",
    );
  }

  return context;
}