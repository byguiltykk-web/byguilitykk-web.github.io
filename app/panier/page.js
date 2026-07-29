import Link from "next/link";
import CartLink from "@/components/CartLink";
import PanierClient from "./PanierClient";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Panier",
  description:
    "Consultez et modifiez votre panier CoinCorgi.",
};

export default function PanierPage() {
  return (
    <>
      <SiteHeader />

      

      <main className="cart-page">
        <div className="container">
          <PanierClient />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom shop-footer-bottom">
          <span>
            © 2026 CoinCorgi. Projet de démonstration.
          </span>

          <Link href="/boutique">
            Retour à la boutique
          </Link>
        </div>
      </footer>
    </>
  );
}