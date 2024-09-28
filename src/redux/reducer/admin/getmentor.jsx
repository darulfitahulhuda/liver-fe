import { createSlice } from "@reduxjs/toolkit";

const MentorGet = createSlice({
  name: "MentorGet",
  initialState: {
    MentorGet: [],
  },
  reducers: {
    setMentorGet: (state, action) => {
      state.MentorGet = action.payload;
    },
  },
});

export const { setMentorGet } = MentorGet.actions;

export default MentorGet.reducer;
