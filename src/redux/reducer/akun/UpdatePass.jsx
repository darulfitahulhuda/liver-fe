import { createSlice } from "@reduxjs/toolkit";

const updatepasslicer = createSlice({
  name: "updatepass",
  initialState: {
    update: [],
  },
  reducers: {
    setupdatepass: (state, action) => {
      state.updatepass = action.payload;
    },
  },
});

export const { setupdatepass, userId } = updatepasslicer.actions;

export default updatepasslicer.reducer;
