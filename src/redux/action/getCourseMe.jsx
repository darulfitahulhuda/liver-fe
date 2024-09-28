import { reduxGetCourseMe } from "../../services/get-data-courses-saya";
import { setCourseMe } from "../reducer/getCoursesMe";

const getDataCourseMe = () => async (dispatch) => {
  return await reduxGetCourseMe()
    .then((result) => {
      dispatch(setCourseMe(result.data.data));
      // console.log(result);
    })
    .catch((err) => console.error(err, "error"));
};

export default getDataCourseMe;
