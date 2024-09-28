import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import level from "../img/level.png";
import modul from "../img/modul.png";
import time from "../img/time.png";
import premium from "../img/premium.png";
import getDataPopularAll from "../../redux/action/getPopularAll";
import { useDispatch } from "react-redux";

export const KursusPopulerAll = ({ all }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getDataPopularAll());
  // }, [dispatch]);

  const formatToRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div>
      <div className=" grid grid-cols-1 desktop:grid-cols-3 gap-[2rem]">
        {all &&
          all.slice(0, 3).map((courseAll) => (
            <div key={courseAll}>
              <Link to={`/detailKelas/${courseAll.course_id}`}>
                <div className="w-full h-52 shadow-lg rounded-3xl">
                  <img className="w-full h-2/5 bg-cover rounded-t-3xl" src={courseAll.course.image} />
                  <div className="px-2 py-1 space-y-1 ">
                    <div className="flex justify-between text-sm ">
                      <p className="text-[#116E63] font-bold">{courseAll.category.name}</p>
                      <div className="flex items-center gap-1">
                        <svg fill="#F4CE14" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <p>{courseAll.course.rating}</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold">{courseAll.course.name}</p>
                    <p className="text-xs">{courseAll.course.mentor[0]?.mentor.name}</p>
                    <div className="flex text-xs font-normal gap-4 ">
                      <div className="flex items-center gap-1">
                        <img src={level} />
                        <p className="text-[#116E63] font-semibold">{courseAll.course.level}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={modul} />
                        <p>{courseAll.course.total_lesson} modul</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={time} />
                        <p>{courseAll.course.total_duration} menit</p>
                      </div>
                    </div>
                    <button className={`flex text-xs px-4 py-1 rounded-full gap-8 text-white font-semibold ${courseAll.course.price === 0 ? "bg-[#116E63]" : "bg-[#F2A227]"}`}>
                      {courseAll.course.price === 0 ? (
                        <p>Ikuti Kelas</p>
                      ) : (
                        <div className="flex gap-1">
                          <img src={premium} />
                          <p>Beli</p>
                          <p>{formatToRupiah(courseAll.course.price)}</p>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
