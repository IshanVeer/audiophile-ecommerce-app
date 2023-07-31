'use client'
import React from "react";
import css from "./Footer.module.css";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { usePathname } from "next/navigation";


interface productProps {
  
  category: string;
}

const Footer: React.FC<{products: productProps[]}> = ({products}) => {
  const currentPathname = usePathname();
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );
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
                <Link className={currentPathname === '/' ? css.footerNavListItemLinkActive : css.footerNavListItemLink} href="/">
                  HOME
                </Link>
              </li>
              {uniqueCategories.map((category) => (
              <li className={css.navListItem} key={category}>
                <Link
                  className={
                    currentPathname === `/${category}`
                      ? css.footerNavListItemLinkActive
                      : css.footerNavListItemLink
                  }
                  href={`/${category}`}
                >
                  {category}
                </Link>
              </li>
            ))}
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
