import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxUpdatePass = async (input) => {
  return await http.put(endpoint.UPDATE_PASS, input);
};
