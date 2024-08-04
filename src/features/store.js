import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import cartSlice from "./cart/cartSlice";
import authSlice from "./auth/authSlice";

export default configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    auth: authSlice,
  },
});
