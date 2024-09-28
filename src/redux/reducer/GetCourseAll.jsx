import { createSlice } from "@reduxjs/toolkit";

const allSlicer = createSlice({
  name: "courseAllAuth",
  initialState: {
    coursesAll: "",
    // sortBy: "",
  },
  reducers: {
    setCourseAll: (state, action) => {
      state.coursesAll = action.payload;
    },
    // setSortBy: (state, action) => {
    //   state.sortBy = action.payload;
    // },
  },
});

export const { setCourseAll } = allSlicer.actions;

export default allSlicer.reducer;
