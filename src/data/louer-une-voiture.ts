import type { Spot } from "./types";

export const louerIntro =
  "Louer une voiture, c'est la meilleure façon de sortir de découvrir les villes d'une autre façon : routes de montagne, spots isolés, garages de passionnés que les transports en commun n'atteignent pas. Voici les bonnes adresses et ce qu'il faut vérifier avant de prendre les clés.";

export const louerSpots: Spot[] = [
  {
    name: "Grandes enseignes nationales",
    category: "location",
    area: "Gares et aéroports, partout au Japon",
    description:
      "Toyota Rent a Car, Nissan Rent a Car, ORIX Rent a Car, Times Car Rental, Nippon Rent-A-Car : les réseaux les plus simples pour un premier passage, comptoirs en anglais dans la plupart des gares et aéroports.",
    tip: "Réserve en ligne avant de partir — les modèles populaires (et les rares sportives du parc) partent vite en haute saison.",
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

export const louerConseils: { titre: string; texte: string }[] = [
  {
    titre: "Permis international ou translation",
    texte:
      "Le permis français seul ne suffit pas : il faut un Permis de Conduire International (convention de Genève 1949) à présenter avec ton permis national ou faire une demande de translation. Détails complets sur la page Conduire au Japon.",
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
    titre: "État des lieux et options utiles",
    texte:
      "Fais le tour du véhicule et prends des photos avant de partir, comme partout ailleurs. Demande la carte ETC (télépéage) et le GPS en anglais dès la réservation — les deux simplifient énormément la conduite sur autoroute.",
  },
];
