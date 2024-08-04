import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    infoCart: (state, action) => {},
    addToCart: (state, action) => {
      let product = action.payload;
      product.quantity = 1;
      state.cart = [...state.cart, product];
    },
    incrementCart: (state, action) => {
      let id = action.payload;
      let p = state.cart.find((v) => v._id == id);
      p.quantity += 1;
    },
    decrementCart: (state, action) => {
      let id = action.payload;
      let p = state.cart.find((v) => v._id == id);
      if (p.quantity > 1) {
        p.quantity -= 1;
      }
    },
    removeProduct: (state, action) => {
      let id = action.payload;
      let i = state.cart.findIndex((v) => v._id === id);
      state.cart.splice(i, 1);
    },
  },
});

export const {
  infoCart,
  addToCart,
  incrementCart,
  decrementCart,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
