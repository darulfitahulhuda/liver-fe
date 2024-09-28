import { useMutation } from "@tanstack/react-query";
import http from "../../utils/Http";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { endpoint } from "../../utils/endpoint";


const LoginAdm = async (input) => {
    return await http
      .post(endpoint.ADMIN_LOGIN, input)
      .then((result) => {
          CookieStorage.set(CookieKeys.AuthToken, result.data.data);
          window.location.href = "/HomeAdm";
          console.log(result, "tes result");
        return result;
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  
  const useLoginAdm = () => {
    return useMutation(LoginAdm);
  };
  
  export { LoginAdm, useLoginAdm };

//   redux

export const reduxAdmLogin= async (input)=>{
    return await http.post(endpoint.ADMIN_LOGIN, input)
}