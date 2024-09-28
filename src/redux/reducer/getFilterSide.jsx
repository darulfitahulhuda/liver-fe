import { createSlice } from "@reduxjs/toolkit";

const filterSideBar = createSlice({
  name: "filter",
  initialState: {
    filterSide: [],
  },
  reducers: {
    setFilterSide(state, action) {
      state.filterSide = action.payload;
    },
  },
});
export const { setFilterSide } = filterSideBar.actions;

export default filterSideBar.reducer;
