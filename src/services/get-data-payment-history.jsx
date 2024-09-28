import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";

export const reduxGetPaymentHistory = async () => {
  return await http.get(endpoint.PAYMENT_HISTORY);
};
