// Bibliothèque de contenu verbatim — Nicolas Demagny, hypnothérapeute (Bordeaux)
// RÈGLE DE FIDÉLITÉ : ce fichier est la source unique de vérité pour tout texte
// affirmant ce que fait/promet Nicolas. Ne pas paraphraser les champs marqués VERBATIM.
// Les contenus marqués [À VALIDER] / [À INSÉRER] doivent rester visibles tels quels
// jusqu'à validation/fourniture par le client — ne jamais les remplacer par du contenu inventé.
// MAJ : relecture complète validée par le client (document Word retourné) — les mentions
// [À VALIDER] précédemment en place ont été levées sauf la charte éthique (articles 2 à 5)
// et l'hébergeur, toujours non fournis.

export const site = {
  name: "Nicolas Demagny",
  title: "Cabinet hypnose ericksonienne et thérapies brèves à Bordeaux",
  city: "Bordeaux",
  phone: "06 08 87 20 04",
  phoneHref: "tel:+33608872004",
  email: "nicodem33@gmail.com",
  address: {
    street: "22 rue Turenne",
    postalCode: "33000",
    city: "Bordeaux",
    country: "France",
  },
  hours: "Du lundi au vendredi, 9h30–19h30 (sur rendez-vous uniquement)",
  access: [
    "Tram D — Fondaudège Muséum (3 mn à pied)",
    "Tram C — Quinconces (9 mn à pied)",
    "Tram B — Gambetta (10 mn à pied)",
  ],
  siret: "798 015 327 00033",
  ape: "8690F — Activités de santé humaine non classées ailleurs",
  legalRepresentative: "M. Demagny Nicolas",
  hostNote: "[HÉBERGEUR À METTRE À JOUR SELON NOUVEL HÉBERGEMENT]",
} as const;

export const erickson = {
  unconscious:
    "Vous savez beaucoup plus de choses que vous savez que vous savez.",
  processes:
    "Ce que vous ne voyez pas, c'est que l'essentiel de votre vie est régi par des processus inconscients.",
  promise:
    "Et surtout, vous pouvez beaucoup plus que vous pensez que vous pouvez.",
} as const;

// §6.1 — Accroche accueil (VERBATIM)
export const introAccueil = `La vie en société, la confrontation à certaines situations, nos relations avec les autres […] peuvent aussi, parfois, être source de difficultés ou révéler des comportements que l'on peut vouloir corriger. Par l'hypnose, thérapie brève par excellence, vous allez pouvoir opérer en vous certains changements, résoudre rapidement certains problèmes ou certaines difficultés (sevrage tabagique, troubles du comportement alimentaire, phobies, stress, anxiété, traumatismes, améliorations de la confiance en soi, des performances sportives ou intellectuelles…) […] Tout simplement, tout naturellement, en apprenant à vous faire confiance et à faire confiance à votre inconscient, qui dispose de toutes les ressources nécessaires pour vous permettre de changer.`;


// §6.2 — L'hypnose & l'hypnothérapie (VERBATIM)
export const hypnosePage = {
  hypnose: `L'hypnose est un état particulier, un état modifié de conscience, qui se caractérise par une profonde relaxation, une concentration très ciblée et une suggestibilité accrue. Cet état modifié de conscience est le chemin direct vers l'inconscient. L'hypnose ericksonienne, issue de la pratique de Milton Erickson, se caractérise par une approche souple, indirecte et non dirigiste. C'est aussi une approche humaniste qui tend à rendre le client indépendant le plus rapidement possible, ne créant pas de lien de dépendance vis-à-vis du praticien. Cette pratique vous permettra de dépasser vos limites pour laisser s'exprimer vos ressources et vos potentialités.`,
  hypnotherapie: `L'hypnothérapie est l'utilisation de l'hypnose à des fins thérapeutiques, pour inciter l'inconscient à trouver ses propres solutions. Elle aide ainsi à modifier la façon dont on pense, dont on ressent les choses, et dont le corps réagit dans certaines situations. Elle peut apporter un large éventail de bienfaits, dans de nombreux domaines : développement personnel, hygiène de vie, contrôle des émotions, phobies, problèmes de santé…`,
} as const;

