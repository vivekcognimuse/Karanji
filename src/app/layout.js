import { Albert_Sans, Outfit } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";

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
  description: "Karanji - Your Partner in Digital Transformation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} ${outfit.variable}   antialiased`}>
        <Navbar />
        {/* <SmoothScrollWrapper> */}
        <div className="bg-[url('/page/home.svg')]  bg-cover bg-right bg-no-repeat">
          {children}
        </div>
        <Footer />
        {/* </SmoothScrollWrapper> */}
      </body>
    </html>
  );
}
