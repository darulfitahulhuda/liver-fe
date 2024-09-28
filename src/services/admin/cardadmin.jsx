import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const GetDataCard = async () => {
  return await http.get(endpoint.CARD_ADM);
};
