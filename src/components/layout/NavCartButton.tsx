import React from "react";
import { CartIcon } from "../cart/CartIcon";
import css from "./NavCartButton.module.css";

const NavCartButton = ({ onShow }) => {
  return (
    <button onClick={onShow} className={css.cartButton}>
      <span className={css.productQuantity}>0</span>
      <CartIcon />
    </button>
  );
};

export default NavCartButton;
