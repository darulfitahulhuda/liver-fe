import { GetAddMentor } from "../../../services/admin/AddMentor";
import { setMentor } from "../../reducer/admin/addmentor";

const getMentor = (input) => async (dispatch) => {
  return await GetAddMentor(input)
    .then((result) => {
      dispatch(setMentor(input));
      return result;
    })
    .catch((err) => {});
};

export default getMentor;
