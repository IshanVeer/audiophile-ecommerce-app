"use client";
import { productData } from "@/constants";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Categories from "@/components/shared/Categories";

const CategoryPage = () => {
  const { category } = useParams();

  const sortedProductDataByCategory = productData
    .filter((product) => product.category === category)
    .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1));

  return (
    <div>
      <div className="bg-dark-100 text-light-100 text-center py-10 sm:py-24">
        <h2 className="h4-bold sm:h2-bold">{category}</h2>
      </div>
      <section className="section-container pt-30">
        <ul>
          {sortedProductDataByCategory.map((product) => (
            <li
              key={product.id}
              className="pb-30 lg:pb-40 lg:flex items-center gap-32 lg:even:flex-row-reverse"
            >
              <Image
                src={product.categoryImage.mobile}
                alt={product.name}
                height={1000}
                width={1000}
                className="rounded-md sm:hidden object-cover"
              />
              <Image
                src={product.categoryImage.tablet}
                alt={product.name}
                height={1000}
                width={1000}
                className="rounded-md max-sm:hidden lg:hidden object-cover"
              />
              <Image
                src={product.categoryImage.desktop}
                alt={product.name}
                height={1000}
                width={1000}
                className="rounded-md max-lg:hidden object-cover lg:w-1/2"
              />

              {/* text container */}
              <div className="text-center py-8 sm:max-w-[572px] sm:mx-auto lg:text-start">
                {product.new && (
                  <p className="subtitle-overline text-primary-500">
                    New Product
                  </p>
                )}
                <h2 className="h4-bold py-6 sm:h2-bold sm:max-w-[60%] lg:max-w-full sm:mx-auto lg:mx-0">
                  {product.name}
                </h2>
                <p className="body text-dark-100/50 pb-10">
                  {product.description}
                </p>
                <Button
                  label="See Product"
                  isLink
                  route={`/${category}/${product.slug}`}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="section-container pt-8">
        <Categories />
      </section>
    </div>
  );
};

export default CategoryPage;
