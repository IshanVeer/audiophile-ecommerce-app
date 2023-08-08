"use client";
import React,{use, useState} from "react";
import css from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import NavCartButton from "./NavCartButton";
import { usePathname } from "next/navigation";
import Cart from "../cart/Cart";

interface productProps {
  
  category: string;
}

const NavBar: React.FC<{ products: productProps[] }> = ({ products }) => {

  const [cartIsShown, setCartIsShown] =useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  const currentPathname = usePathname();
  // so that there is no repetetion of categories in the navbar
  // products.map((product) => product.category) returns an array of categories
  // new Set() returns an object with unique categories
  // Array.from() turns that object into an array again
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

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
              <Link
                className={
                  currentPathname === "/"
                    ? css.navListItemLinkActive
                    : css.navListItemLink
                }
                href="/"
              >
                HOME
              </Link>
            </li>

            {uniqueCategories.map((category) => (
              <li className={css.navListItem} key={category}>
                <Link
                  className={
                    currentPathname === `/${category}`
                      ? css.navListItemLinkActive
                      : css.navListItemLink
                  }
                  href={`/${category}`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <NavCartButton onShow={showCartHandler}/>
        </nav>
      </div>
      {cartIsShown && <Cart onHide={hideCartHandler}/>}
    </div>
  );
};

export default NavBar;
