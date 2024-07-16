import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/components/header/AppHeader";
import { rajdhani, inter } from "@/shared/fonts";
import { AppFooter } from "@/components/AppFooter";
import Script from "next/script";

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
        url: "./og-cover.png",
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
        <head>
          <Script id="matomo-tracking" strategy="afterInteractive">
            {`
            var _paq = window._paq = window._paq  [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://psedev.matomo.cloud/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '15']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://cdn.matomo.cloud/psedev.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
          </Script>
        </head>
        <AppHeader />
        <div className="overflow-x-hidden">{children}</div>
        <AppFooter />
      </body>
    </html>
  );
}
