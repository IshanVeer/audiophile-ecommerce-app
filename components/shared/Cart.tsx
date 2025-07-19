"use client";
import React from "react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCartContext } from "@/context/CartProvider";
import Button from "../ui/Button";

const Cart = () => {
  const { cart } = useCartContext();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:border-none cursor-pointer">
        {" "}
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart"
          height={25}
          width={25}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" absolute top-25 left-6 sm:left-90 sm:top-25 lg:-left-90 lg:top-20   w-[377px] px-7 py-9">
        <div className="flex justify-between">
          <h5 className="h6-bold">Cart ({cart.length}) </h5>
          <button>Remove All</button>
        </div>
        <ul className="pt-10">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center gap-4">
              <Image
                src={item.image.desktop}
                alt={item.name}
                width={100}
                height={100}
                className="w-1/4 rounded-md"
              />

              <div>
                <p className="font-bold text-[15px] uppercase">{item.name}</p>
                <p className="text-dark-100/50 text-[14px] font-bold">
                  {`$${item.price}`}
                </p>
              </div>
              <div className="flex justify-around text-dark-100/25 bg-light-300 w-[120px] items-center">
                <button>-</button>
                <p className="text-dark-100 subtitle">{item.quantity}</p>
                <button>+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center py-8">
          <p className="body uppercase text-dark-100/50">Total</p>
          <p className="h6-bold">{`$${totalPrice}`}</p>
        </div>
        <Button className="w-full" label="checkout" isLink route="/" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cart;
