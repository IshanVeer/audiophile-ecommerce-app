import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { cartActions } from "@/store/cart-slice";
import Image from "next/image";

import css from "./Cart.module.css";


import CartProduct from "./CartProduct";

import FunctionalButton from "../UI/FunctionalButton";
import ProductLinkButtonPrimary from "../UI/ProductLinkButtonPrimary";

const Cart = ({ onHide }) => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const cartTotalPrice = useAppSelector((state) => state.cart.totalPrice);
  const emptyCart = cartProducts.length === 0;

  const dispatch = useAppDispatch();
  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <Fragment>
      <div className={css.backdrop} onClick={onHide}></div>
      <div className={css.cartModal}>
        <div className={css.cartContent}>
          <div className={css.cartHeader}>
            <h6 className={css.cartHeading}>
              Cart <span>({cartQuantity})</span>
            </h6>
            <button className={css.removeAllButton} onClick={clearCart}>
              Remove all
            </button>
          </div>
          <div className={css.cartProducts}>
            <ul className={css.cartProductList}>
              {cartProducts.map((product) => (
                <CartProduct key={product._id} product={product} />
              ))}
            </ul>
          </div>
          {emptyCart && <div className={css.emptyCart}>
            <Image
              src="https://cdn.dribbble.com/users/887568/screenshots/3172047/media/35159a4a9ba57200e5e17119ffd945e6.gif"
              alt="empty-cart-Image"
              width={300}
              height={300}
              className={css.emptyCartImage}
            ></Image>
            <p className={css.emptyCartMessage}>Oops Your Cart Is Empty!!</p>
          </div>}
          <div className={css.cartTotalPrice}>
            <p className={css.priceTitle}> TOTAL</p>
            <h6 className={css.priceAmount}>{`$${cartTotalPrice}`}</h6>
          </div>
          {!emptyCart && <ProductLinkButtonPrimary name="CHECKOUT" type="primary" path="/checkout" width="full"   onClick={onHide}  />}
          {emptyCart && <ProductLinkButtonPrimary name="CONTINUE SHOPPING" path="/" type="primary" width="full" onClick={onHide} />}
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
