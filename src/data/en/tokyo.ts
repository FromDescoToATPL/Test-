// Version anglaise de src/data/tokyo.ts : garder les deux fichiers en phase.
import type { Spot, ParkingTip } from "../types";
import { withBase } from "../../consts";

export const tokyoIntro =
  "For car enthusiasts, Tokyo is the benchmark. Tuned cars in every neighborhood, and the roar of their engines won't leave you indifferent. From Shinjuku to Shibuya by way of Tokyo Tower, you can't miss them. Often lined up along the road, you'll also find them on the expressway and at big car meets like Daikoku or Umihotaru PA. Not to mention the car-themed shops, and the rental agencies where you can book and drive your dream JDM. Where to rent, where to shop? I explain everything here!";

export const tokyoSpots: Spot[] = [
  {
    name: "OnlyJDM",
    category: "location",
    area: "Ōta, south Tokyo (near Haneda Airport)",
    description:
      "The JDM rental specialist that rented me this silver Lancer Evolution VIII for the day. A GT-R was parked right next to it: the kind of place any enthusiast should make the trip for.",
    tip: "Book well in advance: the most popular cars go fast.",
    mapsQuery: "OnlyJDM Car Rental Haneda Airport Store, 2 Chome-20-14 Omoriminami, Ota City, Tokyo",
    articleHref: withBase("/en/tokyo/only-jdm/"),
    filled: true,
  },
  {
    name: "Car meet spots worth knowing",
    category: "meetup",
    area: "Around Tokyo (Yokohama, Chiba...)",
    description:
      "Three expressway rest areas famous for car meets: Daikoku Futo PA (Yokohama), Umihotaru PA (Chiba) and Tatsumi PA. Supercars, tuned JDM cars and the occasional surprise gather there in the evening, especially on weekends. Unfortunately I didn't get the chance to go during my stay (the weather didn't cooperate), but these spots come up every single time people talk about car meets in Japan.",
    tip: "Check on site or online whether meets are still tolerated: these spots have a rocky history with the authorities. Be respectful if you go, they're rest areas open to everyone, not organized events.",
    filled: true,
    tested: false,
  },
  {
    name: "Where to drive in Tokyo",
    category: "route",
    area: "Odaiba, the Shutoko, all the way to Hakone",
    description:
      "From the Rainbow Bridge in Odaiba to the bends of Hakone: the roads worth driving in a rented JDM, day or night.",
    tip: "Check the weather before heading to Hakone: mountain roads lose all their charm in rain or fog.",
    articleHref: withBase("/en/tokyo/where-to-drive/"),
    filled: true,
  },
  {
    name: "Scale model shops",
    category: "shopping",
    area: "Shinjuku, Chiyoda, Shibuya",
    description:
      "Bic Camera, Ken Box and Ken Box B2F in Shinjuku, the Tomica Shop Tokyo at Tokyo Station, and the Liberty Walk universe in Shibuya: the best places to bring home a JDM scale model, from 1/18 down to 1/64.",
    tip: "At Ken Box, finding your gem can get expensive fast: go just to browse if you only want to look.",
    articleHref: withBase("/en/tokyo/scale-model-shops/"),
    filled: true,
  },
  {
    name: "Liberty Walk Tokyo",
    category: "shopping",
    area: "Shibuya",
    description:
      "One of the best streetwear spots in Tokyo for you and your car-loving friends. T-shirts, jackets, pants, sweatshirts: plenty to treat yourself.",
    tip: "Bring a solid budget in yen, the prices match the brand.",
    mapsQuery: "Liberty Walk, 4 Chome-26-3 Jingumae, Shibuya, Tokyo 150-0001",
    filled: true,
  },
  {
    name: "A-PIT Super Autobacs",
    category: "shopping",
    area: "Kōtō",
    description:
      "The same kind of store as in Kyoto: a wide choice of clothing from different brands (Mazda, Toyota, Nissan, etc.), plus several stands of magazines and scale models.",
    tip: "10% tax-free shopping with your passport. Make the most of it before November 1, after which refunds are only given at the airport.",
    mapsQuery: "A-PIT Super Autobacs, 2 Chome-7-20 Shinonome, Koto City, Tokyo 135-0062",
    filled: true,
  },
];

export const tokyoParking: ParkingTip[] = [
  {
    area: "Shibuya / Shinjuku / Ginza",
    advice:
      "Street parking is almost nonexistent and closely monitored. Rely on coin parking lots (Times, Park24, 三井のリパーク), easy to spot thanks to their yellow or red signs. Rates are high (¥300–500 per 30 min), but turnover is quick and paying at the machine is simple.",
  },
  {
    area: "Shopping malls",
    advice:
      "Many department stores offer 1 to 3 hours of free parking when you get your receipt validated at the information desk: handy for a stress-free shopping break.",
  },
  {
    area: "In general",
    advice:
      "Never double-park or park on the sidewalk: Japanese parking patrols issue tickets fast and without exception. Use the Times Car PARK or akippa app to book a spot in advance in busy areas.",
  },
];

export const tokyoTips: string[] = [
  "Drive early in the morning or in the evening to avoid traffic jams on the Shuto Expressway (Tokyo's urban expressway network), which gets especially busy during the day.",
  "Get an ETC card (electronic toll collection) with your rental: essential for moving through the expressways without stopping at every toll gate.",
  "The Roppongi/Aoyama area is ideal in the evening for spotting enthusiasts' cars parked outside bars and restaurants.",
];
