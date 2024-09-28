import { GetChapter } from "../../../services/admin/GetChapter";
import { setChapter } from "../../reducer/admin/getchapter";

const GetDataChapter = () => async (dispatch) => {
  return await GetChapter()
    .then((result) => {
      dispatch(setChapter(result.data.data));
    })
    .catch((err) => console.error(err, "error"));
};

export default GetDataChapter;
