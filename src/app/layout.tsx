import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atharva.dev"),
  title: {
    default: "Atharva | Founder, CEO & CTO @ SINXCE Labs",
    template: "%s | Atharva",
  },
  description:
    "Founder, CEO & CTO building software products, AI systems, automation tools, and digital infrastructure for the future at SINXCE Labs.",
  keywords: [
    "Atharva",
    "SINXCE Labs",
    "Founder",
    "CEO",
    "CTO",
    "Software Engineer",
    "AI",
    "Automation",
    "SaaS",
    "Full Stack Developer",
    "Product Builder",
    "Startup",
  ],
  authors: [{ name: "Atharva" }],
  creator: "Atharva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atharva.dev",
    siteName: "Atharva",
    title: "Atharva | Founder, CEO & CTO @ SINXCE Labs",
    description:
      "Building software products, AI systems, automation tools, and digital infrastructure for the future.",
    images: [
      {
        url: "/images/og.svg",
        width: 1200,
        height: 630,
        alt: "Atharva - Founder, CEO & CTO @ SINXCE Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharva | Founder, CEO & CTO @ SINXCE Labs",
    description:
      "Building software products, AI systems, automation tools, and digital infrastructure for the future.",
    images: ["/images/og.svg"],
    creator: "@atharva",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
