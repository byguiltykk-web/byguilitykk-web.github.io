import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link
            className="logo footer-logo"
            href="/"
            aria-label="Maison Corgi, accueil"
          >
            <span className="logo-mark">MC</span>

            <span>
              Maison <strong>Corgi</strong>
            </span>
          </Link>

          <p>
            La maison en ligne des corgis heureux et des
            humains complètement conquis.
          </p>
        </div>

        <div>
          <h3>Boutique</h3>

          <Link href="/boutique">
            Tous les produits
          </Link>

          <Link href="/boutique">
            Nouveautés
          </Link>

          <Link href="/boutique">
            Best-sellers
          </Link>

          <Link href="/panier">
            Mon panier
          </Link>
        </div>

        <div>
          <h3>Découvrir</h3>

          <Link href="/guide-corgi">
            Guide corgi
          </Link>

          <Link href="/a-propos">
            À propos
          </Link>

          <Link href="/faq">
            Questions fréquentes
          </Link>
        </div>

        <div>
          <h3>Aide</h3>

          <Link href="/contact">
            Nous contacter
          </Link>

          <Link href="/faq">
            Livraison et retours
          </Link>

          <Link href="/faq">
            Paiement sécurisé
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © 2026 Maison Corgi. Projet de démonstration.
        </span>

        <span>
          Fait avec amour et quelques friandises.
        </span>
      </div>
    </footer>
  );
}