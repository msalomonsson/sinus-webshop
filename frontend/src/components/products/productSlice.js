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
    removeFromCart: (state, action) => {
      console.log("delete");
      state.cart.map((item, i) => {
        if (item.title === action.payload) {
          state.cart.splice(i, 1);
        }
        return null;
      });
    },
    incrementQty: (state, action) => {
      const itemID = state.cart.find((item) => item.title === action.payload);
      if (itemID) {
        itemID.qty += 1;
        return;
      }
    },
    decrementQty: (state, action) => {
      const itemID = state.cart.find((item) => item.title === action.payload);
      if (itemID.qty - 1 < 1) {
        itemID.qty = 1;
      } else {
        itemID.qty -= 1;
      }
    },
  },
});

export const {
  setProducts,
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
} = productSlice.actions;
export default productSlice.reducer;
