import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/components/header/AppHeader";
import { rajdhani, inter } from "@/shared/fonts";
import { AppFooter } from "@/components/AppFooter";

export const metadata: Metadata = {
  title: "Anon Aadhaar",
  description: "Anon Aadhaar is a circuit that generates a proof",
  openGraph: {
    title: "Anon Aadhaar",
    description: "Anon Aadhaar is a circuit that generates a proof",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Anon Aadhaar",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.className} ${rajdhani.variable} ${inter.variable}`}
      >
        <AppHeader />
        <div className="overflow-x-hidden">{children}</div>
        <AppFooter />
      </body>
    </html>
  );
}
