import { createSlice } from "@reduxjs/toolkit";

const MentorAdd = createSlice({
  name: "AddMentor",
  initialState: {
    Mentor: "",
  },
  reducers: {
    setMentor: (state, action) => {
      state.Mentor = action.payload;
    },
  },
});

export const { setMentor } = MentorAdd.actions;

export default MentorAdd.reducer;
