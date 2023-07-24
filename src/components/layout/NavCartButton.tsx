
import React from 'react';
import { CartIcon } from '../cart/CartIcon';
import css from "./NavCartButton.module.css";

const NavCartButton = () => {
  return (
    <button className={css.cartButton}>
        <CartIcon />
    </button>
  )
}

export default NavCartButton