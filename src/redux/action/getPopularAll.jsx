import { reduxGetPopularall } from "../../services/get_data_course_popularall";
import { setCoursePopularAll } from "../reducer/GetCoursePopularAll";


const getDataPopularAll = () => async (dispatch) => {
    return reduxGetPopularall().then((Response) => {
      dispatch(setCoursePopularAll(Response.data.data))
      console.log(Response)
    }).catch((err) => 
    console.error(err, "error")
    );
  };
  
  export default getDataPopularAll;