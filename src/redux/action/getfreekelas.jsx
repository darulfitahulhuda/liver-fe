import { reduxGetFree } from "../../services/get-data-free-kelassaya";
import { setfree } from "../reducer/getfreekelassaya";

const getDatafree = () => async (dispatch) => {
  return reduxGetFree()
    .then((result) => {
      dispatch(setfree(result.data));
    })
    .catch((err) => console.error(err, "error"));
};

export default getDatafree;
