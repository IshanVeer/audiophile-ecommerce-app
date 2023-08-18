import React, { Fragment } from "react";
import { useAppSelector } from "@/hooks/hooks";
import css from "./Cart.module.css";
import FunctionalButton from "../UI/FunctionalButton";


import CartProduct from "./CartProduct";

const Cart = ({ onHide }) => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const cartTotalPrice = useAppSelector((state) => state.cart.totalPrice);

  console.log(cartProducts, "cart.js");

  return (
    <Fragment>
      <div className={css.backdrop} onClick={onHide}></div>
      <div className={css.cartModal} >
        <div className={css.cartContent}>
          <div className={css.cartHeader}>
            <h6 className={css.cartHeading}>
              Cart <span>({cartQuantity})</span>
            </h6>
            <button className={css.removeAllButton}>Remove all</button>
          </div>
          <div className={css.cartProducts}>
            <ul className={css.cartProductList}>
              {cartProducts.map((product) => (
                <CartProduct key={product._id} product={product} />
              ))}
            </ul>
          </div>
          <div className={css.cartTotalPrice}>
            <p className={css.priceTitle}> TOTAL</p>
            <h6 className={css.priceAmount}>{`$${cartTotalPrice}`}</h6>
          </div>
          <FunctionalButton name="CHECKOUT" />
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
