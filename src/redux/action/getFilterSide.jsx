import { getFilterAll } from "../../services/getFilterAll";
import { setFilterSide } from "../reducer/getFilterSide";

const getFilterSideAll = () => async (dispatch) => {
  return await getFilterAll()
    .then((result) => {
      dispatch(setFilterSide(result.data.data));
      console.log(result);
    })
    .catch((err) => console.error(err, "error"));
};

export default getFilterSideAll;
