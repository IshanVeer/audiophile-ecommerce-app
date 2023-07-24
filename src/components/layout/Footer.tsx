import React from "react";
import css from "./Footer.module.css";
import logo from "@/assets/shared/desktop/logo.svg";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className={css.footer}>
        <div className={css.footerContainer}>
          <div className={css.borderPlaceholder}></div>
          <div className={css.infoColumn}>
            <Link href="/">
              <Image src={logo} alt="logo" className={css.infoLogo} />
            </Link>
            <p className={css.infoPara}>
              Audiophile is an all in one stop to fulfill your audio needs. We
              are a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.{" "}
            </p>
            <p className={css.infoCopyright}>
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className={css.linkColumn}>
            {/* footer nav list */}
            <ul className={css.footerNavList}>
              <li className={css.footerNavListItem}>
                <Link className={css.footerNavListItemLink} href="/">
                  HOME
                </Link>
              </li>
              <li className={css.footerNavListItem}>
                <Link className={css.footerNavListItemLink} href="/headphones">
                  HEADPHONES
                </Link>
              </li>
              <li className={css.footerNavListItem}>
                <Link className={css.footerNavListItemLink} href="/earphones">
                  EARPHONES
                </Link>
              </li>
              <li className={css.footerNavListItem}>
                <Link className={css.footerNavListItemLink} href="/speakers">
                  SPEAKERS
                </Link>
              </li>
            </ul>
            {/* Social link icons */}
            <ul className={css.footerSocialLinks}>
              <li className={css.socialLinkItem}>
                <a href="https://www.facebook.com/" className={css.link}>
                  <AiFillFacebook />
                </a>
              </li>
              <li className={css.socialLinkItem}>
                <a href="https://www.twitter.com/" className={css.link}>
                  <AiOutlineTwitter />{" "}
                </a>
              </li>
              <li className={css.socialLinkItem}>
                <a href="https://www.instagram.com/" className={css.link}>
                  <AiOutlineInstagram />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
