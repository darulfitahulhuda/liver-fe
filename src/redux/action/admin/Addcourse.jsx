import { AddCourse } from "../../../services/admin/Addcourse";
import { setAddCourse } from "../../reducer/admin/addcourse";

const getCourse = (input) => async (dispatch) => {
  return await AddCourse(input)
    .then((result) => {
      dispatch(setAddCourse(input));
      return result;
    })
    .catch((err) => {});
};

export default getCourse;
