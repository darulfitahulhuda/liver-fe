import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const GetAddMentor = async (input) => {
  return await http.post(endpoint.ADD_MENTOR, input);
};
