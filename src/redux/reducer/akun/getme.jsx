import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUser: "",
};

const authGetUserSlice = createSlice({
  name: "GetUser",
  initialState,
  reducers: {
    setIsUserIn: (state, action) => {
      state.isUser = action.payload;
    },
  },
});

export const { setIsUserIn } = authGetUserSlice.actions;

export default authGetUserSlice.reducer;
