"use client";
import React from "react";
import css from "./ProductDetail.module.css";
import { ProductProps } from "@/types/types";
import { useParams } from "next/navigation";
import Image from "next/image";
import ManageProduct from "../UI/ManageProduct";
import FunctionalButton from "../UI/FunctionalButton";

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
              className={css.productDetailImage}
              alt={product?.name}
              width={500}
              height={500}
            />
          </div>
          <div className={css.productActionConatiner}>
            {product?.new && (
              <p className={css.productTimeOverline}>New Product</p>
            )}
            <h1 className={css.productName}>{product?.name}</h1>
            <p className={css.productDetailDescription}>
              {product?.description}
            </p>
            <p className={css.productPrice}>{`$${product?.price}`}</p>
            <div className={css.productDetailButtonContainer}>
              <ManageProduct />
              <FunctionalButton name="Add to cart" />
            </div>
          </div>
        </div>
        {/* features + box info */}
        <div className={css.productFeaturesLayout}>
          <div className={css.productFeaturesContainer}>
            <h3 className={css.productDetailSubheading}>Features</h3>
            <p className={css.productDetailFeatureDescription}>
              {product?.features}
            </p>
          </div>
          <div className={css.productBoxContainer}>
            <h3 className={css.productDetailSubheading}>In the box</h3>
            <ul className={css.boxItemList}>
              {product?.includes.map((item) => (
                <li className={css.boxItem} key={item.item}>
                  <p className={css.boxItemQuantity}>{`${item.quantity}x`}</p>
                  <p className={css.boxItemName}>{item.item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Gallery */}
        <div className={css.productGallery}>
          <div className={css.productGalleryLeft}>
          <Image
            src={product?.gallery.first.desktop}
            className={css.productGalleryImageLeft}
            alt={product?.name}
            width={445}
            height={500}
          />

          <Image
            src={product?.gallery.second.desktop}
            className={css.productGalleryImageLeft}
            alt={product?.name}
            width={445}
            height={500}
          />
          </div>

          <Image
            src={product?.gallery.third.desktop}
            className={`${css.productGalleryImageRight} ${css.image3}`}
            alt={product?.name}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
