// Avis Google vérifiés — Nicolas Demagny (source : Google, fournis par le client)
// Triés du plus récent au plus ancien. Ne jamais inventer ni modifier un avis.

export interface Review {
  name: string;
  stars: 5 | 4 | 3 | 2 | 1;
  date: string;
  text: string;
  featured?: boolean;
}

// Avis mis en avant (manifeste section + citations phares)
export const bigQuote: Review = {
  name: "Chloé Sanches",
  stars: 5,
  date: "il y a 8 mois",
  text: "Un seul rdv a suffit pour laisser derrière moi 13 années de tabagisme !",
  featured: true,
};

export const featuredReviews: Review[] = [
  {
    name: "Soraya Messaoudi",
    stars: 5,
    date: "il y a 6 mois",
    text: "J'ai arrêté de fumer en 1 séance avec Nicolas Demagny. Je ne pensais pas que ce serait possible aussi rapidement.",
    featured: true,
  },
  {
    name: "Antunes Céline",
    stars: 5,
    date: "il y a 3 ans",
    text: "A ce jour cela fait 4 ans et demi que j'ai arrêté de fumer en une seule séance. Je fumais 1 paquet par jour, aujourd'hui j'ai pris rdv pour un membre de ma famille.",
    featured: true,
  },
];

// Tous les avis 5 étoiles avec texte — pour le mur scrollable
export const allReviews: Review[] = [
  {
    name: "Veronica Navarro Navarro",
    stars: 5,
    date: "il y a 1 mois",
    text: "Ça fait que 2 jours que je suis allée le voir, et que je fume plus. Je suis agréablement surprise par la rapidité du résultat.",
  },
  {
    name: "Soraya Messaoudi",
    stars: 5,
    date: "il y a 6 mois",
    text: "J'ai arrêté de fumer en 1 séance avec Nicolas Demagny. Je ne pensais pas que ce serait possible aussi rapidement.",
  },
  {
    name: "Jose De Araujo",
    stars: 5,
    date: "il y a 7 mois",
    text: "Je vous ai vu il y a un an pour l'arrêt de la cigarette. Aucune rechute. Je recommande vivement.",
  },
  {
    name: "Chloé Sanches",
    stars: 5,
    date: "il y a 8 mois",
    text: "Bientôt 2 ans que j'ai arrêté de fumer grâce à M. DEMAGNY. Un seul rdv a suffit pour laisser derrière moi 13 années de tabagisme !",
  },
  {
    name: "Jean-Louis BONNARD",
    stars: 5,
    date: "il y a 1 an",
    text: "Cela fait 18 mois que je ne fume plus, il y a rarement de moments où j'aurais envie mais je tiens bon.",
  },
  {
    name: "Michel Maraque",
    stars: 5,
    date: "il y a 1 an",
    text: "J'y suis allé en 2017 pour arrêter de fumer, j'avais fumé 4 cigarettes dans les 15 minutes avant d'entrer. Je suis ressorti non-fumeur. Je recommande.",
  },
  {
    name: "E Lou",
    stars: 5,
    date: "il y a 1 an",
    text: "Un de mes meilleurs spécialistes en hypnose que j'ai rencontré. Je le conseille vraiment !",
  },
  {
    name: "Aloysia WATTS",
    stars: 5,
    date: "il y a 1 an",
    text: "M. Demagny a été d'une aide précieuse. Je vous le recommande si vous souhaitez avancer dans vos projets personnels et que vous avez besoin d'un petit coup de pouce qui fait toute la différence.",
  },
  {
    name: "Véronique BOURGOIS",
    stars: 5,
    date: "il y a 2 ans",
    text: "Arrêt tabac après 50 ans de tabagisme. Pas d'envie de fumer même aux côtés de fumeurs. Merci.",
  },
  {
    name: "grace negui",
    stars: 5,
    date: "il y a 2 ans",
    text: "Merci Nicolas pour m'avoir aidé à arrêter la cigarette en seulement 1 séance. Depuis juillet 2023 je ne fume plus. Un grand merci !",
  },
  {
    name: "Véronique Lecouvreur",
    stars: 5,
    date: "il y a 2 ans",
    text: "Depuis le 15/04/2023 (10 mois), je suis devenue non fumeuse grâce à la précieuse assistance de Mr Demagny. 1 seule séance d'hypnose aura suffit.",
  },
  {
    name: "Catherine Largeteau",
    stars: 5,
    date: "il y a 3 ans",
    text: "A ce jour 4 ans et demi d'arrêt du tabac, et ce après une seule séance. C'est miraculeux !",
  },
  {
    name: "Antunes Céline",
    stars: 5,
    date: "il y a 3 ans",
    text: "A ce jour cela fait 4 ans et demi que j'ai arrêté de fumer en une seule séance. Je fumais 1 paquet par jour, aujourd'hui j'ai pris rdv pour un membre de ma famille.",
  },
  {
    name: "Céline JV",
    stars: 5,
    date: "il y a 3 ans",
    text: "Une aide sérieuse et pro comme celle de Monsieur Demagny est précieuse pour passer à la vie de non fumeuse après 25 ans de tabac quotidien intense. Pour le moment ça tient, merci M. Demagny !",
  },
  {
    name: "Olivia Leroy",
    stars: 5,
    date: "il y a 4 ans",
    text: "J'ai consulté Monsieur DEMAGNY à 2 reprises pour des problèmes de stress, angoisses, crises de panique. Tout est rentré dans l'ordre au fil des jours ! Je suis stupéfaite des résultats.",
  },
  {
    name: "Cedric Imbart-Latour",
    stars: 5,
    date: "il y a 4 ans",
    text: "Nicolas Demagny apporte beaucoup de soin, de talent et d'expertise à sa pratique. Non seulement j'ai pu arrêter le tabac mais l'expérience en elle-même s'est révélée tout à fait inspirante !",
  },
  {
    name: "Céline Violet",
    stars: 5,
    date: "il y a 4 ans",
    text: "Je recommande vivement M. Demagny pour l'arrêt du tabac. J'ai arrêté en une séance après 20 ans, sans même m'en rendre compte.",
  },
  {
    name: "David FRT",
    stars: 5,
    date: "il y a 4 ans",
    text: "Une séance a suffit pour me débarrasser de l'addiction à la cigarette (1 paquet par jour).",
  },
  {
    name: "jeremy Monribot",
    stars: 5,
    date: "il y a 4 ans",
    text: "Cela fait maintenant 7 mois que j'ai arrêté de fumer — je fumais une bonne vingtaine de cigarettes roulées — et aucun manque. Super, merci encore.",
  },
  {
    name: "Muriel LACASSAGNE",
    stars: 5,
    date: "il y a 4 ans",
    text: "Une seule visite chez Mr DEMAGNY en août 2018 et je n'ai jamais retouché une cigarette.",
  },
  {
    name: "Damien Trut",
    stars: 5,
    date: "il y a 5 ans",
    text: "Une seule séance a suffit à me faire arrêter le tabac depuis plus d'1 mois et sans difficulté apparente. Je conseille vivement Mr DEMAGNY pour l'arrêt du tabac.",
  },
  {
    name: "Brieuc Rioualen",
    stars: 5,
    date: "il y a 5 ans",
    text: "Une seule séance en août 2019. Je n'ai pas retouché à une cigarette depuis. Un grand merci.",
  },
  {
    name: "BRIGITTE MAU",
    stars: 5,
    date: "il y a 5 ans",
    text: "Plus de cigarette depuis le 13 octobre 2020. Il m'arrive d'y penser bien sûr, mais pas de réelle envie et ça passe vite. Merci, je suis libérée.",
  },
  {
    name: "Nicolas Guilbert",
    stars: 5,
    date: "il y a 5 ans",
    text: "Moi et ma compagne y sommes allés sur recommandation pour arrêter de fumer et aujourd'hui ça fait plus d'1,5 ans en une séance que nous avons arrêté. Juste merci !",
  },
  {
    name: "Etienne",
    stars: 5,
    date: "il y a 5 ans",
    text: "Je suis venu curieux de l'expérience et je suis reparti non fumeur ! Cela fait maintenant 1 an et demi. Je recommande vraiment !",
  },
  {
    name: "Mélanie Vaz Guerra",
    stars: 5,
    date: "il y a 5 ans",
    text: "Le plus grand pas que j'ai pu faire envers moi-même après de nombreuses années de phobie.",
  },
  {
    name: "Julie Jacquier",
    stars: 5,
    date: "il y a 6 ans",
    text: "Voilà maintenant 1 mois que je n'ai pas touché une cigarette et aucune envie, bien qu'ancienne grosse fumeuse (1 paquet). Je me suis mise au sport et je me sens mieux, beaucoup mieux.",
  },
  {
    name: "Thierry Defaye",
    stars: 5,
    date: "il y a 6 ans",
    text: "Arrêté de fumer en 1 séance. Surprenant. Très à l'écoute, très bon accueil. Je recommande.",
  },
  {
    name: "Jennifer SAEZ",
    stars: 5,
    date: "il y a 6 ans",
    text: "Certes ma décision était prise mais son aide m'a permis d'atteindre l'objectif. Je suis encore non fumeuse aujourd'hui, plus d'un an après.",
  },
  {
    name: "Cécilia Da Cunha",
    stars: 5,
    date: "il y a 7 ans",
    text: "Première séance d'hypnose pour arrêt de tabac. Je n'ai jamais repris et sans difficulté. En plus, ma mutuelle m'a remboursée. Entière confiance en la pratique d'hypnose de ce monsieur.",
  },
  {
    name: "AMANDINE FALBET",
    stars: 5,
    date: "il y a 9 ans",
    text: "Une oreille attentive, une approche très humaine et toute en simplicité. Tabac, problématiques personnelles, la « magie » opère. Je recommande grandement.",
  },
  {
    name: "anne dubroca",
    stars: 5,
    date: "il y a 9 ans",
    text: "Très efficace, je n'ai plus de compulsions boulimiques, ma relation à l'alimentation est beaucoup plus confortable. Je n'hésiterai pas à vous recommander.",
  },
  {
    name: "Sandrine B",
    stars: 5,
    date: "il y a 10 ans",
    text: "Très compétent, d'une efficacité indiscutable. J'étais fumeuse depuis 30 ans et depuis cette séance je ne fume plus.",
  },
  {
    name: "Mireille BROWN",
    stars: 5,
    date: "il y a 10 ans",
    text: "C'est génial, j'étais une grosse fumeuse : 1 paquet par jour. J'ai attendu 2 mois pour vérifier l'efficacité et c'est une réussite totale.",
  },
  {
    name: "Céline Privé",
    stars: 5,
    date: "il y a 8 ans",
    text: "Personne très à l'écoute et très professionnelle. Je suis venue à un moment difficile dans ma vie, j'étais plutôt sceptique sur l'hypnose et j'ai été agréablement surprise.",
  },
];
