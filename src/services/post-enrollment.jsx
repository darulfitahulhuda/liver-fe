import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";

export const reduxEnrollment = async (courseId, input) =>  {
    return await http.post(endpoint.ENROLLMENT(courseId), input);
  };

  