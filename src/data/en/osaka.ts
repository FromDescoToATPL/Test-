// Version anglaise de src/data/osaka.ts : garder les deux fichiers en phase.
import type { Spot, ParkingTip } from "../types";
import { withBase } from "../../consts";

export const osakaIntro =
  "Osaka is Japan's raw energy: flashing Dotonbori, a street culture more laid-back than Tokyo's, informal night meets of enthusiasts on a street corner, and a few cult car-streetwear spots, starting with Liberty Walk.";

export const osakaNote =
  "My stop in Osaka was short: apart from Liberty Walk, I didn't have time to do everything. So I've added the places I spotted for my next trip, marked \"Not tried yet\". They'll be completed, with photos, over my next trips.";

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
    name: "Sankaku Park (Mitsu Park)",
    category: "meetup",
    area: "Amerikamura, a stone's throw from Dotonbori",
    description:
      "The small triangular park in the heart of Amerikamura, the meeting point of Osaka's street culture. Walking by one evening, I came across a motorcycle meet. I didn't see any cars there that day, but I wouldn't be surprised if they show up too.",
    tip: "Liberty Walk is in the neighboring Horie district: you can easily do both on foot in the same evening.",
    mapsQuery: "Mitsu Park (Sankaku Koen), Nishishinsaibashi, Osaka",
    filled: true,
  },
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
    name: "MR.HIRO CAR STUDIO",
    category: "location",
    area: "Taishō, southwest Osaka",
    description:
      "Mr. Hiro's garage, full of the JDM cars he has built: you can visit it and rent his cars, from the Toyota AE86 to the Nissan Skyline GT-R R32. Upstairs, racing simulators for sim racing fans, and on the roof, a drift kart track. Unfortunately, I didn't have time to go.",
    tip: "It's not cheap and the number of cars is limited: book well in advance if one of them catches your eye.",
    mapsQuery: "34.65669274686977,135.47187963818163",
    filled: true,
    tested: false,
  },
  {
    name: "Japan Drive Legends",
    category: "location",
    area: "Shinsaibashi, central Osaka",
    description:
      "A JDM rental agency right in the city center, with English-speaking staff. Among the fleet: a GT86, a Fairlady Z, a Lancer Evolution, a GTO and a Silvia S15. Spotted while putting this guide together, not tried yet.",
    tip: "Pick-up and return between 10 a.m. and 7 p.m. As everywhere in Japan: International Driving Permit or official translation, depending on your country.",
    mapsQuery: "Japan Drive Legends, 3 Chome-8-15 Minamisenba, Chuo Ward, Osaka",
    website: "https://rent.japandrivelegends.com/jdm-car-rental/",
    filled: true,
    tested: false,
  },
  {
    name: "Osaka Auto Messe",
    category: "evenement",
    area: "INTEX Osaka, on the bay",
    description:
      "One of the biggest custom car shows in Japan, held every year in mid-February since 1997: modified cars, parts, tuning, car audio and accessories. The next edition runs from February 12 to 14, 2027.",
    tip: "Over 200,000 visitors every year: if your trip falls in February, book your hotel and car early.",
    mapsQuery: "INTEX Osaka",
    website: "https://www.automesse.jp/en/",
    filled: true,
    tested: false,
  },
];

export const osakaRoutes: Spot[] = [
  {
    name: "Mount Rokko and the Higashi-Rokko Observatory",
    category: "route",
    area: "Kobe, about 1 hour from Osaka",
    description:
      "The tight bends of the Omote-Rokko Driveway climb above Kobe to the top of Mount Rokko. Up there, the Higashi-Rokko Observatory, free and open day and night (except in winter), is a well-known hangout for car enthusiasts, overlooking the whole of Osaka Bay.",
    tip: "The observatory is on the Royu Driveway, a toll road. The night view is worth the trip.",
    mapsQuery: "Higashi Rokko Observatory",
    filled: true,
    tested: false,
  },
  {
    name: "Akashi-Kaikyō Bridge and Awaji Island",
    category: "route",
    area: "Kobe, about 1 hour from Osaka",
    description:
      "Nearly 4 km over the Akashi Strait: one of the longest suspension bridges in the world links Kobe to Awaji Island, which is best explored by car, along the Seto Inland Sea.",
    tip: "The bridge is part of the expressway, so it's tolled: an ETC card makes everything easier.",
    mapsQuery: "Akashi Kaikyo Bridge",
    filled: true,
    tested: false,
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
