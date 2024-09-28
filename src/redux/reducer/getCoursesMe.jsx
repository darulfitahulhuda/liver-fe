import { createSlice } from "@reduxjs/toolkit";

const CoursesMeSlicer = createSlice({
  name: "CourseMe",
  initialState: {
    coursesMe: "",
  },
  reducers: {
    setCourseMe(state, action) {
      state.coursesMe = action.payload;
    },
  },
});
export const { setCourseMe } = CoursesMeSlicer.actions;

export default CoursesMeSlicer.reducer;
