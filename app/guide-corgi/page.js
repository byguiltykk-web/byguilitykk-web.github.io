import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Guide corgi",
  description:
    "Découvrez le caractère, les besoins, l’entretien et les accessoires recommandés pour accompagner votre corgi.",
};

const overviewCards = [
  {
    icon: "🧠",
    title: "Intelligent",
    text: "Le corgi apprend vite et apprécie les activités qui sollicitent sa réflexion.",
  },
  {
    icon: "⚡",
    title: "Énergique",
    text: "Malgré ses petites pattes, il a besoin de sorties, de jeux et d’activité quotidienne.",
  },
  {
    icon: "🤎",
    title: "Très attaché",
    text: "Il recherche généralement la présence de ses humains et aime participer à la vie de famille.",
  },
  {
    icon: "🗣️",
    title: "Expressif",
    text: "Postures, regards et vocalises font souvent partie de sa manière de communiquer.",
  },
];

const dailyNeeds = [
  {
    number: "01",
    title: "Des promenades régulières",
    text: "Prévoyez plusieurs sorties adaptées à l’âge, à la santé et au niveau d’énergie de votre chien.",
  },
  {
    number: "02",
    title: "Des jeux intelligents",
    text: "Les tapis de fouille, jouets distributeurs et exercices simples permettent de varier les activités.",
  },
  {
    number: "03",
    title: "Des temps de repos",
    text: "Un couchage calme, stable et confortable aide le chien à récupérer après les activités.",
  },
  {
    number: "04",
    title: "Une routine cohérente",
    text: "Des horaires relativement réguliers facilitent les apprentissages et rassurent le chien.",
  },
];

const recommendedAccessories = [
  "Un harnais correctement ajusté",
  "Une laisse confortable et résistante",
  "Un couchage avec un bon soutien",
  "Des jouets adaptés à son gabarit",
  "Une brosse adaptée à son type de pelage",
  "Une gamelle stable et facile à nettoyer",
];

