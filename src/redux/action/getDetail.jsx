import { setCourseDetail } from "../reducer/GetCourseDetail";
import {reduxGetCourseDetail} from "../../services/get-data-courses-detail"


const getDataDetail = (courseId) => async (dispatch) => {
    return reduxGetCourseDetail(courseId).then((result) => {
      dispatch(setCourseDetail(result.data.data))
      console.log(result.data.data)
    }).catch((err) => 
    console.error(err, "error")
    );
  };
  
  export default getDataDetail;