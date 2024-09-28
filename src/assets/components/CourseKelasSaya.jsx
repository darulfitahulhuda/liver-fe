import React, { useEffect } from "react";
import level from "../img/level.png";
import modul from "../img/modul.png";
import time from "../img/time.png";
import progress from "../img/progress.png";
import { Link } from "react-router-dom";

export const CourseKelasSaya = ({ filteredCourses, SearchInput }) => {
  const filterSearch = filteredCourses
    ? filteredCourses.filter((data) => {
        // let dataHasil = [];
        const courseName = data.name.toLowerCase().includes(SearchInput.toLowerCase());
        const categoryName = data.category.name.toLowerCase().includes(SearchInput.toLowerCase());
        const level = data.level.toLowerCase().includes(SearchInput.toLowerCase());
        return courseName || categoryName || level;
        // if (data) {
        //   const courseName = data?.name?.toLowerCase().includes(SearchInput?.toLowerCase());
        //   const categoryName = data?.category?.name.toLowerCase().includes(SearchInput?.toLowerCase());
        //   const level = data?.level?.toLowerCase().includes(SearchInput?.toLowerCase());
        //   if (courseName || categoryName || level) {
        //     dataHasil.push(data);
        //   }
        //   return dataHasil;
        // }
      })
    : [];
  // console.log(filteredCourses, "Filter Kelas Saya");
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
      <div className="pb-[1rem] px-[1rem] desktop:px-[4rem]">
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[3rem] desktop:gap-[2rem]">
          {console.log(filterSearch)}
          {filterSearch &&
            filterSearch.map((courses) => (
              <Link to={`/detailKelas/${courses.id}`}>
                <div key={courses.id} className="h-52 shadow-lg rounded-3xl">
                  <div className=" w-full h-2/5 rounded-t-3xl ">
                    <img src={courses.image} className="w-full h-full rounded-t-3xl"></img>
                  </div>
                  <div className="px-2 py-3 space-y-1 bg-white rounded-b-3xl">
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
                    <p className="text-xs">
                      <p className="text-xs">By {courses.mentor.name}</p>
                    </p>
                    <div className="flex text-xs font-normal gap-4 desktop:gap-5">
                      <div className="flex items-center gap-1">
                        <img src={level} />
                        <p className="text-[#116E63] font-semibold">{courses.level} Level</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={modul} />
                        <p>{courses.totalLessons} Modul</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={time} />
                        <p>{courses.totalDuration} Menit</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <img src={progress} />
                      <p>{courses.progress}%Completed</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
