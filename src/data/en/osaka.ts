// Version anglaise de src/data/osaka.ts : garder les deux fichiers en phase.
import type { Spot, ParkingTip } from "../types";
import { withBase } from "../../consts";

export const osakaIntro =
  "Osaka is Japan's raw energy: flashing Dotonbori, a street culture more laid-back than Tokyo's, informal night meets of enthusiasts on a street corner, and a few cult car-streetwear spots, starting with Liberty Walk.";

export const osakaSpots: Spot[] = [
  {
    name: "Roadster / Miata night meet",
    category: "meetup",
    area: "To be confirmed (neighborhood spotted with UGG stores nearby)",
    description:
      "A row of MX-5s/Roadsters parked with their hoods open on a weekday evening, owners comparing their builds: this kind of informal meet is what makes Osaka unique for an enthusiast.",
    tip: "Specify the neighborhood and whether it's a regular meet (day/time) so readers can go too.",
    filled: false,
  },
  {
    name: "Liberty Walk Osaka",
    category: "shopping",
    area: "Kitahorie, not far from Dotonbori",
    description:
      "The small store of the cult widebody brand (LB★WORKS): clothing, accessories, scale models and Osaka limited editions.",
    tip: "If you already know the Tokyo store, the detour is mostly worth it for the Osaka limited editions.",
    mapsQuery: "Liberty Walk, 1 Chome-3-13 Kitahorie, Nishi Ward, Osaka 550-0014",
    articleHref: withBase("/en/osaka/liberty-walk/"),
    filled: true,
  },
];

export const osakaParking: ParkingTip[] = [
  {
    area: "Dotonbori / Namba",
    advice:
      "A very busy pedestrian area: forget about parking right there. Use one of the many Times parking garages a few streets away and finish on foot.",
  },
  {
    area: "Umeda",
    advice:
      "Large underground parking garages serve the business district: convenient, and a little cheaper than street-level lots.",
  },
];

export const osakaTips: string[] = [
  "Section in progress: routes, food spots, photo spots. More finds will be added over my next trips.",
];
