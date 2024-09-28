import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";

export const reduxGetFree = async () => {
  return await http.get(endpoint.FREE_KELASSAYA);
};
