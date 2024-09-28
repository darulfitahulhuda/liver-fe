import { reduxGetFilterAdm } from "../../../services/admin/FilterAdm";
import { setDataUsers } from "../../reducer/admin/filterAdm";

const getDataCourseMe = () => async (dispatch) => {
    return await reduxGetFilterAdm()
      .then((result) => {
        dispatch(setDataUsers(result.data.data));
        console.log(result);
      })
      .catch((err) => console.error(err, "error"));
  };
  
  export default getDataCourseMe;
  