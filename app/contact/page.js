import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact",
  description:
    "Contactez CoinCorgi pour une question concernant les produits ou le fonctionnement de la boutique.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="editorial-page">
        <section className="content-hero contact-content-hero">
          <div className="container content-hero-grid">
            <div>
              <p className="eyebrow">
                Contact
              </p>

              <h1>
                Une question ? La meute est à votre écoute.
              </h1>

              <p>
                Utilisez le formulaire pour tester
                l’expérience de contact CoinCorgi.
                Aucun message réel ne sera envoyé.
              </p>
            </div>

            <div className="contact-hero-card">
              <span aria-hidden="true">💌</span>

              <strong>
                Une réponse claire et attentionnée.
              </strong>

              <p>
                Dans la future boutique, les demandes seront
                traitées par un véritable service client.
              </p>
            </div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="container contact-page-grid">
            <aside className="contact-information">
              <p className="eyebrow">
                Informations
              </p>

              <h2>
                Avant d’envoyer votre message
              </h2>

              <p>
                Consultez également la FAQ : la réponse à
                votre question s’y trouve peut-être déjà.
              </p>

              <Link
                className="button button-secondary"
                href="/faq"
              >
                Consulter la FAQ
              </Link>

              <div className="contact-information-list">
                <div>
                  <span aria-hidden="true">⏱️</span>

                  <p>
                    <strong>Délai fictif</strong>
                    <small>
                      Réponse annoncée sous 1 à 2 jours
                      ouvrés
                    </small>
                  </p>
                </div>

                <div>
                  <span aria-hidden="true">🔒</span>

                  <p>
                    <strong>Données protégées</strong>
                    <small>
                      Aucun envoi réel dans cette version
                    </small>
                  </p>
                </div>

                <div>
                  <span aria-hidden="true">🐾</span>

                  <p>
                    <strong>Conseils produits</strong>
                    <small>
                      Taille, utilisation et entretien
                    </small>
                  </p>
                </div>
              </div>
            </aside>

            <ContactClient />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}