"use client";

import { useState } from "react";

export default function ContactClient() {
  const [confirmation, setConfirmation] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name =
      formData.get("name")?.toString().trim() ||
      "ami de la meute";

    setConfirmation({
      name,
      subject:
        formData.get("subject")?.toString() ||
        "Votre demande",
    });

    form.reset();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (confirmation) {
    return (
      <div className="contact-confirmation">
        <span aria-hidden="true">✓</span>

        <p className="eyebrow">
          Message de démonstration
        </p>

        <h2>
          Merci {confirmation.name} !
        </h2>

        <p>
          Votre message concernant «{" "}
          {confirmation.subject} » a été validé dans
          l’interface.
        </p>

        <p>
          Aucun message réel n’a été envoyé, car le site est
          actuellement hébergé sans serveur de messagerie.
        </p>

        <button
          className="button"
          type="button"
          onClick={() => setConfirmation(null)}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="contact-form-heading">
        <p className="eyebrow">
          Écrivez-nous
        </p>

        <h2>
          Comment pouvons-nous vous aider ?
        </h2>

        <p>
          Les champs marqués d’un astérisque sont
          obligatoires.
        </p>
      </div>

      <div className="contact-fields contact-fields-two">
        <label>
          <span>Nom complet *</span>

          <input
            type="text"
            name="name"
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
      </div>

      <div className="contact-fields">
        <label>
          <span>Sujet *</span>

          <select
            name="subject"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Choisir un sujet
            </option>

            <option value="Une question sur un produit">
              Une question sur un produit
            </option>

            <option value="Une question sur la livraison">
              Une question sur la livraison
            </option>

            <option value="Une question sur le panier">
              Une question sur le panier
            </option>

            <option value="Un problème technique">
              Un problème technique
            </option>

            <option value="Autre demande">
              Autre demande
            </option>
          </select>
        </label>
      </div>

      <div className="contact-fields">
        <label>
          <span>Numéro de commande</span>

          <input
            type="text"
            name="orderNumber"
            placeholder="Exemple : MC-2026-123456"
          />
        </label>
      </div>

      <div className="contact-fields">
        <label>
          <span>Votre message *</span>

          <textarea
            name="message"
            rows="7"
            minLength="10"
            placeholder="Décrivez votre question avec le plus de détails possible…"
            required
          />
        </label>
      </div>

      <label className="contact-consent">
        <input type="checkbox" required />

        <span>
          Je comprends que ce formulaire est une
          démonstration et qu’aucun message réel ne sera
          envoyé.
        </span>
      </label>

      <button
        className="contact-submit-button"
        type="submit"
      >
        Envoyer le message
      </button>

      <p className="contact-form-note">
        Démonstration uniquement — aucune donnée n’est
        transmise ni conservée.
      </p>
    </form>
  );
}