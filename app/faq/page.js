import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { faqItems } from "@/data/faq";

export const metadata = {
  title: "FAQ",
  description:
    "Retrouvez les réponses aux questions fréquentes concernant CoinCorgi, les produits, la livraison et le paiement.",
};

export default function FAQPage() {
  return (
    <>
      <SiteHeader />

      <main className="editorial-page">
        <section className="content-hero faq-content-hero">
          <div className="container faq-page-hero">
            <p className="eyebrow">
              Questions fréquentes
            </p>

            <h1>
              Une réponse claire à chaque question.
            </h1>

            <p>
              Cette FAQ précise le fonctionnement actuel du
              site et les éléments qui seront finalisés avant
              une éventuelle ouverture commerciale.
            </p>

            <div className="faq-page-links">
              <a href="#questions">
                Consulter les réponses
              </a>

              <Link href="/contact">
                Poser une autre question
              </Link>
            </div>
          </div>
        </section>

        <section
          className="editorial-section"
          id="questions"
        >
          <div className="container faq-page-grid">
            <aside className="faq-page-sidebar">
              <p className="eyebrow">
                Besoin d’aide ?
              </p>

              <h2>
                Nous avons peut-être déjà la réponse.
              </h2>

              <p>
                Consultez les questions ci-contre. Le
                formulaire de contact reste disponible pour
                les demandes plus précises.
              </p>

              <Link className="button" href="/contact">
                Contacter CoinCorgi
              </Link>
            </aside>

            <div className="faq-page-list">
              {faqItems.map((item) => (
                <details key={item.question}>
                  <summary>
                    <div>
                      <small>{item.category}</small>
                      <strong>{item.question}</strong>
                    </div>

                    <span aria-hidden="true">+</span>
                  </summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-reassurance">
          <div className="container faq-reassurance-grid">
            <div>
              <span aria-hidden="true">📦</span>
              <strong>Livraison expliquée</strong>
              <p>
                Les frais sont visibles avant confirmation.
              </p>
            </div>

            <div>
              <span aria-hidden="true">↩️</span>
              <strong>Retours encadrés</strong>
              <p>
                Les conditions réelles seront publiées avant
                le lancement.
              </p>
            </div>

            <div>
              <span aria-hidden="true">🔒</span>
              <strong>Checkout transparent</strong>
              <p>
                Aucun paiement réel n’est actif sur cette
                démonstration.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}