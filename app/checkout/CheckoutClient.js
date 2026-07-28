"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const priceFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

export default function CheckoutClient() {
  const {
    cart,
    count,
    subtotal,
    hydrated,
    clearCart,
  } = useCart();

  const [deliveryMethod, setDeliveryMethod] =
    useState("standard");

  const [confirmedOrder, setConfirmedOrder] =
    useState(null);

  const shippingCost = useMemo(() => {
    if (deliveryMethod === "express") {
      return 9.9;
    }

    return subtotal >= 59 ? 0 : 4.9;
  }, [deliveryMethod, subtotal]);

  const total = subtotal + shippingCost;

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    const formData = new FormData(event.currentTarget);

    const fullName =
      formData.get("fullName")?.toString().trim() || "";

    const email =
      formData.get("email")?.toString().trim() || "";

    const city =
      formData.get("city")?.toString().trim() || "";

    const orderNumber = `MC-${new Date().getFullYear()}-${Math.floor(
      100000 + Math.random() * 900000,
    )}`;

    setConfirmedOrder({
      orderNumber,
      fullName,
      email,
      city,
      itemCount: count,
      total,
      deliveryMethod,
      deliveryLabel:
        deliveryMethod === "express"
          ? "Livraison express"
          : "Livraison standard",
    });

    clearCart();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!hydrated) {
    return (
      <section className="checkout-loading">
        <span aria-hidden="true">🐾</span>
        <p>Chargement de votre commande…</p>
      </section>
    );
  }

  if (confirmedOrder) {
    return (
      <section className="checkout-confirmation">
        <div className="checkout-confirmation-icon">
          ✓
        </div>

        <p className="eyebrow">
          Commande de démonstration confirmée
        </p>

        <h1>Merci {confirmedOrder.fullName} !</h1>

        <p className="checkout-confirmation-intro">
          Votre simulation de commande a bien été enregistrée.
          Aucun paiement réel n’a été effectué.
        </p>

        <div className="checkout-confirmation-card">
          <div>
            <span>Numéro de commande</span>
            <strong>{confirmedOrder.orderNumber}</strong>
          </div>

          <div>
            <span>Nombre d’articles</span>
            <strong>{confirmedOrder.itemCount}</strong>
          </div>

          <div>
            <span>Livraison</span>
            <strong>
              {confirmedOrder.deliveryLabel}
            </strong>
          </div>

          <div>
            <span>Total simulé</span>
            <strong>
              {priceFormatter.format(
                confirmedOrder.total,
              )}
            </strong>
          </div>
        </div>

        <div className="checkout-confirmation-message">
          <span aria-hidden="true">✉️</span>

          <p>
            Dans une véritable boutique, une confirmation
            serait envoyée à{" "}
            <strong>{confirmedOrder.email}</strong>.
          </p>
        </div>

        <div className="checkout-confirmation-actions">
          <Link className="button" href="/boutique">
            Retourner à la boutique
          </Link>

          <Link
            className="button button-secondary"
            href="/"
          >
            Revenir à l’accueil
          </Link>
        </div>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="checkout-empty">
        <span aria-hidden="true">🛒</span>

        <p className="eyebrow">Checkout</p>

        <h1>Votre panier est vide.</h1>

        <p>
          Ajoutez au moins un produit avant de finaliser
          votre commande.
        </p>

        <Link className="button" href="/boutique">
          Découvrir la boutique
        </Link>
      </section>
    );
  }

  return (
    <div className="checkout-layout">
      <form
        id="checkout-form"
        className="checkout-form"
        onSubmit={handleSubmit}
      >
        <div className="checkout-title">
          <p className="eyebrow">
            Finaliser la commande
          </p>

          <h1>Informations de livraison</h1>

          <p>
            Complétez les informations ci-dessous. Cette
            commande reste une simulation.
          </p>
        </div>

        <section className="checkout-form-section">
          <div className="checkout-section-heading">
            <span>01</span>

            <div>
              <h2>Vos coordonnées</h2>
              <p>
                Pour recevoir les informations relatives à
                votre commande.
              </p>
            </div>
          </div>

          <div className="checkout-fields checkout-fields-two">
            <label>
              <span>Nom complet *</span>

              <input
                type="text"
                name="fullName"
                autoComplete="name"
                placeholder="Marie Dupont"
                required
              />
            </label>

            <label>
              <span>Adresse e-mail *</span>

              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="marie@email.fr"
                required
              />
            </label>

            <label>
              <span>Téléphone</span>

              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="06 00 00 00 00"
              />
            </label>
          </div>
        </section>

        <section className="checkout-form-section">
          <div className="checkout-section-heading">
            <span>02</span>

            <div>
              <h2>Adresse de livraison</h2>
              <p>
                Indiquez l’adresse à laquelle la commande
                devrait être livrée.
              </p>
            </div>
          </div>

          <div className="checkout-fields">
            <label>
              <span>Adresse *</span>

              <input
                type="text"
                name="address"
                autoComplete="street-address"
                placeholder="12 rue des Grandes Oreilles"
                required
              />
            </label>
          </div>

          <div className="checkout-fields checkout-fields-address">
            <label>
              <span>Code postal *</span>

              <input
                type="text"
                name="postalCode"
                autoComplete="postal-code"
                inputMode="numeric"
                pattern="[0-9]{5}"
                title="Saisissez un code postal français à 5 chiffres"
                placeholder="75001"
                required
              />
            </label>

            <label>
              <span>Ville *</span>

              <input
                type="text"
                name="city"
                autoComplete="address-level2"
                placeholder="Paris"
                required
              />
            </label>

            <label>
              <span>Pays *</span>

              <select
                name="country"
                autoComplete="country-name"
                defaultValue="France"
                required
              >
                <option value="France">
                  France
                </option>

                <option value="Belgique">
                  Belgique
                </option>

                <option value="Luxembourg">
                  Luxembourg
                </option>

                <option value="Suisse">
                  Suisse
                </option>
              </select>
            </label>
          </div>

          <div className="checkout-fields">
            <label>
              <span>
                Instructions de livraison
              </span>

              <textarea
                name="instructions"
                rows="4"
                placeholder="Code de porte, étage, précision pour le livreur…"
              />
            </label>
          </div>
        </section>

        <section className="checkout-form-section">
          <div className="checkout-section-heading">
            <span>03</span>

            <div>
              <h2>Mode de livraison</h2>

              <p>
                Choisissez la méthode de livraison souhaitée.
              </p>
            </div>
          </div>

          <div className="checkout-delivery-options">
            <label
              className={
                deliveryMethod === "standard"
                  ? "checkout-delivery-option selected"
                  : "checkout-delivery-option"
              }
            >
              <input
                type="radio"
                name="delivery"
                value="standard"
                checked={
                  deliveryMethod === "standard"
                }
                onChange={() =>
                  setDeliveryMethod("standard")
                }
              />

              <span className="checkout-radio" />

              <span className="checkout-delivery-content">
                <strong>
                  Livraison standard
                </strong>

                <small>
                  Livraison estimée sous 3 à 5 jours
                  ouvrés
                </small>
              </span>

              <strong className="checkout-delivery-price">
                {subtotal >= 59
                  ? "Offerte"
                  : priceFormatter.format(4.9)}
              </strong>
            </label>

            <label
              className={
                deliveryMethod === "express"
                  ? "checkout-delivery-option selected"
                  : "checkout-delivery-option"
              }
            >
              <input
                type="radio"
                name="delivery"
                value="express"
                checked={
                  deliveryMethod === "express"
                }
                onChange={() =>
                  setDeliveryMethod("express")
                }
              />

              <span className="checkout-radio" />

              <span className="checkout-delivery-content">
                <strong>
                  Livraison express
                </strong>

                <small>
                  Livraison estimée sous 1 à 2 jours
                  ouvrés
                </small>
              </span>

              <strong className="checkout-delivery-price">
                {priceFormatter.format(9.9)}
              </strong>
            </label>
          </div>
        </section>

        <section className="checkout-form-section">
          <div className="checkout-section-heading">
            <span>04</span>

            <div>
              <h2>Paiement</h2>

              <p>
                Aucun moyen de paiement réel n’est utilisé
                dans cette démonstration.
              </p>
            </div>
          </div>

          <div className="checkout-demo-payment">
            <div className="checkout-demo-payment-heading">
              <span aria-hidden="true">🔒</span>

              <div>
                <strong>
                  Paiement de démonstration
                </strong>

                <small>
                  Aucun débit et aucune donnée bancaire
                </small>
              </div>

              <span className="checkout-payment-check">
                ✓
              </span>
            </div>

            <p>
              Ne saisissez aucune véritable information
              bancaire. Une solution comme Stripe pourra être
              intégrée plus tard sur un hébergement disposant
              de fonctions serveur.
            </p>
          </div>

          <label className="checkout-terms">
            <input
              type="checkbox"
              name="terms"
              required
            />

            <span>
              J’accepte les conditions fictives de cette
              commande de démonstration.
            </span>
          </label>
        </section>
      </form>

      <aside className="checkout-summary">
        <p className="eyebrow">
          Votre commande
        </p>

        <h2>Récapitulatif</h2>

        <div className="checkout-summary-products">
          {cart.map((item) => (
  <article
    className="checkout-summary-product"
    key={item.cartKey}
  >
    <div
      className="checkout-summary-visual"
      style={{
        background: item.background,
      }}
    >
      <span aria-hidden="true">
        {item.emoji}
      </span>

      <small>{item.qty}</small>
    </div>

    <div>
      <strong>{item.name}</strong>

      <small>{item.category}</small>

      <small className="checkout-summary-variants">
        {item.selectedSize} · {item.selectedColor}
      </small>
    </div>

    <strong>
      {priceFormatter.format(
        item.price * item.qty,
      )}
    </strong>
  </article>
))}
        </div>

        <div className="checkout-summary-lines">
          <div>
            <span>Sous-total</span>

            <strong>
              {priceFormatter.format(subtotal)}
            </strong>
          </div>

          <div>
            <span>Livraison</span>

            <strong>
              {shippingCost === 0
                ? "Offerte"
                : priceFormatter.format(
                    shippingCost,
                  )}
            </strong>
          </div>
        </div>

        <div className="checkout-summary-total">
          <div>
            <span>Total simulé</span>
            <small>Taxes incluses</small>
          </div>

          <strong>
            {priceFormatter.format(total)}
          </strong>
        </div>

        <button
          className="checkout-submit-button"
          type="submit"
          form="checkout-form"
        >
          Confirmer la commande
        </button>

        <p className="checkout-submit-note">
          Aucun paiement ne sera effectué.
        </p>

        <div className="checkout-summary-security">
          <span aria-hidden="true">🛡️</span>

          <p>
            Cette page sert uniquement à tester
            l’expérience utilisateur du checkout.
          </p>
        </div>

        <Link
          className="checkout-back-link"
          href="/panier"
        >
          ← Retourner au panier
        </Link>
      </aside>
    </div>
  );
}