import { createSlice } from "@reduxjs/toolkit";

const initialState = { coursesDetail: ""};

const detailSlicer = createSlice({
  name: "courseDetailAuth",
  initialState,
  reducers: {
    setCourseDetail: (state, action) => {
      state.coursesDetail = action.payload;
    },
  },
});

export const {  setCourseDetail } = detailSlicer.actions;

export default detailSlicer.reducer;