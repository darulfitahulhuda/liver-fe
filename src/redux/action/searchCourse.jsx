import { getDataSearch } from "../../services/searchcourse";
import { Searchcourse } from "../reducer/search";

export const getDataSearchCourse = (query) => async (dispatch) => {
  return getDataSearch(query)
    .then((Response) => {
      dispatch(Searchcourse(Response.data.data));
    })
    .catch((err) => {});
};
