import { reduxUpdatePass } from "../../../services/akun/updatepass";
import { setupdatepass } from "../../reducer/akun/UpdatePass";

const getupdate = (input) => async (dispatch) => {
  return reduxUpdatePass(input)
    .then((result) => {
      dispatch(setupdatepass(input));
      return result;
    })
    .catch((err) => console.error(err, "error"));
};

export default getupdate;
