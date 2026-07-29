import Link from "next/link";
import CartLink from "@/components/CartLink";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
const categories = [
  {
    icon: "🦴",
    title: "Accessoires",
    description: "Harnais, laisses et essentiels pensés pour leur morphologie.",
  },
  {
    icon: "🧸",
    title: "Jouets",
    description: "Des jouets amusants, résistants et adaptés aux petites pattes.",
  },
  {
    icon: "🏡",
    title: "Maison & déco",
    description: "Des objets chaleureux pour faire entrer le corgi à la maison.",
  },
  {
    icon: "🎁",
    title: "Cadeaux",
    description: "Des idées originales pour les humains complètement corgi.",
  },
];

const products = [
  {
    emoji: "🦮",
    tag: "Best-seller",
    name: "Harnais Nuage",
    description:
      "Un harnais doux et réglable conçu pour accompagner les promenades quotidiennes.",
    price: "34,90 €",
    background:
      "linear-gradient(145deg, #f9d8bd 0%, #f3b77f 55%, #d98342 100%)",
  },
  {
    emoji: "🧸",
    tag: "Nouveau",
    name: "Peluche Biscuit",
    description:
      "Une peluche moelleuse avec couineur discret pour des moments de jeu tout doux.",
    price: "18,90 €",
    background:
      "linear-gradient(145deg, #f8e7c9 0%, #e7c38d 55%, #c79153 100%)",
  },
  {
    emoji: "☕",
    tag: "Coup de cœur",
    name: "Mug Matin Corgi",
    description:
      "Un mug en céramique illustré pour commencer chaque journée avec le sourire.",
    price: "22,90 €",
    background:
      "linear-gradient(145deg, #fce8df 0%, #efb6a2 55%, #d77c65 100%)",
  },
  {
    emoji: "🛏️",
    tag: "Premium",
    name: "Coussin Petit Roi",
    description:
      "Un couchage confortable avec des rebords rassurants et une housse lavable.",
    price: "59,90 €",
    background:
      "linear-gradient(145deg, #e6ddd3 0%, #c9ad96 55%, #9c7356 100%)",
  },
];

const promises = [
  {
    icon: "🤎",
    title: "Pensé pour les corgis",
    text: "Une sélection cohérente avec leur gabarit, leurs habitudes et leur énergie.",
  },
  {
    icon: "✨",
    title: "Qualité sélectionnée",
    text: "Des produits choisis pour leur confort, leur style et leur durabilité.",
  },
  {
    icon: "📦",
    title: "Expédition soignée",
    text: "Chaque commande est préparée avec attention dans un emballage protecteur.",
  },
];

const reviews = [
  {
    text: "Le harnais est superbe et va parfaitement à Oslo. Enfin une boutique qui comprend vraiment les corgis.",
    author: "Camille & Oslo",
    product: "Harnais Nuage",
  },
  {
    text: "Le colis était magnifique et la peluche est devenue le jouet préféré de Pixel dès la première minute.",
    author: "Sarah & Pixel",
    product: "Peluche Biscuit",
  },
  {
    text: "Un univers adorable sans faire gadget. La qualité est au rendez-vous et le service est très rassurant.",
    author: "Nicolas & Moka",
    product: "Collection Maison",
  },
];

const questions = [
  {
    question: "Les produits sont-ils adaptés à tous les corgis ?",
    answer:
      "La majorité de notre sélection convient aux Welsh Corgi Pembroke et Cardigan. Les dimensions et recommandations seront précisées sur chaque fiche produit.",
  },
  {
    question: "Comment choisir la bonne taille de harnais ?",
    answer:
      "Mesurez le tour de poitrail de votre chien sans trop serrer, puis comparez la mesure avec le guide des tailles de la fiche produit.",
  },
  {
    question: "Quels seront les délais de livraison ?",
    answer:
      "Les délais exacts seront indiqués lors de la mise en place de la boutique réelle. Une estimation claire sera affichée avant toute commande.",
  },
  {
    question: "Puis-je retourner un article ?",
    answer:
      "Une politique de retour détaillée sera ajoutée avant l’ouverture commerciale. Elle précisera les délais, conditions et démarches à suivre.",
  },
];

