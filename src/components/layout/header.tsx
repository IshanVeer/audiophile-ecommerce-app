import React from "react";
import css from "./Header.module.css";
import Image from "next/image";
// import heroImage from "../../assets/home/desktop/image-hero.jpg";

export const Header = () => {
  return (
    <div>
      <header className={css.header}>
        <div className={css.hero}>
          <div className={css.heroContent}>hero- content</div>
          {/* <Image src={heroImage} alt="hero" width={100} height={200} className={css.heroImage} /> */}
        </div>
      </header>
    </div>
  );
};
