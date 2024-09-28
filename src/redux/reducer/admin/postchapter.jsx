import { createSlice } from "@reduxjs/toolkit";

const ChapterPost = createSlice({
  name: "Chapter",
  initialState: {
    ChapterPost: "",
  },
  reducers: {
    setChapterPost: (state, action) => {
      state.ChapterPost = action.payload;
    },
  },
});

export const { setChapterPost } = ChapterPost.actions;

export default ChapterPost.reducer;
