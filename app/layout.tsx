import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Project-to-Talent Bridge | Ship Projects Fast with Job-Ready Builders",
  description: "Get scoped projects delivered by vetted, AI-enabled talent. Starting at $10/hour. We scope your work, match talent, add architecture guidance, and deliver.",
  keywords: ["project outsourcing", "talent hiring", "software development", "freelance developers", "project delivery"],
  openGraph: {
    title: "Project-to-Talent Bridge | Ship Projects Fast",
    description: "Get scoped projects delivered by vetted, AI-enabled talent. Starting at $10/hour.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
