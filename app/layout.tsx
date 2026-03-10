import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jhgprocess-solutions.com"),
  title: {
    default: "JHGProcess-Solutions | Facturatie automatisering en mailbox automatisering",
    template: "%s | JHGProcess-Solutions",
  },
  description:
    "JHGProcess-Solutions helpt bedrijven met facturatie automatisering en mailbox automatisering. Automatiseer facturen, e-mailverwerking en administratieve workflows met slimme koppelingen zoals Moneybird.",
  keywords: [
    "JHGProcess-Solutions",
    "JHGProcess Solutions",
    "facturatie automatisering",
    "mailbox automatisering",
    "moneybird automatisering",
    "facturen automatiseren mkb",
    "administratie automatisering",
    "workflow automatisering",
    "email automatisering bedrijf",
    "factuur automatisering",
  ],
  alternates: {
    canonical: "https://www.jhgprocess-solutions.com",
  },
  openGraph: {
    title: "JHGProcess-Solutions | Facturatie automatisering en mailbox automatisering",
    description:
      "Automatiseer facturatie, mailbox verwerking en administratieve workflows met JHGProcess-Solutions.",
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
  twitter: {
    card: "summary_large_image",
    title: "JHGProcess-Solutions | Facturatie automatisering en mailbox automatisering",
    description:
      "Automatiseer facturatie, mailbox verwerking en administratieve workflows met JHGProcess-Solutions.",
    images: ["/LOGO - JHGProcess-Solutions.png"],
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
  areaServed: "NL",
  description:
    "JHGProcess-Solutions helpt bedrijven met facturatie automatisering en mailbox automatisering.",
  sameAs: [],
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