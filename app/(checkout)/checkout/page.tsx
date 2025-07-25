"use client";
import { useCartContext } from "@/context/CartProvider";
import { shortenName } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const CheckoutPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eNumber: "",
    ePin: "",
  });
  const { cart } = useCartContext();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const vatPrice = (totalPrice * 20) / 100;
  const shippingPrice = 50;
  const grandTotal = totalPrice + shippingPrice + vatPrice;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className=" bg-light-200 pt-6 sm:pt-14 lg:pt-21 pb-24 sm:pb-29 lg:pb-35">
      {" "}
      <button
        className="body text-dark-100/50 pb-4 pl-8 sm:pl-10 lg:pl-41 sm:pb-7 cursor-pointer"
        onClick={() => router.back()}
      >
        Go back
      </button>
      {/* form container */}
      <form
        onSubmit={formSubmitHandler}
        className="mx-8 sm:mx-10 lg:mx-41 flex flex-col lg:flex-row gap-8"
      >
        {/* input containers */}
        <div className="px-8 sm:px-10 lg:w-2/3 rounded-md bg-light-100 pt-8 pb-0.5">
          <h4 className="h4-bold sm:h3-bold">Checkout</h4>
          <p className="subtitle text-primary-500 pt-10 sm:pt-13 pb-7">
            billing details
          </p>

          {/* billing details */}
          <div className="sm:grid grid-cols-2 gap-x-4">
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
                value={formData.name}
                onChange={inputHandler}
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
                name="email"
                type="email"
                value={formData.email}
                onChange={inputHandler}
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
                name="phone"
                type="number"
                value={formData.phone}
                onChange={inputHandler}
              />
            </div>
          </div>
          {/* shipping */}
          <p className="subtitle text-primary-500 pt-10 sm:pt-15 pb-7">
            shipping info
          </p>
          <div className="sm:grid grid-cols-2 gap-x-4">
            {/* address */}
            <div className="flex flex-col col-span-2 gap-3 pb-7">
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
                value={formData.address}
                onChange={inputHandler}
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
                name="zip"
                type="number"
                value={formData.zip}
                onChange={inputHandler}
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
                value={formData.city}
                onChange={inputHandler}
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
                value={formData.country}
                onChange={inputHandler}
              />
            </div>
          </div>
          {/* payment details */}
          <p className="subtitle text-primary-500 pt-10 sm:pt-15 pb-7">
            payment details
          </p>

          {/* payment info */}
          <fieldset className="sm:grid sm:grid-cols-2 pb-7">
            <p className="text-xs  font-bold capitalize text-dark-100 pb-3">
              payment method
            </p>
            <div className="flex  flex-col gap-4 ">
              <label className="flex text-sm font-bold items-center gap-3 border py-3.75 px-4 rounded-md">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="e-money"
                  className="accent-primary-500"
                  onChange={inputHandler}
                  checked={formData.paymentMethod === "e-money"}
                />
                <span className="text-sm font-bold text-dark-100">e-Money</span>
              </label>

              <label className="flex text-sm font-bold items-center gap-3 border py-3.75 px-4 rounded-md">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash-on-delivery"
                  className="accent-primary-500"
                  onChange={inputHandler}
                  checked={formData.paymentMethod === "cash-on-delivery"}
                />
                <span className="text-sm font-bold text-dark-100">
                  Cash on Delivery
                </span>
              </label>
            </div>
          </fieldset>

          {/* e-money number */}
          {formData.paymentMethod === "e-money" && (
            <div className="sm:flex items-start gap-4">
              <div className="flex flex-col gap-3 pb-7 w-full">
                <label
                  className="text-xs font-bold capitalize text-dark-100 "
                  htmlFor="e-money"
                >
                  e-Money Number
                </label>
                <input
                  className="py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40 border-[#cfcfcf]"
                  placeholder="238521993"
                  name="eNumber"
                  id="e-money"
                  type="number"
                  onChange={inputHandler}
                  value={formData.eNumber}
                />
              </div>
              {/* e-money pin */}
              <div className="flex flex-col gap-3 w-full">
                <label
                  className="text-xs font-bold capitalize text-dark-100 "
                  htmlFor="e-pin"
                >
                  e-Money PIN
                </label>
                <input
                  className="py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40 border-[#cfcfcf]"
                  placeholder="6891"
                  name="ePin"
                  id="e-pin"
                  type="number"
                  onChange={inputHandler}
                  value={formData.ePin}
                />
              </div>
            </div>
          )}
        </div>

        {/* summary container */}
        <div className=" px-8 sm:px-10 lg:w-1/3 h-fit rounded-md bg-light-100 pt-9 pb-8">
          <h4 className="h4-bold">Summmary</h4>
          <ul className="pt-10">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between pb-8 items-center gap-4"
              >
                <div className="flex w-2/3 items-center gap-4">
                  <Image
                    src={item.image.desktop}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-1/3 rounded-md"
                  />

                  <div className="w-1/2">
                    <p className="font-bold text-[15px] uppercase">
                      {shortenName(item.name)}
                    </p>
                    <p className="text-dark-100/50 text-[14px] font-bold">
                      {`$${item.price}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-[15px] font-bold text-dark-100/50">
                  <p>x</p>
                  <p>{item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="body uppercase text-dark-100/50">total</p>
              <p className="h6-bold">{`$${totalPrice}`}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="body uppercase text-dark-100/50">shipping</p>
              <p className="h6-bold">{`$${shippingPrice}`}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="body uppercase text-dark-100/50">VAT (INCLUDED)</p>
              <p className="h6-bold">{`$${vatPrice}`}</p>
            </div>
            <div className="flex items-center justify-between py-4">
              <p className="body uppercase text-dark-100/50">grand total</p>
              <p className="h6-bold text-primary-500">{`$${grandTotal}`}</p>
            </div>
            <Button label="Continue & pay" typeButton="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
