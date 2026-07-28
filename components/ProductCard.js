"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

const priceFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setJustAdded(true);

    window.setTimeout(() => {
      setJustAdded(false);
    }, 1200);
  }

  return (
    <article className="shop-product-card">
      <div
        className="shop-product-visual"
        style={{ background: product.background }}
      >
        <span className="shop-product-badge">
          {product.badge}
        </span>

        <span className="shop-product-emoji" aria-hidden="true">
          {product.emoji}
        </span>

        {product.isNew && (
          <span className="shop-new-indicator">
            Nouveau
          </span>
        )}
      </div>

      <div className="shop-product-content">
        <p className="shop-product-category">
          {product.category}
        </p>

        <div className="shop-product-title-row">
          <h2>{product.name}</h2>

          <button
            className="shop-favorite-button"
            type="button"
            aria-label={`Ajouter ${product.name} aux favoris`}
          >
            ♡
          </button>
        </div>

        <div
          className="shop-product-rating"
          aria-label={`${product.rating} étoiles sur 5`}
        >
          <span>★★★★★</span>
          <small>
            {product.rating.toFixed(1)} · {product.reviews} avis
          </small>
        </div>

        <p className="shop-product-description">
          {product.short}
        </p>

        <div className="shop-product-footer">
          <div className="shop-product-prices">
            <strong>
              {priceFormatter.format(product.price)}
            </strong>

            {product.oldPrice && (
              <del>
                {priceFormatter.format(product.oldPrice)}
              </del>
            )}
          </div>

          <button
            className={`shop-product-button ${
              justAdded ? "shop-product-button-added" : ""
            }`}
            type="button"
            onClick={handleAddToCart}
          >
            {justAdded ? "Ajouté ✓" : "Ajouter"}
          </button>
        </div>
      </div>
    </article>
  );
}