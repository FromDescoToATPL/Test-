// Version anglaise de src/data/osaka.ts : garder les deux fichiers en phase.
import type { Spot, ParkingTip } from "../types";

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
    name: "Liberty Walk (Osaka store)",
    category: "shopping",
    area: "To be confirmed",
    description:
      "The cult JDM widebody brand (LB★WORKS) also sells clothing and accessories in store. A must-stop to bring home something better than a fridge magnet.",
    tip: "Add the exact address, what you bought, the prices, and why you recommend the store (or not). Remember to add your photos.",
    filled: false,
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
