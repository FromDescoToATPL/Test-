// Version anglaise de src/data/conduire-au-japon.ts : garder les deux fichiers en phase.
import type { DriveSection } from "../conduire-au-japon";
import { withBase } from "../../consts";

export const drivingIntro =
  `Driving in Japan as a car enthusiast is an absolute must! Everyone dreams of driving a modified JDM through the streets of Tokyo, racking up miles on the Shutoko or even joining the car meets.
It also lets you reach parts of each city that are still unexplored and less touristy.
So yes, driving in Tokyo isn't easy at first, but you get used to it quickly and Japanese drivers are really calm. Nothing to worry about!
In this guide, I'll walk you through the different steps to drive in Japan.`;

export const drivingSections: DriveSection[] = [
  {
    eyebrow: "Step 1",
    title: "Your license: International Driving Permit or translation",
    note:
      "Heads-up: I'm French, so this step is written from a French driver's point of view. What you need depends on the country that issued your license. Licenses from France, Belgium, Germany, Switzerland, Monaco and Taiwan require an official Japanese translation issued by JAF, while most other countries, including the US, the UK, Canada and Australia, require an International Driving Permit issued under the 1949 Geneva Convention. Check the JAF website for your own country before you go.",
    paragraphs: [
      "A French license alone isn't enough: French drivers need an official translation of their license from JAF.",
      "What is JAF? It's the Japan Automobile Federation. For certain countries, this translation replaces the International Driving Permit and lets you drive in Japan easily. Think of it as a temporary document. Before or during your trip to Japan, you submit your application on their website. I have a few tips that will let you do it before you even arrive in Japan, because rental cars can get booked up very quickly and it's better to plan ahead :)",
    ],
    bullets: ["JAF translation validity: 1 year from the date it's issued."],
    optionsIntro: "Here are the different ways to apply for your translation.",
    optionsLink: { label: "english.jaf.or.jp/driving-in-japan", href: "https://english.jaf.or.jp/driving-in-japan" },
    options: [
      {
        title: "Applying once you're in Japan",
        badge: "Easy",
        paragraphs: [
          "The JAF website is only accessible from inside the country. With a VPN like Proton or Ghost, the site blocks you straight away, and there's no way around it with a \"regular\" VPN (trust me, I speak from experience!).",
          "If you've decided to stay in one city for a while, this is probably the easiest method. No stress! Once you've arrived in the country, you fill in the information requested, namely your driver's license, personal details, etc., and then you have 2 payment options:",
          "1. You pay online directly, wait 1 day at most, and the site gives you a reference number so you can print your translation at a 7-Eleven or another store of your choice.",
          "2. You pay in person at the store. But be careful! If you pay in person, you'll still have to wait a little while for JAF to approve your translation.",
          "In other words: say you've rented a car for Tuesday. You go to a 7-Eleven to pay for your document, and you might only get the reference number the next day, which can be cutting it close if you've rented a car for a few hours or for the day.",
          "As long as you haven't paid, your application stays on hold, so plan carefully around when you arrive in the country and when you'll have the free time to do the JAF application and pick up your car.",
        ],
      },
      {
        title: "Going through an intermediary",
        badge: "Easy",
        paragraphs: [
          "Another option, more expensive but simpler. There are companies in Japan, like DrivinJapan, that handle the application for you and give you the translation. However, it can cost twice as much: expect €50 to €60 on average for this service, versus €20 on the JAF website.",
          "I think this option makes sense if you want to rent a car quickly and be sure to have your translation in time.",
          "JDM rental agencies can sometimes be fully booked several days or even weeks in advance. So if you wait until you're in the country to rent a JDM or another highly sought-after car, it'll probably be too late.",
          "You really need to plan ahead. If spending more doesn't bother you, this is probably the best method for you.",
        ],
      },
      {
        title: "Installing a Japanese VPN",
        badge: "Hard",
        paragraphs: [
          "This is the method I chose. I admit it's not the easiest, but it was also the cheapest.",
          "I get that this method isn't for everyone, but it gets you your translation quickly, cheaply and stress-free.",
          "Here's the VPN to install, reliable and virus-free. It was created by Japanese developers to help foreigners use Japanese services from abroad.",
          "Once it's installed and connected to a server, you can easily access the JAF website, in Japanese :)",
          "Use a translator to get through the process.",
          "It was my first time in Japan, and before spending money on a car that cost a fair amount for a single day, I absolutely wanted to have my JAF translation before arriving, at the lowest possible cost.",
          "When you reach the end of the form, you're asked to either pay online (about €20) or pay at a 7-Eleven. You absolutely must pay online, otherwise your application will be put on hold.",
          "1 day later, you'll get your code to print your translation.",
          "Note: the printing code is only valid for one week. After that, you'll have to go back to the JAF site and request a new code. It takes about 30 minutes and then you can get your translation.",
        ],
        link: { label: "vpngate.net/en/howto_softether.aspx", href: "https://www.vpngate.net/en/howto_softether.aspx" },
      },
    ],
  },
  {
    eyebrow: "Step 2",
    title: "Renting a car",
    paragraphs: [
      "No road trip without a car. Big chains or JDM specialists, minimum age, insurance, ETC card... everything to check before booking is covered on the dedicated rental page.",
    ],
    moreInfo: { label: "See the Rent a car guide", href: withBase("/en/rent-a-car/") },
  },
  {
    eyebrow: "Step 3",
    title: "Traffic rules",
    paragraphs: [
      "Japan drives on the left, with the steering wheel on the right. The first few kilometers take some concentration, especially at intersections and roundabouts, where your reflexes are reversed.",
      "On the expressway, the left lane is the slowest one. Pay close attention to the traffic lights, which hang American-style across the intersection in front of you. There are several lights: one for turning left, one for going straight and one for turning right, which takes some focus.",
      "Speed limits are low: 30 to 50 km/h in town, 80 to 100 km/h on expressways, though there's some tolerance of 10 to 20 km/h on major roads that you shouldn't go beyond.",
      "Near-zero tolerance for drinking and driving: better not to drink at all if you're driving.",
      "Once you've got these rules down, driving is fairly relaxed: Japanese drivers are careful and don't get angry when you make a mistake. After half an hour behind the wheel, you'll feel much more at ease on the road.",
    ],
  },
  {
    eyebrow: "Step 4",
    title: "Tolls and the ETC card",
    paragraphs: [
      "Japan's expressway network (Shuto, Tomei, Chuo, Tomei-Hanshin...) is tolled, with rates based on the distance traveled. Without an ETC card, you take a ticket at the entrance and pay in cash or by card at the exit.",
      "With an ETC card rented along with the car, you drive through toll gates without stopping: a real time-saver and much less stress on long drives. I fully recommend it.",
    ],
  },
  {
    eyebrow: "Step 5",
    title: "Parking",
    paragraphs: [
      "Illegal parking isn't tolerated: fines and towing happen fast, even for a stop of a few minutes. Coin parking lots (Times, Park24...) are everywhere in cities, and you pay at the machine.",
      "Keep in mind what kind of car you're driving and avoid lots with lock plates that rise under the car, as they could damage the underbody of a low car. There are plenty of lots without them.",
      "You'll find the specifics for each city (busy neighborhoods, temple parking, rates) on the Tokyo, Mount Fuji, Osaka and Kyoto pages.",
    ],
  },
  {
    eyebrow: "Step 6",
    title: "Filling up",
    paragraphs: [
      "There are two types of gas stations: self-service (セルフ, \"self\") and full-service, where staff fill up the tank for you. Full-service stations are more common in rural areas and often quicker if you don't speak Japanese.",
      "Double-check the fuel type: レギュラー (regular) is what you need for the vast majority of rental cars; ハイオク (hi-oku, high octane) is more expensive and meant for certain sports cars. Ask the rental agency to confirm if in doubt.",
    ],
  },
  {
    eyebrow: "Step 7",
    title: "Useful apps",
    paragraphs: [
      "Google Maps works very well in Japan for everyday navigation. NAVITIME is popular for its toll estimates and optimized routes. Also keep your rental company's app handy for assistance if something goes wrong.",
    ],
  },
];
