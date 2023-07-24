import React from "react";
import css from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/shared/desktop/logo.svg";
import  NavCartButton  from "./NavCartButton";

const NavBar = () => {
  return (
    <div>
      <div className={css.navBarContainer}>
        <nav className={css.navigation}>
          <Link href="/">
            {/* logo */}
            <Image src={logo} alt="logo" className={css.logo} />
          </Link>
          {/* category links */}
          <ul className={css.navList}>
            <li className={css.navListItem}>
              <Link className={css.navListItemLink} href="/">
                HOME
              </Link>
            </li>
            <li className={css.navListItem}>
              <Link className={css.navListItemLink} href="/headphones">
                HEADPHONES
              </Link>
            </li>
            <li className={css.navListItem}>
              <Link className={css.navListItemLink} href="/earphones">
                EARPHONES
              </Link>
            </li>
            <li className={css.navListItem}>
              <Link className={css.navListItemLink} href="/speakers">
                SPEAKERS
              </Link>
            </li>
          </ul>
          <NavCartButton />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
