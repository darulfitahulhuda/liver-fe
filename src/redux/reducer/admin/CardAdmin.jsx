import { createSlice } from "@reduxjs/toolkit";

const CardAdm = createSlice({
  name: "CardAdmin",
  initialState: {
    card: "",
  },
  reducers: {
    setCardAdmin: (state, action) => {
      state.card = action.payload;
    },
  },
});

export const { setCardAdmin } = CardAdm.actions;

export default CardAdm.reducer;
