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
      console.log(action.payload);
      const list = JSON.parse(JSON.stringify(state.products));

      const item = action.payload;
      console.log(action.payload);

      state.cart.map((item) => {
        if (item.title === action.payload.title) {
          item.qty++;
        } else {
          state.cart.push({ ...item, qty: +1 });
        }
      });

      // const item = list.map((prod) => {
      //   prod.info.map((itemToBuy) => {
      //     if (itemToBuy.title === action.payload.title) {
      //       return itemToBuy;
      //     }
      //   });
      // });

      // const inCart = state.cart.find((item) => {
      //   return item.title === action.payload.title ? true : false;
      // });

      // console.log(inCart);

      // if (inCart) {
      //   state.cart.push({ ...action.payload, qty: 1 });
      // } else{
      //   ...state.cart
      // }

      // return {
      //   ...state,
      //   cart: inCart
      //     ? state.cart.map(
      //         (item) =>
      //           void (item.title = item.title
      //             ? { ...item, qty: item.qty + 1 }
      //             : item)
      //       )
      //     : [state.cart, { ...item, qty: 1 }],
      // };

      // state.cart.map(
      //   (item) =>
      //     void (item.title = action.payload.title
      //       ? { ...item, qty: item.qty + 1 }
      //       : item)
      // );

      // const inCart = state.cart.find((item) =>
      //   item.title === action.payload.title ? true : false
      // );

      // const existing = state.cart.title === action.payload.title;
      // if (existing) {
      //   existing.qty += 1;
      // }

      // console.log(inCart);

      // return {
      //   ...state,
      //   cart: inCart
      //     ? state.cart.map(
      //         (item) =>
      //           void (item.title = action.payload.title
      //             ? { ...item, qty: item.qty + 1 }
      //             : item)
      //       )
      //     : [state.cart, { ...action.payload, qty: 1 }],
      // };
    },
  },
});

export const { setProducts, addToCart } = productSlice.actions;
export default productSlice.reducer;
