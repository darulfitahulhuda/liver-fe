import { createSlice } from "@reduxjs/toolkit";

const initialState = { coursesPopular: "" };

const popularSlicer = createSlice({
  name: "coursePopularAuth",
  initialState,
  reducers: {
    setCoursePopular: (state, action) => {
      state.coursesPopular = action.payload;
    },
  },
});

export const { setCoursePopular } = popularSlicer.actions;

export default popularSlicer.reducer;