import { toast } from "react-toastify";
import http2 from "../../utils/Http2";
import { endpoint } from "../../utils/endpoint";
import { useMutation } from "@tanstack/react-query";

const AddKategori = async (input) => {
  return await http2
    .post(endpoint.ADD_KATEGORI, input)
    .then((result) => {
      toast.success("succes menambahkan kategori");
    })
    .catch((err) => {
      toast.warning("gagal menambahkan kategori");
    });
};

const useAddKategori = () => {
  return useMutation(AddKategori);
};
export { AddKategori, useAddKategori };
