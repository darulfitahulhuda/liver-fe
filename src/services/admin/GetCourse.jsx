import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const GetCourse = async () => {
  return await http.get(endpoint.GET_COURSE);
};