// §6.3 — Qui suis-je (VERBATIM)
export const bio = {
  paragraphs: [
    `Titulaire d'un DESS (Master 2) en Ressources humaines, après notamment des années d'expérience de management en entreprise, mon intérêt pour l'humain […] m'ont amené à changer de direction professionnelle pour me tourner vers l'accompagnement individualisé, en tant qu'hypnothérapeute à Bordeaux.`,
    `Installé depuis 2013 à Bordeaux, je fais aujourd'hui partie des hypnothérapeutes les plus expérimentés de la ville, avec plus de 10 000 séances réalisées. Maître praticien en hypnose, formateur pendant 3 ans au sein de l'I-HEC […], diplômé également en PNL […] et certifié master en hypnose par la NGH (National Guild of Hypnotists), je serai heureux de vous accompagner sur vos problématiques comportementales et émotionnelles.`,
    `Pour la neutralisation émotionnelle de certains traumatismes, mon approche par l'hypnose est complétée par des mouvements oculaires de désensibilisation de type EMDR.`,
    `Je remercie bien évidemment le Docteur Christian GUAY, psychiatre, qui m'a fait découvrir l'hypnose ericksonienne au milieu des années 90 et avec lequel nous avons étroitement collaboré, notamment pour l'élaboration des techniques de sevrage tabagique et d'approche des troubles du comportement alimentaire.`,
  ],
  thanks: "Arthapignet & Dr Christian Guay",
} as const;

// Éthique / Déontologie — à intégrer intégralement sur la page Qui suis-je.
// [À VALIDER AVEC LE CLIENT] : texte complet des 5 articles toujours non fourni ;
// seul l'Art. 1 (complémentarité) est explicitement spécifié et doit être verbatim/fidèle.
export const ethique = {
  intro: "Charte éthique et déontologique",
  article1: `Article 1 — L'hypnose n'a pas vocation à se substituer aux professionnels de santé. Elle s'inscrit en complémentarité d'un suivi médical ou psychologique lorsque celui-ci est nécessaire.`,
  note: "[ARTICLES 2 À 5 — TEXTE COMPLET À VALIDER AVEC LE CLIENT]",
} as const;

// §4.5 — Domaines d'intervention (intro VERBATIM + liste exacte, ne pas étendre)
export const domainesIntro = `L'hypnose ericksonienne est une thérapie brève orientée solution, pour résoudre une difficulté précise en quelques séances seulement.`;

export const domaines = [
  {
    n: "01",
    slug: "sevrage-tabagique",
    title: "Sevrage tabagique",
    summary: `Avec cette méthode développée avec le Dr Christian Guay, psychiatre ayant pratiqué l'hypnose pendant une trentaine d'années, l'arrêt du tabac se fait le plus souvent en une seule séance — simple, efficace et confortable.`,
    items: [],
    priority: true,
    showOnHome: true,
  },
  {
    n: "02",
    slug: "hygiene-de-vie",
    title: "Hygiène de vie",
    summary: `Troubles du comportement alimentaire, alcool, troubles du sommeil, onychophagie : l'hypnose ericksonienne agit sur les automatismes inconscients à l'origine de ces habitudes.`,
    items: [
      "Troubles du comportement alimentaire",
      "Alcool",
      "Troubles du sommeil",
      "Onychophagie (ongles rongés)",
    ],
    priority: false,
    showOnHome: true,
  },
  {
    n: "03",
    slug: "gestion-des-emotions",
    title: "Gestion des émotions",
    summary: `Confiance en soi, estime de soi, stress, anxiété, performances, deuil : l'hypnose mobilise vos ressources inconscientes pour transformer durablement la façon dont vous vivez ces émotions.`,
    items: [
      "Confiance en soi",
      "Estime de soi",
      "Stress, nervosité, anxiété",
      "Amélioration des performances intellectuelles et sportives",
      "Deuil",
    ],
    priority: false,
    showOnHome: true,
  },
  {
    n: "04",
    slug: "traumatismes",
    title: "Traumatismes",
    summary:
      "Pour la neutralisation émotionnelle de certains traumatismes, l'hypnose ericksonienne est complétée par des mouvements oculaires de désensibilisation de type EMDR.",
    items: [],
    priority: false,
    showOnHome: true,
  },
  {
    n: "05",
    slug: "peurs-phobies",
    title: "Peurs, phobies…",
    summary: `Peur de l'avion, du vide, des animaux… l'hypnose ericksonienne déconditionne en douceur le réflexe à l'origine de la phobie, sans confrontation brutale.`,
    items: [],
    priority: false,
    showOnHome: true,
  },
  {
    n: "06",
    slug: "sevrage-cannabis-cbd",
    title: "Sevrage cannabis & CBD",
    summary: `Consommation quotidienne par automatisme, difficulté à arrêter seul : l'hypnose ericksonienne agit sur l'habitude inconsciente à l'origine de la consommation de cannabis.`,
    items: [],
    priority: false,
    showOnHome: false,
  },
] as const;

