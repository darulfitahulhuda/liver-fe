import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const akmalganteng = async () => {
  return await http.get(endpoint.ADD_MENTOR);
};
