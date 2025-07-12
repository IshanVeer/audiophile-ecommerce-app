import { productData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const categories = Array.from(
    new Set(productData.map((product) => product.category))
  );
  return (
    <nav className="max-md:hidden bg-dark-100 items-center px-36  ">navbar</nav>
  );
};

export default Navbar;
