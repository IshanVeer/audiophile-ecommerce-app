import React, { Fragment } from "react";
import { useAppSelector } from "@/hooks/hooks";
import css from "./Cart.module.css";
import FunctionalButton from "../UI/FunctionalButton";
import ManageProduct from "../UI/ManageProduct";
import Image from "next/image";

const Cart = ({ onHide }) => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);
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
              {/* <li className={css.cartProductListItem}>
                
                <div className={css.manageProducts}>
                  <ManageProduct />
                </div>
              </li> */}
              {cartProducts.map((product) => (
                <li key={product.id}>
                  <div className={css.productListItem}>
                    <div className={css.cartProdutImageContainer}>
                      <Image
                        src={product.image.desktop}
                        alt={product.title}
                        className={css.cartProductImage}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={css.cartProductInfo}>
                      <p className={css.cartProductName}>{product.slug}</p>
                      <p className={css.cartProductPrice}>${product.price}</p>
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
            <p className={css.priceAmount}>$ 20.00</p>
          </div>
          <FunctionalButton name="CHECKOUT" />
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
