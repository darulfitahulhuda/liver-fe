import React, { useEffect } from "react";
import { NavbarResponsive } from "../assets/components/elements/NavbarResponsive";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataSearchCourse } from "../redux/action/searchCourse";
import level from "../assets/img/level.png";
import modul from "../assets/img/modul.png";
import time from "../assets/img/time.png";
import premium from "../assets/img/premium.png";
import Navbarr from "../assets/components/navbar";

export const Pagesearch = () => {
  const { namesearch } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Search.course.result);
  console.log(data, "data search");
  const navigate = useNavigate;

  useEffect(() => {
    search(namesearch);
  }, [namesearch]);

  const search = () => {
    dispatch(getDataSearchCourse(namesearch));
  };

  const formatToRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };
  return (
    <div>
      <div className="hidden desktop:block">
        <Navbarr />
      </div>
      <div className="block desktop:hidden">
        <NavbarResponsive />
      </div>
      <div className="p-[1.5rem] desktop:px-[4.5rem] desktop:py-[2rem]">
        <div className="flex items-center pb-[1rem] font-bold text-lg">
          Menampilkan "<span className="text-[#116E63] font-bold">{namesearch}</span>"
        </div>
        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-[3rem] desktop:gap-[2rem] font-semibold">
          {/* card */}
          {data &&
            data.map((courses) => (
              <div key={courses.id}>
                <Link to={`/detailKelas/${courses.id}`}>
                  <div className={`h-52 shadow-lg rounded-3xl ${courses.price === 0 ? "bg-green-500" : "bg-orange-500"}`}>
                    <img className="w-full h-2/5 bg-cover rounded-t-3xl" src={courses.image} />
                    <div className="px-2 py-3 space-y-1 bg-white rounded-b-3xl">
                      <div className="flex justify-between text-sm">
                        <p className="text-[#116E63] font-bold">{courses.category[0].category.name}</p>
                        <div className="flex items-center gap-1">
                          <svg fill="#F4CE14" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <p>{courses.rating}</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold">{courses.name}</p>
                      <p className="text-xs">{courses.mentor[0].mentor.name}</p>
                      <div className="flex text-xs font-normal gap-4 desktop:gap-5">
                        <div className="flex items-center gap-1">
                          <img src={level} />
                          <p className="text-[#116E63] font-semibold">{courses.level}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <img src={modul} />
                          <p>{courses.total_lesson} modul</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <img src={time} />
                          <p>{courses.total_duration} menit</p>
                        </div>
                      </div>
                      <div className={`flex items-center justify-center gap-2 text-xs text-white rounded-full ${courses.price === 0 ? "bg-[#116E63]" : "bg-[#F2A227]"} w-[30%]`}>
                        <img src={premium} />
                        {courses.price === 0 ? <p>Ikuti Kelas</p> : <p> {formatToRupiah(courses.price)} </p>}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
