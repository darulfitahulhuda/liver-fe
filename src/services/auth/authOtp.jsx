import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";
import { useMutation } from "@tanstack/react-query";

const RegisterOtp = async (input) => {
  try {
    await http.put(endpoint.VERIFY_OTP, input);
  } catch (error) {}
};

const useCreateOtp = () => {
  return useMutation(RegisterOtp);
};
export { RegisterOtp, useCreateOtp };

// redux
export const reduxOtpUser = async (input) => {
  return await http.post(endpoint.VERIFY_OTP, input);
};

export const reduxResendOtpUser = async (input) => {
  return await http.put(endpoint.RESEND_OTP, input);
};
