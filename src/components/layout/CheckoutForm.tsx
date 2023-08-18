
import React, { Fragment } from "react";
import css from "./CheckoutForm.module.css";


const CheckoutForm = () => {
  return (
    <Fragment>
      <form className={css.form}>
        <h3>checkout</h3>
        {/* billing details */}
        <p className={css.checkoutFormSubHeading}>billing details</p>
        <div className={css.formSection}>
          <div className={css.labelInputContainer}>
            <label className={css.checkoutFormLabel} htmlFor="name">
              Name
            </label>
            <input
              className={css.checkoutFormInput}
              type="text"
              id="name"
              placeholder="Alexei Ward"
            />
          </div>
          <div className={css.labelInputContainer}>
            <label className={css.checkoutFormLabel} htmlFor="email">
              Email
            </label>
            <input
              className={css.checkoutFormInput}
              type="email"
              id="email"
              placeholder="alexei@mail.com"
            />
          </div>
          <div className={css.labelInputContainer}>
            <label className={css.checkoutFormLabel} htmlFor="phone">
              Phone
            </label>
            <input
              className={css.checkoutFormInput}
              type="tel"
              id="phone"
              placeholder="+1 202-555-0136"
            />
          </div>
        </div>

        {/* shipping details */}
        <p className={css.checkoutFormSubHeading}>shipping info</p>
        <div className={css.formSection}>
          <div className={`${css.labelInputContainer} ${css.fullWidthInput}`}>
            <label className={css.checkoutFormLabel} htmlFor="address">
              Address
            </label>
            <input
              className={css.checkoutFormInput}
              type="text"
              id="address"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div className={css.labelInputContainer}>
            <label className={css.checkoutFormLabel} htmlFor="zip">
              Zip Code
            </label>
            <input
              className={css.checkoutFormInput}
              type="text"
              id="zip"
              placeholder="10001"
            />
          </div>
          <div className={css.labelInputContainer}>
            <label className={css.checkoutFormLabel} htmlFor="city">
              City
            </label>
            <input
              className={css.checkoutFormInput}
              type="text"
              id="city"
              placeholder="New York"
            />
          </div>
          <div className={css.labelInputContainer}>
            <label className={css.checkoutFormLabel} htmlFor="country">
              Country
            </label>
            <input
              className={css.checkoutFormInput}
              type="text"
              id="country"
              placeholder="United States"
            />
          </div>
        </div>
        {/* payment details */}
        <p className={css.checkoutFormSubHeading}>Payment Details</p>
        <div className={css.formSection}>
          <div className={css.paymentLabelInputContainer}>
            <input type="radio" name="method" value="e-money" id="e-money" />
            <label htmlFor="e-money">e-money</label>
          </div>
          <div className={css.paymentLabelInputContainer}>
            <input type="radio" name="method" value="cash" id="cash" />
            <label htmlFor="cash">Cash On Delivery</label>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default CheckoutForm;
