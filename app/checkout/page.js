import Link from "next/link";
import CartLink from "@/components/CartLink";
import CheckoutClient from "./CheckoutClient";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Checkout",
  description:
    "Finalisez votre commande de démonstration CoinCorgi.",
};

export default function CheckoutPage() {
  return (
    <>
      <SiteHeader />

    

      <main className="checkout-page">
        <div className="container">
          <CheckoutClient />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom shop-footer-bottom">
          <span>
            © 2026 CoinCorgi. Projet de démonstration.
          </span>

          <Link href="/panier">
            Retour au panier
          </Link>
        </div>
      </footer>
    </>
  );
}