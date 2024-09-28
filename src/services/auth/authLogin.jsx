import { endpoint } from "../../utils/endpoint";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { useMutation } from "@tanstack/react-query";
import http from "../../utils/Http";

const fetchLogin = async (input) => {
  return await http
    .post(endpoint.LOGIN_USER, input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      window.location.href = "/home";
    })
    .catch((err) => {
      alert("Error Boss");
    });
};

const useLoginUser = () => {
  return useMutation(fetchLogin);
};

// Service Redux
export const reduxLoginUser = async (input) => {
  return await http.post(endpoint.LOGIN_USER, input);
};

export { useLoginUser, fetchLogin };
