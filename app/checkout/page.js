import Link from "next/link";
import CartLink from "@/components/CartLink";
import CheckoutClient from "./CheckoutClient";

export const metadata = {
  title: "Checkout",
  description:
    "Finalisez votre commande de démonstration Maison Corgi.",
};

export default function CheckoutPage() {
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
            <Link href="/">
              Accueil
            </Link>

            <Link href="/boutique">
              Boutique
            </Link>

            <Link href="/panier">
              Panier
            </Link>
          </nav>

          <CartLink />
        </div>
      </header>

      <main className="checkout-page">
        <div className="container">
          <CheckoutClient />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom shop-footer-bottom">
          <span>
            © 2026 Maison Corgi. Projet de démonstration.
          </span>

          <Link href="/panier">
            Retour au panier
          </Link>
        </div>
      </footer>
    </>
  );
}