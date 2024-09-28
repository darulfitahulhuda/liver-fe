import { reduxUpdateIsDone } from "../../services/post-data-updateisdone";
import { setUpdateIsDone } from "../reducer/PostUpdateIsDone";


const postUpdateIsDone = (courseId) => async (dispatch) => {
    return reduxUpdateIsDone(courseId).then((result) => {
      dispatch(setUpdateIsDone(result.data.data))
      console.log(result)
    }).catch((err) => 
    console.error(err, "error")
    );
  };

  export default postUpdateIsDone;