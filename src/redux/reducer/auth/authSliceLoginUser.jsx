import { createSlice } from "@reduxjs/toolkit";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";

const initialState = {
  token: CookieStorage.get(CookieKeys.AuthToken),
  isLogin: "",
  user: "",
  name: "",
};

const authLoginUserSlice = createSlice({
  name: "LoginUserAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      // state.token = { ...state.token, token: action.payload };
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLogin = action.payload;
      // state.isRegister = { ...state.isRegister, isRegister: action.payload };
    },
    setUserLogin: (state, action) => {
      // state.user = { ...state.user, user: action.payload };
      state.user = action.payload;
    },
    setName: (state, action) => {
        state.name = action.payload
      }
  },
});

export const { setToken, setIsLoggedIn, setUserLogin, setName } = authLoginUserSlice.actions;

export default authLoginUserSlice.reducer;
