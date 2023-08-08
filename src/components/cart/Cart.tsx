import React, { Fragment } from "react";
import css from "./Cart.module.css";

const Cart = ({ onHide }) => {
  return (
    <Fragment>
      <div className={css.backdrop} onClick={onHide}></div>
      <div className={css.cartModal} onClick={onHide}>
        <div className={css.cartContent}>cart</div>
      </div>
    </Fragment>
  );
};

export default Cart;
