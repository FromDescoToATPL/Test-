import type { Spot } from "./types";

export const achatIntro =
  "Acheter une voiture au Japon, que ce soit pour l'exporter ou pour le plaisir d'un souvenir mécanique, suit des codes bien particuliers. Voici les bonnes adresses repérées sur place, et ce qu'il faut savoir avant de signer.";

export const achatSpots: Spot[] = [
  {
    name: "Only JDM (Tokyo)",
    category: "achat",
    area: "À préciser",
    description:
      "Le garage repéré à Tokyo avec cette Evo IX et une GT-R en vitrine. À confirmer : vendent-ils des véhicules, ou uniquement de la préparation ?",
    tip: "Précise leur activité exacte (vente, préparation, les deux), les modèles disponibles au moment de ta visite, et une fourchette de prix si tu l'as.",
    filled: false,
  },
];

export const achatConseils: { titre: string; texte: string }[] = [
  {
    titre: "Carnet d'entretien et feuille d'enchères (auction sheet)",
    texte:
      "Sur le marché de l'occasion japonais, les véhicules passés par les grandes enchères professionnelles (USS, TAA...) possèdent une « auction sheet » qui note l'état général de A à R/RA. Demande-la systématiquement à un revendeur : c'est l'équivalent d'un contrôle technique détaillé.",
  },
  {
    titre: "Export vs immatriculation locale",
    texte:
      "Si le but est de ramener la voiture chez toi, le vendeur doit gérer la désimmatriculation (déportation) et la préparation à l'export (fret maritime en container ou RoRo). Vérifie qui prend en charge le transport jusqu'au port et les frais de douane à l'arrivée restent à ta charge.",
  },
  {
    titre: "Contrôle technique japonais (shaken)",
    texte:
      "Une voiture japonaise récemment passée au shaken (contrôle technique, valable 2 ou 3 ans selon l'âge du véhicule) rassure sur son état, mais n'a de valeur que si tu comptes rouler avec sur place — il ne voyage pas avec la voiture à l'export.",
  },
  {
    titre: "Négocier",
    texte:
      "Les prix affichés chez les spécialistes JDM habitués aux acheteurs étrangers sont rarement négociables à la baisse comme en Europe, mais renseigne-toi sur les frais annexes (préparation export, dossier administratif) qui, eux, varient d'un vendeur à l'autre.",
  },
];
