import { useQuery } from "@tanstack/react-query";
import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";

export const getDataKategoriBelajar = async () => {
  return await http.get(endpoint.COURSE_CATEGORIES);
};
// console.log(getDataKategoriBelajar, "hpp");

// const fetchDataMoviePopular = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;
//   const { data } = await http.get(_key, { params: _params });
//   return data;
// };

// const useMovieDataPopularQuery = (options) => {
//   return useQuery([endpoint.COURSE_CATEGORIES, options], fetchDataMoviePopular);
// };
// export { fetchDataMoviePopular, useMovieDataPopularQuery };
