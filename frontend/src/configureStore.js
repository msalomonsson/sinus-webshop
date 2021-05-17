import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./components/products/productSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;
