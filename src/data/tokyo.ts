import type { Spot, ParkingTip } from "./types";
import { withBase } from "../consts";

export const tokyoIntro =
  `Pour les passionnés, Tokyo est la ville de référence.
Les voitures tunés à chaque quartier et leur vrombissement ne vont pas vous laisser indifférent.
De Shinjuku à Shibuya passant par la Tokyo Tower, il est difficile de ne pas les apercevoir.
Souvent aligné sur le bord de la route, vous pouvez également les retrouver sur l'autoroute et de nombreux rassemblement comme à Daikoku ou même Umihotaru PA.
Sans parler des différents magasins portant sur l'automobile, des agences de locations pour réserver et conduire votre meilleure JDM. Où Louer, où acheter ?  Je vous explique tout ici ! `;

export const tokyoSpots: Spot[] = [
  {
    name: "OnlyJDM",
    category: "location",
    area: "Ōta, sud de Tokyo (près de l'aéroport de Haneda)",
    description:
      "L'agence de location spécialisée JDM qui m'a loué cette Lancer Evolution IX gris argent pour la journée — une GT-R trônait à côté. Le genre d'adresse qui vaut le détour pour n'importe quel passionné.",
    tip: "Réservation conseillée bien à l'avance : les voitures les plus demandées partent vite.",
    mapsQuery: "OnlyJDM Car Rental Haneda Airport Store, 2 Chome-20-14 Omoriminami, Ota City, Tokyo",
    articleHref: withBase("/tokyo/only-jdm/"),
    filled: true,
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
  {
    name: "Boutique de miniatures — à préciser",
    category: "shopping",
    area: "À préciser",
    description: "Une échoppe repérée à Tokyo pour les miniatures JDM au 1/43 ou 1/64.",
    tip: "Ajoute le nom de la boutique, le quartier, les marques disponibles et les prix observés.",
    filled: false,
  },
  {
    name: "Boutique de vêtements — à préciser",
    category: "shopping",
    area: "À préciser",
    description: "Une adresse streetwear/JDM repérée à Tokyo pour ramener autre chose qu'un aimant de frigo.",
    tip: "Ajoute le nom de la boutique, l'adresse et ce que tu y as trouvé.",
    filled: false,
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
