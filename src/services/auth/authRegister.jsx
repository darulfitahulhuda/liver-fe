import { toast } from "react-toastify";
import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";
import { useMutation } from "@tanstack/react-query";

const RegisterUser = async (input) => {
  try {
    await http.post(endpoint.REGISTER_USER, input);
    window.location.href = "/otp";
  } catch (error) {
    toast.warning("eror ");
  }
};

const useCreateUser = () => {
  return useMutation(RegisterUser);
};
export { RegisterUser, useCreateUser };

// redux
export const reduxRegisterUser = async (input) => {
  return await http.post(endpoint.REGISTER_USER, input);
};
