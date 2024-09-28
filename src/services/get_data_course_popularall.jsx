import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";


export const reduxGetPopularall = async () => {
    return  await http.get(endpoint.COURSE_POPULARALL);
  } 