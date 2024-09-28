import { reduxGetCourse } from "../../services/get-data-courses-popular";
import { setCoursePopular } from "../reducer/GetCoursePopular";


const getDataPopular = (courseId) => async (dispatch) => {
    return reduxGetCourse(courseId).then((result) => {
      dispatch(setCoursePopular(result.data.data))
      console.log(result)
    }).catch((err) => 
    console.error(err, "error")
    );
  };
  
  export default getDataPopular;