// Accueil — "Comment se déroule une séance", version condensée en 3 temps
// (synthèse des 5 étapes de `deroule`, à valider avec le praticien)
export const commentSeance = [
  {
    n: "01",
    title: "Premier échange & objectif",
    text: "Un temps d'écoute pour comprendre votre situation et clarifier ensemble l'objectif de l'accompagnement.",
  },
  {
    n: "02",
    title: "Séance d'hypnose ericksonienne",
    text: "Installation en douceur de l'état hypnotique, puis travail avec l'inconscient — métaphores, suggestions, et mouvements oculaires type EMDR en cas de traumatisme.",
  },
  {
    n: "03",
    title: "Ancrage & autonomie",
    text: "Consolidation des changements. Le plus souvent en 1 à 4 séances, sans lien de dépendance au praticien.",
  },
] as const;

// Accueil — section "Pourquoi l'hypnose ericksonienne" (checklist)
// Points fondés sur le contenu vérifié : bio, éthique, repères de confiance.
export const pourquoiPoints = [
  {
    title: "1 à 4 séances suffisent",
    text: "Thérapie brève par excellence : une à quatre séances suffisent le plus souvent pour atteindre votre objectif.",
  },
  {
    title: "Une approche souple, non dirigiste",
    text: "L'hypnose ericksonienne est une approche humaniste qui vous rend rapidement autonome, sans lien de dépendance au praticien.",
  },
  {
    title: "Un praticien expérimenté et certifié",
    text: "Installé à Bordeaux depuis 2013, parmi les hypnothérapeutes les plus expérimentés de la ville — plus de 10 000 séances réalisées. Maître praticien en hypnose certifié par la NGH, formé également à la PNL et à l'EMDR.",
  },
  {
    title: "Complémentaire au suivi médical",
    text: "L'hypnose n'a pas vocation à se substituer aux professionnels de santé ; elle s'inscrit en complémentarité d'un suivi médical ou psychologique lorsque celui-ci est nécessaire.",
  },
] as const;

// Accueil — FAQ (réponses reprises verbatim du contenu vérifié, relu et validé par le client)
export const faqAccueil = [
  {
    question: "Combien de séances sont nécessaires ?",
    answer:
      "Le plus souvent, une à quatre séances suffisent selon la problématique — et généralement une seule séance pour le sevrage tabagique.",
  },
  {
    question: "Vais-je rester conscient pendant la séance ?",
    answer:
      "Oui. L'hypnose ericksonienne est un état de conscience modifié, pas un sommeil ni une perte de contrôle : vous restez maître de vous-même pendant toute la séance.",
  },
  {
    question: "L'hypnose remplace-t-elle un suivi médical ?",
    answer:
      "Non. L'hypnose n'a pas vocation à se substituer aux professionnels de santé ; elle s'inscrit en complémentarité d'un suivi médical ou psychologique lorsque celui-ci est nécessaire.",
  },
  {
    question: "Quels sont les tarifs ?",
    answer:
      "100 € pour les sevrages (tabac, vapote, cannabis), 70 € pour les autres problématiques émotionnelles et comportementales. Certaines mutuelles peuvent prendre en charge tout ou partie des séances.",
  },
  {
    question: "Faut-il croire à l'hypnose pour que ça fonctionne ?",
    answer:
      "Non. L'hypnose ericksonienne ne repose pas sur la croyance : c'est un état naturel que chacun expérimente déjà au quotidien (par exemple en conduisant sans y penser). Aucune adhésion particulière n'est nécessaire, seulement une implication dans l'échange.",
  },
  {
    question: "Y a-t-il des situations où l'hypnose n'est pas recommandée ?",
    answer:
      "L'hypnose ericksonienne s'adresse à la grande majorité des personnes, mais elle s'inscrit toujours en complémentarité d'un suivi médical ou psychologique lorsque celui-ci est nécessaire, et jamais en remplacement de celui-ci. L'hypnose n'est pas conseillée pour certaines psychopathologies lourdes (schizophrénie, trouble bipolaire non stabilisé…).",
  },
] as const;

// §4.7 — Repères de confiance factuels (PAS de statistiques inventées)
export const reperesConfiance = [
  { value: "13", suffix: "+", label: "années de pratique en cabinet" },
  { value: "10 000", suffix: "+", label: "séances réalisées" },
  { value: "2013", suffix: "", label: "Installé à Bordeaux" },
] as const;

