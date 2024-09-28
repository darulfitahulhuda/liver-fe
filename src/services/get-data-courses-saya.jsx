import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";

export const reduxGetCourseMe = async () => {
    return await http.get(endpoint.COURSE_ME);
  };