import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserInfo = createAsyncThunk("/users", async (uid) => {
  const response = axios.get(`/users/${uid}`).then((res) => {
    return res.data;
  });
  return response;
});

export const createUser = createAsyncThunk("/createUser", async (uid) => {
  axios.post("/users/createUser", {
    address: "",
    card: { ccv: "", date: "", number: "" },
    city: "",
    name: "",
    uid: uid,
  });
});

const initialState = {
  isSignIn: false,
  user: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeSignIn: (state, action) => {
      state.isSignIn = action.payload;
    },
  },
  extraReducers: {
    [getUserInfo.fulfilled]: (state, action) => {
      state.user = action.payload[0];
    },
  },
});

export const { changeSignIn } = profileSlice.actions;
export default profileSlice.reducer;
