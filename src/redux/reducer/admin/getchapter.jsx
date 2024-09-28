import { createSlice } from "@reduxjs/toolkit";

const Chapter = createSlice({
  name: "Chapter",
  initialState: {
    Chapter: [],
    KelolaKelas: [],
  },
  reducers: {
    setChapter: (state, action) => {
      state.chapter = action.payload;
    },
    setKelolaKelas: (state, action) => {
      state.KelolaKelas = action.payload;
    },
  },
});

export const { setChapter, setKelolaKelas } = Chapter.actions;

export default Chapter.reducer;
