import React from "react";
import css from "./ManageProduct.module.css";

const ManageProduct = () => {
  return (
    <div>
        <div className={css.manageProductsContainer}>
      <span>
        <button className={css.manageProductActionsButton}>-</button>
      </span>
      <span className={css.quantity}>1</span>
      <span>
        <button className={css.manageProductActionsButton}>+</button>
      </span>
      </div>
    </div>
  );
};

export default ManageProduct;
