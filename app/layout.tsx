import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jhgprocess-solutions.com"),
  title: "JHGProcess-Solutions | Facturatie en inbox volledig geautomatiseerd",
  description:
    "JHGProcess-Solutions automatiseert facturatie, inboxverwerking en klantcommunicatie voor bedrijven.",
  keywords: [
    "JHGProcess-Solutions",
    "JHGProcess Solutions",
    "facturatie automatisering",
    "inbox automatisering",
    "klantcommunicatie automatisering",
    "workflow automatisering",
  ],
  applicationName: "JHGProcess-Solutions",
  openGraph: {
    title: "JHGProcess-Solutions",
    description:
      "Automatisering van facturatie, inbox en klantcommunicatie.",
    url: "https://jhgprocess-solutions.com",
    siteName: "JHGProcess-Solutions",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/LOGO - JHGProcess-Solutions.png",
        width: 1200,
        height: 630,
        alt: "JHGProcess-Solutions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}