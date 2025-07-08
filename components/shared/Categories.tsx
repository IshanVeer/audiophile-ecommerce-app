import { productData } from "@/constants";
import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <>
      {/* categories */}
      {/* <ul>
        {
          new Set(
            productData.map((product) => (
              <li key={product.category}>
                <Image
                  src={product.categoryImage.desktop}
                  alt={product.category}
                  height={500}
                  width={500}
                />
              </li>
            ))
          )
        }
      </ul> */}
      categories
    </>
  );
};

export default Categories;
