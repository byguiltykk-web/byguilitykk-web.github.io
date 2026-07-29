import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "À propos",
  description:
    "Découvrez l’histoire, les valeurs et la vision de CoinCorgi.",
};

const values = [
  {
    icon: "🤎",
    title: "Passion sincère",
    text: "Un univers entièrement construit autour des corgis et des humains qui les aiment.",
  },
  {
    icon: "✨",
    title: "Sélection exigeante",
    text: "Des produits pensés pour associer utilité, confort, esthétique et simplicité.",
  },
  {
    icon: "💬",
    title: "Transparence",
    text: "Des informations claires sur les produits, la livraison, les retours et le fonctionnement du site.",
  },
  {
    icon: "🌿",
    title: "Évolution responsable",
    text: "Une marque conçue pour évoluer progressivement, sans promettre ce qui n’est pas encore disponible.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="editorial-page">
        <section className="content-hero about-content-hero">
          <div className="container content-hero-grid">
            <div>
              <p className="eyebrow">
                Notre histoire
              </p>

              <h1>
                Une maison pensée pour les corgis et leurs
                humains.
              </h1>

              <p>
                CoinCorgi est née d’une idée simple :
                réunir dans un même univers des produits
                utiles, chaleureux et joyeux, sans perdre de
                vue le confort du chien.
              </p>

              <Link className="button" href="/boutique">
                Découvrir la collection
              </Link>
            </div>

            <div className="about-visual">
              <div className="about-visual-icon">
                🏡
              </div>

              <div>
                <small>CoinCorgi</small>
                <strong>
                  Une marque fictive avec une vraie vision.
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="container about-story-grid">
            <div>
              <p className="eyebrow">
                Le point de départ
              </p>

              <h2>
                Créer mieux qu’une simple boutique de
                produits mignons.
              </h2>
            </div>

            <div className="about-story-text">
              <p>
                L’objectif de CoinCorgi est de proposer une
                expérience cohérente, depuis la découverte
                d’un produit jusqu’aux conseils permettant de
                bien l’utiliser.
              </p>

              <p>
                L’identité de la marque s’inspire du pelage
                chaleureux du corgi, de son caractère joyeux
                et de sa place particulière dans la famille.
              </p>

              <p>
                Le projet est actuellement une démonstration.
                Les produits, commandes, avis et conditions
                commerciales sont fictifs.
              </p>
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section-soft">
          <div className="container">
            <div className="editorial-heading">
              <div>
                <p className="eyebrow">
                  Nos valeurs
                </p>

                <h2>
                  Une marque chaleureuse, mais jamais
                  imprécise.
                </h2>
              </div>

              <p>
                Les choix de design, de contenu et de
                navigation visent à créer une expérience
                claire et rassurante.
              </p>
            </div>

            <div className="content-card-grid content-card-grid-four">
              {values.map((value) => (
                <article
                  className="content-card"
                  key={value.title}
                >
                  <span aria-hidden="true">
                    {value.icon}
                  </span>

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="container mission-panel">
            <div>
              <p className="eyebrow">
                Notre mission
              </p>

              <h2>
                Faciliter les choix du quotidien.
              </h2>

              <p>
                Le futur catalogue devra permettre de
                comprendre rapidement à quoi sert chaque
                produit, comment choisir sa taille et comment
                l’entretenir.
              </p>
            </div>

            <div className="mission-numbers">
              <div>
                <strong>100 %</strong>
                <span>univers corgi</span>
              </div>

              <div>
                <strong>12</strong>
                <span>produits de démonstration</span>
              </div>

              <div>
                <strong>1</strong>
                <span>expérience cohérente</span>
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-cta">
          <div className="container editorial-cta-inner">
            <div>
              <p className="eyebrow eyebrow-light">
                Rejoindre la meute
              </p>

              <h2>
                Découvrez l’univers CoinCorgi.
              </h2>
            </div>

            <div className="editorial-cta-actions">
              <Link className="button" href="/boutique">
                Voir la boutique
              </Link>

              <Link
                className="button button-secondary editorial-light-button"
                href="/contact"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}