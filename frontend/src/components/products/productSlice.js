import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      console.log(state.products);
    },
    addToCart: (state, action) => {
      const existing = state.cart.find(
        (item) => item.title === action.payload.title
      );
      if (existing) {
        existing.qty += 1;
        return;
      }
      state.cart.push({ ...action.payload, qty: 1 });
    },
  },
});

export const { setProducts, addToCart } = productSlice.actions;
export default productSlice.reducer;
