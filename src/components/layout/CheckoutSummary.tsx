import React, { Fragment } from "react";
import css from "./CheckoutSummary.module.css";
import FunctionalButton from "../UI/FunctionalButton";

const CheckoutSummary = () => {
  return (
    <Fragment>
      <div className={css.checkoutSummaryContainer}>
        <h6>Summary</h6>
        <ul className={css.checkoutSummaryItems}>
          <li>item 1</li>
          <li>item 2</li>
        </ul>
        <div className={css.checkoutSummary}>
          <span>Total</span>
          <span>$ 100</span>
        </div>
        <div className={css.checkoutSummary}>
          <span>Shipping</span>
          <span>$ 100</span>
        </div>
        <div className={css.checkoutSummary}>
          <span>VAT(included)</span>
          <span>$ 100</span>
        </div>
        <div className={`${css.checkoutSummary} ${css.grandTotal}`}>
          <span>Grand total</span>
          <span>$ 100</span>
        </div>
        <FunctionalButton name="checkout" />
      </div>
    </Fragment>
  );
};

export default CheckoutSummary;
