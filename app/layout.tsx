import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.charcoallabs.com"),
  title: "MVP & Product Development Company | Charcoal Labs",
  description: "Get scoped projects delivered by vetted, AI-enabled talent. Starting at $10/hour. We scope your work, match talent, add architecture guidance, and deliver.",
  keywords: ["project outsourcing", "talent hiring", "software development", "freelance developers", "project delivery"],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "MVP & Product Development Company | Charcoal Labs",
    description: "Get scoped projects delivered by vetted, AI-enabled talent. Starting at $10/hour.",
    url: "https://www.charcoallabs.com",
    siteName: "Charcoal Labs",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Charcoal Labs Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP & Product Development Company | Charcoal Labs",
    description: "Get scoped projects delivered by vetted, AI-enabled talent. Starting at $10/hour.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Charcoal Labs",
  "url": "https://www.charcoallabs.com",
  "logo": "https://www.charcoallabs.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/in/charcoal-labs-a085663a1/",
    "https://x.com/CharcoalLabs"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
