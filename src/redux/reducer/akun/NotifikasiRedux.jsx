import { createSlice } from "@reduxjs/toolkit";

const akunnotif = createSlice({
  name: "notifikasiakun",
  initialState: {
    notif: [],
  },
  reducers: {
    setnontifakun: (state, action) => {
      state.notif = action.payload;
    },
  },
});

export const { setnontifakun } = akunnotif.actions;

export default akunnotif.reducer;
