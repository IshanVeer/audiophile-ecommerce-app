import { categoryData } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      {" "}
      <ul className="flex flex-col sm:flex-row gap-12 sm:gap-4">
        {categoryData.map((category) => (
          <li
            className="bg-light-200 pt-23 pb-6 rounded-md relative w-full "
            key={category.name}
          >
            <Image
              src={category.image}
              alt={category.name}
              height={115}
              width={115}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3"
            />
            <div className="text-center">
              <p className="text-[15px] pb-4 leading-[20px] font-bold uppercase tracking-[1.7px]">
                {category.name}
              </p>
              <Link
                className="flex text-[13px] text-dark-100/50 font-bold leading-[18px] tracking-[1px] uppercase justify-center items-center gap-2"
                href={`/${category.name}`}
              >
                <p>shop</p>{" "}
                <Image
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  alt="link"
                  height={10}
                  width={10}
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
