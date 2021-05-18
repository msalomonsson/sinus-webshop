import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignIn: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeSignIn: (state, action) => {
      state.isSignIn = action.payload;
    },
  },
});

export const { changeSignIn } = profileSlice.actions;
export default profileSlice.reducer;
