const categoryDetails = {
  Accessoires: {
    benefits: [
      "Conception adaptée aux promenades quotidiennes",
      "Réglages simples pour améliorer le confort",
      "Matériaux sélectionnés pour résister à un usage régulier",
    ],
    features: [
      "Boucles et attaches faciles à manipuler",
      "Finitions douces au contact du chien",
      "Conception légère et confortable",
    ],
    care: [
      "Nettoyer à la main avec de l’eau tiède",
      "Utiliser un savon doux",
      "Laisser sécher naturellement à l’air libre",
    ],
  },

  Vêtements: {
    benefits: [
      "Coupe pensée pour laisser le chien bouger librement",
      "Matière souple et agréable à porter",
      "Style chaleureux inspiré de l’univers Maison Corgi",
    ],
    features: [
      "Tissu doux et extensible",
      "Ouverture confortable au niveau du cou",
      "Coupe adaptée aux petites pattes",
    ],
    care: [
      "Laver à basse température",
      "Ne pas utiliser de produit blanchissant",
      "Sécher à plat pour préserver la forme",
    ],
  },

  Jouets: {
    benefits: [
      "Encourage le jeu et l’activité",
      "Format adapté aux chiens de petit et moyen gabarit",
      "Texture agréable à attraper",
    ],
    features: [
      "Conception légère",
      "Forme facile à transporter",
      "Utilisation sous la surveillance d’un adulte",
    ],
    care: [
      "Nettoyer régulièrement avec un chiffon humide",
      "Vérifier l’état du jouet après chaque utilisation",
      "Retirer le produit s’il présente des signes d’usure",
    ],
  },

  "Maison & déco": {
    benefits: [
      "Apporte confort et douceur à la maison",
      "Design élégant facile à intégrer dans un intérieur",
      "Produit pensé pour les longues siestes",
    ],
    features: [
      "Surface douce au toucher",
      "Conception stable",
      "Style chaleureux et intemporel",
    ],
    care: [
      "Retirer régulièrement les poils avec une brosse douce",
      "Suivre les instructions de lavage de l’étiquette",
      "Laisser sécher complètement avant réutilisation",
    ],
  },

  Cadeaux: {
    benefits: [
      "Une idée originale pour les passionnés de corgis",
      "Illustration exclusive Maison Corgi",
      "Objet utile et décoratif",
    ],
    features: [
      "Design créé dans l’univers de la marque",
      "Finitions soignées",
      "Emballage adapté pour offrir",
    ],
    care: [
      "Nettoyer avec un produit non abrasif",
      "Éviter les chocs importants",
      "Conserver dans un endroit sec",
    ],
  },

  "Collection premium": {
    benefits: [
      "Produit signature aux finitions particulièrement soignées",
      "Matériaux sélectionnés pour leur qualité",
      "Design exclusif Maison Corgi",
    ],
    features: [
      "Fabrication fictive en petite série",
      "Présentation premium",
      "Conception durable et élégante",
    ],
    care: [
      "Nettoyer délicatement",
      "Éviter les produits chimiques agressifs",
      "Conserver à l’abri de l’humidité",
    ],
  },
};

const descriptions = {
  "harnais-nuage":
    "Le Harnais Nuage a été imaginé pour accompagner les promenades quotidiennes tout en apportant un maintien confortable. Sa forme enveloppante répartit la pression autour du poitrail et laisse les épaules libres de leurs mouvements.",

  "laisse-caramel":
    "La Laisse Caramel associe une prise en main confortable à une esthétique chaleureuse. Sa poignée rembourrée et son mousqueton renforcé en font un accessoire pratique pour les sorties quotidiennes.",

  "bandana-belle-truffe":
    "Le Bandana Belle Truffe ajoute une touche joyeuse et élégante à toutes les promenades. Léger et agréable à porter, il s’installe simplement autour du cou.",

  "pull-petit-renard":
    "Le Pull Petit Renard aide à protéger votre compagnon pendant les promenades fraîches. Sa matière souple accompagne les mouvements sans gêner les petites pattes.",

  "peluche-biscuit":
    "La Peluche Biscuit est une petite compagne de jeu douce et amusante. Son format facile à saisir convient parfaitement aux moments de jeu calme et aux séances de câlins.",

  "balle-rebond-royal":
    "La Balle Rebond Royal transforme les séances de jeu en véritables courses pleines de surprises. Sa forme et sa texture produisent des rebonds variés qui stimulent la curiosité.",

  "coussin-petit-roi":
    "Le Coussin Petit Roi crée un espace de repos rassurant avec ses rebords confortables et son centre moelleux. Il accompagne aussi bien les siestes rapides que les longues nuits.",

  "plaid-sieste-royale":
    "Le Plaid Sieste Royale apporte une couche de douceur supplémentaire sur le canapé, dans le panier ou pendant les déplacements. Il protège également les surfaces contre les poils.",

  "mug-matin-corgi":
    "Le Mug Matin Corgi accompagne les cafés, thés et chocolats chauds avec une illustration joyeuse. Son design doux et chaleureux en fait un cadeau idéal pour les passionnés.",

  "tote-bag-grandes-oreilles":
    "Le Tote Bag Grandes Oreilles permet d’emporter ses affaires tout en affichant fièrement son amour des corgis. Son coton épais convient aux petites courses et aux sorties quotidiennes.",

  "gamelle-atelier":
    "La Gamelle Atelier associe stabilité, simplicité et esthétique. Son poids limite les déplacements pendant les repas tandis que sa surface lisse facilite le nettoyage.",

  "coffret-maison-corgi":
    "Le Coffret Maison Corgi réunit plusieurs essentiels dans une présentation premium. Il constitue une idée cadeau complète pour accueillir un nouveau compagnon ou faire plaisir à un passionné.",
};

const fallbackDetails = {
  benefits: [
    "Produit sélectionné dans l’univers Maison Corgi",
    "Design chaleureux et fonctionnel",
    "Pensé pour une utilisation quotidienne",
  ],
  features: [
    "Finitions soignées",
    "Conception pratique",
    "Produit de démonstration",
  ],
  care: [
    "Nettoyer délicatement",
    "Vérifier régulièrement l’état du produit",
    "Respecter les instructions présentes sur l’étiquette",
  ],
};

export function getProductDetails(product) {
  const template =
    categoryDetails[product.category] ?? fallbackDetails;

  return {
    longDescription:
      descriptions[product.slug] ??
      `${product.short} Ce produit a été sélectionné pour compléter l’univers chaleureux et pratique de Maison Corgi.`,

    benefits: template.benefits,

    features: [
      `Tailles disponibles : ${product.sizes.join(", ")}`,
      `Coloris disponibles : ${product.colors.join(", ")}`,
      ...template.features,
    ],

    care: template.care,
  };
}