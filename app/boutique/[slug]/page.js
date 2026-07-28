import Link from "next/link";
import { notFound } from "next/navigation";
import CartLink from "@/components/CartLink";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import {
  getProductDetails,
} from "@/data/productDetails";
import ProductDetailsClient from "./ProductDetailsClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug,
  );

  if (!product) {
    return {
      title: "Produit introuvable",
    };
  }

  return {
    title: product.name,
    description: product.short,
  };
}

export default async function ProductPage({
  params,
}) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug,
  );

  if (!product) {
    notFound();
  }

  const details = getProductDetails(product);

  const sameCategory = products.filter(
    (item) =>
      item.id !== product.id &&
      item.category === product.category,
  );

  const otherProducts = products.filter(
    (item) =>
      item.id !== product.id &&
      item.category !== product.category,
  );

  const relatedProducts = [
    ...sameCategory,
    ...otherProducts,
  ].slice(0, 3);

  return (
    <>
      <div className="announcement">
        Livraison offerte dès 59 € · Retours sous
        30 jours · Paiement sécurisé
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link
            className="logo"
            href="/"
            aria-label="Maison Corgi, accueil"
          >
            <span className="logo-mark">
              MC
            </span>

            <span>
              Maison <strong>Corgi</strong>
            </span>
          </Link>

          <nav
            className="main-nav"
            aria-label="Navigation principale"
          >
            <Link href="/">Accueil</Link>
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

      <main className="product-page">
        <div className="container">
          <nav
            className="product-breadcrumbs"
            aria-label="Fil d’Ariane"
          >
            <Link href="/">Accueil</Link>
            <span>›</span>
            <Link href="/boutique">
              Boutique
            </Link>
            <span>›</span>
            <span>{product.name}</span>
          </nav>

          <ProductDetailsClient
            product={product}
          />

          <section className="product-information">
            <div className="product-description-block">
              <p className="eyebrow">
                À propos du produit
              </p>

              <h2>
                Confort, qualité et bonne humeur.
              </h2>

              <p>
                {details.longDescription}
              </p>
            </div>

            <div className="product-benefits">
              <p className="eyebrow">
                Les points forts
              </p>

              <ul>
                {details.benefits.map(
                  (benefit) => (
                    <li key={benefit}>
                      <span>✓</span>
                      {benefit}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </section>

          <section className="product-accordions">
            <details open>
              <summary>
                Caractéristiques
                <span>+</span>
              </summary>

              <ul>
                {details.features.map(
                  (feature) => (
                    <li key={feature}>
                      {feature}
                    </li>
                  ),
                )}
              </ul>
            </details>

            <details>
              <summary>
                Guide des tailles
                <span>+</span>
              </summary>

              <p>
                Mesurez votre corgi sans serrer,
                puis comparez la mesure avec les
                tailles disponibles :{" "}
                <strong>
                  {product.sizes.join(", ")}
                </strong>
                . Pour une mesure située entre
                deux tailles, privilégiez la plus
                grande.
              </p>
            </details>

            <details>
              <summary>
                Conseils d’entretien
                <span>+</span>
              </summary>

              <ul>
                {details.care.map((advice) => (
                  <li key={advice}>
                    {advice}
                  </li>
                ))}
              </ul>
            </details>

            <details>
              <summary>
                Livraison et retours
                <span>+</span>
              </summary>

              <p>
                Cette boutique est actuellement une
                démonstration. Les délais, frais et
                conditions réels seront précisés
                avant l’ouverture commerciale.
              </p>
            </details>
          </section>

          <section className="product-reviews">
            <div>
              <p className="eyebrow">
                Avis clients
              </p>

              <h2>
                Approuvé par la meute.
              </h2>

              <p>
                Les avis présentés sur cette version
                sont fictifs et servent à illustrer
                la future expérience e-commerce.
              </p>
            </div>

            <article>
              <div>★★★★★</div>

              <blockquote>
                “Très belle qualité et taille
                parfaitement adaptée. Notre corgi
                l’a adopté immédiatement.”
              </blockquote>

              <strong>
                Camille et Oslo
              </strong>
            </article>

            <article>
              <div>★★★★★</div>

              <blockquote>
                “La présentation est soignée et le
                produit correspond parfaitement à
                l’univers de la boutique.”
              </blockquote>

              <strong>
                Sarah et Pixel
              </strong>
            </article>
          </section>

          <section className="related-products">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  À découvrir également
                </p>

                <h2>
                  Les favoris de la meute
                </h2>
              </div>

              <Link href="/boutique">
                Voir toute la boutique →
              </Link>
            </div>

            <div className="related-product-grid">
              {relatedProducts.map(
                (relatedProduct) => (
                  <ProductCard
                    product={relatedProduct}
                    key={relatedProduct.id}
                  />
                ),
              )}
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom shop-footer-bottom">
          <span>
            © 2026 Maison Corgi. Projet de
            démonstration.
          </span>

          <Link href="/boutique">
            Retour à la boutique
          </Link>
        </div>
      </footer>
    </>
  );
}