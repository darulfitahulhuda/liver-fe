import React from "react";
import level from "../img/level.png";
import modul from "../img/modul.png";
import time from "../img/time.png";
import premium from "../img/premium.png";
import { Link } from "react-router-dom";

export const CourseKelasAll = ({ filterData, SearchInput }) => {

  const filterSearch = filterData
    ? filterData.filter((item) => {
        const courseName = item.name.toLowerCase().includes(SearchInput.toLowerCase());
        const categoryName = item.category.name.toLowerCase().includes(SearchInput.toLowerCase());
        // const rating = item.rating.toString().includes(SearchInput.toLowerCase());
        const mentor = item.mentor.name.toLowerCase().includes(SearchInput.toLowerCase());
        const level = item.level.toLowerCase().includes(SearchInput.toLowerCase());
        // const lesson = item.total_lesson.toString().includes(SearchInput.toLowerCase());
        // const duration = item.total_duration.toString().includes(SearchInput.toLowerCase());
        return courseName || categoryName || mentor || level;
      })
    : [];

  // console.log(dataAll, "data all")
  // console.log(filterData, "fiterData nih")
  console.log(filterSearch, "filter search");

  return (
    <div>
      {SearchInput &&
        (filterSearch.length > 0 ? (
          <div className="flex items-center pl-[1rem] desktop:pl-[4.5rem] pb-[1rem] font-bold text-lg">
            Menampilkan "<span className="text-[#116E63] font-bold">{SearchInput}</span>"
          </div>
        ) : (
          <div className="flex pl-[1rem] desktop:pl-[4.5rem] pb-[1rem] font-bold text-lg h-screen">
            "<span className="text-[#116E63] font-bold">{SearchInput}</span>" tidak ditemukan
          </div>
        ))}

      <div className="pb-[3rem] px-[1rem] desktop:px-[4rem]">
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[3rem] desktop:gap-[2rem]">
          {/* card */}
          {filterSearch &&
            filterSearch.map((courses) => (
              <Link to={`/detailKelas/${courses.id}`}>
                <div key={courses.id} className="h-[16rem] bg-white shadow-lg rounded-3xl">
                  <img src={courses.image} className="bg-emerald-500 w-full h-2/5 rounded-t-3xl "></img>
                  <div className="px-2 py-3 space-y-1 rounded-b-3xl">
                    <div className="flex justify-between text-sm">
                      <p className="text-[#116E63] font-bold">{courses.category.name}</p>
                      <div className="flex items-center gap-1">
                        <svg fill="#F4CE14" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <p>{courses.rating}</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold">{courses.name}</p>
                    <p className="text-xs">By {courses.mentor.name}</p>
                    <div className="flex text-xs font-normal gap-4 desktop:gap-5">
                      <div className="flex items-center gap-1">
                        <img src={level} />
                        <p className="text-[#116E63] font-semibold">{courses.level} Level</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={modul} />
                        <p>{courses.total_lesson} Modul</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={time} />
                        <p>{courses.total_duration} Menit</p>
                      </div>
                    </div>
                    {courses.price != 0 ? (
                      <button className="flex mt-1 py-1 items-center justify-center gap-2 text-xs text-white rounded-full bg-[#F2A227] w-[30%]">
                        <img src={premium} />
                        <p>Premium</p>
                      </button>
                    ) : (
                      <button className="flex mt-1 py-1 items-center justify-center text-xs text-white rounded-full bg-[#116E63] w-[30%]">
                        <p>Mulai Kelas</p>
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
