import { reduxGetCourseAll } from "../../services/get-data-courses-all";
import { setCourseAll } from "../reducer/GetCourseAll";

const getDataAll = () => async (dispatch) => {
  return await reduxGetCourseAll()
    .then((result) => {
      dispatch(setCourseAll(result.data.data));
      // console.log(result);
    })
    .catch((err) => console.error(err, "error"));
};

// const getDataAll = (sortBy) => async (dispatch) => {
//   return await reduxGetCourseAll(sortBy)
//     .then((result) => {
//       dispatch(setCourseAll(result.data.data));
//       // console.log(result);
//     })
//     .catch((err) => console.error(err, "error"));
// };

export default getDataAll;
