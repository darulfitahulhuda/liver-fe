import { createSlice } from "@reduxjs/toolkit";

const UpdateCourses = createSlice({
  name: "UpdateCourses",
  initialState: {
    UpdateCourse: "",
  },
  reducers: {
    setUpdateCourse: (state, action) => {
      state.UpdateCourse = action.payload;
    },
  },
});

export const { setUpdateCourse } = UpdateCourses.actions;

export default UpdateCourses.reducer;
