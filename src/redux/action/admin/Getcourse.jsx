import { GetCourse } from "../../../services/admin/GetCourse";
import { setCourse } from "../../reducer/admin/getcourse";

const GetDataCourse = () => async (dispatch) => {
  return await GetCourse()
    .then((result) => {
      dispatch(setCourse(result.data.data));
    })
    .catch((err) => console.error(err, "error"));
};

export default GetDataCourse;
