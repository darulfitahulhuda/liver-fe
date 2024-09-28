import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const AddLesson = async (input) => {
  return await http.post(endpoint.ADD_LESSON, input);
};
