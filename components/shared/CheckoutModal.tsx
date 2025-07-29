"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useCartContext } from "@/context/CartProvider";
import { shortenName } from "@/lib/utils";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

const CheckoutModal = () => {
  const modalRoot = document.getElementById("modal-root");
  const { cart, clearCart } = useCartContext();

  const router = useRouter();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const vatPrice = (totalPrice * 20) / 100;
  const shippingPrice = 50;
  const grandTotal = totalPrice + shippingPrice + vatPrice;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!modalRoot) {
    console.log("Modal root element not found");
    return null;
  }
  const handleBackToHome = () => {
    clearCart();
    console.log("cart cleared");
    router.push("/");
  };
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-light-100 text-dark-100 w-[327px] sm:w-[540px] rounded-md p-8 sm:p-12">
        <Image
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="checkout-icon"
          height={100}
          width={100}
          className="w-16"
        />
        <h5 className="h5-bold sm:h3-bold mt-6">THANK YOU FOR YOUR ORDER</h5>
        <p className="text-dark-100/50 body my-7">
          You will receive an email confirmation shortly.
        </p>
        <div className="bg-light-300 rounded-md overflow-hidden sm:flex">
          {/* cart items */}
          <div className="py-6 sm:w-3/5">
            <ul className="border-b border-dark-100/8 mx-6 pb-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center gap-4"
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

            <p className="text-center pt-4 text-xs font-bold text-dark-100/50">{`and ${cart.length} other item(s)`}</p>
          </div>
          {/* grand total */}
          <div className="bg-dark-100 px-6 py-5 sm:w-2/5 sm:flex flex-col justify-end">
            <p className="uppercase body text-light-100/50">Grand Total</p>
            <p className="text-light-100 h6-bold pt-4">{`$${grandTotal}`}</p>
          </div>
        </div>
        <Button
          handleBackToHome={handleBackToHome}
          action="checkout"
          className="w-full mt-6 sm:mt-10"
          label="BACK TO HOME"
        />
      </div>
    </div>,
    modalRoot
  );
};

export default CheckoutModal;
