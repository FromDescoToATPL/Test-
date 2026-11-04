// Page « Expériences » (/experiences/ et /en/experiences/) : les articles et guides rangés par envie.
// Un lien avec `publie: false` reste caché ; une catégorie sans lien publié disparaît. Passer `publie` à true
// le jour où l'article est en ligne.
import { withBase } from "../consts";

type Texte = { fr: string; en: string };

export interface LienExperience {
  titre: Texte;
  description: Texte;
  href: Texte;
  publie: boolean;
}

export interface CategorieExperiences {
  id: string;
  titre: Texte;
  liens: LienExperience[];
}

export const categoriesExperiences: CategorieExperiences[] = [
  {
    id: "tours",
    titre: { fr: "Tours JDM", en: "JDM tours" },
    liens: [
      {
        titre: { fr: "Daikoku PA : y aller seul ou avec un tour JDM ?", en: "Daikoku PA: go on your own or book a JDM tour?" },
        description: {
          fr: "Le rassemblement le plus célèbre du Japon ne s'atteint qu'en voiture. Les trois façons d'y aller, prix vérifiés.",
          en: "Japan's most famous car meet can only be reached by car. The three ways to get there, with checked prices.",
        },
        href: { fr: withBase("/experiences/daikoku-tours-jdm/"), en: withBase("/en/experiences/daikoku-jdm-tours/") },
        publie: true,
      },
    ],
  },
  {
    id: "location",
    titre: { fr: "Louer et conduire", en: "Rent and drive" },
    liens: [
      {
        titre: { fr: "Louer une JDM au Japon", en: "Rent a JDM in Japan" },
        description: {
          fr: "Mes locations testées à Tokyo et au pied du Fuji, et les agences repérées ville par ville.",
          en: "My tested rentals in Tokyo and at the foot of Mount Fuji, and the agencies on my list, city by city.",
        },
        href: { fr: withBase("/louer-une-voiture/"), en: withBase("/en/rent-a-car/") },
        publie: true,
      },
      {
        titre: { fr: "Conduire au Japon", en: "Driving in Japan" },
        description: {
          fr: "Traduction officielle du permis, péages, stationnement : tout pour prendre le volant sereinement.",
          en: "License translation, tolls, parking: everything you need to drive with peace of mind.",
        },
        href: { fr: withBase("/conduire-au-japon/"), en: withBase("/en/driving-in-japan/") },
        publie: true,
      },
    ],
  },
  {
    id: "musees",
    titre: { fr: "Musées et circuits", en: "Museums and circuits" },
    liens: [
      {
        titre: { fr: "Fuji Motor Sports Museum", en: "Fuji Motor Sports Museum" },
        description: {
          fr: "Le musée du sport automobile au pied de Fuji Speedway, que j'ai visité en Corvette.",
          en: "The motorsport museum next to Fuji Speedway, which I visited in a Corvette.",
        },
        href: {
          fr: withBase("/mont-fuji/musee-du-sport-automobile/"),
          en: withBase("/en/mount-fuji/fuji-motor-sports-museum/"),
        },
        publie: true,
      },
      {
        titre: { fr: "Musées et circuits auto au Japon", en: "Car museums and circuits in Japan" },
        description: { fr: "Lesquels valent le détour, et comment y aller.", en: "Which ones are worth the trip, and how to get there." },
        href: { fr: withBase("/experiences/musees-circuits/"), en: withBase("/en/experiences/museums-circuits/") },
        publie: false,
      },
    ],
  },
  {
    id: "voyage",
    titre: { fr: "Préparer le voyage", en: "Plan your trip" },
    liens: [
      {
        titre: { fr: "Itinéraire Japon pour passionnés d'auto", en: "A Japan itinerary for car enthusiasts" },
        description: { fr: "Tokyo, Fuji, Osaka et Kyoto en 7 à 10 jours.", en: "Tokyo, Fuji, Osaka and Kyoto in 7 to 10 days." },
        href: { fr: withBase("/experiences/itineraire-japon-auto/"), en: withBase("/en/experiences/japan-car-itinerary/") },
        publie: false,
      },
      {
        titre: { fr: "Internet au Japon : quelle eSIM choisir", en: "Internet in Japan: which eSIM to choose" },
        description: {
          fr: "Avoir Internet dès l'atterrissage, pour une quinzaine d'euros.",
          en: "Get online as soon as you land, for around fifteen euros.",
        },
        href: { fr: withBase("/experiences/esim-japon/"), en: withBase("/en/experiences/japan-esim/") },
        publie: true,
      },
    ],
  },
];

/** Catégories avec au moins un lien publié, et seulement leurs liens publiés. */
export const categoriesVisibles = categoriesExperiences
  .map((c) => ({ ...c, liens: c.liens.filter((l) => l.publie) }))
  .filter((c) => c.liens.length > 0);
