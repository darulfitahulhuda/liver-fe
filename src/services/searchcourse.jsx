import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";

export const getDataSearch = async (query) => {
  return await http.get(`${endpoint.COURSE_SEARCH}?name=${query ? query : ""}`);
};
