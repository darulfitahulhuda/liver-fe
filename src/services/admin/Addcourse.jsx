import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const AddCourse = async (input) => {
  return await http.post(endpoint.GET_COURSE, input);
};
