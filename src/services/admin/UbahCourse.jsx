import { useMutation } from "@tanstack/react-query";
import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

const UpdateCourse = async (input) => {
  return await http
    .put(endpoint.GET_COURSE, input)
    .then((result) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};

const useDataUpdateCourse = () => {
  return useMutation(UpdateCourse);
};
export { UpdateCourse, useDataUpdateCourse };

// export const UpdateCourse = (courseId) => async (input) => {
//   return await http.put(endpoint.GET_COURSE(courseId), input);
// };
