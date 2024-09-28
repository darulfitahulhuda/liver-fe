import { toast } from "react-toastify";
import { reduxRegisterUser } from "../../../services/auth/authRegister";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";
import { setRegis, setToken, setUserRegis } from "../../reducer/auth/authregister";

export const RegisterUserrr = (input) => async (dispatch) => {
  try {
    const result = await reduxRegisterUser(input);
    // CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    dispatch(setRegis(true));
    dispatch(setUserRegis(input));
    // dispatch(setToken(result.data.data.token));
    return true;
  } catch (err) {
    return false;
  }
};
