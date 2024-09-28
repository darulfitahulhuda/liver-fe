import { createSlice } from "@reduxjs/toolkit";

const LessonAdd = createSlice({
  name: "AddLesson",
  initialState: {
    Lesson: "",
  },
  reducers: {
    setLesson: (state, action) => {
      state.Lesson = action.payload;
    },
  },
});

export const { setLesson } = LessonAdd.actions;

export default LessonAdd.reducer;
