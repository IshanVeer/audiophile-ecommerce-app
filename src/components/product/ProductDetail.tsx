import React from "react";
import css from "./ProductDetail.module.css";
import { ProductProps } from "@/types/types";

const ProductDetail: React.FC<{ products: ProductProps[] }> = ({
  products,
}) => {
   console.log(products, 'products');
  return (
    <div>
      <div className={css.productDetailContainer}>
        {/* image + brief info */}
        <div className={css.productMainLayout}>
          <div className={css.productImageContainer}></div>
          <div className={css.productActionConatiner}></div>
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
