"use client";
import React from "react";
import css from "./ProductDetail.module.css";
import { ProductProps } from "@/types/types";
import { useParams } from "next/navigation";
import Image from "next/image";
import ManageProduct from "../UI/ManageProduct";

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
          <div className={css.productImageContainer}>
            <Image
              src={product?.image.desktop}
              alt={product?.name}
              width={500}
              height={500}
            />
          </div>
          <div className={css.productActionConatiner}>
            {product?.new && <p className={css.productTimeOverline}>New Product</p>}
            <h1 className={css.productName}>{product?.name}</h1>
            <p className={css.productDetailDescription}>{product?.description}</p>
            <p className={css.productPrice}>{`$${product?.price}`}</p>
            <div className={css.productDetailButtonContainer}>
            <ManageProduct />
            <button>Add to cart</button>
            </div>
            
          </div>
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
