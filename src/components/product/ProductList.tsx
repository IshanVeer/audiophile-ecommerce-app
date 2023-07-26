"use client";

import React from "react";
import css from "./ProductList.module.css";
import Image from "next/image";
import headphoneImage from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import ProductLinkButtonPrimary from "../UI/ProductLinkButtonPrimary";
import { useParams } from "next/navigation";

interface includeItems{
    quantity: number;
    item: string;
}
interface Product {
    id: number;
    name: string;
    category: string;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: includeItems[];
    gallery: {
        first: {
        mobile: string;
        tablet: string;
        desktop: string;
        };
        second: {
        mobile: string;
        tablet: string;
        desktop: string;
        };
        third: {
        mobile: string;
        tablet: string;
        desktop: string;
        };
    };
}

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  const params = useParams();
  console.log(params.categories, "params");
  console.log(products, "products");

  return (
    <div>
      <div className={css.productListContainer}>
        <ul className={css.productList}>
          {products
            .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
            .map(
              (product) =>
                product.category === params.categories && (
                  <li className={css.productListItem} key={product.id}>
                    <div className={css.productImageContainer}>
                      <Image
                        className={css.productImage}
                        src={headphoneImage}
                        alt={product.name}
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
                        path="/"
                        type="primary"
                        name="See Product"
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
