import React, { Fragment } from "react";
import css from "./Cart.module.css";
import FunctionalButton from "../UI/FunctionalButton";
import ManageProduct from "../UI/ManageProduct";

const Cart = ({ onHide }) => {
  return (
    <Fragment>
      <div className={css.backdrop} onClick={onHide}></div>
      <div className={css.cartModal} onClick={onHide}>
        <div className={css.cartContent}>
          <div className={css.cartHeader}>
            <h6 className={css.cartHeading}>
              Cart <span>({2})</span>
            </h6>
            <button className={css.removeAllButton}>Remove all</button>
          </div>
          <div className={css.cartProducts}>
            <ul className={css.cartProductList}>
              <li className={css.cartProductListItem}>
                item 1{" "}
                <div className={css.manageProducts}>
                  <ManageProduct />
                </div>
              </li>
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
