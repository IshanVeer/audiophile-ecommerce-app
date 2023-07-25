
import React from 'react';
import css from "./ProductList.module.css";


const ProductList:React.FC< {products:string[]} > = ({products}) => {

    const productList = products.map((product:any) => <li key={product.id}>{product.name}</li>)
  return (
    <div>
        <div className={css.productListContainer}>
            <ul>
                {productList}
            </ul>
            

        </div>
    </div>
  )
}

export default ProductList