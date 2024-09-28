import { reduxGetPaymentHistory } from "../../services/get-data-payment-history";
import { setPaymentHistory } from "../reducer/GetPaymentHistory";

const getDataPaymentHistory = () => async (dispatch) => {
    return reduxGetPaymentHistory().then((result) => {
      dispatch(setPaymentHistory(result.data.data))
      console.log(result.data.data, "Payment")
    }).catch((err) => 
    console.error(err, "error")
    );
  };
  
  export default getDataPaymentHistory;