import React, { Fragment } from "react";
import { useAppSelector } from "@/hooks/hooks";
import css from "./Cart.module.css";
import FunctionalButton from "../UI/FunctionalButton";
import ManageProduct from "../UI/ManageProduct";
import Image from "next/image";

const Cart = ({ onHide }) => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const cartTotalPrice = useAppSelector((state) => state.cart.totalPrice);
  return (
    <Fragment>
      <div className={css.backdrop} onClick={onHide}></div>
      <div className={css.cartModal} onClick={onHide}>
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
                <li key={product.id}>
                  <div className={css.productListItem}>
                    <div className={css.cartProdutInfoContainer}>
                      <Image
                        src={product.image.desktop}
                        alt={product.title}
                        className={css.cartProductImage}
                        width={100}
                        height={100}
                      />
                      <div className={css.cartProductInfo}>
                        <p className={css.cartProductName}>
                          {product.name.substring(0, 4)}
                        </p>
                        <p className={css.cartProductPrice}>${product.price}</p>
                      </div>
                    </div>

                    <div className={css.manageProducts}>
                      <ManageProduct />
                    </div>
                  </div>
                </li>
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
