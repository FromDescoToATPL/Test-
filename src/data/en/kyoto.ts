// Version anglaise de src/data/kyoto.ts : garder les deux fichiers en phase.
import type { Spot, ParkingTip } from "../types";
import { withBase } from "../../consts";

export const kyotoIntro =
  "Kyoto is full of surprises: between the temples and Zen gardens hide some of the most respected enthusiast hangouts in the country. A-PIT Auto is the go-to spot, and Liberty Walk is never far away.";

export const kyotoSpots: Spot[] = [
  {
    name: "A-PIT Auto Kyoto",
    category: "shopping",
    area: "Saiin, west Kyoto",
    description:
      "A store spread over several floors, one of them entirely dedicated to cars: scale models, clothing, goodies, magazines and kits to modify your car.",
    tip: "Scale models cost more than the rest, but connoisseurs will find some genuinely rare pieces.",
    mapsQuery: "A PIT AUTOBACS KYOTO SHIJO, 1 Saiin Yasuzukacho, Ukyo Ward, Kyoto 615-0051",
    articleHref: withBase("/en/kyoto/a-pit-auto/"),
    filled: true,
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
