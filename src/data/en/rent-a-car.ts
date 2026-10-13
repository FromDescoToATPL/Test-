// Version anglaise de src/data/louer-une-voiture.ts : garder les deux fichiers en phase.
import type { Spot } from "../types";
import type { AgenceTestee, CritereLocation, VilleLocation } from "../louer-une-voiture";
import { withBase } from "../../consts";

export const rentIntro =
  `Renting a car is hands down the best way to get off the beaten path in Japan: mountain roads, remote spots, enthusiast garages that public transport never reaches. But before you hit the road, there's a choice to make, and it completely changes the experience.
On one side, the big traditional chains (Toyota, Nissan, ORIX...): counters in almost every station and airport, but a fairly ordinary fleet. More on them at the end of the page.
On the other side, the specialist agencies, far more under the radar, which rent sports cars and real JDM cars by the day. You won't find them on the usual comparison sites: you have to look for them, often directly on Google Maps in the city you're visiting. In return, you get behind the wheel of a car with a soul: a tuned Evolution, a Corvette, sometimes more. I rented from two of them, OnlyJDM in Tokyo and MFJ Rental Cars in Kawaguchiko, and honestly, it was worth every minute of research.
In this guide, I share the best places for both types of agencies and everything to check before you take the keys.`;

export const rentCriteria: { key: CritereLocation; label: string; emphasis?: boolean }[] = [
  { key: "voiture", label: "Car rented" },
  { key: "prix", label: "Price", emphasis: true },
  { key: "boite", label: "Gearbox" },
  { key: "caution", label: "Deposit" },
  { key: "age", label: "Minimum age" },
];

const onlyJdm: AgenceTestee = {
  slug: "onlyjdm",
  name: "OnlyJDM",
  area: "Tokyo, southern branch (Ōta)",
  values: {
    voiture: "Mitsubishi Lancer Evolution VIII GSR",
    prix: "¥27,000 for 7 hours, ¥30,000 for 24 hours",
    boite: "Manual, 6-speed",
    caution: "¥50,000, returned when you bring the car back",
    age: "23, with 3 years of driving experience",
  },
  notes: { prix: "Rates shown on their website in October 2026." },
  verdict:
    "Attractive prices and a real tuned JDM. The only downside: the agency is far from the center, allow 40 minutes by train and a 15-minute walk from Shinjuku.",
  articleHref: withBase("/en/tokyo/only-jdm/"),
  website: "https://only-jdm.com/",
};

const mfj: AgenceTestee = {
  slug: "mfj",
  name: "MFJ Rental Cars",
  area: "Kawaguchiko, at the foot of Mount Fuji",
  values: {
    voiture: "Chevrolet Corvette C7 Stingray (not a JDM, but what a V8)",
    prix: "¥13,000 for the day",
    boite: "Automatic",
    caution: "None",
    age: "21",
  },
  notes: { prix: "About €72, the promo rate I paid when I booked." },
  verdict:
    "A Corvette at a promo price and a lovely manager. Watch out for fuel: it's billed on a reference consumption, which penalizes economical drivers.",
  articleHref: withBase("/en/mount-fuji/mfj-rental-cars/"),
  website: "https://mfj-car.com/en/index.html",
};

export const rentGtr = {
  eyebrow: "Before you book an R34",
  title: "Real GT-R or GT-R look?",
  intro:
    "Many agencies rent R34 Skylines dressed up as a GT-R. From the outside, it's almost the same car. Under the hood, not at all. Nothing dishonest if the agency says so clearly, but it's better to know what you're paying for.",
  colonnes: { gtr: "Real GT-R", look: "GT-R look" },
  lignes: [
    { label: "Chassis code", gtr: "BNR34", look: "Usually ER34" },
    { label: "Engine", gtr: "RB26 twin-turbo, 2.6 L", look: "RB25, 2.5 L" },
    { label: "Drivetrain", gtr: "All-wheel drive", look: "Rear-wheel drive" },
    { label: "Gearbox", gtr: "Manual only", look: "Manual or automatic" },
  ],
  astuceTitre: "How to check",
  astuce:
    "Ask the agency for the chassis code before you pay: it's on the Japanese vehicle registration certificate (the shaken-sho). And remember: an R34 with an automatic gearbox is never a real GT-R.",
};

const samurai: Spot = {
  name: "Samurai Car Japan",
  category: "location",
  area: "Shibuya, Tokyo",
  description:
    "R34 Skylines for self-drive rental over 24 or 48 hours, or on a guided drive to Daikoku. The agency is upfront about it: they're Skyline 25GT Turbos (ER34) with the GT-R look, not BNR34s.",
  tip: "Manual or automatic gearbox depending on the car.",
  website: "https://samuraicarjapanjdm.jp/",
  filled: true,
};

