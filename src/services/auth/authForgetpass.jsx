import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxForgetPass = async (input) => {
    return await http.post(endpoint.FORGET_PASS, input);
  };
  
  export const reduxUpdatePass = async (input, token, email) => {
    return await http.put(`${endpoint.RESET_PASS}?token=${token ? token : ""}&email=${email ? email : ""}`,
    input,);
  };

  // export const reduxUpdatePass = async (input, token, email) => {
  //   return await http.put(endpoint.RESET_PASS, { input, token, email });
  // };