import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const GetChapter = async () => {
  return await http.get(endpoint.GET_CHAPTER);
};
