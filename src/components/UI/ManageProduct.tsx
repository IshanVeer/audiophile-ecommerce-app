import React,{Fragment} from "react";
import css from "./ManageProduct.module.css";

const ManageProduct = () => {
  return (
    <Fragment>
        <div className={css.manageProductsContainer}>
      <span>
        <button className={css.manageProductActionsButton}>-</button>
      </span>
      <span className={css.quantity}>1</span>
      <span>
        <button className={css.manageProductActionsButton}>+</button>
      </span>
      </div>
    </Fragment>
  );
};

export default ManageProduct;
