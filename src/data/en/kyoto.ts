// Version anglaise de src/data/kyoto.ts : garder les deux fichiers en phase.
import type { Spot, ParkingTip } from "../types";
import { withBase } from "../../consts";

export const kyotoIntro =
  "Kyoto is full of surprises: between the temples and Zen gardens hide some of the most respected enthusiast hangouts in the country. A-PIT Auto is the go-to spot, and Liberty Walk is never far away.";

export const kyotoSpots: Spot[] = [
  {
    name: "A-PIT Auto Kyoto",
    category: "garage",
    area: "To be confirmed",
    description:
      "The enthusiasts' temple in Kyoto. Parts, tuning, a workshop vibe: a place JDM fans visiting the Kansai region mention every single time.",
    tip: "Add the address, what you saw or bought there, and your take on the welcome.",
    articleHref: withBase("/en/kyoto/a-pit-auto/"),
    filled: false,
  },
  {
    name: "Liberty Walk (Kyoto store)",
    category: "shopping",
    area: "To be confirmed",
    description:
      "The second Liberty Walk stop of the trip, for the brand's clothing and accessories. Handy if the Osaka store didn't have everything you were looking for.",
    tip: "Add the exact address, your purchases, the prices, and your photos.",
    filled: false,
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
  "Section in progress: routes, the best mountain roads around Kyoto, photo spots with a JDM in the foreground.",
];
