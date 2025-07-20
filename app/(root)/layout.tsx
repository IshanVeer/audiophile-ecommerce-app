import BrandDescription from "@/components/shared/BrandDescription";
import Footer from "@/components/shared/Footer";
import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <MobileNav />
      <section>{children}</section>
      <BrandDescription />
      <Footer />
    </main>
  );
};

export default Layout;
