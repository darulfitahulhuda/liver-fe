import { akmalganteng } from "../../../services/admin/GetMentor";
import { setMentorGet } from "../../reducer/admin/getmentor";

const DataDAtaM = () => async (dispatch) => {
  return await akmalganteng()
    .then((result) => {
      dispatch(setMentorGet(result.data.data));
    })
    .catch((err) => console.error(err, "error"));
};

export default DataDAtaM;
