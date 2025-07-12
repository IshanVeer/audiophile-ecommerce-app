import Link from "next/link";
import Image from "next/image";
import React from "react";
import { productData, socialLinks } from "@/constants";

const Footer = () => {
  const categories = Array.from(
    new Set(productData.map((product) => product.category))
  );
  return (
    <footer className="bg-dark-100  px-36 max-md:px-12 text-light-100">
      footer
    </footer>
  );
};

export default Footer;
