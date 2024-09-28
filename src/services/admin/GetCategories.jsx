import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const GetCategories = async () => {
  return await http.get(endpoint.COURSE_CATEGORIES);
};
