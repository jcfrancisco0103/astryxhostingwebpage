import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({
  src: [
    { path: "../../posters/fonts/Outfit-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../posters/fonts/Outfit-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../posters/fonts/Outfit-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../posters/fonts/Outfit-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../posters/fonts/Outfit-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
});

const syne = localFont({
  src: [
    { path: "../../posters/fonts/Syne-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../posters/fonts/Syne-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../posters/fonts/Syne-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-syne",
  display: "swap",
});

const peso = localFont({
  src: "../fonts/peso.ttf",
  weight: "700",
  variable: "--font-peso-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astryx Hosting — Minecraft servers in the Philippines",
  description:
    "Fast, reliable, and affordable Minecraft hosting. Intel Xeon Gold and Ryzen 9 plans, NVMe storage, DDoS protection, free backups, and a Pterodactyl panel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${outfit.variable} ${syne.variable} ${peso.variable}`}>
      <body className="antialiased">
        <div className="sky" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
