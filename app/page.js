import Link from "next/link";
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
  return (
    <svg
      className="corgi-illustration"
      viewBox="0 0 520 430"
      role="img"
      aria-label="Illustration souriante d’un corgi"
    >
      <ellipse cx="265" cy="384" rx="165" ry="23" fill="#c77b4530" />

      <path
        d="M155 151 L107 51 Q101 28 123 39 L202 102 Z"
        fill="#ba682f"
      />
      <path
        d="M365 151 L413 51 Q419 28 397 39 L318 102 Z"
        fill="#ba682f"
      />

      <path
        d="M143 127 L120 67 L181 111 Z"
        fill="#f2b28a"
      />
      <path
        d="M377 127 L400 67 L339 111 Z"
        fill="#f2b28a"
      />

      <path
        d="M137 153
           Q158 90 260 86
           Q362 90 383 153
           Q409 230 371 300
           Q332 364 260 364
           Q188 364 149 300
           Q111 230 137 153Z"
        fill="#d77b38"
      />

      <path
        d="M194 105
           Q226 87 260 87
           Q294 87 326 105
           Q304 136 260 153
           Q216 136 194 105Z"
        fill="#fff8ed"
      />

      <path
        d="M167 247
           Q183 184 228 177
           Q260 170 292 177
           Q337 184 353 247
           Q346 329 260 349
           Q174 329 167 247Z"
        fill="#fff8ed"
      />

      <ellipse cx="205" cy="205" rx="19" ry="24" fill="#3f2b22" />
      <ellipse cx="315" cy="205" rx="19" ry="24" fill="#3f2b22" />
      <circle cx="199" cy="198" r="6" fill="#ffffff" />
      <circle cx="309" cy="198" r="6" fill="#ffffff" />

      <ellipse cx="260" cy="245" rx="30" ry="22" fill="#3f2b22" />

      <path
        d="M260 265 Q238 291 213 273"
        fill="none"
        stroke="#3f2b22"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M260 265 Q282 291 307 273"
        fill="none"
        stroke="#3f2b22"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M240 287 Q260 314 280 287 Q275 326 260 332 Q245 326 240 287Z"
        fill="#e58b8b"
      />

      <circle cx="165" cy="248" r="17" fill="#ef9a8090" />
      <circle cx="355" cy="248" r="17" fill="#ef9a8090" />

      <path
        d="M178 345 Q132 352 119 379 Q161 390 205 367Z"
        fill="#d77b38"
      />
      <path
        d="M342 345 Q388 352 401 379 Q359 390 315 367Z"
        fill="#d77b38"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div className="announcement">
        Livraison offerte dès 59 € · Retours sous 30 jours · Paiement sécurisé
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#accueil" aria-label="Maison Corgi, accueil">
            <span className="logo-mark">MC</span>
            <span>
              Maison <strong>Corgi</strong>
            </span>
          </a>

          <nav className="main-nav" aria-label="Navigation principale">
            <Link href="/boutique">Boutique</Link>
            <Link href="#categories">Catégories</Link>
            <Link href="#guide">Guide corgi</Link>
            <Link href="#avis">Avis</Link>
            <Link href="#faq">FAQ</Link>
          </nav>

          <Link className="button" href="/boutique">
            Découvrir la collection
            </Link>
          
        </div>
      </header>

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
               
                <Link className="button button-secondary" href="/guide">
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
                  <span>♡</span>
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
                <h2>Explorez la Maison Corgi</h2>
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
                <p className="eyebrow">Pourquoi Maison Corgi ?</p>
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
                Maison Corgi.
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

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="logo footer-logo" href="#accueil">
              <span className="logo-mark">MC</span>
              <span>
                Maison <strong>Corgi</strong>
              </span>
            </a>
            <p>
              La maison en ligne des corgis heureux et des humains complètement
              conquis.
            </p>
          </div>

          <div>
            <h3>Boutique</h3>
            <a href="#collection">Produits vedettes</a>
            <a href="#categories">Catégories</a>
            <a href="#newsletter">Nouveautés</a>
          </div>

          <div>
            <h3>Découvrir</h3>
            <a href="#guide">Guide corgi</a>
            <a href="#avis">Avis clients</a>
            <a href="#faq">FAQ</a>
          </div>

          <div>
            <h3>Informations</h3>
            <a href="#faq">Livraison et retours</a>
            <a href="#faq">Paiement sécurisé</a>
            <a href="#newsletter">Contact</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Maison Corgi. Projet de démonstration.</span>
          <span>Fait avec amour et quelques friandises.</span>
        </div>
      </footer>
    </>
  );
}