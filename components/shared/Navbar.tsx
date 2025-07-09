import { productData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const categories = Array.from(
    new Set(productData.map((product) => product.category))
  );
  return (
    <nav className="max-md:hidden bg-dark-100 items-center px-36  ">
      <div className="border-b border-light-100/30 py-10 flex justify-between">
        {/* logo */}
        <Link href="/">
          <Image
            src="./assets/shared/desktop/logo.svg"
            alt="logo"
            height={150}
            width={150}
          />
        </Link>

        {/* nav links */}
        <ul className="flex subtitle gap-6 uppercase">
          <li className="text-light-100 hover:text-primary-500 transition duration-150">
            <Link href="/">home</Link>
          </li>
          {categories.map((category) => (
            <li
              className="text-light-100 transition duration-150 hover:text-primary-500"
              key={category}
            >
              <Link href={category}>{category}</Link>
            </li>
          ))}
        </ul>
        {/* cart */}
        <button>
          <Image
            src="./assets/shared/desktop/icon-cart.svg"
            alt="cart-icon"
            height={25}
            width={25}
            className="object-contain"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
