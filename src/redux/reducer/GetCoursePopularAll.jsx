
import { createSlice } from "@reduxjs/toolkit";

const initialState = { coursesPopularAll: "" };

const popularAllSlicer = createSlice({
  name: "coursePopularAllAuth",
  initialState,
  reducers: {
    setCoursePopularAll: (state, action) => {
      state.coursesPopularAll = action.payload;
    },
  },
});

export const { setCoursePopularAll } = popularAllSlicer.actions;

export default popularAllSlicer.reducer;