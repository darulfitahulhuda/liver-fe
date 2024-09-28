import { deleteCourse } from "../../../services/admin/DeleteCourse";
import { setDeleteCourse } from "../../reducer/admin/deletecourse";

const getDeletecourse = (courseId) => async (dispatch) => {
  return deleteCourse(courseId)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.error(err, "error"));
};

export default getDeletecourse;
