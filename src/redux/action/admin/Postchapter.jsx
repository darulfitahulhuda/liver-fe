import { toast } from "react-toastify";
import { PostChapter } from "../../../services/admin/PostChapter";
import { setChapterPost } from "../../reducer/admin/postchapter";

const GetDataChapterPost = (input) => async (dispatch) => {
  return await PostChapter(input)
    .then((result) => {
      dispatch(setChapterPost(input));
      // alert("succes");
    })
    .catch((err) => console.error(err, "error"));
};

export default GetDataChapterPost;
