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
      "L'agence de location spécialisée JDM qui m'a loué cette Lancer Evolution VIII gris argent pour la journée — une GT-R trônait à côté. Le genre d'adresse qui vaut le détour pour n'importe quel passionné.",
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
    name: "Umihotaru PA",
    category: "meetup",
    area: "Kisarazu, Chiba (accessible en voiture via l'Aqua-Line)",
    description:
      "Probablement l'un des meilleurs spots de rassemblement pour les passionnés, accessible uniquement en voiture. Quand Daikoku Futo PA est fermée ou trop pleine, c'est là que tout le monde se retrouve.",
    tip: "Comme à Daikoku, reste respectueux : c'est une aire ouverte à tous, pas un événement organisé.",
    mapsQuery: "Umihotaru PA, 292-0008 Chiba, Kisarazu, Nakajima",
    filled: true,
  },
  {
    name: "Boutiques de miniatures",
    category: "shopping",
    area: "Shinjuku, Chiyoda, Shibuya",
    description:
      "Bic Camera, Ken Box et Ken Box B2F à Shinjuku, le Tomica Shop Tokyo à la gare de Tokyo, et l'univers Liberty Walk à Shibuya : les bonnes adresses pour ramener une miniature JDM au 1/43 ou 1/64.",
    tip: "Chez Ken Box, dénicher sa pépite peut vite coûter cher : vas-y en repérage si tu veux juste regarder.",
    articleHref: withBase("/tokyo/boutiques-miniatures/"),
    filled: true,
  },
  {
    name: "Liberty Walk Tokyo",
    category: "shopping",
    area: "Shibuya",
    description:
      "L'une des meilleures adresses de streetwear à Tokyo pour vous et vos amis passionnés. T-shirts, manteaux, pantalons, sweats : de quoi vous faire plaisir.",
    tip: "Prévoyez un bon budget en yens, les prix sont à la hauteur de la marque.",
    mapsQuery: "Liberty Walk, 4 Chome-26-3 Jingumae, Shibuya, Tokyo 150-0001",
    filled: true,
  },
  {
    name: "A-PIT Super Autobacs",
    category: "shopping",
    area: "Kōtō",
    description:
      "Le même type de magasin qu'à Kyoto : un large choix de vêtements de différentes marques (Mazda, Toyota, Nissan, etc.), ainsi que plusieurs stands de journaux et de miniatures.",
    tip: "Détaxe de 10 % possible avec votre passeport. Profitez-en avant le 1er novembre, date à partir de laquelle le remboursement se fait uniquement à l'aéroport.",
    mapsQuery: "A-PIT Super Autobacs, 2 Chome-7-20 Shinonome, Koto City, Tokyo 135-0062",
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
