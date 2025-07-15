"use client";
import React, { createContext, useContext } from "react";

const CartContext = createContext(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
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
