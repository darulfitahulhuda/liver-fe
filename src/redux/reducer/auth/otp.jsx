import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verify: [],
  resend: [],
};

const otp = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setVerify: (state, action) => {
      state.verify = action.payload;
    },
    setResend: (state, action) => {
      state.resend = action.payload;
    },
  },
});

export const { setVerify, setResend } = otp.actions;

export default otp.reducer;
