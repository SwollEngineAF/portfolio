import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syahiid Rasidi — SCADA, IT & Product Engineering",
  description:
    "The portfolio of Syahiid Rasidi: SCADA and IT engineering, airport systems, industrial automation and thoughtful digital products.",
  applicationName: "Syahiid Rasidi Portfolio",
  openGraph: {
    title: "Syahiid Rasidi — SCADA, IT & Product Engineering",
    description:
      "Airport systems, industrial automation, enterprise IT and digital products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className={`${dmSans.className} font-sans`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
