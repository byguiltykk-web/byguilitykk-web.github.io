"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const priceFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

export default function PanierClient() {
  const {
    cart,
    subtotal,
    hydrated,
    updateQty,
    removeFromCart,
    clearCart,
  } = useCart();

  if (!hydrated) {
    return (
      <section className="cart-loading">
        <div className="cart-loading-icon">🐾</div>
        <p>Chargement du panier…</p>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="cart-empty">
        <span aria-hidden="true">🛒</span>
        <p className="eyebrow">Votre panier</p>
        <h1>La gamelle est encore vide.</h1>
        <p>
          Découvrez notre sélection et ajoutez les premiers
          produits préférés de votre corgi.
        </p>

        <Link className="button" href="/boutique">
          Découvrir la boutique
        </Link>
      </section>
    );
  }

  const shipping = subtotal >= 59 ? 0 : 4.9;
  const total = subtotal + shipping;
  const remainingForFreeShipping = Math.max(0, 59 - subtotal);
  const progress = Math.min(100, (subtotal / 59) * 100);

  return (
    <div className="cart-layout">
      <section className="cart-products">
        <div className="cart-products-heading">
          <div>
            <p className="eyebrow">Votre sélection</p>
            <h1>Votre panier</h1>
          </div>

          <button type="button" onClick={clearCart}>
            Vider le panier
          </button>
        </div>

        <div className="cart-shipping-progress">
          <div className="cart-shipping-message">
            {remainingForFreeShipping > 0 ? (
              <p>
                Plus que{" "}
                <strong>
                  {priceFormatter.format(
                    remainingForFreeShipping,
                  )}
                </strong>{" "}
                pour profiter de la livraison offerte.
              </p>
            ) : (
              <p>
                🎉 La livraison est offerte pour cette commande.
              </p>
            )}
          </div>

          <div className="cart-progress-track">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <div
                className="cart-item-visual"
                style={{ background: item.background }}
              >
                <span aria-hidden="true">{item.emoji}</span>
              </div>

              <div className="cart-item-information">
                <p>{item.category}</p>
                <h2>{item.name}</h2>

                <button
                  className="cart-remove-mobile"
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Supprimer
                </button>
              </div>

              <div className="cart-quantity">
                <button
                  type="button"
                  onClick={() =>
                    updateQty(item.id, item.qty - 1)
                  }
                  aria-label={`Retirer une unité de ${item.name}`}
                >
                  −
                </button>

                <span aria-live="polite">{item.qty}</span>

                <button
                  type="button"
                  onClick={() =>
                    updateQty(item.id, item.qty + 1)
                  }
                  aria-label={`Ajouter une unité de ${item.name}`}
                >
                  +
                </button>
              </div>

              <div className="cart-item-price">
                <strong>
                  {priceFormatter.format(
                    item.price * item.qty,
                  )}
                </strong>

                {item.qty > 1 && (
                  <small>
                    {priceFormatter.format(item.price)} l’unité
                  </small>
                )}
              </div>

              <button
                className="cart-remove"
                type="button"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Supprimer ${item.name} du panier`}
              >
                ×
              </button>
            </article>
          ))}
        </div>

        <Link className="cart-continue-link" href="/boutique">
          ← Continuer mes achats
        </Link>
      </section>

      <aside className="cart-summary">
        <p className="eyebrow">Récapitulatif</p>
        <h2>Résumé de la commande</h2>

        <div className="cart-summary-lines">
          <div>
            <span>Sous-total</span>
            <strong>
              {priceFormatter.format(subtotal)}
            </strong>
          </div>

          <div>
            <span>Livraison estimée</span>
            <strong>
              {shipping === 0
                ? "Offerte"
                : priceFormatter.format(shipping)}
            </strong>
          </div>
        </div>

        <div className="cart-summary-total">
          <div>
            <span>Total estimé</span>
            <small>Taxes incluses</small>
          </div>

          <strong>{priceFormatter.format(total)}</strong>
        </div>

        <Link className="cart-checkout-button" href="/checkout">
  Passer au checkout
</Link>

<p className="cart-checkout-note">
  Commande de démonstration — aucun paiement réel ne sera effectué.
</p>

        <p className="cart-checkout-note">
          Le checkout sécurisé sera ajouté à la prochaine étape.
        </p>

        <div className="cart-security">
          <span aria-hidden="true">🔒</span>
          <p>
            Paiement sécurisé et données protégées lors de
            l’ouverture commerciale.
          </p>
        </div>
      </aside>
    </div>
  );
}