import React from "react";
import css from "./Header.module.css";
import Image from "next/image";
import heroImage from "../../assets/home/desktop/image-hero.jpg";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <header className={css.header}>
        <div className={css.hero}>
          <div className={css.heroContent}>
            <p className={css.heroContentOverline}>new product</p>
            <h1 className={css.heroContentHeading}>XX99 Mark II Headphones</h1>
            <p className={css.heroContentPara}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href="/">See Product</Link>
          </div>
          <div className={css.heroImageContainer}>
            <Image src={heroImage} alt="hero" className={css.heroImage} />
          </div>
        </div>
      </header>
    </div>
  );
};
