import { createSlice } from "@reduxjs/toolkit";

const CourseAdd = createSlice({
  name: "CourseAdd",
  initialState: {
    AddCourse: "",
  },
  reducers: {
    setAddCourse: (state, action) => {
      state.AddCourse = action.payload;
    },
  },
});

export const { setAddCourse } = CourseAdd.actions;

export default CourseAdd.reducer;
