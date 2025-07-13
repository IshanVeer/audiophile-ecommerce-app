import { productData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const categories = Array.from(
    new Set(productData.map((product) => product.category))
  );
  return (
    <nav className="max-lg:hidden bg-dark-100 px-40 text-light-100">
      <div className="flex justify-between items-center border-b border-light-100/20 py-12">
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          height={150}
          width={150}
        />
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
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart"
          height={25}
          width={25}
        />
      </div>
    </nav>
  );
};

export default Navbar;
