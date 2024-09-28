import { AddLesson, GetAddLesson } from "../../../services/admin/AddLesson";
import { setLesson } from "../../reducer/admin/addlesson";

const getLesson = (input) => async (dispatch) => {
  return await AddLesson(input)
    .then((result) => {
      dispatch(setLesson(input));
      return result;
    })
    .catch((err) => {});
};

export default getLesson;
