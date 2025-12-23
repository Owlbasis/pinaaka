import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
  manifest: "/manifest.json",
  openGraph: {
    title: "MVP & Product Development Company | Charcoal Labs",
    description: "Get scoped projects delivered by vetted, AI-enabled talent. Starting at $10/hour.",
    url: "https://www.charcoallabs.com",
    siteName: "Charcoal Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Charcoal Labs - Ship production code with vetted engineers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP & Product Development Company | Charcoal Labs",
    description: "Get scoped projects delivered by vetted, AI-enabled talent. Starting at $10/hour.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.charcoallabs.com/#organization",
      "name": "Charcoal Labs",
      "url": "https://www.charcoallabs.com",
      "logo": "https://www.charcoallabs.com/logo.png",
      "description": "Ship production code with vetted engineers. MVP & Product Development starting at $10/hour.",
      "sameAs": [
        "https://www.linkedin.com/in/charcoal-labs-a085663a1/",
        "https://x.com/CharcoalLabs"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.charcoallabs.com/#website",
      "name": "Charcoal Labs",
      "url": "https://www.charcoallabs.com",
      "publisher": { "@id": "https://www.charcoallabs.com/#organization" }
    },
    {
      "@type": "Service",
      "@id": "https://www.charcoallabs.com/#service",
      "serviceType": "Software Development",
      "provider": { "@id": "https://www.charcoallabs.com/#organization" },
      "description": "Scoped project delivery, talent matching, architecture support, and maintenance services.",
      "areaServed": "Worldwide"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uq73y3wiys");
            `,
          }}
        />
      </head>
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
