import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

const manrope = localFont({
  src: "../../node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "KYFI Dealer Workspace",
    template: "%s | KYFI Dealer Workspace",
  },
  description:
    "KYFI is a dealer-only farmer reputation platform for status lookup, blacklist warnings, and credit decisions across Andhra Pradesh and Telangana.",
  applicationName: "KYFI Dealer Workspace",
  keywords: [
    "KYFI",
    "farmer reputation",
    "blacklist",
    "dealer dashboard",
    "Andhra Pradesh",
    "Telangana",
  ],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      nocache: true,
    },
  },
  openGraph: {
    title: "KYFI Dealer Workspace",
    description:
      "Dealer-only dashboard for farmer status lookup, blacklist warnings, and reputation tracking.",
    url: "/",
    siteName: "KYFI",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KYFI Dealer Workspace",
    description:
      "Dealer-only dashboard for farmer status lookup, blacklist warnings, and reputation tracking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${manrope.variable}`}>
      <body className="min-h-full font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