const omoren: Spot = {
  name: "Omoshiro Rent a Car (Omoren)",
  category: "location",
  area: "Noda (Chiba), a few cars near Narita Airport",
  description:
    "A huge fleet of enthusiast cars, from small sports cars all the way to the Skyline GT-R R34, with a website in English.",
  website: "https://omoren.com/",
  filled: true,
};

const fun2drive: Spot = {
  name: "Fun2Drive",
  category: "location",
  area: "Hakone, near Mount Fuji",
  description:
    "Guided convoy drives in English on the mountain roads of Hakone, behind the wheel of a GT-R, NSX, Supra or RX-7. A guided outing rather than a self-drive rental.",
  website: "https://fun2drive-japan.com/",
  filled: true,
};

const japanDriveLegends: Spot = {
  name: "Japan Drive Legends",
  category: "location",
  area: "Shinsaibashi, central Osaka",
  description:
    "A JDM rental agency right in the center, with English-speaking staff. The fleet includes a GT86, Fairlady Z, Lancer Evolution, GTO and Silvia S15, among others.",
  tip: "Pick-up and drop-off between 10 a.m. and 7 p.m.",
  mapsQuery: "Japan Drive Legends, 3 Chome-8-15 Minamisenba, Chuo Ward, Osaka",
  website: "https://rent.japandrivelegends.com/jdm-car-rental/",
  filled: true,
};

const mrHiro: Spot = {
  name: "MR.HIRO CAR STUDIO",
  category: "location",
  area: "Taishō, Osaka",
  description:
    "An enthusiast garage renting restored JDM cars: AE86, RX-7, 180SX, Silvia S15, NSX, S2000 and even a Skyline GT-R R32. On site, there's also a racing simulator and a bar.",
  tip: "Rentals from 3 to 24 hours, with mileage included depending on the duration.",
  mapsQuery: "MR.HIRO CAR STUDIO, 4 Chome-12-21 Izuo, Taisho Ward, Osaka",
  website: "https://mrhiro-jdm.com/",
  filled: true,
};

export const rentCities: VilleLocation[] = [
  { id: "tokyo", name: "Tokyo", testees: [onlyJdm], reperees: [samurai, omoren] },
  { id: "mount-fuji", name: "Mount Fuji and Hakone", testees: [mfj], reperees: [fun2drive] },
  { id: "osaka", name: "Osaka", testees: [], reperees: [japanDriveLegends, mrHiro] },
];

export const majorChains = {
  description:
    "Toyota Rent a Car, Nissan Rent a Car, ORIX Rent a Car, Times Car Rental, Nippon Rent-A-Car: the easiest networks for a first trip, with English-speaking counters in most stations and airports.",
  tip: "Book online before you leave: popular models (and the rare sports cars in their fleets) go fast in high season.",
};

export const rentAdvice: { title: string; text: string; link?: { label: string; href: string } }[] = [
  {
    title: "International Driving Permit or translation",
    text:
      "Your national license alone isn't enough: depending on the country that issued it, you'll need an International Driving Permit (1949 Geneva Convention) to show with your license, or an official Japanese translation of it. Full details on the page",
    link: { label: "Driving in Japan", href: withBase("/en/driving-in-japan/") },
  },
  {
    title: "Insurance and deductible",
    text:
      "The basic insurance (included) covers damage but often leaves a high deductible in case of an accident. The extra coverage offered at the counter (CDW / reduced deductible) costs a few thousand yen per day and can add a significant amount to the rental. If you're an experienced driver, sticking with the basic insurance can save you a few dozen euros; otherwise, the extra coverage is worth it. In Tokyo, I had no problems at all.",
  },
  {
    title: "Age and driving experience",
    text:
      "Most rental companies require you to be at least 21 with 1 year of driving experience; sports car specialists sometimes raise the bar (25 years old, 2 to 3 years of experience). Check the exact conditions before booking.",
  },
  {
    title: "Photos and videos before and after",
    text:
      "Before you even start the engine, walk all the way around the car and take photos and a video, including any existing scratches or damage. Do the same when you bring it back, before handing over the keys. It's your only protection if there's a disagreement about the car's condition, and it only takes two minutes.",
  },
  {
    title: "GPS and ETC card",
    text:
      "Ask for an English-language GPS and an ETC card (electronic toll collection) when you book: both are easy to arrange at the counter but may not be available if you ask at the last minute.",
  },
];