function CorgiIllustration() {
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <img
      className="hero-corgi-image"
      src={`${basePath}/images/hero-corgi.png`}
      alt="Corgi souriant CoinCorgi"
    />
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

    

      <main>
        <section className="hero" id="accueil">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">La boutique des petites pattes royales</p>

              <h1>
                Tout l’univers du corgi, réuni dans une maison pleine de douceur.
              </h1>

              <p className="hero-text">
                Accessoires, jouets, décoration et cadeaux choisis avec amour
                pour les corgis et les humains qui ne résistent pas à leurs
                grandes oreilles.
              </p>

              <div className="hero-actions">
                <Link className="button" href="/boutique">
                  Découvrir la collection
                </Link>

                <Link className="button button-secondary" href="/guide-corgi">
                  Lire le guide corgi
                </Link>
              </div>

              <div className="hero-proof" aria-label="Avantages">
                <span>★ 4,9/5 clients heureux</span>
                <span>Produits sélectionnés</span>
                <span>Expédition soignée</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="floating-note note-one">100 % corgi</div>
              <div className="floating-note note-two">Très bonnes pattes</div>

              <div className="corgi-card">
                <div className="corgi-card-top">
                  <span>Le membre préféré de la famille</span>
                
                </div>

                <CorgiIllustration />

                <div className="corgi-card-bottom">
                  <div>
                    <small>Collection signature</small>
                    <strong>Confort & bonne humeur</strong>
                  </div>
                  <span className="round-arrow">→</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Pour chaque moment</p>
                <h2>Explorez le CoinCorgi</h2>
              </div>

              <p>
                Une sélection organisée simplement pour trouver rapidement le
                prochain coup de cœur de votre compagnon.
              </p>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <article className="category-card" key={category.title}>
                  <span className="category-icon" aria-hidden="true">
                    {category.icon}
                  </span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <a href="#collection">Explorer <span>→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="collection">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Les favoris de la meute</p>
                <h2>Nos produits vedettes</h2>
              </div>

              <p>
                Une première sélection fictive pour construire l’identité de
                la future boutique.
              </p>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.name}>
                  <div
                    className="product-visual"
                    style={{ background: product.background }}
                  >
                    <span className="product-tag">{product.tag}</span>
                    <span className="product-emoji" aria-hidden="true">
                      {product.emoji}
                    </span>
                  </div>

                  <div className="product-content">
                    <div className="product-heading">
                      <h3>{product.name}</h3>
                      <strong>{product.price}</strong>
                    </div>

                    <p>{product.description}</p>

                    <a className="product-link" href="#newsletter">
                      Être informé du lancement <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="promise-intro">
              <div>
                <p className="eyebrow">Pourquoi CoinCorgi ?</p>
                <h2>Une boutique pensée avec le cœur et un peu de poils.</h2>
              </div>

              <p>
                Nous voulons proposer un univers beau, simple et rassurant,
                sans oublier ce qui compte vraiment : le bien-être du chien et
                le plaisir de son humain.
              </p>
            </div>

            <div className="promise-grid">
              {promises.map((promise, index) => (
                <article className="promise-card" key={promise.title}>
                  <div className="promise-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="promise-icon" aria-hidden="true">
                    {promise.icon}
                  </span>
                  <h3>{promise.title}</h3>
                  <p>{promise.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section guide-section" id="guide">
          <div className="container guide-grid">
            <div className="guide-visual">
              <div className="guide-pattern">🐾</div>
              <div className="guide-card">
                <span className="guide-label">Le guide essentiel</span>
                <strong>Bien vivre avec son corgi</strong>
                <p>
                  Caractère, activité, entretien, alimentation et accessoires.
                </p>
              </div>
            </div>

            <div className="guide-copy">
              <p className="eyebrow">Le coin des corgis</p>
              <h2>Mieux les connaître pour mieux prendre soin d’eux.</h2>

              <p>
                Derrière leur silhouette adorable se cache un chien intelligent,
                actif et attachant. Notre guide réunira des conseils pratiques
                pour accompagner chaque étape de sa vie.
              </p>

              <ul className="guide-list">
                <li>
                  <span>01</span>
                  Comprendre son caractère et ses besoins quotidiens
                </li>
                <li>
                  <span>02</span>
                  Choisir des accessoires adaptés à sa morphologie
                </li>
                <li>
                  <span>03</span>
                  Entretenir son pelage et préserver son confort
                </li>
              </ul>

              <a className="button button-dark" href="#newsletter">
                Recevoir les prochains conseils
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="avis">
          <div className="container">
            <div className="section-heading centered-heading">
              <div>
                <p className="eyebrow">La parole à la meute</p>
                <h2>Des humains heureux, des corgis encore plus.</h2>
              </div>
            </div>

            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.author}>
                  <div className="stars" aria-label="5 étoiles sur 5">
                    ★★★★★
                  </div>
                  <blockquote>“{review.text}”</blockquote>
                  <div className="review-author">
                    <span className="review-avatar" aria-hidden="true">
                      🐶
                    </span>
                    <div>
                      <strong>{review.author}</strong>
                      <small>{review.product}</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="container trust-grid">
            <div>
              <span aria-hidden="true">🚚</span>
              <strong>Livraison suivie</strong>
              <small>Une expédition claire et soignée</small>
            </div>
            <div>
              <span aria-hidden="true">↩️</span>
              <strong>Retours simplifiés</strong>
              <small>Une politique expliquée sans surprise</small>
            </div>
            <div>
              <span aria-hidden="true">🔒</span>
              <strong>Paiement sécurisé</strong>
              <small>Vos informations restent protégées</small>
            </div>
            <div>
              <span aria-hidden="true">💬</span>
              <strong>Service attentionné</strong>
              <small>Une vraie réponse à chaque question</small>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <p className="eyebrow">Questions fréquentes</p>
              <h2>Tout ce qu’il faut savoir avant de rejoindre la meute.</h2>
              <p>
                Cette première FAQ sera complétée avec les conditions réelles de
                livraison, de paiement et de retour avant l’ouverture.
              </p>
            </div>

            <div className="faq-list">
              {questions.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter-section" id="newsletter">
          <div className="container newsletter">
            <div>
              <p className="eyebrow eyebrow-light">Le courrier du corgi</p>
              <h2>Des nouveautés, des conseils et beaucoup de bonne humeur.</h2>
              <p>
                Inscrivez-vous pour être informé du lancement officiel de
                Coin.
              </p>
            </div>

            <form className="newsletter-form">
              <label className="sr-only" htmlFor="newsletter-email">
                Votre adresse e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="votre@email.fr"
                required
              />
              <button type="submit">Rejoindre la meute</button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}