import Link from "next/link";
import CartLink from "@/components/CartLink";
import PanierClient from "./PanierClient";

export const metadata = {
  title: "Panier",
  description:
    "Consultez et modifiez votre panier Maison Corgi.",
};

export default function PanierPage() {
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
            <Link href="/panier">Panier</Link>
          </nav>

          <CartLink />
        </div>
      </header>

      <main className="cart-page">
        <div className="container">
          <PanierClient />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom shop-footer-bottom">
          <span>
            © 2026 Maison Corgi. Projet de démonstration.
          </span>

          <Link href="/boutique">
            Retour à la boutique
          </Link>
        </div>
      </footer>
    </>
  );
}