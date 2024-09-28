import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDatakategori } from "../../redux/action/kategoribelajarrr";
import { useNavigate } from "react-router-dom";

export const KategoriBelajar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getkategoribelajarrrr = () => {
    dispatch(getDatakategori());
  };

  const belajar = useSelector((state) => state.kategori.kategori.categories);
  console.log(belajar, "belajar");

  useEffect(() => {
    getkategoribelajarrrr();
  }, []);

  return (
    <div className="bg-[#CFE2E080] px-[1rem] desktop:px-[9rem] py-[1.5rem]">
      <div className="flex justify-between">
        <span className="text-xl font-bold text-[#000000]">Kategori Belajar</span>
        <button
          onClick={() => {
            navigate("/berandakelas");
          }}
          className="text-xs font-bold text-[#116E63] hover:opacity-70"
        >
          Lihat Semua
        </button>
      </div>

      <div className="grid grid-cols-2 desktop:grid-cols-12 py-5 gap-[2rem]">
        {belajar &&
          belajar.slice(0, 6).map((course) => (
            <div className="space-y-5 col-span-2" key={course.id}>
              <img src={course.image} className="flex w-full h-[136px] rounded-3xl "></img>
              <div className="text-center font-bold text-sm">{course.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
