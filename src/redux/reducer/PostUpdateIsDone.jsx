import { createSlice } from "@reduxjs/toolkit";

const initialState = { updateIsDone: ""};

const updateIsDoneSlicer = createSlice({
  name: "updateIsDoneAuth",
  initialState,
  reducers: {
    setUpdateIsDone: (state, action) => {
      state.updateIsDone = action.payload;
    },
  },
});

export const {  setUpdateIsDone } = updateIsDoneSlicer.actions;

export default updateIsDoneSlicer.reducer;