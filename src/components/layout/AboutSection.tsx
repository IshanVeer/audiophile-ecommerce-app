
import React from 'react';
import css from "./AboutSection.module.css";
import Image from "next/image";
import aboutImage from "../../../public/assets/shared/desktop/image-best-gear.jpg";

const AboutSection = () => {
  return (
    <div>
    <div className={css.aboutSectionContainer}>
      <div className={css.aboutSectionTextBox}>
        <h2 className={css.aboutHeading}>
          Bringing you the <span className={css.wordEmphasize}>best</span> audio gear
        </h2>
        <p className={css.aboutPara}>
          Located at the heart of New York City, Audiophile is the premier
          store for high end headphones, earphones, speakers, and audio
          accessories. We have a large showroom and luxury demonstration rooms
          available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={css.aboutSectionImageBox}>
        <Image
          src={aboutImage}
          alt="about"
          className={css.aboutSectionImage}
        />
      </div>
    </div>
  </div>
  )
}

export default AboutSection;
