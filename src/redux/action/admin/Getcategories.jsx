import { GetCategories } from "../../../services/admin/GetCategories";
import { setCategories } from "../../reducer/admin/getcategories";

const GetIdCategories = () => async (dispatch) => {
  return await GetCategories()
    .then((result) => {
      dispatch(setCategories(result.data.data));
    })
    .catch((err) => console.error(err, "error"));
};

export default GetIdCategories;
