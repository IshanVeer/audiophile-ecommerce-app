"use client";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // initialise cart state
  const [cart, setCart] = useState([]);

  // add to cart

  // increase cart item

  // decrease cart item and if 1 then remove it

  // remove all cart items

  const value = {};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCartContext should be used inside CartProvider");
  }
  return context;
};
