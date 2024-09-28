import axios from "axios";
import { reduxForgetPass, reduxUpdatePass } from "../../../services/auth/authForgetpass";
import { setForget, setUpdate } from "../../reducer/auth/forgetPassSlice";

export const getForgetPassAction = (email) => async (dispatch) => {
  return reduxForgetPass(email)
    .then((result) => {
      dispatch(setForget(result.data.data));
      return true;
    })
    .catch((err) => {
      console.error("unexpected Error", err);
    });
};

export const getUpdatePass = (input, token, email) => async (dispatch) => {
  reduxUpdatePass(input, token, email)
    .then((result) => {
      console.log("result -> reduxUpdatePass", result);
      dispatch(setUpdate(result.data.data));
      // window.location.href = '/updatepass'
      return result;
    })
    .catch((err) => {
      console.error("unexpected Error", err);
    });
};
