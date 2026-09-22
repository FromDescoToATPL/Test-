export interface DriveSection {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export const conduireIntro =
  "Prendre le volant au Japon est plus simple qu'on ne le croit une fois les bons réflexes en tête. Voici la base pratique — je complèterai chaque section avec mes propres anecdotes et photos au fil des prochains road-trips.";

export const conduireSections: DriveSection[] = [
  {
    eyebrow: "Étape 1",
    title: "Le permis de conduire international",
    paragraphs: [
      "Le Japon reconnaît la Convention de Genève de 1949 : un permis français seul ne suffit pas, il faut un Permis de Conduire International (PCI) ou faire une demande de translation auprès de la JAF (meilleure solution).",
      "Qu'est ce qu'est la JAF ? C'est la Japan Automobile Federation. Avant d'arriver au japon ou pendant votre voyage, vous devez soumettre votre demande sur ce site. J'ai quelques tips pour vous permettre de le faire avant d'arriver au japon, car les réservations des voitures peuvent partir très vite et mieux vaut s'y prendre à l'avance :)",
    ],
    bullets: [
      "Durée de validité de la JAF : 1 ans à compter de l'émission du papier. ",
    ],
  },
  {
    eyebrow: "Étape 2",
    title: "Louer une voiture",
    paragraphs: [
      "Les grandes enseignes (Toyota Rent a Car, Nissan Rent a Car, ORIX, Times Car Rental, Nippon Rent-A-Car) ont des comptoirs dans la plupart des gares et aéroports, avec interface en anglais. Pour du plus exclusif (sportives, JDM), des agences spécialisées existent dans les zones touristiques comme Kawaguchiko.",
      "L'âge minimum tourne généralement autour de 21 ans avec au moins 1 an de permis — vérifie les conditions exactes de l'agence choisie.",
    ],
    bullets: [
      "Demande le GPS en anglais et une carte ETC (télépéage) dès la réservation.",
      "Fais le tour du véhicule et prends des photos avant de partir, comme partout ailleurs.",
    ],
  },
  {
    eyebrow: "Étape 3",
    title: "Les règles de circulation",
    paragraphs: [
      "On roule à gauche, volant à droite — les premiers kilomètres demandent un peu de concentration, notamment aux carrefours et ronds-points où les réflexes s'inversent.",
      "Les limitations de vitesse sont basses et respectées à la lettre : 30 à 50 km/h en ville, 80 à 100 km/h sur autoroute. Les contrôles (radars fixes et mobiles) sont fréquents.",
      "Tolérance alcool au volant proche de zéro : mieux vaut ne pas boire du tout si tu conduis.",
    ],
  },
  {
    eyebrow: "Étape 4",
    title: "Péages et carte ETC",
    paragraphs: [
      "Le réseau autoroutier japonais (Shuto, Tomei, Chuo, Tomei-Hanshin...) est payant, avec un tarif calculé à la distance parcourue. Sans carte ETC, il faut prendre un ticket à l'entrée et payer en espèces ou par carte à la sortie.",
      "Avec une carte ETC louée en même temps que le véhicule, les barrières de péage se franchissent sans s'arrêter — un vrai gain de temps et de sérénité sur les longs trajets.",
    ],
  },
  {
    eyebrow: "Étape 5",
    title: "Stationnement",
    paragraphs: [
      "Le stationnement sauvage n'est pas toléré : amende et mise en fourrière rapides, y compris pour un arrêt de quelques minutes. Les « coin parking » (Times, Park24...) sont omniprésents en ville, payables à la borne.",
      "Retrouve les spécificités de chaque ville (quartiers denses, parkings de temples, tarifs) dans les pages Tokyo, Mont Fuji, Osaka et Kyoto.",
    ],
  },
  {
    eyebrow: "Étape 6",
    title: "Faire le plein",
    paragraphs: [
      "Deux types de stations cohabitent : en libre-service (セルフ, « self »), et avec personnel qui fait le plein pour toi — plus fréquentes en zone rurale et souvent plus rapides pour un non-japonophone.",
      "Vérifie bien le type de carburant : レギュラー (regular/essence normale) est celui qu'il te faut pour l'immense majorité des voitures de location ; ハイオク (hi-oku, haut indice d'octane) est plus cher et réservé à certains véhicules sportifs — demande confirmation à l'agence de location en cas de doute.",
    ],
  },
  {
    eyebrow: "Étape 7",
    title: "Applications utiles",
    paragraphs: [
      "Google Maps fonctionne très bien au Japon pour la navigation classique. NAVITIME est apprécié pour ses estimations de péages et ses itinéraires optimisés. Garde aussi l'application de ton loueur sous la main pour l'assistance en cas de pépin.",
    ],
  },
];
