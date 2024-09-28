import { useMutation } from "@tanstack/react-query";
import { endpoint } from "../../utils/endpoint";
import http2 from "../../utils/Http2";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const DataProfil = async (input) => {
  return await http2
    .put(endpoint.AKUN_PROFILE, input)
    .then((result) => {
      toast.success("succes memperbarui akun");
    })
    .catch((err) => {
      toast.warning("gagal memperbarui akun");
    });
};

const useDataProfil = () => {
  return useMutation(DataProfil);
};
export { DataProfil, useDataProfil };
