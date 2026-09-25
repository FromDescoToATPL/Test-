import type { Spot, ParkingTip } from "./types";
import { withBase } from "../consts";

export const fujiIntro =
  "Kawaguchiko, c'est le Fuji qui se dévoile entre deux nuages, des petites routes de montagne qui se prêtent parfaitement à un road-trip, et à seulement 30 minutes de voiture, deux adresses obligatoires pour tout passionné : le circuit de Fuji Speedway et son musée du sport automobile.";

export const fujiSpots: Spot[] = [
  {
    name: "MFJ Rental Cars",
    category: "location",
    area: "Kawaguchiko",
    description:
      "L'agence qui m'a loué cette Corvette C7 Stingray à Kawaguchiko, pour partir à l'assaut des routes de montagne autour du lac — brouillard et pluie inclus le jour du passage, l'expérience n'en devient que plus mémorable.",
    tip: "Ajoute ici le tarif à la journée/demi-journée et les conditions (âge, caution, permis international exigé) — tout part dans l'article dédié.",
    articleHref: withBase("/mont-fuji/mfj-rental-cars/"),
    filled: false,
  },
  {
    name: "Fuji Speedway",
    category: "circuit",
    area: "Oyama, Susono — à ~30 min de Kawaguchiko",
    description:
      "Circuit historique (ex-Fuji International Speedway), théâtre du Japanese Grand Prix de F1 et de manches de Super GT / WEC. Accessible en voiture, avec des journées portes ouvertes et des track days pour le public selon le calendrier.",
    tip: "Vérifie le calendrier officiel avant d'y aller : le circuit est parfois fermé au public pour des événements privés.",
    filled: true,
  },
  {
    name: "Musée du sport automobile (près de Fuji Speedway)",
    category: "musee",
    area: "À ~30 min de Kawaguchiko, juste à côté du circuit",
    description:
      "Un bâtiment vertigineux sur plusieurs niveaux relié par de longs escalators, où se côtoient prototypes Le Mans (dont la Mazda 787B victorieuse en 1991 et la Toyota GT-One), voitures de rallye historiques et pièces de collection. Une des plus belles collections de voitures de course que compte le Japon.",
    tip: "Confirme le nom exact et les horaires d'ouverture actuels avant publication — à vérifier sur place ou en ligne.",
    articleHref: withBase("/mont-fuji/musee-du-sport-automobile/"),
    filled: true,
  },
];

export const fujiParking: ParkingTip[] = [
  {
    area: "Points de vue (Chureito Pagoda, Oshino Hakkai...)",
    advice:
      "La plupart des points de vue populaires sur le Fuji ont leur propre parking payant, souvent à la journée (300–500¥). Arrive tôt le matin en haute saison, les places partent vite.",
  },
  {
    area: "Hôtels & ryokans",
    advice:
      "Le stationnement est quasi systématiquement gratuit et inclus — un vrai confort par rapport aux grandes villes.",
  },
  {
    area: "Routes de montagne",
    advice:
      "Brouillard, pluie et routes sinueuses : roule prudemment. En hiver, certains axes autour du Fuji nécessitent pneus neige ou chaînes — vérifie les conditions avant de partir.",
  },
];

export const fujiTips: string[] = [
  "Combine le circuit et le musée en une seule demi-journée : les deux sont à 5 minutes l'un de l'autre.",
  "Le Fuji ne se montre pas tous les jours — privilégie tôt le matin, ciel dégagé, pour les meilleures vues depuis la route.",
  "Une voiture de sport comme une Corvette prend une autre dimension sur les petites routes qui serpentent autour du lac : anticipe des trajets plus lents qu'en ligne droite.",
];
