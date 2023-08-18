import { createSlice } from "@reduxjs/toolkit";


const cartSlice =  createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product._id === newProduct._id
      );
      state.totalQuantity++;
      state.totalPrice +=  newProduct.price;
      if (!existingProduct) {
        
        state.products.push({
          _id: newProduct._id,
          slug: newProduct.slug,
          name: newProduct.name,
          image: newProduct.image,
          price: newProduct.price,
          quantity: 1,
          totalAmount: newProduct.price,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice +=  newProduct.price;
      }
    },
    removeProductFromCart(state, action) {
        const id = action.payload;
        const existingProduct = state.products.find((product) => product._id === id);
        state.totalQuantity--;
        state.totalPrice -=  existingProduct.price;

        if(existingProduct.quantity === 1) {
            state.products = state.products.filter((product) => product._id !== id);
        } else {
            existingProduct.quantity--;
            existingProduct.totalPrice -=  existingProduct.price;
        }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
