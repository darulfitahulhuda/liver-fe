import { createSlice } from "@reduxjs/toolkit";

const getfree = createSlice({
  name: "free",
  initialState: {
    kelasfree: [],
  },
  reducers: {
    setfree(state, action) {
      state.kelasfree = action.payload;
    },
  },
});
export const { setfree } = getfree.actions;

export default getfree.reducer;
