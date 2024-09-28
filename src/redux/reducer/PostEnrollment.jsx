import { createSlice } from "@reduxjs/toolkit";

const initialState = { courseEnrollment: ""};

const courseEnrollmentSlicer = createSlice({
  name: "courseEnrollmentAuth",
  initialState,
  reducers: {
    setCourseEnrollment: (state, action) => {
      state. courseEnrollment = action.payload;
    },
  },
});

export const {   setCourseEnrollment } = courseEnrollmentSlicer.actions;

export default courseEnrollmentSlicer.reducer;