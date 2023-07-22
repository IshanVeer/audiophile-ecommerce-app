import React from "react";
import css from "./Header.module.css";
import Image from "next/image";
import heroImage from "../../assets/home/desktop/image-hero.png";
import Link from "next/link";
import  {ProductLinkButtonPrimary}  from "../UI/ProductLinkButtonPrimary";


export const Header = () => {
  return (
    <div>
      <header className={css.header}>
        <div className={css.hero}>
          <div className={css.heroContent}>
            <p className={css.heroContentOverline}>new product</p>
            <h1 className={css.heroContentHeading}>XX99 Mark II Headphones</h1>
            <p className={css.heroContentPara}>
              Experience natural, life like audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <ProductLinkButtonPrimary path="/" type="primary"/>
          </div>
          <div className={css.heroImageContainer}>
            <Image src={heroImage} alt="hero" className={css.heroImage} />
          </div>
        </div>
      </header>
    </div>
  );
};
