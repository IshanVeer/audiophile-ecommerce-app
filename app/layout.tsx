import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import BrandDescription from "@/components/shared/BrandDescription";
import MobileNav from "@/components/shared/MobileNav";
import CartProvider from "@/context/CartProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audiphile e-commerce",
  description: "e-commerce website dealing in music assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${manrope.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          <MobileNav />
          <section>{children}</section>
          <BrandDescription />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
