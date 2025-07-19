import { productData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cart from "./Cart";

const Navbar = () => {
  const categories = Array.from(
    new Set(productData.map((product) => product.category))
  );
  return (
    <nav className="max-lg:hidden bg-dark-100 px-40 text-light-100">
      <div className="flex justify-between items-center border-b border-light-100/20 py-12">
        <Link href="/">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            height={150}
            width={150}
          />
        </Link>

        <ul className="flex gap-8 subtitle">
          <li className="hover:text-primary-500 transition duration-150">
            <Link href="/">home</Link>
          </li>
          {categories.map((category) => (
            <li
              className="hover:text-primary-500 transition duration-150"
              key={category}
            >
              <Link href={`/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
