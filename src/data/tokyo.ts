import type { Spot, ParkingTip } from "./types";

export const tokyoIntro =
  "Tokyo la nuit, c'est des avenues qui brillent, des Kei-cars qui slaloment et, si on sait où regarder, des rassemblements spontanés de passionnés au détour d'une rue. C'est aussi la ville où la culture JDM s'exhibe le plus librement : garages spécialisés, Roadster qui capot ouvert sous les néons, et une bonne dose de tuning assumé.";

export const tokyoSpots: Spot[] = [
  {
    name: "Only JDM",
    category: "garage",
    area: "À préciser",
    description:
      "Repéré pendant le séjour : un garage/atelier spécialisé JDM où trônait cette Lancer Evolution IX gris argent aux côtés d'une GT-R. Le genre d'adresse qui vaut le détour pour n'importe quel passionné.",
    tip: "Ajoute ici l'adresse exacte, les horaires et ton avis sur l'accueil et les prestations.",
    mapsQuery: "",
    filled: false,
  },
  {
    name: "Daikoku Futo PA",
    category: "meetup",
    area: "Yokohama (accessible en voiture depuis Tokyo par la Bayshore Route)",
    description:
      "L'aire d'autoroute la plus célèbre du Japon pour les passionnés : supercars, JDM tunées et parfois des surprises inattendues s'y retrouvent en soirée, surtout le week-end. Ce n'est techniquement pas Tokyo intra-muros mais ça reste l'excursion incontournable en voiture pour tout road-tripper.",
    tip: "Ambiance très variable selon les soirs — privilégie vendredi/samedi soir. Reste respectueux : c'est une aire ouverte à tous, pas un événement organisé.",
    filled: true,
  },
];

export const tokyoParking: ParkingTip[] = [
  {
    area: "Shibuya / Shinjuku / Ginza",
    advice:
      "Stationnement en voirie quasiment inexistant et très surveillé. Compte sur les parkings « coin parking » (Times, Park24,三井のリパーク) — repérables à leurs bornes jaunes ou rouges. Tarifs élevés (300–500¥ / 30 min) mais rotation rapide et paiement simple à la borne.",
  },
  {
    area: "Centres commerciaux",
    advice:
      "Beaucoup de grands magasins offrent 1 à 3h de parking gratuit sur présentation d'un ticket de caisse validé à l'accueil — pratique pour une pause shopping sans stress.",
  },
  {
    area: "Général",
    advice:
      "Ne jamais se garer en double file ou sur un trottoir : les patrouilles de stationnement japonaises verbalisent vite et sans exception. Utilise l'appli Times Car PARK ou akippa pour réserver une place à l'avance dans les zones denses.",
  },
];

export const tokyoTips: string[] = [
  "Circule tôt le matin ou en soirée pour éviter les embouteillages du Shuto Expressway (périphérique urbain), particulièrement dense en journée.",
  "Prends un forfait ETC (télépéage) avec ta location — indispensable pour enchaîner les voies rapides sans t'arrêter à chaque barrière.",
  "Le quartier de Roppongi/Aoyama est idéal en soirée pour repérer des voitures de passionnés garées devant les bars et restaurants.",
];
