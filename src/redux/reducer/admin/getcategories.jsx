import { createSlice } from "@reduxjs/toolkit";

const GetCategories = createSlice({
  name: "categories",
  initialState: {
    Categories: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.Categories = action.payload;
    },
  },
});

export const { setCategories } = GetCategories.actions;

export default GetCategories.reducer;
