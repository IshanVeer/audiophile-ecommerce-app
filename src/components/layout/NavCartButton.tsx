import React from 'react'
import { CartIcon } from '../cart/CartIcon';
import css from "./NavCartButton.module.css";

export const NavCartButton = () => {
  return (
    <button className={css.cartButton}>
        <CartIcon />
    </button>
  )
}
