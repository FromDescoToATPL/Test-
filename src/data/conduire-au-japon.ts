export interface DriveOption {
  title: string;
  badge: string;
  paragraphs: string[];
  link?: { label: string; href: string };
}

export interface DriveSection {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  optionsIntro?: string;
  optionsLink?: { label: string; href: string };
  options?: DriveOption[];
}

export const conduireIntro =
  "Conduire au japon en tant que passionné automobile est vraiment un impératif ! Tout le monde rêve de pouvoir conduire une JDM  modifiée dans les rues de tokyo et faire des kilomètres à shutoko ou même participer aux rassemblements de voitures.
Cela vous permettra également de rejoindre des zones de chaque ville encore inexploré et moins dans le côté touristique.
Alors oui, conduire à tokyo n'est pas facile au premier abord mais on s'y fait vite et les japonais sont vraiment très calme. pas de quoi s'inquiéter !
Dans ce guide, je vais vous donner les différentes étapes pour conduire au japon.";

export const conduireSections: DriveSection[] = [
  {
    eyebrow: "Étape 1",
    title: "Le permis de conduire international",
    paragraphs: [
      "Le Japon reconnaît la Convention de Genève de 1949 : un permis français seul ne suffit pas, il faut un Permis de Conduire International (PCI) ou faire une demande de translation de votre permis Français auprès de la JAF (meilleure solution).",
      "Qu'est ce qu'est la JAF ? C'est la Japan Automobile Federation. Avant votre voyage au japon ou pendant, vous devez soumettre votre demande sur ce site. J'ai quelques tips pour vous permettre de le faire avant d'arriver au japon, car les réservations des voitures peuvent partir très vite et mieux vaut s'y prendre à l'avance :)",
    ],
    bullets: [
      "Durée de validité de la JAF : 1 ans à compter de l'émission du papier. ",
    ],
    optionsIntro: "Voici les différentes possibilités afin de demander sa translation.",
    optionsLink: { label: "english.jaf.or.jp/driving-in-japan", href: "https://english.jaf.or.jp/driving-in-japan" },
    options: [
      {
        title: "Être au Japon",
        badge: "Facile",
        paragraphs: [
          "Le site de la JAF n'est accessible que si vous êtes dans le pays, sous VPN comme Proton ou Ghost, le site bloque directement et il n'est pas possible de prévoir ça avec un VPN «classique» (et je sais pourquoi je vous en parle !).",
          "Si vous avez décidé de rester longtemps dans une ville, c'est sûrement la méthode la plus simple à faire. Pas de stress ! Une fois arrivé au pays, vous remplissez les informations que l'on vous demande à savoir votre permis de conduire, des informations personnelles etc. et ensuite vous avez 2 choix de paiement :",
          "1. Vous payez en ligne directement, vous attendez maximum 1 jour et le site vous fournira un numéro de référence afin d'aller imprimer votre translation directement dans un 7-Eleven ou un autre magasin que vous avez choisi.",
          "2. Vous payez sur place directement. Cependant attention ! Si vous payez sur place, il faudra tout de même attendre un petit délai pour que la JAF autorise votre translation.",
          "C'est-à-dire : vous avez loué une voiture pour le mardi. Vous allez au 7-Eleven pour payer votre document, il peut arriver que l'on vous donne le numéro de référence le lendemain, ce qui peut être juste si vous avez loué une voiture pour quelques heures ou la journée.",
          "Tant que vous ne payez pas, le dossier est mis en «standby», alors bien anticiper au moment où vous arrivez dans le pays et au moment où vous avez ce temps libre pour faire la JAF et récupérer votre voiture.",
        ],
      },
      {
        title: "Faire la JAF avec un intermédiaire",
        badge: "Facile",
        paragraphs: [
          "Une autre possibilité plus coûteuse mais plus simple. Il existe des organismes sur place comme DrivinJapan qui font le dossier à votre place et qui vous donnent la translation. Cependant, cela peut coûter 2x plus cher. Il faut compter en moyenne entre 50-60€ pour faire cette démarche contre 20€ sur le site de la JAF.",
          "Je pense que cette démarche est intéressante si vous voulez louer une voiture rapidement et être sûr d'avoir cette translation.",
          "Les agences de location de JDM peuvent être complètes parfois plusieurs jours voire semaines à l'avance. Donc si vous attendez d'arriver dans le pays pour louer une JDM ou une autre voiture très prisée, il sera sûrement trop tard.",
          "Il faut vraiment anticiper. Si dépenser plus ne vous dérange pas, c'est probablement la meilleure méthode pour vous.",
        ],
      },
      {
        title: "Installer un VPN japonais",
        badge: "Difficile",
        paragraphs: [
          "C'est la méthode que j'ai choisie. Je le reconnais, ce n'est pas la plus simple mais c'était aussi la moins coûteuse.",
          "Je conçois que cette méthode n'est pas pour tout le monde, mais elle permet d'avoir sa translation rapidement, pas cher et sans stress.",
          "Voici le VPN à installer, fiable et sans virus. Le VPN a été conçu par des Japonais dans le but d'aider les étrangers à utiliser les services du pays à l'étranger.",
          "Une fois installé et connecté au serveur, vous pourrez accéder facilement au site de la JAF, en japonais :)",
          "Utilisez un traducteur pour faire cette démarche.",
          "C'était la première fois que j'allais au Japon, et avant de dépenser et réserver une voiture qui coûtait un certain prix pour un jour, je voulais absolument avoir la JAF avant d'arriver sur le territoire à moindre coût.",
          "Une fois arrivé à la fin du formulaire, on vous demande soit de payer en ligne (environ 20€) soit de payer dans un 7-Eleven. Il faut absolument payer en ligne sinon le dossier sera mis en attente.",
          "1 jour après, on vous donnera votre code pour imprimer votre translation.",
          "À noter : le code pour imprimer n'est valide qu'une semaine. Après ça, il faudra repartir sur la JAF et redemander un code. Cela prend environ 30 minutes et vous pourrez avoir votre translation.",
        ],
        link: { label: "vpngate.net/en/howto_softether.aspx", href: "https://www.vpngate.net/en/howto_softether.aspx" },
      },
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
