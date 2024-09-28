import { toast } from "react-toastify";
import { reduxLoginUser } from "../../../services/auth/authLogin";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";
import { setIsLoggedIn, setName, setToken, setUserLogin } from "../../reducer/auth/authSliceLoginUser";

export const authLoginUser = (input) => async (dispatch) => {
  return reduxLoginUser(input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn("true"));
      dispatch(setUserLogin(input));
      dispatch(setName(result.data.data.users));
      return result;
    })
    .catch((err) => {
      // if (err.response) {
      //   if (err.response.status >= 400 && err.response.status <= 500) {
      //     console.log(err.response.data.err);
      //   } else {
      //     console.error("unexpected Error", err);
      //   }
      // }

      dispatch(setUserLogin(input));
      throw err;
    });
};

export const LogOut = () => (dispatch) => {
  dispatch(setToken(""));
  dispatch(setIsLoggedIn(false));
  CookieStorage.remove(CookieKeys.AuthToken);
  window.location.href = "/";
};
