import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteProofSetup } from '../siteproof-provider';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShipLoud - Join the Waitlist",
  description: "Turn your GitHub repos into ready-to-post content for X and LinkedIn. Join the waitlist for early access.",
  openGraph: {
    title: "ShipLoud - Join the Waitlist",
    description: "Turn your GitHub repos into ready-to-post content for X and LinkedIn.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipLoud - Join the Waitlist",
    description: "Turn your GitHub repos into ready-to-post content for X and LinkedIn.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SiteProofSetup>{children}</SiteProofSetup>
      </body>
    </html>
  );
}