import { createSlice } from "@reduxjs/toolkit";


const cartSlice =  createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );
      state.totalQuantity++;
      if (!existingProduct) {
        state.products.push({
          id: newProduct._id,
          slug: newProduct.slug,
          image: newProduct.image,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice +=  newProduct.price;
      }
    },
    removeProductFromCart(state, action) {
        const id = action.payload;
        const existingProduct = state.products.find((product) => product.id === id);
        state.totalQuantity--;

        if(existingProduct.quantity === 1) {
            state.products = state.products.filter((product) => product.id !== id);
        } else {
            existingProduct.quantity--;
            existingProduct.totalPrice -=  existingProduct.price;
        }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
