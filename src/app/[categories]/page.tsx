

import React from "react";
import css from "./styles.module.css";
import ProductList from "@/components/product/ProductList";
import CategoriesSection from "@/components/layout/CategoriesSection";
import AboutSection from "@/components/layout/AboutSection";


interface Props {
  params: {
    categories: string;
  };
}

export async function getProducts(){
  const res = await fetch("http://localhost:3000/api/products",{ next: { revalidate: 60 } });
  const products = await res.json();
  return products;

}

export default async function CategoriesPage( {params}: Props) {
  
  const products = await getProducts();
  const productsArray = products.products;

 
  return (
    <div>
      <div className={css.headingContainer}>
        <h2 className={css.heading}>{params.categories}</h2>
      </div>
      <ProductList products={productsArray} />
      <CategoriesSection />
      <AboutSection />
    </div>
  );
};


