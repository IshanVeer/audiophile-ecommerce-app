"use client";
import { CartItemProps } from "@/types";
import React, { createContext, useContext, useState } from "react";

interface CartContextType {
  cart: CartItemProps[];
  addToCart: (incomingItem: CartItemProps) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // initialise cart state
  const [cart, setCart] = useState<CartItemProps[]>([]);
  console.log(cart, " cart");

  // add to cart

  const addToCart = (incomingItem: CartItemProps) => {
    {
      /* we get the item  and check if the item id already exist we just increase the item quantity and if the 
      id doesn't exist you add the  */
    }
    setCart((prev) => {
      const itemExists = prev.find((i) => i.id === incomingItem.id);

      // if item exist then just increase the quantity else add it to the state
      if (itemExists) {
        return prev.map((existingItem) =>
          existingItem.id === incomingItem.id
            ? {
                ...existingItem,
                quantity: existingItem.quantity + incomingItem.quantity,
              }
            : existingItem
        );
      } else {
        return [...prev, { ...incomingItem }];
      }
    });
  };

  // increase cart item

  // decrease cart item and if 1 then remove it

  // remove all cart items

  const value = { cart, addToCart };
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
