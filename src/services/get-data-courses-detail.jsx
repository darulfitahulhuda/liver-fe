import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";


export const reduxGetCourseDetail = async (courseId) => {
    return  await http.get(endpoint.COURSE_DETAILS(courseId));
  } 