import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";

export const reduxUpdateIsDone = async (courseId) => {
    return await http.post(endpoint.UPDATE_ISDONE(courseId));
  };