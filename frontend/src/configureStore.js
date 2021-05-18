import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./components/products/productSlice";
import profileSlice from "./components/profile/profileSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    profile: profileSlice,
  },
});

export default store;
