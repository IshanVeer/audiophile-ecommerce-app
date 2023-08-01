"use client";
import React from "react";
import css from "./ProductDetail.module.css";
import { ProductProps } from "@/types/types";
import { useParams } from "next/navigation";

const ProductDetail: React.FC<{ products: ProductProps[] }> = ({
  products,
}) => {
   const params = useParams();
    const product = products.find((product) => product.slug === params.slug);
  return (
    <div>
      <div className={css.productDetailContainer}>
        {/* image + brief info */}
        <div className={css.productMainLayout}>
          <div className={css.productImageContainer}></div>
          <div className={css.productActionConatiner}><h1>{product.name}</h1></div>
        </div>
        {/* features + box info */}
        <div className={css.productFeaturesLayout}>
          <div className={css.productFeaturesContainer}></div>
          <div className={css.productBoxContainer}></div>
        </div>
        {/* Gallery */}
        <div className={css.productGallery}></div>
      </div>
    </div>
  );
};

export default ProductDetail;
