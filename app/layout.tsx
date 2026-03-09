import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jhgprocess-solutions.com"),
  title: {
    default: "JHGProcess-Solutions | Facturatie automatisering en inbox automatisering",
    template: "%s | JHGProcess-Solutions",
  },
  description:
    "JHGProcess-Solutions helpt bedrijven met facturatie automatisering, Moneybird automatisering, inbox automatisering en klantmails automatisering.",
  keywords: [
    "JHGProcess-Solutions",
    "JHGProcess Solutions",
    "facturatie automatisering",
    "Moneybird automatisering",
    "facturen automatiseren mkb",
    "inbox automatisering",
    "klantmails automatisering",
    "workflow automatisering",
    "administratie automatisering",
  ],
  applicationName: "JHGProcess-Solutions",
  authors: [{ name: "JHGProcess-Solutions" }],
  creator: "JHGProcess-Solutions",
  publisher: "JHGProcess-Solutions",
  alternates: {
    canonical: "https://www.jhgprocess-solutions.com",
  },
  openGraph: {
    title: "JHGProcess-Solutions | Facturatie automatisering en inbox automatisering",
    description:
      "Automatiseer facturatie, inboxverwerking en klantmails met JHGProcess-Solutions.",
    url: "https://www.jhgprocess-solutions.com",
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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