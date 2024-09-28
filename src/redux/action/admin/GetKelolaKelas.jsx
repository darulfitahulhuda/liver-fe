import { KelolaKelasRedux } from "../../../services/admin/KelolaKelas";
import { setKelolaKelas } from "../../reducer/admin/getchapter";

const GetDataKelola = () => async (dispatch) => {
  return await KelolaKelasRedux()
    .then((result) => {
      dispatch(setKelolaKelas(result.data.data.course));
      return true;
    })
    .catch((err) => console.error(err, "error"));
};

export default GetDataKelola;
