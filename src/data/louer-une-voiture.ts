import type { Spot } from "./types";
import { withBase } from "../consts";

export const louerIntro =
  `Louer une voiture, c'est clairement la meilleure façon de sortir des sentiers battus au Japon : routes de montagne, spots isolés, garages de passionnés que les transports en commun n'atteignent jamais. Mais avant de prendre la route, il y a un choix à faire, et il change complètement l'expérience.
D'un côté, les grandes enseignes traditionnelles : Toyota Rent a Car, Nissan Rent a Car, ORIX, Times Car Rental, Nippon Rent-A-Car... Elles ont des comptoirs dans presque toutes les gares et tous les aéroports, un accueil en anglais et une réservation en ligne toute simple. Le parc reste plutôt classique (citadines, familiales, quelques hybrides), mais pour un premier passage ou un trajet sans prise de tête, c'est imbattable.
De l'autre, les agences spécialisées, bien plus confidentielles, qui louent des sportives et de vraies JDM à la journée. Ce sont des adresses qu'on ne trouve pas sur les comparateurs classiques : il faut les chercher, souvent directement sur Google Maps dans la ville visée. En échange, vous montez dans une voiture qui a une âme : une Evolution préparée, une Corvette, parfois plus. Je suis passé par les deux, à Tokyo chez OnlyJDM et à Kawaguchiko chez MFJ Rental Cars, et honnêtement, ça valait chaque minute de recherche.
Dans ce guide, je vous donne les bonnes adresses des deux types d'agences et tout ce qu'il faut vérifier avant de prendre les clés.`;

export const louerSpots: Spot[] = [
  {
    name: "Grandes enseignes nationales",
    category: "location",
    area: "Gares et aéroports, partout au Japon",
    description:
      "Toyota Rent a Car, Nissan Rent a Car, ORIX Rent a Car, Times Car Rental, Nippon Rent-A-Car : les réseaux les plus simples pour un premier passage, comptoirs en anglais dans la plupart des gares et aéroports.",
    tip: "Réserve en ligne avant de partir : les modèles populaires (et les rares sportives du parc) partent vite en haute saison.",
    filled: true,
  },
  {
    name: "Agences spécialisées sportives / JDM",
    category: "location",
    area: "À préciser",
    description:
      "Au-delà des grandes enseignes, quelques agences locales proposent des sportives et des JDM à louer à la journée : la Corvette C7 louée chez MFJ Rental Cars à Kawaguchiko (page Mont Fuji), ou l'Evolution IX louée chez OnlyJDM à Tokyo (page Tokyo). D'autres adresses de ce genre à découvrir et ajouter ici.",
    tip: "Ajoute les autres agences repérées : ville, modèles proposés, tarifs, conditions.",
    filled: false,
  },
];

export const louerConseils: { titre: string; texte: string; link?: { label: string; href: string } }[] = [
  {
    titre: "Permis international ou translation",
    texte:
      "Le permis français seul ne suffit pas : il faut un Permis de Conduire International (convention de Genève 1949) à présenter avec ton permis national ou faire une demande de translation. Détails complets sur la page",
    link: { label: "Conduire au Japon", href: withBase("/conduire-au-japon/") },
  },
  {
    titre: "Assurance et franchise",
    texte:
      "L'assurance de base (incluse) couvre les dommages mais laisse souvent une franchise élevée en cas d'accident. Une assurance complémentaire (CDW/franchise réduite) proposée au comptoir coûte quelques milliers de yens par jour et peut rajouter un coût conséquent sur la location. Si vous êtes aguéri, vous pourrez garder quelques dizaines d'euro sinon garder l'assurance de base. A tokyo, je n'ai eu aucun soucis.",
  },
  {
    titre: "Âge et ancienneté de permis",
    texte:
      "La plupart des loueurs exigent au moins 21 ans et 1 an de permis ; les agences spécialisées sportives montent parfois la barre plus haut (25 ans, 2-3 ans de permis). Vérifie les conditions exactes avant de réserver.",
  },
  {
    titre: "Photos et vidéos avant/après",
    texte:
      "Avant même de démarrer, faites le tour complet du véhicule et prenez des photos et une vidéo, y compris des rayures ou dommages déjà présents. Refaites la même chose au retour, avant de rendre les clés. C'est votre seule protection en cas de désaccord sur l'état de la voiture à la restitution, et ça ne prend que deux minutes.",
  },
  {
    titre: "GPS et carte ETC",
    texte:
      "Demandez le GPS en anglais et une carte ETC (télépéage) dès la réservation : les deux se négocient facilement au comptoir mais peuvent manquer si vous les demandez au dernier moment.",
  },
];
