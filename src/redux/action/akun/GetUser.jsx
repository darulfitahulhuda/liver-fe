import { GetUser } from "../../../services/akun/getme";
import { setIsUserIn } from "../../reducer/akun/getme";

export const GetUserrr = () => async (dispatch) => {
  GetUser()
    .then((result) => {
      dispatch(setIsUserIn(result.data.data));
    })
    .catch((err) => {});
};
