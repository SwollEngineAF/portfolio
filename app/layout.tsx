import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syahiid Rasidi — IT Engineer Dossier",
  description:
    "Syahiid Rasidi is a Certified Technologist working across SCADA, industrial automation, airport baggage systems, and full-stack product engineering.",
  metadataBase: new URL("https://syd.rebakanyut.com"),
  openGraph: {
    title: "Syahiid Rasidi — IT Engineer Dossier",
    description:
      "SCADA · IT · product — solving real systems with quiet precision.",
    url: "https://syd.rebakanyut.com",
    siteName: "Rebakanyut · The Practice",
    type: "profile",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={dmSans.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
