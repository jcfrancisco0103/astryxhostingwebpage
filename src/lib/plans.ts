export const PANEL_URL = "https://panel.astryxhosting.fun";

export type Plan = {
  name: string;
  price: number;
  ram: string;
  cpu: string;
  storage: string;
  fit: string;
  balanced?: boolean;
};

export type Series = {
  id: "xeon" | "ryzen";
  name: string;
  kicker: string;
  summary: string;
  plans: Plan[];
};

export const series: Series[] = [
  {
    id: "xeon",
    name: "Intel Xeon Gold",
    kicker: "Budget dedicated",
    summary:
      "The lower monthly line. Steady cores and the original storage sizes, priced so a world can start without a heavy bill.",
    plans: [
      {
        name: "Pig",
        price: 249,
        ram: "4 GB",
        cpu: "2 vCores",
        storage: "10 GB NVMe",
        fit: "A small world for a few friends.",
      },
      {
        name: "Wolf",
        price: 349,
        ram: "6 GB",
        cpu: "2.5 vCores",
        storage: "20 GB NVMe",
        fit: "A regular group that stays online.",
        balanced: true,
      },
      {
        name: "Zombie",
        price: 549,
        ram: "8 GB",
        cpu: "3 vCores",
        storage: "30 GB NVMe",
        fit: "Farms, plugins, and longer sessions.",
      },
      {
        name: "Skeleton",
        price: 799,
        ram: "12 GB",
        cpu: "4 vCores",
        storage: "40 GB NVMe",
        fit: "A busy SMP with room to spare.",
      },
      {
        name: "Ender Dragon",
        price: 1099,
        ram: "16 GB",
        cpu: "5 vCores",
        storage: "50 GB NVMe",
        fit: "The largest Xeon plan for a heavy world.",
      },
    ],
  },
  {
    id: "ryzen",
    name: "Ryzen 9",
    kicker: "Quicker cores",
    summary:
      "The faster line. Stronger per-core speed for worlds that care about tick rate, with storage sized to the machine.",
    plans: [
      {
        name: "Core",
        price: 399,
        ram: "4 GB",
        cpu: "1 vCore",
        storage: "12 GB NVMe",
        fit: "A quiet starter on Ryzen.",
      },
      {
        name: "Boost",
        price: 549,
        ram: "6 GB",
        cpu: "2 vCores",
        storage: "18 GB NVMe",
        fit: "Friends online without crowding the map.",
      },
      {
        name: "Power",
        price: 749,
        ram: "8 GB",
        cpu: "2 vCores",
        storage: "20 GB NVMe",
        fit: "Plugins and a map that keeps growing.",
        balanced: true,
      },
      {
        name: "Performance",
        price: 999,
        ram: "12 GB",
        cpu: "3 vCores",
        storage: "30 GB NVMe",
        fit: "An SMP that stays smooth when it fills up.",
      },
      {
        name: "Ultra",
        price: 1399,
        ram: "16 GB",
        cpu: "4 vCores",
        storage: "40 GB NVMe",
        fit: "The largest Ryzen plan when the world gets loud.",
      },
    ],
  },
];

export const features = [
  {
    title: "High performance",
    body: "Plans are sized to the machine so gameplay stays smooth instead of fighting the hardware.",
  },
  {
    title: "DDoS protection",
    body: "Attacks are filtered before they reach your world, so a bad night does not take the server down.",
  },
  {
    title: "NVMe storage",
    body: "Worlds, chunks, and backups sit on fast disks. Loading a map should not be the slow part.",
  },
  {
    title: "Free backups",
    body: "A restore point is included. If a build breaks, you can roll the world back.",
  },
  {
    title: "Pterodactyl panel",
    body: "Start, stop, upload files, and watch the console yourself at the web panel.",
  },
  {
    title: "24/7 support",
    body: "When the server will not start, a person answers. Message support from the panel.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Pick a plan",
    body: "Choose Xeon Gold for the lower price, or Ryzen 9 when you want quicker cores.",
  },
  {
    n: "02",
    title: "Open the panel",
    body: "Create the server at panel.astryxhosting.fun. You manage it from there.",
  },
  {
    n: "03",
    title: "Invite the group",
    body: "Share the address, join the world, and play. Lag should not be part of the game.",
  },
];

export const faqs = [
  {
    q: "Where do I manage the server?",
    a: "Every plan uses the Pterodactyl panel at panel.astryxhosting.fun. That is where you start the server, read the console, and reach support.",
  },
  {
    q: "Are prices monthly?",
    a: "Yes. Every price on this page is in Philippine pesos per month. RAM on the plan is the RAM you get.",
  },
  {
    q: "Xeon Gold or Ryzen 9?",
    a: "Xeon Gold is the budget dedicated line, from Pig at ₱249 up to Ender Dragon. Ryzen 9 costs more and gives you stronger cores, from Core at ₱399 up to Ultra.",
  },
  {
    q: "What if a Ryzen world is larger than the new storage?",
    a: "Message support from the panel and we will sort it out. Intel Xeon storage stays at 10, 20, 30, 40, and 50 GB.",
  },
  {
    q: "What is included on every plan?",
    a: "DDoS protection, NVMe storage, free backups, the web panel, and 24/7 support. The motto stays the same: fast, reliable, and affordable.",
  },
];

export function formatPeso(amount: number) {
  return amount.toLocaleString("en-PH");
}
