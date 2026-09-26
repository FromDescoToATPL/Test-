// Version anglaise de src/data/louer-une-voiture.ts : garder les deux fichiers en phase.
import type { Spot } from "../types";
import { withBase } from "../../consts";

export const rentIntro =
  `Renting a car is hands down the best way to get off the beaten path in Japan: mountain roads, remote spots, enthusiast garages that public transport never reaches. But before you hit the road, there's a choice to make, and it completely changes the experience.
On one side, the big traditional chains: Toyota Rent a Car, Nissan Rent a Car, ORIX, Times Car Rental, Nippon Rent-A-Car... They have counters in almost every station and airport, English-speaking staff and dead-simple online booking. The fleet is fairly ordinary (city cars, family cars, a few hybrids), but for a first trip or a hassle-free drive, they're unbeatable.
On the other side, the specialist agencies, far more under the radar, which rent sports cars and real JDM cars by the day. You won't find them on the usual comparison sites: you have to look for them, often directly on Google Maps in the city you're visiting. In return, you get behind the wheel of a car with a soul: a tuned Evolution, a Corvette, sometimes more. I rented from two of them, OnlyJDM in Tokyo and MFJ Rental Cars in Kawaguchiko, and honestly, it was worth every minute of research.
In this guide, I share the best places for both types of agencies and everything to check before you take the keys.`;

export const rentSpots: Spot[] = [
  {
    name: "Major national chains",
    category: "location",
    area: "Stations and airports all over Japan",
    description:
      "Toyota Rent a Car, Nissan Rent a Car, ORIX Rent a Car, Times Car Rental, Nippon Rent-A-Car: the easiest networks for a first trip, with English-speaking counters in most stations and airports.",
    tip: "Book online before you leave: popular models (and the rare sports cars in their fleets) go fast in high season.",
    filled: true,
  },
  {
    name: "Sports car / JDM specialists",
    category: "location",
    area: "To be confirmed",
    description:
      "Beyond the big chains, a few local agencies rent sports cars and JDM cars by the day: the Corvette C7 I rented from MFJ Rental Cars in Kawaguchiko (Mount Fuji page), or the Evolution VIII from OnlyJDM in Tokyo (Tokyo page). More places like these to discover and add here.",
    tip: "Add the other agencies you've spotted: city, models available, rates, conditions.",
    filled: false,
  },
];

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
