// Version anglaise de src/data/mont-fuji.ts : garder les deux fichiers en phase.
import type { Spot, ParkingTip } from "../types";
import { withBase } from "../../consts";

export const fujiIntro =
  "Kawaguchiko is Mount Fuji peeking out between two clouds, small mountain roads made for a road trip, and, just 30 minutes' drive away, two must-visit places for any enthusiast: the Fuji Speedway race track and its motorsports museum.";

export const fujiSpots: Spot[] = [
  {
    name: "MFJ Rental Cars",
    category: "location",
    area: "Kawaguchiko",
    description:
      "The agency that rented me this Corvette C7 Stingray in Kawaguchiko, to take on the mountain roads around the lake. Fog and rain came included on the day, which only made the experience more memorable.",
    tip: "The Corvette C7 was on sale for 13,000 yen when I booked, with no deposit. Watch out for the deductible: 50,000 yen in case of an accident.",
    mapsQuery: "MFJ Rental Car&Motorbike, 996-21 Funatsu, Fujikawaguchiko",
    articleHref: withBase("/en/mount-fuji/mfj-rental-cars/"),
    filled: true,
  },
  {
    name: "Fuji Speedway",
    category: "circuit",
    area: "Oyama, Susono (about 30 min from Kawaguchiko)",
    description:
      "A historic race track (formerly Fuji International Speedway), home of the Japanese F1 Grand Prix and of Super GT and WEC rounds. Easy to reach by car, with open days and track days for the public depending on the calendar.",
    tip: "Check the official calendar before you go: the track is sometimes closed to the public for private events.",
    filled: true,
  },
  {
    name: "Fuji Motor Sports Museum",
    category: "musee",
    area: "About 30 min from Kawaguchiko, right next to the track",
    description:
      "A dizzying multi-level building linked by long escalators, where Le Mans prototypes (including the Mazda 787B that won in 1991 and the Toyota GT-One), historic rally cars and collector pieces sit side by side. One of the finest collections of race cars in Japan.",
    tip: "Free parking about 20 meters from the entrance. Admission is around €10.",
    articleHref: withBase("/en/mount-fuji/fuji-motor-sports-museum/"),
    filled: true,
  },
];

export const fujiParking: ParkingTip[] = [
  {
    area: "Viewpoints (Chureito Pagoda, Oshino Hakkai...)",
    advice:
      "Most of the popular Fuji viewpoints have their own paid parking, often charged by the day (¥300–500). Arrive early in the morning in high season, spots fill up fast.",
  },
  {
    area: "Hotels & ryokans",
    advice: "Parking is almost always free and included. A real comfort compared to the big cities.",
  },
  {
    area: "Mountain roads",
    advice:
      "Fog, rain and winding roads: better to drive carefully. In winter, some roads around Fuji require snow tires or chains, so check with the rental agency before you set off.",
  },
];

export const fujiTips: string[] = [
  "Combine the track and the museum in a single half-day: they're 5 minutes from each other.",
  "Mount Fuji doesn't show itself every day: go early in the morning under clear skies for the best views from the road.",
  "A sports car like a Corvette takes on a whole new dimension on the small roads winding around the lake: expect slower drives than in a straight line.",
];
