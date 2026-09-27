// Version anglaise de src/data/osaka.ts : garder les deux fichiers en phase.
import type { Spot, ParkingTip } from "../types";
import { withBase } from "../../consts";

export const osakaIntro =
  "Osaka is Japan's raw energy: flashing Dotonbori, a street culture more laid-back than Tokyo's, informal night meets of enthusiasts on a street corner, and a few cult car-streetwear spots, starting with Liberty Walk.";

// Places Clément tried in person.
export const osakaSpots: Spot[] = [
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
  {
    name: "Meets in Dotonbori and Sankaku Park",
    category: "meetup",
    area: "Dotonbori and Amerikamura",
    description:
      "One weekday evening in Dotonbori, just before reaching Sankaku Park, I came across a row of MX-5s parked with their hoods open, their owners comparing builds. A little further on, at the park, it was a motorcycle meet.",
    tip: "These meets seem impromptu: stroll between Dotonbori and the park in the evening and keep your eyes open. Liberty Walk is right next door, in the Horie district.",
    mapsQuery: "Mitsu Park (Sankaku Koen), Nishishinsaibashi, Osaka",
    filled: true,
  },
];

// Places spotted for the next trip, not tried yet (the section says so once).
export const osakaDiscover: Spot[] = [
  {
    name: "MR.HIRO CAR STUDIO",
    category: "location",
    area: "Taishō, southwest Osaka",
    description:
      "Mr. Hiro's garage, full of the JDM cars he has built: you can visit it and rent his cars, from the Toyota AE86 to the Nissan Skyline GT-R R32. Upstairs, simulators for sim racing, and on the roof, a drift kart track.",
    tip: "It's not cheap and the number of cars is limited: book well in advance.",
    mapsQuery: "34.65669274686977,135.47187963818163",
    filled: true,
  },
  {
    name: "Japan Drive Legends",
    category: "location",
    area: "Shinsaibashi, central Osaka",
    description:
      "A JDM rental agency right in the city center, with English-speaking staff. Among the fleet: GT86, Fairlady Z, Lancer Evolution, GTO and Silvia S15.",
    tip: "Pick-up and return between 10 a.m. and 7 p.m.",
    mapsQuery: "Japan Drive Legends, 3 Chome-8-15 Minamisenba, Chuo Ward, Osaka",
    website: "https://rent.japandrivelegends.com/jdm-car-rental/",
    filled: true,
  },
  {
    name: "Osaka Auto Messe",
    category: "evenement",
    area: "INTEX Osaka, on the bay",
    description:
      "One of the biggest custom car shows in Japan, held every year in mid-February since 1997. Next edition from February 12 to 14, 2027.",
    tip: "Over 200,000 visitors every year: book your hotel and car early.",
    mapsQuery: "INTEX Osaka",
    website: "https://www.automesse.jp/en/",
    filled: true,
  },
  {
    name: "Mount Rokko and the Higashi-Rokko Observatory",
    category: "route",
    area: "Kobe, about 1 hour from Osaka",
    description:
      "The tight bends of the Omote-Rokko Driveway climb to the top of Mount Rokko. Up there, the Higashi-Rokko Observatory is a well-known hangout for car enthusiasts, overlooking the whole of Osaka Bay.",
    tip: "The observatory is free, but it sits on the Royu Driveway, a toll road.",
    mapsQuery: "Higashi Rokko Observatory",
    filled: true,
  },
  {
    name: "Akashi-Kaikyō Bridge and Awaji Island",
    category: "route",
    area: "Kobe, about 1 hour from Osaka",
    description:
      "Nearly 4 km over the Akashi Strait: one of the longest suspension bridges in the world, leading to Awaji Island and its roads along the Seto Inland Sea.",
    tip: "Toll bridge: an ETC card makes everything easier.",
    mapsQuery: "Akashi Kaikyo Bridge",
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
  "Dotonbori, Amerikamura and Horie are next to each other: Liberty Walk and Sankaku Park are walkable in the same evening, no car needed.",
  "To really drive, get out of the city: Mount Rokko and the Akashi bridge are about 1 hour away.",
  "Motorsport fans: Suzuka Circuit, home of the Japanese F1 Grand Prix, is about 2 hours' drive from Osaka.",
];
