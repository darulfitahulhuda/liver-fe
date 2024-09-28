import { createSlice } from "@reduxjs/toolkit";

const Course = createSlice({
  name: "Course",
  initialState: {
    Course: [],
  },
  reducers: {
    setCourse: (state, action) => {
      state.Course = action.payload;
    },
  },
});

export const { setCourse } = Course.actions;

export default Course.reducer;
