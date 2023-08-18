import React from 'react';
import css from './CheckoutSummaryProducts.module.css'
import Image from 'next/image';

const CheckoutSummaryProducts = ({products}) => {
  return (
    <li key={products._id}>
      
    <div className={css.productListItem}>
      
      <div className={css.cartProductInfoContainer}>
        <Image
          src={products.image.desktop}
          alt={products.name}
          className={css.cartProductImage}
          width={100}
          height={100}
        />
        <div className={css.cartProductInfo}>
          <p className={css.cartProductName}>
            {products.name.substring(0, 4)}
          </p>
          <p className={css.cartProductPrice}>${products.price}</p>
        </div>
      </div>
      <div className={css.quantityContainer}>
        <span>x</span>
        <span>{products.quantity}</span>
      </div>
    </div>
  </li>
  )
}

export default CheckoutSummaryProducts