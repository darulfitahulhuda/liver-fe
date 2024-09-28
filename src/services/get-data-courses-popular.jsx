import http from "../utils/Http"
import { endpoint } from "../utils/endpoint"

export const reduxGetCourse = async (courseId) => {
    return  await http.get(endpoint.COURSE_POPULAR(courseId));
  } 