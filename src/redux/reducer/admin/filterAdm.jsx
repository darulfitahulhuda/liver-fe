import { createSlice } from "@reduxjs/toolkit";

const filterAdmSlice = createSlice({
  name: "FilterAdmin",
  initialState: {
    dataUsers: "",
  },
  reducers: {
    setDataUsers: (state, action) => {
      state.dataUsers = action.payload;
    },
  },
});

export const { setDataUsers } = filterAdmSlice.actions;

export default filterAdmSlice.reducer;