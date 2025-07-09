import Link from "next/link";
import Image from "next/image";
import React from "react";
import { productData, socialLinks } from "@/constants";

const Footer = () => {
  const categories = Array.from(
    new Set(productData.map((product) => product.category))
  );
  return (
    <footer className="bg-dark-100  px-36 text-light-100">
      <div className="border-t-4 w-1/10 border-primary-500"></div>
      <div className="flex">
        {/* text */}
        <div className=" flex flex-col gap-12 w-1/2 pt-20 pb-16 ">
          <Link href="/">
            <Image
              src="./assets/shared/desktop/logo.svg"
              alt="logo"
              height={150}
              width={150}
            />
          </Link>
          <p className="body text-light-100/50">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <p className="text-[15px] font-bold text-light-100/50">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
        {/* nav */}
        <div className="pt-20 pb-16 flex flex-col gap-24 items-end w-1/2">
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
          <ul className="flex gap-4 items-center">
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
