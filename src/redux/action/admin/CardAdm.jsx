import { GetDataCard } from "../../../services/admin/cardadmin";
import { setCardAdmin } from "../../reducer/admin/CardAdmin";

const getDataCard = () => async (dispatch) => {
  return await GetDataCard()
    .then((result) => {
      dispatch(setCardAdmin(result.data.data));
    })
    .catch((err) => console.error(err, "error"));
};

export default getDataCard;
