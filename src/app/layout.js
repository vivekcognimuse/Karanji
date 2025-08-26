import { Albert_Sans, Outfit } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import CookieNotification from "@/components/CookieNotification";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Karanji",
  description: "Your Technology Translation Partner",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karanji.com/",
    siteName: "Karanji",
    title: "Karanji - Your Technology Translation Partner",
    description:
      "Bridging creative storytelling, immersive technologies, and artificial intelligence (AI) innovation—Karanji is your one stop integrated partner for next-generation digital experiences.",
    images: [
      {
        url: "https://karanji.com/meta.png",
        width: 1200,
        height: 630,
        alt: "Karanji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karanji - Your Technology Translation Partner",
    description:
      "Bridging creative storytelling, immersive technologies, and artificial intelligence (AI) innovation—Karanji is your one stop integrated partner for next-generation digital experiences.",
    images: ["https://karanji.com/meta.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} ${outfit.variable}   antialiased`}>
        <Navbar />
        {/* <SmoothScrollWrapper> */}
        <div className="] pb-16 ">{children}</div>
        {/* <Footer /> */}
        {/* </SmoothScrollWrapper> */}
        <CookieNotification />
      </body>
    </html>
  );
}
