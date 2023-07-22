import React from "react";
import css from "./ProductSection.module.css";
import Image from "next/image";
import productImage1 from "@/assets/home/desktop/image-speaker-zx9.png";
import Link from "next/link";
import { ProductLinkButtonPrimary } from "../UI/ProductLinkButtonPrimary";

export const ProductSection = () => {
  return (
    <div>
      <div className={css.productSectionContainer}>
        {/* Product  1*/}
        <div className={css.product1}>
          <div className={css.productImageContainer}>
            <Image src={productImage1} alt="iphone"  className={css.productImage}/>
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
            <ProductLinkButtonPrimary path="/" type="dark" />
          </div>
        </div>
        {/* Product 2 */}
        {/* <div className={css.product2}>
          <div className={css.productTextContainer}>
            <h4 className={css.productHeading}>ZX9 SPEAKER</h4>
            <Link href="/">See Product</Link>
          </div>
          <div className={css.productImageContainer}>
            <Image src={productImage1} alt="iphone" width={500} height={500} />
          </div>
        </div> */}
        {/* Product 3 */}
        {/* <div className={css.product3}>
          <div className={css.productImageContainer}>
            <Image src={productImage1} alt="iphone" width={500} height={500} />
          </div>
          <div className={css.productTextContainer}>
            <h4 className={css.productHeading}>ZX9 SPEAKER</h4>
            <Link href="/">See Product</Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};
