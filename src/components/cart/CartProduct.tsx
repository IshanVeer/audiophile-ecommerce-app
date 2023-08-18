import React, { Fragment } from "react";
import { cartActions } from "@/store/cart-slice";
import { useAppDispatch } from "@/hooks/hooks";
import css from "./CartProduct.module.css";
import Image from "next/image";

const CartProduct = ({ product }) => {
  const dispatch = useAppDispatch();
  const removeProductHandler = () => {
    dispatch(cartActions.removeProductFromCart(product.id));
  };
  const addProductHandler = () => {
    dispatch(cartActions.addProductToCart(product));
  };
  return (
    <Fragment>
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
            <span>
              <button className={css.cartActionButton} onClick={removeProductHandler}>-</button>
            </span>

            <span className={css.quantity}>{product.quantity}</span>
            <span>
              <button className={css.cartActionButton} onClick={addProductHandler} >+</button>
            </span>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default CartProduct;
