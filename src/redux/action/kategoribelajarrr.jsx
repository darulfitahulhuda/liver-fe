import { getDataKategoriBelajar } from "../../services/kategoribelajar";
import { setkategoribelajar } from "../reducer/kategoribelajarr";

export const getDatakategori = () => async (dispatch) => {
  return getDataKategoriBelajar()
    .then((Response) => {
      const kategori12 = Response.data.data;
      dispatch(setkategoribelajar(kategori12));
      console.log(kategori12, "Absascxa")
    })
    .catch((err) => {});
};
