import Link from "next/link";
import Image from "next/image";
import React from "react";
import { productData, socialLinks } from "@/constants";

const Footer = () => {
  const categories = Array.from(
    new Set(productData.map((product) => product.category))
  );
  return (
    <footer className="bg-dark-100  px-8 text-light-100">
      <div className="border-t-4 border-primary-500 w-[100px] mx-auto"></div>
      <div className="flex flex-col items-center pt-12 gap-8">
        {/* logo */}
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          height={150}
          width={150}
        />
        <ul className="flex flex-col gap-4 text-center subtitle">
          <li>
            <Link href="/">home</Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>

        {/* nav links */}
      </div>
      <div className="py-12 grid grid-cols-1 text-center text-light-100/50 body">
        <p className="">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>
        <p className="font-bold py-8">Copyright 2021. All Rights Reserved</p>
        <ul className="flex justify-center gap-6 items-center">
          {socialLinks.map((social) => (
            <li key={social.route}>
              <a href={social.route}>
                <Image
                  src={social.logo}
                  alt={social.name}
                  height={25}
                  width={25}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
