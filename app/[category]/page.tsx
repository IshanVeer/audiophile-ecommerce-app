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
      <div className="bg-dark-100 text-light-100 text-center py-8">
        <h2 className="h4-bold">{category}</h2>
      </div>
      <section className="section-container pt-30">
        <ul>
          {sortedProductDataByCategory.map((product) => (
            <li key={product.id} className="pb-30">
              <Image
                src={product.image.mobile}
                alt={product.name}
                height={1000}
                width={1000}
                className="rounded-md"
              />
              {/* text container */}
              <div className="text-center py-8">
                {product.new && (
                  <p className="subtitle-overline text-primary-500">
                    New Product
                  </p>
                )}
                <h2 className="h4-bold py-6">{product.name}</h2>
                <p className="body text-dark-100/50 pb-10">
                  {product.description}
                </p>
                <Button label="See Product" isLink route="/" />
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="section-container">
        <Categories />
      </section>
    </div>
  );
};

export default CategoryPage;
