import { createSlice } from "@reduxjs/toolkit";

const coursesearch = createSlice({
  name: "search",
  initialState: {
    course: [],
  },
  reducers: {
    Searchcourse(state, action) {
      state.course = action.payload;
    },
  },
});
export const { Searchcourse } = coursesearch.actions;

export default coursesearch.reducer;
