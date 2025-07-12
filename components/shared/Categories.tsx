import { categoryData } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      {/* categories */}
      <ul className="flex max-sm:flex-col gap-x-6 max-sm:gap-y-24 max-md:gap-x-3  items-center">
        {categoryData.map((category) => (
          <li
            className="bg-light-200 flex items-end py-12 max-md:py-7  w-full relative h-[204px] max-md:h-[180px] max-sm:h-[200px] rounded-md"
            key={category.category}
          >
            <Image
              src={category.categoryImage}
              alt={category.category}
              height={700}
              width={700}
              className="w-[180px] max-sm:w-[200px] max-md:w-[180px] absolute -top-14 left-1/2 -translate-x-1/2  object-contain"
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
    </>
  );
};

export default Categories;
