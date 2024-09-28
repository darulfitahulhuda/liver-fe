import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxNotifikasi = async () => {
  return await http.get(endpoint.NOTIFIKASI);
};
