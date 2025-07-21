"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CheckoutPage = () => {
  const router = useRouter();
  return (
    <div className=" bg-light-200 pt-6 pb-24">
      {" "}
      <button
        className="body text-dark-100/50 pb-4 pl-8 sm:pb-7"
        onClick={() => router.back()}
      >
        Go back
      </button>
      {/* form container */}
      <form action="submit ">
        {/* input containers */}
        <div className="mx-8 section-container rounded-md bg-light-100 pt-9 pb-8">
          <h4 className="h4-bold">Checkout</h4>

          {/* billing details */}
          <div className="pt-10">
            <p className="subtitle text-primary-500 pb-7">billing details</p>
            {/* name */}
            <div className="flex flex-col gap-3 pb-7">
              <label
                className="text-xs font-bold text-dark-100 "
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40 border-[#cfcfcf]"
                placeholder="Alexei Ward"
                id="name"
                name="name"
                type="text"
              />
            </div>
            {/* email */}
            <div className="flex flex-col gap-3 pb-7">
              <label
                className="text-xs font-bold capitalize text-dark-100 "
                htmlFor="email"
              >
                email address
              </label>
              <input
                className="py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40 border-[#cfcfcf]"
                placeholder="alexei@mail.com"
                id="email"
                name="email address"
                type="email"
              />
            </div>
            {/* phone */}
            <div className="flex flex-col gap-3">
              <label
                className="text-xs font-bold capitalize text-dark-100 "
                htmlFor="phone-number"
              >
                phone number
              </label>
              <input
                className="py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40 border-[#cfcfcf]"
                placeholder="+1 202-555-0136"
                id="phone-number"
                name="phone number"
                type="number"
              />
            </div>
          </div>
          {/* shipping */}
          <div className="pt-10">
            <p className="subtitle text-primary-500 pb-7">shipping info</p>
            {/* address */}
            <div className="flex flex-col gap-3 pb-7">
              <label
                className="text-xs font-bold text-dark-100 "
                htmlFor="address"
              >
                Your Address
              </label>
              <input
                className="py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40 border-[#cfcfcf]"
                placeholder="1137 Williams Avenue"
                id="address"
                name="address"
                type="text"
              />
            </div>
            {/* zip code */}
            <div className="flex flex-col gap-3 pb-7">
              <label
                className="text-xs font-bold capitalize text-dark-100 "
                htmlFor="zip-code"
              >
                zip code
              </label>
              <input
                className="py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40 border-[#cfcfcf]"
                placeholder="10001"
                id="zip-code"
                name="zip code"
                type="number"
              />
            </div>
            {/* city */}
            <div className="flex flex-col gap-3 pb-7">
              <label
                className="text-xs font-bold capitalize text-dark-100 "
                htmlFor="city"
              >
                city
              </label>
              <input
                className="py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40 border-[#cfcfcf]"
                placeholder="New York"
                id="city"
                name="city"
                type="text"
              />
            </div>
            {/* country */}
            <div className="flex flex-col gap-3">
              <label
                className="text-xs font-bold capitalize text-dark-100 "
                htmlFor="country"
              >
                Country
              </label>
              <input
                className="py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40 border-[#cfcfcf]"
                placeholder="United States"
                id="country"
                name="country"
                type="text"
              />
            </div>
          </div>
          {/* payment details */}
          <div className="pt-10">
            <p className="subtitle text-primary-500 pb-7">payment details</p>
            {/* payment info */}
            <fieldset className="flex flex-col gap-4 pb-7">
              <legend className="text-xs font-bold capitalize text-dark-100 pb-3">
                payment method
              </legend>

              <label className="flex text-sm font-bold items-center gap-3 border py-3.75 px-4 rounded-md">
                <input
                  type="radio"
                  name="payment-method"
                  value="e-Money"
                  className="accent-primary-500"
                />
                <span className="text-sm font-bold text-dark-100">e-Money</span>
              </label>

              <label className="flex text-sm font-bold items-center gap-3 border py-3.75 px-4 rounded-md">
                <input
                  type="radio"
                  name="payment-method"
                  value="Cash on Delivery"
                  className="accent-primary-500"
                />
                <span className="text-sm font-bold text-dark-100">
                  Cash on Delivery
                </span>
              </label>
            </fieldset>

            {/* e-money number */}
            <div className="flex flex-col gap-3 pb-7">
              <label
                className="text-xs font-bold capitalize text-dark-100 "
                htmlFor="e-money"
              >
                e-Money Number
              </label>
              <input
                className="py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40 border-[#cfcfcf]"
                placeholder="238521993"
                id="e-money"
                type="number"
              />
            </div>
            {/* e-money pin */}
            <div className="flex flex-col gap-3">
              <label
                className="text-xs font-bold capitalize text-dark-100 "
                htmlFor="e-pin"
              >
                e-Money PIN
              </label>
              <input
                className="py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40 border-[#cfcfcf]"
                placeholder="6891"
                id="e-pin"
                type="number"
              />
            </div>
          </div>
        </div>

        {/* summary container */}
        <div></div>
      </form>
      {/* checkout summary */}
    </div>
  );
};

export default CheckoutPage;
