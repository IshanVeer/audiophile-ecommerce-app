"use client";
import React, { Fragment } from "react";
import { useAppSelector } from "@/hooks/hooks";
import css from "./CheckoutSummary.module.css";
import CheckoutSummaryProducts from "./CheckoutSummaryProducts";

import FunctionalButton from "../UI/FunctionalButton";

const CheckoutSummary = ({onSubmit}) => {
  const summaryProducts = useAppSelector((state) => state.cart.products);
  const summaryTotalPrice = useAppSelector((state) => state.cart.totalPrice);

  const vat = (summaryTotalPrice * 0.18).toFixed(0);
  const grandTotal = summaryTotalPrice + 50 + Number(vat);
  return (
    <div className={css.checkoutSummaryContainer}>
      <h6 className={css.summaryHeading}>Summary</h6>
      <ul className={css.summaryProductList}>
        {summaryProducts.map((product) => (
          <CheckoutSummaryProducts key={product._id} products={product} />
        ))}
      </ul>

      <div className={css.checkoutSummary}>
        <span className={css.summaryTag}>Total</span>
        <span className={css.summaryValue}>$ {summaryTotalPrice}</span>
      </div>
      <div className={css.checkoutSummary}>
        <span className={css.summaryTag}>Shipping</span>
        <span className={css.summaryValue}>$ 50</span>
      </div>
      <div className={css.checkoutSummary}>
        <span className={css.summaryTag}>VAT(included)</span>
        <span className={css.summaryValue}>$ {vat}</span>
      </div>
      <div className={`${css.checkoutSummary} ${css.grandTotal}`}>
        <span className={css.summaryTag}>Grand total</span>
        <span className={`${css.summaryValue} ${css.grandTotalValue}`}>
          $ {grandTotal}
        </span>
      </div>
      <FunctionalButton name="CONTINUE & PAY" onClick={onSubmit}/>
    </div>
  );
};

export default CheckoutSummary;
