import { useQuery } from "@tanstack/react-query";
import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

// const fetchDelete = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;
//   const { dataDelete } = await http.delete(_key, { params: _params });
//   return dataDelete;
// };

// const useDelete = (options) => {
//   return useQuery([endpoint.DELETE_COURSE, options], fetchDelete);
// };
// export { fetchDelete, useDelete };

export const deleteCourse = async (courseId) => {
  return await http.delete(endpoint.DELETE_COURSE(courseId));
};
