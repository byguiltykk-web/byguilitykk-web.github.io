"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartLink({
  className = "button button-small",
}) {
  const { count } = useCart();

  return (
    <Link
      className={`${className} cart-link`}
      href="/panier"
      aria-label={`Ouvrir le panier contenant ${count} article${
        count > 1 ? "s" : ""
      }`}
    >
      <span>Panier</span>
      <span className="cart-count">{count}</span>
    </Link>
  );
}