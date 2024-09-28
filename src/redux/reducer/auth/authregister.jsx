import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isRegister: "",
  user: "",
};

const authRegisterSlice = createSlice({
  name: "registerAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      // state.token = { ...state.token, token: action.payload };
      state.token = action.payload;
    },
    setRegis: (state, action) => {
      state.isRegister = action.payload;
      // state.isRegister = { ...state.isRegister, isRegister: action.payload };
    },
    setUserRegis: (state, action) => {
      // state.user = { ...state.user, user: action.payload };
      state.user = action.payload;
    },
  },
});

export const { setToken, setRegis, setUserRegis } = authRegisterSlice.actions;

export default authRegisterSlice.reducer;