export default function GuideCorgiPage() {
  return (
    <>
      <SiteHeader />

      <main className="editorial-page">
        <section className="content-hero guide-content-hero">
          <div className="container content-hero-grid">
            <div>
              <p className="eyebrow">
                Le guide CoinCorgi
              </p>

              <h1>
                Comprendre son corgi pour mieux vivre
                ensemble.
              </h1>

              <p>
                Caractère, activité, alimentation, pelage et
                accessoires : découvrez les bases pour
                accompagner votre compagnon avec attention.
              </p>

              <div className="content-hero-actions">
                <a className="button" href="#caractere">
                  Commencer le guide
                </a>

                <Link
                  className="button button-secondary"
                  href="/boutique"
                >
                  Voir les accessoires
                </Link>
              </div>
            </div>

            <div className="content-hero-visual">
              <span aria-hidden="true">🐶</span>

              <div>
                <small>Le compagnon au grand caractère</small>
                <strong>
                  Petites pattes, grandes aventures.
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section
          className="editorial-section"
          id="caractere"
        >
          <div className="container">
            <div className="editorial-heading">
              <div>
                <p className="eyebrow">
                  Son caractère
                </p>

                <h2>
                  Un chien vif, proche de sa famille et
                  plein de personnalité.
                </h2>
              </div>

              <p>
                Chaque chien est unique, mais le corgi est
                souvent décrit comme curieux, volontaire et
                attentif à ce qui se passe autour de lui.
                Une éducation cohérente et positive l’aide à
                développer de bonnes habitudes.
              </p>
            </div>

            <div className="content-card-grid content-card-grid-four">
              {overviewCards.map((card) => (
                <article
                  className="content-card"
                  key={card.title}
                >
                  <span aria-hidden="true">
                    {card.icon}
                  </span>

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section-soft">
          <div className="container guide-two-columns">
            <div className="guide-story-card">
              <p className="eyebrow">
                Un peu d’histoire
              </p>

              <h2>
                Un chien historiquement actif.
              </h2>

              <p>
                Les différentes variétés de corgis ont été
                développées au pays de Galles. Leur histoire
                est liée au travail, à la conduite des
                troupeaux et à la vie quotidienne dans les
                fermes.
              </p>

              <p>
                Cette origine aide à comprendre leur énergie,
                leur attention aux mouvements et leur envie
                de participer aux activités de la famille.
              </p>
            </div>

            <div className="guide-advice-panel">
              <span aria-hidden="true">💡</span>

              <div>
                <strong>À retenir</strong>

                <p>
                  Une petite taille ne signifie pas de petits
                  besoins. L’activité doit simplement être
                  progressive et adaptée à chaque chien.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="container">
            <div className="editorial-heading">
              <div>
                <p className="eyebrow">
                  Au quotidien
                </p>

                <h2>
                  Les quatre piliers d’une journée
                  équilibrée.
                </h2>
              </div>

              <p>
                Les besoins varient selon l’âge, la santé,
                la personnalité et le niveau d’activité.
                Observez votre chien et adaptez la routine.
              </p>
            </div>

            <div className="daily-needs-grid">
              {dailyNeeds.map((need) => (
                <article
                  className="daily-need-card"
                  key={need.number}
                >
                  <span>{need.number}</span>

                  <div>
                    <h3>{need.title}</h3>
                    <p>{need.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-dark-section">
          <div className="container guide-care-grid">
            <div>
              <p className="eyebrow eyebrow-light">
                Entretien du pelage
              </p>

              <h2>
                Prévoir une routine simple et régulière.
              </h2>

              <p>
                Le brossage permet de retirer les poils morts,
                de vérifier la peau et de réduire la quantité
                de poils dispersés dans la maison.
              </p>
            </div>

            <div className="guide-checklist">
              <div>
                <span>✓</span>
                Brosser doucement sans irriter la peau
              </div>

              <div>
                <span>✓</span>
                Vérifier régulièrement les oreilles et les
                pattes
              </div>

              <div>
                <span>✓</span>
                Utiliser des produits destinés aux chiens
              </div>

              <div>
                <span>✓</span>
                Demander conseil à un professionnel en cas de
                doute
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="container guide-two-columns">
            <div>
              <p className="eyebrow">
                Alimentation
              </p>

              <h2>
                Une ration adaptée à chaque individu.
              </h2>

              <p className="editorial-body-text">
                La quantité dépend notamment de l’âge, du
                poids, de l’activité, de l’état de santé et
                de l’aliment choisi. Les recommandations
                générales ne remplacent pas l’avis d’un
                vétérinaire.
              </p>

              <div className="guide-warning">
                <span aria-hidden="true">⚠️</span>

                <p>
                  Les changements alimentaires doivent être
                  progressifs. En cas de problème digestif,
                  de changement de poids ou d’allergie
                  suspectée, consultez un vétérinaire.
                </p>
              </div>
            </div>

            <div className="guide-accessory-card">
              <p className="eyebrow">
                Les essentiels
              </p>

              <h3>
                Accessoires recommandés
              </h3>

              <ul>
                {recommendedAccessories.map((item) => (
                  <li key={item}>
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link className="button" href="/boutique">
                Explorer la boutique
              </Link>
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section-soft">
          <div className="container mistakes-section">
            <div>
              <p className="eyebrow">
                Erreurs à éviter
              </p>

              <h2>
                Quelques réflexes pour préserver son
                confort.
              </h2>
            </div>

            <div className="mistakes-grid">
              <article>
                <span>01</span>
                <h3>Ignorer la prise de poids</h3>
                <p>
                  Surveillez régulièrement la silhouette et
                  demandez conseil à un professionnel.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Choisir une taille au hasard</h3>
                <p>
                  Mesurez le chien avant d’acheter un harnais,
                  un vêtement ou un couchage.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Proposer toujours le même jeu</h3>
                <p>
                  Alternez activité physique, réflexion,
                  recherche et moments calmes.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}