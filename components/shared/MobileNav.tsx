import React from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { categoryData } from "@/constants";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="md:hidden px-12 py-8 bg-dark-100 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <Drawer direction="top">
          <DrawerTrigger>
            <Image
              src="/assets/shared/tablet/icon-hamburger.svg"
              alt="nav-menu"
              height={20}
              width={20}
              className="object-cover"
            />
          </DrawerTrigger>
          <DrawerContent className="px-12 max-sm:px-8 pt-32 pb-26">
            <DrawerTitle className="hidden">
              Are you absolutely sure?
            </DrawerTitle>
            <ul className="flex flex-wrap max-sm:flex-col gap-x-3 max-sm:gap-y-24 sm:mx-auto sm:justify-center items-center">
              {categoryData.map((category) => (
                <li
                  className="bg-light-200 flex items-end py-7 relative h-[180px] max-sm:h-[240px] w-[214px] max-sm:w-full rounded-md"
                  key={category.category}
                >
                  <Image
                    src={category.categoryImage}
                    alt={category.category}
                    height={700}
                    width={700}
                    className="w-[180px] max-sm:w-[250px] absolute -top-14 left-5 max-sm:left-38 object-contain"
                  />
                  <div className="w-36 text-center mx-auto">
                    <h6 className="h6-bold py-3">{category.category}</h6>
                    <Link
                      href={`/${category.category}`}
                      className="flex items-center gap-2 text-[13px] font-bold hover:text-primary-500 leading-[18px] uppercase tracking-[1px] justify-center text-dark-100/50 transition duration-150"
                    >
                      <p>Shop</p>

                      <Image
                        src="/assets/shared/desktop/icon-arrow-right.svg"
                        alt="link"
                        height={7}
                        width={7}
                      />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </DrawerContent>
        </Drawer>

        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          height={150}
          width={150}
        />
      </div>
      <Image
        src="/assets/shared/desktop/icon-cart.svg"
        alt="logo"
        height={25}
        width={25}
      />
    </div>
  );
};

export default MobileNav;