// §4.8 — Déroulé d'une séance [À VALIDER AVEC LE CLIENT]
export const deroule = [
  {
    n: "01",
    title: "Premier échange & définition de votre objectif",
    text: "[À VALIDER AVEC LE CLIENT] Un temps d'écoute pour comprendre votre situation et clarifier ensemble l'objectif de l'accompagnement.",
  },
  {
    n: "02",
    title: "Installation de l'état hypnotique",
    text: "[À VALIDER AVEC LE CLIENT] Transe ericksonienne, en douceur — approche souple, indirecte et non dirigiste.",
  },
  {
    n: "03",
    title: "Travail avec l'inconscient",
    text: "[À VALIDER AVEC LE CLIENT] Métaphores, suggestions ; mouvements oculaires de désensibilisation type EMDR en cas de traumatisme.",
  },
  {
    n: "04",
    title: "Ancrage des changements",
    text: "[À VALIDER AVEC LE CLIENT] Consolidation des ressources mobilisées pendant la séance.",
  },
  {
    n: "05",
    title: "Vers l'autonomie",
    text: "[À VALIDER AVEC LE CLIENT] Le plus souvent en 1 à 3 séances, sans lien de dépendance au praticien.",
  },
] as const;

// §6.5 — Tarifs (VERBATIM)
export const tarifs = {
  sevrages: { label: "Sevrages (tabac, vapote, cannabis, CBD)", price: "100 €" },
  autres: {
    label: "Autres problématiques émotionnelles et comportementales",
    price: "70 €",
  },
  note: `Certaines mutuelles peuvent prendre en charge tout ou partie des séances d'hypnose au titre des thérapies alternatives ou des médecines douces — renseignez-vous auprès de la vôtre.\nLe paiement est possible par CB, chèque ou espèces.`,
} as const;

// §6.6 — Contact (VERBATIM)
export const contact = {
  note: "Consultations sur rendez-vous uniquement",
  formFields: ["Nom", "Téléphone", "Objet", "Message"],
} as const;

// Avis Google — placeholders. Ne jamais remplacer par un témoignage fabriqué.
export const avisPlaceholder = {
  badge: "Avis vérifié — Source : Google",
  placeholderName: "[NOM — AVIS GOOGLE RÉEL À INSÉRER]",
  placeholderText: "[AVIS GOOGLE RÉEL — À INSÉRER]",
} as const;

// Contenu des pages-service, relu et corrigé par le client (document Word retourné).
// Rédigé strictement dans le périmètre déclaré par Nicolas (§4.5/§6.4) : ne jamais
// élargir sa liste de domaines, ne jamais promettre de "guérison", ton complémentaire
// au médical sur TCA / alcool / traumatismes.
export interface ServicePageContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  situations: string[];
  pourquoi: string;
  comment: string;
  seances: string;
  faq: { question: string; answer: string }[];
}

