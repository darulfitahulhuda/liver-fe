import { reduxEnrollment } from "../../services/post-enrollment";
import { setCourseEnrollment } from "../reducer/PostEnrollment";


const postEnrollment = (courseId, input) => async (dispatch) => {
    return reduxEnrollment(courseId, input).then((result) => {
      dispatch(setCourseEnrollment(result.data.data))
      console.log(result)
      return result;
    }).catch((err) => 
    console.error(err, "error")
    );
  };

  export default postEnrollment;