import { createSlice } from "@reduxjs/toolkit";

const initialState = { paymentHistory: ""};

const paymentHistorySlicer = createSlice({
  name: "paymentHistoryAuth",
  initialState,
  reducers: {
    setPaymentHistory: (state, action) => {
      state.paymentHistory = action.payload;
    },
  },
});

export const {  setPaymentHistory } = paymentHistorySlicer.actions;

export default paymentHistorySlicer.reducer;