export const servicePages: Record<string, ServicePageContent> = {
  "sevrage-tabagique": {
    slug: "sevrage-tabagique",
    metaTitle: "Arrêter de fumer par l'hypnose à Bordeaux — N. Demagny",
    metaDescription:
      "Arrêtez de fumer par l'hypnose ericksonienne à Bordeaux, avec la méthode développée avec le Dr Christian Guay : le plus souvent en une seule séance.",
    heroTitle: "Sevrage tabagique et vapotage",
    heroImage: "/images/domaine-sevrage-tabagique.jpg",
    heroSubtitle:
      "Avec cette approche développée avec le Dr Christian Guay, psychiatre qui a pratiqué l'hypnose pendant une trentaine d'années, vous pouvez le plus souvent arrêter de fumer en une seule séance, d'une façon simple, efficace et confortable.",
    situations: [
      "Vous avez déjà essayé d'arrêter par la volonté seule, sans résultat durable",
      "Vous avez peur de la prise de poids ou du manque",
      "Vous fumez par automatisme, sans même en avoir toujours envie",
      "Vous cherchez une méthode rapide, sans substituts ni médicaments",
    ],
    pourquoi:
      "La cigarette s'installe souvent comme un automatisme inconscient plus que comme un choix conscient — ce qui explique pourquoi la seule volonté suffit rarement à elle seule à le déconstruire durablement.",
    comment:
      "L'hypnose ericksonienne s'adresse directement à l'inconscient pour modifier ce conditionnement, sans lutte ni privation ressentie comme telle.",
    seances:
      "Le plus souvent en une seule séance, d'une façon simple, efficace et confortable.",
    faq: [
      {
        question: "Combien de séances sont nécessaires pour arrêter de fumer ?",
        answer:
          "Le plus souvent une seule séance suffit, grâce à l'approche développée avec le Dr Christian Guay.",
      },
      {
        question: "L'hypnose pour arrêter de fumer fonctionne-t-elle pour tout le monde ?",
        answer:
          "Mon expérience de plus de 3000 personnes accompagnées pour le sevrage tabagique montre que près de 4 personnes sur 5 arrêtent de fumer en une seule séance.",
      },
      {
        question: "Vais-je rester conscient pendant la séance ?",
        answer:
          "Oui. L'hypnose ericksonienne est un état de conscience modifié, pas un sommeil ni une perte de contrôle : vous restez maître de vous-même pendant toute la séance.",
      },
      {
        question: "Le sevrage par hypnose est-il stressant ou douloureux ?",
        answer:
          "Absolument pas. Au-delà de l'échange préalable qui vise à prendre conscience des mécanismes de la dépendance propres à chacun, la séance se déroule dans un état de relaxation profonde, sans manque ni sensation de privation imposée ensuite : l'objectif est justement d'éviter la lutte associée aux méthodes classiques.",
      },
      {
        question: "Risque-t-on de reprendre du poids après une hypnose anti-tabac ?",
        answer:
          "L'objectif de la séance et de l'accompagnement est justement d'éviter ensuite des tensions et des conséquences inappropriées comme le grignotage, la compensation par la nourriture, pour rendre l'arrêt plutôt facile, confortable et sans efforts importants dans la plupart des cas.",
      },
    ],
  },
  "hygiene-de-vie": {
    slug: "hygiene-de-vie",
    metaTitle: "Hypnose hygiène de vie à Bordeaux — TCA, alcool, sommeil",
    metaDescription:
      "Hypnothérapie à Bordeaux pour les troubles du comportement alimentaire, l'alcool, le sommeil et l'onychophagie. Approche complémentaire au suivi médical.",
    heroTitle: "Hygiène de vie",
    heroImage: "/images/domaine-hygiene-de-vie.jpg",
    heroSubtitle:
      "Troubles du comportement alimentaire, alcool, troubles du sommeil, onychophagie (ongles rongés)…",
    situations: [
      "Une alimentation émotionnelle difficile à réguler",
      "Une consommation d'alcool que vous souhaitez mieux maîtriser",
      "Des nuits agitées ou un endormissement difficile",
      "Une habitude comme se ronger les ongles ou se rogner les peaux, installée depuis longtemps",
    ],
    pourquoi:
      "Ces comportements répétés s'ancrent souvent au niveau inconscient, en réponse à une tension, une émotion ou une habitude ancienne.",
    comment:
      "L'hypnose ericksonienne fait collaborer le conscient et l'inconscient pour transformer ces automatismes. Pour les troubles du comportement alimentaire cliniques et les problématiques d'alcool très lourdes, cette approche s'inscrit en complément d'un suivi médical, et non en remplacement de celui-ci.",
    seances: "Une à quatre séances peuvent suffire le plus souvent.",
    faq: [
      {
        question: "L'hypnose remplace-t-elle un suivi médical pour un TCA ou un problème d'alcool ?",
        answer:
          "Non. L'hypnose n'a pas vocation à se substituer aux professionnels de santé ; elle s'inscrit en complémentarité d'un suivi médical ou psychologique lorsque celui-ci est nécessaire.",
      },
      {
        question: "Combien de séances pour arrêter de se ronger les ongles ?",
        answer:
          "Une à deux séances peuvent suffire le plus souvent, selon votre situation.",
      },
      {
        question: "L'hypnose peut-elle remplacer un suivi pour un problème d'alcool ou un TCA ?",
        answer:
          "Non. Comme pour tout trouble clinique, l'hypnose s'inscrit le plus souvent en complémentarité d'un suivi médical ou psychologique lorsque celui-ci est nécessaire, jamais en remplacement.",
      },
      {
        question: "L'hypnose peut-elle aider à mieux dormir sans médicament ?",
        answer:
          "L'hypnose ericksonienne peut agir sur les schémas inconscients à l'origine de réveils nocturnes ou de difficultés d'endormissement.",
      },
    ],
  },
  "gestion-des-emotions": {
    slug: "gestion-des-emotions",
    metaTitle: "Hypnose confiance en soi et stress à Bordeaux",
    metaDescription:
      "Hypnose ericksonienne à Bordeaux pour la confiance en soi, le stress, l'anxiété, les performances et le deuil. Deux à quatre séances suffisent le plus souvent.",
    heroTitle: "Gestion des émotions",
    heroImage: "/images/domaine-gestion-emotions.jpg",
    heroSubtitle:
      "Confiance en soi, estime de soi, stress, nervosité, anxiété, amélioration des performances intellectuelles et sportives, deuil…",
    situations: [
      "Un manque de confiance qui freine vos projets",
      "Un stress ou une anxiété envahissants au quotidien",
      "Des performances sportives ou intellectuelles perturbées par vos émotions",
      "Un deuil dont vous portez encore le poids",
    ],
    pourquoi:
      "Ces ressentis s'enracinent souvent dans des schémas inconscients construits avec le temps, davantage que dans un manque de volonté.",
    comment:
      "L'hypnose ericksonienne aide à mobiliser vos propres ressources inconscientes pour modifier la façon dont vous pensez, ressentez et réagissez face à ces situations.",
    seances: "Deux à quatre séances peuvent suffire le plus souvent.",
    faq: [
      {
        question: "L'hypnose peut-elle aider en cas de deuil ?",
        answer:
          "Au-delà de l'échange qui précède la séance, l'hypnose aide significativement à rendre l'absence de la personne décédée plus acceptable, tout en respectant le processus de deuil.",
      },
      {
        question: "L'hypnose peut-elle aider avant un examen ou un entretien important ?",
        answer:
          "Oui, c'est l'un des usages fréquents de l'hypnose ericksonienne pour la gestion des émotions : elle permet de travailler sur le trac et la confiance en soi en amont d'un moment clé.",
      },
      {
        question: "Combien de séances pour retrouver confiance en soi ?",
        answer:
          "Une à trois séances peuvent suffire le plus souvent, selon la situation et l'objectif fixé ensemble lors du premier échange.",
      },
      {
        question: "L'hypnose fonctionne-t-elle sur un stress chronique ou installé depuis longtemps ?",
        answer:
          "L'hypnose ericksonienne travaille sur les schémas inconscients à l'origine du stress, même lorsqu'il est ancien ; le nombre de séances peut alors être un peu plus élevé.",
      },
      {
        question: "Faut-il être particulièrement réceptif pour que l'hypnose agisse sur les émotions ?",
        answer:
          "Non, la réceptivité varie d'une personne à l'autre mais n'empêche pas le travail thérapeutique ; le praticien adapte son approche à chacun.",
      },
    ],
  },
  traumatismes: {
    slug: "traumatismes",
    metaTitle: "Hypnose et mouvements oculaires type EMDR pour les traumatismes à Bordeaux",
    metaDescription:
      "Accompagnement des traumatismes à Bordeaux par hypnose ericksonienne complétée par l'EMDR, en complément d'un suivi médical si nécessaire.",
    heroTitle: "Traumatismes",
    heroImage: "/images/domaine-traumatismes.jpg",
    heroSubtitle:
      "Approche complétée par des mouvements oculaires de désensibilisation de type EMDR.",
    situations: [
      "Un souvenir difficile qui continue de vous affecter aujourd'hui",
      "Des réactions émotionnelles disproportionnées face à certains déclencheurs",
      "Des dates ou des lieux qui génèrent une lourdeur émotionnelle récurrente",
    ],
    pourquoi:
      "Un événement marquant peut rester « actif » dans le système nerveux bien après les faits, indépendamment de la volonté consciente : le stress post-traumatique.",
    comment:
      "Pour la neutralisation émotionnelle de certains traumatismes, l'approche par l'hypnose est complétée par des mouvements oculaires de désensibilisation de type EMDR. Cette approche s'inscrit en complémentarité d'un suivi médical ou psychologique lorsque celui-ci est nécessaire — elle n'a pas vocation à s'y substituer.",
    seances:
      "Le nombre de séances dépend de chaque situation ; un premier échange permet d'en discuter.",
    faq: [
      {
        question: "L'EMDR et l'hypnose sont-ils compatibles ?",
        answer:
          "Oui. Nicolas Demagny complète son approche par l'hypnose avec des mouvements oculaires de désensibilisation de type EMDR pour la neutralisation émotionnelle de certains traumatismes.",
      },
      {
        question: "Cet accompagnement remplace-t-il un suivi psychologique ?",
        answer:
          "Non, il s'inscrit en complémentarité d'un suivi médical ou psychologique lorsque celui-ci est nécessaire.",
      },
      {
        question: "Combien de séances sont nécessaires pour un traumatisme ?",
        answer:
          "Le nombre de séances dépend entièrement de chaque situation ; un premier échange permet d'évaluer ensemble l'accompagnement le plus adapté.",
      },
      {
        question: "La désensibilisation par mouvements oculaires (EMDR) est-elle éprouvante ?",
        answer:
          "La séance est menée avec douceur et à votre rythme ; certaines émotions peuvent remonter temporairement, c'est un signe que le travail thérapeutique agit.",
      },
      {
        question: "Faut-il raconter son traumatisme en détail pendant la séance ?",
        answer:
          "Non, l'approche ericksonienne et l'EMDR permettent de travailler sur la charge émotionnelle sans nécessiter de se replonger dans le trauma par un récit exhaustif des faits.",
      },
    ],
  },
  "peurs-phobies": {
    slug: "peurs-phobies",
    metaTitle: "Hypnose contre les peurs et phobies à Bordeaux",
    metaDescription:
      "Peur de l'avion, en voiture, du dentiste, des animaux… l'hypnose ericksonienne à Bordeaux déconditionne la phobie en douceur, le plus souvent en 2 à 3 séances.",
    heroTitle: "Peurs, phobies",
    heroImage: "/images/domaine-peurs-phobies.jpg",
    heroSubtitle:
      "Peur de l'avion, en voiture, du dentiste, des animaux, de parler en public… l'hypnose ericksonienne travaille sur le réflexe conditionné à l'origine de la peur, le plus souvent en deux à trois séances.",
    situations: [
      "Une peur précise qui limite vos déplacements ou vos choix",
      "Une réaction de panique disproportionnée face à un élément ou une situation donnée",
    ],
    pourquoi:
      "Une phobie est souvent un réflexe conditionné, installé par l'inconscient, qui peut être déconditionné par un travail sur ce même inconscient.",
    comment:
      "L'hypnose ericksonienne travaille sur ce conditionnement inconscient à l'origine de la peur, en douceur et sans confrontation brutale.",
    seances: "Deux à trois séances peuvent suffire le plus souvent.",
    faq: [
      {
        question: "L'hypnose peut-elle aider pour la peur de l'avion ?",
        answer:
          "L'hypnose ericksonienne peut travailler sur le réflexe conditionné à l'origine de cette peur, le plus souvent en deux à trois séances.",
      },
      {
        question: "L'hypnose peut-elle aider pour la peur du vide ou des animaux ?",
        answer:
          "Oui, le principe est le même que pour toute phobie : travailler en douceur sur le réflexe conditionné à l'origine de la peur, sans confrontation brutale.",
      },
      {
        question: "Combien de séances pour se libérer d'une phobie ?",
        answer:
          "Deux à trois séances suffisent le plus souvent, selon l'ancienneté et l'intensité de la peur.",
      },
      {
        question: "Une phobie peut-elle revenir après l'hypnose ?",
        answer:
          "En général, lorsque la phobie est dépassée, l'inconscient crée un référentiel confortable par de nouvelles expériences, validant ainsi le confort dans la situation qui était auparavant problématique.",
      },
      {
        question: "Faut-il affronter directement sa peur pendant la séance ?",
        answer:
          "Non, l'hypnose ericksonienne travaille sur le conditionnement inconscient en douceur, sans confrontation directe ni brutale avec l'objet de la peur.",
      },
    ],
  },
  "sevrage-cannabis-cbd": {
    slug: "sevrage-cannabis-cbd",
    metaTitle: "Hypnose sevrage cannabis et CBD à Bordeaux — N. Demagny",
    metaDescription:
      "Arrêter le cannabis par l'hypnose ericksonienne à Bordeaux : une approche sur l'automatisme inconscient de consommation, en complément d'un suivi médical si besoin.",
    heroTitle: "Sevrage cannabis & CBD",
    heroImage: "/images/domaine-cannabis-cbd.jpg",
    heroSubtitle:
      "Vous consommez du cannabis ou du CBD par automatisme, pour gérer le stress ou l'endormissement, et vous cherchez à reprendre le contrôle ? L'hypnose ericksonienne agit sur l'habitude inconsciente à l'origine de la consommation.",
    situations: [
      "Vous consommez du cannabis quotidiennement, plus par automatisme que par envie",
      "Vous utilisez le cannabis ou le CBD pour gérer le stress, l'anxiété ou l'endormissement",
      "Vous avez déjà essayé d'arrêter seul, sans résultat durable",
      "Vous souhaitez arrêter le cannabis et le tabac en même temps",
    ],
    pourquoi:
      "La consommation régulière de cannabis s'installe souvent comme un automatisme inconscient — une réponse à une tension ou une habitude — plus que comme un choix conscient, ce qui explique pourquoi la volonté seule suffit rarement à la déconstruire durablement. Le CBD, lui, ne présente pas de risque de dépendance reconnu à ce jour ; c'est davantage l'usage compulsif ou l'association avec le tabac qui peut nécessiter un accompagnement.",
    comment:
      "L'hypnose ericksonienne s'adresse directement à l'inconscient pour modifier ce conditionnement, sans lutte ni sensation de manque imposée. La consommation de cannabis étant très souvent associée à celle de tabac, les deux peuvent, selon les situations, être travaillés ensemble.",
    seances:
      "Comme pour le tabac, une à deux séances peuvent suffire le plus souvent, selon l'ancienneté et l'intensité de la consommation.",
    faq: [
      {
        question: "Une seule séance suffit-elle pour arrêter le cannabis ?",
        answer:
          "Le nombre de séances dépend de l'ancienneté et de l'intensité de la consommation — un premier échange permet de l'évaluer ensemble.",
      },
      {
        question: "Faut-il arrêter le cannabis et le tabac en même temps ?",
        answer:
          "Cela dépend de chaque situation : certains préfèrent traiter les deux ensemble, d'autres préfèrent arrêter seulement le cannabis. Ce point se discute lors du premier échange.",
      },
      {
        question: "Le CBD peut-il créer une dépendance ?",
        answer:
          "Non, à ce jour le CBD ne présente pas de risque reconnu de dépendance physique. C'est davantage l'usage compulsif ou les habitudes associées qui peuvent nécessiter un accompagnement.",
      },
      {
        question: "Le sevrage du cannabis provoque-t-il des symptômes de manque ?",
        answer:
          "Chez un consommateur régulier, l'arrêt sans aide peut s'accompagner d'irritabilité ou de troubles du sommeil passagers. L'accompagnement par l'hypnose vise justement à limiter cet inconfort.",
      },
      {
        question: "L'hypnose remplace-t-elle un suivi médical pour une dépendance au cannabis ?",
        answer:
          "Non. L'hypnose n'a pas vocation à se substituer aux professionnels de santé ; elle s'inscrit en complémentarité d'un suivi médical ou psychologique lorsque celui-ci est nécessaire.",
      },
    ],
  },
};

