import React from "react";
import { CartIcon } from "../cart/CartIcon";
import { useAppSelector } from "@/hooks/hooks";
import css from "./NavCartButton.module.css";

const NavCartButton = ({ onShow }) => {

  const cartQuantity = useAppSelector((state)=>state.cart.totalQuantity);


  return (
    <button onClick={onShow} className={css.cartButton}>
      <span className={css.productQuantity}>{cartQuantity}</span>
      <CartIcon />
    </button>
  );
};

export default NavCartButton;
