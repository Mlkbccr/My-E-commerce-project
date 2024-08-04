import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  products: [],
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (data) => {
    try {
      let url = "/products";
      if (data) {
        url += " ?designation=${data}";
      }
      const res = await http.get(url);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data) => {
    try {
      let url = "/products";
      const res = await http.post(url, data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data) => {
    try {
      let url = `/products/${data._id}`;
      const res = await http.put(url, data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    try {
      let url = "/products/${id}";
      const res = await http.delete(url);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    info: (state, action) => {
      console.log(state.products);
    },
  },
});

export const { info } = productSlice.actions;
export default productSlice.reducer;