// §6.7 — FAQ dédiée à la page /lhypnose-et-lhypnotherapie/ — relue et validée par le client
export const faqHypnose = [
  {
    question: "Quelle est la différence entre l'hypnose ericksonienne et l'hypnose de spectacle ?",
    answer:
      "L'hypnose ericksonienne est une approche thérapeutique souple et non dirigiste : vous restez actif et conscient tout au long de la séance, à l'inverse de la mise en scène spectaculaire de l'hypnose de spectacle.",
  },
  {
    question: "Est-on endormi pendant une séance d'hypnose ericksonienne ?",
    answer:
      "Non. L'état hypnotique est un état de conscience modifiée, pas un sommeil : vous entendez la voix du praticien, vous pouvez parler ou bouger, et vous restez maître de vous-même à tout moment.",
  },
  {
    question: "Qui était Milton Erickson ?",
    answer:
      "Milton Erickson (1901-1980), psychiatre américain, est le fondateur de l'hypnose ericksonienne et l'un des pères des thérapies brèves modernes, par une approche indirecte fondée sur le respect du patient.",
  },
  {
    question: "Tout le monde peut-il être hypnotisé ?",
    answer:
      "L'hypnose est un état naturel que chacun expérimente déjà (par exemple au volant, ou absorbé dans une lecture). La réceptivité varie d'une personne à l'autre, mais elle n'empêche pas le travail thérapeutique.",
  },
  {
    question: "Combien de temps dure une séance d'hypnose ericksonienne ?",
    // [À VALIDER AVEC LE CLIENT] Durée réelle à confirmer par le praticien — formulation ci-dessous n'invente aucun chiffre.
    answer:
      "La durée varie selon les besoins de chacun — elle vous sera précisée lors du premier échange.",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/lhypnose-et-lhypnotherapie/", label: "L'hypnose" },
  { href: "/qui-suis-je/", label: "Qui suis-je ?" },
  { href: "/domaines-dintervention/", label: "Domaines" },
  { href: "/tarifs/", label: "Tarifs" },
  { href: "/contact/", label: "Contact" },
] as const;
