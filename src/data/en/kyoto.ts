// Version anglaise de src/data/kyoto.ts : garder les deux fichiers en phase.
import type { Spot, ParkingTip } from "../types";
import { withBase } from "../../consts";

export const kyotoIntro =
  "Kyoto is full of surprises: between the temples and Zen gardens hide some of the most respected enthusiast hangouts in the country. A PIT Autobacs is the go-to spot, and Liberty Walk is never far away.";

export const kyotoSpots: Spot[] = [
  {
    name: "A PIT Autobacs Kyoto Shijo",
    category: "shopping",
    area: "Saiin, west Kyoto",
    description:
      "Several floors dedicated to cars: a bookstore, scale models, clothing, goodies, magazines, wheels, and even car dealerships.",
    tip: "Scale models cost more than the rest, but connoisseurs will find some genuinely rare pieces.",
    mapsQuery: "A PIT AUTOBACS KYOTO SHIJO, 1 Saiin Yasuzukacho, Ukyo Ward, Kyoto 615-0051",
    articleHref: withBase("/en/kyoto/a-pit-auto/"),
    filled: true,
  },
];

// Places spotted for the next trip, not tried yet (the section says so once).
export const kyotoDiscover: Spot[] = [
  {
    name: "Liberty Walk Kyoto",
    category: "shopping",
    area: "Nakagyō, near Sanjo Ohashi bridge",
    description:
      "Liberty Walk's Kyoto store, opened in March 2026 a stone's throw from the Kamogawa river: clothing, goodies, Kyoto exclusives, and even a café for a break.",
    tip: "Open every day from 9 a.m.: perfect for a break between two temple visits.",
    mapsQuery: "Liberty Walk Kyoto, 92 Nakajimacho, Nakagyo Ward, Kyoto 604-8031",
    website: "https://libertywalk.co.jp/kyoto/",
    filled: true,
  },
];

export const kyotoParking: ParkingTip[] = [
  {
    area: "Around the temples (Kiyomizu-dera, Fushimi Inari, Arashiyama...)",
    advice:
      "Paid parking on site, but with limited capacity: it fills up fast in high season (sakura in spring, momiji in autumn). Arrive before 9 a.m., or pick a lot a little further out and walk the rest of the way.",
  },
  {
    area: "City center (Gion, Kawaramachi)",
    advice:
      "Narrow streets, often closed to cars or ill-suited to traffic during festivals. A coin parking lot on the edge of the center plus public transport is often simpler.",
  },
];

export const kyotoTips: string[] = [
  "No car needed between the two spots: the Hankyu line runs directly from Saiin Station (near A PIT Autobacs) to Kyoto-Kawaramachi, about a 10-minute walk from Liberty Walk.",
  "Bring your passport: tax-free shopping is available at A PIT Autobacs.",
];
