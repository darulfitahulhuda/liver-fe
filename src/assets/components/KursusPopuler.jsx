import React, { useEffect, useState } from "react";
import level from "../img/level.png";
import modul from "../img/modul.png";
import time from "../img/time.png";
import premium from "../img/premium.png";
import { Button } from "@nextui-org/button";
import { useDispatch, useSelector } from "react-redux";
import getDataPopular from "../../redux/action/getPopular";
import { Link, useNavigate } from "react-router-dom";
import { getDatakategori } from "../../redux/action/kategoribelajarrr";
import getDataPopularAll from "../../redux/action/getPopularAll";
import { KursusPopulerAll } from "./KursusPopulerAll";

export const KursusPopuler = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(1);
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("All");

  const dataPopular = useSelector((state) => state.coursePopular.coursesPopular.topCourses);
  const dataPopularAll = useSelector((state) => state.coursePopularAll.coursesPopularAll.topCourse);
  console.log(dataPopular, "Popular");

  const [all, setAll] = useState(dataPopularAll);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(getDataPopularAll());
    dispatch(getDataPopular(id));
  }, [dispatch, id]);

  const handleAll = () => {
    setAll(dataPopularAll);
    setShowAll(true);
    setActiveButton("All");
  };

  const handleCourse = (categoryId) => {
    setId(categoryId);
    setShowAll(false);
    setActiveButton(categoryId);
  };

  const belajar = useSelector((state) => state.kategori.kategori.categories);
  console.log(belajar, "belajar");

  useEffect(() => {
    dispatch(getDatakategori());
  }, [dispatch]);

  const formatToRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="px-[1rem] desktop:px-[9rem] py-[1.5rem] space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Kursus Populer</p>
        <button
          className="text-xs font-bold content-center text-[#116E63] hover:opacity-70"
          onClick={() => {
            navigate("/berandakelas");
          }}
        >
          Lihat Semua
        </button>
      </div>

      <div className="flex space-x-2 scroll-pl-6 snap-x overflow-scroll scrollbar-hide">
        <Button onClick={handleAll} className={`snap-start relative bg-[#E7F0EF] w-36 px-16 rounded-full text-xs font-bold ${activeButton === "All" && "bg-[#116E63] text-white"}`}>
          All
        </Button>
        {belajar &&
          belajar.map((courses) => (
            <div className="space-y-5" key={courses.id}>
              <Button onClick={() => handleCourse(courses.id)} className={`bg-[#E7F0EF] snap-start relative w-36 rounded-full text-xs font-bold ${activeButton === courses.id && "bg-[#116E63] text-white"}`}>
                {courses.name}
              </Button>
            </div>
          ))}
      </div>

      {showAll ? (
        <KursusPopulerAll all={dataPopularAll} />
      ) : (
        <div className=" grid grid-cols-1 desktop:grid-cols-3 gap-[2rem]">
          {dataPopular &&
            dataPopular.map((courses) => (
              <div key={courses.course_id}>
                <Link to={`/detailKelas/${courses.course_id}`}>
                  <div className="w-full h-52 shadow-lg rounded-3xl">
                    <img className="w-full h-2/5 bg-cover rounded-t-3xl" src={courses.course.image} />
                    <div className="px-2 py-1 space-y-1 ">
                      <div className="flex justify-between text-sm ">
                        <p className="text-[#116E63] font-bold">{courses.category.name}</p>
                        <div className="flex items-center gap-1">
                          <svg fill="#F4CE14" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <p>{courses.course.rating}</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                        {courses.course.name}
                      </p>
                      <p className="text-xs">{courses.course.mentor[0]?.mentor.name}</p>
                      <div className="flex text-xs font-normal gap-4 ">
                        <div className="flex items-center gap-1">
                          <img src={level} />
                          <p className="text-[#116E63] font-semibold">{courses.course.level}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <img src={modul} />
                          <p>{courses.course.total_lesson} modul</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <img src={time} />
                          <p>{courses.course.total_duration} menit</p>
                        </div>
                      </div>
                      <button className={`flex text-xs px-4 py-1 rounded-full gap-8 text-white font-semibold ${courses.course.price === 0 ? "bg-[#116E63]" : "bg-[#F2A227]"}`}>
                        {courses.course.price === 0 ? (
                          <p>Ikuti Kelas</p>
                        ) : (
                          <div className="flex gap-1">
                            <img src={premium} />
                            <p>Beli</p>
                            <p> {formatToRupiah(courses.course.price)} </p>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
