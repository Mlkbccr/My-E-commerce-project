import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../api";
const initialState = {
  user: localStorage["user"] ? JSON.parse(localStorage["user"]) : {},
  token: localStorage["token"] ? localStorage["token"] : "",
};
export const register = createAsyncThunk("auth/register", async (data) => {
  try {
    let url = "/auth/register";
    const res = await http.post(url, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    let url = "/auth/login";
    const res = await http.post(url, data);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
});
export const logout = createAsyncThunk("auth/logout", async (_) => {
  try {
    let url = "/auth/logout";
    const res = await http.post(url);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
});
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (data) => {
    try {
      let url = "/auth/change-password";
      const res = await http.post(url, data);
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);
export const sendMail = createAsyncThunk("auth/sendMail", async (_) => {
  try {
    let url = "/auth/send-mail";
    const res = await http.post(url);
    return res;
  } catch (err) {
    return err;
  }
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, action) => {
      console.log(state.user);
    },
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    },
    deleteUser: (state, action) => {
      state.user = {};
      state.token = "";
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});
export const { getUser, setUser, deleteUser } = authSlice.actions;
export default authSlice.reducer;
