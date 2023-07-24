import React from "react";
import css from "./ProductSection.module.css";
import Image from "next/image";
import productImage1 from "@/assets/home/desktop/image-speaker-zx9.png";
import productImage2 from "@/assets/home/desktop/image-speaker-zx7.png";
import productImage3 from "@/assets/home/desktop/image-earphones-yx1.jpg";

import { ProductLinkButtonPrimary } from "../UI/ProductLinkButtonPrimary";

export const ProductSection = () => {
  return (
    <div>
      <div className={css.productSectionContainer}>
        {/* Product  1*/}
        <div className={css.product1}>
          <div className={css.productImageContainer}>
            <Image
              src={productImage1}
              alt="iphone"
              className={css.productImage}
            />
            <div className={css.backdropOverlaySmall}></div>
            <div className={css.backdropOverlayMedium}></div>
            <div className={css.backdropOverlayLarge}></div>
          </div>

          <div className={css.productTextContainer}>
            <h1 className={css.productHeading}>ZX9 SPEAKER</h1>
            <p className={css.productPara}>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <ProductLinkButtonPrimary path="/" type="dark" name="See Product"/>
          </div>
        </div>
        {/* Product 2 */}
        <div className={css.product2}>
          <div className={css.product2TextContainer}>
            <h4 className={css.product2Heading}>ZX9 SPEAKER</h4>
            <ProductLinkButtonPrimary path="/" type="transparent" name="See Product"/>
          </div>
          <div className={css.product2ImageContainer}>
            <Image
              src={productImage2}
              alt="iphone"
              className={css.product2Image}
            />
          </div>
        </div>
        {/* Product 3 */}
        <div className={css.product3}>
          <div className={css.product3ImageContainer}>
            <Image
              src={productImage3}
              alt="iphone"
              className={css.product3Image}
            />
          </div>
          <div className={css.product3TextContainer}>
            <div className={css.viewportWrapper}>
              <h4 className={css.product3Heading}>ZX9 SPEAKER</h4>
              <ProductLinkButtonPrimary path="/" type="transparent" name="See Product"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
