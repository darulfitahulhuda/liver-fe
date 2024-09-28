import { UpdateCourse } from "../../../services/admin/UbahCourse";

const UpdateDataCourse = (courseId, input) => async (dispatch) => {
  return await UpdateCourse(courseId, input)
    .then((result) => {
      //   dispatch(setUpdateCourse(input));
      return result;
    })
    .catch((err) => {});
};

export default UpdateDataCourse;
