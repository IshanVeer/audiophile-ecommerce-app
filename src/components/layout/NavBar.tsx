import React from "react";
import css from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";

export const NavBar = () => {
  return (
    <div>
      <div className={css.navBarContainer}>
      <nav className={css.navigation}>
        <Link href="/">
          {/* logo */}
          <Image src={logo} alt="logo" className={css.logo} />
        </Link>
        {/* category links */}
        <ul className={css.categoryList}>
          <li className={css.categoryListItem}>
            <Link className={css.categoryListItemLink} href="/">HOME</Link>
          </li>
          <li className={css.categoryListItem}>
            <Link className={css.categoryListItemLink} href="/headphones">HEADPHONES</Link>
          </li>
          <li className={css.categoryListItem}>
            <Link className={css.categoryListItemLink} href="/earphones">EARPHONES</Link>
          </li>
          <li className={css.categoryListItem}>
            <Link className={css.categoryListItemLink} href="/speakers">SPEAKERS</Link>
          </li>
        </ul>
        <button>cart</button>
      </nav>
      </div>
    </div>
  );
};
