import { UpdateCourse } from "../../../services/admin/UbahCourse";
import { setUpdateCourse } from "../../reducer/admin/putcourse";

const UpdateDataCourse = (courseId, input) => async (dispatch) => {
  return await UpdateCourse(courseId, input)
    .then((result) => {
      dispatch(setUpdateCourse(input));
      return result;
    })
    .catch((err) => {});
};

export default UpdateDataCourse;
