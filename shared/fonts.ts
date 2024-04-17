import { Inter, Rajdhani } from "next/font/google";

export const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
