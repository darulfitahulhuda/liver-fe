import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const PostChapter = async (input) => {
  return await http.post(endpoint.GET_CHAPTER, input);
};
