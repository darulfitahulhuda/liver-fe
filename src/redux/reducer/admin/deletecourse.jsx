import { createSlice } from "@reduxjs/toolkit";

const DeleteC = createSlice({
  name: "DeleteCourse",
  initialState: {
    DeleteCourse: [],
  },
  reducers: {
    setDeleteCourse: (state, action) => {
      state.DeleteCourse = action.payload;
    },
  },
});

export const { setDeleteCourse } = DeleteC.actions;

export default DeleteC.reducer;
