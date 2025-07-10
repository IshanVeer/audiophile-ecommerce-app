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
      <div className="border-t-4 w-[100px] border-primary-500"></div>
      <div>
        {/* log + nav */}
        <div className=" flex max-md:flex-col gap-12 justify-between pt-20 pb-16 ">
          <Link href="/">
            <Image
              src="./assets/shared/desktop/logo.svg"
              alt="logo"
              height={150}
              width={150}
            />
          </Link>

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
        </div>
        {/* nav */}
        <div className="grid grid-cols-2  gap-8 pb-12">
          <p className="body text-light-100/50 order-1 max-md:col-span-2">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <p className="text-[15px] font-bold text-light-100/50 order-3 max-md:order-2">
            Copyright 2021. All Rights Reserved
          </p>

          <ul className="flex gap-4 items-center justify-end order-2 max-md:order-3">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a href={social.route}>
                  <Image
                    src={social.logo}
                    alt={social.name}
                    height={20}
                    width={20}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
