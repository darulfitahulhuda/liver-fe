import { createSlice } from "@reduxjs/toolkit";

const KategoriSlice = createSlice({
  name: "kategori",
  initialState: {
    kategori: [],
  },
  reducers: {
    setkategoribelajar(state, action) {
      state.kategori = action.payload;
    },
  },
});
export const { setkategoribelajar } = KategoriSlice.actions;

export default KategoriSlice.reducer;
