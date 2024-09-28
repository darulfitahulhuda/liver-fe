import { toast } from "react-toastify";
import { reduxOtpUser, reduxResendOtpUser } from "../../../services/auth/authOtp";
import { setResend, setVerify } from "../../reducer/auth/otp";

export const getVerifyOtp = (email) => async (dispatch) => {
  return reduxOtpUser(email)
    .then((result) => {
      dispatch(setVerify(result.data.data));
      return true;
    })
    .catch((err) => {});
};

export const getResendOtp = (email) => async (dispatch) => {
  return reduxResendOtpUser(email)
    .then((result) => {
      dispatch(setResend(result.data.data));
      return true;
    })
    .catch((err) => {});
};
