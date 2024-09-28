import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const GetUser = async () => {
  return await http.get(endpoint.GET_USER);
};
