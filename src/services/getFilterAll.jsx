import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";

export const getFilterAll = async () => {
  return await http.get(endpoint.FILTER_SIDEBAR);
};
