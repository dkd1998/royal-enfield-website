import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import { register } from "swiper/element/bundle";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Royal Enfield",
  description: "Unofficial cloned website of Royal Enfield bikes in India. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  register();
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
