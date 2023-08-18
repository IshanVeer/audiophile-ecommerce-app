"use client";

import React from "react";
import css from "./ProductList.module.css";
import Image from "next/image";
// import headphoneImage from "../../../public/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import ProductLinkButtonPrimary from "../UI/ProductLinkButtonPrimary";
import { useParams } from "next/navigation";
import { ProductProps } from "@/types/types";

const ProductList: React.FC<{ products: ProductProps[] }> =  ({products}) => {
  const params = useParams();
  

  return (
    <div>
      <div className={css.productListContainer}>
        <ul className={css.productList}>
          {products
            .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
            .map(
              (product) =>
                product.category === params.categories && (
                  <li className={css.productListItem} key={product._id}>
                    <div className={css.productImageContainer}>
                      <Image
                        className={css.productImage}
                        src={product.image.desktop}
                        alt={product.name}
                        width={2000}
                        height={2000}
                      />
                    </div>
                    <div className={css.productTextContainer}>
                      {product.new && (
                        <p className={css.productOverline}>New Product</p>
                      )}
                      <h2 className={css.productHeading}>{product.name}</h2>
                      <p className={css.productDescription}>
                        {product.description}
                      </p>
                      <ProductLinkButtonPrimary
                        path={`/${product.category}/${product.slug}`}
                        type="primary"
                        name="See Product"
                        width="half"
                      />
                    </div>
                  </li>
                )
            )}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
