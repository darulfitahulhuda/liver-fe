import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxGetFilterAdm = async () => {
    return await http.get(endpoint.FILTER_ADM);
  };