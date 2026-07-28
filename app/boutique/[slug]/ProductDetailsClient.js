"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const priceFormatter = new Intl.NumberFormat(
  "fr-FR",
  {
    style: "currency",
    currency: "EUR",
  },
);

const galleryLabels = [
  "Vue principale",
  "Détail du produit",
  "Produit en situation",
];

export default function ProductDetailsClient({
  product,
}) {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] =
    useState(product.sizes[0]);

  const [selectedColor, setSelectedColor] =
    useState(product.colors[0]);

  const [activeVisual, setActiveVisual] =
    useState(0);

  const [justAdded, setJustAdded] =
    useState(false);

  function handleAddToCart() {
    addToCart(product, {
      selectedSize,
      selectedColor,
    });

    setJustAdded(true);

    window.setTimeout(() => {
      setJustAdded(false);
    }, 1400);
  }

  return (
    <div className="product-detail-grid">
      <section className="product-gallery">
        <div
          className={`product-main-visual product-main-visual-${activeVisual}`}
          style={{
            background: product.background,
          }}
        >
          <span className="product-gallery-badge">
            {product.badge}
          </span>

          <span
            className="product-detail-emoji"
            aria-hidden="true"
          >
            {product.emoji}
          </span>

          <small>
            {galleryLabels[activeVisual]}
          </small>
        </div>

        <div className="product-thumbnails">
          {galleryLabels.map((label, index) => (
            <button
              className={
                activeVisual === index
                  ? "product-thumbnail active"
                  : "product-thumbnail"
              }
              type="button"
              key={label}
              onClick={() =>
                setActiveVisual(index)
              }
              aria-label={label}
            >
              <span aria-hidden="true">
                {product.emoji}
              </span>

              <small>{index + 1}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="product-purchase">
        <p className="eyebrow">
          {product.category}
        </p>

        <h1>{product.name}</h1>

        <div className="product-detail-rating">
          <span>★★★★★</span>

          <strong>
            {product.rating.toFixed(1)}
          </strong>

          <small>
            {product.reviews} avis clients
          </small>
        </div>

        <div className="product-detail-price">
          <strong>
            {priceFormatter.format(product.price)}
          </strong>

          {product.oldPrice && (
            <del>
              {priceFormatter.format(
                product.oldPrice,
              )}
            </del>
          )}
        </div>

        <p className="product-detail-short">
          {product.short}
        </p>

        <div className="product-option">
          <div className="product-option-heading">
            <strong>Taille</strong>
            <span>{selectedSize}</span>
          </div>

          <div className="product-option-buttons">
            {product.sizes.map((size) => (
              <button
                className={
                  selectedSize === size
                    ? "selected"
                    : ""
                }
                type="button"
                key={size}
                onClick={() =>
                  setSelectedSize(size)
                }
                aria-pressed={
                  selectedSize === size
                }
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="product-option">
          <div className="product-option-heading">
            <strong>Couleur</strong>
            <span>{selectedColor}</span>
          </div>

          <div className="product-color-buttons">
            {product.colors.map((color) => (
              <button
                className={
                  selectedColor === color
                    ? "selected"
                    : ""
                }
                type="button"
                key={color}
                onClick={() =>
                  setSelectedColor(color)
                }
                aria-pressed={
                  selectedColor === color
                }
              >
                <span aria-hidden="true" />
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="product-stock">
          <span aria-hidden="true" />
          En stock — expédition préparée avec soin
        </div>

        <button
          className={
            justAdded
              ? "product-add-button added"
              : "product-add-button"
          }
          type="button"
          onClick={handleAddToCart}
        >
          {justAdded
            ? "Produit ajouté au panier ✓"
            : "Ajouter au panier"}
        </button>

        <Link
          className="product-view-cart"
          href="/panier"
        >
          Consulter le panier
        </Link>

        <div className="product-purchase-assurances">
          <div>
            <span aria-hidden="true">🚚</span>
            <p>
              <strong>Livraison suivie</strong>
              <small>
                Offerte dès 59 €
              </small>
            </p>
          </div>

          <div>
            <span aria-hidden="true">↩️</span>
            <p>
              <strong>Retours simplifiés</strong>
              <small>
                Sous 30 jours
              </small>
            </p>
          </div>

          <div>
            <span aria-hidden="true">🔒</span>
            <p>
              <strong>Paiement sécurisé</strong>
              <small>
                Lors de l’ouverture commerciale
              </small>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}