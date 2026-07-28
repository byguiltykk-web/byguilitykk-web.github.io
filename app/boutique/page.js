import CartLink from "@/components/CartLink";
import Link from "next/link";
import BoutiqueClient from "./BoutiqueClient";
import {
  products,
  productCategories,
} from "@/data/products";

export const metadata = {
  title: "Boutique corgi",
  description:
    "Découvrez les accessoires, jouets, vêtements, cadeaux et objets lifestyle de Maison Corgi.",
};

export default function BoutiquePage() {
  return (
    <>
      <div className="announcement">
        Livraison offerte dès 59 € · Retours sous 30 jours ·
        Paiement sécurisé
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link
            className="logo"
            href="/"
            aria-label="Maison Corgi, accueil"
          >
            <span className="logo-mark">MC</span>
            <span>
              Maison <strong>Corgi</strong>
            </span>
          </Link>

          <nav
            className="main-nav"
            aria-label="Navigation principale"
          >
            <Link href="/">Accueil</Link>
            <Link href="/boutique">Boutique</Link>
            <a href="#catalogue">Catégories</a>
            <a href="#reassurance">Nos engagements</a>
          </nav>

          <CartLink />
        </div>
      </header>

      <main className="shop-page">
        <section className="shop-hero">
          <div className="container shop-hero-grid">
            <div>
              <p className="eyebrow">La sélection Maison Corgi</p>

              <h1>
                Des produits adorables, utiles et choisis avec soin.
              </h1>

              <p>
                Explore notre première collection d’accessoires,
                vêtements, jouets, objets déco et cadeaux dédiés aux
                corgis.
              </p>

              <div className="shop-hero-actions">
                <a className="button" href="#catalogue">
                  Explorer les produits
                </a>

                <Link className="button button-secondary" href="/">
                  Retour à l’accueil
                </Link>
              </div>
            </div>

            <div className="shop-hero-card">
              <span className="shop-hero-card-label">
                Collection signature
              </span>

              <div className="shop-hero-card-icon" aria-hidden="true">
                🐶
              </div>

              <div>
                <strong>12 produits sélectionnés</strong>
                <p>
                  Pour les promenades, les jeux, les siestes et les
                  humains passionnés.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div id="catalogue">
          <BoutiqueClient
            products={products}
            categories={productCategories}
          />
        </div>

        <section
          className="shop-reassurance"
          id="reassurance"
        >
          <div className="container shop-reassurance-grid">
            <article>
              <span aria-hidden="true">🐾</span>
              <div>
                <strong>Choisi pour les corgis</strong>
                <p>Une sélection cohérente avec leur morphologie.</p>
              </div>
            </article>

            <article>
              <span aria-hidden="true">📦</span>
              <div>
                <strong>Préparation attentionnée</strong>
                <p>Des commandes emballées avec soin.</p>
              </div>
            </article>

            <article>
              <span aria-hidden="true">↩️</span>
              <div>
                <strong>Retours simplifiés</strong>
                <p>Une procédure claire et rassurante.</p>
              </div>
            </article>

            <article>
              <span aria-hidden="true">🔒</span>
              <div>
                <strong>Paiement sécurisé</strong>
                <p>Une future expérience de commande protégée.</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom shop-footer-bottom">
          <span>© 2026 Maison Corgi. Projet de démonstration.</span>

          <Link href="/">Retour à l’accueil</Link>
        </div>
      </footer>
    </>
  );
}