import { useQuery } from "@tanstack/react-query";
import { endpoint } from "../../utils/endpoint";
import http from "../../utils/Http";

// const fetchKelolaKelas = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;
//   const { data } = await http.get(_key, { params: _params });
//   return data;
// };

// const useDataKelolaKelas = (options) => {
//   return useQuery([endpoint.KELOLA_KELAS, options], fetchKelolaKelas);
// };
// export { fetchKelolaKelas, useDataKelolaKelas };

// redux
export const KelolaKelasRedux = async () => {
  return await http.get(endpoint.KELOLA_KELAS);
};
