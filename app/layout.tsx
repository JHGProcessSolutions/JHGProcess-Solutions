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
    "JHGProcess-Solutions helpt bedrijven met facturatie automatisering, moneybird automatisering, facturen automatiseren mkb en inbox automatisering.",
  keywords: [
    "JHGProcess-Solutions",
    "JHGProcess Solutions",
    "facturatie automatisering",
    "moneybird automatisering",
    "facturen automatiseren mkb",
    "inbox automatisering",
    "klantmails automatisering",
    "workflow automatisering",
    "administratie automatisering",
  ],
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
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JHGProcess-Solutions",
  url: "https://www.jhgprocess-solutions.com",
  logo: "https://www.jhgprocess-solutions.com/LOGO - JHGProcess-Solutions.png",
  email: "info@jhgprocess-solutions.com",
  telephone: "+31646341101",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Roosendaal",
    addressCountry: "NL",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}