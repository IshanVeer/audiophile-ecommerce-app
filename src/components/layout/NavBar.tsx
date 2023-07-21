import React from "react";
import css from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";

export const NavBar = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <Link href="/">
          {/* logo */}
          <Image src={logo} alt="logo" className={css.logo} />
          {/* category links */}
          <ul className={css.categoryLinks}>
            <li className={css.categoryLink}>
              <Link href="/">HOME</Link>
            </li>
            <li className={css.categoryLink}>
              <Link href="/headphones">HEADPHONES</Link>
            </li>
            <li className={css.categoryLink}>
              <Link href="/earphones">EARPHONES</Link>
            </li>
            <li className={css.categoryLink}>
              <Link href="/speakers">SPEAKERS</Link>
            </li>
          </ul>
          <button>cart</button>
        </Link>
      </nav>
    </div>
  );
};
